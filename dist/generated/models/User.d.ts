import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model User
 *
 */
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserAvgAggregateOutputType = {
    id: number | null;
    kelasId: number | null;
};
export type UserSumAggregateOutputType = {
    id: number | null;
    kelasId: number | null;
};
export type UserMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    email: string | null;
    password: string | null;
    role: $Enums.Role | null;
    kelasId: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
    deletedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    email: string | null;
    password: string | null;
    role: $Enums.Role | null;
    kelasId: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
    deletedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    password: number;
    role: number;
    kelasId: number;
    isActive: number;
    createdAt: number;
    deletedAt: number;
    _all: number;
};
export type UserAvgAggregateInputType = {
    id?: true;
    kelasId?: true;
};
export type UserSumAggregateInputType = {
    id?: true;
    kelasId?: true;
};
export type UserMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    role?: true;
    kelasId?: true;
    isActive?: true;
    createdAt?: true;
    deletedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    role?: true;
    kelasId?: true;
    isActive?: true;
    createdAt?: true;
    deletedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    role?: true;
    kelasId?: true;
    isActive?: true;
    createdAt?: true;
    deletedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: number;
    name: string;
    email: string;
    password: string;
    role: $Enums.Role;
    kelasId: number | null;
    isActive: boolean;
    createdAt: Date;
    deletedAt: Date | null;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.IntFilter<"User"> | number;
    name?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    password?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    kelasId?: Prisma.IntNullableFilter<"User"> | number | null;
    isActive?: Prisma.BoolFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    kelas?: Prisma.XOR<Prisma.KelasNullableScalarRelationFilter, Prisma.KelasWhereInput> | null;
    absensi?: Prisma.AbsensiListRelationFilter;
    izin?: Prisma.IzinListRelationFilter;
    tugasDibuat?: Prisma.TugasListRelationFilter;
    submission?: Prisma.SubmissionListRelationFilter;
    nilai?: Prisma.NilaiListRelationFilter;
    log?: Prisma.LogAktivitasListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    kelasId?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    kelas?: Prisma.KelasOrderByWithRelationInput;
    absensi?: Prisma.AbsensiOrderByRelationAggregateInput;
    izin?: Prisma.IzinOrderByRelationAggregateInput;
    tugasDibuat?: Prisma.TugasOrderByRelationAggregateInput;
    submission?: Prisma.SubmissionOrderByRelationAggregateInput;
    nilai?: Prisma.NilaiOrderByRelationAggregateInput;
    log?: Prisma.LogAktivitasOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    name?: Prisma.StringFilter<"User"> | string;
    password?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    kelasId?: Prisma.IntNullableFilter<"User"> | number | null;
    isActive?: Prisma.BoolFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    kelas?: Prisma.XOR<Prisma.KelasNullableScalarRelationFilter, Prisma.KelasWhereInput> | null;
    absensi?: Prisma.AbsensiListRelationFilter;
    izin?: Prisma.IzinListRelationFilter;
    tugasDibuat?: Prisma.TugasListRelationFilter;
    submission?: Prisma.SubmissionListRelationFilter;
    nilai?: Prisma.NilaiListRelationFilter;
    log?: Prisma.LogAktivitasListRelationFilter;
}, "id" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    kelasId?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _avg?: Prisma.UserAvgOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
    _sum?: Prisma.UserSumOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"User"> | number;
    name?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    password?: Prisma.StringWithAggregatesFilter<"User"> | string;
    role?: Prisma.EnumRoleWithAggregatesFilter<"User"> | $Enums.Role;
    kelasId?: Prisma.IntNullableWithAggregatesFilter<"User"> | number | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
};
export type UserCreateInput = {
    name: string;
    email: string;
    password: string;
    role: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    deletedAt?: Date | string | null;
    kelas?: Prisma.KelasCreateNestedOneWithoutUsersInput;
    absensi?: Prisma.AbsensiCreateNestedManyWithoutUserInput;
    izin?: Prisma.IzinCreateNestedManyWithoutUserInput;
    tugasDibuat?: Prisma.TugasCreateNestedManyWithoutCreatorInput;
    submission?: Prisma.SubmissionCreateNestedManyWithoutUserInput;
    nilai?: Prisma.NilaiCreateNestedManyWithoutUserInput;
    log?: Prisma.LogAktivitasCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    role: $Enums.Role;
    kelasId?: number | null;
    isActive?: boolean;
    createdAt?: Date | string;
    deletedAt?: Date | string | null;
    absensi?: Prisma.AbsensiUncheckedCreateNestedManyWithoutUserInput;
    izin?: Prisma.IzinUncheckedCreateNestedManyWithoutUserInput;
    tugasDibuat?: Prisma.TugasUncheckedCreateNestedManyWithoutCreatorInput;
    submission?: Prisma.SubmissionUncheckedCreateNestedManyWithoutUserInput;
    nilai?: Prisma.NilaiUncheckedCreateNestedManyWithoutUserInput;
    log?: Prisma.LogAktivitasUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    kelas?: Prisma.KelasUpdateOneWithoutUsersNestedInput;
    absensi?: Prisma.AbsensiUpdateManyWithoutUserNestedInput;
    izin?: Prisma.IzinUpdateManyWithoutUserNestedInput;
    tugasDibuat?: Prisma.TugasUpdateManyWithoutCreatorNestedInput;
    submission?: Prisma.SubmissionUpdateManyWithoutUserNestedInput;
    nilai?: Prisma.NilaiUpdateManyWithoutUserNestedInput;
    log?: Prisma.LogAktivitasUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    kelasId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    absensi?: Prisma.AbsensiUncheckedUpdateManyWithoutUserNestedInput;
    izin?: Prisma.IzinUncheckedUpdateManyWithoutUserNestedInput;
    tugasDibuat?: Prisma.TugasUncheckedUpdateManyWithoutCreatorNestedInput;
    submission?: Prisma.SubmissionUncheckedUpdateManyWithoutUserNestedInput;
    nilai?: Prisma.NilaiUncheckedUpdateManyWithoutUserNestedInput;
    log?: Prisma.LogAktivitasUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    role: $Enums.Role;
    kelasId?: number | null;
    isActive?: boolean;
    createdAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type UserUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    kelasId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserListRelationFilter = {
    every?: Prisma.UserWhereInput;
    some?: Prisma.UserWhereInput;
    none?: Prisma.UserWhereInput;
};
export type UserOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    kelasId?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type UserAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    kelasId?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    kelasId?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    kelasId?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type UserSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    kelasId?: Prisma.SortOrder;
};
export type UserCreateNestedOneWithoutAbsensiInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAbsensiInput, Prisma.UserUncheckedCreateWithoutAbsensiInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAbsensiInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutAbsensiNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAbsensiInput, Prisma.UserUncheckedCreateWithoutAbsensiInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAbsensiInput;
    upsert?: Prisma.UserUpsertWithoutAbsensiInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAbsensiInput, Prisma.UserUpdateWithoutAbsensiInput>, Prisma.UserUncheckedUpdateWithoutAbsensiInput>;
};
export type UserCreateNestedOneWithoutIzinInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutIzinInput, Prisma.UserUncheckedCreateWithoutIzinInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutIzinInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutIzinNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutIzinInput, Prisma.UserUncheckedCreateWithoutIzinInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutIzinInput;
    upsert?: Prisma.UserUpsertWithoutIzinInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutIzinInput, Prisma.UserUpdateWithoutIzinInput>, Prisma.UserUncheckedUpdateWithoutIzinInput>;
};
export type UserCreateNestedManyWithoutKelasInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutKelasInput, Prisma.UserUncheckedCreateWithoutKelasInput> | Prisma.UserCreateWithoutKelasInput[] | Prisma.UserUncheckedCreateWithoutKelasInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutKelasInput | Prisma.UserCreateOrConnectWithoutKelasInput[];
    createMany?: Prisma.UserCreateManyKelasInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUncheckedCreateNestedManyWithoutKelasInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutKelasInput, Prisma.UserUncheckedCreateWithoutKelasInput> | Prisma.UserCreateWithoutKelasInput[] | Prisma.UserUncheckedCreateWithoutKelasInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutKelasInput | Prisma.UserCreateOrConnectWithoutKelasInput[];
    createMany?: Prisma.UserCreateManyKelasInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUpdateManyWithoutKelasNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutKelasInput, Prisma.UserUncheckedCreateWithoutKelasInput> | Prisma.UserCreateWithoutKelasInput[] | Prisma.UserUncheckedCreateWithoutKelasInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutKelasInput | Prisma.UserCreateOrConnectWithoutKelasInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutKelasInput | Prisma.UserUpsertWithWhereUniqueWithoutKelasInput[];
    createMany?: Prisma.UserCreateManyKelasInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutKelasInput | Prisma.UserUpdateWithWhereUniqueWithoutKelasInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutKelasInput | Prisma.UserUpdateManyWithWhereWithoutKelasInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserUncheckedUpdateManyWithoutKelasNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutKelasInput, Prisma.UserUncheckedCreateWithoutKelasInput> | Prisma.UserCreateWithoutKelasInput[] | Prisma.UserUncheckedCreateWithoutKelasInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutKelasInput | Prisma.UserCreateOrConnectWithoutKelasInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutKelasInput | Prisma.UserUpsertWithWhereUniqueWithoutKelasInput[];
    createMany?: Prisma.UserCreateManyKelasInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutKelasInput | Prisma.UserUpdateWithWhereUniqueWithoutKelasInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutKelasInput | Prisma.UserUpdateManyWithWhereWithoutKelasInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserCreateNestedOneWithoutLogInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLogInput, Prisma.UserUncheckedCreateWithoutLogInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLogInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutLogNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLogInput, Prisma.UserUncheckedCreateWithoutLogInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLogInput;
    upsert?: Prisma.UserUpsertWithoutLogInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutLogInput, Prisma.UserUpdateWithoutLogInput>, Prisma.UserUncheckedUpdateWithoutLogInput>;
};
export type UserCreateNestedOneWithoutNilaiInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNilaiInput, Prisma.UserUncheckedCreateWithoutNilaiInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNilaiInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutNilaiNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNilaiInput, Prisma.UserUncheckedCreateWithoutNilaiInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNilaiInput;
    upsert?: Prisma.UserUpsertWithoutNilaiInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutNilaiInput, Prisma.UserUpdateWithoutNilaiInput>, Prisma.UserUncheckedUpdateWithoutNilaiInput>;
};
export type UserCreateNestedOneWithoutSubmissionInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSubmissionInput, Prisma.UserUncheckedCreateWithoutSubmissionInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSubmissionInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSubmissionNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSubmissionInput, Prisma.UserUncheckedCreateWithoutSubmissionInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSubmissionInput;
    upsert?: Prisma.UserUpsertWithoutSubmissionInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSubmissionInput, Prisma.UserUpdateWithoutSubmissionInput>, Prisma.UserUncheckedUpdateWithoutSubmissionInput>;
};
export type UserCreateNestedOneWithoutTugasDibuatInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTugasDibuatInput, Prisma.UserUncheckedCreateWithoutTugasDibuatInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTugasDibuatInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutTugasDibuatNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTugasDibuatInput, Prisma.UserUncheckedCreateWithoutTugasDibuatInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTugasDibuatInput;
    upsert?: Prisma.UserUpsertWithoutTugasDibuatInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutTugasDibuatInput, Prisma.UserUpdateWithoutTugasDibuatInput>, Prisma.UserUncheckedUpdateWithoutTugasDibuatInput>;
};
export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type UserCreateWithoutAbsensiInput = {
    name: string;
    email: string;
    password: string;
    role: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    deletedAt?: Date | string | null;
    kelas?: Prisma.KelasCreateNestedOneWithoutUsersInput;
    izin?: Prisma.IzinCreateNestedManyWithoutUserInput;
    tugasDibuat?: Prisma.TugasCreateNestedManyWithoutCreatorInput;
    submission?: Prisma.SubmissionCreateNestedManyWithoutUserInput;
    nilai?: Prisma.NilaiCreateNestedManyWithoutUserInput;
    log?: Prisma.LogAktivitasCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutAbsensiInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    role: $Enums.Role;
    kelasId?: number | null;
    isActive?: boolean;
    createdAt?: Date | string;
    deletedAt?: Date | string | null;
    izin?: Prisma.IzinUncheckedCreateNestedManyWithoutUserInput;
    tugasDibuat?: Prisma.TugasUncheckedCreateNestedManyWithoutCreatorInput;
    submission?: Prisma.SubmissionUncheckedCreateNestedManyWithoutUserInput;
    nilai?: Prisma.NilaiUncheckedCreateNestedManyWithoutUserInput;
    log?: Prisma.LogAktivitasUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutAbsensiInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAbsensiInput, Prisma.UserUncheckedCreateWithoutAbsensiInput>;
};
export type UserUpsertWithoutAbsensiInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAbsensiInput, Prisma.UserUncheckedUpdateWithoutAbsensiInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAbsensiInput, Prisma.UserUncheckedCreateWithoutAbsensiInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAbsensiInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAbsensiInput, Prisma.UserUncheckedUpdateWithoutAbsensiInput>;
};
export type UserUpdateWithoutAbsensiInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    kelas?: Prisma.KelasUpdateOneWithoutUsersNestedInput;
    izin?: Prisma.IzinUpdateManyWithoutUserNestedInput;
    tugasDibuat?: Prisma.TugasUpdateManyWithoutCreatorNestedInput;
    submission?: Prisma.SubmissionUpdateManyWithoutUserNestedInput;
    nilai?: Prisma.NilaiUpdateManyWithoutUserNestedInput;
    log?: Prisma.LogAktivitasUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutAbsensiInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    kelasId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    izin?: Prisma.IzinUncheckedUpdateManyWithoutUserNestedInput;
    tugasDibuat?: Prisma.TugasUncheckedUpdateManyWithoutCreatorNestedInput;
    submission?: Prisma.SubmissionUncheckedUpdateManyWithoutUserNestedInput;
    nilai?: Prisma.NilaiUncheckedUpdateManyWithoutUserNestedInput;
    log?: Prisma.LogAktivitasUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutIzinInput = {
    name: string;
    email: string;
    password: string;
    role: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    deletedAt?: Date | string | null;
    kelas?: Prisma.KelasCreateNestedOneWithoutUsersInput;
    absensi?: Prisma.AbsensiCreateNestedManyWithoutUserInput;
    tugasDibuat?: Prisma.TugasCreateNestedManyWithoutCreatorInput;
    submission?: Prisma.SubmissionCreateNestedManyWithoutUserInput;
    nilai?: Prisma.NilaiCreateNestedManyWithoutUserInput;
    log?: Prisma.LogAktivitasCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutIzinInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    role: $Enums.Role;
    kelasId?: number | null;
    isActive?: boolean;
    createdAt?: Date | string;
    deletedAt?: Date | string | null;
    absensi?: Prisma.AbsensiUncheckedCreateNestedManyWithoutUserInput;
    tugasDibuat?: Prisma.TugasUncheckedCreateNestedManyWithoutCreatorInput;
    submission?: Prisma.SubmissionUncheckedCreateNestedManyWithoutUserInput;
    nilai?: Prisma.NilaiUncheckedCreateNestedManyWithoutUserInput;
    log?: Prisma.LogAktivitasUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutIzinInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutIzinInput, Prisma.UserUncheckedCreateWithoutIzinInput>;
};
export type UserUpsertWithoutIzinInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutIzinInput, Prisma.UserUncheckedUpdateWithoutIzinInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutIzinInput, Prisma.UserUncheckedCreateWithoutIzinInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutIzinInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutIzinInput, Prisma.UserUncheckedUpdateWithoutIzinInput>;
};
export type UserUpdateWithoutIzinInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    kelas?: Prisma.KelasUpdateOneWithoutUsersNestedInput;
    absensi?: Prisma.AbsensiUpdateManyWithoutUserNestedInput;
    tugasDibuat?: Prisma.TugasUpdateManyWithoutCreatorNestedInput;
    submission?: Prisma.SubmissionUpdateManyWithoutUserNestedInput;
    nilai?: Prisma.NilaiUpdateManyWithoutUserNestedInput;
    log?: Prisma.LogAktivitasUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutIzinInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    kelasId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    absensi?: Prisma.AbsensiUncheckedUpdateManyWithoutUserNestedInput;
    tugasDibuat?: Prisma.TugasUncheckedUpdateManyWithoutCreatorNestedInput;
    submission?: Prisma.SubmissionUncheckedUpdateManyWithoutUserNestedInput;
    nilai?: Prisma.NilaiUncheckedUpdateManyWithoutUserNestedInput;
    log?: Prisma.LogAktivitasUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutKelasInput = {
    name: string;
    email: string;
    password: string;
    role: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    deletedAt?: Date | string | null;
    absensi?: Prisma.AbsensiCreateNestedManyWithoutUserInput;
    izin?: Prisma.IzinCreateNestedManyWithoutUserInput;
    tugasDibuat?: Prisma.TugasCreateNestedManyWithoutCreatorInput;
    submission?: Prisma.SubmissionCreateNestedManyWithoutUserInput;
    nilai?: Prisma.NilaiCreateNestedManyWithoutUserInput;
    log?: Prisma.LogAktivitasCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutKelasInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    role: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    deletedAt?: Date | string | null;
    absensi?: Prisma.AbsensiUncheckedCreateNestedManyWithoutUserInput;
    izin?: Prisma.IzinUncheckedCreateNestedManyWithoutUserInput;
    tugasDibuat?: Prisma.TugasUncheckedCreateNestedManyWithoutCreatorInput;
    submission?: Prisma.SubmissionUncheckedCreateNestedManyWithoutUserInput;
    nilai?: Prisma.NilaiUncheckedCreateNestedManyWithoutUserInput;
    log?: Prisma.LogAktivitasUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutKelasInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutKelasInput, Prisma.UserUncheckedCreateWithoutKelasInput>;
};
export type UserCreateManyKelasInputEnvelope = {
    data: Prisma.UserCreateManyKelasInput | Prisma.UserCreateManyKelasInput[];
    skipDuplicates?: boolean;
};
export type UserUpsertWithWhereUniqueWithoutKelasInput = {
    where: Prisma.UserWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserUpdateWithoutKelasInput, Prisma.UserUncheckedUpdateWithoutKelasInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutKelasInput, Prisma.UserUncheckedCreateWithoutKelasInput>;
};
export type UserUpdateWithWhereUniqueWithoutKelasInput = {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutKelasInput, Prisma.UserUncheckedUpdateWithoutKelasInput>;
};
export type UserUpdateManyWithWhereWithoutKelasInput = {
    where: Prisma.UserScalarWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyWithoutKelasInput>;
};
export type UserScalarWhereInput = {
    AND?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
    OR?: Prisma.UserScalarWhereInput[];
    NOT?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
    id?: Prisma.IntFilter<"User"> | number;
    name?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    password?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    kelasId?: Prisma.IntNullableFilter<"User"> | number | null;
    isActive?: Prisma.BoolFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
};
export type UserCreateWithoutLogInput = {
    name: string;
    email: string;
    password: string;
    role: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    deletedAt?: Date | string | null;
    kelas?: Prisma.KelasCreateNestedOneWithoutUsersInput;
    absensi?: Prisma.AbsensiCreateNestedManyWithoutUserInput;
    izin?: Prisma.IzinCreateNestedManyWithoutUserInput;
    tugasDibuat?: Prisma.TugasCreateNestedManyWithoutCreatorInput;
    submission?: Prisma.SubmissionCreateNestedManyWithoutUserInput;
    nilai?: Prisma.NilaiCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutLogInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    role: $Enums.Role;
    kelasId?: number | null;
    isActive?: boolean;
    createdAt?: Date | string;
    deletedAt?: Date | string | null;
    absensi?: Prisma.AbsensiUncheckedCreateNestedManyWithoutUserInput;
    izin?: Prisma.IzinUncheckedCreateNestedManyWithoutUserInput;
    tugasDibuat?: Prisma.TugasUncheckedCreateNestedManyWithoutCreatorInput;
    submission?: Prisma.SubmissionUncheckedCreateNestedManyWithoutUserInput;
    nilai?: Prisma.NilaiUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutLogInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutLogInput, Prisma.UserUncheckedCreateWithoutLogInput>;
};
export type UserUpsertWithoutLogInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutLogInput, Prisma.UserUncheckedUpdateWithoutLogInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutLogInput, Prisma.UserUncheckedCreateWithoutLogInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutLogInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutLogInput, Prisma.UserUncheckedUpdateWithoutLogInput>;
};
export type UserUpdateWithoutLogInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    kelas?: Prisma.KelasUpdateOneWithoutUsersNestedInput;
    absensi?: Prisma.AbsensiUpdateManyWithoutUserNestedInput;
    izin?: Prisma.IzinUpdateManyWithoutUserNestedInput;
    tugasDibuat?: Prisma.TugasUpdateManyWithoutCreatorNestedInput;
    submission?: Prisma.SubmissionUpdateManyWithoutUserNestedInput;
    nilai?: Prisma.NilaiUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutLogInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    kelasId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    absensi?: Prisma.AbsensiUncheckedUpdateManyWithoutUserNestedInput;
    izin?: Prisma.IzinUncheckedUpdateManyWithoutUserNestedInput;
    tugasDibuat?: Prisma.TugasUncheckedUpdateManyWithoutCreatorNestedInput;
    submission?: Prisma.SubmissionUncheckedUpdateManyWithoutUserNestedInput;
    nilai?: Prisma.NilaiUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutNilaiInput = {
    name: string;
    email: string;
    password: string;
    role: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    deletedAt?: Date | string | null;
    kelas?: Prisma.KelasCreateNestedOneWithoutUsersInput;
    absensi?: Prisma.AbsensiCreateNestedManyWithoutUserInput;
    izin?: Prisma.IzinCreateNestedManyWithoutUserInput;
    tugasDibuat?: Prisma.TugasCreateNestedManyWithoutCreatorInput;
    submission?: Prisma.SubmissionCreateNestedManyWithoutUserInput;
    log?: Prisma.LogAktivitasCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutNilaiInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    role: $Enums.Role;
    kelasId?: number | null;
    isActive?: boolean;
    createdAt?: Date | string;
    deletedAt?: Date | string | null;
    absensi?: Prisma.AbsensiUncheckedCreateNestedManyWithoutUserInput;
    izin?: Prisma.IzinUncheckedCreateNestedManyWithoutUserInput;
    tugasDibuat?: Prisma.TugasUncheckedCreateNestedManyWithoutCreatorInput;
    submission?: Prisma.SubmissionUncheckedCreateNestedManyWithoutUserInput;
    log?: Prisma.LogAktivitasUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutNilaiInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutNilaiInput, Prisma.UserUncheckedCreateWithoutNilaiInput>;
};
export type UserUpsertWithoutNilaiInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutNilaiInput, Prisma.UserUncheckedUpdateWithoutNilaiInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutNilaiInput, Prisma.UserUncheckedCreateWithoutNilaiInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutNilaiInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutNilaiInput, Prisma.UserUncheckedUpdateWithoutNilaiInput>;
};
export type UserUpdateWithoutNilaiInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    kelas?: Prisma.KelasUpdateOneWithoutUsersNestedInput;
    absensi?: Prisma.AbsensiUpdateManyWithoutUserNestedInput;
    izin?: Prisma.IzinUpdateManyWithoutUserNestedInput;
    tugasDibuat?: Prisma.TugasUpdateManyWithoutCreatorNestedInput;
    submission?: Prisma.SubmissionUpdateManyWithoutUserNestedInput;
    log?: Prisma.LogAktivitasUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutNilaiInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    kelasId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    absensi?: Prisma.AbsensiUncheckedUpdateManyWithoutUserNestedInput;
    izin?: Prisma.IzinUncheckedUpdateManyWithoutUserNestedInput;
    tugasDibuat?: Prisma.TugasUncheckedUpdateManyWithoutCreatorNestedInput;
    submission?: Prisma.SubmissionUncheckedUpdateManyWithoutUserNestedInput;
    log?: Prisma.LogAktivitasUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutSubmissionInput = {
    name: string;
    email: string;
    password: string;
    role: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    deletedAt?: Date | string | null;
    kelas?: Prisma.KelasCreateNestedOneWithoutUsersInput;
    absensi?: Prisma.AbsensiCreateNestedManyWithoutUserInput;
    izin?: Prisma.IzinCreateNestedManyWithoutUserInput;
    tugasDibuat?: Prisma.TugasCreateNestedManyWithoutCreatorInput;
    nilai?: Prisma.NilaiCreateNestedManyWithoutUserInput;
    log?: Prisma.LogAktivitasCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutSubmissionInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    role: $Enums.Role;
    kelasId?: number | null;
    isActive?: boolean;
    createdAt?: Date | string;
    deletedAt?: Date | string | null;
    absensi?: Prisma.AbsensiUncheckedCreateNestedManyWithoutUserInput;
    izin?: Prisma.IzinUncheckedCreateNestedManyWithoutUserInput;
    tugasDibuat?: Prisma.TugasUncheckedCreateNestedManyWithoutCreatorInput;
    nilai?: Prisma.NilaiUncheckedCreateNestedManyWithoutUserInput;
    log?: Prisma.LogAktivitasUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutSubmissionInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSubmissionInput, Prisma.UserUncheckedCreateWithoutSubmissionInput>;
};
export type UserUpsertWithoutSubmissionInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSubmissionInput, Prisma.UserUncheckedUpdateWithoutSubmissionInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSubmissionInput, Prisma.UserUncheckedCreateWithoutSubmissionInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSubmissionInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSubmissionInput, Prisma.UserUncheckedUpdateWithoutSubmissionInput>;
};
export type UserUpdateWithoutSubmissionInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    kelas?: Prisma.KelasUpdateOneWithoutUsersNestedInput;
    absensi?: Prisma.AbsensiUpdateManyWithoutUserNestedInput;
    izin?: Prisma.IzinUpdateManyWithoutUserNestedInput;
    tugasDibuat?: Prisma.TugasUpdateManyWithoutCreatorNestedInput;
    nilai?: Prisma.NilaiUpdateManyWithoutUserNestedInput;
    log?: Prisma.LogAktivitasUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutSubmissionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    kelasId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    absensi?: Prisma.AbsensiUncheckedUpdateManyWithoutUserNestedInput;
    izin?: Prisma.IzinUncheckedUpdateManyWithoutUserNestedInput;
    tugasDibuat?: Prisma.TugasUncheckedUpdateManyWithoutCreatorNestedInput;
    nilai?: Prisma.NilaiUncheckedUpdateManyWithoutUserNestedInput;
    log?: Prisma.LogAktivitasUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutTugasDibuatInput = {
    name: string;
    email: string;
    password: string;
    role: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    deletedAt?: Date | string | null;
    kelas?: Prisma.KelasCreateNestedOneWithoutUsersInput;
    absensi?: Prisma.AbsensiCreateNestedManyWithoutUserInput;
    izin?: Prisma.IzinCreateNestedManyWithoutUserInput;
    submission?: Prisma.SubmissionCreateNestedManyWithoutUserInput;
    nilai?: Prisma.NilaiCreateNestedManyWithoutUserInput;
    log?: Prisma.LogAktivitasCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutTugasDibuatInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    role: $Enums.Role;
    kelasId?: number | null;
    isActive?: boolean;
    createdAt?: Date | string;
    deletedAt?: Date | string | null;
    absensi?: Prisma.AbsensiUncheckedCreateNestedManyWithoutUserInput;
    izin?: Prisma.IzinUncheckedCreateNestedManyWithoutUserInput;
    submission?: Prisma.SubmissionUncheckedCreateNestedManyWithoutUserInput;
    nilai?: Prisma.NilaiUncheckedCreateNestedManyWithoutUserInput;
    log?: Prisma.LogAktivitasUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutTugasDibuatInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutTugasDibuatInput, Prisma.UserUncheckedCreateWithoutTugasDibuatInput>;
};
export type UserUpsertWithoutTugasDibuatInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutTugasDibuatInput, Prisma.UserUncheckedUpdateWithoutTugasDibuatInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutTugasDibuatInput, Prisma.UserUncheckedCreateWithoutTugasDibuatInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutTugasDibuatInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutTugasDibuatInput, Prisma.UserUncheckedUpdateWithoutTugasDibuatInput>;
};
export type UserUpdateWithoutTugasDibuatInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    kelas?: Prisma.KelasUpdateOneWithoutUsersNestedInput;
    absensi?: Prisma.AbsensiUpdateManyWithoutUserNestedInput;
    izin?: Prisma.IzinUpdateManyWithoutUserNestedInput;
    submission?: Prisma.SubmissionUpdateManyWithoutUserNestedInput;
    nilai?: Prisma.NilaiUpdateManyWithoutUserNestedInput;
    log?: Prisma.LogAktivitasUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutTugasDibuatInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    kelasId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    absensi?: Prisma.AbsensiUncheckedUpdateManyWithoutUserNestedInput;
    izin?: Prisma.IzinUncheckedUpdateManyWithoutUserNestedInput;
    submission?: Prisma.SubmissionUncheckedUpdateManyWithoutUserNestedInput;
    nilai?: Prisma.NilaiUncheckedUpdateManyWithoutUserNestedInput;
    log?: Prisma.LogAktivitasUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyKelasInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    role: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type UserUpdateWithoutKelasInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    absensi?: Prisma.AbsensiUpdateManyWithoutUserNestedInput;
    izin?: Prisma.IzinUpdateManyWithoutUserNestedInput;
    tugasDibuat?: Prisma.TugasUpdateManyWithoutCreatorNestedInput;
    submission?: Prisma.SubmissionUpdateManyWithoutUserNestedInput;
    nilai?: Prisma.NilaiUpdateManyWithoutUserNestedInput;
    log?: Prisma.LogAktivitasUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutKelasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    absensi?: Prisma.AbsensiUncheckedUpdateManyWithoutUserNestedInput;
    izin?: Prisma.IzinUncheckedUpdateManyWithoutUserNestedInput;
    tugasDibuat?: Prisma.TugasUncheckedUpdateManyWithoutCreatorNestedInput;
    submission?: Prisma.SubmissionUncheckedUpdateManyWithoutUserNestedInput;
    nilai?: Prisma.NilaiUncheckedUpdateManyWithoutUserNestedInput;
    log?: Prisma.LogAktivitasUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateManyWithoutKelasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
/**
 * Count Type UserCountOutputType
 */
export type UserCountOutputType = {
    absensi: number;
    izin: number;
    tugasDibuat: number;
    submission: number;
    nilai: number;
    log: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    absensi?: boolean | UserCountOutputTypeCountAbsensiArgs;
    izin?: boolean | UserCountOutputTypeCountIzinArgs;
    tugasDibuat?: boolean | UserCountOutputTypeCountTugasDibuatArgs;
    submission?: boolean | UserCountOutputTypeCountSubmissionArgs;
    nilai?: boolean | UserCountOutputTypeCountNilaiArgs;
    log?: boolean | UserCountOutputTypeCountLogArgs;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountAbsensiArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AbsensiWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountIzinArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IzinWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountTugasDibuatArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TugasWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountSubmissionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubmissionWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountNilaiArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NilaiWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountLogArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LogAktivitasWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    role?: boolean;
    kelasId?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    deletedAt?: boolean;
    kelas?: boolean | Prisma.User$kelasArgs<ExtArgs>;
    absensi?: boolean | Prisma.User$absensiArgs<ExtArgs>;
    izin?: boolean | Prisma.User$izinArgs<ExtArgs>;
    tugasDibuat?: boolean | Prisma.User$tugasDibuatArgs<ExtArgs>;
    submission?: boolean | Prisma.User$submissionArgs<ExtArgs>;
    nilai?: boolean | Prisma.User$nilaiArgs<ExtArgs>;
    log?: boolean | Prisma.User$logArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    role?: boolean;
    kelasId?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    deletedAt?: boolean;
    kelas?: boolean | Prisma.User$kelasArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    role?: boolean;
    kelasId?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    deletedAt?: boolean;
    kelas?: boolean | Prisma.User$kelasArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    role?: boolean;
    kelasId?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    deletedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "kelasId" | "isActive" | "createdAt" | "deletedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    kelas?: boolean | Prisma.User$kelasArgs<ExtArgs>;
    absensi?: boolean | Prisma.User$absensiArgs<ExtArgs>;
    izin?: boolean | Prisma.User$izinArgs<ExtArgs>;
    tugasDibuat?: boolean | Prisma.User$tugasDibuatArgs<ExtArgs>;
    submission?: boolean | Prisma.User$submissionArgs<ExtArgs>;
    nilai?: boolean | Prisma.User$nilaiArgs<ExtArgs>;
    log?: boolean | Prisma.User$logArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    kelas?: boolean | Prisma.User$kelasArgs<ExtArgs>;
};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    kelas?: boolean | Prisma.User$kelasArgs<ExtArgs>;
};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        kelas: Prisma.$KelasPayload<ExtArgs> | null;
        absensi: Prisma.$AbsensiPayload<ExtArgs>[];
        izin: Prisma.$IzinPayload<ExtArgs>[];
        tugasDibuat: Prisma.$TugasPayload<ExtArgs>[];
        submission: Prisma.$SubmissionPayload<ExtArgs>[];
        nilai: Prisma.$NilaiPayload<ExtArgs>[];
        log: Prisma.$LogAktivitasPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        email: string;
        password: string;
        role: $Enums.Role;
        kelasId: number | null;
        isActive: boolean;
        createdAt: Date;
        deletedAt: Date | null;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for User.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    kelas<T extends Prisma.User$kelasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$kelasArgs<ExtArgs>>): Prisma.Prisma__KelasClient<runtime.Types.Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    absensi<T extends Prisma.User$absensiArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$absensiArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    izin<T extends Prisma.User$izinArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$izinArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IzinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    tugasDibuat<T extends Prisma.User$tugasDibuatArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$tugasDibuatArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    submission<T extends Prisma.User$submissionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$submissionArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    nilai<T extends Prisma.User$nilaiArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$nilaiArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    log<T extends Prisma.User$logArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$logArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LogAktivitasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the User model
 */
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'Int'>;
    readonly name: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly password: Prisma.FieldRef<"User", 'String'>;
    readonly role: Prisma.FieldRef<"User", 'Role'>;
    readonly kelasId: Prisma.FieldRef<"User", 'Int'>;
    readonly isActive: Prisma.FieldRef<"User", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
/**
 * User findUnique
 */
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findUniqueOrThrow
 */
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findFirst
 */
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findFirstOrThrow
 */
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findMany
 */
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Users to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User create
 */
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a User.
     */
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
/**
 * User createMany
 */
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User createManyAndReturn
 */
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * User update
 */
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a User.
     */
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User updateMany
 */
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User updateManyAndReturn
 */
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * User upsert
 */
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: Prisma.UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
/**
 * User delete
 */
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which User to delete.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User deleteMany
 */
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
};
/**
 * User.kelas
 */
export type User$kelasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.KelasWhereInput;
};
/**
 * User.absensi
 */
export type User$absensiArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * User.izin
 */
export type User$izinArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * User.tugasDibuat
 */
export type User$tugasDibuatArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * User.submission
 */
export type User$submissionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: Prisma.SubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Submission
     */
    omit?: Prisma.SubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SubmissionInclude<ExtArgs> | null;
    where?: Prisma.SubmissionWhereInput;
    orderBy?: Prisma.SubmissionOrderByWithRelationInput | Prisma.SubmissionOrderByWithRelationInput[];
    cursor?: Prisma.SubmissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubmissionScalarFieldEnum | Prisma.SubmissionScalarFieldEnum[];
};
/**
 * User.nilai
 */
export type User$nilaiArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: Prisma.NilaiSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Nilai
     */
    omit?: Prisma.NilaiOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.NilaiInclude<ExtArgs> | null;
    where?: Prisma.NilaiWhereInput;
    orderBy?: Prisma.NilaiOrderByWithRelationInput | Prisma.NilaiOrderByWithRelationInput[];
    cursor?: Prisma.NilaiWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NilaiScalarFieldEnum | Prisma.NilaiScalarFieldEnum[];
};
/**
 * User.log
 */
export type User$logArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAktivitas
     */
    select?: Prisma.LogAktivitasSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LogAktivitas
     */
    omit?: Prisma.LogAktivitasOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LogAktivitasInclude<ExtArgs> | null;
    where?: Prisma.LogAktivitasWhereInput;
    orderBy?: Prisma.LogAktivitasOrderByWithRelationInput | Prisma.LogAktivitasOrderByWithRelationInput[];
    cursor?: Prisma.LogAktivitasWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LogAktivitasScalarFieldEnum | Prisma.LogAktivitasScalarFieldEnum[];
};
/**
 * User without action
 */
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=User.d.ts.map