import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Kelas
 *
 */
export type KelasModel = runtime.Types.Result.DefaultSelection<Prisma.$KelasPayload>;
export type AggregateKelas = {
    _count: KelasCountAggregateOutputType | null;
    _avg: KelasAvgAggregateOutputType | null;
    _sum: KelasSumAggregateOutputType | null;
    _min: KelasMinAggregateOutputType | null;
    _max: KelasMaxAggregateOutputType | null;
};
export type KelasAvgAggregateOutputType = {
    id: number | null;
};
export type KelasSumAggregateOutputType = {
    id: number | null;
};
export type KelasMinAggregateOutputType = {
    id: number | null;
    namaKelas: string | null;
    deskripsi: string | null;
    createdAt: Date | null;
};
export type KelasMaxAggregateOutputType = {
    id: number | null;
    namaKelas: string | null;
    deskripsi: string | null;
    createdAt: Date | null;
};
export type KelasCountAggregateOutputType = {
    id: number;
    namaKelas: number;
    deskripsi: number;
    createdAt: number;
    _all: number;
};
export type KelasAvgAggregateInputType = {
    id?: true;
};
export type KelasSumAggregateInputType = {
    id?: true;
};
export type KelasMinAggregateInputType = {
    id?: true;
    namaKelas?: true;
    deskripsi?: true;
    createdAt?: true;
};
export type KelasMaxAggregateInputType = {
    id?: true;
    namaKelas?: true;
    deskripsi?: true;
    createdAt?: true;
};
export type KelasCountAggregateInputType = {
    id?: true;
    namaKelas?: true;
    deskripsi?: true;
    createdAt?: true;
    _all?: true;
};
export type KelasAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Kelas to aggregate.
     */
    where?: Prisma.KelasWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Kelas to fetch.
     */
    orderBy?: Prisma.KelasOrderByWithRelationInput | Prisma.KelasOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.KelasWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Kelas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Kelas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Kelas
    **/
    _count?: true | KelasCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: KelasAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: KelasSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: KelasMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: KelasMaxAggregateInputType;
};
export type GetKelasAggregateType<T extends KelasAggregateArgs> = {
    [P in keyof T & keyof AggregateKelas]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateKelas[P]> : Prisma.GetScalarType<T[P], AggregateKelas[P]>;
};
export type KelasGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KelasWhereInput;
    orderBy?: Prisma.KelasOrderByWithAggregationInput | Prisma.KelasOrderByWithAggregationInput[];
    by: Prisma.KelasScalarFieldEnum[] | Prisma.KelasScalarFieldEnum;
    having?: Prisma.KelasScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: KelasCountAggregateInputType | true;
    _avg?: KelasAvgAggregateInputType;
    _sum?: KelasSumAggregateInputType;
    _min?: KelasMinAggregateInputType;
    _max?: KelasMaxAggregateInputType;
};
export type KelasGroupByOutputType = {
    id: number;
    namaKelas: string;
    deskripsi: string | null;
    createdAt: Date;
    _count: KelasCountAggregateOutputType | null;
    _avg: KelasAvgAggregateOutputType | null;
    _sum: KelasSumAggregateOutputType | null;
    _min: KelasMinAggregateOutputType | null;
    _max: KelasMaxAggregateOutputType | null;
};
type GetKelasGroupByPayload<T extends KelasGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<KelasGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof KelasGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], KelasGroupByOutputType[P]> : Prisma.GetScalarType<T[P], KelasGroupByOutputType[P]>;
}>>;
export type KelasWhereInput = {
    AND?: Prisma.KelasWhereInput | Prisma.KelasWhereInput[];
    OR?: Prisma.KelasWhereInput[];
    NOT?: Prisma.KelasWhereInput | Prisma.KelasWhereInput[];
    id?: Prisma.IntFilter<"Kelas"> | number;
    namaKelas?: Prisma.StringFilter<"Kelas"> | string;
    deskripsi?: Prisma.StringNullableFilter<"Kelas"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Kelas"> | Date | string;
    users?: Prisma.UserListRelationFilter;
    absensi?: Prisma.AbsensiListRelationFilter;
    izin?: Prisma.IzinListRelationFilter;
    tugas?: Prisma.TugasListRelationFilter;
};
export type KelasOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    namaKelas?: Prisma.SortOrder;
    deskripsi?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    users?: Prisma.UserOrderByRelationAggregateInput;
    absensi?: Prisma.AbsensiOrderByRelationAggregateInput;
    izin?: Prisma.IzinOrderByRelationAggregateInput;
    tugas?: Prisma.TugasOrderByRelationAggregateInput;
};
export type KelasWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.KelasWhereInput | Prisma.KelasWhereInput[];
    OR?: Prisma.KelasWhereInput[];
    NOT?: Prisma.KelasWhereInput | Prisma.KelasWhereInput[];
    namaKelas?: Prisma.StringFilter<"Kelas"> | string;
    deskripsi?: Prisma.StringNullableFilter<"Kelas"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Kelas"> | Date | string;
    users?: Prisma.UserListRelationFilter;
    absensi?: Prisma.AbsensiListRelationFilter;
    izin?: Prisma.IzinListRelationFilter;
    tugas?: Prisma.TugasListRelationFilter;
}, "id">;
export type KelasOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    namaKelas?: Prisma.SortOrder;
    deskripsi?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.KelasCountOrderByAggregateInput;
    _avg?: Prisma.KelasAvgOrderByAggregateInput;
    _max?: Prisma.KelasMaxOrderByAggregateInput;
    _min?: Prisma.KelasMinOrderByAggregateInput;
    _sum?: Prisma.KelasSumOrderByAggregateInput;
};
export type KelasScalarWhereWithAggregatesInput = {
    AND?: Prisma.KelasScalarWhereWithAggregatesInput | Prisma.KelasScalarWhereWithAggregatesInput[];
    OR?: Prisma.KelasScalarWhereWithAggregatesInput[];
    NOT?: Prisma.KelasScalarWhereWithAggregatesInput | Prisma.KelasScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Kelas"> | number;
    namaKelas?: Prisma.StringWithAggregatesFilter<"Kelas"> | string;
    deskripsi?: Prisma.StringNullableWithAggregatesFilter<"Kelas"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Kelas"> | Date | string;
};
export type KelasCreateInput = {
    namaKelas: string;
    deskripsi?: string | null;
    createdAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutKelasInput;
    absensi?: Prisma.AbsensiCreateNestedManyWithoutKelasInput;
    izin?: Prisma.IzinCreateNestedManyWithoutKelasInput;
    tugas?: Prisma.TugasCreateNestedManyWithoutKelasInput;
};
export type KelasUncheckedCreateInput = {
    id?: number;
    namaKelas: string;
    deskripsi?: string | null;
    createdAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutKelasInput;
    absensi?: Prisma.AbsensiUncheckedCreateNestedManyWithoutKelasInput;
    izin?: Prisma.IzinUncheckedCreateNestedManyWithoutKelasInput;
    tugas?: Prisma.TugasUncheckedCreateNestedManyWithoutKelasInput;
};
export type KelasUpdateInput = {
    namaKelas?: Prisma.StringFieldUpdateOperationsInput | string;
    deskripsi?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutKelasNestedInput;
    absensi?: Prisma.AbsensiUpdateManyWithoutKelasNestedInput;
    izin?: Prisma.IzinUpdateManyWithoutKelasNestedInput;
    tugas?: Prisma.TugasUpdateManyWithoutKelasNestedInput;
};
export type KelasUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    namaKelas?: Prisma.StringFieldUpdateOperationsInput | string;
    deskripsi?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutKelasNestedInput;
    absensi?: Prisma.AbsensiUncheckedUpdateManyWithoutKelasNestedInput;
    izin?: Prisma.IzinUncheckedUpdateManyWithoutKelasNestedInput;
    tugas?: Prisma.TugasUncheckedUpdateManyWithoutKelasNestedInput;
};
export type KelasCreateManyInput = {
    id?: number;
    namaKelas: string;
    deskripsi?: string | null;
    createdAt?: Date | string;
};
export type KelasUpdateManyMutationInput = {
    namaKelas?: Prisma.StringFieldUpdateOperationsInput | string;
    deskripsi?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KelasUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    namaKelas?: Prisma.StringFieldUpdateOperationsInput | string;
    deskripsi?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KelasScalarRelationFilter = {
    is?: Prisma.KelasWhereInput;
    isNot?: Prisma.KelasWhereInput;
};
export type KelasCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    namaKelas?: Prisma.SortOrder;
    deskripsi?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type KelasAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type KelasMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    namaKelas?: Prisma.SortOrder;
    deskripsi?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type KelasMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    namaKelas?: Prisma.SortOrder;
    deskripsi?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type KelasSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type KelasNullableScalarRelationFilter = {
    is?: Prisma.KelasWhereInput | null;
    isNot?: Prisma.KelasWhereInput | null;
};
export type KelasCreateNestedOneWithoutAbsensiInput = {
    create?: Prisma.XOR<Prisma.KelasCreateWithoutAbsensiInput, Prisma.KelasUncheckedCreateWithoutAbsensiInput>;
    connectOrCreate?: Prisma.KelasCreateOrConnectWithoutAbsensiInput;
    connect?: Prisma.KelasWhereUniqueInput;
};
export type KelasUpdateOneRequiredWithoutAbsensiNestedInput = {
    create?: Prisma.XOR<Prisma.KelasCreateWithoutAbsensiInput, Prisma.KelasUncheckedCreateWithoutAbsensiInput>;
    connectOrCreate?: Prisma.KelasCreateOrConnectWithoutAbsensiInput;
    upsert?: Prisma.KelasUpsertWithoutAbsensiInput;
    connect?: Prisma.KelasWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.KelasUpdateToOneWithWhereWithoutAbsensiInput, Prisma.KelasUpdateWithoutAbsensiInput>, Prisma.KelasUncheckedUpdateWithoutAbsensiInput>;
};
export type KelasCreateNestedOneWithoutIzinInput = {
    create?: Prisma.XOR<Prisma.KelasCreateWithoutIzinInput, Prisma.KelasUncheckedCreateWithoutIzinInput>;
    connectOrCreate?: Prisma.KelasCreateOrConnectWithoutIzinInput;
    connect?: Prisma.KelasWhereUniqueInput;
};
export type KelasUpdateOneRequiredWithoutIzinNestedInput = {
    create?: Prisma.XOR<Prisma.KelasCreateWithoutIzinInput, Prisma.KelasUncheckedCreateWithoutIzinInput>;
    connectOrCreate?: Prisma.KelasCreateOrConnectWithoutIzinInput;
    upsert?: Prisma.KelasUpsertWithoutIzinInput;
    connect?: Prisma.KelasWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.KelasUpdateToOneWithWhereWithoutIzinInput, Prisma.KelasUpdateWithoutIzinInput>, Prisma.KelasUncheckedUpdateWithoutIzinInput>;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type KelasCreateNestedOneWithoutTugasInput = {
    create?: Prisma.XOR<Prisma.KelasCreateWithoutTugasInput, Prisma.KelasUncheckedCreateWithoutTugasInput>;
    connectOrCreate?: Prisma.KelasCreateOrConnectWithoutTugasInput;
    connect?: Prisma.KelasWhereUniqueInput;
};
export type KelasUpdateOneRequiredWithoutTugasNestedInput = {
    create?: Prisma.XOR<Prisma.KelasCreateWithoutTugasInput, Prisma.KelasUncheckedCreateWithoutTugasInput>;
    connectOrCreate?: Prisma.KelasCreateOrConnectWithoutTugasInput;
    upsert?: Prisma.KelasUpsertWithoutTugasInput;
    connect?: Prisma.KelasWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.KelasUpdateToOneWithWhereWithoutTugasInput, Prisma.KelasUpdateWithoutTugasInput>, Prisma.KelasUncheckedUpdateWithoutTugasInput>;
};
export type KelasCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.KelasCreateWithoutUsersInput, Prisma.KelasUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.KelasCreateOrConnectWithoutUsersInput;
    connect?: Prisma.KelasWhereUniqueInput;
};
export type KelasUpdateOneWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.KelasCreateWithoutUsersInput, Prisma.KelasUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.KelasCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.KelasUpsertWithoutUsersInput;
    disconnect?: Prisma.KelasWhereInput | boolean;
    delete?: Prisma.KelasWhereInput | boolean;
    connect?: Prisma.KelasWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.KelasUpdateToOneWithWhereWithoutUsersInput, Prisma.KelasUpdateWithoutUsersInput>, Prisma.KelasUncheckedUpdateWithoutUsersInput>;
};
export type KelasCreateWithoutAbsensiInput = {
    namaKelas: string;
    deskripsi?: string | null;
    createdAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutKelasInput;
    izin?: Prisma.IzinCreateNestedManyWithoutKelasInput;
    tugas?: Prisma.TugasCreateNestedManyWithoutKelasInput;
};
export type KelasUncheckedCreateWithoutAbsensiInput = {
    id?: number;
    namaKelas: string;
    deskripsi?: string | null;
    createdAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutKelasInput;
    izin?: Prisma.IzinUncheckedCreateNestedManyWithoutKelasInput;
    tugas?: Prisma.TugasUncheckedCreateNestedManyWithoutKelasInput;
};
export type KelasCreateOrConnectWithoutAbsensiInput = {
    where: Prisma.KelasWhereUniqueInput;
    create: Prisma.XOR<Prisma.KelasCreateWithoutAbsensiInput, Prisma.KelasUncheckedCreateWithoutAbsensiInput>;
};
export type KelasUpsertWithoutAbsensiInput = {
    update: Prisma.XOR<Prisma.KelasUpdateWithoutAbsensiInput, Prisma.KelasUncheckedUpdateWithoutAbsensiInput>;
    create: Prisma.XOR<Prisma.KelasCreateWithoutAbsensiInput, Prisma.KelasUncheckedCreateWithoutAbsensiInput>;
    where?: Prisma.KelasWhereInput;
};
export type KelasUpdateToOneWithWhereWithoutAbsensiInput = {
    where?: Prisma.KelasWhereInput;
    data: Prisma.XOR<Prisma.KelasUpdateWithoutAbsensiInput, Prisma.KelasUncheckedUpdateWithoutAbsensiInput>;
};
export type KelasUpdateWithoutAbsensiInput = {
    namaKelas?: Prisma.StringFieldUpdateOperationsInput | string;
    deskripsi?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutKelasNestedInput;
    izin?: Prisma.IzinUpdateManyWithoutKelasNestedInput;
    tugas?: Prisma.TugasUpdateManyWithoutKelasNestedInput;
};
export type KelasUncheckedUpdateWithoutAbsensiInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    namaKelas?: Prisma.StringFieldUpdateOperationsInput | string;
    deskripsi?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutKelasNestedInput;
    izin?: Prisma.IzinUncheckedUpdateManyWithoutKelasNestedInput;
    tugas?: Prisma.TugasUncheckedUpdateManyWithoutKelasNestedInput;
};
export type KelasCreateWithoutIzinInput = {
    namaKelas: string;
    deskripsi?: string | null;
    createdAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutKelasInput;
    absensi?: Prisma.AbsensiCreateNestedManyWithoutKelasInput;
    tugas?: Prisma.TugasCreateNestedManyWithoutKelasInput;
};
export type KelasUncheckedCreateWithoutIzinInput = {
    id?: number;
    namaKelas: string;
    deskripsi?: string | null;
    createdAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutKelasInput;
    absensi?: Prisma.AbsensiUncheckedCreateNestedManyWithoutKelasInput;
    tugas?: Prisma.TugasUncheckedCreateNestedManyWithoutKelasInput;
};
export type KelasCreateOrConnectWithoutIzinInput = {
    where: Prisma.KelasWhereUniqueInput;
    create: Prisma.XOR<Prisma.KelasCreateWithoutIzinInput, Prisma.KelasUncheckedCreateWithoutIzinInput>;
};
export type KelasUpsertWithoutIzinInput = {
    update: Prisma.XOR<Prisma.KelasUpdateWithoutIzinInput, Prisma.KelasUncheckedUpdateWithoutIzinInput>;
    create: Prisma.XOR<Prisma.KelasCreateWithoutIzinInput, Prisma.KelasUncheckedCreateWithoutIzinInput>;
    where?: Prisma.KelasWhereInput;
};
export type KelasUpdateToOneWithWhereWithoutIzinInput = {
    where?: Prisma.KelasWhereInput;
    data: Prisma.XOR<Prisma.KelasUpdateWithoutIzinInput, Prisma.KelasUncheckedUpdateWithoutIzinInput>;
};
export type KelasUpdateWithoutIzinInput = {
    namaKelas?: Prisma.StringFieldUpdateOperationsInput | string;
    deskripsi?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutKelasNestedInput;
    absensi?: Prisma.AbsensiUpdateManyWithoutKelasNestedInput;
    tugas?: Prisma.TugasUpdateManyWithoutKelasNestedInput;
};
export type KelasUncheckedUpdateWithoutIzinInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    namaKelas?: Prisma.StringFieldUpdateOperationsInput | string;
    deskripsi?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutKelasNestedInput;
    absensi?: Prisma.AbsensiUncheckedUpdateManyWithoutKelasNestedInput;
    tugas?: Prisma.TugasUncheckedUpdateManyWithoutKelasNestedInput;
};
export type KelasCreateWithoutTugasInput = {
    namaKelas: string;
    deskripsi?: string | null;
    createdAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutKelasInput;
    absensi?: Prisma.AbsensiCreateNestedManyWithoutKelasInput;
    izin?: Prisma.IzinCreateNestedManyWithoutKelasInput;
};
export type KelasUncheckedCreateWithoutTugasInput = {
    id?: number;
    namaKelas: string;
    deskripsi?: string | null;
    createdAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutKelasInput;
    absensi?: Prisma.AbsensiUncheckedCreateNestedManyWithoutKelasInput;
    izin?: Prisma.IzinUncheckedCreateNestedManyWithoutKelasInput;
};
export type KelasCreateOrConnectWithoutTugasInput = {
    where: Prisma.KelasWhereUniqueInput;
    create: Prisma.XOR<Prisma.KelasCreateWithoutTugasInput, Prisma.KelasUncheckedCreateWithoutTugasInput>;
};
export type KelasUpsertWithoutTugasInput = {
    update: Prisma.XOR<Prisma.KelasUpdateWithoutTugasInput, Prisma.KelasUncheckedUpdateWithoutTugasInput>;
    create: Prisma.XOR<Prisma.KelasCreateWithoutTugasInput, Prisma.KelasUncheckedCreateWithoutTugasInput>;
    where?: Prisma.KelasWhereInput;
};
export type KelasUpdateToOneWithWhereWithoutTugasInput = {
    where?: Prisma.KelasWhereInput;
    data: Prisma.XOR<Prisma.KelasUpdateWithoutTugasInput, Prisma.KelasUncheckedUpdateWithoutTugasInput>;
};
export type KelasUpdateWithoutTugasInput = {
    namaKelas?: Prisma.StringFieldUpdateOperationsInput | string;
    deskripsi?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutKelasNestedInput;
    absensi?: Prisma.AbsensiUpdateManyWithoutKelasNestedInput;
    izin?: Prisma.IzinUpdateManyWithoutKelasNestedInput;
};
export type KelasUncheckedUpdateWithoutTugasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    namaKelas?: Prisma.StringFieldUpdateOperationsInput | string;
    deskripsi?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutKelasNestedInput;
    absensi?: Prisma.AbsensiUncheckedUpdateManyWithoutKelasNestedInput;
    izin?: Prisma.IzinUncheckedUpdateManyWithoutKelasNestedInput;
};
export type KelasCreateWithoutUsersInput = {
    namaKelas: string;
    deskripsi?: string | null;
    createdAt?: Date | string;
    absensi?: Prisma.AbsensiCreateNestedManyWithoutKelasInput;
    izin?: Prisma.IzinCreateNestedManyWithoutKelasInput;
    tugas?: Prisma.TugasCreateNestedManyWithoutKelasInput;
};
export type KelasUncheckedCreateWithoutUsersInput = {
    id?: number;
    namaKelas: string;
    deskripsi?: string | null;
    createdAt?: Date | string;
    absensi?: Prisma.AbsensiUncheckedCreateNestedManyWithoutKelasInput;
    izin?: Prisma.IzinUncheckedCreateNestedManyWithoutKelasInput;
    tugas?: Prisma.TugasUncheckedCreateNestedManyWithoutKelasInput;
};
export type KelasCreateOrConnectWithoutUsersInput = {
    where: Prisma.KelasWhereUniqueInput;
    create: Prisma.XOR<Prisma.KelasCreateWithoutUsersInput, Prisma.KelasUncheckedCreateWithoutUsersInput>;
};
export type KelasUpsertWithoutUsersInput = {
    update: Prisma.XOR<Prisma.KelasUpdateWithoutUsersInput, Prisma.KelasUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.KelasCreateWithoutUsersInput, Prisma.KelasUncheckedCreateWithoutUsersInput>;
    where?: Prisma.KelasWhereInput;
};
export type KelasUpdateToOneWithWhereWithoutUsersInput = {
    where?: Prisma.KelasWhereInput;
    data: Prisma.XOR<Prisma.KelasUpdateWithoutUsersInput, Prisma.KelasUncheckedUpdateWithoutUsersInput>;
};
export type KelasUpdateWithoutUsersInput = {
    namaKelas?: Prisma.StringFieldUpdateOperationsInput | string;
    deskripsi?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    absensi?: Prisma.AbsensiUpdateManyWithoutKelasNestedInput;
    izin?: Prisma.IzinUpdateManyWithoutKelasNestedInput;
    tugas?: Prisma.TugasUpdateManyWithoutKelasNestedInput;
};
export type KelasUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    namaKelas?: Prisma.StringFieldUpdateOperationsInput | string;
    deskripsi?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    absensi?: Prisma.AbsensiUncheckedUpdateManyWithoutKelasNestedInput;
    izin?: Prisma.IzinUncheckedUpdateManyWithoutKelasNestedInput;
    tugas?: Prisma.TugasUncheckedUpdateManyWithoutKelasNestedInput;
};
/**
 * Count Type KelasCountOutputType
 */
export type KelasCountOutputType = {
    users: number;
    absensi: number;
    izin: number;
    tugas: number;
};
export type KelasCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | KelasCountOutputTypeCountUsersArgs;
    absensi?: boolean | KelasCountOutputTypeCountAbsensiArgs;
    izin?: boolean | KelasCountOutputTypeCountIzinArgs;
    tugas?: boolean | KelasCountOutputTypeCountTugasArgs;
};
/**
 * KelasCountOutputType without action
 */
export type KelasCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KelasCountOutputType
     */
    select?: Prisma.KelasCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * KelasCountOutputType without action
 */
export type KelasCountOutputTypeCountUsersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
};
/**
 * KelasCountOutputType without action
 */
export type KelasCountOutputTypeCountAbsensiArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AbsensiWhereInput;
};
/**
 * KelasCountOutputType without action
 */
export type KelasCountOutputTypeCountIzinArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IzinWhereInput;
};
/**
 * KelasCountOutputType without action
 */
export type KelasCountOutputTypeCountTugasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TugasWhereInput;
};
export type KelasSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    namaKelas?: boolean;
    deskripsi?: boolean;
    createdAt?: boolean;
    users?: boolean | Prisma.Kelas$usersArgs<ExtArgs>;
    absensi?: boolean | Prisma.Kelas$absensiArgs<ExtArgs>;
    izin?: boolean | Prisma.Kelas$izinArgs<ExtArgs>;
    tugas?: boolean | Prisma.Kelas$tugasArgs<ExtArgs>;
    _count?: boolean | Prisma.KelasCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["kelas"]>;
export type KelasSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    namaKelas?: boolean;
    deskripsi?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["kelas"]>;
export type KelasSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    namaKelas?: boolean;
    deskripsi?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["kelas"]>;
export type KelasSelectScalar = {
    id?: boolean;
    namaKelas?: boolean;
    deskripsi?: boolean;
    createdAt?: boolean;
};
export type KelasOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "namaKelas" | "deskripsi" | "createdAt", ExtArgs["result"]["kelas"]>;
export type KelasInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.Kelas$usersArgs<ExtArgs>;
    absensi?: boolean | Prisma.Kelas$absensiArgs<ExtArgs>;
    izin?: boolean | Prisma.Kelas$izinArgs<ExtArgs>;
    tugas?: boolean | Prisma.Kelas$tugasArgs<ExtArgs>;
    _count?: boolean | Prisma.KelasCountOutputTypeDefaultArgs<ExtArgs>;
};
export type KelasIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type KelasIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $KelasPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Kelas";
    objects: {
        users: Prisma.$UserPayload<ExtArgs>[];
        absensi: Prisma.$AbsensiPayload<ExtArgs>[];
        izin: Prisma.$IzinPayload<ExtArgs>[];
        tugas: Prisma.$TugasPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        namaKelas: string;
        deskripsi: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["kelas"]>;
    composites: {};
};
export type KelasGetPayload<S extends boolean | null | undefined | KelasDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$KelasPayload, S>;
export type KelasCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<KelasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: KelasCountAggregateInputType | true;
};
export interface KelasDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Kelas'];
        meta: {
            name: 'Kelas';
        };
    };
    /**
     * Find zero or one Kelas that matches the filter.
     * @param {KelasFindUniqueArgs} args - Arguments to find a Kelas
     * @example
     * // Get one Kelas
     * const kelas = await prisma.kelas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KelasFindUniqueArgs>(args: Prisma.SelectSubset<T, KelasFindUniqueArgs<ExtArgs>>): Prisma.Prisma__KelasClient<runtime.Types.Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Kelas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KelasFindUniqueOrThrowArgs} args - Arguments to find a Kelas
     * @example
     * // Get one Kelas
     * const kelas = await prisma.kelas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KelasFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, KelasFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__KelasClient<runtime.Types.Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Kelas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasFindFirstArgs} args - Arguments to find a Kelas
     * @example
     * // Get one Kelas
     * const kelas = await prisma.kelas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KelasFindFirstArgs>(args?: Prisma.SelectSubset<T, KelasFindFirstArgs<ExtArgs>>): Prisma.Prisma__KelasClient<runtime.Types.Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Kelas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasFindFirstOrThrowArgs} args - Arguments to find a Kelas
     * @example
     * // Get one Kelas
     * const kelas = await prisma.kelas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KelasFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, KelasFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__KelasClient<runtime.Types.Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Kelas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kelas
     * const kelas = await prisma.kelas.findMany()
     *
     * // Get first 10 Kelas
     * const kelas = await prisma.kelas.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const kelasWithIdOnly = await prisma.kelas.findMany({ select: { id: true } })
     *
     */
    findMany<T extends KelasFindManyArgs>(args?: Prisma.SelectSubset<T, KelasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Kelas.
     * @param {KelasCreateArgs} args - Arguments to create a Kelas.
     * @example
     * // Create one Kelas
     * const Kelas = await prisma.kelas.create({
     *   data: {
     *     // ... data to create a Kelas
     *   }
     * })
     *
     */
    create<T extends KelasCreateArgs>(args: Prisma.SelectSubset<T, KelasCreateArgs<ExtArgs>>): Prisma.Prisma__KelasClient<runtime.Types.Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Kelas.
     * @param {KelasCreateManyArgs} args - Arguments to create many Kelas.
     * @example
     * // Create many Kelas
     * const kelas = await prisma.kelas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends KelasCreateManyArgs>(args?: Prisma.SelectSubset<T, KelasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Kelas and returns the data saved in the database.
     * @param {KelasCreateManyAndReturnArgs} args - Arguments to create many Kelas.
     * @example
     * // Create many Kelas
     * const kelas = await prisma.kelas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Kelas and only return the `id`
     * const kelasWithIdOnly = await prisma.kelas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends KelasCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, KelasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Kelas.
     * @param {KelasDeleteArgs} args - Arguments to delete one Kelas.
     * @example
     * // Delete one Kelas
     * const Kelas = await prisma.kelas.delete({
     *   where: {
     *     // ... filter to delete one Kelas
     *   }
     * })
     *
     */
    delete<T extends KelasDeleteArgs>(args: Prisma.SelectSubset<T, KelasDeleteArgs<ExtArgs>>): Prisma.Prisma__KelasClient<runtime.Types.Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Kelas.
     * @param {KelasUpdateArgs} args - Arguments to update one Kelas.
     * @example
     * // Update one Kelas
     * const kelas = await prisma.kelas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends KelasUpdateArgs>(args: Prisma.SelectSubset<T, KelasUpdateArgs<ExtArgs>>): Prisma.Prisma__KelasClient<runtime.Types.Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Kelas.
     * @param {KelasDeleteManyArgs} args - Arguments to filter Kelas to delete.
     * @example
     * // Delete a few Kelas
     * const { count } = await prisma.kelas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends KelasDeleteManyArgs>(args?: Prisma.SelectSubset<T, KelasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Kelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kelas
     * const kelas = await prisma.kelas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends KelasUpdateManyArgs>(args: Prisma.SelectSubset<T, KelasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Kelas and returns the data updated in the database.
     * @param {KelasUpdateManyAndReturnArgs} args - Arguments to update many Kelas.
     * @example
     * // Update many Kelas
     * const kelas = await prisma.kelas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Kelas and only return the `id`
     * const kelasWithIdOnly = await prisma.kelas.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends KelasUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, KelasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Kelas.
     * @param {KelasUpsertArgs} args - Arguments to update or create a Kelas.
     * @example
     * // Update or create a Kelas
     * const kelas = await prisma.kelas.upsert({
     *   create: {
     *     // ... data to create a Kelas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kelas we want to update
     *   }
     * })
     */
    upsert<T extends KelasUpsertArgs>(args: Prisma.SelectSubset<T, KelasUpsertArgs<ExtArgs>>): Prisma.Prisma__KelasClient<runtime.Types.Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Kelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasCountArgs} args - Arguments to filter Kelas to count.
     * @example
     * // Count the number of Kelas
     * const count = await prisma.kelas.count({
     *   where: {
     *     // ... the filter for the Kelas we want to count
     *   }
     * })
    **/
    count<T extends KelasCountArgs>(args?: Prisma.Subset<T, KelasCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], KelasCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Kelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KelasAggregateArgs>(args: Prisma.Subset<T, KelasAggregateArgs>): Prisma.PrismaPromise<GetKelasAggregateType<T>>;
    /**
     * Group by Kelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends KelasGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: KelasGroupByArgs['orderBy'];
    } : {
        orderBy?: KelasGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, KelasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKelasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Kelas model
     */
    readonly fields: KelasFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Kelas.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__KelasClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.Kelas$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Kelas$usersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    absensi<T extends Prisma.Kelas$absensiArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Kelas$absensiArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    izin<T extends Prisma.Kelas$izinArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Kelas$izinArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IzinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    tugas<T extends Prisma.Kelas$tugasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Kelas$tugasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Kelas model
 */
export interface KelasFieldRefs {
    readonly id: Prisma.FieldRef<"Kelas", 'Int'>;
    readonly namaKelas: Prisma.FieldRef<"Kelas", 'String'>;
    readonly deskripsi: Prisma.FieldRef<"Kelas", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Kelas", 'DateTime'>;
}
/**
 * Kelas findUnique
 */
export type KelasFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: Prisma.KelasSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Kelas
     */
    omit?: Prisma.KelasOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.KelasInclude<ExtArgs> | null;
    /**
     * Filter, which Kelas to fetch.
     */
    where: Prisma.KelasWhereUniqueInput;
};
/**
 * Kelas findUniqueOrThrow
 */
export type KelasFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: Prisma.KelasSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Kelas
     */
    omit?: Prisma.KelasOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.KelasInclude<ExtArgs> | null;
    /**
     * Filter, which Kelas to fetch.
     */
    where: Prisma.KelasWhereUniqueInput;
};
/**
 * Kelas findFirst
 */
export type KelasFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: Prisma.KelasSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Kelas
     */
    omit?: Prisma.KelasOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.KelasInclude<ExtArgs> | null;
    /**
     * Filter, which Kelas to fetch.
     */
    where?: Prisma.KelasWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Kelas to fetch.
     */
    orderBy?: Prisma.KelasOrderByWithRelationInput | Prisma.KelasOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Kelas.
     */
    cursor?: Prisma.KelasWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Kelas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Kelas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Kelas.
     */
    distinct?: Prisma.KelasScalarFieldEnum | Prisma.KelasScalarFieldEnum[];
};
/**
 * Kelas findFirstOrThrow
 */
export type KelasFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: Prisma.KelasSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Kelas
     */
    omit?: Prisma.KelasOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.KelasInclude<ExtArgs> | null;
    /**
     * Filter, which Kelas to fetch.
     */
    where?: Prisma.KelasWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Kelas to fetch.
     */
    orderBy?: Prisma.KelasOrderByWithRelationInput | Prisma.KelasOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Kelas.
     */
    cursor?: Prisma.KelasWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Kelas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Kelas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Kelas.
     */
    distinct?: Prisma.KelasScalarFieldEnum | Prisma.KelasScalarFieldEnum[];
};
/**
 * Kelas findMany
 */
export type KelasFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: Prisma.KelasSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Kelas
     */
    omit?: Prisma.KelasOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.KelasInclude<ExtArgs> | null;
    /**
     * Filter, which Kelas to fetch.
     */
    where?: Prisma.KelasWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Kelas to fetch.
     */
    orderBy?: Prisma.KelasOrderByWithRelationInput | Prisma.KelasOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Kelas.
     */
    cursor?: Prisma.KelasWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Kelas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Kelas.
     */
    skip?: number;
    distinct?: Prisma.KelasScalarFieldEnum | Prisma.KelasScalarFieldEnum[];
};
/**
 * Kelas create
 */
export type KelasCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: Prisma.KelasSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Kelas
     */
    omit?: Prisma.KelasOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.KelasInclude<ExtArgs> | null;
    /**
     * The data needed to create a Kelas.
     */
    data: Prisma.XOR<Prisma.KelasCreateInput, Prisma.KelasUncheckedCreateInput>;
};
/**
 * Kelas createMany
 */
export type KelasCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kelas.
     */
    data: Prisma.KelasCreateManyInput | Prisma.KelasCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Kelas createManyAndReturn
 */
export type KelasCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: Prisma.KelasSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Kelas
     */
    omit?: Prisma.KelasOmit<ExtArgs> | null;
    /**
     * The data used to create many Kelas.
     */
    data: Prisma.KelasCreateManyInput | Prisma.KelasCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Kelas update
 */
export type KelasUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: Prisma.KelasSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Kelas
     */
    omit?: Prisma.KelasOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.KelasInclude<ExtArgs> | null;
    /**
     * The data needed to update a Kelas.
     */
    data: Prisma.XOR<Prisma.KelasUpdateInput, Prisma.KelasUncheckedUpdateInput>;
    /**
     * Choose, which Kelas to update.
     */
    where: Prisma.KelasWhereUniqueInput;
};
/**
 * Kelas updateMany
 */
export type KelasUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Kelas.
     */
    data: Prisma.XOR<Prisma.KelasUpdateManyMutationInput, Prisma.KelasUncheckedUpdateManyInput>;
    /**
     * Filter which Kelas to update
     */
    where?: Prisma.KelasWhereInput;
    /**
     * Limit how many Kelas to update.
     */
    limit?: number;
};
/**
 * Kelas updateManyAndReturn
 */
export type KelasUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: Prisma.KelasSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Kelas
     */
    omit?: Prisma.KelasOmit<ExtArgs> | null;
    /**
     * The data used to update Kelas.
     */
    data: Prisma.XOR<Prisma.KelasUpdateManyMutationInput, Prisma.KelasUncheckedUpdateManyInput>;
    /**
     * Filter which Kelas to update
     */
    where?: Prisma.KelasWhereInput;
    /**
     * Limit how many Kelas to update.
     */
    limit?: number;
};
/**
 * Kelas upsert
 */
export type KelasUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: Prisma.KelasSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Kelas
     */
    omit?: Prisma.KelasOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.KelasInclude<ExtArgs> | null;
    /**
     * The filter to search for the Kelas to update in case it exists.
     */
    where: Prisma.KelasWhereUniqueInput;
    /**
     * In case the Kelas found by the `where` argument doesn't exist, create a new Kelas with this data.
     */
    create: Prisma.XOR<Prisma.KelasCreateInput, Prisma.KelasUncheckedCreateInput>;
    /**
     * In case the Kelas was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.KelasUpdateInput, Prisma.KelasUncheckedUpdateInput>;
};
/**
 * Kelas delete
 */
export type KelasDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: Prisma.KelasSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Kelas
     */
    omit?: Prisma.KelasOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.KelasInclude<ExtArgs> | null;
    /**
     * Filter which Kelas to delete.
     */
    where: Prisma.KelasWhereUniqueInput;
};
/**
 * Kelas deleteMany
 */
export type KelasDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Kelas to delete
     */
    where?: Prisma.KelasWhereInput;
    /**
     * Limit how many Kelas to delete.
     */
    limit?: number;
};
/**
 * Kelas.users
 */
export type Kelas$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * Kelas.absensi
 */
export type Kelas$absensiArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: Prisma.AbsensiSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Absensi
     */
    omit?: Prisma.AbsensiOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AbsensiInclude<ExtArgs> | null;
    where?: Prisma.AbsensiWhereInput;
    orderBy?: Prisma.AbsensiOrderByWithRelationInput | Prisma.AbsensiOrderByWithRelationInput[];
    cursor?: Prisma.AbsensiWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AbsensiScalarFieldEnum | Prisma.AbsensiScalarFieldEnum[];
};
/**
 * Kelas.izin
 */
export type Kelas$izinArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Izin
     */
    select?: Prisma.IzinSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Izin
     */
    omit?: Prisma.IzinOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.IzinInclude<ExtArgs> | null;
    where?: Prisma.IzinWhereInput;
    orderBy?: Prisma.IzinOrderByWithRelationInput | Prisma.IzinOrderByWithRelationInput[];
    cursor?: Prisma.IzinWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IzinScalarFieldEnum | Prisma.IzinScalarFieldEnum[];
};
/**
 * Kelas.tugas
 */
export type Kelas$tugasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: Prisma.TugasSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tugas
     */
    omit?: Prisma.TugasOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TugasInclude<ExtArgs> | null;
    where?: Prisma.TugasWhereInput;
    orderBy?: Prisma.TugasOrderByWithRelationInput | Prisma.TugasOrderByWithRelationInput[];
    cursor?: Prisma.TugasWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TugasScalarFieldEnum | Prisma.TugasScalarFieldEnum[];
};
/**
 * Kelas without action
 */
export type KelasDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: Prisma.KelasSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Kelas
     */
    omit?: Prisma.KelasOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.KelasInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Kelas.d.ts.map