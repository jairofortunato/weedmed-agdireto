const STORAGE_KEY = "weedmed_utms";
const TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 days
const UTM_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid",
  "ttclid",
] as const;

interface StoredUTMs {
  params: Record<string, string>;
  timestamp: number;
}

export function captureUTMs(): void {
  if (typeof window === "undefined") return;
  const search = new URLSearchParams(window.location.search);
  const captured: Record<string, string> = {};
  for (const key of UTM_PARAMS) {
    const val = search.get(key);
    if (val) captured[key] = val;
  }
  if (Object.keys(captured).length === 0) return;
  const payload: StoredUTMs = { params: captured, timestamp: Date.now() };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (_) {}
}

export function getUTMs(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getFallbackUTMs();
    const stored: StoredUTMs = JSON.parse(raw);
    if (Date.now() - stored.timestamp > TTL_MS) {
      localStorage.removeItem(STORAGE_KEY);
      return getFallbackUTMs();
    }
    return stored.params;
  } catch (_) {
    return getFallbackUTMs();
  }
}

function getFallbackUTMs(): Record<string, string> {
  const search = new URLSearchParams(window.location.search);
  const result: Record<string, string> = {};
  for (const key of UTM_PARAMS) {
    const val = search.get(key);
    if (val) result[key] = val;
  }
  return result;
}

export function buildUrlWithUTMs(baseUrl: string): string {
  const utms = getUTMs();
  if (Object.keys(utms).length === 0) return baseUrl;
  try {
    const url = new URL(baseUrl);
    for (const [key, val] of Object.entries(utms)) {
      url.searchParams.set(key, val);
    }
    return url.toString();
  } catch (_) {
    return baseUrl;
  }
}
