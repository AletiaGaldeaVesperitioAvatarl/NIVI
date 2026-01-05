// import { Request, Response } from "express";
// import * as tugasService from "../service/tugas.service"

// export const createTugas = async (_req: Request, res: Response) => {
//     try {
//         const result = await tugasService.createTugas(_req.body)
//         res.status(201).json({
//             message: "tugas sudah di kumpulkan",
//             data: result 
//         })
//     } catch (error: any) {
//         res.status(500).json({message: error.message})
//     }
// }

// export const getAllTugas = async (_req: Request, res: Response) => {
//     try {
//         const result = await tugasService.getAllTugas()
//         res.json({
//             message: "List Tugas",
//             data: result
//         })
//     } catch (error: any) {
//         res.status(500).json({message: error.message})
//     }
// }