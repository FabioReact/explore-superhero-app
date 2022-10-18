export const fetcher = {
  async get<T = unknown>(url: string): Promise<T> {
    const response = await fetch(url);
    return response.json();
  },
};
