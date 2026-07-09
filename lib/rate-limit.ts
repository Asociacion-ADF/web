// Rate limit básico en memoria, por IP. Suficiente para el volumen actual
// del sitio; no es preciso entre instancias serverless distintas ni
// sobrevive a un cold start. Si el spam aumenta, migrar a un almacén
// compartido (ej. Upstash Redis) sin cambiar la firma de esta función.
const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;

const hits = new Map<string, number[]>();

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(ip) ?? []).filter(
    (t) => now - t < WINDOW_MS
  );

  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    hits.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  hits.set(ip, timestamps);
  return false;
}
