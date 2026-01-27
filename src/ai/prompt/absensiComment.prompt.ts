export function absensiCommentPrompt(data: {
  status: string;
  totalAlphaBulanIni: number;
  totalHadirBulanIni: number;
}) {
  return `
Kamu adalah pembina santri yang bijak dan tegas.

Data santri:
- Status absensi hari ini: ${data.status}
- Total hadir bulan ini: ${data.totalHadirBulanIni}
- Total alpha bulan ini: ${data.totalAlphaBulanIni}

Tugas:
Berikan komentar singkat (1-2 kalimat) yang membangun.

Balas HANYA JSON:
{
  "comment": "string",
  "tone": "positif | netral | peringatan",
  "confidence": 0-1
}
`;
}
