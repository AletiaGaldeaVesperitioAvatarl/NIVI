export declare const Role: {
    readonly admin: "admin";
    readonly pengajar: "pengajar";
    readonly santri: "santri";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const StatusAbsensi: {
    readonly hadir: "hadir";
    readonly izin: "izin";
    readonly alpha: "alpha";
};
export type StatusAbsensi = (typeof StatusAbsensi)[keyof typeof StatusAbsensi];
export declare const StatusIzin: {
    readonly menunggu: "menunggu";
    readonly disetujui: "disetujui";
    readonly ditolak: "ditolak";
};
export type StatusIzin = (typeof StatusIzin)[keyof typeof StatusIzin];
export declare const StatusSubmission: {
    readonly tepat_waktu: "tepat_waktu";
    readonly terlambat: "terlambat";
};
export type StatusSubmission = (typeof StatusSubmission)[keyof typeof StatusSubmission];
//# sourceMappingURL=enums.d.ts.map