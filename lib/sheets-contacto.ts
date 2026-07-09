import { GoogleAuth } from "google-auth-library";
import type { ContactInput } from "./validation-contacto";
import { MOTIVO_CONTACTO_LABELS } from "./validation-contacto";

export type SheetsResult = { saved: true } | { saved: false; reason: string };

const SHEETS_SCOPE = "https://www.googleapis.com/auth/spreadsheets";
const DEFAULT_TAB = "Contacto General";

function getAuth(): GoogleAuth | null {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;

  if (!clientEmail || !privateKey) return null;

  return new GoogleAuth({
    credentials: {
      client_email: clientEmail,
      // En Vercel las variables de entorno no preservan saltos de línea reales;
      // se guardan como "\n" literal y hay que convertirlos aquí.
      private_key: privateKey.replace(/\\n/g, "\n"),
    },
    scopes: [SHEETS_SCOPE],
  });
}

export async function appendContactRow(
  data: ContactInput,
  meta: { pageOrigin: string }
): Promise<SheetsResult> {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const tab = process.env.GOOGLE_SHEETS_CONTACTO_TAB || DEFAULT_TAB;

  const auth = getAuth();
  if (!auth || !spreadsheetId) {
    return {
      saved: false,
      reason:
        "Faltan variables de entorno de Google Sheets (GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY o GOOGLE_SHEETS_SPREADSHEET_ID).",
    };
  }

  try {
    const client = await auth.getClient();
    const { token } = await client.getAccessToken();

    const range = `${encodeURIComponent(tab)}!A:H`;
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=USER_ENTERED`;

    // Sin IP ni user-agent, según regla explícita para esta pestaña.
    const row = [
      new Date().toISOString(),
      data.nombre,
      data.telefono,
      data.email,
      MOTIVO_CONTACTO_LABELS[data.motivo],
      data.mensaje || "",
      meta.pageOrigin,
      "Contacto general",
    ];

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ values: [row] }),
    });

    if (!res.ok) {
      const body = await res.text();
      return { saved: false, reason: `Sheets API ${res.status}: ${body}` };
    }

    return { saved: true };
  } catch (err) {
    return {
      saved: false,
      reason: err instanceof Error ? err.message : "Error desconocido de Google Sheets.",
    };
  }
}
