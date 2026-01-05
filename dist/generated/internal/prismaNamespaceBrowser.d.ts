import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Absensi: "Absensi";
    readonly Izin: "Izin";
    readonly Kelas: "Kelas";
    readonly LogAktivitas: "LogAktivitas";
    readonly Nilai: "Nilai";
    readonly Submission: "Submission";
    readonly Tugas: "Tugas";
    readonly User: "User";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const AbsensiScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly kelasId: "kelasId";
    readonly tanggal: "tanggal";
    readonly status: "status";
    readonly createdAt: "createdAt";
};
export type AbsensiScalarFieldEnum = (typeof AbsensiScalarFieldEnum)[keyof typeof AbsensiScalarFieldEnum];
export declare const IzinScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly kelasId: "kelasId";
    readonly tanggal: "tanggal";
    readonly alasan: "alasan";
    readonly status: "status";
    readonly createdAt: "createdAt";
};
export type IzinScalarFieldEnum = (typeof IzinScalarFieldEnum)[keyof typeof IzinScalarFieldEnum];
export declare const KelasScalarFieldEnum: {
    readonly id: "id";
    readonly namaKelas: "namaKelas";
    readonly deskripsi: "deskripsi";
    readonly createdAt: "createdAt";
};
export type KelasScalarFieldEnum = (typeof KelasScalarFieldEnum)[keyof typeof KelasScalarFieldEnum];
export declare const LogAktivitasScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly aktivitas: "aktivitas";
    readonly createdAt: "createdAt";
};
export type LogAktivitasScalarFieldEnum = (typeof LogAktivitasScalarFieldEnum)[keyof typeof LogAktivitasScalarFieldEnum];
export declare const NilaiScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly tugasId: "tugasId";
    readonly nilai: "nilai";
    readonly catatan: "catatan";
    readonly createdAt: "createdAt";
};
export type NilaiScalarFieldEnum = (typeof NilaiScalarFieldEnum)[keyof typeof NilaiScalarFieldEnum];
export declare const SubmissionScalarFieldEnum: {
    readonly id: "id";
    readonly tugasId: "tugasId";
    readonly userId: "userId";
    readonly fileUrl: "fileUrl";
    readonly linkUrl: "linkUrl";
    readonly submittedAt: "submittedAt";
    readonly status: "status";
};
export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum];
export declare const TugasScalarFieldEnum: {
    readonly id: "id";
    readonly kelasId: "kelasId";
    readonly title: "title";
    readonly description: "description";
    readonly deadline: "deadline";
    readonly createdBy: "createdBy";
    readonly createdAt: "createdAt";
};
export type TugasScalarFieldEnum = (typeof TugasScalarFieldEnum)[keyof typeof TugasScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly password: "password";
    readonly role: "role";
    readonly kelasId: "kelasId";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly deletedAt: "deletedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map