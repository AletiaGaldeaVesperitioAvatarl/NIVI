
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Absensi
 * 
 */
export type Absensi = $Result.DefaultSelection<Prisma.$AbsensiPayload>
/**
 * Model AbsensiSetting
 * 
 */
export type AbsensiSetting = $Result.DefaultSelection<Prisma.$AbsensiSettingPayload>
/**
 * Model Izin
 * 
 */
export type Izin = $Result.DefaultSelection<Prisma.$IzinPayload>
/**
 * Model JadwalAbsensi
 * 
 */
export type JadwalAbsensi = $Result.DefaultSelection<Prisma.$JadwalAbsensiPayload>
/**
 * Model Kelas
 * 
 */
export type Kelas = $Result.DefaultSelection<Prisma.$KelasPayload>
/**
 * Model LogAktivitas
 * 
 */
export type LogAktivitas = $Result.DefaultSelection<Prisma.$LogAktivitasPayload>
/**
 * Model MataPelajaran
 * 
 */
export type MataPelajaran = $Result.DefaultSelection<Prisma.$MataPelajaranPayload>
/**
 * Model Nilai
 * 
 */
export type Nilai = $Result.DefaultSelection<Prisma.$NilaiPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Submission
 * 
 */
export type Submission = $Result.DefaultSelection<Prisma.$SubmissionPayload>
/**
 * Model Tugas
 * 
 */
export type Tugas = $Result.DefaultSelection<Prisma.$TugasPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  admin: 'admin',
  pengajar: 'pengajar',
  santri: 'santri'
};

export type Role = (typeof Role)[keyof typeof Role]


export const StatusAbsensi: {
  hadir: 'hadir',
  izin: 'izin',
  alpha: 'alpha',
  sakit: 'sakit'
};

export type StatusAbsensi = (typeof StatusAbsensi)[keyof typeof StatusAbsensi]


export const StatusIzin: {
  menunggu: 'menunggu',
  disetujui: 'disetujui',
  ditolak: 'ditolak'
};

export type StatusIzin = (typeof StatusIzin)[keyof typeof StatusIzin]


export const StatusSubmission: {
  pending: 'pending',
  reviewed: 'reviewed',
  rejected: 'rejected'
};

export type StatusSubmission = (typeof StatusSubmission)[keyof typeof StatusSubmission]


export const Hari: {
  minggu: 'minggu',
  senin: 'senin',
  selasa: 'selasa',
  rabu: 'rabu',
  kamis: 'kamis',
  jumat: 'jumat',
  sabtu: 'sabtu'
};

export type Hari = (typeof Hari)[keyof typeof Hari]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type StatusAbsensi = $Enums.StatusAbsensi

export const StatusAbsensi: typeof $Enums.StatusAbsensi

export type StatusIzin = $Enums.StatusIzin

export const StatusIzin: typeof $Enums.StatusIzin

export type StatusSubmission = $Enums.StatusSubmission

export const StatusSubmission: typeof $Enums.StatusSubmission

export type Hari = $Enums.Hari

export const Hari: typeof $Enums.Hari

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Absensis
 * const absensis = await prisma.absensi.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Absensis
   * const absensis = await prisma.absensi.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.absensi`: Exposes CRUD operations for the **Absensi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Absensis
    * const absensis = await prisma.absensi.findMany()
    * ```
    */
  get absensi(): Prisma.AbsensiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.absensiSetting`: Exposes CRUD operations for the **AbsensiSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AbsensiSettings
    * const absensiSettings = await prisma.absensiSetting.findMany()
    * ```
    */
  get absensiSetting(): Prisma.AbsensiSettingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.izin`: Exposes CRUD operations for the **Izin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Izins
    * const izins = await prisma.izin.findMany()
    * ```
    */
  get izin(): Prisma.IzinDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jadwalAbsensi`: Exposes CRUD operations for the **JadwalAbsensi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JadwalAbsensis
    * const jadwalAbsensis = await prisma.jadwalAbsensi.findMany()
    * ```
    */
  get jadwalAbsensi(): Prisma.JadwalAbsensiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kelas`: Exposes CRUD operations for the **Kelas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kelas
    * const kelas = await prisma.kelas.findMany()
    * ```
    */
  get kelas(): Prisma.KelasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logAktivitas`: Exposes CRUD operations for the **LogAktivitas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LogAktivitas
    * const logAktivitas = await prisma.logAktivitas.findMany()
    * ```
    */
  get logAktivitas(): Prisma.LogAktivitasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mataPelajaran`: Exposes CRUD operations for the **MataPelajaran** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MataPelajarans
    * const mataPelajarans = await prisma.mataPelajaran.findMany()
    * ```
    */
  get mataPelajaran(): Prisma.MataPelajaranDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nilai`: Exposes CRUD operations for the **Nilai** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nilais
    * const nilais = await prisma.nilai.findMany()
    * ```
    */
  get nilai(): Prisma.NilaiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.submission`: Exposes CRUD operations for the **Submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submission.findMany()
    * ```
    */
  get submission(): Prisma.SubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tugas`: Exposes CRUD operations for the **Tugas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tugases
    * const tugases = await prisma.tugas.findMany()
    * ```
    */
  get tugas(): Prisma.TugasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Absensi: 'Absensi',
    AbsensiSetting: 'AbsensiSetting',
    Izin: 'Izin',
    JadwalAbsensi: 'JadwalAbsensi',
    Kelas: 'Kelas',
    LogAktivitas: 'LogAktivitas',
    MataPelajaran: 'MataPelajaran',
    Nilai: 'Nilai',
    Notification: 'Notification',
    Profile: 'Profile',
    Submission: 'Submission',
    Tugas: 'Tugas',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "absensi" | "absensiSetting" | "izin" | "jadwalAbsensi" | "kelas" | "logAktivitas" | "mataPelajaran" | "nilai" | "notification" | "profile" | "submission" | "tugas" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Absensi: {
        payload: Prisma.$AbsensiPayload<ExtArgs>
        fields: Prisma.AbsensiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AbsensiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AbsensiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>
          }
          findFirst: {
            args: Prisma.AbsensiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AbsensiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>
          }
          findMany: {
            args: Prisma.AbsensiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>[]
          }
          create: {
            args: Prisma.AbsensiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>
          }
          createMany: {
            args: Prisma.AbsensiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AbsensiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>[]
          }
          delete: {
            args: Prisma.AbsensiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>
          }
          update: {
            args: Prisma.AbsensiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>
          }
          deleteMany: {
            args: Prisma.AbsensiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AbsensiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AbsensiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>[]
          }
          upsert: {
            args: Prisma.AbsensiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>
          }
          aggregate: {
            args: Prisma.AbsensiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAbsensi>
          }
          groupBy: {
            args: Prisma.AbsensiGroupByArgs<ExtArgs>
            result: $Utils.Optional<AbsensiGroupByOutputType>[]
          }
          count: {
            args: Prisma.AbsensiCountArgs<ExtArgs>
            result: $Utils.Optional<AbsensiCountAggregateOutputType> | number
          }
        }
      }
      AbsensiSetting: {
        payload: Prisma.$AbsensiSettingPayload<ExtArgs>
        fields: Prisma.AbsensiSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AbsensiSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AbsensiSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiSettingPayload>
          }
          findFirst: {
            args: Prisma.AbsensiSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AbsensiSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiSettingPayload>
          }
          findMany: {
            args: Prisma.AbsensiSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiSettingPayload>[]
          }
          create: {
            args: Prisma.AbsensiSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiSettingPayload>
          }
          createMany: {
            args: Prisma.AbsensiSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AbsensiSettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiSettingPayload>[]
          }
          delete: {
            args: Prisma.AbsensiSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiSettingPayload>
          }
          update: {
            args: Prisma.AbsensiSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiSettingPayload>
          }
          deleteMany: {
            args: Prisma.AbsensiSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AbsensiSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AbsensiSettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiSettingPayload>[]
          }
          upsert: {
            args: Prisma.AbsensiSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiSettingPayload>
          }
          aggregate: {
            args: Prisma.AbsensiSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAbsensiSetting>
          }
          groupBy: {
            args: Prisma.AbsensiSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<AbsensiSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.AbsensiSettingCountArgs<ExtArgs>
            result: $Utils.Optional<AbsensiSettingCountAggregateOutputType> | number
          }
        }
      }
      Izin: {
        payload: Prisma.$IzinPayload<ExtArgs>
        fields: Prisma.IzinFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IzinFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IzinPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IzinFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IzinPayload>
          }
          findFirst: {
            args: Prisma.IzinFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IzinPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IzinFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IzinPayload>
          }
          findMany: {
            args: Prisma.IzinFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IzinPayload>[]
          }
          create: {
            args: Prisma.IzinCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IzinPayload>
          }
          createMany: {
            args: Prisma.IzinCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IzinCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IzinPayload>[]
          }
          delete: {
            args: Prisma.IzinDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IzinPayload>
          }
          update: {
            args: Prisma.IzinUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IzinPayload>
          }
          deleteMany: {
            args: Prisma.IzinDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IzinUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IzinUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IzinPayload>[]
          }
          upsert: {
            args: Prisma.IzinUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IzinPayload>
          }
          aggregate: {
            args: Prisma.IzinAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIzin>
          }
          groupBy: {
            args: Prisma.IzinGroupByArgs<ExtArgs>
            result: $Utils.Optional<IzinGroupByOutputType>[]
          }
          count: {
            args: Prisma.IzinCountArgs<ExtArgs>
            result: $Utils.Optional<IzinCountAggregateOutputType> | number
          }
        }
      }
      JadwalAbsensi: {
        payload: Prisma.$JadwalAbsensiPayload<ExtArgs>
        fields: Prisma.JadwalAbsensiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JadwalAbsensiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalAbsensiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JadwalAbsensiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalAbsensiPayload>
          }
          findFirst: {
            args: Prisma.JadwalAbsensiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalAbsensiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JadwalAbsensiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalAbsensiPayload>
          }
          findMany: {
            args: Prisma.JadwalAbsensiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalAbsensiPayload>[]
          }
          create: {
            args: Prisma.JadwalAbsensiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalAbsensiPayload>
          }
          createMany: {
            args: Prisma.JadwalAbsensiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JadwalAbsensiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalAbsensiPayload>[]
          }
          delete: {
            args: Prisma.JadwalAbsensiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalAbsensiPayload>
          }
          update: {
            args: Prisma.JadwalAbsensiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalAbsensiPayload>
          }
          deleteMany: {
            args: Prisma.JadwalAbsensiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JadwalAbsensiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JadwalAbsensiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalAbsensiPayload>[]
          }
          upsert: {
            args: Prisma.JadwalAbsensiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalAbsensiPayload>
          }
          aggregate: {
            args: Prisma.JadwalAbsensiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJadwalAbsensi>
          }
          groupBy: {
            args: Prisma.JadwalAbsensiGroupByArgs<ExtArgs>
            result: $Utils.Optional<JadwalAbsensiGroupByOutputType>[]
          }
          count: {
            args: Prisma.JadwalAbsensiCountArgs<ExtArgs>
            result: $Utils.Optional<JadwalAbsensiCountAggregateOutputType> | number
          }
        }
      }
      Kelas: {
        payload: Prisma.$KelasPayload<ExtArgs>
        fields: Prisma.KelasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KelasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KelasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>
          }
          findFirst: {
            args: Prisma.KelasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KelasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>
          }
          findMany: {
            args: Prisma.KelasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>[]
          }
          create: {
            args: Prisma.KelasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>
          }
          createMany: {
            args: Prisma.KelasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KelasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>[]
          }
          delete: {
            args: Prisma.KelasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>
          }
          update: {
            args: Prisma.KelasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>
          }
          deleteMany: {
            args: Prisma.KelasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KelasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KelasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>[]
          }
          upsert: {
            args: Prisma.KelasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>
          }
          aggregate: {
            args: Prisma.KelasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKelas>
          }
          groupBy: {
            args: Prisma.KelasGroupByArgs<ExtArgs>
            result: $Utils.Optional<KelasGroupByOutputType>[]
          }
          count: {
            args: Prisma.KelasCountArgs<ExtArgs>
            result: $Utils.Optional<KelasCountAggregateOutputType> | number
          }
        }
      }
      LogAktivitas: {
        payload: Prisma.$LogAktivitasPayload<ExtArgs>
        fields: Prisma.LogAktivitasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogAktivitasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAktivitasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogAktivitasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAktivitasPayload>
          }
          findFirst: {
            args: Prisma.LogAktivitasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAktivitasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogAktivitasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAktivitasPayload>
          }
          findMany: {
            args: Prisma.LogAktivitasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAktivitasPayload>[]
          }
          create: {
            args: Prisma.LogAktivitasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAktivitasPayload>
          }
          createMany: {
            args: Prisma.LogAktivitasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogAktivitasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAktivitasPayload>[]
          }
          delete: {
            args: Prisma.LogAktivitasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAktivitasPayload>
          }
          update: {
            args: Prisma.LogAktivitasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAktivitasPayload>
          }
          deleteMany: {
            args: Prisma.LogAktivitasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogAktivitasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogAktivitasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAktivitasPayload>[]
          }
          upsert: {
            args: Prisma.LogAktivitasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAktivitasPayload>
          }
          aggregate: {
            args: Prisma.LogAktivitasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogAktivitas>
          }
          groupBy: {
            args: Prisma.LogAktivitasGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogAktivitasGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogAktivitasCountArgs<ExtArgs>
            result: $Utils.Optional<LogAktivitasCountAggregateOutputType> | number
          }
        }
      }
      MataPelajaran: {
        payload: Prisma.$MataPelajaranPayload<ExtArgs>
        fields: Prisma.MataPelajaranFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MataPelajaranFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MataPelajaranPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MataPelajaranFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MataPelajaranPayload>
          }
          findFirst: {
            args: Prisma.MataPelajaranFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MataPelajaranPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MataPelajaranFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MataPelajaranPayload>
          }
          findMany: {
            args: Prisma.MataPelajaranFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MataPelajaranPayload>[]
          }
          create: {
            args: Prisma.MataPelajaranCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MataPelajaranPayload>
          }
          createMany: {
            args: Prisma.MataPelajaranCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MataPelajaranCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MataPelajaranPayload>[]
          }
          delete: {
            args: Prisma.MataPelajaranDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MataPelajaranPayload>
          }
          update: {
            args: Prisma.MataPelajaranUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MataPelajaranPayload>
          }
          deleteMany: {
            args: Prisma.MataPelajaranDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MataPelajaranUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MataPelajaranUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MataPelajaranPayload>[]
          }
          upsert: {
            args: Prisma.MataPelajaranUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MataPelajaranPayload>
          }
          aggregate: {
            args: Prisma.MataPelajaranAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMataPelajaran>
          }
          groupBy: {
            args: Prisma.MataPelajaranGroupByArgs<ExtArgs>
            result: $Utils.Optional<MataPelajaranGroupByOutputType>[]
          }
          count: {
            args: Prisma.MataPelajaranCountArgs<ExtArgs>
            result: $Utils.Optional<MataPelajaranCountAggregateOutputType> | number
          }
        }
      }
      Nilai: {
        payload: Prisma.$NilaiPayload<ExtArgs>
        fields: Prisma.NilaiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NilaiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NilaiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiPayload>
          }
          findFirst: {
            args: Prisma.NilaiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NilaiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiPayload>
          }
          findMany: {
            args: Prisma.NilaiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiPayload>[]
          }
          create: {
            args: Prisma.NilaiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiPayload>
          }
          createMany: {
            args: Prisma.NilaiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NilaiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiPayload>[]
          }
          delete: {
            args: Prisma.NilaiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiPayload>
          }
          update: {
            args: Prisma.NilaiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiPayload>
          }
          deleteMany: {
            args: Prisma.NilaiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NilaiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NilaiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiPayload>[]
          }
          upsert: {
            args: Prisma.NilaiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiPayload>
          }
          aggregate: {
            args: Prisma.NilaiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNilai>
          }
          groupBy: {
            args: Prisma.NilaiGroupByArgs<ExtArgs>
            result: $Utils.Optional<NilaiGroupByOutputType>[]
          }
          count: {
            args: Prisma.NilaiCountArgs<ExtArgs>
            result: $Utils.Optional<NilaiCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Submission: {
        payload: Prisma.$SubmissionPayload<ExtArgs>
        fields: Prisma.SubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findFirst: {
            args: Prisma.SubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findMany: {
            args: Prisma.SubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          create: {
            args: Prisma.SubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          createMany: {
            args: Prisma.SubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          delete: {
            args: Prisma.SubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          update: {
            args: Prisma.SubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          deleteMany: {
            args: Prisma.SubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          upsert: {
            args: Prisma.SubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          aggregate: {
            args: Prisma.SubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmission>
          }
          groupBy: {
            args: Prisma.SubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionCountAggregateOutputType> | number
          }
        }
      }
      Tugas: {
        payload: Prisma.$TugasPayload<ExtArgs>
        fields: Prisma.TugasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TugasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TugasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TugasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TugasPayload>
          }
          findFirst: {
            args: Prisma.TugasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TugasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TugasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TugasPayload>
          }
          findMany: {
            args: Prisma.TugasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TugasPayload>[]
          }
          create: {
            args: Prisma.TugasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TugasPayload>
          }
          createMany: {
            args: Prisma.TugasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TugasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TugasPayload>[]
          }
          delete: {
            args: Prisma.TugasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TugasPayload>
          }
          update: {
            args: Prisma.TugasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TugasPayload>
          }
          deleteMany: {
            args: Prisma.TugasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TugasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TugasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TugasPayload>[]
          }
          upsert: {
            args: Prisma.TugasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TugasPayload>
          }
          aggregate: {
            args: Prisma.TugasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTugas>
          }
          groupBy: {
            args: Prisma.TugasGroupByArgs<ExtArgs>
            result: $Utils.Optional<TugasGroupByOutputType>[]
          }
          count: {
            args: Prisma.TugasCountArgs<ExtArgs>
            result: $Utils.Optional<TugasCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    omit?: Prisma.GlobalOmitConfig
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
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    absensi?: AbsensiOmit
    absensiSetting?: AbsensiSettingOmit
    izin?: IzinOmit
    jadwalAbsensi?: JadwalAbsensiOmit
    kelas?: KelasOmit
    logAktivitas?: LogAktivitasOmit
    mataPelajaran?: MataPelajaranOmit
    nilai?: NilaiOmit
    notification?: NotificationOmit
    profile?: ProfileOmit
    submission?: SubmissionOmit
    tugas?: TugasOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type JadwalAbsensiCountOutputType
   */

  export type JadwalAbsensiCountOutputType = {
    absensi: number
  }

  export type JadwalAbsensiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    absensi?: boolean | JadwalAbsensiCountOutputTypeCountAbsensiArgs
  }

  // Custom InputTypes
  /**
   * JadwalAbsensiCountOutputType without action
   */
  export type JadwalAbsensiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalAbsensiCountOutputType
     */
    select?: JadwalAbsensiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JadwalAbsensiCountOutputType without action
   */
  export type JadwalAbsensiCountOutputTypeCountAbsensiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbsensiWhereInput
  }


  /**
   * Count Type KelasCountOutputType
   */

  export type KelasCountOutputType = {
    santri: number
    pengajar: number
    absensi: number
    jadwal: number
    izin: number
    tugas: number
  }

  export type KelasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    santri?: boolean | KelasCountOutputTypeCountSantriArgs
    pengajar?: boolean | KelasCountOutputTypeCountPengajarArgs
    absensi?: boolean | KelasCountOutputTypeCountAbsensiArgs
    jadwal?: boolean | KelasCountOutputTypeCountJadwalArgs
    izin?: boolean | KelasCountOutputTypeCountIzinArgs
    tugas?: boolean | KelasCountOutputTypeCountTugasArgs
  }

  // Custom InputTypes
  /**
   * KelasCountOutputType without action
   */
  export type KelasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KelasCountOutputType
     */
    select?: KelasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KelasCountOutputType without action
   */
  export type KelasCountOutputTypeCountSantriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * KelasCountOutputType without action
   */
  export type KelasCountOutputTypeCountPengajarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * KelasCountOutputType without action
   */
  export type KelasCountOutputTypeCountAbsensiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbsensiWhereInput
  }

  /**
   * KelasCountOutputType without action
   */
  export type KelasCountOutputTypeCountJadwalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JadwalAbsensiWhereInput
  }

  /**
   * KelasCountOutputType without action
   */
  export type KelasCountOutputTypeCountIzinArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IzinWhereInput
  }

  /**
   * KelasCountOutputType without action
   */
  export type KelasCountOutputTypeCountTugasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TugasWhereInput
  }


  /**
   * Count Type MataPelajaranCountOutputType
   */

  export type MataPelajaranCountOutputType = {
    tugas: number
  }

  export type MataPelajaranCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tugas?: boolean | MataPelajaranCountOutputTypeCountTugasArgs
  }

  // Custom InputTypes
  /**
   * MataPelajaranCountOutputType without action
   */
  export type MataPelajaranCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MataPelajaranCountOutputType
     */
    select?: MataPelajaranCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MataPelajaranCountOutputType without action
   */
  export type MataPelajaranCountOutputTypeCountTugasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TugasWhereInput
  }


  /**
   * Count Type TugasCountOutputType
   */

  export type TugasCountOutputType = {
    submission: number
  }

  export type TugasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | TugasCountOutputTypeCountSubmissionArgs
  }

  // Custom InputTypes
  /**
   * TugasCountOutputType without action
   */
  export type TugasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TugasCountOutputType
     */
    select?: TugasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TugasCountOutputType without action
   */
  export type TugasCountOutputTypeCountSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    kelasAjar: number
    absensi: number
    izin: number
    tugasDibuat: number
    submission: number
    log: number
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kelasAjar?: boolean | UserCountOutputTypeCountKelasAjarArgs
    absensi?: boolean | UserCountOutputTypeCountAbsensiArgs
    izin?: boolean | UserCountOutputTypeCountIzinArgs
    tugasDibuat?: boolean | UserCountOutputTypeCountTugasDibuatArgs
    submission?: boolean | UserCountOutputTypeCountSubmissionArgs
    log?: boolean | UserCountOutputTypeCountLogArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountKelasAjarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KelasWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAbsensiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbsensiWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIzinArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IzinWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTugasDibuatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TugasWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogAktivitasWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Absensi
   */

  export type AggregateAbsensi = {
    _count: AbsensiCountAggregateOutputType | null
    _avg: AbsensiAvgAggregateOutputType | null
    _sum: AbsensiSumAggregateOutputType | null
    _min: AbsensiMinAggregateOutputType | null
    _max: AbsensiMaxAggregateOutputType | null
  }

  export type AbsensiAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    kelasId: number | null
    jadwalId: number | null
    aiConfidence: number | null
  }

  export type AbsensiSumAggregateOutputType = {
    id: number | null
    userId: number | null
    kelasId: number | null
    jadwalId: number | null
    aiConfidence: number | null
  }

  export type AbsensiMinAggregateOutputType = {
    id: number | null
    userId: number | null
    kelasId: number | null
    jadwalId: number | null
    tanggal: Date | null
    status: $Enums.StatusAbsensi | null
    createdAt: Date | null
    aiComment: string | null
    aiTone: string | null
    aiConfidence: number | null
  }

  export type AbsensiMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    kelasId: number | null
    jadwalId: number | null
    tanggal: Date | null
    status: $Enums.StatusAbsensi | null
    createdAt: Date | null
    aiComment: string | null
    aiTone: string | null
    aiConfidence: number | null
  }

  export type AbsensiCountAggregateOutputType = {
    id: number
    userId: number
    kelasId: number
    jadwalId: number
    tanggal: number
    status: number
    createdAt: number
    aiComment: number
    aiTone: number
    aiConfidence: number
    _all: number
  }


  export type AbsensiAvgAggregateInputType = {
    id?: true
    userId?: true
    kelasId?: true
    jadwalId?: true
    aiConfidence?: true
  }

  export type AbsensiSumAggregateInputType = {
    id?: true
    userId?: true
    kelasId?: true
    jadwalId?: true
    aiConfidence?: true
  }

  export type AbsensiMinAggregateInputType = {
    id?: true
    userId?: true
    kelasId?: true
    jadwalId?: true
    tanggal?: true
    status?: true
    createdAt?: true
    aiComment?: true
    aiTone?: true
    aiConfidence?: true
  }

  export type AbsensiMaxAggregateInputType = {
    id?: true
    userId?: true
    kelasId?: true
    jadwalId?: true
    tanggal?: true
    status?: true
    createdAt?: true
    aiComment?: true
    aiTone?: true
    aiConfidence?: true
  }

  export type AbsensiCountAggregateInputType = {
    id?: true
    userId?: true
    kelasId?: true
    jadwalId?: true
    tanggal?: true
    status?: true
    createdAt?: true
    aiComment?: true
    aiTone?: true
    aiConfidence?: true
    _all?: true
  }

  export type AbsensiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Absensi to aggregate.
     */
    where?: AbsensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Absensis to fetch.
     */
    orderBy?: AbsensiOrderByWithRelationInput | AbsensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AbsensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Absensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Absensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Absensis
    **/
    _count?: true | AbsensiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AbsensiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AbsensiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AbsensiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AbsensiMaxAggregateInputType
  }

  export type GetAbsensiAggregateType<T extends AbsensiAggregateArgs> = {
        [P in keyof T & keyof AggregateAbsensi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAbsensi[P]>
      : GetScalarType<T[P], AggregateAbsensi[P]>
  }




  export type AbsensiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbsensiWhereInput
    orderBy?: AbsensiOrderByWithAggregationInput | AbsensiOrderByWithAggregationInput[]
    by: AbsensiScalarFieldEnum[] | AbsensiScalarFieldEnum
    having?: AbsensiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AbsensiCountAggregateInputType | true
    _avg?: AbsensiAvgAggregateInputType
    _sum?: AbsensiSumAggregateInputType
    _min?: AbsensiMinAggregateInputType
    _max?: AbsensiMaxAggregateInputType
  }

  export type AbsensiGroupByOutputType = {
    id: number
    userId: number
    kelasId: number
    jadwalId: number | null
    tanggal: Date
    status: $Enums.StatusAbsensi
    createdAt: Date
    aiComment: string | null
    aiTone: string | null
    aiConfidence: number | null
    _count: AbsensiCountAggregateOutputType | null
    _avg: AbsensiAvgAggregateOutputType | null
    _sum: AbsensiSumAggregateOutputType | null
    _min: AbsensiMinAggregateOutputType | null
    _max: AbsensiMaxAggregateOutputType | null
  }

  type GetAbsensiGroupByPayload<T extends AbsensiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AbsensiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AbsensiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AbsensiGroupByOutputType[P]>
            : GetScalarType<T[P], AbsensiGroupByOutputType[P]>
        }
      >
    >


  export type AbsensiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    kelasId?: boolean
    jadwalId?: boolean
    tanggal?: boolean
    status?: boolean
    createdAt?: boolean
    aiComment?: boolean
    aiTone?: boolean
    aiConfidence?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
    jadwal?: boolean | Absensi$jadwalArgs<ExtArgs>
  }, ExtArgs["result"]["absensi"]>

  export type AbsensiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    kelasId?: boolean
    jadwalId?: boolean
    tanggal?: boolean
    status?: boolean
    createdAt?: boolean
    aiComment?: boolean
    aiTone?: boolean
    aiConfidence?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
    jadwal?: boolean | Absensi$jadwalArgs<ExtArgs>
  }, ExtArgs["result"]["absensi"]>

  export type AbsensiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    kelasId?: boolean
    jadwalId?: boolean
    tanggal?: boolean
    status?: boolean
    createdAt?: boolean
    aiComment?: boolean
    aiTone?: boolean
    aiConfidence?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
    jadwal?: boolean | Absensi$jadwalArgs<ExtArgs>
  }, ExtArgs["result"]["absensi"]>

  export type AbsensiSelectScalar = {
    id?: boolean
    userId?: boolean
    kelasId?: boolean
    jadwalId?: boolean
    tanggal?: boolean
    status?: boolean
    createdAt?: boolean
    aiComment?: boolean
    aiTone?: boolean
    aiConfidence?: boolean
  }

  export type AbsensiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "kelasId" | "jadwalId" | "tanggal" | "status" | "createdAt" | "aiComment" | "aiTone" | "aiConfidence", ExtArgs["result"]["absensi"]>
  export type AbsensiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
    jadwal?: boolean | Absensi$jadwalArgs<ExtArgs>
  }
  export type AbsensiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
    jadwal?: boolean | Absensi$jadwalArgs<ExtArgs>
  }
  export type AbsensiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
    jadwal?: boolean | Absensi$jadwalArgs<ExtArgs>
  }

  export type $AbsensiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Absensi"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      kelas: Prisma.$KelasPayload<ExtArgs>
      jadwal: Prisma.$JadwalAbsensiPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      kelasId: number
      jadwalId: number | null
      tanggal: Date
      status: $Enums.StatusAbsensi
      createdAt: Date
      aiComment: string | null
      aiTone: string | null
      aiConfidence: number | null
    }, ExtArgs["result"]["absensi"]>
    composites: {}
  }

  type AbsensiGetPayload<S extends boolean | null | undefined | AbsensiDefaultArgs> = $Result.GetResult<Prisma.$AbsensiPayload, S>

  type AbsensiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AbsensiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AbsensiCountAggregateInputType | true
    }

  export interface AbsensiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Absensi'], meta: { name: 'Absensi' } }
    /**
     * Find zero or one Absensi that matches the filter.
     * @param {AbsensiFindUniqueArgs} args - Arguments to find a Absensi
     * @example
     * // Get one Absensi
     * const absensi = await prisma.absensi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AbsensiFindUniqueArgs>(args: SelectSubset<T, AbsensiFindUniqueArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Absensi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AbsensiFindUniqueOrThrowArgs} args - Arguments to find a Absensi
     * @example
     * // Get one Absensi
     * const absensi = await prisma.absensi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AbsensiFindUniqueOrThrowArgs>(args: SelectSubset<T, AbsensiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Absensi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiFindFirstArgs} args - Arguments to find a Absensi
     * @example
     * // Get one Absensi
     * const absensi = await prisma.absensi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AbsensiFindFirstArgs>(args?: SelectSubset<T, AbsensiFindFirstArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Absensi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiFindFirstOrThrowArgs} args - Arguments to find a Absensi
     * @example
     * // Get one Absensi
     * const absensi = await prisma.absensi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AbsensiFindFirstOrThrowArgs>(args?: SelectSubset<T, AbsensiFindFirstOrThrowArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Absensis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Absensis
     * const absensis = await prisma.absensi.findMany()
     * 
     * // Get first 10 Absensis
     * const absensis = await prisma.absensi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const absensiWithIdOnly = await prisma.absensi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AbsensiFindManyArgs>(args?: SelectSubset<T, AbsensiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Absensi.
     * @param {AbsensiCreateArgs} args - Arguments to create a Absensi.
     * @example
     * // Create one Absensi
     * const Absensi = await prisma.absensi.create({
     *   data: {
     *     // ... data to create a Absensi
     *   }
     * })
     * 
     */
    create<T extends AbsensiCreateArgs>(args: SelectSubset<T, AbsensiCreateArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Absensis.
     * @param {AbsensiCreateManyArgs} args - Arguments to create many Absensis.
     * @example
     * // Create many Absensis
     * const absensi = await prisma.absensi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AbsensiCreateManyArgs>(args?: SelectSubset<T, AbsensiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Absensis and returns the data saved in the database.
     * @param {AbsensiCreateManyAndReturnArgs} args - Arguments to create many Absensis.
     * @example
     * // Create many Absensis
     * const absensi = await prisma.absensi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Absensis and only return the `id`
     * const absensiWithIdOnly = await prisma.absensi.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AbsensiCreateManyAndReturnArgs>(args?: SelectSubset<T, AbsensiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Absensi.
     * @param {AbsensiDeleteArgs} args - Arguments to delete one Absensi.
     * @example
     * // Delete one Absensi
     * const Absensi = await prisma.absensi.delete({
     *   where: {
     *     // ... filter to delete one Absensi
     *   }
     * })
     * 
     */
    delete<T extends AbsensiDeleteArgs>(args: SelectSubset<T, AbsensiDeleteArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Absensi.
     * @param {AbsensiUpdateArgs} args - Arguments to update one Absensi.
     * @example
     * // Update one Absensi
     * const absensi = await prisma.absensi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AbsensiUpdateArgs>(args: SelectSubset<T, AbsensiUpdateArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Absensis.
     * @param {AbsensiDeleteManyArgs} args - Arguments to filter Absensis to delete.
     * @example
     * // Delete a few Absensis
     * const { count } = await prisma.absensi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AbsensiDeleteManyArgs>(args?: SelectSubset<T, AbsensiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Absensis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Absensis
     * const absensi = await prisma.absensi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AbsensiUpdateManyArgs>(args: SelectSubset<T, AbsensiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Absensis and returns the data updated in the database.
     * @param {AbsensiUpdateManyAndReturnArgs} args - Arguments to update many Absensis.
     * @example
     * // Update many Absensis
     * const absensi = await prisma.absensi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Absensis and only return the `id`
     * const absensiWithIdOnly = await prisma.absensi.updateManyAndReturn({
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
    updateManyAndReturn<T extends AbsensiUpdateManyAndReturnArgs>(args: SelectSubset<T, AbsensiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Absensi.
     * @param {AbsensiUpsertArgs} args - Arguments to update or create a Absensi.
     * @example
     * // Update or create a Absensi
     * const absensi = await prisma.absensi.upsert({
     *   create: {
     *     // ... data to create a Absensi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Absensi we want to update
     *   }
     * })
     */
    upsert<T extends AbsensiUpsertArgs>(args: SelectSubset<T, AbsensiUpsertArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Absensis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiCountArgs} args - Arguments to filter Absensis to count.
     * @example
     * // Count the number of Absensis
     * const count = await prisma.absensi.count({
     *   where: {
     *     // ... the filter for the Absensis we want to count
     *   }
     * })
    **/
    count<T extends AbsensiCountArgs>(
      args?: Subset<T, AbsensiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AbsensiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Absensi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AbsensiAggregateArgs>(args: Subset<T, AbsensiAggregateArgs>): Prisma.PrismaPromise<GetAbsensiAggregateType<T>>

    /**
     * Group by Absensi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends AbsensiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AbsensiGroupByArgs['orderBy'] }
        : { orderBy?: AbsensiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AbsensiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAbsensiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Absensi model
   */
  readonly fields: AbsensiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Absensi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AbsensiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    kelas<T extends KelasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KelasDefaultArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    jadwal<T extends Absensi$jadwalArgs<ExtArgs> = {}>(args?: Subset<T, Absensi$jadwalArgs<ExtArgs>>): Prisma__JadwalAbsensiClient<$Result.GetResult<Prisma.$JadwalAbsensiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Absensi model
   */
  interface AbsensiFieldRefs {
    readonly id: FieldRef<"Absensi", 'Int'>
    readonly userId: FieldRef<"Absensi", 'Int'>
    readonly kelasId: FieldRef<"Absensi", 'Int'>
    readonly jadwalId: FieldRef<"Absensi", 'Int'>
    readonly tanggal: FieldRef<"Absensi", 'DateTime'>
    readonly status: FieldRef<"Absensi", 'StatusAbsensi'>
    readonly createdAt: FieldRef<"Absensi", 'DateTime'>
    readonly aiComment: FieldRef<"Absensi", 'String'>
    readonly aiTone: FieldRef<"Absensi", 'String'>
    readonly aiConfidence: FieldRef<"Absensi", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Absensi findUnique
   */
  export type AbsensiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * Filter, which Absensi to fetch.
     */
    where: AbsensiWhereUniqueInput
  }

  /**
   * Absensi findUniqueOrThrow
   */
  export type AbsensiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * Filter, which Absensi to fetch.
     */
    where: AbsensiWhereUniqueInput
  }

  /**
   * Absensi findFirst
   */
  export type AbsensiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * Filter, which Absensi to fetch.
     */
    where?: AbsensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Absensis to fetch.
     */
    orderBy?: AbsensiOrderByWithRelationInput | AbsensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Absensis.
     */
    cursor?: AbsensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Absensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Absensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Absensis.
     */
    distinct?: AbsensiScalarFieldEnum | AbsensiScalarFieldEnum[]
  }

  /**
   * Absensi findFirstOrThrow
   */
  export type AbsensiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * Filter, which Absensi to fetch.
     */
    where?: AbsensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Absensis to fetch.
     */
    orderBy?: AbsensiOrderByWithRelationInput | AbsensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Absensis.
     */
    cursor?: AbsensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Absensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Absensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Absensis.
     */
    distinct?: AbsensiScalarFieldEnum | AbsensiScalarFieldEnum[]
  }

  /**
   * Absensi findMany
   */
  export type AbsensiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * Filter, which Absensis to fetch.
     */
    where?: AbsensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Absensis to fetch.
     */
    orderBy?: AbsensiOrderByWithRelationInput | AbsensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Absensis.
     */
    cursor?: AbsensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Absensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Absensis.
     */
    skip?: number
    distinct?: AbsensiScalarFieldEnum | AbsensiScalarFieldEnum[]
  }

  /**
   * Absensi create
   */
  export type AbsensiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * The data needed to create a Absensi.
     */
    data: XOR<AbsensiCreateInput, AbsensiUncheckedCreateInput>
  }

  /**
   * Absensi createMany
   */
  export type AbsensiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Absensis.
     */
    data: AbsensiCreateManyInput | AbsensiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Absensi createManyAndReturn
   */
  export type AbsensiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * The data used to create many Absensis.
     */
    data: AbsensiCreateManyInput | AbsensiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Absensi update
   */
  export type AbsensiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * The data needed to update a Absensi.
     */
    data: XOR<AbsensiUpdateInput, AbsensiUncheckedUpdateInput>
    /**
     * Choose, which Absensi to update.
     */
    where: AbsensiWhereUniqueInput
  }

  /**
   * Absensi updateMany
   */
  export type AbsensiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Absensis.
     */
    data: XOR<AbsensiUpdateManyMutationInput, AbsensiUncheckedUpdateManyInput>
    /**
     * Filter which Absensis to update
     */
    where?: AbsensiWhereInput
    /**
     * Limit how many Absensis to update.
     */
    limit?: number
  }

  /**
   * Absensi updateManyAndReturn
   */
  export type AbsensiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * The data used to update Absensis.
     */
    data: XOR<AbsensiUpdateManyMutationInput, AbsensiUncheckedUpdateManyInput>
    /**
     * Filter which Absensis to update
     */
    where?: AbsensiWhereInput
    /**
     * Limit how many Absensis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Absensi upsert
   */
  export type AbsensiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * The filter to search for the Absensi to update in case it exists.
     */
    where: AbsensiWhereUniqueInput
    /**
     * In case the Absensi found by the `where` argument doesn't exist, create a new Absensi with this data.
     */
    create: XOR<AbsensiCreateInput, AbsensiUncheckedCreateInput>
    /**
     * In case the Absensi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AbsensiUpdateInput, AbsensiUncheckedUpdateInput>
  }

  /**
   * Absensi delete
   */
  export type AbsensiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * Filter which Absensi to delete.
     */
    where: AbsensiWhereUniqueInput
  }

  /**
   * Absensi deleteMany
   */
  export type AbsensiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Absensis to delete
     */
    where?: AbsensiWhereInput
    /**
     * Limit how many Absensis to delete.
     */
    limit?: number
  }

  /**
   * Absensi.jadwal
   */
  export type Absensi$jadwalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalAbsensi
     */
    select?: JadwalAbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalAbsensi
     */
    omit?: JadwalAbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalAbsensiInclude<ExtArgs> | null
    where?: JadwalAbsensiWhereInput
  }

  /**
   * Absensi without action
   */
  export type AbsensiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
  }


  /**
   * Model AbsensiSetting
   */

  export type AggregateAbsensiSetting = {
    _count: AbsensiSettingCountAggregateOutputType | null
    _avg: AbsensiSettingAvgAggregateOutputType | null
    _sum: AbsensiSettingSumAggregateOutputType | null
    _min: AbsensiSettingMinAggregateOutputType | null
    _max: AbsensiSettingMaxAggregateOutputType | null
  }

  export type AbsensiSettingAvgAggregateOutputType = {
    id: number | null
    kelasId: number | null
    maxAbsen: number | null
  }

  export type AbsensiSettingSumAggregateOutputType = {
    id: number | null
    kelasId: number | null
    maxAbsen: number | null
  }

  export type AbsensiSettingMinAggregateOutputType = {
    id: number | null
    kelasId: number | null
    maxAbsen: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AbsensiSettingMaxAggregateOutputType = {
    id: number | null
    kelasId: number | null
    maxAbsen: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AbsensiSettingCountAggregateOutputType = {
    id: number
    kelasId: number
    maxAbsen: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AbsensiSettingAvgAggregateInputType = {
    id?: true
    kelasId?: true
    maxAbsen?: true
  }

  export type AbsensiSettingSumAggregateInputType = {
    id?: true
    kelasId?: true
    maxAbsen?: true
  }

  export type AbsensiSettingMinAggregateInputType = {
    id?: true
    kelasId?: true
    maxAbsen?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AbsensiSettingMaxAggregateInputType = {
    id?: true
    kelasId?: true
    maxAbsen?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AbsensiSettingCountAggregateInputType = {
    id?: true
    kelasId?: true
    maxAbsen?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AbsensiSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AbsensiSetting to aggregate.
     */
    where?: AbsensiSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AbsensiSettings to fetch.
     */
    orderBy?: AbsensiSettingOrderByWithRelationInput | AbsensiSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AbsensiSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AbsensiSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AbsensiSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AbsensiSettings
    **/
    _count?: true | AbsensiSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AbsensiSettingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AbsensiSettingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AbsensiSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AbsensiSettingMaxAggregateInputType
  }

  export type GetAbsensiSettingAggregateType<T extends AbsensiSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateAbsensiSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAbsensiSetting[P]>
      : GetScalarType<T[P], AggregateAbsensiSetting[P]>
  }




  export type AbsensiSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbsensiSettingWhereInput
    orderBy?: AbsensiSettingOrderByWithAggregationInput | AbsensiSettingOrderByWithAggregationInput[]
    by: AbsensiSettingScalarFieldEnum[] | AbsensiSettingScalarFieldEnum
    having?: AbsensiSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AbsensiSettingCountAggregateInputType | true
    _avg?: AbsensiSettingAvgAggregateInputType
    _sum?: AbsensiSettingSumAggregateInputType
    _min?: AbsensiSettingMinAggregateInputType
    _max?: AbsensiSettingMaxAggregateInputType
  }

  export type AbsensiSettingGroupByOutputType = {
    id: number
    kelasId: number
    maxAbsen: number
    createdAt: Date
    updatedAt: Date
    _count: AbsensiSettingCountAggregateOutputType | null
    _avg: AbsensiSettingAvgAggregateOutputType | null
    _sum: AbsensiSettingSumAggregateOutputType | null
    _min: AbsensiSettingMinAggregateOutputType | null
    _max: AbsensiSettingMaxAggregateOutputType | null
  }

  type GetAbsensiSettingGroupByPayload<T extends AbsensiSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AbsensiSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AbsensiSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AbsensiSettingGroupByOutputType[P]>
            : GetScalarType<T[P], AbsensiSettingGroupByOutputType[P]>
        }
      >
    >


  export type AbsensiSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kelasId?: boolean
    maxAbsen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["absensiSetting"]>

  export type AbsensiSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kelasId?: boolean
    maxAbsen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["absensiSetting"]>

  export type AbsensiSettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kelasId?: boolean
    maxAbsen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["absensiSetting"]>

  export type AbsensiSettingSelectScalar = {
    id?: boolean
    kelasId?: boolean
    maxAbsen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AbsensiSettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "kelasId" | "maxAbsen" | "createdAt" | "updatedAt", ExtArgs["result"]["absensiSetting"]>
  export type AbsensiSettingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }
  export type AbsensiSettingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }
  export type AbsensiSettingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }

  export type $AbsensiSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AbsensiSetting"
    objects: {
      kelas: Prisma.$KelasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      kelasId: number
      maxAbsen: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["absensiSetting"]>
    composites: {}
  }

  type AbsensiSettingGetPayload<S extends boolean | null | undefined | AbsensiSettingDefaultArgs> = $Result.GetResult<Prisma.$AbsensiSettingPayload, S>

  type AbsensiSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AbsensiSettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AbsensiSettingCountAggregateInputType | true
    }

  export interface AbsensiSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AbsensiSetting'], meta: { name: 'AbsensiSetting' } }
    /**
     * Find zero or one AbsensiSetting that matches the filter.
     * @param {AbsensiSettingFindUniqueArgs} args - Arguments to find a AbsensiSetting
     * @example
     * // Get one AbsensiSetting
     * const absensiSetting = await prisma.absensiSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AbsensiSettingFindUniqueArgs>(args: SelectSubset<T, AbsensiSettingFindUniqueArgs<ExtArgs>>): Prisma__AbsensiSettingClient<$Result.GetResult<Prisma.$AbsensiSettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AbsensiSetting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AbsensiSettingFindUniqueOrThrowArgs} args - Arguments to find a AbsensiSetting
     * @example
     * // Get one AbsensiSetting
     * const absensiSetting = await prisma.absensiSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AbsensiSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, AbsensiSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AbsensiSettingClient<$Result.GetResult<Prisma.$AbsensiSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AbsensiSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiSettingFindFirstArgs} args - Arguments to find a AbsensiSetting
     * @example
     * // Get one AbsensiSetting
     * const absensiSetting = await prisma.absensiSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AbsensiSettingFindFirstArgs>(args?: SelectSubset<T, AbsensiSettingFindFirstArgs<ExtArgs>>): Prisma__AbsensiSettingClient<$Result.GetResult<Prisma.$AbsensiSettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AbsensiSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiSettingFindFirstOrThrowArgs} args - Arguments to find a AbsensiSetting
     * @example
     * // Get one AbsensiSetting
     * const absensiSetting = await prisma.absensiSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AbsensiSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, AbsensiSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__AbsensiSettingClient<$Result.GetResult<Prisma.$AbsensiSettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AbsensiSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AbsensiSettings
     * const absensiSettings = await prisma.absensiSetting.findMany()
     * 
     * // Get first 10 AbsensiSettings
     * const absensiSettings = await prisma.absensiSetting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const absensiSettingWithIdOnly = await prisma.absensiSetting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AbsensiSettingFindManyArgs>(args?: SelectSubset<T, AbsensiSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsensiSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AbsensiSetting.
     * @param {AbsensiSettingCreateArgs} args - Arguments to create a AbsensiSetting.
     * @example
     * // Create one AbsensiSetting
     * const AbsensiSetting = await prisma.absensiSetting.create({
     *   data: {
     *     // ... data to create a AbsensiSetting
     *   }
     * })
     * 
     */
    create<T extends AbsensiSettingCreateArgs>(args: SelectSubset<T, AbsensiSettingCreateArgs<ExtArgs>>): Prisma__AbsensiSettingClient<$Result.GetResult<Prisma.$AbsensiSettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AbsensiSettings.
     * @param {AbsensiSettingCreateManyArgs} args - Arguments to create many AbsensiSettings.
     * @example
     * // Create many AbsensiSettings
     * const absensiSetting = await prisma.absensiSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AbsensiSettingCreateManyArgs>(args?: SelectSubset<T, AbsensiSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AbsensiSettings and returns the data saved in the database.
     * @param {AbsensiSettingCreateManyAndReturnArgs} args - Arguments to create many AbsensiSettings.
     * @example
     * // Create many AbsensiSettings
     * const absensiSetting = await prisma.absensiSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AbsensiSettings and only return the `id`
     * const absensiSettingWithIdOnly = await prisma.absensiSetting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AbsensiSettingCreateManyAndReturnArgs>(args?: SelectSubset<T, AbsensiSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsensiSettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AbsensiSetting.
     * @param {AbsensiSettingDeleteArgs} args - Arguments to delete one AbsensiSetting.
     * @example
     * // Delete one AbsensiSetting
     * const AbsensiSetting = await prisma.absensiSetting.delete({
     *   where: {
     *     // ... filter to delete one AbsensiSetting
     *   }
     * })
     * 
     */
    delete<T extends AbsensiSettingDeleteArgs>(args: SelectSubset<T, AbsensiSettingDeleteArgs<ExtArgs>>): Prisma__AbsensiSettingClient<$Result.GetResult<Prisma.$AbsensiSettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AbsensiSetting.
     * @param {AbsensiSettingUpdateArgs} args - Arguments to update one AbsensiSetting.
     * @example
     * // Update one AbsensiSetting
     * const absensiSetting = await prisma.absensiSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AbsensiSettingUpdateArgs>(args: SelectSubset<T, AbsensiSettingUpdateArgs<ExtArgs>>): Prisma__AbsensiSettingClient<$Result.GetResult<Prisma.$AbsensiSettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AbsensiSettings.
     * @param {AbsensiSettingDeleteManyArgs} args - Arguments to filter AbsensiSettings to delete.
     * @example
     * // Delete a few AbsensiSettings
     * const { count } = await prisma.absensiSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AbsensiSettingDeleteManyArgs>(args?: SelectSubset<T, AbsensiSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AbsensiSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AbsensiSettings
     * const absensiSetting = await prisma.absensiSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AbsensiSettingUpdateManyArgs>(args: SelectSubset<T, AbsensiSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AbsensiSettings and returns the data updated in the database.
     * @param {AbsensiSettingUpdateManyAndReturnArgs} args - Arguments to update many AbsensiSettings.
     * @example
     * // Update many AbsensiSettings
     * const absensiSetting = await prisma.absensiSetting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AbsensiSettings and only return the `id`
     * const absensiSettingWithIdOnly = await prisma.absensiSetting.updateManyAndReturn({
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
    updateManyAndReturn<T extends AbsensiSettingUpdateManyAndReturnArgs>(args: SelectSubset<T, AbsensiSettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsensiSettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AbsensiSetting.
     * @param {AbsensiSettingUpsertArgs} args - Arguments to update or create a AbsensiSetting.
     * @example
     * // Update or create a AbsensiSetting
     * const absensiSetting = await prisma.absensiSetting.upsert({
     *   create: {
     *     // ... data to create a AbsensiSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AbsensiSetting we want to update
     *   }
     * })
     */
    upsert<T extends AbsensiSettingUpsertArgs>(args: SelectSubset<T, AbsensiSettingUpsertArgs<ExtArgs>>): Prisma__AbsensiSettingClient<$Result.GetResult<Prisma.$AbsensiSettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AbsensiSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiSettingCountArgs} args - Arguments to filter AbsensiSettings to count.
     * @example
     * // Count the number of AbsensiSettings
     * const count = await prisma.absensiSetting.count({
     *   where: {
     *     // ... the filter for the AbsensiSettings we want to count
     *   }
     * })
    **/
    count<T extends AbsensiSettingCountArgs>(
      args?: Subset<T, AbsensiSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AbsensiSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AbsensiSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AbsensiSettingAggregateArgs>(args: Subset<T, AbsensiSettingAggregateArgs>): Prisma.PrismaPromise<GetAbsensiSettingAggregateType<T>>

    /**
     * Group by AbsensiSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiSettingGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends AbsensiSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AbsensiSettingGroupByArgs['orderBy'] }
        : { orderBy?: AbsensiSettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AbsensiSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAbsensiSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AbsensiSetting model
   */
  readonly fields: AbsensiSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AbsensiSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AbsensiSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kelas<T extends KelasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KelasDefaultArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AbsensiSetting model
   */
  interface AbsensiSettingFieldRefs {
    readonly id: FieldRef<"AbsensiSetting", 'Int'>
    readonly kelasId: FieldRef<"AbsensiSetting", 'Int'>
    readonly maxAbsen: FieldRef<"AbsensiSetting", 'Int'>
    readonly createdAt: FieldRef<"AbsensiSetting", 'DateTime'>
    readonly updatedAt: FieldRef<"AbsensiSetting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AbsensiSetting findUnique
   */
  export type AbsensiSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsensiSetting
     */
    select?: AbsensiSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbsensiSetting
     */
    omit?: AbsensiSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiSettingInclude<ExtArgs> | null
    /**
     * Filter, which AbsensiSetting to fetch.
     */
    where: AbsensiSettingWhereUniqueInput
  }

  /**
   * AbsensiSetting findUniqueOrThrow
   */
  export type AbsensiSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsensiSetting
     */
    select?: AbsensiSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbsensiSetting
     */
    omit?: AbsensiSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiSettingInclude<ExtArgs> | null
    /**
     * Filter, which AbsensiSetting to fetch.
     */
    where: AbsensiSettingWhereUniqueInput
  }

  /**
   * AbsensiSetting findFirst
   */
  export type AbsensiSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsensiSetting
     */
    select?: AbsensiSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbsensiSetting
     */
    omit?: AbsensiSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiSettingInclude<ExtArgs> | null
    /**
     * Filter, which AbsensiSetting to fetch.
     */
    where?: AbsensiSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AbsensiSettings to fetch.
     */
    orderBy?: AbsensiSettingOrderByWithRelationInput | AbsensiSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AbsensiSettings.
     */
    cursor?: AbsensiSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AbsensiSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AbsensiSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AbsensiSettings.
     */
    distinct?: AbsensiSettingScalarFieldEnum | AbsensiSettingScalarFieldEnum[]
  }

  /**
   * AbsensiSetting findFirstOrThrow
   */
  export type AbsensiSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsensiSetting
     */
    select?: AbsensiSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbsensiSetting
     */
    omit?: AbsensiSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiSettingInclude<ExtArgs> | null
    /**
     * Filter, which AbsensiSetting to fetch.
     */
    where?: AbsensiSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AbsensiSettings to fetch.
     */
    orderBy?: AbsensiSettingOrderByWithRelationInput | AbsensiSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AbsensiSettings.
     */
    cursor?: AbsensiSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AbsensiSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AbsensiSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AbsensiSettings.
     */
    distinct?: AbsensiSettingScalarFieldEnum | AbsensiSettingScalarFieldEnum[]
  }

  /**
   * AbsensiSetting findMany
   */
  export type AbsensiSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsensiSetting
     */
    select?: AbsensiSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbsensiSetting
     */
    omit?: AbsensiSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiSettingInclude<ExtArgs> | null
    /**
     * Filter, which AbsensiSettings to fetch.
     */
    where?: AbsensiSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AbsensiSettings to fetch.
     */
    orderBy?: AbsensiSettingOrderByWithRelationInput | AbsensiSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AbsensiSettings.
     */
    cursor?: AbsensiSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AbsensiSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AbsensiSettings.
     */
    skip?: number
    distinct?: AbsensiSettingScalarFieldEnum | AbsensiSettingScalarFieldEnum[]
  }

  /**
   * AbsensiSetting create
   */
  export type AbsensiSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsensiSetting
     */
    select?: AbsensiSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbsensiSetting
     */
    omit?: AbsensiSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiSettingInclude<ExtArgs> | null
    /**
     * The data needed to create a AbsensiSetting.
     */
    data: XOR<AbsensiSettingCreateInput, AbsensiSettingUncheckedCreateInput>
  }

  /**
   * AbsensiSetting createMany
   */
  export type AbsensiSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AbsensiSettings.
     */
    data: AbsensiSettingCreateManyInput | AbsensiSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AbsensiSetting createManyAndReturn
   */
  export type AbsensiSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsensiSetting
     */
    select?: AbsensiSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AbsensiSetting
     */
    omit?: AbsensiSettingOmit<ExtArgs> | null
    /**
     * The data used to create many AbsensiSettings.
     */
    data: AbsensiSettingCreateManyInput | AbsensiSettingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiSettingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AbsensiSetting update
   */
  export type AbsensiSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsensiSetting
     */
    select?: AbsensiSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbsensiSetting
     */
    omit?: AbsensiSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiSettingInclude<ExtArgs> | null
    /**
     * The data needed to update a AbsensiSetting.
     */
    data: XOR<AbsensiSettingUpdateInput, AbsensiSettingUncheckedUpdateInput>
    /**
     * Choose, which AbsensiSetting to update.
     */
    where: AbsensiSettingWhereUniqueInput
  }

  /**
   * AbsensiSetting updateMany
   */
  export type AbsensiSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AbsensiSettings.
     */
    data: XOR<AbsensiSettingUpdateManyMutationInput, AbsensiSettingUncheckedUpdateManyInput>
    /**
     * Filter which AbsensiSettings to update
     */
    where?: AbsensiSettingWhereInput
    /**
     * Limit how many AbsensiSettings to update.
     */
    limit?: number
  }

  /**
   * AbsensiSetting updateManyAndReturn
   */
  export type AbsensiSettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsensiSetting
     */
    select?: AbsensiSettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AbsensiSetting
     */
    omit?: AbsensiSettingOmit<ExtArgs> | null
    /**
     * The data used to update AbsensiSettings.
     */
    data: XOR<AbsensiSettingUpdateManyMutationInput, AbsensiSettingUncheckedUpdateManyInput>
    /**
     * Filter which AbsensiSettings to update
     */
    where?: AbsensiSettingWhereInput
    /**
     * Limit how many AbsensiSettings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiSettingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AbsensiSetting upsert
   */
  export type AbsensiSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsensiSetting
     */
    select?: AbsensiSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbsensiSetting
     */
    omit?: AbsensiSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiSettingInclude<ExtArgs> | null
    /**
     * The filter to search for the AbsensiSetting to update in case it exists.
     */
    where: AbsensiSettingWhereUniqueInput
    /**
     * In case the AbsensiSetting found by the `where` argument doesn't exist, create a new AbsensiSetting with this data.
     */
    create: XOR<AbsensiSettingCreateInput, AbsensiSettingUncheckedCreateInput>
    /**
     * In case the AbsensiSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AbsensiSettingUpdateInput, AbsensiSettingUncheckedUpdateInput>
  }

  /**
   * AbsensiSetting delete
   */
  export type AbsensiSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsensiSetting
     */
    select?: AbsensiSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbsensiSetting
     */
    omit?: AbsensiSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiSettingInclude<ExtArgs> | null
    /**
     * Filter which AbsensiSetting to delete.
     */
    where: AbsensiSettingWhereUniqueInput
  }

  /**
   * AbsensiSetting deleteMany
   */
  export type AbsensiSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AbsensiSettings to delete
     */
    where?: AbsensiSettingWhereInput
    /**
     * Limit how many AbsensiSettings to delete.
     */
    limit?: number
  }

  /**
   * AbsensiSetting without action
   */
  export type AbsensiSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsensiSetting
     */
    select?: AbsensiSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbsensiSetting
     */
    omit?: AbsensiSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiSettingInclude<ExtArgs> | null
  }


  /**
   * Model Izin
   */

  export type AggregateIzin = {
    _count: IzinCountAggregateOutputType | null
    _avg: IzinAvgAggregateOutputType | null
    _sum: IzinSumAggregateOutputType | null
    _min: IzinMinAggregateOutputType | null
    _max: IzinMaxAggregateOutputType | null
  }

  export type IzinAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    kelasId: number | null
  }

  export type IzinSumAggregateOutputType = {
    id: number | null
    userId: number | null
    kelasId: number | null
  }

  export type IzinMinAggregateOutputType = {
    id: number | null
    userId: number | null
    kelasId: number | null
    tanggal: Date | null
    alasan: string | null
    status: $Enums.StatusIzin | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type IzinMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    kelasId: number | null
    tanggal: Date | null
    alasan: string | null
    status: $Enums.StatusIzin | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type IzinCountAggregateOutputType = {
    id: number
    userId: number
    kelasId: number
    tanggal: number
    alasan: number
    status: number
    createdAt: number
    deletedAt: number
    _all: number
  }


  export type IzinAvgAggregateInputType = {
    id?: true
    userId?: true
    kelasId?: true
  }

  export type IzinSumAggregateInputType = {
    id?: true
    userId?: true
    kelasId?: true
  }

  export type IzinMinAggregateInputType = {
    id?: true
    userId?: true
    kelasId?: true
    tanggal?: true
    alasan?: true
    status?: true
    createdAt?: true
    deletedAt?: true
  }

  export type IzinMaxAggregateInputType = {
    id?: true
    userId?: true
    kelasId?: true
    tanggal?: true
    alasan?: true
    status?: true
    createdAt?: true
    deletedAt?: true
  }

  export type IzinCountAggregateInputType = {
    id?: true
    userId?: true
    kelasId?: true
    tanggal?: true
    alasan?: true
    status?: true
    createdAt?: true
    deletedAt?: true
    _all?: true
  }

  export type IzinAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Izin to aggregate.
     */
    where?: IzinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Izins to fetch.
     */
    orderBy?: IzinOrderByWithRelationInput | IzinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IzinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Izins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Izins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Izins
    **/
    _count?: true | IzinCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IzinAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IzinSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IzinMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IzinMaxAggregateInputType
  }

  export type GetIzinAggregateType<T extends IzinAggregateArgs> = {
        [P in keyof T & keyof AggregateIzin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIzin[P]>
      : GetScalarType<T[P], AggregateIzin[P]>
  }




  export type IzinGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IzinWhereInput
    orderBy?: IzinOrderByWithAggregationInput | IzinOrderByWithAggregationInput[]
    by: IzinScalarFieldEnum[] | IzinScalarFieldEnum
    having?: IzinScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IzinCountAggregateInputType | true
    _avg?: IzinAvgAggregateInputType
    _sum?: IzinSumAggregateInputType
    _min?: IzinMinAggregateInputType
    _max?: IzinMaxAggregateInputType
  }

  export type IzinGroupByOutputType = {
    id: number
    userId: number
    kelasId: number
    tanggal: Date
    alasan: string
    status: $Enums.StatusIzin
    createdAt: Date
    deletedAt: Date | null
    _count: IzinCountAggregateOutputType | null
    _avg: IzinAvgAggregateOutputType | null
    _sum: IzinSumAggregateOutputType | null
    _min: IzinMinAggregateOutputType | null
    _max: IzinMaxAggregateOutputType | null
  }

  type GetIzinGroupByPayload<T extends IzinGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IzinGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IzinGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IzinGroupByOutputType[P]>
            : GetScalarType<T[P], IzinGroupByOutputType[P]>
        }
      >
    >


  export type IzinSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    kelasId?: boolean
    tanggal?: boolean
    alasan?: boolean
    status?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["izin"]>

  export type IzinSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    kelasId?: boolean
    tanggal?: boolean
    alasan?: boolean
    status?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["izin"]>

  export type IzinSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    kelasId?: boolean
    tanggal?: boolean
    alasan?: boolean
    status?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["izin"]>

  export type IzinSelectScalar = {
    id?: boolean
    userId?: boolean
    kelasId?: boolean
    tanggal?: boolean
    alasan?: boolean
    status?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }

  export type IzinOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "kelasId" | "tanggal" | "alasan" | "status" | "createdAt" | "deletedAt", ExtArgs["result"]["izin"]>
  export type IzinInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }
  export type IzinIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }
  export type IzinIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }

  export type $IzinPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Izin"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      kelas: Prisma.$KelasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      kelasId: number
      tanggal: Date
      alasan: string
      status: $Enums.StatusIzin
      createdAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["izin"]>
    composites: {}
  }

  type IzinGetPayload<S extends boolean | null | undefined | IzinDefaultArgs> = $Result.GetResult<Prisma.$IzinPayload, S>

  type IzinCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IzinFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IzinCountAggregateInputType | true
    }

  export interface IzinDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Izin'], meta: { name: 'Izin' } }
    /**
     * Find zero or one Izin that matches the filter.
     * @param {IzinFindUniqueArgs} args - Arguments to find a Izin
     * @example
     * // Get one Izin
     * const izin = await prisma.izin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IzinFindUniqueArgs>(args: SelectSubset<T, IzinFindUniqueArgs<ExtArgs>>): Prisma__IzinClient<$Result.GetResult<Prisma.$IzinPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Izin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IzinFindUniqueOrThrowArgs} args - Arguments to find a Izin
     * @example
     * // Get one Izin
     * const izin = await prisma.izin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IzinFindUniqueOrThrowArgs>(args: SelectSubset<T, IzinFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IzinClient<$Result.GetResult<Prisma.$IzinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Izin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IzinFindFirstArgs} args - Arguments to find a Izin
     * @example
     * // Get one Izin
     * const izin = await prisma.izin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IzinFindFirstArgs>(args?: SelectSubset<T, IzinFindFirstArgs<ExtArgs>>): Prisma__IzinClient<$Result.GetResult<Prisma.$IzinPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Izin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IzinFindFirstOrThrowArgs} args - Arguments to find a Izin
     * @example
     * // Get one Izin
     * const izin = await prisma.izin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IzinFindFirstOrThrowArgs>(args?: SelectSubset<T, IzinFindFirstOrThrowArgs<ExtArgs>>): Prisma__IzinClient<$Result.GetResult<Prisma.$IzinPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Izins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IzinFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Izins
     * const izins = await prisma.izin.findMany()
     * 
     * // Get first 10 Izins
     * const izins = await prisma.izin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const izinWithIdOnly = await prisma.izin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IzinFindManyArgs>(args?: SelectSubset<T, IzinFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IzinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Izin.
     * @param {IzinCreateArgs} args - Arguments to create a Izin.
     * @example
     * // Create one Izin
     * const Izin = await prisma.izin.create({
     *   data: {
     *     // ... data to create a Izin
     *   }
     * })
     * 
     */
    create<T extends IzinCreateArgs>(args: SelectSubset<T, IzinCreateArgs<ExtArgs>>): Prisma__IzinClient<$Result.GetResult<Prisma.$IzinPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Izins.
     * @param {IzinCreateManyArgs} args - Arguments to create many Izins.
     * @example
     * // Create many Izins
     * const izin = await prisma.izin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IzinCreateManyArgs>(args?: SelectSubset<T, IzinCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Izins and returns the data saved in the database.
     * @param {IzinCreateManyAndReturnArgs} args - Arguments to create many Izins.
     * @example
     * // Create many Izins
     * const izin = await prisma.izin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Izins and only return the `id`
     * const izinWithIdOnly = await prisma.izin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IzinCreateManyAndReturnArgs>(args?: SelectSubset<T, IzinCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IzinPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Izin.
     * @param {IzinDeleteArgs} args - Arguments to delete one Izin.
     * @example
     * // Delete one Izin
     * const Izin = await prisma.izin.delete({
     *   where: {
     *     // ... filter to delete one Izin
     *   }
     * })
     * 
     */
    delete<T extends IzinDeleteArgs>(args: SelectSubset<T, IzinDeleteArgs<ExtArgs>>): Prisma__IzinClient<$Result.GetResult<Prisma.$IzinPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Izin.
     * @param {IzinUpdateArgs} args - Arguments to update one Izin.
     * @example
     * // Update one Izin
     * const izin = await prisma.izin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IzinUpdateArgs>(args: SelectSubset<T, IzinUpdateArgs<ExtArgs>>): Prisma__IzinClient<$Result.GetResult<Prisma.$IzinPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Izins.
     * @param {IzinDeleteManyArgs} args - Arguments to filter Izins to delete.
     * @example
     * // Delete a few Izins
     * const { count } = await prisma.izin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IzinDeleteManyArgs>(args?: SelectSubset<T, IzinDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Izins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IzinUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Izins
     * const izin = await prisma.izin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IzinUpdateManyArgs>(args: SelectSubset<T, IzinUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Izins and returns the data updated in the database.
     * @param {IzinUpdateManyAndReturnArgs} args - Arguments to update many Izins.
     * @example
     * // Update many Izins
     * const izin = await prisma.izin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Izins and only return the `id`
     * const izinWithIdOnly = await prisma.izin.updateManyAndReturn({
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
    updateManyAndReturn<T extends IzinUpdateManyAndReturnArgs>(args: SelectSubset<T, IzinUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IzinPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Izin.
     * @param {IzinUpsertArgs} args - Arguments to update or create a Izin.
     * @example
     * // Update or create a Izin
     * const izin = await prisma.izin.upsert({
     *   create: {
     *     // ... data to create a Izin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Izin we want to update
     *   }
     * })
     */
    upsert<T extends IzinUpsertArgs>(args: SelectSubset<T, IzinUpsertArgs<ExtArgs>>): Prisma__IzinClient<$Result.GetResult<Prisma.$IzinPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Izins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IzinCountArgs} args - Arguments to filter Izins to count.
     * @example
     * // Count the number of Izins
     * const count = await prisma.izin.count({
     *   where: {
     *     // ... the filter for the Izins we want to count
     *   }
     * })
    **/
    count<T extends IzinCountArgs>(
      args?: Subset<T, IzinCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IzinCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Izin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IzinAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IzinAggregateArgs>(args: Subset<T, IzinAggregateArgs>): Prisma.PrismaPromise<GetIzinAggregateType<T>>

    /**
     * Group by Izin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IzinGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends IzinGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IzinGroupByArgs['orderBy'] }
        : { orderBy?: IzinGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IzinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIzinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Izin model
   */
  readonly fields: IzinFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Izin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IzinClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    kelas<T extends KelasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KelasDefaultArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Izin model
   */
  interface IzinFieldRefs {
    readonly id: FieldRef<"Izin", 'Int'>
    readonly userId: FieldRef<"Izin", 'Int'>
    readonly kelasId: FieldRef<"Izin", 'Int'>
    readonly tanggal: FieldRef<"Izin", 'DateTime'>
    readonly alasan: FieldRef<"Izin", 'String'>
    readonly status: FieldRef<"Izin", 'StatusIzin'>
    readonly createdAt: FieldRef<"Izin", 'DateTime'>
    readonly deletedAt: FieldRef<"Izin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Izin findUnique
   */
  export type IzinFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Izin
     */
    select?: IzinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Izin
     */
    omit?: IzinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IzinInclude<ExtArgs> | null
    /**
     * Filter, which Izin to fetch.
     */
    where: IzinWhereUniqueInput
  }

  /**
   * Izin findUniqueOrThrow
   */
  export type IzinFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Izin
     */
    select?: IzinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Izin
     */
    omit?: IzinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IzinInclude<ExtArgs> | null
    /**
     * Filter, which Izin to fetch.
     */
    where: IzinWhereUniqueInput
  }

  /**
   * Izin findFirst
   */
  export type IzinFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Izin
     */
    select?: IzinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Izin
     */
    omit?: IzinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IzinInclude<ExtArgs> | null
    /**
     * Filter, which Izin to fetch.
     */
    where?: IzinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Izins to fetch.
     */
    orderBy?: IzinOrderByWithRelationInput | IzinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Izins.
     */
    cursor?: IzinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Izins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Izins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Izins.
     */
    distinct?: IzinScalarFieldEnum | IzinScalarFieldEnum[]
  }

  /**
   * Izin findFirstOrThrow
   */
  export type IzinFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Izin
     */
    select?: IzinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Izin
     */
    omit?: IzinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IzinInclude<ExtArgs> | null
    /**
     * Filter, which Izin to fetch.
     */
    where?: IzinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Izins to fetch.
     */
    orderBy?: IzinOrderByWithRelationInput | IzinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Izins.
     */
    cursor?: IzinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Izins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Izins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Izins.
     */
    distinct?: IzinScalarFieldEnum | IzinScalarFieldEnum[]
  }

  /**
   * Izin findMany
   */
  export type IzinFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Izin
     */
    select?: IzinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Izin
     */
    omit?: IzinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IzinInclude<ExtArgs> | null
    /**
     * Filter, which Izins to fetch.
     */
    where?: IzinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Izins to fetch.
     */
    orderBy?: IzinOrderByWithRelationInput | IzinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Izins.
     */
    cursor?: IzinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Izins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Izins.
     */
    skip?: number
    distinct?: IzinScalarFieldEnum | IzinScalarFieldEnum[]
  }

  /**
   * Izin create
   */
  export type IzinCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Izin
     */
    select?: IzinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Izin
     */
    omit?: IzinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IzinInclude<ExtArgs> | null
    /**
     * The data needed to create a Izin.
     */
    data: XOR<IzinCreateInput, IzinUncheckedCreateInput>
  }

  /**
   * Izin createMany
   */
  export type IzinCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Izins.
     */
    data: IzinCreateManyInput | IzinCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Izin createManyAndReturn
   */
  export type IzinCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Izin
     */
    select?: IzinSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Izin
     */
    omit?: IzinOmit<ExtArgs> | null
    /**
     * The data used to create many Izins.
     */
    data: IzinCreateManyInput | IzinCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IzinIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Izin update
   */
  export type IzinUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Izin
     */
    select?: IzinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Izin
     */
    omit?: IzinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IzinInclude<ExtArgs> | null
    /**
     * The data needed to update a Izin.
     */
    data: XOR<IzinUpdateInput, IzinUncheckedUpdateInput>
    /**
     * Choose, which Izin to update.
     */
    where: IzinWhereUniqueInput
  }

  /**
   * Izin updateMany
   */
  export type IzinUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Izins.
     */
    data: XOR<IzinUpdateManyMutationInput, IzinUncheckedUpdateManyInput>
    /**
     * Filter which Izins to update
     */
    where?: IzinWhereInput
    /**
     * Limit how many Izins to update.
     */
    limit?: number
  }

  /**
   * Izin updateManyAndReturn
   */
  export type IzinUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Izin
     */
    select?: IzinSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Izin
     */
    omit?: IzinOmit<ExtArgs> | null
    /**
     * The data used to update Izins.
     */
    data: XOR<IzinUpdateManyMutationInput, IzinUncheckedUpdateManyInput>
    /**
     * Filter which Izins to update
     */
    where?: IzinWhereInput
    /**
     * Limit how many Izins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IzinIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Izin upsert
   */
  export type IzinUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Izin
     */
    select?: IzinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Izin
     */
    omit?: IzinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IzinInclude<ExtArgs> | null
    /**
     * The filter to search for the Izin to update in case it exists.
     */
    where: IzinWhereUniqueInput
    /**
     * In case the Izin found by the `where` argument doesn't exist, create a new Izin with this data.
     */
    create: XOR<IzinCreateInput, IzinUncheckedCreateInput>
    /**
     * In case the Izin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IzinUpdateInput, IzinUncheckedUpdateInput>
  }

  /**
   * Izin delete
   */
  export type IzinDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Izin
     */
    select?: IzinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Izin
     */
    omit?: IzinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IzinInclude<ExtArgs> | null
    /**
     * Filter which Izin to delete.
     */
    where: IzinWhereUniqueInput
  }

  /**
   * Izin deleteMany
   */
  export type IzinDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Izins to delete
     */
    where?: IzinWhereInput
    /**
     * Limit how many Izins to delete.
     */
    limit?: number
  }

  /**
   * Izin without action
   */
  export type IzinDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Izin
     */
    select?: IzinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Izin
     */
    omit?: IzinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IzinInclude<ExtArgs> | null
  }


  /**
   * Model JadwalAbsensi
   */

  export type AggregateJadwalAbsensi = {
    _count: JadwalAbsensiCountAggregateOutputType | null
    _avg: JadwalAbsensiAvgAggregateOutputType | null
    _sum: JadwalAbsensiSumAggregateOutputType | null
    _min: JadwalAbsensiMinAggregateOutputType | null
    _max: JadwalAbsensiMaxAggregateOutputType | null
  }

  export type JadwalAbsensiAvgAggregateOutputType = {
    id: number | null
    kelasId: number | null
  }

  export type JadwalAbsensiSumAggregateOutputType = {
    id: number | null
    kelasId: number | null
  }

  export type JadwalAbsensiMinAggregateOutputType = {
    id: number | null
    kelasId: number | null
    hari: $Enums.Hari | null
    jamMulai: string | null
    jamSelesai: string | null
    tanggal: Date | null
    createdAt: Date | null
  }

  export type JadwalAbsensiMaxAggregateOutputType = {
    id: number | null
    kelasId: number | null
    hari: $Enums.Hari | null
    jamMulai: string | null
    jamSelesai: string | null
    tanggal: Date | null
    createdAt: Date | null
  }

  export type JadwalAbsensiCountAggregateOutputType = {
    id: number
    kelasId: number
    hari: number
    jamMulai: number
    jamSelesai: number
    tanggal: number
    createdAt: number
    _all: number
  }


  export type JadwalAbsensiAvgAggregateInputType = {
    id?: true
    kelasId?: true
  }

  export type JadwalAbsensiSumAggregateInputType = {
    id?: true
    kelasId?: true
  }

  export type JadwalAbsensiMinAggregateInputType = {
    id?: true
    kelasId?: true
    hari?: true
    jamMulai?: true
    jamSelesai?: true
    tanggal?: true
    createdAt?: true
  }

  export type JadwalAbsensiMaxAggregateInputType = {
    id?: true
    kelasId?: true
    hari?: true
    jamMulai?: true
    jamSelesai?: true
    tanggal?: true
    createdAt?: true
  }

  export type JadwalAbsensiCountAggregateInputType = {
    id?: true
    kelasId?: true
    hari?: true
    jamMulai?: true
    jamSelesai?: true
    tanggal?: true
    createdAt?: true
    _all?: true
  }

  export type JadwalAbsensiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JadwalAbsensi to aggregate.
     */
    where?: JadwalAbsensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JadwalAbsensis to fetch.
     */
    orderBy?: JadwalAbsensiOrderByWithRelationInput | JadwalAbsensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JadwalAbsensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JadwalAbsensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JadwalAbsensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JadwalAbsensis
    **/
    _count?: true | JadwalAbsensiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JadwalAbsensiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JadwalAbsensiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JadwalAbsensiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JadwalAbsensiMaxAggregateInputType
  }

  export type GetJadwalAbsensiAggregateType<T extends JadwalAbsensiAggregateArgs> = {
        [P in keyof T & keyof AggregateJadwalAbsensi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJadwalAbsensi[P]>
      : GetScalarType<T[P], AggregateJadwalAbsensi[P]>
  }




  export type JadwalAbsensiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JadwalAbsensiWhereInput
    orderBy?: JadwalAbsensiOrderByWithAggregationInput | JadwalAbsensiOrderByWithAggregationInput[]
    by: JadwalAbsensiScalarFieldEnum[] | JadwalAbsensiScalarFieldEnum
    having?: JadwalAbsensiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JadwalAbsensiCountAggregateInputType | true
    _avg?: JadwalAbsensiAvgAggregateInputType
    _sum?: JadwalAbsensiSumAggregateInputType
    _min?: JadwalAbsensiMinAggregateInputType
    _max?: JadwalAbsensiMaxAggregateInputType
  }

  export type JadwalAbsensiGroupByOutputType = {
    id: number
    kelasId: number
    hari: $Enums.Hari
    jamMulai: string
    jamSelesai: string
    tanggal: Date
    createdAt: Date
    _count: JadwalAbsensiCountAggregateOutputType | null
    _avg: JadwalAbsensiAvgAggregateOutputType | null
    _sum: JadwalAbsensiSumAggregateOutputType | null
    _min: JadwalAbsensiMinAggregateOutputType | null
    _max: JadwalAbsensiMaxAggregateOutputType | null
  }

  type GetJadwalAbsensiGroupByPayload<T extends JadwalAbsensiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JadwalAbsensiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JadwalAbsensiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JadwalAbsensiGroupByOutputType[P]>
            : GetScalarType<T[P], JadwalAbsensiGroupByOutputType[P]>
        }
      >
    >


  export type JadwalAbsensiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kelasId?: boolean
    hari?: boolean
    jamMulai?: boolean
    jamSelesai?: boolean
    tanggal?: boolean
    createdAt?: boolean
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
    absensi?: boolean | JadwalAbsensi$absensiArgs<ExtArgs>
    _count?: boolean | JadwalAbsensiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jadwalAbsensi"]>

  export type JadwalAbsensiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kelasId?: boolean
    hari?: boolean
    jamMulai?: boolean
    jamSelesai?: boolean
    tanggal?: boolean
    createdAt?: boolean
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jadwalAbsensi"]>

  export type JadwalAbsensiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kelasId?: boolean
    hari?: boolean
    jamMulai?: boolean
    jamSelesai?: boolean
    tanggal?: boolean
    createdAt?: boolean
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jadwalAbsensi"]>

  export type JadwalAbsensiSelectScalar = {
    id?: boolean
    kelasId?: boolean
    hari?: boolean
    jamMulai?: boolean
    jamSelesai?: boolean
    tanggal?: boolean
    createdAt?: boolean
  }

  export type JadwalAbsensiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "kelasId" | "hari" | "jamMulai" | "jamSelesai" | "tanggal" | "createdAt", ExtArgs["result"]["jadwalAbsensi"]>
  export type JadwalAbsensiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
    absensi?: boolean | JadwalAbsensi$absensiArgs<ExtArgs>
    _count?: boolean | JadwalAbsensiCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JadwalAbsensiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }
  export type JadwalAbsensiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }

  export type $JadwalAbsensiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JadwalAbsensi"
    objects: {
      kelas: Prisma.$KelasPayload<ExtArgs>
      absensi: Prisma.$AbsensiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      kelasId: number
      hari: $Enums.Hari
      jamMulai: string
      jamSelesai: string
      tanggal: Date
      createdAt: Date
    }, ExtArgs["result"]["jadwalAbsensi"]>
    composites: {}
  }

  type JadwalAbsensiGetPayload<S extends boolean | null | undefined | JadwalAbsensiDefaultArgs> = $Result.GetResult<Prisma.$JadwalAbsensiPayload, S>

  type JadwalAbsensiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JadwalAbsensiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JadwalAbsensiCountAggregateInputType | true
    }

  export interface JadwalAbsensiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JadwalAbsensi'], meta: { name: 'JadwalAbsensi' } }
    /**
     * Find zero or one JadwalAbsensi that matches the filter.
     * @param {JadwalAbsensiFindUniqueArgs} args - Arguments to find a JadwalAbsensi
     * @example
     * // Get one JadwalAbsensi
     * const jadwalAbsensi = await prisma.jadwalAbsensi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JadwalAbsensiFindUniqueArgs>(args: SelectSubset<T, JadwalAbsensiFindUniqueArgs<ExtArgs>>): Prisma__JadwalAbsensiClient<$Result.GetResult<Prisma.$JadwalAbsensiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JadwalAbsensi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JadwalAbsensiFindUniqueOrThrowArgs} args - Arguments to find a JadwalAbsensi
     * @example
     * // Get one JadwalAbsensi
     * const jadwalAbsensi = await prisma.jadwalAbsensi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JadwalAbsensiFindUniqueOrThrowArgs>(args: SelectSubset<T, JadwalAbsensiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JadwalAbsensiClient<$Result.GetResult<Prisma.$JadwalAbsensiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JadwalAbsensi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalAbsensiFindFirstArgs} args - Arguments to find a JadwalAbsensi
     * @example
     * // Get one JadwalAbsensi
     * const jadwalAbsensi = await prisma.jadwalAbsensi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JadwalAbsensiFindFirstArgs>(args?: SelectSubset<T, JadwalAbsensiFindFirstArgs<ExtArgs>>): Prisma__JadwalAbsensiClient<$Result.GetResult<Prisma.$JadwalAbsensiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JadwalAbsensi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalAbsensiFindFirstOrThrowArgs} args - Arguments to find a JadwalAbsensi
     * @example
     * // Get one JadwalAbsensi
     * const jadwalAbsensi = await prisma.jadwalAbsensi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JadwalAbsensiFindFirstOrThrowArgs>(args?: SelectSubset<T, JadwalAbsensiFindFirstOrThrowArgs<ExtArgs>>): Prisma__JadwalAbsensiClient<$Result.GetResult<Prisma.$JadwalAbsensiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JadwalAbsensis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalAbsensiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JadwalAbsensis
     * const jadwalAbsensis = await prisma.jadwalAbsensi.findMany()
     * 
     * // Get first 10 JadwalAbsensis
     * const jadwalAbsensis = await prisma.jadwalAbsensi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jadwalAbsensiWithIdOnly = await prisma.jadwalAbsensi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JadwalAbsensiFindManyArgs>(args?: SelectSubset<T, JadwalAbsensiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalAbsensiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JadwalAbsensi.
     * @param {JadwalAbsensiCreateArgs} args - Arguments to create a JadwalAbsensi.
     * @example
     * // Create one JadwalAbsensi
     * const JadwalAbsensi = await prisma.jadwalAbsensi.create({
     *   data: {
     *     // ... data to create a JadwalAbsensi
     *   }
     * })
     * 
     */
    create<T extends JadwalAbsensiCreateArgs>(args: SelectSubset<T, JadwalAbsensiCreateArgs<ExtArgs>>): Prisma__JadwalAbsensiClient<$Result.GetResult<Prisma.$JadwalAbsensiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JadwalAbsensis.
     * @param {JadwalAbsensiCreateManyArgs} args - Arguments to create many JadwalAbsensis.
     * @example
     * // Create many JadwalAbsensis
     * const jadwalAbsensi = await prisma.jadwalAbsensi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JadwalAbsensiCreateManyArgs>(args?: SelectSubset<T, JadwalAbsensiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JadwalAbsensis and returns the data saved in the database.
     * @param {JadwalAbsensiCreateManyAndReturnArgs} args - Arguments to create many JadwalAbsensis.
     * @example
     * // Create many JadwalAbsensis
     * const jadwalAbsensi = await prisma.jadwalAbsensi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JadwalAbsensis and only return the `id`
     * const jadwalAbsensiWithIdOnly = await prisma.jadwalAbsensi.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JadwalAbsensiCreateManyAndReturnArgs>(args?: SelectSubset<T, JadwalAbsensiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalAbsensiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JadwalAbsensi.
     * @param {JadwalAbsensiDeleteArgs} args - Arguments to delete one JadwalAbsensi.
     * @example
     * // Delete one JadwalAbsensi
     * const JadwalAbsensi = await prisma.jadwalAbsensi.delete({
     *   where: {
     *     // ... filter to delete one JadwalAbsensi
     *   }
     * })
     * 
     */
    delete<T extends JadwalAbsensiDeleteArgs>(args: SelectSubset<T, JadwalAbsensiDeleteArgs<ExtArgs>>): Prisma__JadwalAbsensiClient<$Result.GetResult<Prisma.$JadwalAbsensiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JadwalAbsensi.
     * @param {JadwalAbsensiUpdateArgs} args - Arguments to update one JadwalAbsensi.
     * @example
     * // Update one JadwalAbsensi
     * const jadwalAbsensi = await prisma.jadwalAbsensi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JadwalAbsensiUpdateArgs>(args: SelectSubset<T, JadwalAbsensiUpdateArgs<ExtArgs>>): Prisma__JadwalAbsensiClient<$Result.GetResult<Prisma.$JadwalAbsensiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JadwalAbsensis.
     * @param {JadwalAbsensiDeleteManyArgs} args - Arguments to filter JadwalAbsensis to delete.
     * @example
     * // Delete a few JadwalAbsensis
     * const { count } = await prisma.jadwalAbsensi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JadwalAbsensiDeleteManyArgs>(args?: SelectSubset<T, JadwalAbsensiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JadwalAbsensis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalAbsensiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JadwalAbsensis
     * const jadwalAbsensi = await prisma.jadwalAbsensi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JadwalAbsensiUpdateManyArgs>(args: SelectSubset<T, JadwalAbsensiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JadwalAbsensis and returns the data updated in the database.
     * @param {JadwalAbsensiUpdateManyAndReturnArgs} args - Arguments to update many JadwalAbsensis.
     * @example
     * // Update many JadwalAbsensis
     * const jadwalAbsensi = await prisma.jadwalAbsensi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JadwalAbsensis and only return the `id`
     * const jadwalAbsensiWithIdOnly = await prisma.jadwalAbsensi.updateManyAndReturn({
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
    updateManyAndReturn<T extends JadwalAbsensiUpdateManyAndReturnArgs>(args: SelectSubset<T, JadwalAbsensiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalAbsensiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JadwalAbsensi.
     * @param {JadwalAbsensiUpsertArgs} args - Arguments to update or create a JadwalAbsensi.
     * @example
     * // Update or create a JadwalAbsensi
     * const jadwalAbsensi = await prisma.jadwalAbsensi.upsert({
     *   create: {
     *     // ... data to create a JadwalAbsensi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JadwalAbsensi we want to update
     *   }
     * })
     */
    upsert<T extends JadwalAbsensiUpsertArgs>(args: SelectSubset<T, JadwalAbsensiUpsertArgs<ExtArgs>>): Prisma__JadwalAbsensiClient<$Result.GetResult<Prisma.$JadwalAbsensiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JadwalAbsensis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalAbsensiCountArgs} args - Arguments to filter JadwalAbsensis to count.
     * @example
     * // Count the number of JadwalAbsensis
     * const count = await prisma.jadwalAbsensi.count({
     *   where: {
     *     // ... the filter for the JadwalAbsensis we want to count
     *   }
     * })
    **/
    count<T extends JadwalAbsensiCountArgs>(
      args?: Subset<T, JadwalAbsensiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JadwalAbsensiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JadwalAbsensi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalAbsensiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JadwalAbsensiAggregateArgs>(args: Subset<T, JadwalAbsensiAggregateArgs>): Prisma.PrismaPromise<GetJadwalAbsensiAggregateType<T>>

    /**
     * Group by JadwalAbsensi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalAbsensiGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends JadwalAbsensiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JadwalAbsensiGroupByArgs['orderBy'] }
        : { orderBy?: JadwalAbsensiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JadwalAbsensiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJadwalAbsensiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JadwalAbsensi model
   */
  readonly fields: JadwalAbsensiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JadwalAbsensi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JadwalAbsensiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kelas<T extends KelasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KelasDefaultArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    absensi<T extends JadwalAbsensi$absensiArgs<ExtArgs> = {}>(args?: Subset<T, JadwalAbsensi$absensiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JadwalAbsensi model
   */
  interface JadwalAbsensiFieldRefs {
    readonly id: FieldRef<"JadwalAbsensi", 'Int'>
    readonly kelasId: FieldRef<"JadwalAbsensi", 'Int'>
    readonly hari: FieldRef<"JadwalAbsensi", 'Hari'>
    readonly jamMulai: FieldRef<"JadwalAbsensi", 'String'>
    readonly jamSelesai: FieldRef<"JadwalAbsensi", 'String'>
    readonly tanggal: FieldRef<"JadwalAbsensi", 'DateTime'>
    readonly createdAt: FieldRef<"JadwalAbsensi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JadwalAbsensi findUnique
   */
  export type JadwalAbsensiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalAbsensi
     */
    select?: JadwalAbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalAbsensi
     */
    omit?: JadwalAbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalAbsensiInclude<ExtArgs> | null
    /**
     * Filter, which JadwalAbsensi to fetch.
     */
    where: JadwalAbsensiWhereUniqueInput
  }

  /**
   * JadwalAbsensi findUniqueOrThrow
   */
  export type JadwalAbsensiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalAbsensi
     */
    select?: JadwalAbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalAbsensi
     */
    omit?: JadwalAbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalAbsensiInclude<ExtArgs> | null
    /**
     * Filter, which JadwalAbsensi to fetch.
     */
    where: JadwalAbsensiWhereUniqueInput
  }

  /**
   * JadwalAbsensi findFirst
   */
  export type JadwalAbsensiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalAbsensi
     */
    select?: JadwalAbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalAbsensi
     */
    omit?: JadwalAbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalAbsensiInclude<ExtArgs> | null
    /**
     * Filter, which JadwalAbsensi to fetch.
     */
    where?: JadwalAbsensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JadwalAbsensis to fetch.
     */
    orderBy?: JadwalAbsensiOrderByWithRelationInput | JadwalAbsensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JadwalAbsensis.
     */
    cursor?: JadwalAbsensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JadwalAbsensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JadwalAbsensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JadwalAbsensis.
     */
    distinct?: JadwalAbsensiScalarFieldEnum | JadwalAbsensiScalarFieldEnum[]
  }

  /**
   * JadwalAbsensi findFirstOrThrow
   */
  export type JadwalAbsensiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalAbsensi
     */
    select?: JadwalAbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalAbsensi
     */
    omit?: JadwalAbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalAbsensiInclude<ExtArgs> | null
    /**
     * Filter, which JadwalAbsensi to fetch.
     */
    where?: JadwalAbsensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JadwalAbsensis to fetch.
     */
    orderBy?: JadwalAbsensiOrderByWithRelationInput | JadwalAbsensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JadwalAbsensis.
     */
    cursor?: JadwalAbsensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JadwalAbsensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JadwalAbsensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JadwalAbsensis.
     */
    distinct?: JadwalAbsensiScalarFieldEnum | JadwalAbsensiScalarFieldEnum[]
  }

  /**
   * JadwalAbsensi findMany
   */
  export type JadwalAbsensiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalAbsensi
     */
    select?: JadwalAbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalAbsensi
     */
    omit?: JadwalAbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalAbsensiInclude<ExtArgs> | null
    /**
     * Filter, which JadwalAbsensis to fetch.
     */
    where?: JadwalAbsensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JadwalAbsensis to fetch.
     */
    orderBy?: JadwalAbsensiOrderByWithRelationInput | JadwalAbsensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JadwalAbsensis.
     */
    cursor?: JadwalAbsensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JadwalAbsensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JadwalAbsensis.
     */
    skip?: number
    distinct?: JadwalAbsensiScalarFieldEnum | JadwalAbsensiScalarFieldEnum[]
  }

  /**
   * JadwalAbsensi create
   */
  export type JadwalAbsensiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalAbsensi
     */
    select?: JadwalAbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalAbsensi
     */
    omit?: JadwalAbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalAbsensiInclude<ExtArgs> | null
    /**
     * The data needed to create a JadwalAbsensi.
     */
    data: XOR<JadwalAbsensiCreateInput, JadwalAbsensiUncheckedCreateInput>
  }

  /**
   * JadwalAbsensi createMany
   */
  export type JadwalAbsensiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JadwalAbsensis.
     */
    data: JadwalAbsensiCreateManyInput | JadwalAbsensiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JadwalAbsensi createManyAndReturn
   */
  export type JadwalAbsensiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalAbsensi
     */
    select?: JadwalAbsensiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalAbsensi
     */
    omit?: JadwalAbsensiOmit<ExtArgs> | null
    /**
     * The data used to create many JadwalAbsensis.
     */
    data: JadwalAbsensiCreateManyInput | JadwalAbsensiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalAbsensiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JadwalAbsensi update
   */
  export type JadwalAbsensiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalAbsensi
     */
    select?: JadwalAbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalAbsensi
     */
    omit?: JadwalAbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalAbsensiInclude<ExtArgs> | null
    /**
     * The data needed to update a JadwalAbsensi.
     */
    data: XOR<JadwalAbsensiUpdateInput, JadwalAbsensiUncheckedUpdateInput>
    /**
     * Choose, which JadwalAbsensi to update.
     */
    where: JadwalAbsensiWhereUniqueInput
  }

  /**
   * JadwalAbsensi updateMany
   */
  export type JadwalAbsensiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JadwalAbsensis.
     */
    data: XOR<JadwalAbsensiUpdateManyMutationInput, JadwalAbsensiUncheckedUpdateManyInput>
    /**
     * Filter which JadwalAbsensis to update
     */
    where?: JadwalAbsensiWhereInput
    /**
     * Limit how many JadwalAbsensis to update.
     */
    limit?: number
  }

  /**
   * JadwalAbsensi updateManyAndReturn
   */
  export type JadwalAbsensiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalAbsensi
     */
    select?: JadwalAbsensiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalAbsensi
     */
    omit?: JadwalAbsensiOmit<ExtArgs> | null
    /**
     * The data used to update JadwalAbsensis.
     */
    data: XOR<JadwalAbsensiUpdateManyMutationInput, JadwalAbsensiUncheckedUpdateManyInput>
    /**
     * Filter which JadwalAbsensis to update
     */
    where?: JadwalAbsensiWhereInput
    /**
     * Limit how many JadwalAbsensis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalAbsensiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JadwalAbsensi upsert
   */
  export type JadwalAbsensiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalAbsensi
     */
    select?: JadwalAbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalAbsensi
     */
    omit?: JadwalAbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalAbsensiInclude<ExtArgs> | null
    /**
     * The filter to search for the JadwalAbsensi to update in case it exists.
     */
    where: JadwalAbsensiWhereUniqueInput
    /**
     * In case the JadwalAbsensi found by the `where` argument doesn't exist, create a new JadwalAbsensi with this data.
     */
    create: XOR<JadwalAbsensiCreateInput, JadwalAbsensiUncheckedCreateInput>
    /**
     * In case the JadwalAbsensi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JadwalAbsensiUpdateInput, JadwalAbsensiUncheckedUpdateInput>
  }

  /**
   * JadwalAbsensi delete
   */
  export type JadwalAbsensiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalAbsensi
     */
    select?: JadwalAbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalAbsensi
     */
    omit?: JadwalAbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalAbsensiInclude<ExtArgs> | null
    /**
     * Filter which JadwalAbsensi to delete.
     */
    where: JadwalAbsensiWhereUniqueInput
  }

  /**
   * JadwalAbsensi deleteMany
   */
  export type JadwalAbsensiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JadwalAbsensis to delete
     */
    where?: JadwalAbsensiWhereInput
    /**
     * Limit how many JadwalAbsensis to delete.
     */
    limit?: number
  }

  /**
   * JadwalAbsensi.absensi
   */
  export type JadwalAbsensi$absensiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    where?: AbsensiWhereInput
    orderBy?: AbsensiOrderByWithRelationInput | AbsensiOrderByWithRelationInput[]
    cursor?: AbsensiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AbsensiScalarFieldEnum | AbsensiScalarFieldEnum[]
  }

  /**
   * JadwalAbsensi without action
   */
  export type JadwalAbsensiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalAbsensi
     */
    select?: JadwalAbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalAbsensi
     */
    omit?: JadwalAbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalAbsensiInclude<ExtArgs> | null
  }


  /**
   * Model Kelas
   */

  export type AggregateKelas = {
    _count: KelasCountAggregateOutputType | null
    _avg: KelasAvgAggregateOutputType | null
    _sum: KelasSumAggregateOutputType | null
    _min: KelasMinAggregateOutputType | null
    _max: KelasMaxAggregateOutputType | null
  }

  export type KelasAvgAggregateOutputType = {
    id: number | null
  }

  export type KelasSumAggregateOutputType = {
    id: number | null
  }

  export type KelasMinAggregateOutputType = {
    id: number | null
    namaKelas: string | null
    deskripsi: string | null
  }

  export type KelasMaxAggregateOutputType = {
    id: number | null
    namaKelas: string | null
    deskripsi: string | null
  }

  export type KelasCountAggregateOutputType = {
    id: number
    namaKelas: number
    deskripsi: number
    _all: number
  }


  export type KelasAvgAggregateInputType = {
    id?: true
  }

  export type KelasSumAggregateInputType = {
    id?: true
  }

  export type KelasMinAggregateInputType = {
    id?: true
    namaKelas?: true
    deskripsi?: true
  }

  export type KelasMaxAggregateInputType = {
    id?: true
    namaKelas?: true
    deskripsi?: true
  }

  export type KelasCountAggregateInputType = {
    id?: true
    namaKelas?: true
    deskripsi?: true
    _all?: true
  }

  export type KelasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kelas to aggregate.
     */
    where?: KelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kelas to fetch.
     */
    orderBy?: KelasOrderByWithRelationInput | KelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kelas
    **/
    _count?: true | KelasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KelasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KelasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KelasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KelasMaxAggregateInputType
  }

  export type GetKelasAggregateType<T extends KelasAggregateArgs> = {
        [P in keyof T & keyof AggregateKelas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKelas[P]>
      : GetScalarType<T[P], AggregateKelas[P]>
  }




  export type KelasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KelasWhereInput
    orderBy?: KelasOrderByWithAggregationInput | KelasOrderByWithAggregationInput[]
    by: KelasScalarFieldEnum[] | KelasScalarFieldEnum
    having?: KelasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KelasCountAggregateInputType | true
    _avg?: KelasAvgAggregateInputType
    _sum?: KelasSumAggregateInputType
    _min?: KelasMinAggregateInputType
    _max?: KelasMaxAggregateInputType
  }

  export type KelasGroupByOutputType = {
    id: number
    namaKelas: string
    deskripsi: string | null
    _count: KelasCountAggregateOutputType | null
    _avg: KelasAvgAggregateOutputType | null
    _sum: KelasSumAggregateOutputType | null
    _min: KelasMinAggregateOutputType | null
    _max: KelasMaxAggregateOutputType | null
  }

  type GetKelasGroupByPayload<T extends KelasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KelasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KelasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KelasGroupByOutputType[P]>
            : GetScalarType<T[P], KelasGroupByOutputType[P]>
        }
      >
    >


  export type KelasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaKelas?: boolean
    deskripsi?: boolean
    santri?: boolean | Kelas$santriArgs<ExtArgs>
    pengajar?: boolean | Kelas$pengajarArgs<ExtArgs>
    absensiSetting?: boolean | Kelas$absensiSettingArgs<ExtArgs>
    absensi?: boolean | Kelas$absensiArgs<ExtArgs>
    jadwal?: boolean | Kelas$jadwalArgs<ExtArgs>
    izin?: boolean | Kelas$izinArgs<ExtArgs>
    tugas?: boolean | Kelas$tugasArgs<ExtArgs>
    _count?: boolean | KelasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kelas"]>

  export type KelasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaKelas?: boolean
    deskripsi?: boolean
  }, ExtArgs["result"]["kelas"]>

  export type KelasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaKelas?: boolean
    deskripsi?: boolean
  }, ExtArgs["result"]["kelas"]>

  export type KelasSelectScalar = {
    id?: boolean
    namaKelas?: boolean
    deskripsi?: boolean
  }

  export type KelasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "namaKelas" | "deskripsi", ExtArgs["result"]["kelas"]>
  export type KelasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    santri?: boolean | Kelas$santriArgs<ExtArgs>
    pengajar?: boolean | Kelas$pengajarArgs<ExtArgs>
    absensiSetting?: boolean | Kelas$absensiSettingArgs<ExtArgs>
    absensi?: boolean | Kelas$absensiArgs<ExtArgs>
    jadwal?: boolean | Kelas$jadwalArgs<ExtArgs>
    izin?: boolean | Kelas$izinArgs<ExtArgs>
    tugas?: boolean | Kelas$tugasArgs<ExtArgs>
    _count?: boolean | KelasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KelasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type KelasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $KelasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kelas"
    objects: {
      santri: Prisma.$UserPayload<ExtArgs>[]
      pengajar: Prisma.$UserPayload<ExtArgs>[]
      absensiSetting: Prisma.$AbsensiSettingPayload<ExtArgs> | null
      absensi: Prisma.$AbsensiPayload<ExtArgs>[]
      jadwal: Prisma.$JadwalAbsensiPayload<ExtArgs>[]
      izin: Prisma.$IzinPayload<ExtArgs>[]
      tugas: Prisma.$TugasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      namaKelas: string
      deskripsi: string | null
    }, ExtArgs["result"]["kelas"]>
    composites: {}
  }

  type KelasGetPayload<S extends boolean | null | undefined | KelasDefaultArgs> = $Result.GetResult<Prisma.$KelasPayload, S>

  type KelasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KelasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KelasCountAggregateInputType | true
    }

  export interface KelasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kelas'], meta: { name: 'Kelas' } }
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
    findUnique<T extends KelasFindUniqueArgs>(args: SelectSubset<T, KelasFindUniqueArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends KelasFindUniqueOrThrowArgs>(args: SelectSubset<T, KelasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends KelasFindFirstArgs>(args?: SelectSubset<T, KelasFindFirstArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends KelasFindFirstOrThrowArgs>(args?: SelectSubset<T, KelasFindFirstOrThrowArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends KelasFindManyArgs>(args?: SelectSubset<T, KelasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends KelasCreateArgs>(args: SelectSubset<T, KelasCreateArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends KelasCreateManyArgs>(args?: SelectSubset<T, KelasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    createManyAndReturn<T extends KelasCreateManyAndReturnArgs>(args?: SelectSubset<T, KelasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends KelasDeleteArgs>(args: SelectSubset<T, KelasDeleteArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends KelasUpdateArgs>(args: SelectSubset<T, KelasUpdateArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends KelasDeleteManyArgs>(args?: SelectSubset<T, KelasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends KelasUpdateManyArgs>(args: SelectSubset<T, KelasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateManyAndReturn<T extends KelasUpdateManyAndReturnArgs>(args: SelectSubset<T, KelasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends KelasUpsertArgs>(args: SelectSubset<T, KelasUpsertArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
    count<T extends KelasCountArgs>(
      args?: Subset<T, KelasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KelasCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends KelasAggregateArgs>(args: Subset<T, KelasAggregateArgs>): Prisma.PrismaPromise<GetKelasAggregateType<T>>

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
    groupBy<
      T extends KelasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KelasGroupByArgs['orderBy'] }
        : { orderBy?: KelasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KelasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKelasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__KelasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    santri<T extends Kelas$santriArgs<ExtArgs> = {}>(args?: Subset<T, Kelas$santriArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pengajar<T extends Kelas$pengajarArgs<ExtArgs> = {}>(args?: Subset<T, Kelas$pengajarArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    absensiSetting<T extends Kelas$absensiSettingArgs<ExtArgs> = {}>(args?: Subset<T, Kelas$absensiSettingArgs<ExtArgs>>): Prisma__AbsensiSettingClient<$Result.GetResult<Prisma.$AbsensiSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    absensi<T extends Kelas$absensiArgs<ExtArgs> = {}>(args?: Subset<T, Kelas$absensiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    jadwal<T extends Kelas$jadwalArgs<ExtArgs> = {}>(args?: Subset<T, Kelas$jadwalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalAbsensiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    izin<T extends Kelas$izinArgs<ExtArgs> = {}>(args?: Subset<T, Kelas$izinArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IzinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tugas<T extends Kelas$tugasArgs<ExtArgs> = {}>(args?: Subset<T, Kelas$tugasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Kelas model
   */
  interface KelasFieldRefs {
    readonly id: FieldRef<"Kelas", 'Int'>
    readonly namaKelas: FieldRef<"Kelas", 'String'>
    readonly deskripsi: FieldRef<"Kelas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Kelas findUnique
   */
  export type KelasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * Filter, which Kelas to fetch.
     */
    where: KelasWhereUniqueInput
  }

  /**
   * Kelas findUniqueOrThrow
   */
  export type KelasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * Filter, which Kelas to fetch.
     */
    where: KelasWhereUniqueInput
  }

  /**
   * Kelas findFirst
   */
  export type KelasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * Filter, which Kelas to fetch.
     */
    where?: KelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kelas to fetch.
     */
    orderBy?: KelasOrderByWithRelationInput | KelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kelas.
     */
    cursor?: KelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kelas.
     */
    distinct?: KelasScalarFieldEnum | KelasScalarFieldEnum[]
  }

  /**
   * Kelas findFirstOrThrow
   */
  export type KelasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * Filter, which Kelas to fetch.
     */
    where?: KelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kelas to fetch.
     */
    orderBy?: KelasOrderByWithRelationInput | KelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kelas.
     */
    cursor?: KelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kelas.
     */
    distinct?: KelasScalarFieldEnum | KelasScalarFieldEnum[]
  }

  /**
   * Kelas findMany
   */
  export type KelasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * Filter, which Kelas to fetch.
     */
    where?: KelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kelas to fetch.
     */
    orderBy?: KelasOrderByWithRelationInput | KelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kelas.
     */
    cursor?: KelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kelas.
     */
    skip?: number
    distinct?: KelasScalarFieldEnum | KelasScalarFieldEnum[]
  }

  /**
   * Kelas create
   */
  export type KelasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * The data needed to create a Kelas.
     */
    data: XOR<KelasCreateInput, KelasUncheckedCreateInput>
  }

  /**
   * Kelas createMany
   */
  export type KelasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kelas.
     */
    data: KelasCreateManyInput | KelasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kelas createManyAndReturn
   */
  export type KelasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * The data used to create many Kelas.
     */
    data: KelasCreateManyInput | KelasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kelas update
   */
  export type KelasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * The data needed to update a Kelas.
     */
    data: XOR<KelasUpdateInput, KelasUncheckedUpdateInput>
    /**
     * Choose, which Kelas to update.
     */
    where: KelasWhereUniqueInput
  }

  /**
   * Kelas updateMany
   */
  export type KelasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kelas.
     */
    data: XOR<KelasUpdateManyMutationInput, KelasUncheckedUpdateManyInput>
    /**
     * Filter which Kelas to update
     */
    where?: KelasWhereInput
    /**
     * Limit how many Kelas to update.
     */
    limit?: number
  }

  /**
   * Kelas updateManyAndReturn
   */
  export type KelasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * The data used to update Kelas.
     */
    data: XOR<KelasUpdateManyMutationInput, KelasUncheckedUpdateManyInput>
    /**
     * Filter which Kelas to update
     */
    where?: KelasWhereInput
    /**
     * Limit how many Kelas to update.
     */
    limit?: number
  }

  /**
   * Kelas upsert
   */
  export type KelasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * The filter to search for the Kelas to update in case it exists.
     */
    where: KelasWhereUniqueInput
    /**
     * In case the Kelas found by the `where` argument doesn't exist, create a new Kelas with this data.
     */
    create: XOR<KelasCreateInput, KelasUncheckedCreateInput>
    /**
     * In case the Kelas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KelasUpdateInput, KelasUncheckedUpdateInput>
  }

  /**
   * Kelas delete
   */
  export type KelasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * Filter which Kelas to delete.
     */
    where: KelasWhereUniqueInput
  }

  /**
   * Kelas deleteMany
   */
  export type KelasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kelas to delete
     */
    where?: KelasWhereInput
    /**
     * Limit how many Kelas to delete.
     */
    limit?: number
  }

  /**
   * Kelas.santri
   */
  export type Kelas$santriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Kelas.pengajar
   */
  export type Kelas$pengajarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Kelas.absensiSetting
   */
  export type Kelas$absensiSettingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsensiSetting
     */
    select?: AbsensiSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbsensiSetting
     */
    omit?: AbsensiSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiSettingInclude<ExtArgs> | null
    where?: AbsensiSettingWhereInput
  }

  /**
   * Kelas.absensi
   */
  export type Kelas$absensiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    where?: AbsensiWhereInput
    orderBy?: AbsensiOrderByWithRelationInput | AbsensiOrderByWithRelationInput[]
    cursor?: AbsensiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AbsensiScalarFieldEnum | AbsensiScalarFieldEnum[]
  }

  /**
   * Kelas.jadwal
   */
  export type Kelas$jadwalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalAbsensi
     */
    select?: JadwalAbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalAbsensi
     */
    omit?: JadwalAbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalAbsensiInclude<ExtArgs> | null
    where?: JadwalAbsensiWhereInput
    orderBy?: JadwalAbsensiOrderByWithRelationInput | JadwalAbsensiOrderByWithRelationInput[]
    cursor?: JadwalAbsensiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JadwalAbsensiScalarFieldEnum | JadwalAbsensiScalarFieldEnum[]
  }

  /**
   * Kelas.izin
   */
  export type Kelas$izinArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Izin
     */
    select?: IzinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Izin
     */
    omit?: IzinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IzinInclude<ExtArgs> | null
    where?: IzinWhereInput
    orderBy?: IzinOrderByWithRelationInput | IzinOrderByWithRelationInput[]
    cursor?: IzinWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IzinScalarFieldEnum | IzinScalarFieldEnum[]
  }

  /**
   * Kelas.tugas
   */
  export type Kelas$tugasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tugas
     */
    omit?: TugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TugasInclude<ExtArgs> | null
    where?: TugasWhereInput
    orderBy?: TugasOrderByWithRelationInput | TugasOrderByWithRelationInput[]
    cursor?: TugasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TugasScalarFieldEnum | TugasScalarFieldEnum[]
  }

  /**
   * Kelas without action
   */
  export type KelasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
  }


  /**
   * Model LogAktivitas
   */

  export type AggregateLogAktivitas = {
    _count: LogAktivitasCountAggregateOutputType | null
    _avg: LogAktivitasAvgAggregateOutputType | null
    _sum: LogAktivitasSumAggregateOutputType | null
    _min: LogAktivitasMinAggregateOutputType | null
    _max: LogAktivitasMaxAggregateOutputType | null
  }

  export type LogAktivitasAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type LogAktivitasSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type LogAktivitasMinAggregateOutputType = {
    id: number | null
    userId: number | null
    aktivitas: string | null
    createdAt: Date | null
  }

  export type LogAktivitasMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    aktivitas: string | null
    createdAt: Date | null
  }

  export type LogAktivitasCountAggregateOutputType = {
    id: number
    userId: number
    aktivitas: number
    createdAt: number
    _all: number
  }


  export type LogAktivitasAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type LogAktivitasSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type LogAktivitasMinAggregateInputType = {
    id?: true
    userId?: true
    aktivitas?: true
    createdAt?: true
  }

  export type LogAktivitasMaxAggregateInputType = {
    id?: true
    userId?: true
    aktivitas?: true
    createdAt?: true
  }

  export type LogAktivitasCountAggregateInputType = {
    id?: true
    userId?: true
    aktivitas?: true
    createdAt?: true
    _all?: true
  }

  export type LogAktivitasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogAktivitas to aggregate.
     */
    where?: LogAktivitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogAktivitas to fetch.
     */
    orderBy?: LogAktivitasOrderByWithRelationInput | LogAktivitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogAktivitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogAktivitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogAktivitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LogAktivitas
    **/
    _count?: true | LogAktivitasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogAktivitasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogAktivitasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogAktivitasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogAktivitasMaxAggregateInputType
  }

  export type GetLogAktivitasAggregateType<T extends LogAktivitasAggregateArgs> = {
        [P in keyof T & keyof AggregateLogAktivitas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogAktivitas[P]>
      : GetScalarType<T[P], AggregateLogAktivitas[P]>
  }




  export type LogAktivitasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogAktivitasWhereInput
    orderBy?: LogAktivitasOrderByWithAggregationInput | LogAktivitasOrderByWithAggregationInput[]
    by: LogAktivitasScalarFieldEnum[] | LogAktivitasScalarFieldEnum
    having?: LogAktivitasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogAktivitasCountAggregateInputType | true
    _avg?: LogAktivitasAvgAggregateInputType
    _sum?: LogAktivitasSumAggregateInputType
    _min?: LogAktivitasMinAggregateInputType
    _max?: LogAktivitasMaxAggregateInputType
  }

  export type LogAktivitasGroupByOutputType = {
    id: number
    userId: number
    aktivitas: string
    createdAt: Date
    _count: LogAktivitasCountAggregateOutputType | null
    _avg: LogAktivitasAvgAggregateOutputType | null
    _sum: LogAktivitasSumAggregateOutputType | null
    _min: LogAktivitasMinAggregateOutputType | null
    _max: LogAktivitasMaxAggregateOutputType | null
  }

  type GetLogAktivitasGroupByPayload<T extends LogAktivitasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogAktivitasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogAktivitasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogAktivitasGroupByOutputType[P]>
            : GetScalarType<T[P], LogAktivitasGroupByOutputType[P]>
        }
      >
    >


  export type LogAktivitasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    aktivitas?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logAktivitas"]>

  export type LogAktivitasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    aktivitas?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logAktivitas"]>

  export type LogAktivitasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    aktivitas?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logAktivitas"]>

  export type LogAktivitasSelectScalar = {
    id?: boolean
    userId?: boolean
    aktivitas?: boolean
    createdAt?: boolean
  }

  export type LogAktivitasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "aktivitas" | "createdAt", ExtArgs["result"]["logAktivitas"]>
  export type LogAktivitasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LogAktivitasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LogAktivitasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LogAktivitasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LogAktivitas"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      aktivitas: string
      createdAt: Date
    }, ExtArgs["result"]["logAktivitas"]>
    composites: {}
  }

  type LogAktivitasGetPayload<S extends boolean | null | undefined | LogAktivitasDefaultArgs> = $Result.GetResult<Prisma.$LogAktivitasPayload, S>

  type LogAktivitasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogAktivitasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogAktivitasCountAggregateInputType | true
    }

  export interface LogAktivitasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LogAktivitas'], meta: { name: 'LogAktivitas' } }
    /**
     * Find zero or one LogAktivitas that matches the filter.
     * @param {LogAktivitasFindUniqueArgs} args - Arguments to find a LogAktivitas
     * @example
     * // Get one LogAktivitas
     * const logAktivitas = await prisma.logAktivitas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogAktivitasFindUniqueArgs>(args: SelectSubset<T, LogAktivitasFindUniqueArgs<ExtArgs>>): Prisma__LogAktivitasClient<$Result.GetResult<Prisma.$LogAktivitasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LogAktivitas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogAktivitasFindUniqueOrThrowArgs} args - Arguments to find a LogAktivitas
     * @example
     * // Get one LogAktivitas
     * const logAktivitas = await prisma.logAktivitas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogAktivitasFindUniqueOrThrowArgs>(args: SelectSubset<T, LogAktivitasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogAktivitasClient<$Result.GetResult<Prisma.$LogAktivitasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogAktivitas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAktivitasFindFirstArgs} args - Arguments to find a LogAktivitas
     * @example
     * // Get one LogAktivitas
     * const logAktivitas = await prisma.logAktivitas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogAktivitasFindFirstArgs>(args?: SelectSubset<T, LogAktivitasFindFirstArgs<ExtArgs>>): Prisma__LogAktivitasClient<$Result.GetResult<Prisma.$LogAktivitasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogAktivitas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAktivitasFindFirstOrThrowArgs} args - Arguments to find a LogAktivitas
     * @example
     * // Get one LogAktivitas
     * const logAktivitas = await prisma.logAktivitas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogAktivitasFindFirstOrThrowArgs>(args?: SelectSubset<T, LogAktivitasFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogAktivitasClient<$Result.GetResult<Prisma.$LogAktivitasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LogAktivitas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAktivitasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LogAktivitas
     * const logAktivitas = await prisma.logAktivitas.findMany()
     * 
     * // Get first 10 LogAktivitas
     * const logAktivitas = await prisma.logAktivitas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logAktivitasWithIdOnly = await prisma.logAktivitas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogAktivitasFindManyArgs>(args?: SelectSubset<T, LogAktivitasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogAktivitasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LogAktivitas.
     * @param {LogAktivitasCreateArgs} args - Arguments to create a LogAktivitas.
     * @example
     * // Create one LogAktivitas
     * const LogAktivitas = await prisma.logAktivitas.create({
     *   data: {
     *     // ... data to create a LogAktivitas
     *   }
     * })
     * 
     */
    create<T extends LogAktivitasCreateArgs>(args: SelectSubset<T, LogAktivitasCreateArgs<ExtArgs>>): Prisma__LogAktivitasClient<$Result.GetResult<Prisma.$LogAktivitasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LogAktivitas.
     * @param {LogAktivitasCreateManyArgs} args - Arguments to create many LogAktivitas.
     * @example
     * // Create many LogAktivitas
     * const logAktivitas = await prisma.logAktivitas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogAktivitasCreateManyArgs>(args?: SelectSubset<T, LogAktivitasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LogAktivitas and returns the data saved in the database.
     * @param {LogAktivitasCreateManyAndReturnArgs} args - Arguments to create many LogAktivitas.
     * @example
     * // Create many LogAktivitas
     * const logAktivitas = await prisma.logAktivitas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LogAktivitas and only return the `id`
     * const logAktivitasWithIdOnly = await prisma.logAktivitas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogAktivitasCreateManyAndReturnArgs>(args?: SelectSubset<T, LogAktivitasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogAktivitasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LogAktivitas.
     * @param {LogAktivitasDeleteArgs} args - Arguments to delete one LogAktivitas.
     * @example
     * // Delete one LogAktivitas
     * const LogAktivitas = await prisma.logAktivitas.delete({
     *   where: {
     *     // ... filter to delete one LogAktivitas
     *   }
     * })
     * 
     */
    delete<T extends LogAktivitasDeleteArgs>(args: SelectSubset<T, LogAktivitasDeleteArgs<ExtArgs>>): Prisma__LogAktivitasClient<$Result.GetResult<Prisma.$LogAktivitasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LogAktivitas.
     * @param {LogAktivitasUpdateArgs} args - Arguments to update one LogAktivitas.
     * @example
     * // Update one LogAktivitas
     * const logAktivitas = await prisma.logAktivitas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogAktivitasUpdateArgs>(args: SelectSubset<T, LogAktivitasUpdateArgs<ExtArgs>>): Prisma__LogAktivitasClient<$Result.GetResult<Prisma.$LogAktivitasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LogAktivitas.
     * @param {LogAktivitasDeleteManyArgs} args - Arguments to filter LogAktivitas to delete.
     * @example
     * // Delete a few LogAktivitas
     * const { count } = await prisma.logAktivitas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogAktivitasDeleteManyArgs>(args?: SelectSubset<T, LogAktivitasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogAktivitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAktivitasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LogAktivitas
     * const logAktivitas = await prisma.logAktivitas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogAktivitasUpdateManyArgs>(args: SelectSubset<T, LogAktivitasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogAktivitas and returns the data updated in the database.
     * @param {LogAktivitasUpdateManyAndReturnArgs} args - Arguments to update many LogAktivitas.
     * @example
     * // Update many LogAktivitas
     * const logAktivitas = await prisma.logAktivitas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LogAktivitas and only return the `id`
     * const logAktivitasWithIdOnly = await prisma.logAktivitas.updateManyAndReturn({
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
    updateManyAndReturn<T extends LogAktivitasUpdateManyAndReturnArgs>(args: SelectSubset<T, LogAktivitasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogAktivitasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LogAktivitas.
     * @param {LogAktivitasUpsertArgs} args - Arguments to update or create a LogAktivitas.
     * @example
     * // Update or create a LogAktivitas
     * const logAktivitas = await prisma.logAktivitas.upsert({
     *   create: {
     *     // ... data to create a LogAktivitas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LogAktivitas we want to update
     *   }
     * })
     */
    upsert<T extends LogAktivitasUpsertArgs>(args: SelectSubset<T, LogAktivitasUpsertArgs<ExtArgs>>): Prisma__LogAktivitasClient<$Result.GetResult<Prisma.$LogAktivitasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LogAktivitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAktivitasCountArgs} args - Arguments to filter LogAktivitas to count.
     * @example
     * // Count the number of LogAktivitas
     * const count = await prisma.logAktivitas.count({
     *   where: {
     *     // ... the filter for the LogAktivitas we want to count
     *   }
     * })
    **/
    count<T extends LogAktivitasCountArgs>(
      args?: Subset<T, LogAktivitasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogAktivitasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LogAktivitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAktivitasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogAktivitasAggregateArgs>(args: Subset<T, LogAktivitasAggregateArgs>): Prisma.PrismaPromise<GetLogAktivitasAggregateType<T>>

    /**
     * Group by LogAktivitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAktivitasGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends LogAktivitasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogAktivitasGroupByArgs['orderBy'] }
        : { orderBy?: LogAktivitasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LogAktivitasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogAktivitasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LogAktivitas model
   */
  readonly fields: LogAktivitasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LogAktivitas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogAktivitasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LogAktivitas model
   */
  interface LogAktivitasFieldRefs {
    readonly id: FieldRef<"LogAktivitas", 'Int'>
    readonly userId: FieldRef<"LogAktivitas", 'Int'>
    readonly aktivitas: FieldRef<"LogAktivitas", 'String'>
    readonly createdAt: FieldRef<"LogAktivitas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LogAktivitas findUnique
   */
  export type LogAktivitasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAktivitas
     */
    select?: LogAktivitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAktivitas
     */
    omit?: LogAktivitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAktivitasInclude<ExtArgs> | null
    /**
     * Filter, which LogAktivitas to fetch.
     */
    where: LogAktivitasWhereUniqueInput
  }

  /**
   * LogAktivitas findUniqueOrThrow
   */
  export type LogAktivitasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAktivitas
     */
    select?: LogAktivitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAktivitas
     */
    omit?: LogAktivitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAktivitasInclude<ExtArgs> | null
    /**
     * Filter, which LogAktivitas to fetch.
     */
    where: LogAktivitasWhereUniqueInput
  }

  /**
   * LogAktivitas findFirst
   */
  export type LogAktivitasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAktivitas
     */
    select?: LogAktivitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAktivitas
     */
    omit?: LogAktivitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAktivitasInclude<ExtArgs> | null
    /**
     * Filter, which LogAktivitas to fetch.
     */
    where?: LogAktivitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogAktivitas to fetch.
     */
    orderBy?: LogAktivitasOrderByWithRelationInput | LogAktivitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogAktivitas.
     */
    cursor?: LogAktivitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogAktivitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogAktivitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogAktivitas.
     */
    distinct?: LogAktivitasScalarFieldEnum | LogAktivitasScalarFieldEnum[]
  }

  /**
   * LogAktivitas findFirstOrThrow
   */
  export type LogAktivitasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAktivitas
     */
    select?: LogAktivitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAktivitas
     */
    omit?: LogAktivitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAktivitasInclude<ExtArgs> | null
    /**
     * Filter, which LogAktivitas to fetch.
     */
    where?: LogAktivitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogAktivitas to fetch.
     */
    orderBy?: LogAktivitasOrderByWithRelationInput | LogAktivitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogAktivitas.
     */
    cursor?: LogAktivitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogAktivitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogAktivitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogAktivitas.
     */
    distinct?: LogAktivitasScalarFieldEnum | LogAktivitasScalarFieldEnum[]
  }

  /**
   * LogAktivitas findMany
   */
  export type LogAktivitasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAktivitas
     */
    select?: LogAktivitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAktivitas
     */
    omit?: LogAktivitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAktivitasInclude<ExtArgs> | null
    /**
     * Filter, which LogAktivitas to fetch.
     */
    where?: LogAktivitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogAktivitas to fetch.
     */
    orderBy?: LogAktivitasOrderByWithRelationInput | LogAktivitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LogAktivitas.
     */
    cursor?: LogAktivitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogAktivitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogAktivitas.
     */
    skip?: number
    distinct?: LogAktivitasScalarFieldEnum | LogAktivitasScalarFieldEnum[]
  }

  /**
   * LogAktivitas create
   */
  export type LogAktivitasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAktivitas
     */
    select?: LogAktivitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAktivitas
     */
    omit?: LogAktivitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAktivitasInclude<ExtArgs> | null
    /**
     * The data needed to create a LogAktivitas.
     */
    data: XOR<LogAktivitasCreateInput, LogAktivitasUncheckedCreateInput>
  }

  /**
   * LogAktivitas createMany
   */
  export type LogAktivitasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LogAktivitas.
     */
    data: LogAktivitasCreateManyInput | LogAktivitasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LogAktivitas createManyAndReturn
   */
  export type LogAktivitasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAktivitas
     */
    select?: LogAktivitasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogAktivitas
     */
    omit?: LogAktivitasOmit<ExtArgs> | null
    /**
     * The data used to create many LogAktivitas.
     */
    data: LogAktivitasCreateManyInput | LogAktivitasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAktivitasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LogAktivitas update
   */
  export type LogAktivitasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAktivitas
     */
    select?: LogAktivitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAktivitas
     */
    omit?: LogAktivitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAktivitasInclude<ExtArgs> | null
    /**
     * The data needed to update a LogAktivitas.
     */
    data: XOR<LogAktivitasUpdateInput, LogAktivitasUncheckedUpdateInput>
    /**
     * Choose, which LogAktivitas to update.
     */
    where: LogAktivitasWhereUniqueInput
  }

  /**
   * LogAktivitas updateMany
   */
  export type LogAktivitasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LogAktivitas.
     */
    data: XOR<LogAktivitasUpdateManyMutationInput, LogAktivitasUncheckedUpdateManyInput>
    /**
     * Filter which LogAktivitas to update
     */
    where?: LogAktivitasWhereInput
    /**
     * Limit how many LogAktivitas to update.
     */
    limit?: number
  }

  /**
   * LogAktivitas updateManyAndReturn
   */
  export type LogAktivitasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAktivitas
     */
    select?: LogAktivitasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogAktivitas
     */
    omit?: LogAktivitasOmit<ExtArgs> | null
    /**
     * The data used to update LogAktivitas.
     */
    data: XOR<LogAktivitasUpdateManyMutationInput, LogAktivitasUncheckedUpdateManyInput>
    /**
     * Filter which LogAktivitas to update
     */
    where?: LogAktivitasWhereInput
    /**
     * Limit how many LogAktivitas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAktivitasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LogAktivitas upsert
   */
  export type LogAktivitasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAktivitas
     */
    select?: LogAktivitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAktivitas
     */
    omit?: LogAktivitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAktivitasInclude<ExtArgs> | null
    /**
     * The filter to search for the LogAktivitas to update in case it exists.
     */
    where: LogAktivitasWhereUniqueInput
    /**
     * In case the LogAktivitas found by the `where` argument doesn't exist, create a new LogAktivitas with this data.
     */
    create: XOR<LogAktivitasCreateInput, LogAktivitasUncheckedCreateInput>
    /**
     * In case the LogAktivitas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogAktivitasUpdateInput, LogAktivitasUncheckedUpdateInput>
  }

  /**
   * LogAktivitas delete
   */
  export type LogAktivitasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAktivitas
     */
    select?: LogAktivitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAktivitas
     */
    omit?: LogAktivitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAktivitasInclude<ExtArgs> | null
    /**
     * Filter which LogAktivitas to delete.
     */
    where: LogAktivitasWhereUniqueInput
  }

  /**
   * LogAktivitas deleteMany
   */
  export type LogAktivitasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogAktivitas to delete
     */
    where?: LogAktivitasWhereInput
    /**
     * Limit how many LogAktivitas to delete.
     */
    limit?: number
  }

  /**
   * LogAktivitas without action
   */
  export type LogAktivitasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAktivitas
     */
    select?: LogAktivitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAktivitas
     */
    omit?: LogAktivitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAktivitasInclude<ExtArgs> | null
  }


  /**
   * Model MataPelajaran
   */

  export type AggregateMataPelajaran = {
    _count: MataPelajaranCountAggregateOutputType | null
    _avg: MataPelajaranAvgAggregateOutputType | null
    _sum: MataPelajaranSumAggregateOutputType | null
    _min: MataPelajaranMinAggregateOutputType | null
    _max: MataPelajaranMaxAggregateOutputType | null
  }

  export type MataPelajaranAvgAggregateOutputType = {
    id: number | null
  }

  export type MataPelajaranSumAggregateOutputType = {
    id: number | null
  }

  export type MataPelajaranMinAggregateOutputType = {
    id: number | null
    nama: string | null
    kode: string | null
    createdAt: Date | null
  }

  export type MataPelajaranMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    kode: string | null
    createdAt: Date | null
  }

  export type MataPelajaranCountAggregateOutputType = {
    id: number
    nama: number
    kode: number
    createdAt: number
    _all: number
  }


  export type MataPelajaranAvgAggregateInputType = {
    id?: true
  }

  export type MataPelajaranSumAggregateInputType = {
    id?: true
  }

  export type MataPelajaranMinAggregateInputType = {
    id?: true
    nama?: true
    kode?: true
    createdAt?: true
  }

  export type MataPelajaranMaxAggregateInputType = {
    id?: true
    nama?: true
    kode?: true
    createdAt?: true
  }

  export type MataPelajaranCountAggregateInputType = {
    id?: true
    nama?: true
    kode?: true
    createdAt?: true
    _all?: true
  }

  export type MataPelajaranAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MataPelajaran to aggregate.
     */
    where?: MataPelajaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MataPelajarans to fetch.
     */
    orderBy?: MataPelajaranOrderByWithRelationInput | MataPelajaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MataPelajaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MataPelajarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MataPelajarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MataPelajarans
    **/
    _count?: true | MataPelajaranCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MataPelajaranAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MataPelajaranSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MataPelajaranMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MataPelajaranMaxAggregateInputType
  }

  export type GetMataPelajaranAggregateType<T extends MataPelajaranAggregateArgs> = {
        [P in keyof T & keyof AggregateMataPelajaran]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMataPelajaran[P]>
      : GetScalarType<T[P], AggregateMataPelajaran[P]>
  }




  export type MataPelajaranGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MataPelajaranWhereInput
    orderBy?: MataPelajaranOrderByWithAggregationInput | MataPelajaranOrderByWithAggregationInput[]
    by: MataPelajaranScalarFieldEnum[] | MataPelajaranScalarFieldEnum
    having?: MataPelajaranScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MataPelajaranCountAggregateInputType | true
    _avg?: MataPelajaranAvgAggregateInputType
    _sum?: MataPelajaranSumAggregateInputType
    _min?: MataPelajaranMinAggregateInputType
    _max?: MataPelajaranMaxAggregateInputType
  }

  export type MataPelajaranGroupByOutputType = {
    id: number
    nama: string
    kode: string
    createdAt: Date
    _count: MataPelajaranCountAggregateOutputType | null
    _avg: MataPelajaranAvgAggregateOutputType | null
    _sum: MataPelajaranSumAggregateOutputType | null
    _min: MataPelajaranMinAggregateOutputType | null
    _max: MataPelajaranMaxAggregateOutputType | null
  }

  type GetMataPelajaranGroupByPayload<T extends MataPelajaranGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MataPelajaranGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MataPelajaranGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MataPelajaranGroupByOutputType[P]>
            : GetScalarType<T[P], MataPelajaranGroupByOutputType[P]>
        }
      >
    >


  export type MataPelajaranSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    kode?: boolean
    createdAt?: boolean
    tugas?: boolean | MataPelajaran$tugasArgs<ExtArgs>
    _count?: boolean | MataPelajaranCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mataPelajaran"]>

  export type MataPelajaranSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    kode?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["mataPelajaran"]>

  export type MataPelajaranSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    kode?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["mataPelajaran"]>

  export type MataPelajaranSelectScalar = {
    id?: boolean
    nama?: boolean
    kode?: boolean
    createdAt?: boolean
  }

  export type MataPelajaranOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "kode" | "createdAt", ExtArgs["result"]["mataPelajaran"]>
  export type MataPelajaranInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tugas?: boolean | MataPelajaran$tugasArgs<ExtArgs>
    _count?: boolean | MataPelajaranCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MataPelajaranIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MataPelajaranIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MataPelajaranPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MataPelajaran"
    objects: {
      tugas: Prisma.$TugasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      kode: string
      createdAt: Date
    }, ExtArgs["result"]["mataPelajaran"]>
    composites: {}
  }

  type MataPelajaranGetPayload<S extends boolean | null | undefined | MataPelajaranDefaultArgs> = $Result.GetResult<Prisma.$MataPelajaranPayload, S>

  type MataPelajaranCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MataPelajaranFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MataPelajaranCountAggregateInputType | true
    }

  export interface MataPelajaranDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MataPelajaran'], meta: { name: 'MataPelajaran' } }
    /**
     * Find zero or one MataPelajaran that matches the filter.
     * @param {MataPelajaranFindUniqueArgs} args - Arguments to find a MataPelajaran
     * @example
     * // Get one MataPelajaran
     * const mataPelajaran = await prisma.mataPelajaran.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MataPelajaranFindUniqueArgs>(args: SelectSubset<T, MataPelajaranFindUniqueArgs<ExtArgs>>): Prisma__MataPelajaranClient<$Result.GetResult<Prisma.$MataPelajaranPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MataPelajaran that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MataPelajaranFindUniqueOrThrowArgs} args - Arguments to find a MataPelajaran
     * @example
     * // Get one MataPelajaran
     * const mataPelajaran = await prisma.mataPelajaran.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MataPelajaranFindUniqueOrThrowArgs>(args: SelectSubset<T, MataPelajaranFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MataPelajaranClient<$Result.GetResult<Prisma.$MataPelajaranPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MataPelajaran that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MataPelajaranFindFirstArgs} args - Arguments to find a MataPelajaran
     * @example
     * // Get one MataPelajaran
     * const mataPelajaran = await prisma.mataPelajaran.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MataPelajaranFindFirstArgs>(args?: SelectSubset<T, MataPelajaranFindFirstArgs<ExtArgs>>): Prisma__MataPelajaranClient<$Result.GetResult<Prisma.$MataPelajaranPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MataPelajaran that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MataPelajaranFindFirstOrThrowArgs} args - Arguments to find a MataPelajaran
     * @example
     * // Get one MataPelajaran
     * const mataPelajaran = await prisma.mataPelajaran.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MataPelajaranFindFirstOrThrowArgs>(args?: SelectSubset<T, MataPelajaranFindFirstOrThrowArgs<ExtArgs>>): Prisma__MataPelajaranClient<$Result.GetResult<Prisma.$MataPelajaranPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MataPelajarans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MataPelajaranFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MataPelajarans
     * const mataPelajarans = await prisma.mataPelajaran.findMany()
     * 
     * // Get first 10 MataPelajarans
     * const mataPelajarans = await prisma.mataPelajaran.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mataPelajaranWithIdOnly = await prisma.mataPelajaran.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MataPelajaranFindManyArgs>(args?: SelectSubset<T, MataPelajaranFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MataPelajaranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MataPelajaran.
     * @param {MataPelajaranCreateArgs} args - Arguments to create a MataPelajaran.
     * @example
     * // Create one MataPelajaran
     * const MataPelajaran = await prisma.mataPelajaran.create({
     *   data: {
     *     // ... data to create a MataPelajaran
     *   }
     * })
     * 
     */
    create<T extends MataPelajaranCreateArgs>(args: SelectSubset<T, MataPelajaranCreateArgs<ExtArgs>>): Prisma__MataPelajaranClient<$Result.GetResult<Prisma.$MataPelajaranPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MataPelajarans.
     * @param {MataPelajaranCreateManyArgs} args - Arguments to create many MataPelajarans.
     * @example
     * // Create many MataPelajarans
     * const mataPelajaran = await prisma.mataPelajaran.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MataPelajaranCreateManyArgs>(args?: SelectSubset<T, MataPelajaranCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MataPelajarans and returns the data saved in the database.
     * @param {MataPelajaranCreateManyAndReturnArgs} args - Arguments to create many MataPelajarans.
     * @example
     * // Create many MataPelajarans
     * const mataPelajaran = await prisma.mataPelajaran.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MataPelajarans and only return the `id`
     * const mataPelajaranWithIdOnly = await prisma.mataPelajaran.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MataPelajaranCreateManyAndReturnArgs>(args?: SelectSubset<T, MataPelajaranCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MataPelajaranPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MataPelajaran.
     * @param {MataPelajaranDeleteArgs} args - Arguments to delete one MataPelajaran.
     * @example
     * // Delete one MataPelajaran
     * const MataPelajaran = await prisma.mataPelajaran.delete({
     *   where: {
     *     // ... filter to delete one MataPelajaran
     *   }
     * })
     * 
     */
    delete<T extends MataPelajaranDeleteArgs>(args: SelectSubset<T, MataPelajaranDeleteArgs<ExtArgs>>): Prisma__MataPelajaranClient<$Result.GetResult<Prisma.$MataPelajaranPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MataPelajaran.
     * @param {MataPelajaranUpdateArgs} args - Arguments to update one MataPelajaran.
     * @example
     * // Update one MataPelajaran
     * const mataPelajaran = await prisma.mataPelajaran.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MataPelajaranUpdateArgs>(args: SelectSubset<T, MataPelajaranUpdateArgs<ExtArgs>>): Prisma__MataPelajaranClient<$Result.GetResult<Prisma.$MataPelajaranPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MataPelajarans.
     * @param {MataPelajaranDeleteManyArgs} args - Arguments to filter MataPelajarans to delete.
     * @example
     * // Delete a few MataPelajarans
     * const { count } = await prisma.mataPelajaran.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MataPelajaranDeleteManyArgs>(args?: SelectSubset<T, MataPelajaranDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MataPelajarans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MataPelajaranUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MataPelajarans
     * const mataPelajaran = await prisma.mataPelajaran.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MataPelajaranUpdateManyArgs>(args: SelectSubset<T, MataPelajaranUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MataPelajarans and returns the data updated in the database.
     * @param {MataPelajaranUpdateManyAndReturnArgs} args - Arguments to update many MataPelajarans.
     * @example
     * // Update many MataPelajarans
     * const mataPelajaran = await prisma.mataPelajaran.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MataPelajarans and only return the `id`
     * const mataPelajaranWithIdOnly = await prisma.mataPelajaran.updateManyAndReturn({
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
    updateManyAndReturn<T extends MataPelajaranUpdateManyAndReturnArgs>(args: SelectSubset<T, MataPelajaranUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MataPelajaranPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MataPelajaran.
     * @param {MataPelajaranUpsertArgs} args - Arguments to update or create a MataPelajaran.
     * @example
     * // Update or create a MataPelajaran
     * const mataPelajaran = await prisma.mataPelajaran.upsert({
     *   create: {
     *     // ... data to create a MataPelajaran
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MataPelajaran we want to update
     *   }
     * })
     */
    upsert<T extends MataPelajaranUpsertArgs>(args: SelectSubset<T, MataPelajaranUpsertArgs<ExtArgs>>): Prisma__MataPelajaranClient<$Result.GetResult<Prisma.$MataPelajaranPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MataPelajarans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MataPelajaranCountArgs} args - Arguments to filter MataPelajarans to count.
     * @example
     * // Count the number of MataPelajarans
     * const count = await prisma.mataPelajaran.count({
     *   where: {
     *     // ... the filter for the MataPelajarans we want to count
     *   }
     * })
    **/
    count<T extends MataPelajaranCountArgs>(
      args?: Subset<T, MataPelajaranCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MataPelajaranCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MataPelajaran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MataPelajaranAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MataPelajaranAggregateArgs>(args: Subset<T, MataPelajaranAggregateArgs>): Prisma.PrismaPromise<GetMataPelajaranAggregateType<T>>

    /**
     * Group by MataPelajaran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MataPelajaranGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends MataPelajaranGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MataPelajaranGroupByArgs['orderBy'] }
        : { orderBy?: MataPelajaranGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MataPelajaranGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMataPelajaranGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MataPelajaran model
   */
  readonly fields: MataPelajaranFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MataPelajaran.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MataPelajaranClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tugas<T extends MataPelajaran$tugasArgs<ExtArgs> = {}>(args?: Subset<T, MataPelajaran$tugasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MataPelajaran model
   */
  interface MataPelajaranFieldRefs {
    readonly id: FieldRef<"MataPelajaran", 'Int'>
    readonly nama: FieldRef<"MataPelajaran", 'String'>
    readonly kode: FieldRef<"MataPelajaran", 'String'>
    readonly createdAt: FieldRef<"MataPelajaran", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MataPelajaran findUnique
   */
  export type MataPelajaranFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MataPelajaran
     */
    select?: MataPelajaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MataPelajaran
     */
    omit?: MataPelajaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MataPelajaranInclude<ExtArgs> | null
    /**
     * Filter, which MataPelajaran to fetch.
     */
    where: MataPelajaranWhereUniqueInput
  }

  /**
   * MataPelajaran findUniqueOrThrow
   */
  export type MataPelajaranFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MataPelajaran
     */
    select?: MataPelajaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MataPelajaran
     */
    omit?: MataPelajaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MataPelajaranInclude<ExtArgs> | null
    /**
     * Filter, which MataPelajaran to fetch.
     */
    where: MataPelajaranWhereUniqueInput
  }

  /**
   * MataPelajaran findFirst
   */
  export type MataPelajaranFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MataPelajaran
     */
    select?: MataPelajaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MataPelajaran
     */
    omit?: MataPelajaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MataPelajaranInclude<ExtArgs> | null
    /**
     * Filter, which MataPelajaran to fetch.
     */
    where?: MataPelajaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MataPelajarans to fetch.
     */
    orderBy?: MataPelajaranOrderByWithRelationInput | MataPelajaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MataPelajarans.
     */
    cursor?: MataPelajaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MataPelajarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MataPelajarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MataPelajarans.
     */
    distinct?: MataPelajaranScalarFieldEnum | MataPelajaranScalarFieldEnum[]
  }

  /**
   * MataPelajaran findFirstOrThrow
   */
  export type MataPelajaranFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MataPelajaran
     */
    select?: MataPelajaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MataPelajaran
     */
    omit?: MataPelajaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MataPelajaranInclude<ExtArgs> | null
    /**
     * Filter, which MataPelajaran to fetch.
     */
    where?: MataPelajaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MataPelajarans to fetch.
     */
    orderBy?: MataPelajaranOrderByWithRelationInput | MataPelajaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MataPelajarans.
     */
    cursor?: MataPelajaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MataPelajarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MataPelajarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MataPelajarans.
     */
    distinct?: MataPelajaranScalarFieldEnum | MataPelajaranScalarFieldEnum[]
  }

  /**
   * MataPelajaran findMany
   */
  export type MataPelajaranFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MataPelajaran
     */
    select?: MataPelajaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MataPelajaran
     */
    omit?: MataPelajaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MataPelajaranInclude<ExtArgs> | null
    /**
     * Filter, which MataPelajarans to fetch.
     */
    where?: MataPelajaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MataPelajarans to fetch.
     */
    orderBy?: MataPelajaranOrderByWithRelationInput | MataPelajaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MataPelajarans.
     */
    cursor?: MataPelajaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MataPelajarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MataPelajarans.
     */
    skip?: number
    distinct?: MataPelajaranScalarFieldEnum | MataPelajaranScalarFieldEnum[]
  }

  /**
   * MataPelajaran create
   */
  export type MataPelajaranCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MataPelajaran
     */
    select?: MataPelajaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MataPelajaran
     */
    omit?: MataPelajaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MataPelajaranInclude<ExtArgs> | null
    /**
     * The data needed to create a MataPelajaran.
     */
    data: XOR<MataPelajaranCreateInput, MataPelajaranUncheckedCreateInput>
  }

  /**
   * MataPelajaran createMany
   */
  export type MataPelajaranCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MataPelajarans.
     */
    data: MataPelajaranCreateManyInput | MataPelajaranCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MataPelajaran createManyAndReturn
   */
  export type MataPelajaranCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MataPelajaran
     */
    select?: MataPelajaranSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MataPelajaran
     */
    omit?: MataPelajaranOmit<ExtArgs> | null
    /**
     * The data used to create many MataPelajarans.
     */
    data: MataPelajaranCreateManyInput | MataPelajaranCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MataPelajaran update
   */
  export type MataPelajaranUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MataPelajaran
     */
    select?: MataPelajaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MataPelajaran
     */
    omit?: MataPelajaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MataPelajaranInclude<ExtArgs> | null
    /**
     * The data needed to update a MataPelajaran.
     */
    data: XOR<MataPelajaranUpdateInput, MataPelajaranUncheckedUpdateInput>
    /**
     * Choose, which MataPelajaran to update.
     */
    where: MataPelajaranWhereUniqueInput
  }

  /**
   * MataPelajaran updateMany
   */
  export type MataPelajaranUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MataPelajarans.
     */
    data: XOR<MataPelajaranUpdateManyMutationInput, MataPelajaranUncheckedUpdateManyInput>
    /**
     * Filter which MataPelajarans to update
     */
    where?: MataPelajaranWhereInput
    /**
     * Limit how many MataPelajarans to update.
     */
    limit?: number
  }

  /**
   * MataPelajaran updateManyAndReturn
   */
  export type MataPelajaranUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MataPelajaran
     */
    select?: MataPelajaranSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MataPelajaran
     */
    omit?: MataPelajaranOmit<ExtArgs> | null
    /**
     * The data used to update MataPelajarans.
     */
    data: XOR<MataPelajaranUpdateManyMutationInput, MataPelajaranUncheckedUpdateManyInput>
    /**
     * Filter which MataPelajarans to update
     */
    where?: MataPelajaranWhereInput
    /**
     * Limit how many MataPelajarans to update.
     */
    limit?: number
  }

  /**
   * MataPelajaran upsert
   */
  export type MataPelajaranUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MataPelajaran
     */
    select?: MataPelajaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MataPelajaran
     */
    omit?: MataPelajaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MataPelajaranInclude<ExtArgs> | null
    /**
     * The filter to search for the MataPelajaran to update in case it exists.
     */
    where: MataPelajaranWhereUniqueInput
    /**
     * In case the MataPelajaran found by the `where` argument doesn't exist, create a new MataPelajaran with this data.
     */
    create: XOR<MataPelajaranCreateInput, MataPelajaranUncheckedCreateInput>
    /**
     * In case the MataPelajaran was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MataPelajaranUpdateInput, MataPelajaranUncheckedUpdateInput>
  }

  /**
   * MataPelajaran delete
   */
  export type MataPelajaranDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MataPelajaran
     */
    select?: MataPelajaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MataPelajaran
     */
    omit?: MataPelajaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MataPelajaranInclude<ExtArgs> | null
    /**
     * Filter which MataPelajaran to delete.
     */
    where: MataPelajaranWhereUniqueInput
  }

  /**
   * MataPelajaran deleteMany
   */
  export type MataPelajaranDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MataPelajarans to delete
     */
    where?: MataPelajaranWhereInput
    /**
     * Limit how many MataPelajarans to delete.
     */
    limit?: number
  }

  /**
   * MataPelajaran.tugas
   */
  export type MataPelajaran$tugasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tugas
     */
    omit?: TugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TugasInclude<ExtArgs> | null
    where?: TugasWhereInput
    orderBy?: TugasOrderByWithRelationInput | TugasOrderByWithRelationInput[]
    cursor?: TugasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TugasScalarFieldEnum | TugasScalarFieldEnum[]
  }

  /**
   * MataPelajaran without action
   */
  export type MataPelajaranDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MataPelajaran
     */
    select?: MataPelajaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MataPelajaran
     */
    omit?: MataPelajaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MataPelajaranInclude<ExtArgs> | null
  }


  /**
   * Model Nilai
   */

  export type AggregateNilai = {
    _count: NilaiCountAggregateOutputType | null
    _avg: NilaiAvgAggregateOutputType | null
    _sum: NilaiSumAggregateOutputType | null
    _min: NilaiMinAggregateOutputType | null
    _max: NilaiMaxAggregateOutputType | null
  }

  export type NilaiAvgAggregateOutputType = {
    id: number | null
    submissionId: number | null
    nilai: number | null
  }

  export type NilaiSumAggregateOutputType = {
    id: number | null
    submissionId: number | null
    nilai: number | null
  }

  export type NilaiMinAggregateOutputType = {
    id: number | null
    submissionId: number | null
    nilai: number | null
    catatan: string | null
    createdAt: Date | null
  }

  export type NilaiMaxAggregateOutputType = {
    id: number | null
    submissionId: number | null
    nilai: number | null
    catatan: string | null
    createdAt: Date | null
  }

  export type NilaiCountAggregateOutputType = {
    id: number
    submissionId: number
    nilai: number
    catatan: number
    createdAt: number
    _all: number
  }


  export type NilaiAvgAggregateInputType = {
    id?: true
    submissionId?: true
    nilai?: true
  }

  export type NilaiSumAggregateInputType = {
    id?: true
    submissionId?: true
    nilai?: true
  }

  export type NilaiMinAggregateInputType = {
    id?: true
    submissionId?: true
    nilai?: true
    catatan?: true
    createdAt?: true
  }

  export type NilaiMaxAggregateInputType = {
    id?: true
    submissionId?: true
    nilai?: true
    catatan?: true
    createdAt?: true
  }

  export type NilaiCountAggregateInputType = {
    id?: true
    submissionId?: true
    nilai?: true
    catatan?: true
    createdAt?: true
    _all?: true
  }

  export type NilaiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nilai to aggregate.
     */
    where?: NilaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nilais to fetch.
     */
    orderBy?: NilaiOrderByWithRelationInput | NilaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NilaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nilais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nilais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Nilais
    **/
    _count?: true | NilaiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NilaiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NilaiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NilaiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NilaiMaxAggregateInputType
  }

  export type GetNilaiAggregateType<T extends NilaiAggregateArgs> = {
        [P in keyof T & keyof AggregateNilai]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNilai[P]>
      : GetScalarType<T[P], AggregateNilai[P]>
  }




  export type NilaiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NilaiWhereInput
    orderBy?: NilaiOrderByWithAggregationInput | NilaiOrderByWithAggregationInput[]
    by: NilaiScalarFieldEnum[] | NilaiScalarFieldEnum
    having?: NilaiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NilaiCountAggregateInputType | true
    _avg?: NilaiAvgAggregateInputType
    _sum?: NilaiSumAggregateInputType
    _min?: NilaiMinAggregateInputType
    _max?: NilaiMaxAggregateInputType
  }

  export type NilaiGroupByOutputType = {
    id: number
    submissionId: number
    nilai: number
    catatan: string | null
    createdAt: Date
    _count: NilaiCountAggregateOutputType | null
    _avg: NilaiAvgAggregateOutputType | null
    _sum: NilaiSumAggregateOutputType | null
    _min: NilaiMinAggregateOutputType | null
    _max: NilaiMaxAggregateOutputType | null
  }

  type GetNilaiGroupByPayload<T extends NilaiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NilaiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NilaiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NilaiGroupByOutputType[P]>
            : GetScalarType<T[P], NilaiGroupByOutputType[P]>
        }
      >
    >


  export type NilaiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    nilai?: boolean
    catatan?: boolean
    createdAt?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nilai"]>

  export type NilaiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    nilai?: boolean
    catatan?: boolean
    createdAt?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nilai"]>

  export type NilaiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    nilai?: boolean
    catatan?: boolean
    createdAt?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nilai"]>

  export type NilaiSelectScalar = {
    id?: boolean
    submissionId?: boolean
    nilai?: boolean
    catatan?: boolean
    createdAt?: boolean
  }

  export type NilaiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "submissionId" | "nilai" | "catatan" | "createdAt", ExtArgs["result"]["nilai"]>
  export type NilaiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }
  export type NilaiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }
  export type NilaiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }

  export type $NilaiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Nilai"
    objects: {
      submission: Prisma.$SubmissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      submissionId: number
      nilai: number
      catatan: string | null
      createdAt: Date
    }, ExtArgs["result"]["nilai"]>
    composites: {}
  }

  type NilaiGetPayload<S extends boolean | null | undefined | NilaiDefaultArgs> = $Result.GetResult<Prisma.$NilaiPayload, S>

  type NilaiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NilaiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NilaiCountAggregateInputType | true
    }

  export interface NilaiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Nilai'], meta: { name: 'Nilai' } }
    /**
     * Find zero or one Nilai that matches the filter.
     * @param {NilaiFindUniqueArgs} args - Arguments to find a Nilai
     * @example
     * // Get one Nilai
     * const nilai = await prisma.nilai.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NilaiFindUniqueArgs>(args: SelectSubset<T, NilaiFindUniqueArgs<ExtArgs>>): Prisma__NilaiClient<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Nilai that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NilaiFindUniqueOrThrowArgs} args - Arguments to find a Nilai
     * @example
     * // Get one Nilai
     * const nilai = await prisma.nilai.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NilaiFindUniqueOrThrowArgs>(args: SelectSubset<T, NilaiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NilaiClient<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nilai that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NilaiFindFirstArgs} args - Arguments to find a Nilai
     * @example
     * // Get one Nilai
     * const nilai = await prisma.nilai.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NilaiFindFirstArgs>(args?: SelectSubset<T, NilaiFindFirstArgs<ExtArgs>>): Prisma__NilaiClient<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nilai that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NilaiFindFirstOrThrowArgs} args - Arguments to find a Nilai
     * @example
     * // Get one Nilai
     * const nilai = await prisma.nilai.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NilaiFindFirstOrThrowArgs>(args?: SelectSubset<T, NilaiFindFirstOrThrowArgs<ExtArgs>>): Prisma__NilaiClient<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Nilais that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NilaiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nilais
     * const nilais = await prisma.nilai.findMany()
     * 
     * // Get first 10 Nilais
     * const nilais = await prisma.nilai.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nilaiWithIdOnly = await prisma.nilai.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NilaiFindManyArgs>(args?: SelectSubset<T, NilaiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Nilai.
     * @param {NilaiCreateArgs} args - Arguments to create a Nilai.
     * @example
     * // Create one Nilai
     * const Nilai = await prisma.nilai.create({
     *   data: {
     *     // ... data to create a Nilai
     *   }
     * })
     * 
     */
    create<T extends NilaiCreateArgs>(args: SelectSubset<T, NilaiCreateArgs<ExtArgs>>): Prisma__NilaiClient<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Nilais.
     * @param {NilaiCreateManyArgs} args - Arguments to create many Nilais.
     * @example
     * // Create many Nilais
     * const nilai = await prisma.nilai.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NilaiCreateManyArgs>(args?: SelectSubset<T, NilaiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Nilais and returns the data saved in the database.
     * @param {NilaiCreateManyAndReturnArgs} args - Arguments to create many Nilais.
     * @example
     * // Create many Nilais
     * const nilai = await prisma.nilai.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Nilais and only return the `id`
     * const nilaiWithIdOnly = await prisma.nilai.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NilaiCreateManyAndReturnArgs>(args?: SelectSubset<T, NilaiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Nilai.
     * @param {NilaiDeleteArgs} args - Arguments to delete one Nilai.
     * @example
     * // Delete one Nilai
     * const Nilai = await prisma.nilai.delete({
     *   where: {
     *     // ... filter to delete one Nilai
     *   }
     * })
     * 
     */
    delete<T extends NilaiDeleteArgs>(args: SelectSubset<T, NilaiDeleteArgs<ExtArgs>>): Prisma__NilaiClient<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Nilai.
     * @param {NilaiUpdateArgs} args - Arguments to update one Nilai.
     * @example
     * // Update one Nilai
     * const nilai = await prisma.nilai.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NilaiUpdateArgs>(args: SelectSubset<T, NilaiUpdateArgs<ExtArgs>>): Prisma__NilaiClient<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Nilais.
     * @param {NilaiDeleteManyArgs} args - Arguments to filter Nilais to delete.
     * @example
     * // Delete a few Nilais
     * const { count } = await prisma.nilai.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NilaiDeleteManyArgs>(args?: SelectSubset<T, NilaiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nilais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NilaiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nilais
     * const nilai = await prisma.nilai.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NilaiUpdateManyArgs>(args: SelectSubset<T, NilaiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nilais and returns the data updated in the database.
     * @param {NilaiUpdateManyAndReturnArgs} args - Arguments to update many Nilais.
     * @example
     * // Update many Nilais
     * const nilai = await prisma.nilai.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Nilais and only return the `id`
     * const nilaiWithIdOnly = await prisma.nilai.updateManyAndReturn({
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
    updateManyAndReturn<T extends NilaiUpdateManyAndReturnArgs>(args: SelectSubset<T, NilaiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Nilai.
     * @param {NilaiUpsertArgs} args - Arguments to update or create a Nilai.
     * @example
     * // Update or create a Nilai
     * const nilai = await prisma.nilai.upsert({
     *   create: {
     *     // ... data to create a Nilai
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nilai we want to update
     *   }
     * })
     */
    upsert<T extends NilaiUpsertArgs>(args: SelectSubset<T, NilaiUpsertArgs<ExtArgs>>): Prisma__NilaiClient<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Nilais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NilaiCountArgs} args - Arguments to filter Nilais to count.
     * @example
     * // Count the number of Nilais
     * const count = await prisma.nilai.count({
     *   where: {
     *     // ... the filter for the Nilais we want to count
     *   }
     * })
    **/
    count<T extends NilaiCountArgs>(
      args?: Subset<T, NilaiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NilaiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nilai.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NilaiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NilaiAggregateArgs>(args: Subset<T, NilaiAggregateArgs>): Prisma.PrismaPromise<GetNilaiAggregateType<T>>

    /**
     * Group by Nilai.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NilaiGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends NilaiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NilaiGroupByArgs['orderBy'] }
        : { orderBy?: NilaiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NilaiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNilaiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Nilai model
   */
  readonly fields: NilaiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Nilai.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NilaiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submission<T extends SubmissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubmissionDefaultArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Nilai model
   */
  interface NilaiFieldRefs {
    readonly id: FieldRef<"Nilai", 'Int'>
    readonly submissionId: FieldRef<"Nilai", 'Int'>
    readonly nilai: FieldRef<"Nilai", 'Int'>
    readonly catatan: FieldRef<"Nilai", 'String'>
    readonly createdAt: FieldRef<"Nilai", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Nilai findUnique
   */
  export type NilaiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInclude<ExtArgs> | null
    /**
     * Filter, which Nilai to fetch.
     */
    where: NilaiWhereUniqueInput
  }

  /**
   * Nilai findUniqueOrThrow
   */
  export type NilaiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInclude<ExtArgs> | null
    /**
     * Filter, which Nilai to fetch.
     */
    where: NilaiWhereUniqueInput
  }

  /**
   * Nilai findFirst
   */
  export type NilaiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInclude<ExtArgs> | null
    /**
     * Filter, which Nilai to fetch.
     */
    where?: NilaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nilais to fetch.
     */
    orderBy?: NilaiOrderByWithRelationInput | NilaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nilais.
     */
    cursor?: NilaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nilais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nilais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nilais.
     */
    distinct?: NilaiScalarFieldEnum | NilaiScalarFieldEnum[]
  }

  /**
   * Nilai findFirstOrThrow
   */
  export type NilaiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInclude<ExtArgs> | null
    /**
     * Filter, which Nilai to fetch.
     */
    where?: NilaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nilais to fetch.
     */
    orderBy?: NilaiOrderByWithRelationInput | NilaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nilais.
     */
    cursor?: NilaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nilais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nilais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nilais.
     */
    distinct?: NilaiScalarFieldEnum | NilaiScalarFieldEnum[]
  }

  /**
   * Nilai findMany
   */
  export type NilaiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInclude<ExtArgs> | null
    /**
     * Filter, which Nilais to fetch.
     */
    where?: NilaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nilais to fetch.
     */
    orderBy?: NilaiOrderByWithRelationInput | NilaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Nilais.
     */
    cursor?: NilaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nilais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nilais.
     */
    skip?: number
    distinct?: NilaiScalarFieldEnum | NilaiScalarFieldEnum[]
  }

  /**
   * Nilai create
   */
  export type NilaiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInclude<ExtArgs> | null
    /**
     * The data needed to create a Nilai.
     */
    data: XOR<NilaiCreateInput, NilaiUncheckedCreateInput>
  }

  /**
   * Nilai createMany
   */
  export type NilaiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Nilais.
     */
    data: NilaiCreateManyInput | NilaiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Nilai createManyAndReturn
   */
  export type NilaiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * The data used to create many Nilais.
     */
    data: NilaiCreateManyInput | NilaiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Nilai update
   */
  export type NilaiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInclude<ExtArgs> | null
    /**
     * The data needed to update a Nilai.
     */
    data: XOR<NilaiUpdateInput, NilaiUncheckedUpdateInput>
    /**
     * Choose, which Nilai to update.
     */
    where: NilaiWhereUniqueInput
  }

  /**
   * Nilai updateMany
   */
  export type NilaiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Nilais.
     */
    data: XOR<NilaiUpdateManyMutationInput, NilaiUncheckedUpdateManyInput>
    /**
     * Filter which Nilais to update
     */
    where?: NilaiWhereInput
    /**
     * Limit how many Nilais to update.
     */
    limit?: number
  }

  /**
   * Nilai updateManyAndReturn
   */
  export type NilaiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * The data used to update Nilais.
     */
    data: XOR<NilaiUpdateManyMutationInput, NilaiUncheckedUpdateManyInput>
    /**
     * Filter which Nilais to update
     */
    where?: NilaiWhereInput
    /**
     * Limit how many Nilais to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Nilai upsert
   */
  export type NilaiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInclude<ExtArgs> | null
    /**
     * The filter to search for the Nilai to update in case it exists.
     */
    where: NilaiWhereUniqueInput
    /**
     * In case the Nilai found by the `where` argument doesn't exist, create a new Nilai with this data.
     */
    create: XOR<NilaiCreateInput, NilaiUncheckedCreateInput>
    /**
     * In case the Nilai was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NilaiUpdateInput, NilaiUncheckedUpdateInput>
  }

  /**
   * Nilai delete
   */
  export type NilaiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInclude<ExtArgs> | null
    /**
     * Filter which Nilai to delete.
     */
    where: NilaiWhereUniqueInput
  }

  /**
   * Nilai deleteMany
   */
  export type NilaiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nilais to delete
     */
    where?: NilaiWhereInput
    /**
     * Limit how many Nilais to delete.
     */
    limit?: number
  }

  /**
   * Nilai without action
   */
  export type NilaiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    message: string | null
    level: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    message: string | null
    level: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    message: number
    level: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    level?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    level?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    level?: true
    isRead?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    userId: number
    title: string
    message: string
    level: string
    isRead: boolean
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    level?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    level?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    level?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    level?: boolean
    isRead?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "message" | "level" | "isRead" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      title: string
      message: string
      level: string
      isRead: boolean
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly userId: FieldRef<"Notification", 'Int'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly level: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: number | null
    userId: number | null
    namaLengkap: string | null
    noHp: string | null
    alamat: string | null
    fotoUrl: string | null
    tanggalLahir: Date | null
    jenisKelamin: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    namaLengkap: string | null
    noHp: string | null
    alamat: string | null
    fotoUrl: string | null
    tanggalLahir: Date | null
    jenisKelamin: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    userId: number
    namaLengkap: number
    noHp: number
    alamat: number
    fotoUrl: number
    tanggalLahir: number
    jenisKelamin: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    userId?: true
    namaLengkap?: true
    noHp?: true
    alamat?: true
    fotoUrl?: true
    tanggalLahir?: true
    jenisKelamin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    namaLengkap?: true
    noHp?: true
    alamat?: true
    fotoUrl?: true
    tanggalLahir?: true
    jenisKelamin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    userId?: true
    namaLengkap?: true
    noHp?: true
    alamat?: true
    fotoUrl?: true
    tanggalLahir?: true
    jenisKelamin?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: number
    userId: number
    namaLengkap: string
    noHp: string | null
    alamat: string | null
    fotoUrl: string | null
    tanggalLahir: Date | null
    jenisKelamin: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    namaLengkap?: boolean
    noHp?: boolean
    alamat?: boolean
    fotoUrl?: boolean
    tanggalLahir?: boolean
    jenisKelamin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    namaLengkap?: boolean
    noHp?: boolean
    alamat?: boolean
    fotoUrl?: boolean
    tanggalLahir?: boolean
    jenisKelamin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    namaLengkap?: boolean
    noHp?: boolean
    alamat?: boolean
    fotoUrl?: boolean
    tanggalLahir?: boolean
    jenisKelamin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    namaLengkap?: boolean
    noHp?: boolean
    alamat?: boolean
    fotoUrl?: boolean
    tanggalLahir?: boolean
    jenisKelamin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "namaLengkap" | "noHp" | "alamat" | "fotoUrl" | "tanggalLahir" | "jenisKelamin" | "createdAt" | "updatedAt", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      namaLengkap: string
      noHp: string | null
      alamat: string | null
      fotoUrl: string | null
      tanggalLahir: Date | null
      jenisKelamin: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'Int'>
    readonly userId: FieldRef<"Profile", 'Int'>
    readonly namaLengkap: FieldRef<"Profile", 'String'>
    readonly noHp: FieldRef<"Profile", 'String'>
    readonly alamat: FieldRef<"Profile", 'String'>
    readonly fotoUrl: FieldRef<"Profile", 'String'>
    readonly tanggalLahir: FieldRef<"Profile", 'DateTime'>
    readonly jenisKelamin: FieldRef<"Profile", 'String'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Submission
   */

  export type AggregateSubmission = {
    _count: SubmissionCountAggregateOutputType | null
    _avg: SubmissionAvgAggregateOutputType | null
    _sum: SubmissionSumAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  export type SubmissionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    tugasId: number | null
  }

  export type SubmissionSumAggregateOutputType = {
    id: number | null
    userId: number | null
    tugasId: number | null
  }

  export type SubmissionMinAggregateOutputType = {
    id: number | null
    userId: number | null
    tugasId: number | null
    fileUrl: string | null
    linkUrl: string | null
    status: $Enums.StatusSubmission | null
    submittedAt: Date | null
    deletedAt: Date | null
  }

  export type SubmissionMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    tugasId: number | null
    fileUrl: string | null
    linkUrl: string | null
    status: $Enums.StatusSubmission | null
    submittedAt: Date | null
    deletedAt: Date | null
  }

  export type SubmissionCountAggregateOutputType = {
    id: number
    userId: number
    tugasId: number
    fileUrl: number
    linkUrl: number
    status: number
    submittedAt: number
    deletedAt: number
    _all: number
  }


  export type SubmissionAvgAggregateInputType = {
    id?: true
    userId?: true
    tugasId?: true
  }

  export type SubmissionSumAggregateInputType = {
    id?: true
    userId?: true
    tugasId?: true
  }

  export type SubmissionMinAggregateInputType = {
    id?: true
    userId?: true
    tugasId?: true
    fileUrl?: true
    linkUrl?: true
    status?: true
    submittedAt?: true
    deletedAt?: true
  }

  export type SubmissionMaxAggregateInputType = {
    id?: true
    userId?: true
    tugasId?: true
    fileUrl?: true
    linkUrl?: true
    status?: true
    submittedAt?: true
    deletedAt?: true
  }

  export type SubmissionCountAggregateInputType = {
    id?: true
    userId?: true
    tugasId?: true
    fileUrl?: true
    linkUrl?: true
    status?: true
    submittedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type SubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submission to aggregate.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Submissions
    **/
    _count?: true | SubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionMaxAggregateInputType
  }

  export type GetSubmissionAggregateType<T extends SubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmission[P]>
      : GetScalarType<T[P], AggregateSubmission[P]>
  }




  export type SubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithAggregationInput | SubmissionOrderByWithAggregationInput[]
    by: SubmissionScalarFieldEnum[] | SubmissionScalarFieldEnum
    having?: SubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionCountAggregateInputType | true
    _avg?: SubmissionAvgAggregateInputType
    _sum?: SubmissionSumAggregateInputType
    _min?: SubmissionMinAggregateInputType
    _max?: SubmissionMaxAggregateInputType
  }

  export type SubmissionGroupByOutputType = {
    id: number
    userId: number
    tugasId: number
    fileUrl: string | null
    linkUrl: string | null
    status: $Enums.StatusSubmission
    submittedAt: Date
    deletedAt: Date | null
    _count: SubmissionCountAggregateOutputType | null
    _avg: SubmissionAvgAggregateOutputType | null
    _sum: SubmissionSumAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  type GetSubmissionGroupByPayload<T extends SubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
        }
      >
    >


  export type SubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tugasId?: boolean
    fileUrl?: boolean
    linkUrl?: boolean
    status?: boolean
    submittedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tugas?: boolean | TugasDefaultArgs<ExtArgs>
    nilai?: boolean | Submission$nilaiArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tugasId?: boolean
    fileUrl?: boolean
    linkUrl?: boolean
    status?: boolean
    submittedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tugas?: boolean | TugasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tugasId?: boolean
    fileUrl?: boolean
    linkUrl?: boolean
    status?: boolean
    submittedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tugas?: boolean | TugasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectScalar = {
    id?: boolean
    userId?: boolean
    tugasId?: boolean
    fileUrl?: boolean
    linkUrl?: boolean
    status?: boolean
    submittedAt?: boolean
    deletedAt?: boolean
  }

  export type SubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tugasId" | "fileUrl" | "linkUrl" | "status" | "submittedAt" | "deletedAt", ExtArgs["result"]["submission"]>
  export type SubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tugas?: boolean | TugasDefaultArgs<ExtArgs>
    nilai?: boolean | Submission$nilaiArgs<ExtArgs>
  }
  export type SubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tugas?: boolean | TugasDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tugas?: boolean | TugasDefaultArgs<ExtArgs>
  }

  export type $SubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Submission"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tugas: Prisma.$TugasPayload<ExtArgs>
      nilai: Prisma.$NilaiPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      tugasId: number
      fileUrl: string | null
      linkUrl: string | null
      status: $Enums.StatusSubmission
      submittedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["submission"]>
    composites: {}
  }

  type SubmissionGetPayload<S extends boolean | null | undefined | SubmissionDefaultArgs> = $Result.GetResult<Prisma.$SubmissionPayload, S>

  type SubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubmissionCountAggregateInputType | true
    }

  export interface SubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Submission'], meta: { name: 'Submission' } }
    /**
     * Find zero or one Submission that matches the filter.
     * @param {SubmissionFindUniqueArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubmissionFindUniqueArgs>(args: SelectSubset<T, SubmissionFindUniqueArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Submission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubmissionFindUniqueOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubmissionFindFirstArgs>(args?: SelectSubset<T, SubmissionFindFirstArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submission.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionWithIdOnly = await prisma.submission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubmissionFindManyArgs>(args?: SelectSubset<T, SubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Submission.
     * @param {SubmissionCreateArgs} args - Arguments to create a Submission.
     * @example
     * // Create one Submission
     * const Submission = await prisma.submission.create({
     *   data: {
     *     // ... data to create a Submission
     *   }
     * })
     * 
     */
    create<T extends SubmissionCreateArgs>(args: SelectSubset<T, SubmissionCreateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Submissions.
     * @param {SubmissionCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubmissionCreateManyArgs>(args?: SelectSubset<T, SubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Submissions and returns the data saved in the database.
     * @param {SubmissionCreateManyAndReturnArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Submission.
     * @param {SubmissionDeleteArgs} args - Arguments to delete one Submission.
     * @example
     * // Delete one Submission
     * const Submission = await prisma.submission.delete({
     *   where: {
     *     // ... filter to delete one Submission
     *   }
     * })
     * 
     */
    delete<T extends SubmissionDeleteArgs>(args: SelectSubset<T, SubmissionDeleteArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Submission.
     * @param {SubmissionUpdateArgs} args - Arguments to update one Submission.
     * @example
     * // Update one Submission
     * const submission = await prisma.submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubmissionUpdateArgs>(args: SelectSubset<T, SubmissionUpdateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Submissions.
     * @param {SubmissionDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubmissionDeleteManyArgs>(args?: SelectSubset<T, SubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubmissionUpdateManyArgs>(args: SelectSubset<T, SubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions and returns the data updated in the database.
     * @param {SubmissionUpdateManyAndReturnArgs} args - Arguments to update many Submissions.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Submission.
     * @param {SubmissionUpsertArgs} args - Arguments to update or create a Submission.
     * @example
     * // Update or create a Submission
     * const submission = await prisma.submission.upsert({
     *   create: {
     *     // ... data to create a Submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submission we want to update
     *   }
     * })
     */
    upsert<T extends SubmissionUpsertArgs>(args: SelectSubset<T, SubmissionUpsertArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submission.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends SubmissionCountArgs>(
      args?: Subset<T, SubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubmissionAggregateArgs>(args: Subset<T, SubmissionAggregateArgs>): Prisma.PrismaPromise<GetSubmissionAggregateType<T>>

    /**
     * Group by Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends SubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubmissionGroupByArgs['orderBy'] }
        : { orderBy?: SubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Submission model
   */
  readonly fields: SubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tugas<T extends TugasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TugasDefaultArgs<ExtArgs>>): Prisma__TugasClient<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    nilai<T extends Submission$nilaiArgs<ExtArgs> = {}>(args?: Subset<T, Submission$nilaiArgs<ExtArgs>>): Prisma__NilaiClient<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Submission model
   */
  interface SubmissionFieldRefs {
    readonly id: FieldRef<"Submission", 'Int'>
    readonly userId: FieldRef<"Submission", 'Int'>
    readonly tugasId: FieldRef<"Submission", 'Int'>
    readonly fileUrl: FieldRef<"Submission", 'String'>
    readonly linkUrl: FieldRef<"Submission", 'String'>
    readonly status: FieldRef<"Submission", 'StatusSubmission'>
    readonly submittedAt: FieldRef<"Submission", 'DateTime'>
    readonly deletedAt: FieldRef<"Submission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Submission findUnique
   */
  export type SubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findUniqueOrThrow
   */
  export type SubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findFirst
   */
  export type SubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findFirstOrThrow
   */
  export type SubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findMany
   */
  export type SubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submissions to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission create
   */
  export type SubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Submission.
     */
    data: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
  }

  /**
   * Submission createMany
   */
  export type SubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Submission createManyAndReturn
   */
  export type SubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission update
   */
  export type SubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Submission.
     */
    data: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
    /**
     * Choose, which Submission to update.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission updateMany
   */
  export type SubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
  }

  /**
   * Submission updateManyAndReturn
   */
  export type SubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission upsert
   */
  export type SubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Submission to update in case it exists.
     */
    where: SubmissionWhereUniqueInput
    /**
     * In case the Submission found by the `where` argument doesn't exist, create a new Submission with this data.
     */
    create: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
    /**
     * In case the Submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
  }

  /**
   * Submission delete
   */
  export type SubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter which Submission to delete.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission deleteMany
   */
  export type SubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submissions to delete
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to delete.
     */
    limit?: number
  }

  /**
   * Submission.nilai
   */
  export type Submission$nilaiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInclude<ExtArgs> | null
    where?: NilaiWhereInput
  }

  /**
   * Submission without action
   */
  export type SubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
  }


  /**
   * Model Tugas
   */

  export type AggregateTugas = {
    _count: TugasCountAggregateOutputType | null
    _avg: TugasAvgAggregateOutputType | null
    _sum: TugasSumAggregateOutputType | null
    _min: TugasMinAggregateOutputType | null
    _max: TugasMaxAggregateOutputType | null
  }

  export type TugasAvgAggregateOutputType = {
    id: number | null
    kelasId: number | null
    mataPelajaranId: number | null
    createdBy: number | null
  }

  export type TugasSumAggregateOutputType = {
    id: number | null
    kelasId: number | null
    mataPelajaranId: number | null
    createdBy: number | null
  }

  export type TugasMinAggregateOutputType = {
    id: number | null
    kelasId: number | null
    mataPelajaranId: number | null
    title: string | null
    description: string | null
    deadline: Date | null
    createdBy: number | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type TugasMaxAggregateOutputType = {
    id: number | null
    kelasId: number | null
    mataPelajaranId: number | null
    title: string | null
    description: string | null
    deadline: Date | null
    createdBy: number | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type TugasCountAggregateOutputType = {
    id: number
    kelasId: number
    mataPelajaranId: number
    title: number
    description: number
    deadline: number
    createdBy: number
    createdAt: number
    deletedAt: number
    _all: number
  }


  export type TugasAvgAggregateInputType = {
    id?: true
    kelasId?: true
    mataPelajaranId?: true
    createdBy?: true
  }

  export type TugasSumAggregateInputType = {
    id?: true
    kelasId?: true
    mataPelajaranId?: true
    createdBy?: true
  }

  export type TugasMinAggregateInputType = {
    id?: true
    kelasId?: true
    mataPelajaranId?: true
    title?: true
    description?: true
    deadline?: true
    createdBy?: true
    createdAt?: true
    deletedAt?: true
  }

  export type TugasMaxAggregateInputType = {
    id?: true
    kelasId?: true
    mataPelajaranId?: true
    title?: true
    description?: true
    deadline?: true
    createdBy?: true
    createdAt?: true
    deletedAt?: true
  }

  export type TugasCountAggregateInputType = {
    id?: true
    kelasId?: true
    mataPelajaranId?: true
    title?: true
    description?: true
    deadline?: true
    createdBy?: true
    createdAt?: true
    deletedAt?: true
    _all?: true
  }

  export type TugasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tugas to aggregate.
     */
    where?: TugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tugases to fetch.
     */
    orderBy?: TugasOrderByWithRelationInput | TugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tugases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tugases
    **/
    _count?: true | TugasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TugasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TugasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TugasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TugasMaxAggregateInputType
  }

  export type GetTugasAggregateType<T extends TugasAggregateArgs> = {
        [P in keyof T & keyof AggregateTugas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTugas[P]>
      : GetScalarType<T[P], AggregateTugas[P]>
  }




  export type TugasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TugasWhereInput
    orderBy?: TugasOrderByWithAggregationInput | TugasOrderByWithAggregationInput[]
    by: TugasScalarFieldEnum[] | TugasScalarFieldEnum
    having?: TugasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TugasCountAggregateInputType | true
    _avg?: TugasAvgAggregateInputType
    _sum?: TugasSumAggregateInputType
    _min?: TugasMinAggregateInputType
    _max?: TugasMaxAggregateInputType
  }

  export type TugasGroupByOutputType = {
    id: number
    kelasId: number
    mataPelajaranId: number
    title: string
    description: string | null
    deadline: Date
    createdBy: number
    createdAt: Date
    deletedAt: Date | null
    _count: TugasCountAggregateOutputType | null
    _avg: TugasAvgAggregateOutputType | null
    _sum: TugasSumAggregateOutputType | null
    _min: TugasMinAggregateOutputType | null
    _max: TugasMaxAggregateOutputType | null
  }

  type GetTugasGroupByPayload<T extends TugasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TugasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TugasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TugasGroupByOutputType[P]>
            : GetScalarType<T[P], TugasGroupByOutputType[P]>
        }
      >
    >


  export type TugasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kelasId?: boolean
    mataPelajaranId?: boolean
    title?: boolean
    description?: boolean
    deadline?: boolean
    createdBy?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
    mataPelajaran?: boolean | MataPelajaranDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    submission?: boolean | Tugas$submissionArgs<ExtArgs>
    _count?: boolean | TugasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tugas"]>

  export type TugasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kelasId?: boolean
    mataPelajaranId?: boolean
    title?: boolean
    description?: boolean
    deadline?: boolean
    createdBy?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
    mataPelajaran?: boolean | MataPelajaranDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tugas"]>

  export type TugasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kelasId?: boolean
    mataPelajaranId?: boolean
    title?: boolean
    description?: boolean
    deadline?: boolean
    createdBy?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
    mataPelajaran?: boolean | MataPelajaranDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tugas"]>

  export type TugasSelectScalar = {
    id?: boolean
    kelasId?: boolean
    mataPelajaranId?: boolean
    title?: boolean
    description?: boolean
    deadline?: boolean
    createdBy?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }

  export type TugasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "kelasId" | "mataPelajaranId" | "title" | "description" | "deadline" | "createdBy" | "createdAt" | "deletedAt", ExtArgs["result"]["tugas"]>
  export type TugasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
    mataPelajaran?: boolean | MataPelajaranDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    submission?: boolean | Tugas$submissionArgs<ExtArgs>
    _count?: boolean | TugasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TugasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
    mataPelajaran?: boolean | MataPelajaranDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TugasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
    mataPelajaran?: boolean | MataPelajaranDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TugasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tugas"
    objects: {
      kelas: Prisma.$KelasPayload<ExtArgs>
      mataPelajaran: Prisma.$MataPelajaranPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
      submission: Prisma.$SubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      kelasId: number
      mataPelajaranId: number
      title: string
      description: string | null
      deadline: Date
      createdBy: number
      createdAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["tugas"]>
    composites: {}
  }

  type TugasGetPayload<S extends boolean | null | undefined | TugasDefaultArgs> = $Result.GetResult<Prisma.$TugasPayload, S>

  type TugasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TugasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TugasCountAggregateInputType | true
    }

  export interface TugasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tugas'], meta: { name: 'Tugas' } }
    /**
     * Find zero or one Tugas that matches the filter.
     * @param {TugasFindUniqueArgs} args - Arguments to find a Tugas
     * @example
     * // Get one Tugas
     * const tugas = await prisma.tugas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TugasFindUniqueArgs>(args: SelectSubset<T, TugasFindUniqueArgs<ExtArgs>>): Prisma__TugasClient<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tugas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TugasFindUniqueOrThrowArgs} args - Arguments to find a Tugas
     * @example
     * // Get one Tugas
     * const tugas = await prisma.tugas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TugasFindUniqueOrThrowArgs>(args: SelectSubset<T, TugasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TugasClient<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tugas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasFindFirstArgs} args - Arguments to find a Tugas
     * @example
     * // Get one Tugas
     * const tugas = await prisma.tugas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TugasFindFirstArgs>(args?: SelectSubset<T, TugasFindFirstArgs<ExtArgs>>): Prisma__TugasClient<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tugas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasFindFirstOrThrowArgs} args - Arguments to find a Tugas
     * @example
     * // Get one Tugas
     * const tugas = await prisma.tugas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TugasFindFirstOrThrowArgs>(args?: SelectSubset<T, TugasFindFirstOrThrowArgs<ExtArgs>>): Prisma__TugasClient<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tugases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tugases
     * const tugases = await prisma.tugas.findMany()
     * 
     * // Get first 10 Tugases
     * const tugases = await prisma.tugas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tugasWithIdOnly = await prisma.tugas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TugasFindManyArgs>(args?: SelectSubset<T, TugasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tugas.
     * @param {TugasCreateArgs} args - Arguments to create a Tugas.
     * @example
     * // Create one Tugas
     * const Tugas = await prisma.tugas.create({
     *   data: {
     *     // ... data to create a Tugas
     *   }
     * })
     * 
     */
    create<T extends TugasCreateArgs>(args: SelectSubset<T, TugasCreateArgs<ExtArgs>>): Prisma__TugasClient<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tugases.
     * @param {TugasCreateManyArgs} args - Arguments to create many Tugases.
     * @example
     * // Create many Tugases
     * const tugas = await prisma.tugas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TugasCreateManyArgs>(args?: SelectSubset<T, TugasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tugases and returns the data saved in the database.
     * @param {TugasCreateManyAndReturnArgs} args - Arguments to create many Tugases.
     * @example
     * // Create many Tugases
     * const tugas = await prisma.tugas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tugases and only return the `id`
     * const tugasWithIdOnly = await prisma.tugas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TugasCreateManyAndReturnArgs>(args?: SelectSubset<T, TugasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tugas.
     * @param {TugasDeleteArgs} args - Arguments to delete one Tugas.
     * @example
     * // Delete one Tugas
     * const Tugas = await prisma.tugas.delete({
     *   where: {
     *     // ... filter to delete one Tugas
     *   }
     * })
     * 
     */
    delete<T extends TugasDeleteArgs>(args: SelectSubset<T, TugasDeleteArgs<ExtArgs>>): Prisma__TugasClient<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tugas.
     * @param {TugasUpdateArgs} args - Arguments to update one Tugas.
     * @example
     * // Update one Tugas
     * const tugas = await prisma.tugas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TugasUpdateArgs>(args: SelectSubset<T, TugasUpdateArgs<ExtArgs>>): Prisma__TugasClient<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tugases.
     * @param {TugasDeleteManyArgs} args - Arguments to filter Tugases to delete.
     * @example
     * // Delete a few Tugases
     * const { count } = await prisma.tugas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TugasDeleteManyArgs>(args?: SelectSubset<T, TugasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tugases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tugases
     * const tugas = await prisma.tugas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TugasUpdateManyArgs>(args: SelectSubset<T, TugasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tugases and returns the data updated in the database.
     * @param {TugasUpdateManyAndReturnArgs} args - Arguments to update many Tugases.
     * @example
     * // Update many Tugases
     * const tugas = await prisma.tugas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tugases and only return the `id`
     * const tugasWithIdOnly = await prisma.tugas.updateManyAndReturn({
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
    updateManyAndReturn<T extends TugasUpdateManyAndReturnArgs>(args: SelectSubset<T, TugasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tugas.
     * @param {TugasUpsertArgs} args - Arguments to update or create a Tugas.
     * @example
     * // Update or create a Tugas
     * const tugas = await prisma.tugas.upsert({
     *   create: {
     *     // ... data to create a Tugas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tugas we want to update
     *   }
     * })
     */
    upsert<T extends TugasUpsertArgs>(args: SelectSubset<T, TugasUpsertArgs<ExtArgs>>): Prisma__TugasClient<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tugases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasCountArgs} args - Arguments to filter Tugases to count.
     * @example
     * // Count the number of Tugases
     * const count = await prisma.tugas.count({
     *   where: {
     *     // ... the filter for the Tugases we want to count
     *   }
     * })
    **/
    count<T extends TugasCountArgs>(
      args?: Subset<T, TugasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TugasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tugas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TugasAggregateArgs>(args: Subset<T, TugasAggregateArgs>): Prisma.PrismaPromise<GetTugasAggregateType<T>>

    /**
     * Group by Tugas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends TugasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TugasGroupByArgs['orderBy'] }
        : { orderBy?: TugasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TugasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTugasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tugas model
   */
  readonly fields: TugasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tugas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TugasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kelas<T extends KelasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KelasDefaultArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mataPelajaran<T extends MataPelajaranDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MataPelajaranDefaultArgs<ExtArgs>>): Prisma__MataPelajaranClient<$Result.GetResult<Prisma.$MataPelajaranPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    submission<T extends Tugas$submissionArgs<ExtArgs> = {}>(args?: Subset<T, Tugas$submissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tugas model
   */
  interface TugasFieldRefs {
    readonly id: FieldRef<"Tugas", 'Int'>
    readonly kelasId: FieldRef<"Tugas", 'Int'>
    readonly mataPelajaranId: FieldRef<"Tugas", 'Int'>
    readonly title: FieldRef<"Tugas", 'String'>
    readonly description: FieldRef<"Tugas", 'String'>
    readonly deadline: FieldRef<"Tugas", 'DateTime'>
    readonly createdBy: FieldRef<"Tugas", 'Int'>
    readonly createdAt: FieldRef<"Tugas", 'DateTime'>
    readonly deletedAt: FieldRef<"Tugas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tugas findUnique
   */
  export type TugasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tugas
     */
    omit?: TugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TugasInclude<ExtArgs> | null
    /**
     * Filter, which Tugas to fetch.
     */
    where: TugasWhereUniqueInput
  }

  /**
   * Tugas findUniqueOrThrow
   */
  export type TugasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tugas
     */
    omit?: TugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TugasInclude<ExtArgs> | null
    /**
     * Filter, which Tugas to fetch.
     */
    where: TugasWhereUniqueInput
  }

  /**
   * Tugas findFirst
   */
  export type TugasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tugas
     */
    omit?: TugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TugasInclude<ExtArgs> | null
    /**
     * Filter, which Tugas to fetch.
     */
    where?: TugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tugases to fetch.
     */
    orderBy?: TugasOrderByWithRelationInput | TugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tugases.
     */
    cursor?: TugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tugases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tugases.
     */
    distinct?: TugasScalarFieldEnum | TugasScalarFieldEnum[]
  }

  /**
   * Tugas findFirstOrThrow
   */
  export type TugasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tugas
     */
    omit?: TugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TugasInclude<ExtArgs> | null
    /**
     * Filter, which Tugas to fetch.
     */
    where?: TugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tugases to fetch.
     */
    orderBy?: TugasOrderByWithRelationInput | TugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tugases.
     */
    cursor?: TugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tugases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tugases.
     */
    distinct?: TugasScalarFieldEnum | TugasScalarFieldEnum[]
  }

  /**
   * Tugas findMany
   */
  export type TugasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tugas
     */
    omit?: TugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TugasInclude<ExtArgs> | null
    /**
     * Filter, which Tugases to fetch.
     */
    where?: TugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tugases to fetch.
     */
    orderBy?: TugasOrderByWithRelationInput | TugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tugases.
     */
    cursor?: TugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tugases.
     */
    skip?: number
    distinct?: TugasScalarFieldEnum | TugasScalarFieldEnum[]
  }

  /**
   * Tugas create
   */
  export type TugasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tugas
     */
    omit?: TugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TugasInclude<ExtArgs> | null
    /**
     * The data needed to create a Tugas.
     */
    data: XOR<TugasCreateInput, TugasUncheckedCreateInput>
  }

  /**
   * Tugas createMany
   */
  export type TugasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tugases.
     */
    data: TugasCreateManyInput | TugasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tugas createManyAndReturn
   */
  export type TugasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tugas
     */
    omit?: TugasOmit<ExtArgs> | null
    /**
     * The data used to create many Tugases.
     */
    data: TugasCreateManyInput | TugasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TugasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tugas update
   */
  export type TugasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tugas
     */
    omit?: TugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TugasInclude<ExtArgs> | null
    /**
     * The data needed to update a Tugas.
     */
    data: XOR<TugasUpdateInput, TugasUncheckedUpdateInput>
    /**
     * Choose, which Tugas to update.
     */
    where: TugasWhereUniqueInput
  }

  /**
   * Tugas updateMany
   */
  export type TugasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tugases.
     */
    data: XOR<TugasUpdateManyMutationInput, TugasUncheckedUpdateManyInput>
    /**
     * Filter which Tugases to update
     */
    where?: TugasWhereInput
    /**
     * Limit how many Tugases to update.
     */
    limit?: number
  }

  /**
   * Tugas updateManyAndReturn
   */
  export type TugasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tugas
     */
    omit?: TugasOmit<ExtArgs> | null
    /**
     * The data used to update Tugases.
     */
    data: XOR<TugasUpdateManyMutationInput, TugasUncheckedUpdateManyInput>
    /**
     * Filter which Tugases to update
     */
    where?: TugasWhereInput
    /**
     * Limit how many Tugases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TugasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tugas upsert
   */
  export type TugasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tugas
     */
    omit?: TugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TugasInclude<ExtArgs> | null
    /**
     * The filter to search for the Tugas to update in case it exists.
     */
    where: TugasWhereUniqueInput
    /**
     * In case the Tugas found by the `where` argument doesn't exist, create a new Tugas with this data.
     */
    create: XOR<TugasCreateInput, TugasUncheckedCreateInput>
    /**
     * In case the Tugas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TugasUpdateInput, TugasUncheckedUpdateInput>
  }

  /**
   * Tugas delete
   */
  export type TugasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tugas
     */
    omit?: TugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TugasInclude<ExtArgs> | null
    /**
     * Filter which Tugas to delete.
     */
    where: TugasWhereUniqueInput
  }

  /**
   * Tugas deleteMany
   */
  export type TugasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tugases to delete
     */
    where?: TugasWhereInput
    /**
     * Limit how many Tugases to delete.
     */
    limit?: number
  }

  /**
   * Tugas.submission
   */
  export type Tugas$submissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Tugas without action
   */
  export type TugasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tugas
     */
    omit?: TugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TugasInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    kelasId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    kelasId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    activatedAt: Date | null
    isActive: boolean | null
    otp: string | null
    otpExpiresAt: Date | null
    role: $Enums.Role | null
    kelasId: number | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    activatedAt: Date | null
    isActive: boolean | null
    otp: string | null
    otpExpiresAt: Date | null
    role: $Enums.Role | null
    kelasId: number | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    activatedAt: number
    isActive: number
    otp: number
    otpExpiresAt: number
    role: number
    kelasId: number
    createdAt: number
    deletedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    kelasId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    kelasId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    activatedAt?: true
    isActive?: true
    otp?: true
    otpExpiresAt?: true
    role?: true
    kelasId?: true
    createdAt?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    activatedAt?: true
    isActive?: true
    otp?: true
    otpExpiresAt?: true
    role?: true
    kelasId?: true
    createdAt?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    activatedAt?: true
    isActive?: true
    otp?: true
    otpExpiresAt?: true
    role?: true
    kelasId?: true
    createdAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string | null
    email: string
    password: string | null
    activatedAt: Date | null
    isActive: boolean
    otp: string | null
    otpExpiresAt: Date | null
    role: $Enums.Role
    kelasId: number | null
    createdAt: Date
    deletedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    activatedAt?: boolean
    isActive?: boolean
    otp?: boolean
    otpExpiresAt?: boolean
    role?: boolean
    kelasId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    kelas?: boolean | User$kelasArgs<ExtArgs>
    kelasAjar?: boolean | User$kelasAjarArgs<ExtArgs>
    absensi?: boolean | User$absensiArgs<ExtArgs>
    izin?: boolean | User$izinArgs<ExtArgs>
    tugasDibuat?: boolean | User$tugasDibuatArgs<ExtArgs>
    submission?: boolean | User$submissionArgs<ExtArgs>
    log?: boolean | User$logArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    activatedAt?: boolean
    isActive?: boolean
    otp?: boolean
    otpExpiresAt?: boolean
    role?: boolean
    kelasId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    kelas?: boolean | User$kelasArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    activatedAt?: boolean
    isActive?: boolean
    otp?: boolean
    otpExpiresAt?: boolean
    role?: boolean
    kelasId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    kelas?: boolean | User$kelasArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    activatedAt?: boolean
    isActive?: boolean
    otp?: boolean
    otpExpiresAt?: boolean
    role?: boolean
    kelasId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "activatedAt" | "isActive" | "otp" | "otpExpiresAt" | "role" | "kelasId" | "createdAt" | "deletedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kelas?: boolean | User$kelasArgs<ExtArgs>
    kelasAjar?: boolean | User$kelasAjarArgs<ExtArgs>
    absensi?: boolean | User$absensiArgs<ExtArgs>
    izin?: boolean | User$izinArgs<ExtArgs>
    tugasDibuat?: boolean | User$tugasDibuatArgs<ExtArgs>
    submission?: boolean | User$submissionArgs<ExtArgs>
    log?: boolean | User$logArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kelas?: boolean | User$kelasArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kelas?: boolean | User$kelasArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      kelas: Prisma.$KelasPayload<ExtArgs> | null
      kelasAjar: Prisma.$KelasPayload<ExtArgs>[]
      absensi: Prisma.$AbsensiPayload<ExtArgs>[]
      izin: Prisma.$IzinPayload<ExtArgs>[]
      tugasDibuat: Prisma.$TugasPayload<ExtArgs>[]
      submission: Prisma.$SubmissionPayload<ExtArgs>[]
      log: Prisma.$LogAktivitasPayload<ExtArgs>[]
      profile: Prisma.$ProfilePayload<ExtArgs> | null
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string
      password: string | null
      activatedAt: Date | null
      isActive: boolean
      otp: string | null
      otpExpiresAt: Date | null
      role: $Enums.Role
      kelasId: number | null
      createdAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kelas<T extends User$kelasArgs<ExtArgs> = {}>(args?: Subset<T, User$kelasArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    kelasAjar<T extends User$kelasAjarArgs<ExtArgs> = {}>(args?: Subset<T, User$kelasAjarArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    absensi<T extends User$absensiArgs<ExtArgs> = {}>(args?: Subset<T, User$absensiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    izin<T extends User$izinArgs<ExtArgs> = {}>(args?: Subset<T, User$izinArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IzinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tugasDibuat<T extends User$tugasDibuatArgs<ExtArgs> = {}>(args?: Subset<T, User$tugasDibuatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    submission<T extends User$submissionArgs<ExtArgs> = {}>(args?: Subset<T, User$submissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    log<T extends User$logArgs<ExtArgs> = {}>(args?: Subset<T, User$logArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogAktivitasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly activatedAt: FieldRef<"User", 'DateTime'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly otp: FieldRef<"User", 'String'>
    readonly otpExpiresAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'Role'>
    readonly kelasId: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.kelas
   */
  export type User$kelasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    where?: KelasWhereInput
  }

  /**
   * User.kelasAjar
   */
  export type User$kelasAjarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    where?: KelasWhereInput
    orderBy?: KelasOrderByWithRelationInput | KelasOrderByWithRelationInput[]
    cursor?: KelasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KelasScalarFieldEnum | KelasScalarFieldEnum[]
  }

  /**
   * User.absensi
   */
  export type User$absensiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    where?: AbsensiWhereInput
    orderBy?: AbsensiOrderByWithRelationInput | AbsensiOrderByWithRelationInput[]
    cursor?: AbsensiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AbsensiScalarFieldEnum | AbsensiScalarFieldEnum[]
  }

  /**
   * User.izin
   */
  export type User$izinArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Izin
     */
    select?: IzinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Izin
     */
    omit?: IzinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IzinInclude<ExtArgs> | null
    where?: IzinWhereInput
    orderBy?: IzinOrderByWithRelationInput | IzinOrderByWithRelationInput[]
    cursor?: IzinWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IzinScalarFieldEnum | IzinScalarFieldEnum[]
  }

  /**
   * User.tugasDibuat
   */
  export type User$tugasDibuatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tugas
     */
    omit?: TugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TugasInclude<ExtArgs> | null
    where?: TugasWhereInput
    orderBy?: TugasOrderByWithRelationInput | TugasOrderByWithRelationInput[]
    cursor?: TugasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TugasScalarFieldEnum | TugasScalarFieldEnum[]
  }

  /**
   * User.submission
   */
  export type User$submissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * User.log
   */
  export type User$logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAktivitas
     */
    select?: LogAktivitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAktivitas
     */
    omit?: LogAktivitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAktivitasInclude<ExtArgs> | null
    where?: LogAktivitasWhereInput
    orderBy?: LogAktivitasOrderByWithRelationInput | LogAktivitasOrderByWithRelationInput[]
    cursor?: LogAktivitasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogAktivitasScalarFieldEnum | LogAktivitasScalarFieldEnum[]
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AbsensiScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    kelasId: 'kelasId',
    jadwalId: 'jadwalId',
    tanggal: 'tanggal',
    status: 'status',
    createdAt: 'createdAt',
    aiComment: 'aiComment',
    aiTone: 'aiTone',
    aiConfidence: 'aiConfidence'
  };

  export type AbsensiScalarFieldEnum = (typeof AbsensiScalarFieldEnum)[keyof typeof AbsensiScalarFieldEnum]


  export const AbsensiSettingScalarFieldEnum: {
    id: 'id',
    kelasId: 'kelasId',
    maxAbsen: 'maxAbsen',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AbsensiSettingScalarFieldEnum = (typeof AbsensiSettingScalarFieldEnum)[keyof typeof AbsensiSettingScalarFieldEnum]


  export const IzinScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    kelasId: 'kelasId',
    tanggal: 'tanggal',
    alasan: 'alasan',
    status: 'status',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt'
  };

  export type IzinScalarFieldEnum = (typeof IzinScalarFieldEnum)[keyof typeof IzinScalarFieldEnum]


  export const JadwalAbsensiScalarFieldEnum: {
    id: 'id',
    kelasId: 'kelasId',
    hari: 'hari',
    jamMulai: 'jamMulai',
    jamSelesai: 'jamSelesai',
    tanggal: 'tanggal',
    createdAt: 'createdAt'
  };

  export type JadwalAbsensiScalarFieldEnum = (typeof JadwalAbsensiScalarFieldEnum)[keyof typeof JadwalAbsensiScalarFieldEnum]


  export const KelasScalarFieldEnum: {
    id: 'id',
    namaKelas: 'namaKelas',
    deskripsi: 'deskripsi'
  };

  export type KelasScalarFieldEnum = (typeof KelasScalarFieldEnum)[keyof typeof KelasScalarFieldEnum]


  export const LogAktivitasScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    aktivitas: 'aktivitas',
    createdAt: 'createdAt'
  };

  export type LogAktivitasScalarFieldEnum = (typeof LogAktivitasScalarFieldEnum)[keyof typeof LogAktivitasScalarFieldEnum]


  export const MataPelajaranScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    kode: 'kode',
    createdAt: 'createdAt'
  };

  export type MataPelajaranScalarFieldEnum = (typeof MataPelajaranScalarFieldEnum)[keyof typeof MataPelajaranScalarFieldEnum]


  export const NilaiScalarFieldEnum: {
    id: 'id',
    submissionId: 'submissionId',
    nilai: 'nilai',
    catatan: 'catatan',
    createdAt: 'createdAt'
  };

  export type NilaiScalarFieldEnum = (typeof NilaiScalarFieldEnum)[keyof typeof NilaiScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    message: 'message',
    level: 'level',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    namaLengkap: 'namaLengkap',
    noHp: 'noHp',
    alamat: 'alamat',
    fotoUrl: 'fotoUrl',
    tanggalLahir: 'tanggalLahir',
    jenisKelamin: 'jenisKelamin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const SubmissionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tugasId: 'tugasId',
    fileUrl: 'fileUrl',
    linkUrl: 'linkUrl',
    status: 'status',
    submittedAt: 'submittedAt',
    deletedAt: 'deletedAt'
  };

  export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum]


  export const TugasScalarFieldEnum: {
    id: 'id',
    kelasId: 'kelasId',
    mataPelajaranId: 'mataPelajaranId',
    title: 'title',
    description: 'description',
    deadline: 'deadline',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt'
  };

  export type TugasScalarFieldEnum = (typeof TugasScalarFieldEnum)[keyof typeof TugasScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    activatedAt: 'activatedAt',
    isActive: 'isActive',
    otp: 'otp',
    otpExpiresAt: 'otpExpiresAt',
    role: 'role',
    kelasId: 'kelasId',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'StatusAbsensi'
   */
  export type EnumStatusAbsensiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusAbsensi'>
    


  /**
   * Reference to a field of type 'StatusAbsensi[]'
   */
  export type ListEnumStatusAbsensiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusAbsensi[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'StatusIzin'
   */
  export type EnumStatusIzinFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusIzin'>
    


  /**
   * Reference to a field of type 'StatusIzin[]'
   */
  export type ListEnumStatusIzinFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusIzin[]'>
    


  /**
   * Reference to a field of type 'Hari'
   */
  export type EnumHariFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Hari'>
    


  /**
   * Reference to a field of type 'Hari[]'
   */
  export type ListEnumHariFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Hari[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'StatusSubmission'
   */
  export type EnumStatusSubmissionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusSubmission'>
    


  /**
   * Reference to a field of type 'StatusSubmission[]'
   */
  export type ListEnumStatusSubmissionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusSubmission[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    
  /**
   * Deep Input Types
   */


  export type AbsensiWhereInput = {
    AND?: AbsensiWhereInput | AbsensiWhereInput[]
    OR?: AbsensiWhereInput[]
    NOT?: AbsensiWhereInput | AbsensiWhereInput[]
    id?: IntFilter<"Absensi"> | number
    userId?: IntFilter<"Absensi"> | number
    kelasId?: IntFilter<"Absensi"> | number
    jadwalId?: IntNullableFilter<"Absensi"> | number | null
    tanggal?: DateTimeFilter<"Absensi"> | Date | string
    status?: EnumStatusAbsensiFilter<"Absensi"> | $Enums.StatusAbsensi
    createdAt?: DateTimeFilter<"Absensi"> | Date | string
    aiComment?: StringNullableFilter<"Absensi"> | string | null
    aiTone?: StringNullableFilter<"Absensi"> | string | null
    aiConfidence?: FloatNullableFilter<"Absensi"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    kelas?: XOR<KelasScalarRelationFilter, KelasWhereInput>
    jadwal?: XOR<JadwalAbsensiNullableScalarRelationFilter, JadwalAbsensiWhereInput> | null
  }

  export type AbsensiOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    kelasId?: SortOrder
    jadwalId?: SortOrderInput | SortOrder
    tanggal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    aiComment?: SortOrderInput | SortOrder
    aiTone?: SortOrderInput | SortOrder
    aiConfidence?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    kelas?: KelasOrderByWithRelationInput
    jadwal?: JadwalAbsensiOrderByWithRelationInput
  }

  export type AbsensiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AbsensiWhereInput | AbsensiWhereInput[]
    OR?: AbsensiWhereInput[]
    NOT?: AbsensiWhereInput | AbsensiWhereInput[]
    userId?: IntFilter<"Absensi"> | number
    kelasId?: IntFilter<"Absensi"> | number
    jadwalId?: IntNullableFilter<"Absensi"> | number | null
    tanggal?: DateTimeFilter<"Absensi"> | Date | string
    status?: EnumStatusAbsensiFilter<"Absensi"> | $Enums.StatusAbsensi
    createdAt?: DateTimeFilter<"Absensi"> | Date | string
    aiComment?: StringNullableFilter<"Absensi"> | string | null
    aiTone?: StringNullableFilter<"Absensi"> | string | null
    aiConfidence?: FloatNullableFilter<"Absensi"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    kelas?: XOR<KelasScalarRelationFilter, KelasWhereInput>
    jadwal?: XOR<JadwalAbsensiNullableScalarRelationFilter, JadwalAbsensiWhereInput> | null
  }, "id">

  export type AbsensiOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    kelasId?: SortOrder
    jadwalId?: SortOrderInput | SortOrder
    tanggal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    aiComment?: SortOrderInput | SortOrder
    aiTone?: SortOrderInput | SortOrder
    aiConfidence?: SortOrderInput | SortOrder
    _count?: AbsensiCountOrderByAggregateInput
    _avg?: AbsensiAvgOrderByAggregateInput
    _max?: AbsensiMaxOrderByAggregateInput
    _min?: AbsensiMinOrderByAggregateInput
    _sum?: AbsensiSumOrderByAggregateInput
  }

  export type AbsensiScalarWhereWithAggregatesInput = {
    AND?: AbsensiScalarWhereWithAggregatesInput | AbsensiScalarWhereWithAggregatesInput[]
    OR?: AbsensiScalarWhereWithAggregatesInput[]
    NOT?: AbsensiScalarWhereWithAggregatesInput | AbsensiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Absensi"> | number
    userId?: IntWithAggregatesFilter<"Absensi"> | number
    kelasId?: IntWithAggregatesFilter<"Absensi"> | number
    jadwalId?: IntNullableWithAggregatesFilter<"Absensi"> | number | null
    tanggal?: DateTimeWithAggregatesFilter<"Absensi"> | Date | string
    status?: EnumStatusAbsensiWithAggregatesFilter<"Absensi"> | $Enums.StatusAbsensi
    createdAt?: DateTimeWithAggregatesFilter<"Absensi"> | Date | string
    aiComment?: StringNullableWithAggregatesFilter<"Absensi"> | string | null
    aiTone?: StringNullableWithAggregatesFilter<"Absensi"> | string | null
    aiConfidence?: FloatNullableWithAggregatesFilter<"Absensi"> | number | null
  }

  export type AbsensiSettingWhereInput = {
    AND?: AbsensiSettingWhereInput | AbsensiSettingWhereInput[]
    OR?: AbsensiSettingWhereInput[]
    NOT?: AbsensiSettingWhereInput | AbsensiSettingWhereInput[]
    id?: IntFilter<"AbsensiSetting"> | number
    kelasId?: IntFilter<"AbsensiSetting"> | number
    maxAbsen?: IntFilter<"AbsensiSetting"> | number
    createdAt?: DateTimeFilter<"AbsensiSetting"> | Date | string
    updatedAt?: DateTimeFilter<"AbsensiSetting"> | Date | string
    kelas?: XOR<KelasScalarRelationFilter, KelasWhereInput>
  }

  export type AbsensiSettingOrderByWithRelationInput = {
    id?: SortOrder
    kelasId?: SortOrder
    maxAbsen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    kelas?: KelasOrderByWithRelationInput
  }

  export type AbsensiSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    kelasId?: number
    AND?: AbsensiSettingWhereInput | AbsensiSettingWhereInput[]
    OR?: AbsensiSettingWhereInput[]
    NOT?: AbsensiSettingWhereInput | AbsensiSettingWhereInput[]
    maxAbsen?: IntFilter<"AbsensiSetting"> | number
    createdAt?: DateTimeFilter<"AbsensiSetting"> | Date | string
    updatedAt?: DateTimeFilter<"AbsensiSetting"> | Date | string
    kelas?: XOR<KelasScalarRelationFilter, KelasWhereInput>
  }, "id" | "kelasId">

  export type AbsensiSettingOrderByWithAggregationInput = {
    id?: SortOrder
    kelasId?: SortOrder
    maxAbsen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AbsensiSettingCountOrderByAggregateInput
    _avg?: AbsensiSettingAvgOrderByAggregateInput
    _max?: AbsensiSettingMaxOrderByAggregateInput
    _min?: AbsensiSettingMinOrderByAggregateInput
    _sum?: AbsensiSettingSumOrderByAggregateInput
  }

  export type AbsensiSettingScalarWhereWithAggregatesInput = {
    AND?: AbsensiSettingScalarWhereWithAggregatesInput | AbsensiSettingScalarWhereWithAggregatesInput[]
    OR?: AbsensiSettingScalarWhereWithAggregatesInput[]
    NOT?: AbsensiSettingScalarWhereWithAggregatesInput | AbsensiSettingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AbsensiSetting"> | number
    kelasId?: IntWithAggregatesFilter<"AbsensiSetting"> | number
    maxAbsen?: IntWithAggregatesFilter<"AbsensiSetting"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AbsensiSetting"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AbsensiSetting"> | Date | string
  }

  export type IzinWhereInput = {
    AND?: IzinWhereInput | IzinWhereInput[]
    OR?: IzinWhereInput[]
    NOT?: IzinWhereInput | IzinWhereInput[]
    id?: IntFilter<"Izin"> | number
    userId?: IntFilter<"Izin"> | number
    kelasId?: IntFilter<"Izin"> | number
    tanggal?: DateTimeFilter<"Izin"> | Date | string
    alasan?: StringFilter<"Izin"> | string
    status?: EnumStatusIzinFilter<"Izin"> | $Enums.StatusIzin
    createdAt?: DateTimeFilter<"Izin"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Izin"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    kelas?: XOR<KelasScalarRelationFilter, KelasWhereInput>
  }

  export type IzinOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    kelasId?: SortOrder
    tanggal?: SortOrder
    alasan?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    kelas?: KelasOrderByWithRelationInput
  }

  export type IzinWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IzinWhereInput | IzinWhereInput[]
    OR?: IzinWhereInput[]
    NOT?: IzinWhereInput | IzinWhereInput[]
    userId?: IntFilter<"Izin"> | number
    kelasId?: IntFilter<"Izin"> | number
    tanggal?: DateTimeFilter<"Izin"> | Date | string
    alasan?: StringFilter<"Izin"> | string
    status?: EnumStatusIzinFilter<"Izin"> | $Enums.StatusIzin
    createdAt?: DateTimeFilter<"Izin"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Izin"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    kelas?: XOR<KelasScalarRelationFilter, KelasWhereInput>
  }, "id">

  export type IzinOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    kelasId?: SortOrder
    tanggal?: SortOrder
    alasan?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: IzinCountOrderByAggregateInput
    _avg?: IzinAvgOrderByAggregateInput
    _max?: IzinMaxOrderByAggregateInput
    _min?: IzinMinOrderByAggregateInput
    _sum?: IzinSumOrderByAggregateInput
  }

  export type IzinScalarWhereWithAggregatesInput = {
    AND?: IzinScalarWhereWithAggregatesInput | IzinScalarWhereWithAggregatesInput[]
    OR?: IzinScalarWhereWithAggregatesInput[]
    NOT?: IzinScalarWhereWithAggregatesInput | IzinScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Izin"> | number
    userId?: IntWithAggregatesFilter<"Izin"> | number
    kelasId?: IntWithAggregatesFilter<"Izin"> | number
    tanggal?: DateTimeWithAggregatesFilter<"Izin"> | Date | string
    alasan?: StringWithAggregatesFilter<"Izin"> | string
    status?: EnumStatusIzinWithAggregatesFilter<"Izin"> | $Enums.StatusIzin
    createdAt?: DateTimeWithAggregatesFilter<"Izin"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Izin"> | Date | string | null
  }

  export type JadwalAbsensiWhereInput = {
    AND?: JadwalAbsensiWhereInput | JadwalAbsensiWhereInput[]
    OR?: JadwalAbsensiWhereInput[]
    NOT?: JadwalAbsensiWhereInput | JadwalAbsensiWhereInput[]
    id?: IntFilter<"JadwalAbsensi"> | number
    kelasId?: IntFilter<"JadwalAbsensi"> | number
    hari?: EnumHariFilter<"JadwalAbsensi"> | $Enums.Hari
    jamMulai?: StringFilter<"JadwalAbsensi"> | string
    jamSelesai?: StringFilter<"JadwalAbsensi"> | string
    tanggal?: DateTimeFilter<"JadwalAbsensi"> | Date | string
    createdAt?: DateTimeFilter<"JadwalAbsensi"> | Date | string
    kelas?: XOR<KelasScalarRelationFilter, KelasWhereInput>
    absensi?: AbsensiListRelationFilter
  }

  export type JadwalAbsensiOrderByWithRelationInput = {
    id?: SortOrder
    kelasId?: SortOrder
    hari?: SortOrder
    jamMulai?: SortOrder
    jamSelesai?: SortOrder
    tanggal?: SortOrder
    createdAt?: SortOrder
    kelas?: KelasOrderByWithRelationInput
    absensi?: AbsensiOrderByRelationAggregateInput
  }

  export type JadwalAbsensiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    kelasId_tanggal?: JadwalAbsensiKelasIdTanggalCompoundUniqueInput
    AND?: JadwalAbsensiWhereInput | JadwalAbsensiWhereInput[]
    OR?: JadwalAbsensiWhereInput[]
    NOT?: JadwalAbsensiWhereInput | JadwalAbsensiWhereInput[]
    kelasId?: IntFilter<"JadwalAbsensi"> | number
    hari?: EnumHariFilter<"JadwalAbsensi"> | $Enums.Hari
    jamMulai?: StringFilter<"JadwalAbsensi"> | string
    jamSelesai?: StringFilter<"JadwalAbsensi"> | string
    tanggal?: DateTimeFilter<"JadwalAbsensi"> | Date | string
    createdAt?: DateTimeFilter<"JadwalAbsensi"> | Date | string
    kelas?: XOR<KelasScalarRelationFilter, KelasWhereInput>
    absensi?: AbsensiListRelationFilter
  }, "id" | "kelasId_tanggal">

  export type JadwalAbsensiOrderByWithAggregationInput = {
    id?: SortOrder
    kelasId?: SortOrder
    hari?: SortOrder
    jamMulai?: SortOrder
    jamSelesai?: SortOrder
    tanggal?: SortOrder
    createdAt?: SortOrder
    _count?: JadwalAbsensiCountOrderByAggregateInput
    _avg?: JadwalAbsensiAvgOrderByAggregateInput
    _max?: JadwalAbsensiMaxOrderByAggregateInput
    _min?: JadwalAbsensiMinOrderByAggregateInput
    _sum?: JadwalAbsensiSumOrderByAggregateInput
  }

  export type JadwalAbsensiScalarWhereWithAggregatesInput = {
    AND?: JadwalAbsensiScalarWhereWithAggregatesInput | JadwalAbsensiScalarWhereWithAggregatesInput[]
    OR?: JadwalAbsensiScalarWhereWithAggregatesInput[]
    NOT?: JadwalAbsensiScalarWhereWithAggregatesInput | JadwalAbsensiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JadwalAbsensi"> | number
    kelasId?: IntWithAggregatesFilter<"JadwalAbsensi"> | number
    hari?: EnumHariWithAggregatesFilter<"JadwalAbsensi"> | $Enums.Hari
    jamMulai?: StringWithAggregatesFilter<"JadwalAbsensi"> | string
    jamSelesai?: StringWithAggregatesFilter<"JadwalAbsensi"> | string
    tanggal?: DateTimeWithAggregatesFilter<"JadwalAbsensi"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"JadwalAbsensi"> | Date | string
  }

  export type KelasWhereInput = {
    AND?: KelasWhereInput | KelasWhereInput[]
    OR?: KelasWhereInput[]
    NOT?: KelasWhereInput | KelasWhereInput[]
    id?: IntFilter<"Kelas"> | number
    namaKelas?: StringFilter<"Kelas"> | string
    deskripsi?: StringNullableFilter<"Kelas"> | string | null
    santri?: UserListRelationFilter
    pengajar?: UserListRelationFilter
    absensiSetting?: XOR<AbsensiSettingNullableScalarRelationFilter, AbsensiSettingWhereInput> | null
    absensi?: AbsensiListRelationFilter
    jadwal?: JadwalAbsensiListRelationFilter
    izin?: IzinListRelationFilter
    tugas?: TugasListRelationFilter
  }

  export type KelasOrderByWithRelationInput = {
    id?: SortOrder
    namaKelas?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    santri?: UserOrderByRelationAggregateInput
    pengajar?: UserOrderByRelationAggregateInput
    absensiSetting?: AbsensiSettingOrderByWithRelationInput
    absensi?: AbsensiOrderByRelationAggregateInput
    jadwal?: JadwalAbsensiOrderByRelationAggregateInput
    izin?: IzinOrderByRelationAggregateInput
    tugas?: TugasOrderByRelationAggregateInput
  }

  export type KelasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: KelasWhereInput | KelasWhereInput[]
    OR?: KelasWhereInput[]
    NOT?: KelasWhereInput | KelasWhereInput[]
    namaKelas?: StringFilter<"Kelas"> | string
    deskripsi?: StringNullableFilter<"Kelas"> | string | null
    santri?: UserListRelationFilter
    pengajar?: UserListRelationFilter
    absensiSetting?: XOR<AbsensiSettingNullableScalarRelationFilter, AbsensiSettingWhereInput> | null
    absensi?: AbsensiListRelationFilter
    jadwal?: JadwalAbsensiListRelationFilter
    izin?: IzinListRelationFilter
    tugas?: TugasListRelationFilter
  }, "id">

  export type KelasOrderByWithAggregationInput = {
    id?: SortOrder
    namaKelas?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    _count?: KelasCountOrderByAggregateInput
    _avg?: KelasAvgOrderByAggregateInput
    _max?: KelasMaxOrderByAggregateInput
    _min?: KelasMinOrderByAggregateInput
    _sum?: KelasSumOrderByAggregateInput
  }

  export type KelasScalarWhereWithAggregatesInput = {
    AND?: KelasScalarWhereWithAggregatesInput | KelasScalarWhereWithAggregatesInput[]
    OR?: KelasScalarWhereWithAggregatesInput[]
    NOT?: KelasScalarWhereWithAggregatesInput | KelasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Kelas"> | number
    namaKelas?: StringWithAggregatesFilter<"Kelas"> | string
    deskripsi?: StringNullableWithAggregatesFilter<"Kelas"> | string | null
  }

  export type LogAktivitasWhereInput = {
    AND?: LogAktivitasWhereInput | LogAktivitasWhereInput[]
    OR?: LogAktivitasWhereInput[]
    NOT?: LogAktivitasWhereInput | LogAktivitasWhereInput[]
    id?: IntFilter<"LogAktivitas"> | number
    userId?: IntFilter<"LogAktivitas"> | number
    aktivitas?: StringFilter<"LogAktivitas"> | string
    createdAt?: DateTimeFilter<"LogAktivitas"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LogAktivitasOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    aktivitas?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LogAktivitasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LogAktivitasWhereInput | LogAktivitasWhereInput[]
    OR?: LogAktivitasWhereInput[]
    NOT?: LogAktivitasWhereInput | LogAktivitasWhereInput[]
    userId?: IntFilter<"LogAktivitas"> | number
    aktivitas?: StringFilter<"LogAktivitas"> | string
    createdAt?: DateTimeFilter<"LogAktivitas"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type LogAktivitasOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    aktivitas?: SortOrder
    createdAt?: SortOrder
    _count?: LogAktivitasCountOrderByAggregateInput
    _avg?: LogAktivitasAvgOrderByAggregateInput
    _max?: LogAktivitasMaxOrderByAggregateInput
    _min?: LogAktivitasMinOrderByAggregateInput
    _sum?: LogAktivitasSumOrderByAggregateInput
  }

  export type LogAktivitasScalarWhereWithAggregatesInput = {
    AND?: LogAktivitasScalarWhereWithAggregatesInput | LogAktivitasScalarWhereWithAggregatesInput[]
    OR?: LogAktivitasScalarWhereWithAggregatesInput[]
    NOT?: LogAktivitasScalarWhereWithAggregatesInput | LogAktivitasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LogAktivitas"> | number
    userId?: IntWithAggregatesFilter<"LogAktivitas"> | number
    aktivitas?: StringWithAggregatesFilter<"LogAktivitas"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LogAktivitas"> | Date | string
  }

  export type MataPelajaranWhereInput = {
    AND?: MataPelajaranWhereInput | MataPelajaranWhereInput[]
    OR?: MataPelajaranWhereInput[]
    NOT?: MataPelajaranWhereInput | MataPelajaranWhereInput[]
    id?: IntFilter<"MataPelajaran"> | number
    nama?: StringFilter<"MataPelajaran"> | string
    kode?: StringFilter<"MataPelajaran"> | string
    createdAt?: DateTimeFilter<"MataPelajaran"> | Date | string
    tugas?: TugasListRelationFilter
  }

  export type MataPelajaranOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    kode?: SortOrder
    createdAt?: SortOrder
    tugas?: TugasOrderByRelationAggregateInput
  }

  export type MataPelajaranWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    kode?: string
    AND?: MataPelajaranWhereInput | MataPelajaranWhereInput[]
    OR?: MataPelajaranWhereInput[]
    NOT?: MataPelajaranWhereInput | MataPelajaranWhereInput[]
    nama?: StringFilter<"MataPelajaran"> | string
    createdAt?: DateTimeFilter<"MataPelajaran"> | Date | string
    tugas?: TugasListRelationFilter
  }, "id" | "kode">

  export type MataPelajaranOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    kode?: SortOrder
    createdAt?: SortOrder
    _count?: MataPelajaranCountOrderByAggregateInput
    _avg?: MataPelajaranAvgOrderByAggregateInput
    _max?: MataPelajaranMaxOrderByAggregateInput
    _min?: MataPelajaranMinOrderByAggregateInput
    _sum?: MataPelajaranSumOrderByAggregateInput
  }

  export type MataPelajaranScalarWhereWithAggregatesInput = {
    AND?: MataPelajaranScalarWhereWithAggregatesInput | MataPelajaranScalarWhereWithAggregatesInput[]
    OR?: MataPelajaranScalarWhereWithAggregatesInput[]
    NOT?: MataPelajaranScalarWhereWithAggregatesInput | MataPelajaranScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MataPelajaran"> | number
    nama?: StringWithAggregatesFilter<"MataPelajaran"> | string
    kode?: StringWithAggregatesFilter<"MataPelajaran"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MataPelajaran"> | Date | string
  }

  export type NilaiWhereInput = {
    AND?: NilaiWhereInput | NilaiWhereInput[]
    OR?: NilaiWhereInput[]
    NOT?: NilaiWhereInput | NilaiWhereInput[]
    id?: IntFilter<"Nilai"> | number
    submissionId?: IntFilter<"Nilai"> | number
    nilai?: IntFilter<"Nilai"> | number
    catatan?: StringNullableFilter<"Nilai"> | string | null
    createdAt?: DateTimeFilter<"Nilai"> | Date | string
    submission?: XOR<SubmissionScalarRelationFilter, SubmissionWhereInput>
  }

  export type NilaiOrderByWithRelationInput = {
    id?: SortOrder
    submissionId?: SortOrder
    nilai?: SortOrder
    catatan?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    submission?: SubmissionOrderByWithRelationInput
  }

  export type NilaiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    submissionId?: number
    AND?: NilaiWhereInput | NilaiWhereInput[]
    OR?: NilaiWhereInput[]
    NOT?: NilaiWhereInput | NilaiWhereInput[]
    nilai?: IntFilter<"Nilai"> | number
    catatan?: StringNullableFilter<"Nilai"> | string | null
    createdAt?: DateTimeFilter<"Nilai"> | Date | string
    submission?: XOR<SubmissionScalarRelationFilter, SubmissionWhereInput>
  }, "id" | "submissionId">

  export type NilaiOrderByWithAggregationInput = {
    id?: SortOrder
    submissionId?: SortOrder
    nilai?: SortOrder
    catatan?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: NilaiCountOrderByAggregateInput
    _avg?: NilaiAvgOrderByAggregateInput
    _max?: NilaiMaxOrderByAggregateInput
    _min?: NilaiMinOrderByAggregateInput
    _sum?: NilaiSumOrderByAggregateInput
  }

  export type NilaiScalarWhereWithAggregatesInput = {
    AND?: NilaiScalarWhereWithAggregatesInput | NilaiScalarWhereWithAggregatesInput[]
    OR?: NilaiScalarWhereWithAggregatesInput[]
    NOT?: NilaiScalarWhereWithAggregatesInput | NilaiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Nilai"> | number
    submissionId?: IntWithAggregatesFilter<"Nilai"> | number
    nilai?: IntWithAggregatesFilter<"Nilai"> | number
    catatan?: StringNullableWithAggregatesFilter<"Nilai"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Nilai"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    userId?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    level?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    level?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    level?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    level?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    userId?: IntWithAggregatesFilter<"Notification"> | number
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    level?: StringWithAggregatesFilter<"Notification"> | string
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: IntFilter<"Profile"> | number
    userId?: IntFilter<"Profile"> | number
    namaLengkap?: StringFilter<"Profile"> | string
    noHp?: StringNullableFilter<"Profile"> | string | null
    alamat?: StringNullableFilter<"Profile"> | string | null
    fotoUrl?: StringNullableFilter<"Profile"> | string | null
    tanggalLahir?: DateTimeNullableFilter<"Profile"> | Date | string | null
    jenisKelamin?: StringNullableFilter<"Profile"> | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    namaLengkap?: SortOrder
    noHp?: SortOrderInput | SortOrder
    alamat?: SortOrderInput | SortOrder
    fotoUrl?: SortOrderInput | SortOrder
    tanggalLahir?: SortOrderInput | SortOrder
    jenisKelamin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    namaLengkap?: StringFilter<"Profile"> | string
    noHp?: StringNullableFilter<"Profile"> | string | null
    alamat?: StringNullableFilter<"Profile"> | string | null
    fotoUrl?: StringNullableFilter<"Profile"> | string | null
    tanggalLahir?: DateTimeNullableFilter<"Profile"> | Date | string | null
    jenisKelamin?: StringNullableFilter<"Profile"> | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    namaLengkap?: SortOrder
    noHp?: SortOrderInput | SortOrder
    alamat?: SortOrderInput | SortOrder
    fotoUrl?: SortOrderInput | SortOrder
    tanggalLahir?: SortOrderInput | SortOrder
    jenisKelamin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Profile"> | number
    userId?: IntWithAggregatesFilter<"Profile"> | number
    namaLengkap?: StringWithAggregatesFilter<"Profile"> | string
    noHp?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    alamat?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    fotoUrl?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    tanggalLahir?: DateTimeNullableWithAggregatesFilter<"Profile"> | Date | string | null
    jenisKelamin?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
  }

  export type SubmissionWhereInput = {
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    id?: IntFilter<"Submission"> | number
    userId?: IntFilter<"Submission"> | number
    tugasId?: IntFilter<"Submission"> | number
    fileUrl?: StringNullableFilter<"Submission"> | string | null
    linkUrl?: StringNullableFilter<"Submission"> | string | null
    status?: EnumStatusSubmissionFilter<"Submission"> | $Enums.StatusSubmission
    submittedAt?: DateTimeFilter<"Submission"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Submission"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tugas?: XOR<TugasScalarRelationFilter, TugasWhereInput>
    nilai?: XOR<NilaiNullableScalarRelationFilter, NilaiWhereInput> | null
  }

  export type SubmissionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tugasId?: SortOrder
    fileUrl?: SortOrderInput | SortOrder
    linkUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    tugas?: TugasOrderByWithRelationInput
    nilai?: NilaiOrderByWithRelationInput
  }

  export type SubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_tugasId?: SubmissionUserIdTugasIdCompoundUniqueInput
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    userId?: IntFilter<"Submission"> | number
    tugasId?: IntFilter<"Submission"> | number
    fileUrl?: StringNullableFilter<"Submission"> | string | null
    linkUrl?: StringNullableFilter<"Submission"> | string | null
    status?: EnumStatusSubmissionFilter<"Submission"> | $Enums.StatusSubmission
    submittedAt?: DateTimeFilter<"Submission"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Submission"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tugas?: XOR<TugasScalarRelationFilter, TugasWhereInput>
    nilai?: XOR<NilaiNullableScalarRelationFilter, NilaiWhereInput> | null
  }, "id" | "userId_tugasId">

  export type SubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tugasId?: SortOrder
    fileUrl?: SortOrderInput | SortOrder
    linkUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: SubmissionCountOrderByAggregateInput
    _avg?: SubmissionAvgOrderByAggregateInput
    _max?: SubmissionMaxOrderByAggregateInput
    _min?: SubmissionMinOrderByAggregateInput
    _sum?: SubmissionSumOrderByAggregateInput
  }

  export type SubmissionScalarWhereWithAggregatesInput = {
    AND?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    OR?: SubmissionScalarWhereWithAggregatesInput[]
    NOT?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Submission"> | number
    userId?: IntWithAggregatesFilter<"Submission"> | number
    tugasId?: IntWithAggregatesFilter<"Submission"> | number
    fileUrl?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    linkUrl?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    status?: EnumStatusSubmissionWithAggregatesFilter<"Submission"> | $Enums.StatusSubmission
    submittedAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Submission"> | Date | string | null
  }

  export type TugasWhereInput = {
    AND?: TugasWhereInput | TugasWhereInput[]
    OR?: TugasWhereInput[]
    NOT?: TugasWhereInput | TugasWhereInput[]
    id?: IntFilter<"Tugas"> | number
    kelasId?: IntFilter<"Tugas"> | number
    mataPelajaranId?: IntFilter<"Tugas"> | number
    title?: StringFilter<"Tugas"> | string
    description?: StringNullableFilter<"Tugas"> | string | null
    deadline?: DateTimeFilter<"Tugas"> | Date | string
    createdBy?: IntFilter<"Tugas"> | number
    createdAt?: DateTimeFilter<"Tugas"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Tugas"> | Date | string | null
    kelas?: XOR<KelasScalarRelationFilter, KelasWhereInput>
    mataPelajaran?: XOR<MataPelajaranScalarRelationFilter, MataPelajaranWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    submission?: SubmissionListRelationFilter
  }

  export type TugasOrderByWithRelationInput = {
    id?: SortOrder
    kelasId?: SortOrder
    mataPelajaranId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    deadline?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    kelas?: KelasOrderByWithRelationInput
    mataPelajaran?: MataPelajaranOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    submission?: SubmissionOrderByRelationAggregateInput
  }

  export type TugasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TugasWhereInput | TugasWhereInput[]
    OR?: TugasWhereInput[]
    NOT?: TugasWhereInput | TugasWhereInput[]
    kelasId?: IntFilter<"Tugas"> | number
    mataPelajaranId?: IntFilter<"Tugas"> | number
    title?: StringFilter<"Tugas"> | string
    description?: StringNullableFilter<"Tugas"> | string | null
    deadline?: DateTimeFilter<"Tugas"> | Date | string
    createdBy?: IntFilter<"Tugas"> | number
    createdAt?: DateTimeFilter<"Tugas"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Tugas"> | Date | string | null
    kelas?: XOR<KelasScalarRelationFilter, KelasWhereInput>
    mataPelajaran?: XOR<MataPelajaranScalarRelationFilter, MataPelajaranWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    submission?: SubmissionListRelationFilter
  }, "id">

  export type TugasOrderByWithAggregationInput = {
    id?: SortOrder
    kelasId?: SortOrder
    mataPelajaranId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    deadline?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: TugasCountOrderByAggregateInput
    _avg?: TugasAvgOrderByAggregateInput
    _max?: TugasMaxOrderByAggregateInput
    _min?: TugasMinOrderByAggregateInput
    _sum?: TugasSumOrderByAggregateInput
  }

  export type TugasScalarWhereWithAggregatesInput = {
    AND?: TugasScalarWhereWithAggregatesInput | TugasScalarWhereWithAggregatesInput[]
    OR?: TugasScalarWhereWithAggregatesInput[]
    NOT?: TugasScalarWhereWithAggregatesInput | TugasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tugas"> | number
    kelasId?: IntWithAggregatesFilter<"Tugas"> | number
    mataPelajaranId?: IntWithAggregatesFilter<"Tugas"> | number
    title?: StringWithAggregatesFilter<"Tugas"> | string
    description?: StringNullableWithAggregatesFilter<"Tugas"> | string | null
    deadline?: DateTimeWithAggregatesFilter<"Tugas"> | Date | string
    createdBy?: IntWithAggregatesFilter<"Tugas"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Tugas"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Tugas"> | Date | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    activatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    isActive?: BoolFilter<"User"> | boolean
    otp?: StringNullableFilter<"User"> | string | null
    otpExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    kelasId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    kelas?: XOR<KelasNullableScalarRelationFilter, KelasWhereInput> | null
    kelasAjar?: KelasListRelationFilter
    absensi?: AbsensiListRelationFilter
    izin?: IzinListRelationFilter
    tugasDibuat?: TugasListRelationFilter
    submission?: SubmissionListRelationFilter
    log?: LogAktivitasListRelationFilter
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    notifications?: NotificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    activatedAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpiresAt?: SortOrderInput | SortOrder
    role?: SortOrder
    kelasId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    kelas?: KelasOrderByWithRelationInput
    kelasAjar?: KelasOrderByRelationAggregateInput
    absensi?: AbsensiOrderByRelationAggregateInput
    izin?: IzinOrderByRelationAggregateInput
    tugasDibuat?: TugasOrderByRelationAggregateInput
    submission?: SubmissionOrderByRelationAggregateInput
    log?: LogAktivitasOrderByRelationAggregateInput
    profile?: ProfileOrderByWithRelationInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    activatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    isActive?: BoolFilter<"User"> | boolean
    otp?: StringNullableFilter<"User"> | string | null
    otpExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    kelasId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    kelas?: XOR<KelasNullableScalarRelationFilter, KelasWhereInput> | null
    kelasAjar?: KelasListRelationFilter
    absensi?: AbsensiListRelationFilter
    izin?: IzinListRelationFilter
    tugasDibuat?: TugasListRelationFilter
    submission?: SubmissionListRelationFilter
    log?: LogAktivitasListRelationFilter
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    notifications?: NotificationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    activatedAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpiresAt?: SortOrderInput | SortOrder
    role?: SortOrder
    kelasId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    activatedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    otp?: StringNullableWithAggregatesFilter<"User"> | string | null
    otpExpiresAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    kelasId?: IntNullableWithAggregatesFilter<"User"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type AbsensiCreateInput = {
    tanggal: Date | string
    status: $Enums.StatusAbsensi
    createdAt?: Date | string
    aiComment?: string | null
    aiTone?: string | null
    aiConfidence?: number | null
    user: UserCreateNestedOneWithoutAbsensiInput
    kelas: KelasCreateNestedOneWithoutAbsensiInput
    jadwal?: JadwalAbsensiCreateNestedOneWithoutAbsensiInput
  }

  export type AbsensiUncheckedCreateInput = {
    id?: number
    userId: number
    kelasId: number
    jadwalId?: number | null
    tanggal: Date | string
    status: $Enums.StatusAbsensi
    createdAt?: Date | string
    aiComment?: string | null
    aiTone?: string | null
    aiConfidence?: number | null
  }

  export type AbsensiUpdateInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusAbsensiFieldUpdateOperationsInput | $Enums.StatusAbsensi
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiComment?: NullableStringFieldUpdateOperationsInput | string | null
    aiTone?: NullableStringFieldUpdateOperationsInput | string | null
    aiConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutAbsensiNestedInput
    kelas?: KelasUpdateOneRequiredWithoutAbsensiNestedInput
    jadwal?: JadwalAbsensiUpdateOneWithoutAbsensiNestedInput
  }

  export type AbsensiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    kelasId?: IntFieldUpdateOperationsInput | number
    jadwalId?: NullableIntFieldUpdateOperationsInput | number | null
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusAbsensiFieldUpdateOperationsInput | $Enums.StatusAbsensi
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiComment?: NullableStringFieldUpdateOperationsInput | string | null
    aiTone?: NullableStringFieldUpdateOperationsInput | string | null
    aiConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AbsensiCreateManyInput = {
    id?: number
    userId: number
    kelasId: number
    jadwalId?: number | null
    tanggal: Date | string
    status: $Enums.StatusAbsensi
    createdAt?: Date | string
    aiComment?: string | null
    aiTone?: string | null
    aiConfidence?: number | null
  }

  export type AbsensiUpdateManyMutationInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusAbsensiFieldUpdateOperationsInput | $Enums.StatusAbsensi
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiComment?: NullableStringFieldUpdateOperationsInput | string | null
    aiTone?: NullableStringFieldUpdateOperationsInput | string | null
    aiConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AbsensiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    kelasId?: IntFieldUpdateOperationsInput | number
    jadwalId?: NullableIntFieldUpdateOperationsInput | number | null
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusAbsensiFieldUpdateOperationsInput | $Enums.StatusAbsensi
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiComment?: NullableStringFieldUpdateOperationsInput | string | null
    aiTone?: NullableStringFieldUpdateOperationsInput | string | null
    aiConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AbsensiSettingCreateInput = {
    maxAbsen?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    kelas: KelasCreateNestedOneWithoutAbsensiSettingInput
  }

  export type AbsensiSettingUncheckedCreateInput = {
    id?: number
    kelasId: number
    maxAbsen?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AbsensiSettingUpdateInput = {
    maxAbsen?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kelas?: KelasUpdateOneRequiredWithoutAbsensiSettingNestedInput
  }

  export type AbsensiSettingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    kelasId?: IntFieldUpdateOperationsInput | number
    maxAbsen?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbsensiSettingCreateManyInput = {
    id?: number
    kelasId: number
    maxAbsen?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AbsensiSettingUpdateManyMutationInput = {
    maxAbsen?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbsensiSettingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    kelasId?: IntFieldUpdateOperationsInput | number
    maxAbsen?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IzinCreateInput = {
    tanggal: Date | string
    alasan: string
    status?: $Enums.StatusIzin
    createdAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutIzinInput
    kelas: KelasCreateNestedOneWithoutIzinInput
  }

  export type IzinUncheckedCreateInput = {
    id?: number
    userId: number
    kelasId: number
    tanggal: Date | string
    alasan: string
    status?: $Enums.StatusIzin
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type IzinUpdateInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    alasan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusIzinFieldUpdateOperationsInput | $Enums.StatusIzin
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutIzinNestedInput
    kelas?: KelasUpdateOneRequiredWithoutIzinNestedInput
  }

  export type IzinUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    kelasId?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    alasan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusIzinFieldUpdateOperationsInput | $Enums.StatusIzin
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IzinCreateManyInput = {
    id?: number
    userId: number
    kelasId: number
    tanggal: Date | string
    alasan: string
    status?: $Enums.StatusIzin
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type IzinUpdateManyMutationInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    alasan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusIzinFieldUpdateOperationsInput | $Enums.StatusIzin
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IzinUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    kelasId?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    alasan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusIzinFieldUpdateOperationsInput | $Enums.StatusIzin
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type JadwalAbsensiCreateInput = {
    hari: $Enums.Hari
    jamMulai: string
    jamSelesai: string
    tanggal: Date | string
    createdAt?: Date | string
    kelas: KelasCreateNestedOneWithoutJadwalInput
    absensi?: AbsensiCreateNestedManyWithoutJadwalInput
  }

  export type JadwalAbsensiUncheckedCreateInput = {
    id?: number
    kelasId: number
    hari: $Enums.Hari
    jamMulai: string
    jamSelesai: string
    tanggal: Date | string
    createdAt?: Date | string
    absensi?: AbsensiUncheckedCreateNestedManyWithoutJadwalInput
  }

  export type JadwalAbsensiUpdateInput = {
    hari?: EnumHariFieldUpdateOperationsInput | $Enums.Hari
    jamMulai?: StringFieldUpdateOperationsInput | string
    jamSelesai?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kelas?: KelasUpdateOneRequiredWithoutJadwalNestedInput
    absensi?: AbsensiUpdateManyWithoutJadwalNestedInput
  }

  export type JadwalAbsensiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    kelasId?: IntFieldUpdateOperationsInput | number
    hari?: EnumHariFieldUpdateOperationsInput | $Enums.Hari
    jamMulai?: StringFieldUpdateOperationsInput | string
    jamSelesai?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    absensi?: AbsensiUncheckedUpdateManyWithoutJadwalNestedInput
  }

  export type JadwalAbsensiCreateManyInput = {
    id?: number
    kelasId: number
    hari: $Enums.Hari
    jamMulai: string
    jamSelesai: string
    tanggal: Date | string
    createdAt?: Date | string
  }

  export type JadwalAbsensiUpdateManyMutationInput = {
    hari?: EnumHariFieldUpdateOperationsInput | $Enums.Hari
    jamMulai?: StringFieldUpdateOperationsInput | string
    jamSelesai?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JadwalAbsensiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    kelasId?: IntFieldUpdateOperationsInput | number
    hari?: EnumHariFieldUpdateOperationsInput | $Enums.Hari
    jamMulai?: StringFieldUpdateOperationsInput | string
    jamSelesai?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KelasCreateInput = {
    namaKelas: string
    deskripsi?: string | null
    santri?: UserCreateNestedManyWithoutKelasInput
    pengajar?: UserCreateNestedManyWithoutKelasAjarInput
    absensiSetting?: AbsensiSettingCreateNestedOneWithoutKelasInput
    absensi?: AbsensiCreateNestedManyWithoutKelasInput
    jadwal?: JadwalAbsensiCreateNestedManyWithoutKelasInput
    izin?: IzinCreateNestedManyWithoutKelasInput
    tugas?: TugasCreateNestedManyWithoutKelasInput
  }

  export type KelasUncheckedCreateInput = {
    id?: number
    namaKelas: string
    deskripsi?: string | null
    santri?: UserUncheckedCreateNestedManyWithoutKelasInput
    pengajar?: UserUncheckedCreateNestedManyWithoutKelasAjarInput
    absensiSetting?: AbsensiSettingUncheckedCreateNestedOneWithoutKelasInput
    absensi?: AbsensiUncheckedCreateNestedManyWithoutKelasInput
    jadwal?: JadwalAbsensiUncheckedCreateNestedManyWithoutKelasInput
    izin?: IzinUncheckedCreateNestedManyWithoutKelasInput
    tugas?: TugasUncheckedCreateNestedManyWithoutKelasInput
  }

  export type KelasUpdateInput = {
    namaKelas?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    santri?: UserUpdateManyWithoutKelasNestedInput
    pengajar?: UserUpdateManyWithoutKelasAjarNestedInput
    absensiSetting?: AbsensiSettingUpdateOneWithoutKelasNestedInput
    absensi?: AbsensiUpdateManyWithoutKelasNestedInput
    jadwal?: JadwalAbsensiUpdateManyWithoutKelasNestedInput
    izin?: IzinUpdateManyWithoutKelasNestedInput
    tugas?: TugasUpdateManyWithoutKelasNestedInput
  }

  export type KelasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaKelas?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    santri?: UserUncheckedUpdateManyWithoutKelasNestedInput
    pengajar?: UserUncheckedUpdateManyWithoutKelasAjarNestedInput
    absensiSetting?: AbsensiSettingUncheckedUpdateOneWithoutKelasNestedInput
    absensi?: AbsensiUncheckedUpdateManyWithoutKelasNestedInput
    jadwal?: JadwalAbsensiUncheckedUpdateManyWithoutKelasNestedInput
    izin?: IzinUncheckedUpdateManyWithoutKelasNestedInput
    tugas?: TugasUncheckedUpdateManyWithoutKelasNestedInput
  }

  export type KelasCreateManyInput = {
    id?: number
    namaKelas: string
    deskripsi?: string | null
  }

  export type KelasUpdateManyMutationInput = {
    namaKelas?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KelasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaKelas?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogAktivitasCreateInput = {
    aktivitas: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLogInput
  }

  export type LogAktivitasUncheckedCreateInput = {
    id?: number
    userId: number
    aktivitas: string
    createdAt?: Date | string
  }

  export type LogAktivitasUpdateInput = {
    aktivitas?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLogNestedInput
  }

  export type LogAktivitasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    aktivitas?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogAktivitasCreateManyInput = {
    id?: number
    userId: number
    aktivitas: string
    createdAt?: Date | string
  }

  export type LogAktivitasUpdateManyMutationInput = {
    aktivitas?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogAktivitasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    aktivitas?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MataPelajaranCreateInput = {
    nama: string
    kode: string
    createdAt?: Date | string
    tugas?: TugasCreateNestedManyWithoutMataPelajaranInput
  }

  export type MataPelajaranUncheckedCreateInput = {
    id?: number
    nama: string
    kode: string
    createdAt?: Date | string
    tugas?: TugasUncheckedCreateNestedManyWithoutMataPelajaranInput
  }

  export type MataPelajaranUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tugas?: TugasUpdateManyWithoutMataPelajaranNestedInput
  }

  export type MataPelajaranUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tugas?: TugasUncheckedUpdateManyWithoutMataPelajaranNestedInput
  }

  export type MataPelajaranCreateManyInput = {
    id?: number
    nama: string
    kode: string
    createdAt?: Date | string
  }

  export type MataPelajaranUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MataPelajaranUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NilaiCreateInput = {
    nilai: number
    catatan?: string | null
    createdAt?: Date | string
    submission: SubmissionCreateNestedOneWithoutNilaiInput
  }

  export type NilaiUncheckedCreateInput = {
    id?: number
    submissionId: number
    nilai: number
    catatan?: string | null
    createdAt?: Date | string
  }

  export type NilaiUpdateInput = {
    nilai?: IntFieldUpdateOperationsInput | number
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUpdateOneRequiredWithoutNilaiNestedInput
  }

  export type NilaiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    submissionId?: IntFieldUpdateOperationsInput | number
    nilai?: IntFieldUpdateOperationsInput | number
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NilaiCreateManyInput = {
    id?: number
    submissionId: number
    nilai: number
    catatan?: string | null
    createdAt?: Date | string
  }

  export type NilaiUpdateManyMutationInput = {
    nilai?: IntFieldUpdateOperationsInput | number
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NilaiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    submissionId?: IntFieldUpdateOperationsInput | number
    nilai?: IntFieldUpdateOperationsInput | number
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    title: string
    message: string
    level: string
    isRead?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    userId: number
    title: string
    message: string
    level: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: number
    userId: number
    title: string
    message: string
    level: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateInput = {
    namaLengkap: string
    noHp?: string | null
    alamat?: string | null
    fotoUrl?: string | null
    tanggalLahir?: Date | string | null
    jenisKelamin?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: number
    userId: number
    namaLengkap: string
    noHp?: string | null
    alamat?: string | null
    fotoUrl?: string | null
    tanggalLahir?: Date | string | null
    jenisKelamin?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateInput = {
    namaLengkap?: StringFieldUpdateOperationsInput | string
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jenisKelamin?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    namaLengkap?: StringFieldUpdateOperationsInput | string
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jenisKelamin?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateManyInput = {
    id?: number
    userId: number
    namaLengkap: string
    noHp?: string | null
    alamat?: string | null
    fotoUrl?: string | null
    tanggalLahir?: Date | string | null
    jenisKelamin?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateManyMutationInput = {
    namaLengkap?: StringFieldUpdateOperationsInput | string
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jenisKelamin?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    namaLengkap?: StringFieldUpdateOperationsInput | string
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jenisKelamin?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateInput = {
    fileUrl?: string | null
    linkUrl?: string | null
    status?: $Enums.StatusSubmission
    submittedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutSubmissionInput
    tugas: TugasCreateNestedOneWithoutSubmissionInput
    nilai?: NilaiCreateNestedOneWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateInput = {
    id?: number
    userId: number
    tugasId: number
    fileUrl?: string | null
    linkUrl?: string | null
    status?: $Enums.StatusSubmission
    submittedAt?: Date | string
    deletedAt?: Date | string | null
    nilai?: NilaiUncheckedCreateNestedOneWithoutSubmissionInput
  }

  export type SubmissionUpdateInput = {
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusSubmissionFieldUpdateOperationsInput | $Enums.StatusSubmission
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutSubmissionNestedInput
    tugas?: TugasUpdateOneRequiredWithoutSubmissionNestedInput
    nilai?: NilaiUpdateOneWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    tugasId?: IntFieldUpdateOperationsInput | number
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusSubmissionFieldUpdateOperationsInput | $Enums.StatusSubmission
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nilai?: NilaiUncheckedUpdateOneWithoutSubmissionNestedInput
  }

  export type SubmissionCreateManyInput = {
    id?: number
    userId: number
    tugasId: number
    fileUrl?: string | null
    linkUrl?: string | null
    status?: $Enums.StatusSubmission
    submittedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SubmissionUpdateManyMutationInput = {
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusSubmissionFieldUpdateOperationsInput | $Enums.StatusSubmission
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubmissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    tugasId?: IntFieldUpdateOperationsInput | number
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusSubmissionFieldUpdateOperationsInput | $Enums.StatusSubmission
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TugasCreateInput = {
    title: string
    description?: string | null
    deadline: Date | string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    kelas: KelasCreateNestedOneWithoutTugasInput
    mataPelajaran: MataPelajaranCreateNestedOneWithoutTugasInput
    creator: UserCreateNestedOneWithoutTugasDibuatInput
    submission?: SubmissionCreateNestedManyWithoutTugasInput
  }

  export type TugasUncheckedCreateInput = {
    id?: number
    kelasId: number
    mataPelajaranId: number
    title: string
    description?: string | null
    deadline: Date | string
    createdBy: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    submission?: SubmissionUncheckedCreateNestedManyWithoutTugasInput
  }

  export type TugasUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kelas?: KelasUpdateOneRequiredWithoutTugasNestedInput
    mataPelajaran?: MataPelajaranUpdateOneRequiredWithoutTugasNestedInput
    creator?: UserUpdateOneRequiredWithoutTugasDibuatNestedInput
    submission?: SubmissionUpdateManyWithoutTugasNestedInput
  }

  export type TugasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    kelasId?: IntFieldUpdateOperationsInput | number
    mataPelajaranId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submission?: SubmissionUncheckedUpdateManyWithoutTugasNestedInput
  }

  export type TugasCreateManyInput = {
    id?: number
    kelasId: number
    mataPelajaranId: number
    title: string
    description?: string | null
    deadline: Date | string
    createdBy: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TugasUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TugasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    kelasId?: IntFieldUpdateOperationsInput | number
    mataPelajaranId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateInput = {
    name?: string | null
    email: string
    password?: string | null
    activatedAt?: Date | string | null
    isActive?: boolean
    otp?: string | null
    otpExpiresAt?: Date | string | null
    role?: $Enums.Role
    createdAt?: Date | string
    deletedAt?: Date | string | null
    kelas?: KelasCreateNestedOneWithoutSantriInput
    kelasAjar?: KelasCreateNestedManyWithoutPengajarInput
    absensi?: AbsensiCreateNestedManyWithoutUserInput
    izin?: IzinCreateNestedManyWithoutUserInput
    tugasDibuat?: TugasCreateNestedManyWithoutCreatorInput
    submission?: SubmissionCreateNestedManyWithoutUserInput
    log?: LogAktivitasCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name?: string | null
    email: string
    password?: string | null
    activatedAt?: Date | string | null
    isActive?: boolean
    otp?: string | null
    otpExpiresAt?: Date | string | null
    role?: $Enums.Role
    kelasId?: number | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    kelasAjar?: KelasUncheckedCreateNestedManyWithoutPengajarInput
    absensi?: AbsensiUncheckedCreateNestedManyWithoutUserInput
    izin?: IzinUncheckedCreateNestedManyWithoutUserInput
    tugasDibuat?: TugasUncheckedCreateNestedManyWithoutCreatorInput
    submission?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    log?: LogAktivitasUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kelas?: KelasUpdateOneWithoutSantriNestedInput
    kelasAjar?: KelasUpdateManyWithoutPengajarNestedInput
    absensi?: AbsensiUpdateManyWithoutUserNestedInput
    izin?: IzinUpdateManyWithoutUserNestedInput
    tugasDibuat?: TugasUpdateManyWithoutCreatorNestedInput
    submission?: SubmissionUpdateManyWithoutUserNestedInput
    log?: LogAktivitasUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    kelasId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kelasAjar?: KelasUncheckedUpdateManyWithoutPengajarNestedInput
    absensi?: AbsensiUncheckedUpdateManyWithoutUserNestedInput
    izin?: IzinUncheckedUpdateManyWithoutUserNestedInput
    tugasDibuat?: TugasUncheckedUpdateManyWithoutCreatorNestedInput
    submission?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    log?: LogAktivitasUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name?: string | null
    email: string
    password?: string | null
    activatedAt?: Date | string | null
    isActive?: boolean
    otp?: string | null
    otpExpiresAt?: Date | string | null
    role?: $Enums.Role
    kelasId?: number | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    kelasId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumStatusAbsensiFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAbsensi | EnumStatusAbsensiFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAbsensi[] | ListEnumStatusAbsensiFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAbsensi[] | ListEnumStatusAbsensiFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAbsensiFilter<$PrismaModel> | $Enums.StatusAbsensi
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type KelasScalarRelationFilter = {
    is?: KelasWhereInput
    isNot?: KelasWhereInput
  }

  export type JadwalAbsensiNullableScalarRelationFilter = {
    is?: JadwalAbsensiWhereInput | null
    isNot?: JadwalAbsensiWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AbsensiCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    kelasId?: SortOrder
    jadwalId?: SortOrder
    tanggal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    aiComment?: SortOrder
    aiTone?: SortOrder
    aiConfidence?: SortOrder
  }

  export type AbsensiAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    kelasId?: SortOrder
    jadwalId?: SortOrder
    aiConfidence?: SortOrder
  }

  export type AbsensiMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    kelasId?: SortOrder
    jadwalId?: SortOrder
    tanggal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    aiComment?: SortOrder
    aiTone?: SortOrder
    aiConfidence?: SortOrder
  }

  export type AbsensiMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    kelasId?: SortOrder
    jadwalId?: SortOrder
    tanggal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    aiComment?: SortOrder
    aiTone?: SortOrder
    aiConfidence?: SortOrder
  }

  export type AbsensiSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    kelasId?: SortOrder
    jadwalId?: SortOrder
    aiConfidence?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumStatusAbsensiWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAbsensi | EnumStatusAbsensiFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAbsensi[] | ListEnumStatusAbsensiFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAbsensi[] | ListEnumStatusAbsensiFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAbsensiWithAggregatesFilter<$PrismaModel> | $Enums.StatusAbsensi
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusAbsensiFilter<$PrismaModel>
    _max?: NestedEnumStatusAbsensiFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type AbsensiSettingCountOrderByAggregateInput = {
    id?: SortOrder
    kelasId?: SortOrder
    maxAbsen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AbsensiSettingAvgOrderByAggregateInput = {
    id?: SortOrder
    kelasId?: SortOrder
    maxAbsen?: SortOrder
  }

  export type AbsensiSettingMaxOrderByAggregateInput = {
    id?: SortOrder
    kelasId?: SortOrder
    maxAbsen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AbsensiSettingMinOrderByAggregateInput = {
    id?: SortOrder
    kelasId?: SortOrder
    maxAbsen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AbsensiSettingSumOrderByAggregateInput = {
    id?: SortOrder
    kelasId?: SortOrder
    maxAbsen?: SortOrder
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumStatusIzinFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusIzin | EnumStatusIzinFieldRefInput<$PrismaModel>
    in?: $Enums.StatusIzin[] | ListEnumStatusIzinFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusIzin[] | ListEnumStatusIzinFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusIzinFilter<$PrismaModel> | $Enums.StatusIzin
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IzinCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    kelasId?: SortOrder
    tanggal?: SortOrder
    alasan?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type IzinAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    kelasId?: SortOrder
  }

  export type IzinMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    kelasId?: SortOrder
    tanggal?: SortOrder
    alasan?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type IzinMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    kelasId?: SortOrder
    tanggal?: SortOrder
    alasan?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type IzinSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    kelasId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumStatusIzinWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusIzin | EnumStatusIzinFieldRefInput<$PrismaModel>
    in?: $Enums.StatusIzin[] | ListEnumStatusIzinFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusIzin[] | ListEnumStatusIzinFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusIzinWithAggregatesFilter<$PrismaModel> | $Enums.StatusIzin
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusIzinFilter<$PrismaModel>
    _max?: NestedEnumStatusIzinFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumHariFilter<$PrismaModel = never> = {
    equals?: $Enums.Hari | EnumHariFieldRefInput<$PrismaModel>
    in?: $Enums.Hari[] | ListEnumHariFieldRefInput<$PrismaModel>
    notIn?: $Enums.Hari[] | ListEnumHariFieldRefInput<$PrismaModel>
    not?: NestedEnumHariFilter<$PrismaModel> | $Enums.Hari
  }

  export type AbsensiListRelationFilter = {
    every?: AbsensiWhereInput
    some?: AbsensiWhereInput
    none?: AbsensiWhereInput
  }

  export type AbsensiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JadwalAbsensiKelasIdTanggalCompoundUniqueInput = {
    kelasId: number
    tanggal: Date | string
  }

  export type JadwalAbsensiCountOrderByAggregateInput = {
    id?: SortOrder
    kelasId?: SortOrder
    hari?: SortOrder
    jamMulai?: SortOrder
    jamSelesai?: SortOrder
    tanggal?: SortOrder
    createdAt?: SortOrder
  }

  export type JadwalAbsensiAvgOrderByAggregateInput = {
    id?: SortOrder
    kelasId?: SortOrder
  }

  export type JadwalAbsensiMaxOrderByAggregateInput = {
    id?: SortOrder
    kelasId?: SortOrder
    hari?: SortOrder
    jamMulai?: SortOrder
    jamSelesai?: SortOrder
    tanggal?: SortOrder
    createdAt?: SortOrder
  }

  export type JadwalAbsensiMinOrderByAggregateInput = {
    id?: SortOrder
    kelasId?: SortOrder
    hari?: SortOrder
    jamMulai?: SortOrder
    jamSelesai?: SortOrder
    tanggal?: SortOrder
    createdAt?: SortOrder
  }

  export type JadwalAbsensiSumOrderByAggregateInput = {
    id?: SortOrder
    kelasId?: SortOrder
  }

  export type EnumHariWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Hari | EnumHariFieldRefInput<$PrismaModel>
    in?: $Enums.Hari[] | ListEnumHariFieldRefInput<$PrismaModel>
    notIn?: $Enums.Hari[] | ListEnumHariFieldRefInput<$PrismaModel>
    not?: NestedEnumHariWithAggregatesFilter<$PrismaModel> | $Enums.Hari
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHariFilter<$PrismaModel>
    _max?: NestedEnumHariFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type AbsensiSettingNullableScalarRelationFilter = {
    is?: AbsensiSettingWhereInput | null
    isNot?: AbsensiSettingWhereInput | null
  }

  export type JadwalAbsensiListRelationFilter = {
    every?: JadwalAbsensiWhereInput
    some?: JadwalAbsensiWhereInput
    none?: JadwalAbsensiWhereInput
  }

  export type IzinListRelationFilter = {
    every?: IzinWhereInput
    some?: IzinWhereInput
    none?: IzinWhereInput
  }

  export type TugasListRelationFilter = {
    every?: TugasWhereInput
    some?: TugasWhereInput
    none?: TugasWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JadwalAbsensiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IzinOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TugasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KelasCountOrderByAggregateInput = {
    id?: SortOrder
    namaKelas?: SortOrder
    deskripsi?: SortOrder
  }

  export type KelasAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type KelasMaxOrderByAggregateInput = {
    id?: SortOrder
    namaKelas?: SortOrder
    deskripsi?: SortOrder
  }

  export type KelasMinOrderByAggregateInput = {
    id?: SortOrder
    namaKelas?: SortOrder
    deskripsi?: SortOrder
  }

  export type KelasSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LogAktivitasCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    aktivitas?: SortOrder
    createdAt?: SortOrder
  }

  export type LogAktivitasAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type LogAktivitasMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    aktivitas?: SortOrder
    createdAt?: SortOrder
  }

  export type LogAktivitasMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    aktivitas?: SortOrder
    createdAt?: SortOrder
  }

  export type LogAktivitasSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type MataPelajaranCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    kode?: SortOrder
    createdAt?: SortOrder
  }

  export type MataPelajaranAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MataPelajaranMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    kode?: SortOrder
    createdAt?: SortOrder
  }

  export type MataPelajaranMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    kode?: SortOrder
    createdAt?: SortOrder
  }

  export type MataPelajaranSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SubmissionScalarRelationFilter = {
    is?: SubmissionWhereInput
    isNot?: SubmissionWhereInput
  }

  export type NilaiCountOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    nilai?: SortOrder
    catatan?: SortOrder
    createdAt?: SortOrder
  }

  export type NilaiAvgOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    nilai?: SortOrder
  }

  export type NilaiMaxOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    nilai?: SortOrder
    catatan?: SortOrder
    createdAt?: SortOrder
  }

  export type NilaiMinOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    nilai?: SortOrder
    catatan?: SortOrder
    createdAt?: SortOrder
  }

  export type NilaiSumOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    nilai?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    level?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    level?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    level?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    namaLengkap?: SortOrder
    noHp?: SortOrder
    alamat?: SortOrder
    fotoUrl?: SortOrder
    tanggalLahir?: SortOrder
    jenisKelamin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    namaLengkap?: SortOrder
    noHp?: SortOrder
    alamat?: SortOrder
    fotoUrl?: SortOrder
    tanggalLahir?: SortOrder
    jenisKelamin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    namaLengkap?: SortOrder
    noHp?: SortOrder
    alamat?: SortOrder
    fotoUrl?: SortOrder
    tanggalLahir?: SortOrder
    jenisKelamin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumStatusSubmissionFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSubmission | EnumStatusSubmissionFieldRefInput<$PrismaModel>
    in?: $Enums.StatusSubmission[] | ListEnumStatusSubmissionFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusSubmission[] | ListEnumStatusSubmissionFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusSubmissionFilter<$PrismaModel> | $Enums.StatusSubmission
  }

  export type TugasScalarRelationFilter = {
    is?: TugasWhereInput
    isNot?: TugasWhereInput
  }

  export type NilaiNullableScalarRelationFilter = {
    is?: NilaiWhereInput | null
    isNot?: NilaiWhereInput | null
  }

  export type SubmissionUserIdTugasIdCompoundUniqueInput = {
    userId: number
    tugasId: number
  }

  export type SubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tugasId?: SortOrder
    fileUrl?: SortOrder
    linkUrl?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SubmissionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tugasId?: SortOrder
  }

  export type SubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tugasId?: SortOrder
    fileUrl?: SortOrder
    linkUrl?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tugasId?: SortOrder
    fileUrl?: SortOrder
    linkUrl?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SubmissionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tugasId?: SortOrder
  }

  export type EnumStatusSubmissionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSubmission | EnumStatusSubmissionFieldRefInput<$PrismaModel>
    in?: $Enums.StatusSubmission[] | ListEnumStatusSubmissionFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusSubmission[] | ListEnumStatusSubmissionFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusSubmissionWithAggregatesFilter<$PrismaModel> | $Enums.StatusSubmission
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusSubmissionFilter<$PrismaModel>
    _max?: NestedEnumStatusSubmissionFilter<$PrismaModel>
  }

  export type MataPelajaranScalarRelationFilter = {
    is?: MataPelajaranWhereInput
    isNot?: MataPelajaranWhereInput
  }

  export type SubmissionListRelationFilter = {
    every?: SubmissionWhereInput
    some?: SubmissionWhereInput
    none?: SubmissionWhereInput
  }

  export type SubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TugasCountOrderByAggregateInput = {
    id?: SortOrder
    kelasId?: SortOrder
    mataPelajaranId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TugasAvgOrderByAggregateInput = {
    id?: SortOrder
    kelasId?: SortOrder
    mataPelajaranId?: SortOrder
    createdBy?: SortOrder
  }

  export type TugasMaxOrderByAggregateInput = {
    id?: SortOrder
    kelasId?: SortOrder
    mataPelajaranId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TugasMinOrderByAggregateInput = {
    id?: SortOrder
    kelasId?: SortOrder
    mataPelajaranId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TugasSumOrderByAggregateInput = {
    id?: SortOrder
    kelasId?: SortOrder
    mataPelajaranId?: SortOrder
    createdBy?: SortOrder
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type KelasNullableScalarRelationFilter = {
    is?: KelasWhereInput | null
    isNot?: KelasWhereInput | null
  }

  export type KelasListRelationFilter = {
    every?: KelasWhereInput
    some?: KelasWhereInput
    none?: KelasWhereInput
  }

  export type LogAktivitasListRelationFilter = {
    every?: LogAktivitasWhereInput
    some?: LogAktivitasWhereInput
    none?: LogAktivitasWhereInput
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type KelasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LogAktivitasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    activatedAt?: SortOrder
    isActive?: SortOrder
    otp?: SortOrder
    otpExpiresAt?: SortOrder
    role?: SortOrder
    kelasId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    kelasId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    activatedAt?: SortOrder
    isActive?: SortOrder
    otp?: SortOrder
    otpExpiresAt?: SortOrder
    role?: SortOrder
    kelasId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    activatedAt?: SortOrder
    isActive?: SortOrder
    otp?: SortOrder
    otpExpiresAt?: SortOrder
    role?: SortOrder
    kelasId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    kelasId?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutAbsensiInput = {
    create?: XOR<UserCreateWithoutAbsensiInput, UserUncheckedCreateWithoutAbsensiInput>
    connectOrCreate?: UserCreateOrConnectWithoutAbsensiInput
    connect?: UserWhereUniqueInput
  }

  export type KelasCreateNestedOneWithoutAbsensiInput = {
    create?: XOR<KelasCreateWithoutAbsensiInput, KelasUncheckedCreateWithoutAbsensiInput>
    connectOrCreate?: KelasCreateOrConnectWithoutAbsensiInput
    connect?: KelasWhereUniqueInput
  }

  export type JadwalAbsensiCreateNestedOneWithoutAbsensiInput = {
    create?: XOR<JadwalAbsensiCreateWithoutAbsensiInput, JadwalAbsensiUncheckedCreateWithoutAbsensiInput>
    connectOrCreate?: JadwalAbsensiCreateOrConnectWithoutAbsensiInput
    connect?: JadwalAbsensiWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumStatusAbsensiFieldUpdateOperationsInput = {
    set?: $Enums.StatusAbsensi
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAbsensiNestedInput = {
    create?: XOR<UserCreateWithoutAbsensiInput, UserUncheckedCreateWithoutAbsensiInput>
    connectOrCreate?: UserCreateOrConnectWithoutAbsensiInput
    upsert?: UserUpsertWithoutAbsensiInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAbsensiInput, UserUpdateWithoutAbsensiInput>, UserUncheckedUpdateWithoutAbsensiInput>
  }

  export type KelasUpdateOneRequiredWithoutAbsensiNestedInput = {
    create?: XOR<KelasCreateWithoutAbsensiInput, KelasUncheckedCreateWithoutAbsensiInput>
    connectOrCreate?: KelasCreateOrConnectWithoutAbsensiInput
    upsert?: KelasUpsertWithoutAbsensiInput
    connect?: KelasWhereUniqueInput
    update?: XOR<XOR<KelasUpdateToOneWithWhereWithoutAbsensiInput, KelasUpdateWithoutAbsensiInput>, KelasUncheckedUpdateWithoutAbsensiInput>
  }

  export type JadwalAbsensiUpdateOneWithoutAbsensiNestedInput = {
    create?: XOR<JadwalAbsensiCreateWithoutAbsensiInput, JadwalAbsensiUncheckedCreateWithoutAbsensiInput>
    connectOrCreate?: JadwalAbsensiCreateOrConnectWithoutAbsensiInput
    upsert?: JadwalAbsensiUpsertWithoutAbsensiInput
    disconnect?: JadwalAbsensiWhereInput | boolean
    delete?: JadwalAbsensiWhereInput | boolean
    connect?: JadwalAbsensiWhereUniqueInput
    update?: XOR<XOR<JadwalAbsensiUpdateToOneWithWhereWithoutAbsensiInput, JadwalAbsensiUpdateWithoutAbsensiInput>, JadwalAbsensiUncheckedUpdateWithoutAbsensiInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type KelasCreateNestedOneWithoutAbsensiSettingInput = {
    create?: XOR<KelasCreateWithoutAbsensiSettingInput, KelasUncheckedCreateWithoutAbsensiSettingInput>
    connectOrCreate?: KelasCreateOrConnectWithoutAbsensiSettingInput
    connect?: KelasWhereUniqueInput
  }

  export type KelasUpdateOneRequiredWithoutAbsensiSettingNestedInput = {
    create?: XOR<KelasCreateWithoutAbsensiSettingInput, KelasUncheckedCreateWithoutAbsensiSettingInput>
    connectOrCreate?: KelasCreateOrConnectWithoutAbsensiSettingInput
    upsert?: KelasUpsertWithoutAbsensiSettingInput
    connect?: KelasWhereUniqueInput
    update?: XOR<XOR<KelasUpdateToOneWithWhereWithoutAbsensiSettingInput, KelasUpdateWithoutAbsensiSettingInput>, KelasUncheckedUpdateWithoutAbsensiSettingInput>
  }

  export type UserCreateNestedOneWithoutIzinInput = {
    create?: XOR<UserCreateWithoutIzinInput, UserUncheckedCreateWithoutIzinInput>
    connectOrCreate?: UserCreateOrConnectWithoutIzinInput
    connect?: UserWhereUniqueInput
  }

  export type KelasCreateNestedOneWithoutIzinInput = {
    create?: XOR<KelasCreateWithoutIzinInput, KelasUncheckedCreateWithoutIzinInput>
    connectOrCreate?: KelasCreateOrConnectWithoutIzinInput
    connect?: KelasWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumStatusIzinFieldUpdateOperationsInput = {
    set?: $Enums.StatusIzin
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutIzinNestedInput = {
    create?: XOR<UserCreateWithoutIzinInput, UserUncheckedCreateWithoutIzinInput>
    connectOrCreate?: UserCreateOrConnectWithoutIzinInput
    upsert?: UserUpsertWithoutIzinInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIzinInput, UserUpdateWithoutIzinInput>, UserUncheckedUpdateWithoutIzinInput>
  }

  export type KelasUpdateOneRequiredWithoutIzinNestedInput = {
    create?: XOR<KelasCreateWithoutIzinInput, KelasUncheckedCreateWithoutIzinInput>
    connectOrCreate?: KelasCreateOrConnectWithoutIzinInput
    upsert?: KelasUpsertWithoutIzinInput
    connect?: KelasWhereUniqueInput
    update?: XOR<XOR<KelasUpdateToOneWithWhereWithoutIzinInput, KelasUpdateWithoutIzinInput>, KelasUncheckedUpdateWithoutIzinInput>
  }

  export type KelasCreateNestedOneWithoutJadwalInput = {
    create?: XOR<KelasCreateWithoutJadwalInput, KelasUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: KelasCreateOrConnectWithoutJadwalInput
    connect?: KelasWhereUniqueInput
  }

  export type AbsensiCreateNestedManyWithoutJadwalInput = {
    create?: XOR<AbsensiCreateWithoutJadwalInput, AbsensiUncheckedCreateWithoutJadwalInput> | AbsensiCreateWithoutJadwalInput[] | AbsensiUncheckedCreateWithoutJadwalInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutJadwalInput | AbsensiCreateOrConnectWithoutJadwalInput[]
    createMany?: AbsensiCreateManyJadwalInputEnvelope
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
  }

  export type AbsensiUncheckedCreateNestedManyWithoutJadwalInput = {
    create?: XOR<AbsensiCreateWithoutJadwalInput, AbsensiUncheckedCreateWithoutJadwalInput> | AbsensiCreateWithoutJadwalInput[] | AbsensiUncheckedCreateWithoutJadwalInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutJadwalInput | AbsensiCreateOrConnectWithoutJadwalInput[]
    createMany?: AbsensiCreateManyJadwalInputEnvelope
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
  }

  export type EnumHariFieldUpdateOperationsInput = {
    set?: $Enums.Hari
  }

  export type KelasUpdateOneRequiredWithoutJadwalNestedInput = {
    create?: XOR<KelasCreateWithoutJadwalInput, KelasUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: KelasCreateOrConnectWithoutJadwalInput
    upsert?: KelasUpsertWithoutJadwalInput
    connect?: KelasWhereUniqueInput
    update?: XOR<XOR<KelasUpdateToOneWithWhereWithoutJadwalInput, KelasUpdateWithoutJadwalInput>, KelasUncheckedUpdateWithoutJadwalInput>
  }

  export type AbsensiUpdateManyWithoutJadwalNestedInput = {
    create?: XOR<AbsensiCreateWithoutJadwalInput, AbsensiUncheckedCreateWithoutJadwalInput> | AbsensiCreateWithoutJadwalInput[] | AbsensiUncheckedCreateWithoutJadwalInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutJadwalInput | AbsensiCreateOrConnectWithoutJadwalInput[]
    upsert?: AbsensiUpsertWithWhereUniqueWithoutJadwalInput | AbsensiUpsertWithWhereUniqueWithoutJadwalInput[]
    createMany?: AbsensiCreateManyJadwalInputEnvelope
    set?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    disconnect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    delete?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    update?: AbsensiUpdateWithWhereUniqueWithoutJadwalInput | AbsensiUpdateWithWhereUniqueWithoutJadwalInput[]
    updateMany?: AbsensiUpdateManyWithWhereWithoutJadwalInput | AbsensiUpdateManyWithWhereWithoutJadwalInput[]
    deleteMany?: AbsensiScalarWhereInput | AbsensiScalarWhereInput[]
  }

  export type AbsensiUncheckedUpdateManyWithoutJadwalNestedInput = {
    create?: XOR<AbsensiCreateWithoutJadwalInput, AbsensiUncheckedCreateWithoutJadwalInput> | AbsensiCreateWithoutJadwalInput[] | AbsensiUncheckedCreateWithoutJadwalInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutJadwalInput | AbsensiCreateOrConnectWithoutJadwalInput[]
    upsert?: AbsensiUpsertWithWhereUniqueWithoutJadwalInput | AbsensiUpsertWithWhereUniqueWithoutJadwalInput[]
    createMany?: AbsensiCreateManyJadwalInputEnvelope
    set?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    disconnect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    delete?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    update?: AbsensiUpdateWithWhereUniqueWithoutJadwalInput | AbsensiUpdateWithWhereUniqueWithoutJadwalInput[]
    updateMany?: AbsensiUpdateManyWithWhereWithoutJadwalInput | AbsensiUpdateManyWithWhereWithoutJadwalInput[]
    deleteMany?: AbsensiScalarWhereInput | AbsensiScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutKelasInput = {
    create?: XOR<UserCreateWithoutKelasInput, UserUncheckedCreateWithoutKelasInput> | UserCreateWithoutKelasInput[] | UserUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: UserCreateOrConnectWithoutKelasInput | UserCreateOrConnectWithoutKelasInput[]
    createMany?: UserCreateManyKelasInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutKelasAjarInput = {
    create?: XOR<UserCreateWithoutKelasAjarInput, UserUncheckedCreateWithoutKelasAjarInput> | UserCreateWithoutKelasAjarInput[] | UserUncheckedCreateWithoutKelasAjarInput[]
    connectOrCreate?: UserCreateOrConnectWithoutKelasAjarInput | UserCreateOrConnectWithoutKelasAjarInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type AbsensiSettingCreateNestedOneWithoutKelasInput = {
    create?: XOR<AbsensiSettingCreateWithoutKelasInput, AbsensiSettingUncheckedCreateWithoutKelasInput>
    connectOrCreate?: AbsensiSettingCreateOrConnectWithoutKelasInput
    connect?: AbsensiSettingWhereUniqueInput
  }

  export type AbsensiCreateNestedManyWithoutKelasInput = {
    create?: XOR<AbsensiCreateWithoutKelasInput, AbsensiUncheckedCreateWithoutKelasInput> | AbsensiCreateWithoutKelasInput[] | AbsensiUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutKelasInput | AbsensiCreateOrConnectWithoutKelasInput[]
    createMany?: AbsensiCreateManyKelasInputEnvelope
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
  }

  export type JadwalAbsensiCreateNestedManyWithoutKelasInput = {
    create?: XOR<JadwalAbsensiCreateWithoutKelasInput, JadwalAbsensiUncheckedCreateWithoutKelasInput> | JadwalAbsensiCreateWithoutKelasInput[] | JadwalAbsensiUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: JadwalAbsensiCreateOrConnectWithoutKelasInput | JadwalAbsensiCreateOrConnectWithoutKelasInput[]
    createMany?: JadwalAbsensiCreateManyKelasInputEnvelope
    connect?: JadwalAbsensiWhereUniqueInput | JadwalAbsensiWhereUniqueInput[]
  }

  export type IzinCreateNestedManyWithoutKelasInput = {
    create?: XOR<IzinCreateWithoutKelasInput, IzinUncheckedCreateWithoutKelasInput> | IzinCreateWithoutKelasInput[] | IzinUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: IzinCreateOrConnectWithoutKelasInput | IzinCreateOrConnectWithoutKelasInput[]
    createMany?: IzinCreateManyKelasInputEnvelope
    connect?: IzinWhereUniqueInput | IzinWhereUniqueInput[]
  }

  export type TugasCreateNestedManyWithoutKelasInput = {
    create?: XOR<TugasCreateWithoutKelasInput, TugasUncheckedCreateWithoutKelasInput> | TugasCreateWithoutKelasInput[] | TugasUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: TugasCreateOrConnectWithoutKelasInput | TugasCreateOrConnectWithoutKelasInput[]
    createMany?: TugasCreateManyKelasInputEnvelope
    connect?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutKelasInput = {
    create?: XOR<UserCreateWithoutKelasInput, UserUncheckedCreateWithoutKelasInput> | UserCreateWithoutKelasInput[] | UserUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: UserCreateOrConnectWithoutKelasInput | UserCreateOrConnectWithoutKelasInput[]
    createMany?: UserCreateManyKelasInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutKelasAjarInput = {
    create?: XOR<UserCreateWithoutKelasAjarInput, UserUncheckedCreateWithoutKelasAjarInput> | UserCreateWithoutKelasAjarInput[] | UserUncheckedCreateWithoutKelasAjarInput[]
    connectOrCreate?: UserCreateOrConnectWithoutKelasAjarInput | UserCreateOrConnectWithoutKelasAjarInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type AbsensiSettingUncheckedCreateNestedOneWithoutKelasInput = {
    create?: XOR<AbsensiSettingCreateWithoutKelasInput, AbsensiSettingUncheckedCreateWithoutKelasInput>
    connectOrCreate?: AbsensiSettingCreateOrConnectWithoutKelasInput
    connect?: AbsensiSettingWhereUniqueInput
  }

  export type AbsensiUncheckedCreateNestedManyWithoutKelasInput = {
    create?: XOR<AbsensiCreateWithoutKelasInput, AbsensiUncheckedCreateWithoutKelasInput> | AbsensiCreateWithoutKelasInput[] | AbsensiUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutKelasInput | AbsensiCreateOrConnectWithoutKelasInput[]
    createMany?: AbsensiCreateManyKelasInputEnvelope
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
  }

  export type JadwalAbsensiUncheckedCreateNestedManyWithoutKelasInput = {
    create?: XOR<JadwalAbsensiCreateWithoutKelasInput, JadwalAbsensiUncheckedCreateWithoutKelasInput> | JadwalAbsensiCreateWithoutKelasInput[] | JadwalAbsensiUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: JadwalAbsensiCreateOrConnectWithoutKelasInput | JadwalAbsensiCreateOrConnectWithoutKelasInput[]
    createMany?: JadwalAbsensiCreateManyKelasInputEnvelope
    connect?: JadwalAbsensiWhereUniqueInput | JadwalAbsensiWhereUniqueInput[]
  }

  export type IzinUncheckedCreateNestedManyWithoutKelasInput = {
    create?: XOR<IzinCreateWithoutKelasInput, IzinUncheckedCreateWithoutKelasInput> | IzinCreateWithoutKelasInput[] | IzinUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: IzinCreateOrConnectWithoutKelasInput | IzinCreateOrConnectWithoutKelasInput[]
    createMany?: IzinCreateManyKelasInputEnvelope
    connect?: IzinWhereUniqueInput | IzinWhereUniqueInput[]
  }

  export type TugasUncheckedCreateNestedManyWithoutKelasInput = {
    create?: XOR<TugasCreateWithoutKelasInput, TugasUncheckedCreateWithoutKelasInput> | TugasCreateWithoutKelasInput[] | TugasUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: TugasCreateOrConnectWithoutKelasInput | TugasCreateOrConnectWithoutKelasInput[]
    createMany?: TugasCreateManyKelasInputEnvelope
    connect?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutKelasNestedInput = {
    create?: XOR<UserCreateWithoutKelasInput, UserUncheckedCreateWithoutKelasInput> | UserCreateWithoutKelasInput[] | UserUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: UserCreateOrConnectWithoutKelasInput | UserCreateOrConnectWithoutKelasInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutKelasInput | UserUpsertWithWhereUniqueWithoutKelasInput[]
    createMany?: UserCreateManyKelasInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutKelasInput | UserUpdateWithWhereUniqueWithoutKelasInput[]
    updateMany?: UserUpdateManyWithWhereWithoutKelasInput | UserUpdateManyWithWhereWithoutKelasInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateManyWithoutKelasAjarNestedInput = {
    create?: XOR<UserCreateWithoutKelasAjarInput, UserUncheckedCreateWithoutKelasAjarInput> | UserCreateWithoutKelasAjarInput[] | UserUncheckedCreateWithoutKelasAjarInput[]
    connectOrCreate?: UserCreateOrConnectWithoutKelasAjarInput | UserCreateOrConnectWithoutKelasAjarInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutKelasAjarInput | UserUpsertWithWhereUniqueWithoutKelasAjarInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutKelasAjarInput | UserUpdateWithWhereUniqueWithoutKelasAjarInput[]
    updateMany?: UserUpdateManyWithWhereWithoutKelasAjarInput | UserUpdateManyWithWhereWithoutKelasAjarInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type AbsensiSettingUpdateOneWithoutKelasNestedInput = {
    create?: XOR<AbsensiSettingCreateWithoutKelasInput, AbsensiSettingUncheckedCreateWithoutKelasInput>
    connectOrCreate?: AbsensiSettingCreateOrConnectWithoutKelasInput
    upsert?: AbsensiSettingUpsertWithoutKelasInput
    disconnect?: AbsensiSettingWhereInput | boolean
    delete?: AbsensiSettingWhereInput | boolean
    connect?: AbsensiSettingWhereUniqueInput
    update?: XOR<XOR<AbsensiSettingUpdateToOneWithWhereWithoutKelasInput, AbsensiSettingUpdateWithoutKelasInput>, AbsensiSettingUncheckedUpdateWithoutKelasInput>
  }

  export type AbsensiUpdateManyWithoutKelasNestedInput = {
    create?: XOR<AbsensiCreateWithoutKelasInput, AbsensiUncheckedCreateWithoutKelasInput> | AbsensiCreateWithoutKelasInput[] | AbsensiUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutKelasInput | AbsensiCreateOrConnectWithoutKelasInput[]
    upsert?: AbsensiUpsertWithWhereUniqueWithoutKelasInput | AbsensiUpsertWithWhereUniqueWithoutKelasInput[]
    createMany?: AbsensiCreateManyKelasInputEnvelope
    set?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    disconnect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    delete?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    update?: AbsensiUpdateWithWhereUniqueWithoutKelasInput | AbsensiUpdateWithWhereUniqueWithoutKelasInput[]
    updateMany?: AbsensiUpdateManyWithWhereWithoutKelasInput | AbsensiUpdateManyWithWhereWithoutKelasInput[]
    deleteMany?: AbsensiScalarWhereInput | AbsensiScalarWhereInput[]
  }

  export type JadwalAbsensiUpdateManyWithoutKelasNestedInput = {
    create?: XOR<JadwalAbsensiCreateWithoutKelasInput, JadwalAbsensiUncheckedCreateWithoutKelasInput> | JadwalAbsensiCreateWithoutKelasInput[] | JadwalAbsensiUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: JadwalAbsensiCreateOrConnectWithoutKelasInput | JadwalAbsensiCreateOrConnectWithoutKelasInput[]
    upsert?: JadwalAbsensiUpsertWithWhereUniqueWithoutKelasInput | JadwalAbsensiUpsertWithWhereUniqueWithoutKelasInput[]
    createMany?: JadwalAbsensiCreateManyKelasInputEnvelope
    set?: JadwalAbsensiWhereUniqueInput | JadwalAbsensiWhereUniqueInput[]
    disconnect?: JadwalAbsensiWhereUniqueInput | JadwalAbsensiWhereUniqueInput[]
    delete?: JadwalAbsensiWhereUniqueInput | JadwalAbsensiWhereUniqueInput[]
    connect?: JadwalAbsensiWhereUniqueInput | JadwalAbsensiWhereUniqueInput[]
    update?: JadwalAbsensiUpdateWithWhereUniqueWithoutKelasInput | JadwalAbsensiUpdateWithWhereUniqueWithoutKelasInput[]
    updateMany?: JadwalAbsensiUpdateManyWithWhereWithoutKelasInput | JadwalAbsensiUpdateManyWithWhereWithoutKelasInput[]
    deleteMany?: JadwalAbsensiScalarWhereInput | JadwalAbsensiScalarWhereInput[]
  }

  export type IzinUpdateManyWithoutKelasNestedInput = {
    create?: XOR<IzinCreateWithoutKelasInput, IzinUncheckedCreateWithoutKelasInput> | IzinCreateWithoutKelasInput[] | IzinUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: IzinCreateOrConnectWithoutKelasInput | IzinCreateOrConnectWithoutKelasInput[]
    upsert?: IzinUpsertWithWhereUniqueWithoutKelasInput | IzinUpsertWithWhereUniqueWithoutKelasInput[]
    createMany?: IzinCreateManyKelasInputEnvelope
    set?: IzinWhereUniqueInput | IzinWhereUniqueInput[]
    disconnect?: IzinWhereUniqueInput | IzinWhereUniqueInput[]
    delete?: IzinWhereUniqueInput | IzinWhereUniqueInput[]
    connect?: IzinWhereUniqueInput | IzinWhereUniqueInput[]
    update?: IzinUpdateWithWhereUniqueWithoutKelasInput | IzinUpdateWithWhereUniqueWithoutKelasInput[]
    updateMany?: IzinUpdateManyWithWhereWithoutKelasInput | IzinUpdateManyWithWhereWithoutKelasInput[]
    deleteMany?: IzinScalarWhereInput | IzinScalarWhereInput[]
  }

  export type TugasUpdateManyWithoutKelasNestedInput = {
    create?: XOR<TugasCreateWithoutKelasInput, TugasUncheckedCreateWithoutKelasInput> | TugasCreateWithoutKelasInput[] | TugasUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: TugasCreateOrConnectWithoutKelasInput | TugasCreateOrConnectWithoutKelasInput[]
    upsert?: TugasUpsertWithWhereUniqueWithoutKelasInput | TugasUpsertWithWhereUniqueWithoutKelasInput[]
    createMany?: TugasCreateManyKelasInputEnvelope
    set?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    disconnect?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    delete?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    connect?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    update?: TugasUpdateWithWhereUniqueWithoutKelasInput | TugasUpdateWithWhereUniqueWithoutKelasInput[]
    updateMany?: TugasUpdateManyWithWhereWithoutKelasInput | TugasUpdateManyWithWhereWithoutKelasInput[]
    deleteMany?: TugasScalarWhereInput | TugasScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutKelasNestedInput = {
    create?: XOR<UserCreateWithoutKelasInput, UserUncheckedCreateWithoutKelasInput> | UserCreateWithoutKelasInput[] | UserUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: UserCreateOrConnectWithoutKelasInput | UserCreateOrConnectWithoutKelasInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutKelasInput | UserUpsertWithWhereUniqueWithoutKelasInput[]
    createMany?: UserCreateManyKelasInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutKelasInput | UserUpdateWithWhereUniqueWithoutKelasInput[]
    updateMany?: UserUpdateManyWithWhereWithoutKelasInput | UserUpdateManyWithWhereWithoutKelasInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutKelasAjarNestedInput = {
    create?: XOR<UserCreateWithoutKelasAjarInput, UserUncheckedCreateWithoutKelasAjarInput> | UserCreateWithoutKelasAjarInput[] | UserUncheckedCreateWithoutKelasAjarInput[]
    connectOrCreate?: UserCreateOrConnectWithoutKelasAjarInput | UserCreateOrConnectWithoutKelasAjarInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutKelasAjarInput | UserUpsertWithWhereUniqueWithoutKelasAjarInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutKelasAjarInput | UserUpdateWithWhereUniqueWithoutKelasAjarInput[]
    updateMany?: UserUpdateManyWithWhereWithoutKelasAjarInput | UserUpdateManyWithWhereWithoutKelasAjarInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type AbsensiSettingUncheckedUpdateOneWithoutKelasNestedInput = {
    create?: XOR<AbsensiSettingCreateWithoutKelasInput, AbsensiSettingUncheckedCreateWithoutKelasInput>
    connectOrCreate?: AbsensiSettingCreateOrConnectWithoutKelasInput
    upsert?: AbsensiSettingUpsertWithoutKelasInput
    disconnect?: AbsensiSettingWhereInput | boolean
    delete?: AbsensiSettingWhereInput | boolean
    connect?: AbsensiSettingWhereUniqueInput
    update?: XOR<XOR<AbsensiSettingUpdateToOneWithWhereWithoutKelasInput, AbsensiSettingUpdateWithoutKelasInput>, AbsensiSettingUncheckedUpdateWithoutKelasInput>
  }

  export type AbsensiUncheckedUpdateManyWithoutKelasNestedInput = {
    create?: XOR<AbsensiCreateWithoutKelasInput, AbsensiUncheckedCreateWithoutKelasInput> | AbsensiCreateWithoutKelasInput[] | AbsensiUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutKelasInput | AbsensiCreateOrConnectWithoutKelasInput[]
    upsert?: AbsensiUpsertWithWhereUniqueWithoutKelasInput | AbsensiUpsertWithWhereUniqueWithoutKelasInput[]
    createMany?: AbsensiCreateManyKelasInputEnvelope
    set?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    disconnect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    delete?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    update?: AbsensiUpdateWithWhereUniqueWithoutKelasInput | AbsensiUpdateWithWhereUniqueWithoutKelasInput[]
    updateMany?: AbsensiUpdateManyWithWhereWithoutKelasInput | AbsensiUpdateManyWithWhereWithoutKelasInput[]
    deleteMany?: AbsensiScalarWhereInput | AbsensiScalarWhereInput[]
  }

  export type JadwalAbsensiUncheckedUpdateManyWithoutKelasNestedInput = {
    create?: XOR<JadwalAbsensiCreateWithoutKelasInput, JadwalAbsensiUncheckedCreateWithoutKelasInput> | JadwalAbsensiCreateWithoutKelasInput[] | JadwalAbsensiUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: JadwalAbsensiCreateOrConnectWithoutKelasInput | JadwalAbsensiCreateOrConnectWithoutKelasInput[]
    upsert?: JadwalAbsensiUpsertWithWhereUniqueWithoutKelasInput | JadwalAbsensiUpsertWithWhereUniqueWithoutKelasInput[]
    createMany?: JadwalAbsensiCreateManyKelasInputEnvelope
    set?: JadwalAbsensiWhereUniqueInput | JadwalAbsensiWhereUniqueInput[]
    disconnect?: JadwalAbsensiWhereUniqueInput | JadwalAbsensiWhereUniqueInput[]
    delete?: JadwalAbsensiWhereUniqueInput | JadwalAbsensiWhereUniqueInput[]
    connect?: JadwalAbsensiWhereUniqueInput | JadwalAbsensiWhereUniqueInput[]
    update?: JadwalAbsensiUpdateWithWhereUniqueWithoutKelasInput | JadwalAbsensiUpdateWithWhereUniqueWithoutKelasInput[]
    updateMany?: JadwalAbsensiUpdateManyWithWhereWithoutKelasInput | JadwalAbsensiUpdateManyWithWhereWithoutKelasInput[]
    deleteMany?: JadwalAbsensiScalarWhereInput | JadwalAbsensiScalarWhereInput[]
  }

  export type IzinUncheckedUpdateManyWithoutKelasNestedInput = {
    create?: XOR<IzinCreateWithoutKelasInput, IzinUncheckedCreateWithoutKelasInput> | IzinCreateWithoutKelasInput[] | IzinUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: IzinCreateOrConnectWithoutKelasInput | IzinCreateOrConnectWithoutKelasInput[]
    upsert?: IzinUpsertWithWhereUniqueWithoutKelasInput | IzinUpsertWithWhereUniqueWithoutKelasInput[]
    createMany?: IzinCreateManyKelasInputEnvelope
    set?: IzinWhereUniqueInput | IzinWhereUniqueInput[]
    disconnect?: IzinWhereUniqueInput | IzinWhereUniqueInput[]
    delete?: IzinWhereUniqueInput | IzinWhereUniqueInput[]
    connect?: IzinWhereUniqueInput | IzinWhereUniqueInput[]
    update?: IzinUpdateWithWhereUniqueWithoutKelasInput | IzinUpdateWithWhereUniqueWithoutKelasInput[]
    updateMany?: IzinUpdateManyWithWhereWithoutKelasInput | IzinUpdateManyWithWhereWithoutKelasInput[]
    deleteMany?: IzinScalarWhereInput | IzinScalarWhereInput[]
  }

  export type TugasUncheckedUpdateManyWithoutKelasNestedInput = {
    create?: XOR<TugasCreateWithoutKelasInput, TugasUncheckedCreateWithoutKelasInput> | TugasCreateWithoutKelasInput[] | TugasUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: TugasCreateOrConnectWithoutKelasInput | TugasCreateOrConnectWithoutKelasInput[]
    upsert?: TugasUpsertWithWhereUniqueWithoutKelasInput | TugasUpsertWithWhereUniqueWithoutKelasInput[]
    createMany?: TugasCreateManyKelasInputEnvelope
    set?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    disconnect?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    delete?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    connect?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    update?: TugasUpdateWithWhereUniqueWithoutKelasInput | TugasUpdateWithWhereUniqueWithoutKelasInput[]
    updateMany?: TugasUpdateManyWithWhereWithoutKelasInput | TugasUpdateManyWithWhereWithoutKelasInput[]
    deleteMany?: TugasScalarWhereInput | TugasScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLogInput = {
    create?: XOR<UserCreateWithoutLogInput, UserUncheckedCreateWithoutLogInput>
    connectOrCreate?: UserCreateOrConnectWithoutLogInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLogNestedInput = {
    create?: XOR<UserCreateWithoutLogInput, UserUncheckedCreateWithoutLogInput>
    connectOrCreate?: UserCreateOrConnectWithoutLogInput
    upsert?: UserUpsertWithoutLogInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLogInput, UserUpdateWithoutLogInput>, UserUncheckedUpdateWithoutLogInput>
  }

  export type TugasCreateNestedManyWithoutMataPelajaranInput = {
    create?: XOR<TugasCreateWithoutMataPelajaranInput, TugasUncheckedCreateWithoutMataPelajaranInput> | TugasCreateWithoutMataPelajaranInput[] | TugasUncheckedCreateWithoutMataPelajaranInput[]
    connectOrCreate?: TugasCreateOrConnectWithoutMataPelajaranInput | TugasCreateOrConnectWithoutMataPelajaranInput[]
    createMany?: TugasCreateManyMataPelajaranInputEnvelope
    connect?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
  }

  export type TugasUncheckedCreateNestedManyWithoutMataPelajaranInput = {
    create?: XOR<TugasCreateWithoutMataPelajaranInput, TugasUncheckedCreateWithoutMataPelajaranInput> | TugasCreateWithoutMataPelajaranInput[] | TugasUncheckedCreateWithoutMataPelajaranInput[]
    connectOrCreate?: TugasCreateOrConnectWithoutMataPelajaranInput | TugasCreateOrConnectWithoutMataPelajaranInput[]
    createMany?: TugasCreateManyMataPelajaranInputEnvelope
    connect?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
  }

  export type TugasUpdateManyWithoutMataPelajaranNestedInput = {
    create?: XOR<TugasCreateWithoutMataPelajaranInput, TugasUncheckedCreateWithoutMataPelajaranInput> | TugasCreateWithoutMataPelajaranInput[] | TugasUncheckedCreateWithoutMataPelajaranInput[]
    connectOrCreate?: TugasCreateOrConnectWithoutMataPelajaranInput | TugasCreateOrConnectWithoutMataPelajaranInput[]
    upsert?: TugasUpsertWithWhereUniqueWithoutMataPelajaranInput | TugasUpsertWithWhereUniqueWithoutMataPelajaranInput[]
    createMany?: TugasCreateManyMataPelajaranInputEnvelope
    set?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    disconnect?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    delete?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    connect?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    update?: TugasUpdateWithWhereUniqueWithoutMataPelajaranInput | TugasUpdateWithWhereUniqueWithoutMataPelajaranInput[]
    updateMany?: TugasUpdateManyWithWhereWithoutMataPelajaranInput | TugasUpdateManyWithWhereWithoutMataPelajaranInput[]
    deleteMany?: TugasScalarWhereInput | TugasScalarWhereInput[]
  }

  export type TugasUncheckedUpdateManyWithoutMataPelajaranNestedInput = {
    create?: XOR<TugasCreateWithoutMataPelajaranInput, TugasUncheckedCreateWithoutMataPelajaranInput> | TugasCreateWithoutMataPelajaranInput[] | TugasUncheckedCreateWithoutMataPelajaranInput[]
    connectOrCreate?: TugasCreateOrConnectWithoutMataPelajaranInput | TugasCreateOrConnectWithoutMataPelajaranInput[]
    upsert?: TugasUpsertWithWhereUniqueWithoutMataPelajaranInput | TugasUpsertWithWhereUniqueWithoutMataPelajaranInput[]
    createMany?: TugasCreateManyMataPelajaranInputEnvelope
    set?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    disconnect?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    delete?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    connect?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    update?: TugasUpdateWithWhereUniqueWithoutMataPelajaranInput | TugasUpdateWithWhereUniqueWithoutMataPelajaranInput[]
    updateMany?: TugasUpdateManyWithWhereWithoutMataPelajaranInput | TugasUpdateManyWithWhereWithoutMataPelajaranInput[]
    deleteMany?: TugasScalarWhereInput | TugasScalarWhereInput[]
  }

  export type SubmissionCreateNestedOneWithoutNilaiInput = {
    create?: XOR<SubmissionCreateWithoutNilaiInput, SubmissionUncheckedCreateWithoutNilaiInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutNilaiInput
    connect?: SubmissionWhereUniqueInput
  }

  export type SubmissionUpdateOneRequiredWithoutNilaiNestedInput = {
    create?: XOR<SubmissionCreateWithoutNilaiInput, SubmissionUncheckedCreateWithoutNilaiInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutNilaiInput
    upsert?: SubmissionUpsertWithoutNilaiInput
    connect?: SubmissionWhereUniqueInput
    update?: XOR<XOR<SubmissionUpdateToOneWithWhereWithoutNilaiInput, SubmissionUpdateWithoutNilaiInput>, SubmissionUncheckedUpdateWithoutNilaiInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<UserCreateWithoutSubmissionInput, UserUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionInput
    connect?: UserWhereUniqueInput
  }

  export type TugasCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<TugasCreateWithoutSubmissionInput, TugasUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: TugasCreateOrConnectWithoutSubmissionInput
    connect?: TugasWhereUniqueInput
  }

  export type NilaiCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<NilaiCreateWithoutSubmissionInput, NilaiUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: NilaiCreateOrConnectWithoutSubmissionInput
    connect?: NilaiWhereUniqueInput
  }

  export type NilaiUncheckedCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<NilaiCreateWithoutSubmissionInput, NilaiUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: NilaiCreateOrConnectWithoutSubmissionInput
    connect?: NilaiWhereUniqueInput
  }

  export type EnumStatusSubmissionFieldUpdateOperationsInput = {
    set?: $Enums.StatusSubmission
  }

  export type UserUpdateOneRequiredWithoutSubmissionNestedInput = {
    create?: XOR<UserCreateWithoutSubmissionInput, UserUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionInput
    upsert?: UserUpsertWithoutSubmissionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubmissionInput, UserUpdateWithoutSubmissionInput>, UserUncheckedUpdateWithoutSubmissionInput>
  }

  export type TugasUpdateOneRequiredWithoutSubmissionNestedInput = {
    create?: XOR<TugasCreateWithoutSubmissionInput, TugasUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: TugasCreateOrConnectWithoutSubmissionInput
    upsert?: TugasUpsertWithoutSubmissionInput
    connect?: TugasWhereUniqueInput
    update?: XOR<XOR<TugasUpdateToOneWithWhereWithoutSubmissionInput, TugasUpdateWithoutSubmissionInput>, TugasUncheckedUpdateWithoutSubmissionInput>
  }

  export type NilaiUpdateOneWithoutSubmissionNestedInput = {
    create?: XOR<NilaiCreateWithoutSubmissionInput, NilaiUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: NilaiCreateOrConnectWithoutSubmissionInput
    upsert?: NilaiUpsertWithoutSubmissionInput
    disconnect?: NilaiWhereInput | boolean
    delete?: NilaiWhereInput | boolean
    connect?: NilaiWhereUniqueInput
    update?: XOR<XOR<NilaiUpdateToOneWithWhereWithoutSubmissionInput, NilaiUpdateWithoutSubmissionInput>, NilaiUncheckedUpdateWithoutSubmissionInput>
  }

  export type NilaiUncheckedUpdateOneWithoutSubmissionNestedInput = {
    create?: XOR<NilaiCreateWithoutSubmissionInput, NilaiUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: NilaiCreateOrConnectWithoutSubmissionInput
    upsert?: NilaiUpsertWithoutSubmissionInput
    disconnect?: NilaiWhereInput | boolean
    delete?: NilaiWhereInput | boolean
    connect?: NilaiWhereUniqueInput
    update?: XOR<XOR<NilaiUpdateToOneWithWhereWithoutSubmissionInput, NilaiUpdateWithoutSubmissionInput>, NilaiUncheckedUpdateWithoutSubmissionInput>
  }

  export type KelasCreateNestedOneWithoutTugasInput = {
    create?: XOR<KelasCreateWithoutTugasInput, KelasUncheckedCreateWithoutTugasInput>
    connectOrCreate?: KelasCreateOrConnectWithoutTugasInput
    connect?: KelasWhereUniqueInput
  }

  export type MataPelajaranCreateNestedOneWithoutTugasInput = {
    create?: XOR<MataPelajaranCreateWithoutTugasInput, MataPelajaranUncheckedCreateWithoutTugasInput>
    connectOrCreate?: MataPelajaranCreateOrConnectWithoutTugasInput
    connect?: MataPelajaranWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTugasDibuatInput = {
    create?: XOR<UserCreateWithoutTugasDibuatInput, UserUncheckedCreateWithoutTugasDibuatInput>
    connectOrCreate?: UserCreateOrConnectWithoutTugasDibuatInput
    connect?: UserWhereUniqueInput
  }

  export type SubmissionCreateNestedManyWithoutTugasInput = {
    create?: XOR<SubmissionCreateWithoutTugasInput, SubmissionUncheckedCreateWithoutTugasInput> | SubmissionCreateWithoutTugasInput[] | SubmissionUncheckedCreateWithoutTugasInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutTugasInput | SubmissionCreateOrConnectWithoutTugasInput[]
    createMany?: SubmissionCreateManyTugasInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutTugasInput = {
    create?: XOR<SubmissionCreateWithoutTugasInput, SubmissionUncheckedCreateWithoutTugasInput> | SubmissionCreateWithoutTugasInput[] | SubmissionUncheckedCreateWithoutTugasInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutTugasInput | SubmissionCreateOrConnectWithoutTugasInput[]
    createMany?: SubmissionCreateManyTugasInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type KelasUpdateOneRequiredWithoutTugasNestedInput = {
    create?: XOR<KelasCreateWithoutTugasInput, KelasUncheckedCreateWithoutTugasInput>
    connectOrCreate?: KelasCreateOrConnectWithoutTugasInput
    upsert?: KelasUpsertWithoutTugasInput
    connect?: KelasWhereUniqueInput
    update?: XOR<XOR<KelasUpdateToOneWithWhereWithoutTugasInput, KelasUpdateWithoutTugasInput>, KelasUncheckedUpdateWithoutTugasInput>
  }

  export type MataPelajaranUpdateOneRequiredWithoutTugasNestedInput = {
    create?: XOR<MataPelajaranCreateWithoutTugasInput, MataPelajaranUncheckedCreateWithoutTugasInput>
    connectOrCreate?: MataPelajaranCreateOrConnectWithoutTugasInput
    upsert?: MataPelajaranUpsertWithoutTugasInput
    connect?: MataPelajaranWhereUniqueInput
    update?: XOR<XOR<MataPelajaranUpdateToOneWithWhereWithoutTugasInput, MataPelajaranUpdateWithoutTugasInput>, MataPelajaranUncheckedUpdateWithoutTugasInput>
  }

  export type UserUpdateOneRequiredWithoutTugasDibuatNestedInput = {
    create?: XOR<UserCreateWithoutTugasDibuatInput, UserUncheckedCreateWithoutTugasDibuatInput>
    connectOrCreate?: UserCreateOrConnectWithoutTugasDibuatInput
    upsert?: UserUpsertWithoutTugasDibuatInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTugasDibuatInput, UserUpdateWithoutTugasDibuatInput>, UserUncheckedUpdateWithoutTugasDibuatInput>
  }

  export type SubmissionUpdateManyWithoutTugasNestedInput = {
    create?: XOR<SubmissionCreateWithoutTugasInput, SubmissionUncheckedCreateWithoutTugasInput> | SubmissionCreateWithoutTugasInput[] | SubmissionUncheckedCreateWithoutTugasInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutTugasInput | SubmissionCreateOrConnectWithoutTugasInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutTugasInput | SubmissionUpsertWithWhereUniqueWithoutTugasInput[]
    createMany?: SubmissionCreateManyTugasInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutTugasInput | SubmissionUpdateWithWhereUniqueWithoutTugasInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutTugasInput | SubmissionUpdateManyWithWhereWithoutTugasInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutTugasNestedInput = {
    create?: XOR<SubmissionCreateWithoutTugasInput, SubmissionUncheckedCreateWithoutTugasInput> | SubmissionCreateWithoutTugasInput[] | SubmissionUncheckedCreateWithoutTugasInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutTugasInput | SubmissionCreateOrConnectWithoutTugasInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutTugasInput | SubmissionUpsertWithWhereUniqueWithoutTugasInput[]
    createMany?: SubmissionCreateManyTugasInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutTugasInput | SubmissionUpdateWithWhereUniqueWithoutTugasInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutTugasInput | SubmissionUpdateManyWithWhereWithoutTugasInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type KelasCreateNestedOneWithoutSantriInput = {
    create?: XOR<KelasCreateWithoutSantriInput, KelasUncheckedCreateWithoutSantriInput>
    connectOrCreate?: KelasCreateOrConnectWithoutSantriInput
    connect?: KelasWhereUniqueInput
  }

  export type KelasCreateNestedManyWithoutPengajarInput = {
    create?: XOR<KelasCreateWithoutPengajarInput, KelasUncheckedCreateWithoutPengajarInput> | KelasCreateWithoutPengajarInput[] | KelasUncheckedCreateWithoutPengajarInput[]
    connectOrCreate?: KelasCreateOrConnectWithoutPengajarInput | KelasCreateOrConnectWithoutPengajarInput[]
    connect?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
  }

  export type AbsensiCreateNestedManyWithoutUserInput = {
    create?: XOR<AbsensiCreateWithoutUserInput, AbsensiUncheckedCreateWithoutUserInput> | AbsensiCreateWithoutUserInput[] | AbsensiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutUserInput | AbsensiCreateOrConnectWithoutUserInput[]
    createMany?: AbsensiCreateManyUserInputEnvelope
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
  }

  export type IzinCreateNestedManyWithoutUserInput = {
    create?: XOR<IzinCreateWithoutUserInput, IzinUncheckedCreateWithoutUserInput> | IzinCreateWithoutUserInput[] | IzinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IzinCreateOrConnectWithoutUserInput | IzinCreateOrConnectWithoutUserInput[]
    createMany?: IzinCreateManyUserInputEnvelope
    connect?: IzinWhereUniqueInput | IzinWhereUniqueInput[]
  }

  export type TugasCreateNestedManyWithoutCreatorInput = {
    create?: XOR<TugasCreateWithoutCreatorInput, TugasUncheckedCreateWithoutCreatorInput> | TugasCreateWithoutCreatorInput[] | TugasUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TugasCreateOrConnectWithoutCreatorInput | TugasCreateOrConnectWithoutCreatorInput[]
    createMany?: TugasCreateManyCreatorInputEnvelope
    connect?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
  }

  export type SubmissionCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type LogAktivitasCreateNestedManyWithoutUserInput = {
    create?: XOR<LogAktivitasCreateWithoutUserInput, LogAktivitasUncheckedCreateWithoutUserInput> | LogAktivitasCreateWithoutUserInput[] | LogAktivitasUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogAktivitasCreateOrConnectWithoutUserInput | LogAktivitasCreateOrConnectWithoutUserInput[]
    createMany?: LogAktivitasCreateManyUserInputEnvelope
    connect?: LogAktivitasWhereUniqueInput | LogAktivitasWhereUniqueInput[]
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type KelasUncheckedCreateNestedManyWithoutPengajarInput = {
    create?: XOR<KelasCreateWithoutPengajarInput, KelasUncheckedCreateWithoutPengajarInput> | KelasCreateWithoutPengajarInput[] | KelasUncheckedCreateWithoutPengajarInput[]
    connectOrCreate?: KelasCreateOrConnectWithoutPengajarInput | KelasCreateOrConnectWithoutPengajarInput[]
    connect?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
  }

  export type AbsensiUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AbsensiCreateWithoutUserInput, AbsensiUncheckedCreateWithoutUserInput> | AbsensiCreateWithoutUserInput[] | AbsensiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutUserInput | AbsensiCreateOrConnectWithoutUserInput[]
    createMany?: AbsensiCreateManyUserInputEnvelope
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
  }

  export type IzinUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<IzinCreateWithoutUserInput, IzinUncheckedCreateWithoutUserInput> | IzinCreateWithoutUserInput[] | IzinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IzinCreateOrConnectWithoutUserInput | IzinCreateOrConnectWithoutUserInput[]
    createMany?: IzinCreateManyUserInputEnvelope
    connect?: IzinWhereUniqueInput | IzinWhereUniqueInput[]
  }

  export type TugasUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<TugasCreateWithoutCreatorInput, TugasUncheckedCreateWithoutCreatorInput> | TugasCreateWithoutCreatorInput[] | TugasUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TugasCreateOrConnectWithoutCreatorInput | TugasCreateOrConnectWithoutCreatorInput[]
    createMany?: TugasCreateManyCreatorInputEnvelope
    connect?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type LogAktivitasUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LogAktivitasCreateWithoutUserInput, LogAktivitasUncheckedCreateWithoutUserInput> | LogAktivitasCreateWithoutUserInput[] | LogAktivitasUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogAktivitasCreateOrConnectWithoutUserInput | LogAktivitasCreateOrConnectWithoutUserInput[]
    createMany?: LogAktivitasCreateManyUserInputEnvelope
    connect?: LogAktivitasWhereUniqueInput | LogAktivitasWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type KelasUpdateOneWithoutSantriNestedInput = {
    create?: XOR<KelasCreateWithoutSantriInput, KelasUncheckedCreateWithoutSantriInput>
    connectOrCreate?: KelasCreateOrConnectWithoutSantriInput
    upsert?: KelasUpsertWithoutSantriInput
    disconnect?: KelasWhereInput | boolean
    delete?: KelasWhereInput | boolean
    connect?: KelasWhereUniqueInput
    update?: XOR<XOR<KelasUpdateToOneWithWhereWithoutSantriInput, KelasUpdateWithoutSantriInput>, KelasUncheckedUpdateWithoutSantriInput>
  }

  export type KelasUpdateManyWithoutPengajarNestedInput = {
    create?: XOR<KelasCreateWithoutPengajarInput, KelasUncheckedCreateWithoutPengajarInput> | KelasCreateWithoutPengajarInput[] | KelasUncheckedCreateWithoutPengajarInput[]
    connectOrCreate?: KelasCreateOrConnectWithoutPengajarInput | KelasCreateOrConnectWithoutPengajarInput[]
    upsert?: KelasUpsertWithWhereUniqueWithoutPengajarInput | KelasUpsertWithWhereUniqueWithoutPengajarInput[]
    set?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
    disconnect?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
    delete?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
    connect?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
    update?: KelasUpdateWithWhereUniqueWithoutPengajarInput | KelasUpdateWithWhereUniqueWithoutPengajarInput[]
    updateMany?: KelasUpdateManyWithWhereWithoutPengajarInput | KelasUpdateManyWithWhereWithoutPengajarInput[]
    deleteMany?: KelasScalarWhereInput | KelasScalarWhereInput[]
  }

  export type AbsensiUpdateManyWithoutUserNestedInput = {
    create?: XOR<AbsensiCreateWithoutUserInput, AbsensiUncheckedCreateWithoutUserInput> | AbsensiCreateWithoutUserInput[] | AbsensiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutUserInput | AbsensiCreateOrConnectWithoutUserInput[]
    upsert?: AbsensiUpsertWithWhereUniqueWithoutUserInput | AbsensiUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AbsensiCreateManyUserInputEnvelope
    set?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    disconnect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    delete?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    update?: AbsensiUpdateWithWhereUniqueWithoutUserInput | AbsensiUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AbsensiUpdateManyWithWhereWithoutUserInput | AbsensiUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AbsensiScalarWhereInput | AbsensiScalarWhereInput[]
  }

  export type IzinUpdateManyWithoutUserNestedInput = {
    create?: XOR<IzinCreateWithoutUserInput, IzinUncheckedCreateWithoutUserInput> | IzinCreateWithoutUserInput[] | IzinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IzinCreateOrConnectWithoutUserInput | IzinCreateOrConnectWithoutUserInput[]
    upsert?: IzinUpsertWithWhereUniqueWithoutUserInput | IzinUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IzinCreateManyUserInputEnvelope
    set?: IzinWhereUniqueInput | IzinWhereUniqueInput[]
    disconnect?: IzinWhereUniqueInput | IzinWhereUniqueInput[]
    delete?: IzinWhereUniqueInput | IzinWhereUniqueInput[]
    connect?: IzinWhereUniqueInput | IzinWhereUniqueInput[]
    update?: IzinUpdateWithWhereUniqueWithoutUserInput | IzinUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IzinUpdateManyWithWhereWithoutUserInput | IzinUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IzinScalarWhereInput | IzinScalarWhereInput[]
  }

  export type TugasUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<TugasCreateWithoutCreatorInput, TugasUncheckedCreateWithoutCreatorInput> | TugasCreateWithoutCreatorInput[] | TugasUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TugasCreateOrConnectWithoutCreatorInput | TugasCreateOrConnectWithoutCreatorInput[]
    upsert?: TugasUpsertWithWhereUniqueWithoutCreatorInput | TugasUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: TugasCreateManyCreatorInputEnvelope
    set?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    disconnect?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    delete?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    connect?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    update?: TugasUpdateWithWhereUniqueWithoutCreatorInput | TugasUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: TugasUpdateManyWithWhereWithoutCreatorInput | TugasUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: TugasScalarWhereInput | TugasScalarWhereInput[]
  }

  export type SubmissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type LogAktivitasUpdateManyWithoutUserNestedInput = {
    create?: XOR<LogAktivitasCreateWithoutUserInput, LogAktivitasUncheckedCreateWithoutUserInput> | LogAktivitasCreateWithoutUserInput[] | LogAktivitasUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogAktivitasCreateOrConnectWithoutUserInput | LogAktivitasCreateOrConnectWithoutUserInput[]
    upsert?: LogAktivitasUpsertWithWhereUniqueWithoutUserInput | LogAktivitasUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LogAktivitasCreateManyUserInputEnvelope
    set?: LogAktivitasWhereUniqueInput | LogAktivitasWhereUniqueInput[]
    disconnect?: LogAktivitasWhereUniqueInput | LogAktivitasWhereUniqueInput[]
    delete?: LogAktivitasWhereUniqueInput | LogAktivitasWhereUniqueInput[]
    connect?: LogAktivitasWhereUniqueInput | LogAktivitasWhereUniqueInput[]
    update?: LogAktivitasUpdateWithWhereUniqueWithoutUserInput | LogAktivitasUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LogAktivitasUpdateManyWithWhereWithoutUserInput | LogAktivitasUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LogAktivitasScalarWhereInput | LogAktivitasScalarWhereInput[]
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type KelasUncheckedUpdateManyWithoutPengajarNestedInput = {
    create?: XOR<KelasCreateWithoutPengajarInput, KelasUncheckedCreateWithoutPengajarInput> | KelasCreateWithoutPengajarInput[] | KelasUncheckedCreateWithoutPengajarInput[]
    connectOrCreate?: KelasCreateOrConnectWithoutPengajarInput | KelasCreateOrConnectWithoutPengajarInput[]
    upsert?: KelasUpsertWithWhereUniqueWithoutPengajarInput | KelasUpsertWithWhereUniqueWithoutPengajarInput[]
    set?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
    disconnect?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
    delete?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
    connect?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
    update?: KelasUpdateWithWhereUniqueWithoutPengajarInput | KelasUpdateWithWhereUniqueWithoutPengajarInput[]
    updateMany?: KelasUpdateManyWithWhereWithoutPengajarInput | KelasUpdateManyWithWhereWithoutPengajarInput[]
    deleteMany?: KelasScalarWhereInput | KelasScalarWhereInput[]
  }

  export type AbsensiUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AbsensiCreateWithoutUserInput, AbsensiUncheckedCreateWithoutUserInput> | AbsensiCreateWithoutUserInput[] | AbsensiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutUserInput | AbsensiCreateOrConnectWithoutUserInput[]
    upsert?: AbsensiUpsertWithWhereUniqueWithoutUserInput | AbsensiUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AbsensiCreateManyUserInputEnvelope
    set?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    disconnect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    delete?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    update?: AbsensiUpdateWithWhereUniqueWithoutUserInput | AbsensiUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AbsensiUpdateManyWithWhereWithoutUserInput | AbsensiUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AbsensiScalarWhereInput | AbsensiScalarWhereInput[]
  }

  export type IzinUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<IzinCreateWithoutUserInput, IzinUncheckedCreateWithoutUserInput> | IzinCreateWithoutUserInput[] | IzinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IzinCreateOrConnectWithoutUserInput | IzinCreateOrConnectWithoutUserInput[]
    upsert?: IzinUpsertWithWhereUniqueWithoutUserInput | IzinUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IzinCreateManyUserInputEnvelope
    set?: IzinWhereUniqueInput | IzinWhereUniqueInput[]
    disconnect?: IzinWhereUniqueInput | IzinWhereUniqueInput[]
    delete?: IzinWhereUniqueInput | IzinWhereUniqueInput[]
    connect?: IzinWhereUniqueInput | IzinWhereUniqueInput[]
    update?: IzinUpdateWithWhereUniqueWithoutUserInput | IzinUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IzinUpdateManyWithWhereWithoutUserInput | IzinUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IzinScalarWhereInput | IzinScalarWhereInput[]
  }

  export type TugasUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<TugasCreateWithoutCreatorInput, TugasUncheckedCreateWithoutCreatorInput> | TugasCreateWithoutCreatorInput[] | TugasUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TugasCreateOrConnectWithoutCreatorInput | TugasCreateOrConnectWithoutCreatorInput[]
    upsert?: TugasUpsertWithWhereUniqueWithoutCreatorInput | TugasUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: TugasCreateManyCreatorInputEnvelope
    set?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    disconnect?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    delete?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    connect?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    update?: TugasUpdateWithWhereUniqueWithoutCreatorInput | TugasUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: TugasUpdateManyWithWhereWithoutCreatorInput | TugasUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: TugasScalarWhereInput | TugasScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type LogAktivitasUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LogAktivitasCreateWithoutUserInput, LogAktivitasUncheckedCreateWithoutUserInput> | LogAktivitasCreateWithoutUserInput[] | LogAktivitasUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogAktivitasCreateOrConnectWithoutUserInput | LogAktivitasCreateOrConnectWithoutUserInput[]
    upsert?: LogAktivitasUpsertWithWhereUniqueWithoutUserInput | LogAktivitasUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LogAktivitasCreateManyUserInputEnvelope
    set?: LogAktivitasWhereUniqueInput | LogAktivitasWhereUniqueInput[]
    disconnect?: LogAktivitasWhereUniqueInput | LogAktivitasWhereUniqueInput[]
    delete?: LogAktivitasWhereUniqueInput | LogAktivitasWhereUniqueInput[]
    connect?: LogAktivitasWhereUniqueInput | LogAktivitasWhereUniqueInput[]
    update?: LogAktivitasUpdateWithWhereUniqueWithoutUserInput | LogAktivitasUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LogAktivitasUpdateManyWithWhereWithoutUserInput | LogAktivitasUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LogAktivitasScalarWhereInput | LogAktivitasScalarWhereInput[]
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumStatusAbsensiFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAbsensi | EnumStatusAbsensiFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAbsensi[] | ListEnumStatusAbsensiFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAbsensi[] | ListEnumStatusAbsensiFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAbsensiFilter<$PrismaModel> | $Enums.StatusAbsensi
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStatusAbsensiWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAbsensi | EnumStatusAbsensiFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAbsensi[] | ListEnumStatusAbsensiFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAbsensi[] | ListEnumStatusAbsensiFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAbsensiWithAggregatesFilter<$PrismaModel> | $Enums.StatusAbsensi
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusAbsensiFilter<$PrismaModel>
    _max?: NestedEnumStatusAbsensiFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumStatusIzinFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusIzin | EnumStatusIzinFieldRefInput<$PrismaModel>
    in?: $Enums.StatusIzin[] | ListEnumStatusIzinFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusIzin[] | ListEnumStatusIzinFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusIzinFilter<$PrismaModel> | $Enums.StatusIzin
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumStatusIzinWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusIzin | EnumStatusIzinFieldRefInput<$PrismaModel>
    in?: $Enums.StatusIzin[] | ListEnumStatusIzinFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusIzin[] | ListEnumStatusIzinFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusIzinWithAggregatesFilter<$PrismaModel> | $Enums.StatusIzin
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusIzinFilter<$PrismaModel>
    _max?: NestedEnumStatusIzinFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumHariFilter<$PrismaModel = never> = {
    equals?: $Enums.Hari | EnumHariFieldRefInput<$PrismaModel>
    in?: $Enums.Hari[] | ListEnumHariFieldRefInput<$PrismaModel>
    notIn?: $Enums.Hari[] | ListEnumHariFieldRefInput<$PrismaModel>
    not?: NestedEnumHariFilter<$PrismaModel> | $Enums.Hari
  }

  export type NestedEnumHariWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Hari | EnumHariFieldRefInput<$PrismaModel>
    in?: $Enums.Hari[] | ListEnumHariFieldRefInput<$PrismaModel>
    notIn?: $Enums.Hari[] | ListEnumHariFieldRefInput<$PrismaModel>
    not?: NestedEnumHariWithAggregatesFilter<$PrismaModel> | $Enums.Hari
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHariFilter<$PrismaModel>
    _max?: NestedEnumHariFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumStatusSubmissionFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSubmission | EnumStatusSubmissionFieldRefInput<$PrismaModel>
    in?: $Enums.StatusSubmission[] | ListEnumStatusSubmissionFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusSubmission[] | ListEnumStatusSubmissionFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusSubmissionFilter<$PrismaModel> | $Enums.StatusSubmission
  }

  export type NestedEnumStatusSubmissionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSubmission | EnumStatusSubmissionFieldRefInput<$PrismaModel>
    in?: $Enums.StatusSubmission[] | ListEnumStatusSubmissionFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusSubmission[] | ListEnumStatusSubmissionFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusSubmissionWithAggregatesFilter<$PrismaModel> | $Enums.StatusSubmission
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusSubmissionFilter<$PrismaModel>
    _max?: NestedEnumStatusSubmissionFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type UserCreateWithoutAbsensiInput = {
    name?: string | null
    email: string
    password?: string | null
    activatedAt?: Date | string | null
    isActive?: boolean
    otp?: string | null
    otpExpiresAt?: Date | string | null
    role?: $Enums.Role
    createdAt?: Date | string
    deletedAt?: Date | string | null
    kelas?: KelasCreateNestedOneWithoutSantriInput
    kelasAjar?: KelasCreateNestedManyWithoutPengajarInput
    izin?: IzinCreateNestedManyWithoutUserInput
    tugasDibuat?: TugasCreateNestedManyWithoutCreatorInput
    submission?: SubmissionCreateNestedManyWithoutUserInput
    log?: LogAktivitasCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAbsensiInput = {
    id?: number
    name?: string | null
    email: string
    password?: string | null
    activatedAt?: Date | string | null
    isActive?: boolean
    otp?: string | null
    otpExpiresAt?: Date | string | null
    role?: $Enums.Role
    kelasId?: number | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    kelasAjar?: KelasUncheckedCreateNestedManyWithoutPengajarInput
    izin?: IzinUncheckedCreateNestedManyWithoutUserInput
    tugasDibuat?: TugasUncheckedCreateNestedManyWithoutCreatorInput
    submission?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    log?: LogAktivitasUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAbsensiInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAbsensiInput, UserUncheckedCreateWithoutAbsensiInput>
  }

  export type KelasCreateWithoutAbsensiInput = {
    namaKelas: string
    deskripsi?: string | null
    santri?: UserCreateNestedManyWithoutKelasInput
    pengajar?: UserCreateNestedManyWithoutKelasAjarInput
    absensiSetting?: AbsensiSettingCreateNestedOneWithoutKelasInput
    jadwal?: JadwalAbsensiCreateNestedManyWithoutKelasInput
    izin?: IzinCreateNestedManyWithoutKelasInput
    tugas?: TugasCreateNestedManyWithoutKelasInput
  }

  export type KelasUncheckedCreateWithoutAbsensiInput = {
    id?: number
    namaKelas: string
    deskripsi?: string | null
    santri?: UserUncheckedCreateNestedManyWithoutKelasInput
    pengajar?: UserUncheckedCreateNestedManyWithoutKelasAjarInput
    absensiSetting?: AbsensiSettingUncheckedCreateNestedOneWithoutKelasInput
    jadwal?: JadwalAbsensiUncheckedCreateNestedManyWithoutKelasInput
    izin?: IzinUncheckedCreateNestedManyWithoutKelasInput
    tugas?: TugasUncheckedCreateNestedManyWithoutKelasInput
  }

  export type KelasCreateOrConnectWithoutAbsensiInput = {
    where: KelasWhereUniqueInput
    create: XOR<KelasCreateWithoutAbsensiInput, KelasUncheckedCreateWithoutAbsensiInput>
  }

  export type JadwalAbsensiCreateWithoutAbsensiInput = {
    hari: $Enums.Hari
    jamMulai: string
    jamSelesai: string
    tanggal: Date | string
    createdAt?: Date | string
    kelas: KelasCreateNestedOneWithoutJadwalInput
  }

  export type JadwalAbsensiUncheckedCreateWithoutAbsensiInput = {
    id?: number
    kelasId: number
    hari: $Enums.Hari
    jamMulai: string
    jamSelesai: string
    tanggal: Date | string
    createdAt?: Date | string
  }

  export type JadwalAbsensiCreateOrConnectWithoutAbsensiInput = {
    where: JadwalAbsensiWhereUniqueInput
    create: XOR<JadwalAbsensiCreateWithoutAbsensiInput, JadwalAbsensiUncheckedCreateWithoutAbsensiInput>
  }

  export type UserUpsertWithoutAbsensiInput = {
    update: XOR<UserUpdateWithoutAbsensiInput, UserUncheckedUpdateWithoutAbsensiInput>
    create: XOR<UserCreateWithoutAbsensiInput, UserUncheckedCreateWithoutAbsensiInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAbsensiInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAbsensiInput, UserUncheckedUpdateWithoutAbsensiInput>
  }

  export type UserUpdateWithoutAbsensiInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kelas?: KelasUpdateOneWithoutSantriNestedInput
    kelasAjar?: KelasUpdateManyWithoutPengajarNestedInput
    izin?: IzinUpdateManyWithoutUserNestedInput
    tugasDibuat?: TugasUpdateManyWithoutCreatorNestedInput
    submission?: SubmissionUpdateManyWithoutUserNestedInput
    log?: LogAktivitasUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAbsensiInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    kelasId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kelasAjar?: KelasUncheckedUpdateManyWithoutPengajarNestedInput
    izin?: IzinUncheckedUpdateManyWithoutUserNestedInput
    tugasDibuat?: TugasUncheckedUpdateManyWithoutCreatorNestedInput
    submission?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    log?: LogAktivitasUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type KelasUpsertWithoutAbsensiInput = {
    update: XOR<KelasUpdateWithoutAbsensiInput, KelasUncheckedUpdateWithoutAbsensiInput>
    create: XOR<KelasCreateWithoutAbsensiInput, KelasUncheckedCreateWithoutAbsensiInput>
    where?: KelasWhereInput
  }

  export type KelasUpdateToOneWithWhereWithoutAbsensiInput = {
    where?: KelasWhereInput
    data: XOR<KelasUpdateWithoutAbsensiInput, KelasUncheckedUpdateWithoutAbsensiInput>
  }

  export type KelasUpdateWithoutAbsensiInput = {
    namaKelas?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    santri?: UserUpdateManyWithoutKelasNestedInput
    pengajar?: UserUpdateManyWithoutKelasAjarNestedInput
    absensiSetting?: AbsensiSettingUpdateOneWithoutKelasNestedInput
    jadwal?: JadwalAbsensiUpdateManyWithoutKelasNestedInput
    izin?: IzinUpdateManyWithoutKelasNestedInput
    tugas?: TugasUpdateManyWithoutKelasNestedInput
  }

  export type KelasUncheckedUpdateWithoutAbsensiInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaKelas?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    santri?: UserUncheckedUpdateManyWithoutKelasNestedInput
    pengajar?: UserUncheckedUpdateManyWithoutKelasAjarNestedInput
    absensiSetting?: AbsensiSettingUncheckedUpdateOneWithoutKelasNestedInput
    jadwal?: JadwalAbsensiUncheckedUpdateManyWithoutKelasNestedInput
    izin?: IzinUncheckedUpdateManyWithoutKelasNestedInput
    tugas?: TugasUncheckedUpdateManyWithoutKelasNestedInput
  }

  export type JadwalAbsensiUpsertWithoutAbsensiInput = {
    update: XOR<JadwalAbsensiUpdateWithoutAbsensiInput, JadwalAbsensiUncheckedUpdateWithoutAbsensiInput>
    create: XOR<JadwalAbsensiCreateWithoutAbsensiInput, JadwalAbsensiUncheckedCreateWithoutAbsensiInput>
    where?: JadwalAbsensiWhereInput
  }

  export type JadwalAbsensiUpdateToOneWithWhereWithoutAbsensiInput = {
    where?: JadwalAbsensiWhereInput
    data: XOR<JadwalAbsensiUpdateWithoutAbsensiInput, JadwalAbsensiUncheckedUpdateWithoutAbsensiInput>
  }

  export type JadwalAbsensiUpdateWithoutAbsensiInput = {
    hari?: EnumHariFieldUpdateOperationsInput | $Enums.Hari
    jamMulai?: StringFieldUpdateOperationsInput | string
    jamSelesai?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kelas?: KelasUpdateOneRequiredWithoutJadwalNestedInput
  }

  export type JadwalAbsensiUncheckedUpdateWithoutAbsensiInput = {
    id?: IntFieldUpdateOperationsInput | number
    kelasId?: IntFieldUpdateOperationsInput | number
    hari?: EnumHariFieldUpdateOperationsInput | $Enums.Hari
    jamMulai?: StringFieldUpdateOperationsInput | string
    jamSelesai?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KelasCreateWithoutAbsensiSettingInput = {
    namaKelas: string
    deskripsi?: string | null
    santri?: UserCreateNestedManyWithoutKelasInput
    pengajar?: UserCreateNestedManyWithoutKelasAjarInput
    absensi?: AbsensiCreateNestedManyWithoutKelasInput
    jadwal?: JadwalAbsensiCreateNestedManyWithoutKelasInput
    izin?: IzinCreateNestedManyWithoutKelasInput
    tugas?: TugasCreateNestedManyWithoutKelasInput
  }

  export type KelasUncheckedCreateWithoutAbsensiSettingInput = {
    id?: number
    namaKelas: string
    deskripsi?: string | null
    santri?: UserUncheckedCreateNestedManyWithoutKelasInput
    pengajar?: UserUncheckedCreateNestedManyWithoutKelasAjarInput
    absensi?: AbsensiUncheckedCreateNestedManyWithoutKelasInput
    jadwal?: JadwalAbsensiUncheckedCreateNestedManyWithoutKelasInput
    izin?: IzinUncheckedCreateNestedManyWithoutKelasInput
    tugas?: TugasUncheckedCreateNestedManyWithoutKelasInput
  }

  export type KelasCreateOrConnectWithoutAbsensiSettingInput = {
    where: KelasWhereUniqueInput
    create: XOR<KelasCreateWithoutAbsensiSettingInput, KelasUncheckedCreateWithoutAbsensiSettingInput>
  }

  export type KelasUpsertWithoutAbsensiSettingInput = {
    update: XOR<KelasUpdateWithoutAbsensiSettingInput, KelasUncheckedUpdateWithoutAbsensiSettingInput>
    create: XOR<KelasCreateWithoutAbsensiSettingInput, KelasUncheckedCreateWithoutAbsensiSettingInput>
    where?: KelasWhereInput
  }

  export type KelasUpdateToOneWithWhereWithoutAbsensiSettingInput = {
    where?: KelasWhereInput
    data: XOR<KelasUpdateWithoutAbsensiSettingInput, KelasUncheckedUpdateWithoutAbsensiSettingInput>
  }

  export type KelasUpdateWithoutAbsensiSettingInput = {
    namaKelas?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    santri?: UserUpdateManyWithoutKelasNestedInput
    pengajar?: UserUpdateManyWithoutKelasAjarNestedInput
    absensi?: AbsensiUpdateManyWithoutKelasNestedInput
    jadwal?: JadwalAbsensiUpdateManyWithoutKelasNestedInput
    izin?: IzinUpdateManyWithoutKelasNestedInput
    tugas?: TugasUpdateManyWithoutKelasNestedInput
  }

  export type KelasUncheckedUpdateWithoutAbsensiSettingInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaKelas?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    santri?: UserUncheckedUpdateManyWithoutKelasNestedInput
    pengajar?: UserUncheckedUpdateManyWithoutKelasAjarNestedInput
    absensi?: AbsensiUncheckedUpdateManyWithoutKelasNestedInput
    jadwal?: JadwalAbsensiUncheckedUpdateManyWithoutKelasNestedInput
    izin?: IzinUncheckedUpdateManyWithoutKelasNestedInput
    tugas?: TugasUncheckedUpdateManyWithoutKelasNestedInput
  }

  export type UserCreateWithoutIzinInput = {
    name?: string | null
    email: string
    password?: string | null
    activatedAt?: Date | string | null
    isActive?: boolean
    otp?: string | null
    otpExpiresAt?: Date | string | null
    role?: $Enums.Role
    createdAt?: Date | string
    deletedAt?: Date | string | null
    kelas?: KelasCreateNestedOneWithoutSantriInput
    kelasAjar?: KelasCreateNestedManyWithoutPengajarInput
    absensi?: AbsensiCreateNestedManyWithoutUserInput
    tugasDibuat?: TugasCreateNestedManyWithoutCreatorInput
    submission?: SubmissionCreateNestedManyWithoutUserInput
    log?: LogAktivitasCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutIzinInput = {
    id?: number
    name?: string | null
    email: string
    password?: string | null
    activatedAt?: Date | string | null
    isActive?: boolean
    otp?: string | null
    otpExpiresAt?: Date | string | null
    role?: $Enums.Role
    kelasId?: number | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    kelasAjar?: KelasUncheckedCreateNestedManyWithoutPengajarInput
    absensi?: AbsensiUncheckedCreateNestedManyWithoutUserInput
    tugasDibuat?: TugasUncheckedCreateNestedManyWithoutCreatorInput
    submission?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    log?: LogAktivitasUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutIzinInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIzinInput, UserUncheckedCreateWithoutIzinInput>
  }

  export type KelasCreateWithoutIzinInput = {
    namaKelas: string
    deskripsi?: string | null
    santri?: UserCreateNestedManyWithoutKelasInput
    pengajar?: UserCreateNestedManyWithoutKelasAjarInput
    absensiSetting?: AbsensiSettingCreateNestedOneWithoutKelasInput
    absensi?: AbsensiCreateNestedManyWithoutKelasInput
    jadwal?: JadwalAbsensiCreateNestedManyWithoutKelasInput
    tugas?: TugasCreateNestedManyWithoutKelasInput
  }

  export type KelasUncheckedCreateWithoutIzinInput = {
    id?: number
    namaKelas: string
    deskripsi?: string | null
    santri?: UserUncheckedCreateNestedManyWithoutKelasInput
    pengajar?: UserUncheckedCreateNestedManyWithoutKelasAjarInput
    absensiSetting?: AbsensiSettingUncheckedCreateNestedOneWithoutKelasInput
    absensi?: AbsensiUncheckedCreateNestedManyWithoutKelasInput
    jadwal?: JadwalAbsensiUncheckedCreateNestedManyWithoutKelasInput
    tugas?: TugasUncheckedCreateNestedManyWithoutKelasInput
  }

  export type KelasCreateOrConnectWithoutIzinInput = {
    where: KelasWhereUniqueInput
    create: XOR<KelasCreateWithoutIzinInput, KelasUncheckedCreateWithoutIzinInput>
  }

  export type UserUpsertWithoutIzinInput = {
    update: XOR<UserUpdateWithoutIzinInput, UserUncheckedUpdateWithoutIzinInput>
    create: XOR<UserCreateWithoutIzinInput, UserUncheckedCreateWithoutIzinInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIzinInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIzinInput, UserUncheckedUpdateWithoutIzinInput>
  }

  export type UserUpdateWithoutIzinInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kelas?: KelasUpdateOneWithoutSantriNestedInput
    kelasAjar?: KelasUpdateManyWithoutPengajarNestedInput
    absensi?: AbsensiUpdateManyWithoutUserNestedInput
    tugasDibuat?: TugasUpdateManyWithoutCreatorNestedInput
    submission?: SubmissionUpdateManyWithoutUserNestedInput
    log?: LogAktivitasUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutIzinInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    kelasId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kelasAjar?: KelasUncheckedUpdateManyWithoutPengajarNestedInput
    absensi?: AbsensiUncheckedUpdateManyWithoutUserNestedInput
    tugasDibuat?: TugasUncheckedUpdateManyWithoutCreatorNestedInput
    submission?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    log?: LogAktivitasUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type KelasUpsertWithoutIzinInput = {
    update: XOR<KelasUpdateWithoutIzinInput, KelasUncheckedUpdateWithoutIzinInput>
    create: XOR<KelasCreateWithoutIzinInput, KelasUncheckedCreateWithoutIzinInput>
    where?: KelasWhereInput
  }

  export type KelasUpdateToOneWithWhereWithoutIzinInput = {
    where?: KelasWhereInput
    data: XOR<KelasUpdateWithoutIzinInput, KelasUncheckedUpdateWithoutIzinInput>
  }

  export type KelasUpdateWithoutIzinInput = {
    namaKelas?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    santri?: UserUpdateManyWithoutKelasNestedInput
    pengajar?: UserUpdateManyWithoutKelasAjarNestedInput
    absensiSetting?: AbsensiSettingUpdateOneWithoutKelasNestedInput
    absensi?: AbsensiUpdateManyWithoutKelasNestedInput
    jadwal?: JadwalAbsensiUpdateManyWithoutKelasNestedInput
    tugas?: TugasUpdateManyWithoutKelasNestedInput
  }

  export type KelasUncheckedUpdateWithoutIzinInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaKelas?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    santri?: UserUncheckedUpdateManyWithoutKelasNestedInput
    pengajar?: UserUncheckedUpdateManyWithoutKelasAjarNestedInput
    absensiSetting?: AbsensiSettingUncheckedUpdateOneWithoutKelasNestedInput
    absensi?: AbsensiUncheckedUpdateManyWithoutKelasNestedInput
    jadwal?: JadwalAbsensiUncheckedUpdateManyWithoutKelasNestedInput
    tugas?: TugasUncheckedUpdateManyWithoutKelasNestedInput
  }

  export type KelasCreateWithoutJadwalInput = {
    namaKelas: string
    deskripsi?: string | null
    santri?: UserCreateNestedManyWithoutKelasInput
    pengajar?: UserCreateNestedManyWithoutKelasAjarInput
    absensiSetting?: AbsensiSettingCreateNestedOneWithoutKelasInput
    absensi?: AbsensiCreateNestedManyWithoutKelasInput
    izin?: IzinCreateNestedManyWithoutKelasInput
    tugas?: TugasCreateNestedManyWithoutKelasInput
  }

  export type KelasUncheckedCreateWithoutJadwalInput = {
    id?: number
    namaKelas: string
    deskripsi?: string | null
    santri?: UserUncheckedCreateNestedManyWithoutKelasInput
    pengajar?: UserUncheckedCreateNestedManyWithoutKelasAjarInput
    absensiSetting?: AbsensiSettingUncheckedCreateNestedOneWithoutKelasInput
    absensi?: AbsensiUncheckedCreateNestedManyWithoutKelasInput
    izin?: IzinUncheckedCreateNestedManyWithoutKelasInput
    tugas?: TugasUncheckedCreateNestedManyWithoutKelasInput
  }

  export type KelasCreateOrConnectWithoutJadwalInput = {
    where: KelasWhereUniqueInput
    create: XOR<KelasCreateWithoutJadwalInput, KelasUncheckedCreateWithoutJadwalInput>
  }

  export type AbsensiCreateWithoutJadwalInput = {
    tanggal: Date | string
    status: $Enums.StatusAbsensi
    createdAt?: Date | string
    aiComment?: string | null
    aiTone?: string | null
    aiConfidence?: number | null
    user: UserCreateNestedOneWithoutAbsensiInput
    kelas: KelasCreateNestedOneWithoutAbsensiInput
  }

  export type AbsensiUncheckedCreateWithoutJadwalInput = {
    id?: number
    userId: number
    kelasId: number
    tanggal: Date | string
    status: $Enums.StatusAbsensi
    createdAt?: Date | string
    aiComment?: string | null
    aiTone?: string | null
    aiConfidence?: number | null
  }

  export type AbsensiCreateOrConnectWithoutJadwalInput = {
    where: AbsensiWhereUniqueInput
    create: XOR<AbsensiCreateWithoutJadwalInput, AbsensiUncheckedCreateWithoutJadwalInput>
  }

  export type AbsensiCreateManyJadwalInputEnvelope = {
    data: AbsensiCreateManyJadwalInput | AbsensiCreateManyJadwalInput[]
    skipDuplicates?: boolean
  }

  export type KelasUpsertWithoutJadwalInput = {
    update: XOR<KelasUpdateWithoutJadwalInput, KelasUncheckedUpdateWithoutJadwalInput>
    create: XOR<KelasCreateWithoutJadwalInput, KelasUncheckedCreateWithoutJadwalInput>
    where?: KelasWhereInput
  }

  export type KelasUpdateToOneWithWhereWithoutJadwalInput = {
    where?: KelasWhereInput
    data: XOR<KelasUpdateWithoutJadwalInput, KelasUncheckedUpdateWithoutJadwalInput>
  }

  export type KelasUpdateWithoutJadwalInput = {
    namaKelas?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    santri?: UserUpdateManyWithoutKelasNestedInput
    pengajar?: UserUpdateManyWithoutKelasAjarNestedInput
    absensiSetting?: AbsensiSettingUpdateOneWithoutKelasNestedInput
    absensi?: AbsensiUpdateManyWithoutKelasNestedInput
    izin?: IzinUpdateManyWithoutKelasNestedInput
    tugas?: TugasUpdateManyWithoutKelasNestedInput
  }

  export type KelasUncheckedUpdateWithoutJadwalInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaKelas?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    santri?: UserUncheckedUpdateManyWithoutKelasNestedInput
    pengajar?: UserUncheckedUpdateManyWithoutKelasAjarNestedInput
    absensiSetting?: AbsensiSettingUncheckedUpdateOneWithoutKelasNestedInput
    absensi?: AbsensiUncheckedUpdateManyWithoutKelasNestedInput
    izin?: IzinUncheckedUpdateManyWithoutKelasNestedInput
    tugas?: TugasUncheckedUpdateManyWithoutKelasNestedInput
  }

  export type AbsensiUpsertWithWhereUniqueWithoutJadwalInput = {
    where: AbsensiWhereUniqueInput
    update: XOR<AbsensiUpdateWithoutJadwalInput, AbsensiUncheckedUpdateWithoutJadwalInput>
    create: XOR<AbsensiCreateWithoutJadwalInput, AbsensiUncheckedCreateWithoutJadwalInput>
  }

  export type AbsensiUpdateWithWhereUniqueWithoutJadwalInput = {
    where: AbsensiWhereUniqueInput
    data: XOR<AbsensiUpdateWithoutJadwalInput, AbsensiUncheckedUpdateWithoutJadwalInput>
  }

  export type AbsensiUpdateManyWithWhereWithoutJadwalInput = {
    where: AbsensiScalarWhereInput
    data: XOR<AbsensiUpdateManyMutationInput, AbsensiUncheckedUpdateManyWithoutJadwalInput>
  }

  export type AbsensiScalarWhereInput = {
    AND?: AbsensiScalarWhereInput | AbsensiScalarWhereInput[]
    OR?: AbsensiScalarWhereInput[]
    NOT?: AbsensiScalarWhereInput | AbsensiScalarWhereInput[]
    id?: IntFilter<"Absensi"> | number
    userId?: IntFilter<"Absensi"> | number
    kelasId?: IntFilter<"Absensi"> | number
    jadwalId?: IntNullableFilter<"Absensi"> | number | null
    tanggal?: DateTimeFilter<"Absensi"> | Date | string
    status?: EnumStatusAbsensiFilter<"Absensi"> | $Enums.StatusAbsensi
    createdAt?: DateTimeFilter<"Absensi"> | Date | string
    aiComment?: StringNullableFilter<"Absensi"> | string | null
    aiTone?: StringNullableFilter<"Absensi"> | string | null
    aiConfidence?: FloatNullableFilter<"Absensi"> | number | null
  }

  export type UserCreateWithoutKelasInput = {
    name?: string | null
    email: string
    password?: string | null
    activatedAt?: Date | string | null
    isActive?: boolean
    otp?: string | null
    otpExpiresAt?: Date | string | null
    role?: $Enums.Role
    createdAt?: Date | string
    deletedAt?: Date | string | null
    kelasAjar?: KelasCreateNestedManyWithoutPengajarInput
    absensi?: AbsensiCreateNestedManyWithoutUserInput
    izin?: IzinCreateNestedManyWithoutUserInput
    tugasDibuat?: TugasCreateNestedManyWithoutCreatorInput
    submission?: SubmissionCreateNestedManyWithoutUserInput
    log?: LogAktivitasCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutKelasInput = {
    id?: number
    name?: string | null
    email: string
    password?: string | null
    activatedAt?: Date | string | null
    isActive?: boolean
    otp?: string | null
    otpExpiresAt?: Date | string | null
    role?: $Enums.Role
    createdAt?: Date | string
    deletedAt?: Date | string | null
    kelasAjar?: KelasUncheckedCreateNestedManyWithoutPengajarInput
    absensi?: AbsensiUncheckedCreateNestedManyWithoutUserInput
    izin?: IzinUncheckedCreateNestedManyWithoutUserInput
    tugasDibuat?: TugasUncheckedCreateNestedManyWithoutCreatorInput
    submission?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    log?: LogAktivitasUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutKelasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutKelasInput, UserUncheckedCreateWithoutKelasInput>
  }

  export type UserCreateManyKelasInputEnvelope = {
    data: UserCreateManyKelasInput | UserCreateManyKelasInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutKelasAjarInput = {
    name?: string | null
    email: string
    password?: string | null
    activatedAt?: Date | string | null
    isActive?: boolean
    otp?: string | null
    otpExpiresAt?: Date | string | null
    role?: $Enums.Role
    createdAt?: Date | string
    deletedAt?: Date | string | null
    kelas?: KelasCreateNestedOneWithoutSantriInput
    absensi?: AbsensiCreateNestedManyWithoutUserInput
    izin?: IzinCreateNestedManyWithoutUserInput
    tugasDibuat?: TugasCreateNestedManyWithoutCreatorInput
    submission?: SubmissionCreateNestedManyWithoutUserInput
    log?: LogAktivitasCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutKelasAjarInput = {
    id?: number
    name?: string | null
    email: string
    password?: string | null
    activatedAt?: Date | string | null
    isActive?: boolean
    otp?: string | null
    otpExpiresAt?: Date | string | null
    role?: $Enums.Role
    kelasId?: number | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    absensi?: AbsensiUncheckedCreateNestedManyWithoutUserInput
    izin?: IzinUncheckedCreateNestedManyWithoutUserInput
    tugasDibuat?: TugasUncheckedCreateNestedManyWithoutCreatorInput
    submission?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    log?: LogAktivitasUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutKelasAjarInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutKelasAjarInput, UserUncheckedCreateWithoutKelasAjarInput>
  }

  export type AbsensiSettingCreateWithoutKelasInput = {
    maxAbsen?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AbsensiSettingUncheckedCreateWithoutKelasInput = {
    id?: number
    maxAbsen?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AbsensiSettingCreateOrConnectWithoutKelasInput = {
    where: AbsensiSettingWhereUniqueInput
    create: XOR<AbsensiSettingCreateWithoutKelasInput, AbsensiSettingUncheckedCreateWithoutKelasInput>
  }

  export type AbsensiCreateWithoutKelasInput = {
    tanggal: Date | string
    status: $Enums.StatusAbsensi
    createdAt?: Date | string
    aiComment?: string | null
    aiTone?: string | null
    aiConfidence?: number | null
    user: UserCreateNestedOneWithoutAbsensiInput
    jadwal?: JadwalAbsensiCreateNestedOneWithoutAbsensiInput
  }

  export type AbsensiUncheckedCreateWithoutKelasInput = {
    id?: number
    userId: number
    jadwalId?: number | null
    tanggal: Date | string
    status: $Enums.StatusAbsensi
    createdAt?: Date | string
    aiComment?: string | null
    aiTone?: string | null
    aiConfidence?: number | null
  }

  export type AbsensiCreateOrConnectWithoutKelasInput = {
    where: AbsensiWhereUniqueInput
    create: XOR<AbsensiCreateWithoutKelasInput, AbsensiUncheckedCreateWithoutKelasInput>
  }

  export type AbsensiCreateManyKelasInputEnvelope = {
    data: AbsensiCreateManyKelasInput | AbsensiCreateManyKelasInput[]
    skipDuplicates?: boolean
  }

  export type JadwalAbsensiCreateWithoutKelasInput = {
    hari: $Enums.Hari
    jamMulai: string
    jamSelesai: string
    tanggal: Date | string
    createdAt?: Date | string
    absensi?: AbsensiCreateNestedManyWithoutJadwalInput
  }

  export type JadwalAbsensiUncheckedCreateWithoutKelasInput = {
    id?: number
    hari: $Enums.Hari
    jamMulai: string
    jamSelesai: string
    tanggal: Date | string
    createdAt?: Date | string
    absensi?: AbsensiUncheckedCreateNestedManyWithoutJadwalInput
  }

  export type JadwalAbsensiCreateOrConnectWithoutKelasInput = {
    where: JadwalAbsensiWhereUniqueInput
    create: XOR<JadwalAbsensiCreateWithoutKelasInput, JadwalAbsensiUncheckedCreateWithoutKelasInput>
  }

  export type JadwalAbsensiCreateManyKelasInputEnvelope = {
    data: JadwalAbsensiCreateManyKelasInput | JadwalAbsensiCreateManyKelasInput[]
    skipDuplicates?: boolean
  }

  export type IzinCreateWithoutKelasInput = {
    tanggal: Date | string
    alasan: string
    status?: $Enums.StatusIzin
    createdAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutIzinInput
  }

  export type IzinUncheckedCreateWithoutKelasInput = {
    id?: number
    userId: number
    tanggal: Date | string
    alasan: string
    status?: $Enums.StatusIzin
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type IzinCreateOrConnectWithoutKelasInput = {
    where: IzinWhereUniqueInput
    create: XOR<IzinCreateWithoutKelasInput, IzinUncheckedCreateWithoutKelasInput>
  }

  export type IzinCreateManyKelasInputEnvelope = {
    data: IzinCreateManyKelasInput | IzinCreateManyKelasInput[]
    skipDuplicates?: boolean
  }

  export type TugasCreateWithoutKelasInput = {
    title: string
    description?: string | null
    deadline: Date | string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    mataPelajaran: MataPelajaranCreateNestedOneWithoutTugasInput
    creator: UserCreateNestedOneWithoutTugasDibuatInput
    submission?: SubmissionCreateNestedManyWithoutTugasInput
  }

  export type TugasUncheckedCreateWithoutKelasInput = {
    id?: number
    mataPelajaranId: number
    title: string
    description?: string | null
    deadline: Date | string
    createdBy: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    submission?: SubmissionUncheckedCreateNestedManyWithoutTugasInput
  }

  export type TugasCreateOrConnectWithoutKelasInput = {
    where: TugasWhereUniqueInput
    create: XOR<TugasCreateWithoutKelasInput, TugasUncheckedCreateWithoutKelasInput>
  }

  export type TugasCreateManyKelasInputEnvelope = {
    data: TugasCreateManyKelasInput | TugasCreateManyKelasInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutKelasInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutKelasInput, UserUncheckedUpdateWithoutKelasInput>
    create: XOR<UserCreateWithoutKelasInput, UserUncheckedCreateWithoutKelasInput>
  }

  export type UserUpdateWithWhereUniqueWithoutKelasInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutKelasInput, UserUncheckedUpdateWithoutKelasInput>
  }

  export type UserUpdateManyWithWhereWithoutKelasInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutKelasInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    activatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    isActive?: BoolFilter<"User"> | boolean
    otp?: StringNullableFilter<"User"> | string | null
    otpExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    kelasId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type UserUpsertWithWhereUniqueWithoutKelasAjarInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutKelasAjarInput, UserUncheckedUpdateWithoutKelasAjarInput>
    create: XOR<UserCreateWithoutKelasAjarInput, UserUncheckedCreateWithoutKelasAjarInput>
  }

  export type UserUpdateWithWhereUniqueWithoutKelasAjarInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutKelasAjarInput, UserUncheckedUpdateWithoutKelasAjarInput>
  }

  export type UserUpdateManyWithWhereWithoutKelasAjarInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutKelasAjarInput>
  }

  export type AbsensiSettingUpsertWithoutKelasInput = {
    update: XOR<AbsensiSettingUpdateWithoutKelasInput, AbsensiSettingUncheckedUpdateWithoutKelasInput>
    create: XOR<AbsensiSettingCreateWithoutKelasInput, AbsensiSettingUncheckedCreateWithoutKelasInput>
    where?: AbsensiSettingWhereInput
  }

  export type AbsensiSettingUpdateToOneWithWhereWithoutKelasInput = {
    where?: AbsensiSettingWhereInput
    data: XOR<AbsensiSettingUpdateWithoutKelasInput, AbsensiSettingUncheckedUpdateWithoutKelasInput>
  }

  export type AbsensiSettingUpdateWithoutKelasInput = {
    maxAbsen?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbsensiSettingUncheckedUpdateWithoutKelasInput = {
    id?: IntFieldUpdateOperationsInput | number
    maxAbsen?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbsensiUpsertWithWhereUniqueWithoutKelasInput = {
    where: AbsensiWhereUniqueInput
    update: XOR<AbsensiUpdateWithoutKelasInput, AbsensiUncheckedUpdateWithoutKelasInput>
    create: XOR<AbsensiCreateWithoutKelasInput, AbsensiUncheckedCreateWithoutKelasInput>
  }

  export type AbsensiUpdateWithWhereUniqueWithoutKelasInput = {
    where: AbsensiWhereUniqueInput
    data: XOR<AbsensiUpdateWithoutKelasInput, AbsensiUncheckedUpdateWithoutKelasInput>
  }

  export type AbsensiUpdateManyWithWhereWithoutKelasInput = {
    where: AbsensiScalarWhereInput
    data: XOR<AbsensiUpdateManyMutationInput, AbsensiUncheckedUpdateManyWithoutKelasInput>
  }

  export type JadwalAbsensiUpsertWithWhereUniqueWithoutKelasInput = {
    where: JadwalAbsensiWhereUniqueInput
    update: XOR<JadwalAbsensiUpdateWithoutKelasInput, JadwalAbsensiUncheckedUpdateWithoutKelasInput>
    create: XOR<JadwalAbsensiCreateWithoutKelasInput, JadwalAbsensiUncheckedCreateWithoutKelasInput>
  }

  export type JadwalAbsensiUpdateWithWhereUniqueWithoutKelasInput = {
    where: JadwalAbsensiWhereUniqueInput
    data: XOR<JadwalAbsensiUpdateWithoutKelasInput, JadwalAbsensiUncheckedUpdateWithoutKelasInput>
  }

  export type JadwalAbsensiUpdateManyWithWhereWithoutKelasInput = {
    where: JadwalAbsensiScalarWhereInput
    data: XOR<JadwalAbsensiUpdateManyMutationInput, JadwalAbsensiUncheckedUpdateManyWithoutKelasInput>
  }

  export type JadwalAbsensiScalarWhereInput = {
    AND?: JadwalAbsensiScalarWhereInput | JadwalAbsensiScalarWhereInput[]
    OR?: JadwalAbsensiScalarWhereInput[]
    NOT?: JadwalAbsensiScalarWhereInput | JadwalAbsensiScalarWhereInput[]
    id?: IntFilter<"JadwalAbsensi"> | number
    kelasId?: IntFilter<"JadwalAbsensi"> | number
    hari?: EnumHariFilter<"JadwalAbsensi"> | $Enums.Hari
    jamMulai?: StringFilter<"JadwalAbsensi"> | string
    jamSelesai?: StringFilter<"JadwalAbsensi"> | string
    tanggal?: DateTimeFilter<"JadwalAbsensi"> | Date | string
    createdAt?: DateTimeFilter<"JadwalAbsensi"> | Date | string
  }

  export type IzinUpsertWithWhereUniqueWithoutKelasInput = {
    where: IzinWhereUniqueInput
    update: XOR<IzinUpdateWithoutKelasInput, IzinUncheckedUpdateWithoutKelasInput>
    create: XOR<IzinCreateWithoutKelasInput, IzinUncheckedCreateWithoutKelasInput>
  }

  export type IzinUpdateWithWhereUniqueWithoutKelasInput = {
    where: IzinWhereUniqueInput
    data: XOR<IzinUpdateWithoutKelasInput, IzinUncheckedUpdateWithoutKelasInput>
  }

  export type IzinUpdateManyWithWhereWithoutKelasInput = {
    where: IzinScalarWhereInput
    data: XOR<IzinUpdateManyMutationInput, IzinUncheckedUpdateManyWithoutKelasInput>
  }

  export type IzinScalarWhereInput = {
    AND?: IzinScalarWhereInput | IzinScalarWhereInput[]
    OR?: IzinScalarWhereInput[]
    NOT?: IzinScalarWhereInput | IzinScalarWhereInput[]
    id?: IntFilter<"Izin"> | number
    userId?: IntFilter<"Izin"> | number
    kelasId?: IntFilter<"Izin"> | number
    tanggal?: DateTimeFilter<"Izin"> | Date | string
    alasan?: StringFilter<"Izin"> | string
    status?: EnumStatusIzinFilter<"Izin"> | $Enums.StatusIzin
    createdAt?: DateTimeFilter<"Izin"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Izin"> | Date | string | null
  }

  export type TugasUpsertWithWhereUniqueWithoutKelasInput = {
    where: TugasWhereUniqueInput
    update: XOR<TugasUpdateWithoutKelasInput, TugasUncheckedUpdateWithoutKelasInput>
    create: XOR<TugasCreateWithoutKelasInput, TugasUncheckedCreateWithoutKelasInput>
  }

  export type TugasUpdateWithWhereUniqueWithoutKelasInput = {
    where: TugasWhereUniqueInput
    data: XOR<TugasUpdateWithoutKelasInput, TugasUncheckedUpdateWithoutKelasInput>
  }

  export type TugasUpdateManyWithWhereWithoutKelasInput = {
    where: TugasScalarWhereInput
    data: XOR<TugasUpdateManyMutationInput, TugasUncheckedUpdateManyWithoutKelasInput>
  }

  export type TugasScalarWhereInput = {
    AND?: TugasScalarWhereInput | TugasScalarWhereInput[]
    OR?: TugasScalarWhereInput[]
    NOT?: TugasScalarWhereInput | TugasScalarWhereInput[]
    id?: IntFilter<"Tugas"> | number
    kelasId?: IntFilter<"Tugas"> | number
    mataPelajaranId?: IntFilter<"Tugas"> | number
    title?: StringFilter<"Tugas"> | string
    description?: StringNullableFilter<"Tugas"> | string | null
    deadline?: DateTimeFilter<"Tugas"> | Date | string
    createdBy?: IntFilter<"Tugas"> | number
    createdAt?: DateTimeFilter<"Tugas"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Tugas"> | Date | string | null
  }

  export type UserCreateWithoutLogInput = {
    name?: string | null
    email: string
    password?: string | null
    activatedAt?: Date | string | null
    isActive?: boolean
    otp?: string | null
    otpExpiresAt?: Date | string | null
    role?: $Enums.Role
    createdAt?: Date | string
    deletedAt?: Date | string | null
    kelas?: KelasCreateNestedOneWithoutSantriInput
    kelasAjar?: KelasCreateNestedManyWithoutPengajarInput
    absensi?: AbsensiCreateNestedManyWithoutUserInput
    izin?: IzinCreateNestedManyWithoutUserInput
    tugasDibuat?: TugasCreateNestedManyWithoutCreatorInput
    submission?: SubmissionCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLogInput = {
    id?: number
    name?: string | null
    email: string
    password?: string | null
    activatedAt?: Date | string | null
    isActive?: boolean
    otp?: string | null
    otpExpiresAt?: Date | string | null
    role?: $Enums.Role
    kelasId?: number | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    kelasAjar?: KelasUncheckedCreateNestedManyWithoutPengajarInput
    absensi?: AbsensiUncheckedCreateNestedManyWithoutUserInput
    izin?: IzinUncheckedCreateNestedManyWithoutUserInput
    tugasDibuat?: TugasUncheckedCreateNestedManyWithoutCreatorInput
    submission?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLogInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLogInput, UserUncheckedCreateWithoutLogInput>
  }

  export type UserUpsertWithoutLogInput = {
    update: XOR<UserUpdateWithoutLogInput, UserUncheckedUpdateWithoutLogInput>
    create: XOR<UserCreateWithoutLogInput, UserUncheckedCreateWithoutLogInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLogInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLogInput, UserUncheckedUpdateWithoutLogInput>
  }

  export type UserUpdateWithoutLogInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kelas?: KelasUpdateOneWithoutSantriNestedInput
    kelasAjar?: KelasUpdateManyWithoutPengajarNestedInput
    absensi?: AbsensiUpdateManyWithoutUserNestedInput
    izin?: IzinUpdateManyWithoutUserNestedInput
    tugasDibuat?: TugasUpdateManyWithoutCreatorNestedInput
    submission?: SubmissionUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLogInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    kelasId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kelasAjar?: KelasUncheckedUpdateManyWithoutPengajarNestedInput
    absensi?: AbsensiUncheckedUpdateManyWithoutUserNestedInput
    izin?: IzinUncheckedUpdateManyWithoutUserNestedInput
    tugasDibuat?: TugasUncheckedUpdateManyWithoutCreatorNestedInput
    submission?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TugasCreateWithoutMataPelajaranInput = {
    title: string
    description?: string | null
    deadline: Date | string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    kelas: KelasCreateNestedOneWithoutTugasInput
    creator: UserCreateNestedOneWithoutTugasDibuatInput
    submission?: SubmissionCreateNestedManyWithoutTugasInput
  }

  export type TugasUncheckedCreateWithoutMataPelajaranInput = {
    id?: number
    kelasId: number
    title: string
    description?: string | null
    deadline: Date | string
    createdBy: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    submission?: SubmissionUncheckedCreateNestedManyWithoutTugasInput
  }

  export type TugasCreateOrConnectWithoutMataPelajaranInput = {
    where: TugasWhereUniqueInput
    create: XOR<TugasCreateWithoutMataPelajaranInput, TugasUncheckedCreateWithoutMataPelajaranInput>
  }

  export type TugasCreateManyMataPelajaranInputEnvelope = {
    data: TugasCreateManyMataPelajaranInput | TugasCreateManyMataPelajaranInput[]
    skipDuplicates?: boolean
  }

  export type TugasUpsertWithWhereUniqueWithoutMataPelajaranInput = {
    where: TugasWhereUniqueInput
    update: XOR<TugasUpdateWithoutMataPelajaranInput, TugasUncheckedUpdateWithoutMataPelajaranInput>
    create: XOR<TugasCreateWithoutMataPelajaranInput, TugasUncheckedCreateWithoutMataPelajaranInput>
  }

  export type TugasUpdateWithWhereUniqueWithoutMataPelajaranInput = {
    where: TugasWhereUniqueInput
    data: XOR<TugasUpdateWithoutMataPelajaranInput, TugasUncheckedUpdateWithoutMataPelajaranInput>
  }

  export type TugasUpdateManyWithWhereWithoutMataPelajaranInput = {
    where: TugasScalarWhereInput
    data: XOR<TugasUpdateManyMutationInput, TugasUncheckedUpdateManyWithoutMataPelajaranInput>
  }

  export type SubmissionCreateWithoutNilaiInput = {
    fileUrl?: string | null
    linkUrl?: string | null
    status?: $Enums.StatusSubmission
    submittedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutSubmissionInput
    tugas: TugasCreateNestedOneWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutNilaiInput = {
    id?: number
    userId: number
    tugasId: number
    fileUrl?: string | null
    linkUrl?: string | null
    status?: $Enums.StatusSubmission
    submittedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SubmissionCreateOrConnectWithoutNilaiInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutNilaiInput, SubmissionUncheckedCreateWithoutNilaiInput>
  }

  export type SubmissionUpsertWithoutNilaiInput = {
    update: XOR<SubmissionUpdateWithoutNilaiInput, SubmissionUncheckedUpdateWithoutNilaiInput>
    create: XOR<SubmissionCreateWithoutNilaiInput, SubmissionUncheckedCreateWithoutNilaiInput>
    where?: SubmissionWhereInput
  }

  export type SubmissionUpdateToOneWithWhereWithoutNilaiInput = {
    where?: SubmissionWhereInput
    data: XOR<SubmissionUpdateWithoutNilaiInput, SubmissionUncheckedUpdateWithoutNilaiInput>
  }

  export type SubmissionUpdateWithoutNilaiInput = {
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusSubmissionFieldUpdateOperationsInput | $Enums.StatusSubmission
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutSubmissionNestedInput
    tugas?: TugasUpdateOneRequiredWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutNilaiInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    tugasId?: IntFieldUpdateOperationsInput | number
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusSubmissionFieldUpdateOperationsInput | $Enums.StatusSubmission
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateWithoutNotificationsInput = {
    name?: string | null
    email: string
    password?: string | null
    activatedAt?: Date | string | null
    isActive?: boolean
    otp?: string | null
    otpExpiresAt?: Date | string | null
    role?: $Enums.Role
    createdAt?: Date | string
    deletedAt?: Date | string | null
    kelas?: KelasCreateNestedOneWithoutSantriInput
    kelasAjar?: KelasCreateNestedManyWithoutPengajarInput
    absensi?: AbsensiCreateNestedManyWithoutUserInput
    izin?: IzinCreateNestedManyWithoutUserInput
    tugasDibuat?: TugasCreateNestedManyWithoutCreatorInput
    submission?: SubmissionCreateNestedManyWithoutUserInput
    log?: LogAktivitasCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: number
    name?: string | null
    email: string
    password?: string | null
    activatedAt?: Date | string | null
    isActive?: boolean
    otp?: string | null
    otpExpiresAt?: Date | string | null
    role?: $Enums.Role
    kelasId?: number | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    kelasAjar?: KelasUncheckedCreateNestedManyWithoutPengajarInput
    absensi?: AbsensiUncheckedCreateNestedManyWithoutUserInput
    izin?: IzinUncheckedCreateNestedManyWithoutUserInput
    tugasDibuat?: TugasUncheckedCreateNestedManyWithoutCreatorInput
    submission?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    log?: LogAktivitasUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kelas?: KelasUpdateOneWithoutSantriNestedInput
    kelasAjar?: KelasUpdateManyWithoutPengajarNestedInput
    absensi?: AbsensiUpdateManyWithoutUserNestedInput
    izin?: IzinUpdateManyWithoutUserNestedInput
    tugasDibuat?: TugasUpdateManyWithoutCreatorNestedInput
    submission?: SubmissionUpdateManyWithoutUserNestedInput
    log?: LogAktivitasUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    kelasId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kelasAjar?: KelasUncheckedUpdateManyWithoutPengajarNestedInput
    absensi?: AbsensiUncheckedUpdateManyWithoutUserNestedInput
    izin?: IzinUncheckedUpdateManyWithoutUserNestedInput
    tugasDibuat?: TugasUncheckedUpdateManyWithoutCreatorNestedInput
    submission?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    log?: LogAktivitasUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutProfileInput = {
    name?: string | null
    email: string
    password?: string | null
    activatedAt?: Date | string | null
    isActive?: boolean
    otp?: string | null
    otpExpiresAt?: Date | string | null
    role?: $Enums.Role
    createdAt?: Date | string
    deletedAt?: Date | string | null
    kelas?: KelasCreateNestedOneWithoutSantriInput
    kelasAjar?: KelasCreateNestedManyWithoutPengajarInput
    absensi?: AbsensiCreateNestedManyWithoutUserInput
    izin?: IzinCreateNestedManyWithoutUserInput
    tugasDibuat?: TugasCreateNestedManyWithoutCreatorInput
    submission?: SubmissionCreateNestedManyWithoutUserInput
    log?: LogAktivitasCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: number
    name?: string | null
    email: string
    password?: string | null
    activatedAt?: Date | string | null
    isActive?: boolean
    otp?: string | null
    otpExpiresAt?: Date | string | null
    role?: $Enums.Role
    kelasId?: number | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    kelasAjar?: KelasUncheckedCreateNestedManyWithoutPengajarInput
    absensi?: AbsensiUncheckedCreateNestedManyWithoutUserInput
    izin?: IzinUncheckedCreateNestedManyWithoutUserInput
    tugasDibuat?: TugasUncheckedCreateNestedManyWithoutCreatorInput
    submission?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    log?: LogAktivitasUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kelas?: KelasUpdateOneWithoutSantriNestedInput
    kelasAjar?: KelasUpdateManyWithoutPengajarNestedInput
    absensi?: AbsensiUpdateManyWithoutUserNestedInput
    izin?: IzinUpdateManyWithoutUserNestedInput
    tugasDibuat?: TugasUpdateManyWithoutCreatorNestedInput
    submission?: SubmissionUpdateManyWithoutUserNestedInput
    log?: LogAktivitasUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    kelasId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kelasAjar?: KelasUncheckedUpdateManyWithoutPengajarNestedInput
    absensi?: AbsensiUncheckedUpdateManyWithoutUserNestedInput
    izin?: IzinUncheckedUpdateManyWithoutUserNestedInput
    tugasDibuat?: TugasUncheckedUpdateManyWithoutCreatorNestedInput
    submission?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    log?: LogAktivitasUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSubmissionInput = {
    name?: string | null
    email: string
    password?: string | null
    activatedAt?: Date | string | null
    isActive?: boolean
    otp?: string | null
    otpExpiresAt?: Date | string | null
    role?: $Enums.Role
    createdAt?: Date | string
    deletedAt?: Date | string | null
    kelas?: KelasCreateNestedOneWithoutSantriInput
    kelasAjar?: KelasCreateNestedManyWithoutPengajarInput
    absensi?: AbsensiCreateNestedManyWithoutUserInput
    izin?: IzinCreateNestedManyWithoutUserInput
    tugasDibuat?: TugasCreateNestedManyWithoutCreatorInput
    log?: LogAktivitasCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubmissionInput = {
    id?: number
    name?: string | null
    email: string
    password?: string | null
    activatedAt?: Date | string | null
    isActive?: boolean
    otp?: string | null
    otpExpiresAt?: Date | string | null
    role?: $Enums.Role
    kelasId?: number | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    kelasAjar?: KelasUncheckedCreateNestedManyWithoutPengajarInput
    absensi?: AbsensiUncheckedCreateNestedManyWithoutUserInput
    izin?: IzinUncheckedCreateNestedManyWithoutUserInput
    tugasDibuat?: TugasUncheckedCreateNestedManyWithoutCreatorInput
    log?: LogAktivitasUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubmissionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubmissionInput, UserUncheckedCreateWithoutSubmissionInput>
  }

  export type TugasCreateWithoutSubmissionInput = {
    title: string
    description?: string | null
    deadline: Date | string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    kelas: KelasCreateNestedOneWithoutTugasInput
    mataPelajaran: MataPelajaranCreateNestedOneWithoutTugasInput
    creator: UserCreateNestedOneWithoutTugasDibuatInput
  }

  export type TugasUncheckedCreateWithoutSubmissionInput = {
    id?: number
    kelasId: number
    mataPelajaranId: number
    title: string
    description?: string | null
    deadline: Date | string
    createdBy: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TugasCreateOrConnectWithoutSubmissionInput = {
    where: TugasWhereUniqueInput
    create: XOR<TugasCreateWithoutSubmissionInput, TugasUncheckedCreateWithoutSubmissionInput>
  }

  export type NilaiCreateWithoutSubmissionInput = {
    nilai: number
    catatan?: string | null
    createdAt?: Date | string
  }

  export type NilaiUncheckedCreateWithoutSubmissionInput = {
    id?: number
    nilai: number
    catatan?: string | null
    createdAt?: Date | string
  }

  export type NilaiCreateOrConnectWithoutSubmissionInput = {
    where: NilaiWhereUniqueInput
    create: XOR<NilaiCreateWithoutSubmissionInput, NilaiUncheckedCreateWithoutSubmissionInput>
  }

  export type UserUpsertWithoutSubmissionInput = {
    update: XOR<UserUpdateWithoutSubmissionInput, UserUncheckedUpdateWithoutSubmissionInput>
    create: XOR<UserCreateWithoutSubmissionInput, UserUncheckedCreateWithoutSubmissionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubmissionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubmissionInput, UserUncheckedUpdateWithoutSubmissionInput>
  }

  export type UserUpdateWithoutSubmissionInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kelas?: KelasUpdateOneWithoutSantriNestedInput
    kelasAjar?: KelasUpdateManyWithoutPengajarNestedInput
    absensi?: AbsensiUpdateManyWithoutUserNestedInput
    izin?: IzinUpdateManyWithoutUserNestedInput
    tugasDibuat?: TugasUpdateManyWithoutCreatorNestedInput
    log?: LogAktivitasUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubmissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    kelasId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kelasAjar?: KelasUncheckedUpdateManyWithoutPengajarNestedInput
    absensi?: AbsensiUncheckedUpdateManyWithoutUserNestedInput
    izin?: IzinUncheckedUpdateManyWithoutUserNestedInput
    tugasDibuat?: TugasUncheckedUpdateManyWithoutCreatorNestedInput
    log?: LogAktivitasUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TugasUpsertWithoutSubmissionInput = {
    update: XOR<TugasUpdateWithoutSubmissionInput, TugasUncheckedUpdateWithoutSubmissionInput>
    create: XOR<TugasCreateWithoutSubmissionInput, TugasUncheckedCreateWithoutSubmissionInput>
    where?: TugasWhereInput
  }

  export type TugasUpdateToOneWithWhereWithoutSubmissionInput = {
    where?: TugasWhereInput
    data: XOR<TugasUpdateWithoutSubmissionInput, TugasUncheckedUpdateWithoutSubmissionInput>
  }

  export type TugasUpdateWithoutSubmissionInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kelas?: KelasUpdateOneRequiredWithoutTugasNestedInput
    mataPelajaran?: MataPelajaranUpdateOneRequiredWithoutTugasNestedInput
    creator?: UserUpdateOneRequiredWithoutTugasDibuatNestedInput
  }

  export type TugasUncheckedUpdateWithoutSubmissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    kelasId?: IntFieldUpdateOperationsInput | number
    mataPelajaranId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NilaiUpsertWithoutSubmissionInput = {
    update: XOR<NilaiUpdateWithoutSubmissionInput, NilaiUncheckedUpdateWithoutSubmissionInput>
    create: XOR<NilaiCreateWithoutSubmissionInput, NilaiUncheckedCreateWithoutSubmissionInput>
    where?: NilaiWhereInput
  }

  export type NilaiUpdateToOneWithWhereWithoutSubmissionInput = {
    where?: NilaiWhereInput
    data: XOR<NilaiUpdateWithoutSubmissionInput, NilaiUncheckedUpdateWithoutSubmissionInput>
  }

  export type NilaiUpdateWithoutSubmissionInput = {
    nilai?: IntFieldUpdateOperationsInput | number
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NilaiUncheckedUpdateWithoutSubmissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    nilai?: IntFieldUpdateOperationsInput | number
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KelasCreateWithoutTugasInput = {
    namaKelas: string
    deskripsi?: string | null
    santri?: UserCreateNestedManyWithoutKelasInput
    pengajar?: UserCreateNestedManyWithoutKelasAjarInput
    absensiSetting?: AbsensiSettingCreateNestedOneWithoutKelasInput
    absensi?: AbsensiCreateNestedManyWithoutKelasInput
    jadwal?: JadwalAbsensiCreateNestedManyWithoutKelasInput
    izin?: IzinCreateNestedManyWithoutKelasInput
  }

  export type KelasUncheckedCreateWithoutTugasInput = {
    id?: number
    namaKelas: string
    deskripsi?: string | null
    santri?: UserUncheckedCreateNestedManyWithoutKelasInput
    pengajar?: UserUncheckedCreateNestedManyWithoutKelasAjarInput
    absensiSetting?: AbsensiSettingUncheckedCreateNestedOneWithoutKelasInput
    absensi?: AbsensiUncheckedCreateNestedManyWithoutKelasInput
    jadwal?: JadwalAbsensiUncheckedCreateNestedManyWithoutKelasInput
    izin?: IzinUncheckedCreateNestedManyWithoutKelasInput
  }

  export type KelasCreateOrConnectWithoutTugasInput = {
    where: KelasWhereUniqueInput
    create: XOR<KelasCreateWithoutTugasInput, KelasUncheckedCreateWithoutTugasInput>
  }

  export type MataPelajaranCreateWithoutTugasInput = {
    nama: string
    kode: string
    createdAt?: Date | string
  }

  export type MataPelajaranUncheckedCreateWithoutTugasInput = {
    id?: number
    nama: string
    kode: string
    createdAt?: Date | string
  }

  export type MataPelajaranCreateOrConnectWithoutTugasInput = {
    where: MataPelajaranWhereUniqueInput
    create: XOR<MataPelajaranCreateWithoutTugasInput, MataPelajaranUncheckedCreateWithoutTugasInput>
  }

  export type UserCreateWithoutTugasDibuatInput = {
    name?: string | null
    email: string
    password?: string | null
    activatedAt?: Date | string | null
    isActive?: boolean
    otp?: string | null
    otpExpiresAt?: Date | string | null
    role?: $Enums.Role
    createdAt?: Date | string
    deletedAt?: Date | string | null
    kelas?: KelasCreateNestedOneWithoutSantriInput
    kelasAjar?: KelasCreateNestedManyWithoutPengajarInput
    absensi?: AbsensiCreateNestedManyWithoutUserInput
    izin?: IzinCreateNestedManyWithoutUserInput
    submission?: SubmissionCreateNestedManyWithoutUserInput
    log?: LogAktivitasCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTugasDibuatInput = {
    id?: number
    name?: string | null
    email: string
    password?: string | null
    activatedAt?: Date | string | null
    isActive?: boolean
    otp?: string | null
    otpExpiresAt?: Date | string | null
    role?: $Enums.Role
    kelasId?: number | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    kelasAjar?: KelasUncheckedCreateNestedManyWithoutPengajarInput
    absensi?: AbsensiUncheckedCreateNestedManyWithoutUserInput
    izin?: IzinUncheckedCreateNestedManyWithoutUserInput
    submission?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    log?: LogAktivitasUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTugasDibuatInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTugasDibuatInput, UserUncheckedCreateWithoutTugasDibuatInput>
  }

  export type SubmissionCreateWithoutTugasInput = {
    fileUrl?: string | null
    linkUrl?: string | null
    status?: $Enums.StatusSubmission
    submittedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutSubmissionInput
    nilai?: NilaiCreateNestedOneWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutTugasInput = {
    id?: number
    userId: number
    fileUrl?: string | null
    linkUrl?: string | null
    status?: $Enums.StatusSubmission
    submittedAt?: Date | string
    deletedAt?: Date | string | null
    nilai?: NilaiUncheckedCreateNestedOneWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutTugasInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutTugasInput, SubmissionUncheckedCreateWithoutTugasInput>
  }

  export type SubmissionCreateManyTugasInputEnvelope = {
    data: SubmissionCreateManyTugasInput | SubmissionCreateManyTugasInput[]
    skipDuplicates?: boolean
  }

  export type KelasUpsertWithoutTugasInput = {
    update: XOR<KelasUpdateWithoutTugasInput, KelasUncheckedUpdateWithoutTugasInput>
    create: XOR<KelasCreateWithoutTugasInput, KelasUncheckedCreateWithoutTugasInput>
    where?: KelasWhereInput
  }

  export type KelasUpdateToOneWithWhereWithoutTugasInput = {
    where?: KelasWhereInput
    data: XOR<KelasUpdateWithoutTugasInput, KelasUncheckedUpdateWithoutTugasInput>
  }

  export type KelasUpdateWithoutTugasInput = {
    namaKelas?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    santri?: UserUpdateManyWithoutKelasNestedInput
    pengajar?: UserUpdateManyWithoutKelasAjarNestedInput
    absensiSetting?: AbsensiSettingUpdateOneWithoutKelasNestedInput
    absensi?: AbsensiUpdateManyWithoutKelasNestedInput
    jadwal?: JadwalAbsensiUpdateManyWithoutKelasNestedInput
    izin?: IzinUpdateManyWithoutKelasNestedInput
  }

  export type KelasUncheckedUpdateWithoutTugasInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaKelas?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    santri?: UserUncheckedUpdateManyWithoutKelasNestedInput
    pengajar?: UserUncheckedUpdateManyWithoutKelasAjarNestedInput
    absensiSetting?: AbsensiSettingUncheckedUpdateOneWithoutKelasNestedInput
    absensi?: AbsensiUncheckedUpdateManyWithoutKelasNestedInput
    jadwal?: JadwalAbsensiUncheckedUpdateManyWithoutKelasNestedInput
    izin?: IzinUncheckedUpdateManyWithoutKelasNestedInput
  }

  export type MataPelajaranUpsertWithoutTugasInput = {
    update: XOR<MataPelajaranUpdateWithoutTugasInput, MataPelajaranUncheckedUpdateWithoutTugasInput>
    create: XOR<MataPelajaranCreateWithoutTugasInput, MataPelajaranUncheckedCreateWithoutTugasInput>
    where?: MataPelajaranWhereInput
  }

  export type MataPelajaranUpdateToOneWithWhereWithoutTugasInput = {
    where?: MataPelajaranWhereInput
    data: XOR<MataPelajaranUpdateWithoutTugasInput, MataPelajaranUncheckedUpdateWithoutTugasInput>
  }

  export type MataPelajaranUpdateWithoutTugasInput = {
    nama?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MataPelajaranUncheckedUpdateWithoutTugasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutTugasDibuatInput = {
    update: XOR<UserUpdateWithoutTugasDibuatInput, UserUncheckedUpdateWithoutTugasDibuatInput>
    create: XOR<UserCreateWithoutTugasDibuatInput, UserUncheckedCreateWithoutTugasDibuatInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTugasDibuatInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTugasDibuatInput, UserUncheckedUpdateWithoutTugasDibuatInput>
  }

  export type UserUpdateWithoutTugasDibuatInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kelas?: KelasUpdateOneWithoutSantriNestedInput
    kelasAjar?: KelasUpdateManyWithoutPengajarNestedInput
    absensi?: AbsensiUpdateManyWithoutUserNestedInput
    izin?: IzinUpdateManyWithoutUserNestedInput
    submission?: SubmissionUpdateManyWithoutUserNestedInput
    log?: LogAktivitasUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTugasDibuatInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    kelasId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kelasAjar?: KelasUncheckedUpdateManyWithoutPengajarNestedInput
    absensi?: AbsensiUncheckedUpdateManyWithoutUserNestedInput
    izin?: IzinUncheckedUpdateManyWithoutUserNestedInput
    submission?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    log?: LogAktivitasUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubmissionUpsertWithWhereUniqueWithoutTugasInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutTugasInput, SubmissionUncheckedUpdateWithoutTugasInput>
    create: XOR<SubmissionCreateWithoutTugasInput, SubmissionUncheckedCreateWithoutTugasInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutTugasInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutTugasInput, SubmissionUncheckedUpdateWithoutTugasInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutTugasInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutTugasInput>
  }

  export type SubmissionScalarWhereInput = {
    AND?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    OR?: SubmissionScalarWhereInput[]
    NOT?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    id?: IntFilter<"Submission"> | number
    userId?: IntFilter<"Submission"> | number
    tugasId?: IntFilter<"Submission"> | number
    fileUrl?: StringNullableFilter<"Submission"> | string | null
    linkUrl?: StringNullableFilter<"Submission"> | string | null
    status?: EnumStatusSubmissionFilter<"Submission"> | $Enums.StatusSubmission
    submittedAt?: DateTimeFilter<"Submission"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Submission"> | Date | string | null
  }

  export type KelasCreateWithoutSantriInput = {
    namaKelas: string
    deskripsi?: string | null
    pengajar?: UserCreateNestedManyWithoutKelasAjarInput
    absensiSetting?: AbsensiSettingCreateNestedOneWithoutKelasInput
    absensi?: AbsensiCreateNestedManyWithoutKelasInput
    jadwal?: JadwalAbsensiCreateNestedManyWithoutKelasInput
    izin?: IzinCreateNestedManyWithoutKelasInput
    tugas?: TugasCreateNestedManyWithoutKelasInput
  }

  export type KelasUncheckedCreateWithoutSantriInput = {
    id?: number
    namaKelas: string
    deskripsi?: string | null
    pengajar?: UserUncheckedCreateNestedManyWithoutKelasAjarInput
    absensiSetting?: AbsensiSettingUncheckedCreateNestedOneWithoutKelasInput
    absensi?: AbsensiUncheckedCreateNestedManyWithoutKelasInput
    jadwal?: JadwalAbsensiUncheckedCreateNestedManyWithoutKelasInput
    izin?: IzinUncheckedCreateNestedManyWithoutKelasInput
    tugas?: TugasUncheckedCreateNestedManyWithoutKelasInput
  }

  export type KelasCreateOrConnectWithoutSantriInput = {
    where: KelasWhereUniqueInput
    create: XOR<KelasCreateWithoutSantriInput, KelasUncheckedCreateWithoutSantriInput>
  }

  export type KelasCreateWithoutPengajarInput = {
    namaKelas: string
    deskripsi?: string | null
    santri?: UserCreateNestedManyWithoutKelasInput
    absensiSetting?: AbsensiSettingCreateNestedOneWithoutKelasInput
    absensi?: AbsensiCreateNestedManyWithoutKelasInput
    jadwal?: JadwalAbsensiCreateNestedManyWithoutKelasInput
    izin?: IzinCreateNestedManyWithoutKelasInput
    tugas?: TugasCreateNestedManyWithoutKelasInput
  }

  export type KelasUncheckedCreateWithoutPengajarInput = {
    id?: number
    namaKelas: string
    deskripsi?: string | null
    santri?: UserUncheckedCreateNestedManyWithoutKelasInput
    absensiSetting?: AbsensiSettingUncheckedCreateNestedOneWithoutKelasInput
    absensi?: AbsensiUncheckedCreateNestedManyWithoutKelasInput
    jadwal?: JadwalAbsensiUncheckedCreateNestedManyWithoutKelasInput
    izin?: IzinUncheckedCreateNestedManyWithoutKelasInput
    tugas?: TugasUncheckedCreateNestedManyWithoutKelasInput
  }

  export type KelasCreateOrConnectWithoutPengajarInput = {
    where: KelasWhereUniqueInput
    create: XOR<KelasCreateWithoutPengajarInput, KelasUncheckedCreateWithoutPengajarInput>
  }

  export type AbsensiCreateWithoutUserInput = {
    tanggal: Date | string
    status: $Enums.StatusAbsensi
    createdAt?: Date | string
    aiComment?: string | null
    aiTone?: string | null
    aiConfidence?: number | null
    kelas: KelasCreateNestedOneWithoutAbsensiInput
    jadwal?: JadwalAbsensiCreateNestedOneWithoutAbsensiInput
  }

  export type AbsensiUncheckedCreateWithoutUserInput = {
    id?: number
    kelasId: number
    jadwalId?: number | null
    tanggal: Date | string
    status: $Enums.StatusAbsensi
    createdAt?: Date | string
    aiComment?: string | null
    aiTone?: string | null
    aiConfidence?: number | null
  }

  export type AbsensiCreateOrConnectWithoutUserInput = {
    where: AbsensiWhereUniqueInput
    create: XOR<AbsensiCreateWithoutUserInput, AbsensiUncheckedCreateWithoutUserInput>
  }

  export type AbsensiCreateManyUserInputEnvelope = {
    data: AbsensiCreateManyUserInput | AbsensiCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type IzinCreateWithoutUserInput = {
    tanggal: Date | string
    alasan: string
    status?: $Enums.StatusIzin
    createdAt?: Date | string
    deletedAt?: Date | string | null
    kelas: KelasCreateNestedOneWithoutIzinInput
  }

  export type IzinUncheckedCreateWithoutUserInput = {
    id?: number
    kelasId: number
    tanggal: Date | string
    alasan: string
    status?: $Enums.StatusIzin
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type IzinCreateOrConnectWithoutUserInput = {
    where: IzinWhereUniqueInput
    create: XOR<IzinCreateWithoutUserInput, IzinUncheckedCreateWithoutUserInput>
  }

  export type IzinCreateManyUserInputEnvelope = {
    data: IzinCreateManyUserInput | IzinCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TugasCreateWithoutCreatorInput = {
    title: string
    description?: string | null
    deadline: Date | string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    kelas: KelasCreateNestedOneWithoutTugasInput
    mataPelajaran: MataPelajaranCreateNestedOneWithoutTugasInput
    submission?: SubmissionCreateNestedManyWithoutTugasInput
  }

  export type TugasUncheckedCreateWithoutCreatorInput = {
    id?: number
    kelasId: number
    mataPelajaranId: number
    title: string
    description?: string | null
    deadline: Date | string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    submission?: SubmissionUncheckedCreateNestedManyWithoutTugasInput
  }

  export type TugasCreateOrConnectWithoutCreatorInput = {
    where: TugasWhereUniqueInput
    create: XOR<TugasCreateWithoutCreatorInput, TugasUncheckedCreateWithoutCreatorInput>
  }

  export type TugasCreateManyCreatorInputEnvelope = {
    data: TugasCreateManyCreatorInput | TugasCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type SubmissionCreateWithoutUserInput = {
    fileUrl?: string | null
    linkUrl?: string | null
    status?: $Enums.StatusSubmission
    submittedAt?: Date | string
    deletedAt?: Date | string | null
    tugas: TugasCreateNestedOneWithoutSubmissionInput
    nilai?: NilaiCreateNestedOneWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutUserInput = {
    id?: number
    tugasId: number
    fileUrl?: string | null
    linkUrl?: string | null
    status?: $Enums.StatusSubmission
    submittedAt?: Date | string
    deletedAt?: Date | string | null
    nilai?: NilaiUncheckedCreateNestedOneWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionCreateManyUserInputEnvelope = {
    data: SubmissionCreateManyUserInput | SubmissionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LogAktivitasCreateWithoutUserInput = {
    aktivitas: string
    createdAt?: Date | string
  }

  export type LogAktivitasUncheckedCreateWithoutUserInput = {
    id?: number
    aktivitas: string
    createdAt?: Date | string
  }

  export type LogAktivitasCreateOrConnectWithoutUserInput = {
    where: LogAktivitasWhereUniqueInput
    create: XOR<LogAktivitasCreateWithoutUserInput, LogAktivitasUncheckedCreateWithoutUserInput>
  }

  export type LogAktivitasCreateManyUserInputEnvelope = {
    data: LogAktivitasCreateManyUserInput | LogAktivitasCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProfileCreateWithoutUserInput = {
    namaLengkap: string
    noHp?: string | null
    alamat?: string | null
    fotoUrl?: string | null
    tanggalLahir?: Date | string | null
    jenisKelamin?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: number
    namaLengkap: string
    noHp?: string | null
    alamat?: string | null
    fotoUrl?: string | null
    tanggalLahir?: Date | string | null
    jenisKelamin?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateWithoutUserInput = {
    title: string
    message: string
    level: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    message: string
    level: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type KelasUpsertWithoutSantriInput = {
    update: XOR<KelasUpdateWithoutSantriInput, KelasUncheckedUpdateWithoutSantriInput>
    create: XOR<KelasCreateWithoutSantriInput, KelasUncheckedCreateWithoutSantriInput>
    where?: KelasWhereInput
  }

  export type KelasUpdateToOneWithWhereWithoutSantriInput = {
    where?: KelasWhereInput
    data: XOR<KelasUpdateWithoutSantriInput, KelasUncheckedUpdateWithoutSantriInput>
  }

  export type KelasUpdateWithoutSantriInput = {
    namaKelas?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    pengajar?: UserUpdateManyWithoutKelasAjarNestedInput
    absensiSetting?: AbsensiSettingUpdateOneWithoutKelasNestedInput
    absensi?: AbsensiUpdateManyWithoutKelasNestedInput
    jadwal?: JadwalAbsensiUpdateManyWithoutKelasNestedInput
    izin?: IzinUpdateManyWithoutKelasNestedInput
    tugas?: TugasUpdateManyWithoutKelasNestedInput
  }

  export type KelasUncheckedUpdateWithoutSantriInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaKelas?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    pengajar?: UserUncheckedUpdateManyWithoutKelasAjarNestedInput
    absensiSetting?: AbsensiSettingUncheckedUpdateOneWithoutKelasNestedInput
    absensi?: AbsensiUncheckedUpdateManyWithoutKelasNestedInput
    jadwal?: JadwalAbsensiUncheckedUpdateManyWithoutKelasNestedInput
    izin?: IzinUncheckedUpdateManyWithoutKelasNestedInput
    tugas?: TugasUncheckedUpdateManyWithoutKelasNestedInput
  }

  export type KelasUpsertWithWhereUniqueWithoutPengajarInput = {
    where: KelasWhereUniqueInput
    update: XOR<KelasUpdateWithoutPengajarInput, KelasUncheckedUpdateWithoutPengajarInput>
    create: XOR<KelasCreateWithoutPengajarInput, KelasUncheckedCreateWithoutPengajarInput>
  }

  export type KelasUpdateWithWhereUniqueWithoutPengajarInput = {
    where: KelasWhereUniqueInput
    data: XOR<KelasUpdateWithoutPengajarInput, KelasUncheckedUpdateWithoutPengajarInput>
  }

  export type KelasUpdateManyWithWhereWithoutPengajarInput = {
    where: KelasScalarWhereInput
    data: XOR<KelasUpdateManyMutationInput, KelasUncheckedUpdateManyWithoutPengajarInput>
  }

  export type KelasScalarWhereInput = {
    AND?: KelasScalarWhereInput | KelasScalarWhereInput[]
    OR?: KelasScalarWhereInput[]
    NOT?: KelasScalarWhereInput | KelasScalarWhereInput[]
    id?: IntFilter<"Kelas"> | number
    namaKelas?: StringFilter<"Kelas"> | string
    deskripsi?: StringNullableFilter<"Kelas"> | string | null
  }

  export type AbsensiUpsertWithWhereUniqueWithoutUserInput = {
    where: AbsensiWhereUniqueInput
    update: XOR<AbsensiUpdateWithoutUserInput, AbsensiUncheckedUpdateWithoutUserInput>
    create: XOR<AbsensiCreateWithoutUserInput, AbsensiUncheckedCreateWithoutUserInput>
  }

  export type AbsensiUpdateWithWhereUniqueWithoutUserInput = {
    where: AbsensiWhereUniqueInput
    data: XOR<AbsensiUpdateWithoutUserInput, AbsensiUncheckedUpdateWithoutUserInput>
  }

  export type AbsensiUpdateManyWithWhereWithoutUserInput = {
    where: AbsensiScalarWhereInput
    data: XOR<AbsensiUpdateManyMutationInput, AbsensiUncheckedUpdateManyWithoutUserInput>
  }

  export type IzinUpsertWithWhereUniqueWithoutUserInput = {
    where: IzinWhereUniqueInput
    update: XOR<IzinUpdateWithoutUserInput, IzinUncheckedUpdateWithoutUserInput>
    create: XOR<IzinCreateWithoutUserInput, IzinUncheckedCreateWithoutUserInput>
  }

  export type IzinUpdateWithWhereUniqueWithoutUserInput = {
    where: IzinWhereUniqueInput
    data: XOR<IzinUpdateWithoutUserInput, IzinUncheckedUpdateWithoutUserInput>
  }

  export type IzinUpdateManyWithWhereWithoutUserInput = {
    where: IzinScalarWhereInput
    data: XOR<IzinUpdateManyMutationInput, IzinUncheckedUpdateManyWithoutUserInput>
  }

  export type TugasUpsertWithWhereUniqueWithoutCreatorInput = {
    where: TugasWhereUniqueInput
    update: XOR<TugasUpdateWithoutCreatorInput, TugasUncheckedUpdateWithoutCreatorInput>
    create: XOR<TugasCreateWithoutCreatorInput, TugasUncheckedCreateWithoutCreatorInput>
  }

  export type TugasUpdateWithWhereUniqueWithoutCreatorInput = {
    where: TugasWhereUniqueInput
    data: XOR<TugasUpdateWithoutCreatorInput, TugasUncheckedUpdateWithoutCreatorInput>
  }

  export type TugasUpdateManyWithWhereWithoutCreatorInput = {
    where: TugasScalarWhereInput
    data: XOR<TugasUpdateManyMutationInput, TugasUncheckedUpdateManyWithoutCreatorInput>
  }

  export type SubmissionUpsertWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutUserInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutUserInput>
  }

  export type LogAktivitasUpsertWithWhereUniqueWithoutUserInput = {
    where: LogAktivitasWhereUniqueInput
    update: XOR<LogAktivitasUpdateWithoutUserInput, LogAktivitasUncheckedUpdateWithoutUserInput>
    create: XOR<LogAktivitasCreateWithoutUserInput, LogAktivitasUncheckedCreateWithoutUserInput>
  }

  export type LogAktivitasUpdateWithWhereUniqueWithoutUserInput = {
    where: LogAktivitasWhereUniqueInput
    data: XOR<LogAktivitasUpdateWithoutUserInput, LogAktivitasUncheckedUpdateWithoutUserInput>
  }

  export type LogAktivitasUpdateManyWithWhereWithoutUserInput = {
    where: LogAktivitasScalarWhereInput
    data: XOR<LogAktivitasUpdateManyMutationInput, LogAktivitasUncheckedUpdateManyWithoutUserInput>
  }

  export type LogAktivitasScalarWhereInput = {
    AND?: LogAktivitasScalarWhereInput | LogAktivitasScalarWhereInput[]
    OR?: LogAktivitasScalarWhereInput[]
    NOT?: LogAktivitasScalarWhereInput | LogAktivitasScalarWhereInput[]
    id?: IntFilter<"LogAktivitas"> | number
    userId?: IntFilter<"LogAktivitas"> | number
    aktivitas?: StringFilter<"LogAktivitas"> | string
    createdAt?: DateTimeFilter<"LogAktivitas"> | Date | string
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    namaLengkap?: StringFieldUpdateOperationsInput | string
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jenisKelamin?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaLengkap?: StringFieldUpdateOperationsInput | string
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jenisKelamin?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    userId?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    level?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type AbsensiCreateManyJadwalInput = {
    id?: number
    userId: number
    kelasId: number
    tanggal: Date | string
    status: $Enums.StatusAbsensi
    createdAt?: Date | string
    aiComment?: string | null
    aiTone?: string | null
    aiConfidence?: number | null
  }

  export type AbsensiUpdateWithoutJadwalInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusAbsensiFieldUpdateOperationsInput | $Enums.StatusAbsensi
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiComment?: NullableStringFieldUpdateOperationsInput | string | null
    aiTone?: NullableStringFieldUpdateOperationsInput | string | null
    aiConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutAbsensiNestedInput
    kelas?: KelasUpdateOneRequiredWithoutAbsensiNestedInput
  }

  export type AbsensiUncheckedUpdateWithoutJadwalInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    kelasId?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusAbsensiFieldUpdateOperationsInput | $Enums.StatusAbsensi
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiComment?: NullableStringFieldUpdateOperationsInput | string | null
    aiTone?: NullableStringFieldUpdateOperationsInput | string | null
    aiConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AbsensiUncheckedUpdateManyWithoutJadwalInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    kelasId?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusAbsensiFieldUpdateOperationsInput | $Enums.StatusAbsensi
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiComment?: NullableStringFieldUpdateOperationsInput | string | null
    aiTone?: NullableStringFieldUpdateOperationsInput | string | null
    aiConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type UserCreateManyKelasInput = {
    id?: number
    name?: string | null
    email: string
    password?: string | null
    activatedAt?: Date | string | null
    isActive?: boolean
    otp?: string | null
    otpExpiresAt?: Date | string | null
    role?: $Enums.Role
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AbsensiCreateManyKelasInput = {
    id?: number
    userId: number
    jadwalId?: number | null
    tanggal: Date | string
    status: $Enums.StatusAbsensi
    createdAt?: Date | string
    aiComment?: string | null
    aiTone?: string | null
    aiConfidence?: number | null
  }

  export type JadwalAbsensiCreateManyKelasInput = {
    id?: number
    hari: $Enums.Hari
    jamMulai: string
    jamSelesai: string
    tanggal: Date | string
    createdAt?: Date | string
  }

  export type IzinCreateManyKelasInput = {
    id?: number
    userId: number
    tanggal: Date | string
    alasan: string
    status?: $Enums.StatusIzin
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TugasCreateManyKelasInput = {
    id?: number
    mataPelajaranId: number
    title: string
    description?: string | null
    deadline: Date | string
    createdBy: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateWithoutKelasInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kelasAjar?: KelasUpdateManyWithoutPengajarNestedInput
    absensi?: AbsensiUpdateManyWithoutUserNestedInput
    izin?: IzinUpdateManyWithoutUserNestedInput
    tugasDibuat?: TugasUpdateManyWithoutCreatorNestedInput
    submission?: SubmissionUpdateManyWithoutUserNestedInput
    log?: LogAktivitasUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutKelasInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kelasAjar?: KelasUncheckedUpdateManyWithoutPengajarNestedInput
    absensi?: AbsensiUncheckedUpdateManyWithoutUserNestedInput
    izin?: IzinUncheckedUpdateManyWithoutUserNestedInput
    tugasDibuat?: TugasUncheckedUpdateManyWithoutCreatorNestedInput
    submission?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    log?: LogAktivitasUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutKelasInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpdateWithoutKelasAjarInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kelas?: KelasUpdateOneWithoutSantriNestedInput
    absensi?: AbsensiUpdateManyWithoutUserNestedInput
    izin?: IzinUpdateManyWithoutUserNestedInput
    tugasDibuat?: TugasUpdateManyWithoutCreatorNestedInput
    submission?: SubmissionUpdateManyWithoutUserNestedInput
    log?: LogAktivitasUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutKelasAjarInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    kelasId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    absensi?: AbsensiUncheckedUpdateManyWithoutUserNestedInput
    izin?: IzinUncheckedUpdateManyWithoutUserNestedInput
    tugasDibuat?: TugasUncheckedUpdateManyWithoutCreatorNestedInput
    submission?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    log?: LogAktivitasUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutKelasAjarInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    kelasId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AbsensiUpdateWithoutKelasInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusAbsensiFieldUpdateOperationsInput | $Enums.StatusAbsensi
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiComment?: NullableStringFieldUpdateOperationsInput | string | null
    aiTone?: NullableStringFieldUpdateOperationsInput | string | null
    aiConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutAbsensiNestedInput
    jadwal?: JadwalAbsensiUpdateOneWithoutAbsensiNestedInput
  }

  export type AbsensiUncheckedUpdateWithoutKelasInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    jadwalId?: NullableIntFieldUpdateOperationsInput | number | null
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusAbsensiFieldUpdateOperationsInput | $Enums.StatusAbsensi
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiComment?: NullableStringFieldUpdateOperationsInput | string | null
    aiTone?: NullableStringFieldUpdateOperationsInput | string | null
    aiConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AbsensiUncheckedUpdateManyWithoutKelasInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    jadwalId?: NullableIntFieldUpdateOperationsInput | number | null
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusAbsensiFieldUpdateOperationsInput | $Enums.StatusAbsensi
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiComment?: NullableStringFieldUpdateOperationsInput | string | null
    aiTone?: NullableStringFieldUpdateOperationsInput | string | null
    aiConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type JadwalAbsensiUpdateWithoutKelasInput = {
    hari?: EnumHariFieldUpdateOperationsInput | $Enums.Hari
    jamMulai?: StringFieldUpdateOperationsInput | string
    jamSelesai?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    absensi?: AbsensiUpdateManyWithoutJadwalNestedInput
  }

  export type JadwalAbsensiUncheckedUpdateWithoutKelasInput = {
    id?: IntFieldUpdateOperationsInput | number
    hari?: EnumHariFieldUpdateOperationsInput | $Enums.Hari
    jamMulai?: StringFieldUpdateOperationsInput | string
    jamSelesai?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    absensi?: AbsensiUncheckedUpdateManyWithoutJadwalNestedInput
  }

  export type JadwalAbsensiUncheckedUpdateManyWithoutKelasInput = {
    id?: IntFieldUpdateOperationsInput | number
    hari?: EnumHariFieldUpdateOperationsInput | $Enums.Hari
    jamMulai?: StringFieldUpdateOperationsInput | string
    jamSelesai?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IzinUpdateWithoutKelasInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    alasan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusIzinFieldUpdateOperationsInput | $Enums.StatusIzin
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutIzinNestedInput
  }

  export type IzinUncheckedUpdateWithoutKelasInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    alasan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusIzinFieldUpdateOperationsInput | $Enums.StatusIzin
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IzinUncheckedUpdateManyWithoutKelasInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    alasan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusIzinFieldUpdateOperationsInput | $Enums.StatusIzin
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TugasUpdateWithoutKelasInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mataPelajaran?: MataPelajaranUpdateOneRequiredWithoutTugasNestedInput
    creator?: UserUpdateOneRequiredWithoutTugasDibuatNestedInput
    submission?: SubmissionUpdateManyWithoutTugasNestedInput
  }

  export type TugasUncheckedUpdateWithoutKelasInput = {
    id?: IntFieldUpdateOperationsInput | number
    mataPelajaranId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submission?: SubmissionUncheckedUpdateManyWithoutTugasNestedInput
  }

  export type TugasUncheckedUpdateManyWithoutKelasInput = {
    id?: IntFieldUpdateOperationsInput | number
    mataPelajaranId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TugasCreateManyMataPelajaranInput = {
    id?: number
    kelasId: number
    title: string
    description?: string | null
    deadline: Date | string
    createdBy: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TugasUpdateWithoutMataPelajaranInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kelas?: KelasUpdateOneRequiredWithoutTugasNestedInput
    creator?: UserUpdateOneRequiredWithoutTugasDibuatNestedInput
    submission?: SubmissionUpdateManyWithoutTugasNestedInput
  }

  export type TugasUncheckedUpdateWithoutMataPelajaranInput = {
    id?: IntFieldUpdateOperationsInput | number
    kelasId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submission?: SubmissionUncheckedUpdateManyWithoutTugasNestedInput
  }

  export type TugasUncheckedUpdateManyWithoutMataPelajaranInput = {
    id?: IntFieldUpdateOperationsInput | number
    kelasId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubmissionCreateManyTugasInput = {
    id?: number
    userId: number
    fileUrl?: string | null
    linkUrl?: string | null
    status?: $Enums.StatusSubmission
    submittedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SubmissionUpdateWithoutTugasInput = {
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusSubmissionFieldUpdateOperationsInput | $Enums.StatusSubmission
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutSubmissionNestedInput
    nilai?: NilaiUpdateOneWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutTugasInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusSubmissionFieldUpdateOperationsInput | $Enums.StatusSubmission
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nilai?: NilaiUncheckedUpdateOneWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateManyWithoutTugasInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusSubmissionFieldUpdateOperationsInput | $Enums.StatusSubmission
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AbsensiCreateManyUserInput = {
    id?: number
    kelasId: number
    jadwalId?: number | null
    tanggal: Date | string
    status: $Enums.StatusAbsensi
    createdAt?: Date | string
    aiComment?: string | null
    aiTone?: string | null
    aiConfidence?: number | null
  }

  export type IzinCreateManyUserInput = {
    id?: number
    kelasId: number
    tanggal: Date | string
    alasan: string
    status?: $Enums.StatusIzin
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TugasCreateManyCreatorInput = {
    id?: number
    kelasId: number
    mataPelajaranId: number
    title: string
    description?: string | null
    deadline: Date | string
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SubmissionCreateManyUserInput = {
    id?: number
    tugasId: number
    fileUrl?: string | null
    linkUrl?: string | null
    status?: $Enums.StatusSubmission
    submittedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type LogAktivitasCreateManyUserInput = {
    id?: number
    aktivitas: string
    createdAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: number
    title: string
    message: string
    level: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type KelasUpdateWithoutPengajarInput = {
    namaKelas?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    santri?: UserUpdateManyWithoutKelasNestedInput
    absensiSetting?: AbsensiSettingUpdateOneWithoutKelasNestedInput
    absensi?: AbsensiUpdateManyWithoutKelasNestedInput
    jadwal?: JadwalAbsensiUpdateManyWithoutKelasNestedInput
    izin?: IzinUpdateManyWithoutKelasNestedInput
    tugas?: TugasUpdateManyWithoutKelasNestedInput
  }

  export type KelasUncheckedUpdateWithoutPengajarInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaKelas?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    santri?: UserUncheckedUpdateManyWithoutKelasNestedInput
    absensiSetting?: AbsensiSettingUncheckedUpdateOneWithoutKelasNestedInput
    absensi?: AbsensiUncheckedUpdateManyWithoutKelasNestedInput
    jadwal?: JadwalAbsensiUncheckedUpdateManyWithoutKelasNestedInput
    izin?: IzinUncheckedUpdateManyWithoutKelasNestedInput
    tugas?: TugasUncheckedUpdateManyWithoutKelasNestedInput
  }

  export type KelasUncheckedUpdateManyWithoutPengajarInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaKelas?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AbsensiUpdateWithoutUserInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusAbsensiFieldUpdateOperationsInput | $Enums.StatusAbsensi
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiComment?: NullableStringFieldUpdateOperationsInput | string | null
    aiTone?: NullableStringFieldUpdateOperationsInput | string | null
    aiConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    kelas?: KelasUpdateOneRequiredWithoutAbsensiNestedInput
    jadwal?: JadwalAbsensiUpdateOneWithoutAbsensiNestedInput
  }

  export type AbsensiUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    kelasId?: IntFieldUpdateOperationsInput | number
    jadwalId?: NullableIntFieldUpdateOperationsInput | number | null
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusAbsensiFieldUpdateOperationsInput | $Enums.StatusAbsensi
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiComment?: NullableStringFieldUpdateOperationsInput | string | null
    aiTone?: NullableStringFieldUpdateOperationsInput | string | null
    aiConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AbsensiUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    kelasId?: IntFieldUpdateOperationsInput | number
    jadwalId?: NullableIntFieldUpdateOperationsInput | number | null
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusAbsensiFieldUpdateOperationsInput | $Enums.StatusAbsensi
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiComment?: NullableStringFieldUpdateOperationsInput | string | null
    aiTone?: NullableStringFieldUpdateOperationsInput | string | null
    aiConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type IzinUpdateWithoutUserInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    alasan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusIzinFieldUpdateOperationsInput | $Enums.StatusIzin
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kelas?: KelasUpdateOneRequiredWithoutIzinNestedInput
  }

  export type IzinUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    kelasId?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    alasan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusIzinFieldUpdateOperationsInput | $Enums.StatusIzin
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IzinUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    kelasId?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    alasan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusIzinFieldUpdateOperationsInput | $Enums.StatusIzin
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TugasUpdateWithoutCreatorInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kelas?: KelasUpdateOneRequiredWithoutTugasNestedInput
    mataPelajaran?: MataPelajaranUpdateOneRequiredWithoutTugasNestedInput
    submission?: SubmissionUpdateManyWithoutTugasNestedInput
  }

  export type TugasUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    kelasId?: IntFieldUpdateOperationsInput | number
    mataPelajaranId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submission?: SubmissionUncheckedUpdateManyWithoutTugasNestedInput
  }

  export type TugasUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    kelasId?: IntFieldUpdateOperationsInput | number
    mataPelajaranId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubmissionUpdateWithoutUserInput = {
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusSubmissionFieldUpdateOperationsInput | $Enums.StatusSubmission
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tugas?: TugasUpdateOneRequiredWithoutSubmissionNestedInput
    nilai?: NilaiUpdateOneWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tugasId?: IntFieldUpdateOperationsInput | number
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusSubmissionFieldUpdateOperationsInput | $Enums.StatusSubmission
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nilai?: NilaiUncheckedUpdateOneWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tugasId?: IntFieldUpdateOperationsInput | number
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusSubmissionFieldUpdateOperationsInput | $Enums.StatusSubmission
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LogAktivitasUpdateWithoutUserInput = {
    aktivitas?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogAktivitasUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    aktivitas?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogAktivitasUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    aktivitas?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}