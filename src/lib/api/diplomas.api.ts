// api/diplomas.api.ts
export async function getDiplomas({ page = 1, limit = 6 }: { page?: number; limit: number }) {
  const res = await fetch(`/api/diplomas?page=${page}&limit=${limit}`);
  if (!res.ok) throw new Error("Failed to fetch diplomas");

  const data: APIResponse<PaginatedResponse<GetDiplomasResponse>> = await res.json();

  if ("code" in data) throw new Error("Failed to fetch diplomas");

  return data;
}
