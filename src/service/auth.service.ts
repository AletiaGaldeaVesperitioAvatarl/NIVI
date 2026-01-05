type LoginDTO = {
  email: string
  password: string
}

export const login = async (data: LoginDTO) => {
  if (data.email !== "admin@mail.com") {
    throw new Error("Email tidak ditemukan")
  }

  return {
    token: "dummy-jwt-token",
    user: {
      id: 1,
      nama: "Admin",
      role: "ADMIN"
    }
  }
}
