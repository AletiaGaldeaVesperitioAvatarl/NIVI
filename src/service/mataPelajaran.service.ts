import { MataPelajaran } from "../../dist/generated";
import { MataPelajaranRepository } from "../repository/mataPelajaran.repository";

export class MataPelajaranService{
    constructor(private mapelRepo: MataPelajaranRepository) {}

    //createMapel
    createMapel = async(
        nama: string,
        kode: string,
        kelasId: number,
        pengajarId: number,
    ): Promise<MataPelajaran> => {
        return this.mapelRepo.create({
            nama,
            kode,
            kelasId,
            pengajarId,
        });
    };

    // getAllMapel
    getAll = async (): Promise<MataPelajaran[]> => {
        return this.mapelRepo.getAll();
    };

    //getMapel ById
    getById = async(id: number): Promise<MataPelajaran[] | null> => {
        return this.mapelRepo.getById(id);
    }

    //getMapel perkelas
    getByKelas = async(kelasId: number): Promise<MataPelajaran[] | null> => {
        return this.mapelRepo.getByKelas(kelasId)
    };

    // getMapeYangDiAjarPengawas
    getByPengajar = async(pengajarId: number): Promise<MataPelajaran | null> => {
        return this.getByPengajar(pengajarId)
    };

    //delete Mapelll
    delete = async(id: number): Promise<MataPelajaran | null> => {
        return this.delete(id)
    };

    // cek mapel di kelas    
    hasMapelInKelas = async (kelasId: number): Promise<boolean> => {
    const mapel = await this.mapelRepo.getByKelas(kelasId);
    return mapel.length > 0;
  };

//   validasi pengajar
  getTotalMapelPengajar = async (
    pengajarId: number
  ): Promise<number> => {
    const mapel = await this.mapelRepo.getByPengajar(pengajarId);
    return mapel.length;
  };
}