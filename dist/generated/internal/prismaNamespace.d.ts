import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.2.0
 * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
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
export declare const DbNull: runtime.DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: runtime.JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "absensi" | "izin" | "kelas" | "logAktivitas" | "nilai" | "submission" | "tugas" | "user";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Absensi: {
            payload: Prisma.$AbsensiPayload<ExtArgs>;
            fields: Prisma.AbsensiFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AbsensiFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AbsensiPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AbsensiFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AbsensiPayload>;
                };
                findFirst: {
                    args: Prisma.AbsensiFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AbsensiPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AbsensiFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AbsensiPayload>;
                };
                findMany: {
                    args: Prisma.AbsensiFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AbsensiPayload>[];
                };
                create: {
                    args: Prisma.AbsensiCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AbsensiPayload>;
                };
                createMany: {
                    args: Prisma.AbsensiCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AbsensiCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AbsensiPayload>[];
                };
                delete: {
                    args: Prisma.AbsensiDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AbsensiPayload>;
                };
                update: {
                    args: Prisma.AbsensiUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AbsensiPayload>;
                };
                deleteMany: {
                    args: Prisma.AbsensiDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AbsensiUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AbsensiUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AbsensiPayload>[];
                };
                upsert: {
                    args: Prisma.AbsensiUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AbsensiPayload>;
                };
                aggregate: {
                    args: Prisma.AbsensiAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAbsensi>;
                };
                groupBy: {
                    args: Prisma.AbsensiGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AbsensiGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AbsensiCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AbsensiCountAggregateOutputType> | number;
                };
            };
        };
        Izin: {
            payload: Prisma.$IzinPayload<ExtArgs>;
            fields: Prisma.IzinFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.IzinFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IzinPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.IzinFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IzinPayload>;
                };
                findFirst: {
                    args: Prisma.IzinFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IzinPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.IzinFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IzinPayload>;
                };
                findMany: {
                    args: Prisma.IzinFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IzinPayload>[];
                };
                create: {
                    args: Prisma.IzinCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IzinPayload>;
                };
                createMany: {
                    args: Prisma.IzinCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.IzinCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IzinPayload>[];
                };
                delete: {
                    args: Prisma.IzinDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IzinPayload>;
                };
                update: {
                    args: Prisma.IzinUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IzinPayload>;
                };
                deleteMany: {
                    args: Prisma.IzinDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.IzinUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.IzinUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IzinPayload>[];
                };
                upsert: {
                    args: Prisma.IzinUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IzinPayload>;
                };
                aggregate: {
                    args: Prisma.IzinAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateIzin>;
                };
                groupBy: {
                    args: Prisma.IzinGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IzinGroupByOutputType>[];
                };
                count: {
                    args: Prisma.IzinCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IzinCountAggregateOutputType> | number;
                };
            };
        };
        Kelas: {
            payload: Prisma.$KelasPayload<ExtArgs>;
            fields: Prisma.KelasFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.KelasFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KelasPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.KelasFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KelasPayload>;
                };
                findFirst: {
                    args: Prisma.KelasFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KelasPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.KelasFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KelasPayload>;
                };
                findMany: {
                    args: Prisma.KelasFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KelasPayload>[];
                };
                create: {
                    args: Prisma.KelasCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KelasPayload>;
                };
                createMany: {
                    args: Prisma.KelasCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.KelasCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KelasPayload>[];
                };
                delete: {
                    args: Prisma.KelasDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KelasPayload>;
                };
                update: {
                    args: Prisma.KelasUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KelasPayload>;
                };
                deleteMany: {
                    args: Prisma.KelasDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.KelasUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.KelasUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KelasPayload>[];
                };
                upsert: {
                    args: Prisma.KelasUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KelasPayload>;
                };
                aggregate: {
                    args: Prisma.KelasAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateKelas>;
                };
                groupBy: {
                    args: Prisma.KelasGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.KelasGroupByOutputType>[];
                };
                count: {
                    args: Prisma.KelasCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.KelasCountAggregateOutputType> | number;
                };
            };
        };
        LogAktivitas: {
            payload: Prisma.$LogAktivitasPayload<ExtArgs>;
            fields: Prisma.LogAktivitasFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LogAktivitasFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogAktivitasPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LogAktivitasFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogAktivitasPayload>;
                };
                findFirst: {
                    args: Prisma.LogAktivitasFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogAktivitasPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LogAktivitasFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogAktivitasPayload>;
                };
                findMany: {
                    args: Prisma.LogAktivitasFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogAktivitasPayload>[];
                };
                create: {
                    args: Prisma.LogAktivitasCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogAktivitasPayload>;
                };
                createMany: {
                    args: Prisma.LogAktivitasCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LogAktivitasCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogAktivitasPayload>[];
                };
                delete: {
                    args: Prisma.LogAktivitasDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogAktivitasPayload>;
                };
                update: {
                    args: Prisma.LogAktivitasUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogAktivitasPayload>;
                };
                deleteMany: {
                    args: Prisma.LogAktivitasDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LogAktivitasUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LogAktivitasUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogAktivitasPayload>[];
                };
                upsert: {
                    args: Prisma.LogAktivitasUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogAktivitasPayload>;
                };
                aggregate: {
                    args: Prisma.LogAktivitasAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLogAktivitas>;
                };
                groupBy: {
                    args: Prisma.LogAktivitasGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LogAktivitasGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LogAktivitasCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LogAktivitasCountAggregateOutputType> | number;
                };
            };
        };
        Nilai: {
            payload: Prisma.$NilaiPayload<ExtArgs>;
            fields: Prisma.NilaiFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NilaiFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NilaiPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NilaiFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NilaiPayload>;
                };
                findFirst: {
                    args: Prisma.NilaiFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NilaiPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NilaiFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NilaiPayload>;
                };
                findMany: {
                    args: Prisma.NilaiFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NilaiPayload>[];
                };
                create: {
                    args: Prisma.NilaiCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NilaiPayload>;
                };
                createMany: {
                    args: Prisma.NilaiCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.NilaiCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NilaiPayload>[];
                };
                delete: {
                    args: Prisma.NilaiDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NilaiPayload>;
                };
                update: {
                    args: Prisma.NilaiUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NilaiPayload>;
                };
                deleteMany: {
                    args: Prisma.NilaiDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NilaiUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.NilaiUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NilaiPayload>[];
                };
                upsert: {
                    args: Prisma.NilaiUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NilaiPayload>;
                };
                aggregate: {
                    args: Prisma.NilaiAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNilai>;
                };
                groupBy: {
                    args: Prisma.NilaiGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NilaiGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NilaiCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NilaiCountAggregateOutputType> | number;
                };
            };
        };
        Submission: {
            payload: Prisma.$SubmissionPayload<ExtArgs>;
            fields: Prisma.SubmissionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SubmissionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubmissionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SubmissionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubmissionPayload>;
                };
                findFirst: {
                    args: Prisma.SubmissionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubmissionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SubmissionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubmissionPayload>;
                };
                findMany: {
                    args: Prisma.SubmissionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubmissionPayload>[];
                };
                create: {
                    args: Prisma.SubmissionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubmissionPayload>;
                };
                createMany: {
                    args: Prisma.SubmissionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SubmissionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubmissionPayload>[];
                };
                delete: {
                    args: Prisma.SubmissionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubmissionPayload>;
                };
                update: {
                    args: Prisma.SubmissionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubmissionPayload>;
                };
                deleteMany: {
                    args: Prisma.SubmissionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SubmissionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SubmissionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubmissionPayload>[];
                };
                upsert: {
                    args: Prisma.SubmissionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubmissionPayload>;
                };
                aggregate: {
                    args: Prisma.SubmissionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSubmission>;
                };
                groupBy: {
                    args: Prisma.SubmissionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubmissionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SubmissionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubmissionCountAggregateOutputType> | number;
                };
            };
        };
        Tugas: {
            payload: Prisma.$TugasPayload<ExtArgs>;
            fields: Prisma.TugasFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TugasFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TugasPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TugasFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TugasPayload>;
                };
                findFirst: {
                    args: Prisma.TugasFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TugasPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TugasFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TugasPayload>;
                };
                findMany: {
                    args: Prisma.TugasFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TugasPayload>[];
                };
                create: {
                    args: Prisma.TugasCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TugasPayload>;
                };
                createMany: {
                    args: Prisma.TugasCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TugasCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TugasPayload>[];
                };
                delete: {
                    args: Prisma.TugasDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TugasPayload>;
                };
                update: {
                    args: Prisma.TugasUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TugasPayload>;
                };
                deleteMany: {
                    args: Prisma.TugasDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TugasUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TugasUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TugasPayload>[];
                };
                upsert: {
                    args: Prisma.TugasUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TugasPayload>;
                };
                aggregate: {
                    args: Prisma.TugasAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTugas>;
                };
                groupBy: {
                    args: Prisma.TugasGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TugasGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TugasCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TugasCountAggregateOutputType> | number;
                };
            };
        };
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
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
/**
 * Field references
 */
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'StatusAbsensi'
 */
export type EnumStatusAbsensiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusAbsensi'>;
/**
 * Reference to a field of type 'StatusAbsensi[]'
 */
export type ListEnumStatusAbsensiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusAbsensi[]'>;
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'StatusIzin'
 */
export type EnumStatusIzinFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusIzin'>;
/**
 * Reference to a field of type 'StatusIzin[]'
 */
export type ListEnumStatusIzinFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusIzin[]'>;
/**
 * Reference to a field of type 'StatusSubmission'
 */
export type EnumStatusSubmissionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusSubmission'>;
/**
 * Reference to a field of type 'StatusSubmission[]'
 */
export type ListEnumStatusSubmissionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusSubmission[]'>;
/**
 * Reference to a field of type 'Role'
 */
export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>;
/**
 * Reference to a field of type 'Role[]'
 */
export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-pg`.
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl: string;
    adapter?: never;
}) & {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    absensi?: Prisma.AbsensiOmit;
    izin?: Prisma.IzinOmit;
    kelas?: Prisma.KelasOmit;
    logAktivitas?: Prisma.LogAktivitasOmit;
    nilai?: Prisma.NilaiOmit;
    submission?: Prisma.SubmissionOmit;
    tugas?: Prisma.TugasOmit;
    user?: Prisma.UserOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map