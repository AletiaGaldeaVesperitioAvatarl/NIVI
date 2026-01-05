import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Absensis
 * const absensis = await prisma.absensi.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model Absensi
 *
 */
export type Absensi = Prisma.AbsensiModel;
/**
 * Model Izin
 *
 */
export type Izin = Prisma.IzinModel;
/**
 * Model Kelas
 *
 */
export type Kelas = Prisma.KelasModel;
/**
 * Model LogAktivitas
 *
 */
export type LogAktivitas = Prisma.LogAktivitasModel;
/**
 * Model Nilai
 *
 */
export type Nilai = Prisma.NilaiModel;
/**
 * Model Submission
 *
 */
export type Submission = Prisma.SubmissionModel;
/**
 * Model Tugas
 *
 */
export type Tugas = Prisma.TugasModel;
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
//# sourceMappingURL=client.d.ts.map