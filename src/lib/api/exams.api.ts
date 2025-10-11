export async function getExams({
  subjectId,
  page = 1,
  limit = 6,
}: {
  subjectId: string;
  page?: number;
  limit: number;
}) {
  const res = await fetch(`/api/exams?subject=${subjectId}&page=${page}&limit=${limit}`);
  if (!res.ok) throw new Error("Failed to fetch diplomas");

  const data: APIResponse<PaginatedResponse<GetExamsBySubjectResponse>> = await res.json();

  if ("code" in data) throw new Error("Failed to fetch diplomas");

  return data;
}
