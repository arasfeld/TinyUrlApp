const API_URL = 'api/url';

export async function getUrls() {
  const response = await fetch(API_URL);
  if (response.ok) {
    return response.json();
  }
  return [];
}

export async function getUrl(shortUrl: string) {
  const response = await fetch(`${API_URL}/${shortUrl}`);
  if (response.ok) {
    return response.json();
  }
  return null;
}

export async function createUrl(longUrl: string, shortUrl?: string) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ longUrl, shortUrl }),
  });
  return response.json();
}
