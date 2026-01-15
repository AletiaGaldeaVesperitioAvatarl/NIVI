import { PrismaClient, MataPelajaran } from "../../dist/generated";

export class MataPelajaranRepository {
    constructor(private prisma: PrismaClient) {}

    //create
    create = async (data: {
        nama: string;
        kode: string;
        kelasId: number;
        pengajarId: number
    }): Promise<MataPelajaran> => {
        return this.prisma.mataPelajaran.create({
            data,
            include: {
                kelas: true,
                pengajar: true,
            },
        });
    };

    //getall
    getAll = async(): Promise<MataPelajaran[]> => {
        return this.prisma.mataPelajaran.findMany({
            include: {
                kelas: true,
                pengajar: true,
            },
        });
    };

    //getbyid
    getById = async (id: number): Promise<MataPelajaran[] | null> => {
        return this.prisma.mataPelajaran.findMany({
             where: {id},
            include: {
                kelas: true,
                pengajar: true,
            },
        });
    };

    // getbykelas
    getByKelas = async(kelasId: number): Promise<MataPelajaran[]> => {
        return this.prisma.mataPelajaran.findMany({
            where: {kelasId},
            include: {
                pengajar: true,
            },
        });
    };

    // getByPengajar
    getByPengajar = async(pengajarId: number): Promise<MataPelajaran[]> => {
        return this.prisma.mataPelajaran.findMany({
            where: {pengajarId},
            include: {
                kelas: true,
            },
        });
    };

    // delete
    delete = async(id: number): Promise<MataPelajaran[]> => {
        return this.prisma.mataPelajaran.findMany({
            where: {id}
        });
    };
}