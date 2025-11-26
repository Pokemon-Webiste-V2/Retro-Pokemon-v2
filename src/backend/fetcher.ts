export default async function fetcher(url: any) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
