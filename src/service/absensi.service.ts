type CreateAbsensiDTO = {
  userId?: number
  status?: string
  tanggal?: string
}

export const createAbsensi = async (data: CreateAbsensiDTO) => {
  return {
    id: 1,
    userId: data.userId ?? 1,
    status: data.status ?? "HADIR",
    tanggal: data.tanggal ?? new Date().toISOString()
  }
}

export const getAllAbsensi = async () => {
  return [
    {
      id: 1,
      userId: 1,
      status: "HADIR",
      tanggal: new Date().toISOString()
    }
  ]
}
