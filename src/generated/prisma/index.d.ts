/**
 * Client
 **/

import * as runtime from './runtime/library.js'
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>

/**
 * Model tb_destination
 *
 */
export type tb_destination = $Result.DefaultSelection<Prisma.$tb_destinationPayload>
/**
 * Model tb_payment_status
 *
 */
export type tb_payment_status = $Result.DefaultSelection<Prisma.$tb_payment_statusPayload>
/**
 * Model tb_payment_type
 *
 */
export type tb_payment_type = $Result.DefaultSelection<Prisma.$tb_payment_typePayload>
/**
 * Model tb_role
 *
 */
export type tb_role = $Result.DefaultSelection<Prisma.$tb_rolePayload>
/**
 * Model tb_trip_status
 *
 */
export type tb_trip_status = $Result.DefaultSelection<Prisma.$tb_trip_statusPayload>
/**
 * Model tb_payment_history
 *
 */
export type tb_payment_history = $Result.DefaultSelection<Prisma.$tb_payment_historyPayload>
/**
 * Model tb_trip
 *
 */
export type tb_trip = $Result.DefaultSelection<Prisma.$tb_tripPayload>
/**
 * Model tb_trip_invoice
 *
 */
export type tb_trip_invoice = $Result.DefaultSelection<Prisma.$tb_trip_invoicePayload>
/**
 * Model tb_user
 *
 */
export type tb_user = $Result.DefaultSelection<Prisma.$tb_userPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tb_destinations
 * const tb_destinations = await prisma.tb_destination.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
    ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
    const U = 'log' extends keyof ClientOptions
        ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
            ? Prisma.GetEvents<ClientOptions['log']>
            : never
        : never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
     * ##  Prisma Client ʲˢ
     *
     * Type-safe database client for TypeScript & Node.js
     * @example
     * ```
     * const prisma = new PrismaClient()
     * // Fetch zero or more Tb_destinations
     * const tb_destinations = await prisma.tb_destination.findMany()
     * ```
     *
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
     */

    constructor(optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>)
    $on<V extends U>(
        eventType: V,
        callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void
    ): PrismaClient

    /**
     * Connect with the database
     */
    $connect(): $Utils.JsPromise<void>

    /**
     * Disconnect from the database
     */
    $disconnect(): $Utils.JsPromise<void>

    /**
     * Add a middleware
     * @deprecated since 4.16.0. For new code, prefer client extensions instead.
     * @see https://pris.ly/d/extensions
     */
    $use(cb: Prisma.Middleware): void

    /**
     * Executes a prepared raw query and returns the number of affected rows.
     * @example
     * ```
     * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>

    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>

    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>

    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>

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
    $transaction<P extends Prisma.PrismaPromise<any>[]>(
        arg: [...P],
        options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
    ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

    $transaction<R>(
        fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
        options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel }
    ): $Utils.JsPromise<R>

    $extends: $Extensions.ExtendsHook<
        'extends',
        Prisma.TypeMapCb<ClientOptions>,
        ExtArgs,
        $Utils.Call<
            Prisma.TypeMapCb<ClientOptions>,
            {
                extArgs: ExtArgs
            }
        >
    >

    /**
     * `prisma.tb_destination`: Exposes CRUD operations for the **tb_destination** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Tb_destinations
     * const tb_destinations = await prisma.tb_destination.findMany()
     * ```
     */
    get tb_destination(): Prisma.tb_destinationDelegate<ExtArgs, ClientOptions>

    /**
     * `prisma.tb_payment_status`: Exposes CRUD operations for the **tb_payment_status** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Tb_payment_statuses
     * const tb_payment_statuses = await prisma.tb_payment_status.findMany()
     * ```
     */
    get tb_payment_status(): Prisma.tb_payment_statusDelegate<ExtArgs, ClientOptions>

    /**
     * `prisma.tb_payment_type`: Exposes CRUD operations for the **tb_payment_type** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Tb_payment_types
     * const tb_payment_types = await prisma.tb_payment_type.findMany()
     * ```
     */
    get tb_payment_type(): Prisma.tb_payment_typeDelegate<ExtArgs, ClientOptions>

    /**
     * `prisma.tb_role`: Exposes CRUD operations for the **tb_role** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Tb_roles
     * const tb_roles = await prisma.tb_role.findMany()
     * ```
     */
    get tb_role(): Prisma.tb_roleDelegate<ExtArgs, ClientOptions>

    /**
     * `prisma.tb_trip_status`: Exposes CRUD operations for the **tb_trip_status** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Tb_trip_statuses
     * const tb_trip_statuses = await prisma.tb_trip_status.findMany()
     * ```
     */
    get tb_trip_status(): Prisma.tb_trip_statusDelegate<ExtArgs, ClientOptions>

    /**
     * `prisma.tb_payment_history`: Exposes CRUD operations for the **tb_payment_history** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Tb_payment_histories
     * const tb_payment_histories = await prisma.tb_payment_history.findMany()
     * ```
     */
    get tb_payment_history(): Prisma.tb_payment_historyDelegate<ExtArgs, ClientOptions>

    /**
     * `prisma.tb_trip`: Exposes CRUD operations for the **tb_trip** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Tb_trips
     * const tb_trips = await prisma.tb_trip.findMany()
     * ```
     */
    get tb_trip(): Prisma.tb_tripDelegate<ExtArgs, ClientOptions>

    /**
     * `prisma.tb_trip_invoice`: Exposes CRUD operations for the **tb_trip_invoice** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Tb_trip_invoices
     * const tb_trip_invoices = await prisma.tb_trip_invoice.findMany()
     * ```
     */
    get tb_trip_invoice(): Prisma.tb_trip_invoiceDelegate<ExtArgs, ClientOptions>

    /**
     * `prisma.tb_user`: Exposes CRUD operations for the **tb_user** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Tb_users
     * const tb_users = await prisma.tb_user.findMany()
     * ```
     */
    get tb_user(): Prisma.tb_userDelegate<ExtArgs, ClientOptions>
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
     * Metrics
     */
    export type Metrics = runtime.Metrics
    export type Metric<T> = runtime.Metric<T>
    export type MetricHistogram = runtime.MetricHistogram
    export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
     * Prisma Client JS version: 6.13.0
     * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
     */
    export type PrismaVersion = {
        client: string
    }

    export const prismaVersion: PrismaVersion

    /**
     * Utility Types
     */

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
    export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T

    /**
     * Get the return type of a function which returns a Promise.
     */
    export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

    /**
     * From T, pick a set of properties whose keys are in the union K
     */
    type Prisma__Pick<T, K extends keyof T> = {
        [P in K]: T[P]
    }

    export type Enumerable<T> = T | Array<T>

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
        [key in keyof T]: key extends keyof U ? T[key] : never
    }

    /**
     * SelectSubset
     * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
     * Additionally, it validates, if both select and include are present. If the case, it errors.
     */
    export type SelectSubset<T, U> = {
        [key in keyof T]: key extends keyof U ? T[key] : never
    } & (T extends SelectAndInclude
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
    } & K

    type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }

    /**
     * XOR is needed to have a real mutually exclusive union type
     * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
     */
    type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T

    /**
     * Is T a Record?
     */
    type IsObject<T extends any> =
        T extends Array<any>
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

    type _Either<O extends object, K extends Key, strict extends Boolean> = {
        1: EitherStrict<O, K>
        0: EitherLoose<O, K>
    }[strict]

    type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
        ? _Either<O, K, strict>
        : never

    export type Union = any

    type PatchUndefined<O extends object, O1 extends object> = {
        [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
    } & {}

    /** Helper Types for "Merge" **/
    export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
        ? I
        : never

    export type Overwrite<O extends object, O1 extends object> = {
        [K in keyof O]: K extends keyof O1 ? O1[K] : O[K]
    } & {}

    type _Merge<U extends object> = IntersectOf<
        Overwrite<
            U,
            {
                [K in keyof U]-?: At<U, K>
            }
        >
    >

    type Key = string | number | symbol
    type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never
    type AtStrict<O extends object, K extends Key> = O[K & keyof O]
    type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never
    export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
        1: AtStrict<O, K>
        0: AtLoose<O, K>
    }[strict]

    export type ComputeRaw<A extends any> = A extends Function
        ? A
        : {
              [K in keyof A]: A[K]
          } & {}

    export type OptionalFlat<O> = {
        [K in keyof O]?: O[K]
    } & {}

    type _Record<K extends keyof any, T> = {
        [P in K]: T
    }

    // cause typescript not to expand types and preserve names
    type NoExpand<T> = T extends unknown ? T : never

    // this type assumes the passed object is entirely optional
    type AtLeast<O extends object, K extends string> = NoExpand<
        O extends unknown
            ?
                  | (K extends keyof O ? { [P in K]: O[P] } & O : O)
                  | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
            : never
    >

    type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never

    export type Strict<U extends object> = ComputeRaw<_Strict<U>>
    /** End Helper Types for "Merge" **/

    export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>

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

    export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>

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

    type Cast<A, B> = A extends B ? A : B

    export const type: unique symbol

    /**
     * Used by group by
     */

    export type GetScalarType<T, O> = O extends object
        ? {
              [P in keyof T]: P extends keyof O ? O[P] : never
          }
        : never

    type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T

    type GetHavingFields<T> = {
        [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
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
        tb_destination: 'tb_destination'
        tb_payment_status: 'tb_payment_status'
        tb_payment_type: 'tb_payment_type'
        tb_role: 'tb_role'
        tb_trip_status: 'tb_trip_status'
        tb_payment_history: 'tb_payment_history'
        tb_trip: 'tb_trip'
        tb_trip_invoice: 'tb_trip_invoice'
        tb_user: 'tb_user'
    }

    export type ModelName = (typeof ModelName)[keyof typeof ModelName]

    export type Datasources = {
        db?: Datasource
    }

    interface TypeMapCb<ClientOptions = {}>
        extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
        returns: Prisma.TypeMap<
            this['params']['extArgs'],
            ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
        >
    }

    export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
        globalOmitOptions: {
            omit: GlobalOmitOptions
        }
        meta: {
            modelProps:
                | 'tb_destination'
                | 'tb_payment_status'
                | 'tb_payment_type'
                | 'tb_role'
                | 'tb_trip_status'
                | 'tb_payment_history'
                | 'tb_trip'
                | 'tb_trip_invoice'
                | 'tb_user'
            txIsolationLevel: Prisma.TransactionIsolationLevel
        }
        model: {
            tb_destination: {
                payload: Prisma.$tb_destinationPayload<ExtArgs>
                fields: Prisma.tb_destinationFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.tb_destinationFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_destinationPayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.tb_destinationFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_destinationPayload>
                    }
                    findFirst: {
                        args: Prisma.tb_destinationFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_destinationPayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.tb_destinationFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_destinationPayload>
                    }
                    findMany: {
                        args: Prisma.tb_destinationFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_destinationPayload>[]
                    }
                    create: {
                        args: Prisma.tb_destinationCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_destinationPayload>
                    }
                    createMany: {
                        args: Prisma.tb_destinationCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    createManyAndReturn: {
                        args: Prisma.tb_destinationCreateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_destinationPayload>[]
                    }
                    delete: {
                        args: Prisma.tb_destinationDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_destinationPayload>
                    }
                    update: {
                        args: Prisma.tb_destinationUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_destinationPayload>
                    }
                    deleteMany: {
                        args: Prisma.tb_destinationDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.tb_destinationUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateManyAndReturn: {
                        args: Prisma.tb_destinationUpdateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_destinationPayload>[]
                    }
                    upsert: {
                        args: Prisma.tb_destinationUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_destinationPayload>
                    }
                    aggregate: {
                        args: Prisma.Tb_destinationAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateTb_destination>
                    }
                    groupBy: {
                        args: Prisma.tb_destinationGroupByArgs<ExtArgs>
                        result: $Utils.Optional<Tb_destinationGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.tb_destinationCountArgs<ExtArgs>
                        result: $Utils.Optional<Tb_destinationCountAggregateOutputType> | number
                    }
                }
            }
            tb_payment_status: {
                payload: Prisma.$tb_payment_statusPayload<ExtArgs>
                fields: Prisma.tb_payment_statusFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.tb_payment_statusFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_payment_statusPayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.tb_payment_statusFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_payment_statusPayload>
                    }
                    findFirst: {
                        args: Prisma.tb_payment_statusFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_payment_statusPayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.tb_payment_statusFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_payment_statusPayload>
                    }
                    findMany: {
                        args: Prisma.tb_payment_statusFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_payment_statusPayload>[]
                    }
                    create: {
                        args: Prisma.tb_payment_statusCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_payment_statusPayload>
                    }
                    createMany: {
                        args: Prisma.tb_payment_statusCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    createManyAndReturn: {
                        args: Prisma.tb_payment_statusCreateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_payment_statusPayload>[]
                    }
                    delete: {
                        args: Prisma.tb_payment_statusDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_payment_statusPayload>
                    }
                    update: {
                        args: Prisma.tb_payment_statusUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_payment_statusPayload>
                    }
                    deleteMany: {
                        args: Prisma.tb_payment_statusDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.tb_payment_statusUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateManyAndReturn: {
                        args: Prisma.tb_payment_statusUpdateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_payment_statusPayload>[]
                    }
                    upsert: {
                        args: Prisma.tb_payment_statusUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_payment_statusPayload>
                    }
                    aggregate: {
                        args: Prisma.Tb_payment_statusAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateTb_payment_status>
                    }
                    groupBy: {
                        args: Prisma.tb_payment_statusGroupByArgs<ExtArgs>
                        result: $Utils.Optional<Tb_payment_statusGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.tb_payment_statusCountArgs<ExtArgs>
                        result: $Utils.Optional<Tb_payment_statusCountAggregateOutputType> | number
                    }
                }
            }
            tb_payment_type: {
                payload: Prisma.$tb_payment_typePayload<ExtArgs>
                fields: Prisma.tb_payment_typeFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.tb_payment_typeFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_payment_typePayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.tb_payment_typeFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_payment_typePayload>
                    }
                    findFirst: {
                        args: Prisma.tb_payment_typeFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_payment_typePayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.tb_payment_typeFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_payment_typePayload>
                    }
                    findMany: {
                        args: Prisma.tb_payment_typeFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_payment_typePayload>[]
                    }
                    create: {
                        args: Prisma.tb_payment_typeCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_payment_typePayload>
                    }
                    createMany: {
                        args: Prisma.tb_payment_typeCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    createManyAndReturn: {
                        args: Prisma.tb_payment_typeCreateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_payment_typePayload>[]
                    }
                    delete: {
                        args: Prisma.tb_payment_typeDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_payment_typePayload>
                    }
                    update: {
                        args: Prisma.tb_payment_typeUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_payment_typePayload>
                    }
                    deleteMany: {
                        args: Prisma.tb_payment_typeDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.tb_payment_typeUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateManyAndReturn: {
                        args: Prisma.tb_payment_typeUpdateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_payment_typePayload>[]
                    }
                    upsert: {
                        args: Prisma.tb_payment_typeUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_payment_typePayload>
                    }
                    aggregate: {
                        args: Prisma.Tb_payment_typeAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateTb_payment_type>
                    }
                    groupBy: {
                        args: Prisma.tb_payment_typeGroupByArgs<ExtArgs>
                        result: $Utils.Optional<Tb_payment_typeGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.tb_payment_typeCountArgs<ExtArgs>
                        result: $Utils.Optional<Tb_payment_typeCountAggregateOutputType> | number
                    }
                }
            }
            tb_role: {
                payload: Prisma.$tb_rolePayload<ExtArgs>
                fields: Prisma.tb_roleFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.tb_roleFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_rolePayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.tb_roleFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_rolePayload>
                    }
                    findFirst: {
                        args: Prisma.tb_roleFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_rolePayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.tb_roleFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_rolePayload>
                    }
                    findMany: {
                        args: Prisma.tb_roleFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_rolePayload>[]
                    }
                    create: {
                        args: Prisma.tb_roleCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_rolePayload>
                    }
                    createMany: {
                        args: Prisma.tb_roleCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    createManyAndReturn: {
                        args: Prisma.tb_roleCreateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_rolePayload>[]
                    }
                    delete: {
                        args: Prisma.tb_roleDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_rolePayload>
                    }
                    update: {
                        args: Prisma.tb_roleUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_rolePayload>
                    }
                    deleteMany: {
                        args: Prisma.tb_roleDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.tb_roleUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateManyAndReturn: {
                        args: Prisma.tb_roleUpdateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_rolePayload>[]
                    }
                    upsert: {
                        args: Prisma.tb_roleUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_rolePayload>
                    }
                    aggregate: {
                        args: Prisma.Tb_roleAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateTb_role>
                    }
                    groupBy: {
                        args: Prisma.tb_roleGroupByArgs<ExtArgs>
                        result: $Utils.Optional<Tb_roleGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.tb_roleCountArgs<ExtArgs>
                        result: $Utils.Optional<Tb_roleCountAggregateOutputType> | number
                    }
                }
            }
            tb_trip_status: {
                payload: Prisma.$tb_trip_statusPayload<ExtArgs>
                fields: Prisma.tb_trip_statusFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.tb_trip_statusFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_trip_statusPayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.tb_trip_statusFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_trip_statusPayload>
                    }
                    findFirst: {
                        args: Prisma.tb_trip_statusFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_trip_statusPayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.tb_trip_statusFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_trip_statusPayload>
                    }
                    findMany: {
                        args: Prisma.tb_trip_statusFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_trip_statusPayload>[]
                    }
                    create: {
                        args: Prisma.tb_trip_statusCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_trip_statusPayload>
                    }
                    createMany: {
                        args: Prisma.tb_trip_statusCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    createManyAndReturn: {
                        args: Prisma.tb_trip_statusCreateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_trip_statusPayload>[]
                    }
                    delete: {
                        args: Prisma.tb_trip_statusDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_trip_statusPayload>
                    }
                    update: {
                        args: Prisma.tb_trip_statusUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_trip_statusPayload>
                    }
                    deleteMany: {
                        args: Prisma.tb_trip_statusDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.tb_trip_statusUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateManyAndReturn: {
                        args: Prisma.tb_trip_statusUpdateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_trip_statusPayload>[]
                    }
                    upsert: {
                        args: Prisma.tb_trip_statusUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_trip_statusPayload>
                    }
                    aggregate: {
                        args: Prisma.Tb_trip_statusAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateTb_trip_status>
                    }
                    groupBy: {
                        args: Prisma.tb_trip_statusGroupByArgs<ExtArgs>
                        result: $Utils.Optional<Tb_trip_statusGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.tb_trip_statusCountArgs<ExtArgs>
                        result: $Utils.Optional<Tb_trip_statusCountAggregateOutputType> | number
                    }
                }
            }
            tb_payment_history: {
                payload: Prisma.$tb_payment_historyPayload<ExtArgs>
                fields: Prisma.tb_payment_historyFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.tb_payment_historyFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_payment_historyPayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.tb_payment_historyFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_payment_historyPayload>
                    }
                    findFirst: {
                        args: Prisma.tb_payment_historyFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_payment_historyPayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.tb_payment_historyFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_payment_historyPayload>
                    }
                    findMany: {
                        args: Prisma.tb_payment_historyFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_payment_historyPayload>[]
                    }
                    create: {
                        args: Prisma.tb_payment_historyCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_payment_historyPayload>
                    }
                    createMany: {
                        args: Prisma.tb_payment_historyCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    createManyAndReturn: {
                        args: Prisma.tb_payment_historyCreateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_payment_historyPayload>[]
                    }
                    delete: {
                        args: Prisma.tb_payment_historyDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_payment_historyPayload>
                    }
                    update: {
                        args: Prisma.tb_payment_historyUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_payment_historyPayload>
                    }
                    deleteMany: {
                        args: Prisma.tb_payment_historyDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.tb_payment_historyUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateManyAndReturn: {
                        args: Prisma.tb_payment_historyUpdateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_payment_historyPayload>[]
                    }
                    upsert: {
                        args: Prisma.tb_payment_historyUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_payment_historyPayload>
                    }
                    aggregate: {
                        args: Prisma.Tb_payment_historyAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateTb_payment_history>
                    }
                    groupBy: {
                        args: Prisma.tb_payment_historyGroupByArgs<ExtArgs>
                        result: $Utils.Optional<Tb_payment_historyGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.tb_payment_historyCountArgs<ExtArgs>
                        result: $Utils.Optional<Tb_payment_historyCountAggregateOutputType> | number
                    }
                }
            }
            tb_trip: {
                payload: Prisma.$tb_tripPayload<ExtArgs>
                fields: Prisma.tb_tripFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.tb_tripFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_tripPayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.tb_tripFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_tripPayload>
                    }
                    findFirst: {
                        args: Prisma.tb_tripFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_tripPayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.tb_tripFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_tripPayload>
                    }
                    findMany: {
                        args: Prisma.tb_tripFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_tripPayload>[]
                    }
                    create: {
                        args: Prisma.tb_tripCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_tripPayload>
                    }
                    createMany: {
                        args: Prisma.tb_tripCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    createManyAndReturn: {
                        args: Prisma.tb_tripCreateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_tripPayload>[]
                    }
                    delete: {
                        args: Prisma.tb_tripDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_tripPayload>
                    }
                    update: {
                        args: Prisma.tb_tripUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_tripPayload>
                    }
                    deleteMany: {
                        args: Prisma.tb_tripDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.tb_tripUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateManyAndReturn: {
                        args: Prisma.tb_tripUpdateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_tripPayload>[]
                    }
                    upsert: {
                        args: Prisma.tb_tripUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_tripPayload>
                    }
                    aggregate: {
                        args: Prisma.Tb_tripAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateTb_trip>
                    }
                    groupBy: {
                        args: Prisma.tb_tripGroupByArgs<ExtArgs>
                        result: $Utils.Optional<Tb_tripGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.tb_tripCountArgs<ExtArgs>
                        result: $Utils.Optional<Tb_tripCountAggregateOutputType> | number
                    }
                }
            }
            tb_trip_invoice: {
                payload: Prisma.$tb_trip_invoicePayload<ExtArgs>
                fields: Prisma.tb_trip_invoiceFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.tb_trip_invoiceFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_trip_invoicePayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.tb_trip_invoiceFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_trip_invoicePayload>
                    }
                    findFirst: {
                        args: Prisma.tb_trip_invoiceFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_trip_invoicePayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.tb_trip_invoiceFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_trip_invoicePayload>
                    }
                    findMany: {
                        args: Prisma.tb_trip_invoiceFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_trip_invoicePayload>[]
                    }
                    create: {
                        args: Prisma.tb_trip_invoiceCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_trip_invoicePayload>
                    }
                    createMany: {
                        args: Prisma.tb_trip_invoiceCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    createManyAndReturn: {
                        args: Prisma.tb_trip_invoiceCreateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_trip_invoicePayload>[]
                    }
                    delete: {
                        args: Prisma.tb_trip_invoiceDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_trip_invoicePayload>
                    }
                    update: {
                        args: Prisma.tb_trip_invoiceUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_trip_invoicePayload>
                    }
                    deleteMany: {
                        args: Prisma.tb_trip_invoiceDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.tb_trip_invoiceUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateManyAndReturn: {
                        args: Prisma.tb_trip_invoiceUpdateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_trip_invoicePayload>[]
                    }
                    upsert: {
                        args: Prisma.tb_trip_invoiceUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_trip_invoicePayload>
                    }
                    aggregate: {
                        args: Prisma.Tb_trip_invoiceAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateTb_trip_invoice>
                    }
                    groupBy: {
                        args: Prisma.tb_trip_invoiceGroupByArgs<ExtArgs>
                        result: $Utils.Optional<Tb_trip_invoiceGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.tb_trip_invoiceCountArgs<ExtArgs>
                        result: $Utils.Optional<Tb_trip_invoiceCountAggregateOutputType> | number
                    }
                }
            }
            tb_user: {
                payload: Prisma.$tb_userPayload<ExtArgs>
                fields: Prisma.tb_userFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.tb_userFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_userPayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.tb_userFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_userPayload>
                    }
                    findFirst: {
                        args: Prisma.tb_userFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_userPayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.tb_userFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_userPayload>
                    }
                    findMany: {
                        args: Prisma.tb_userFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_userPayload>[]
                    }
                    create: {
                        args: Prisma.tb_userCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_userPayload>
                    }
                    createMany: {
                        args: Prisma.tb_userCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    createManyAndReturn: {
                        args: Prisma.tb_userCreateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_userPayload>[]
                    }
                    delete: {
                        args: Prisma.tb_userDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_userPayload>
                    }
                    update: {
                        args: Prisma.tb_userUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_userPayload>
                    }
                    deleteMany: {
                        args: Prisma.tb_userDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.tb_userUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateManyAndReturn: {
                        args: Prisma.tb_userUpdateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_userPayload>[]
                    }
                    upsert: {
                        args: Prisma.tb_userUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$tb_userPayload>
                    }
                    aggregate: {
                        args: Prisma.Tb_userAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateTb_user>
                    }
                    groupBy: {
                        args: Prisma.tb_userGroupByArgs<ExtArgs>
                        result: $Utils.Optional<Tb_userGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.tb_userCountArgs<ExtArgs>
                        result: $Utils.Optional<Tb_userCountAggregateOutputType> | number
                    }
                }
            }
        }
    } & {
        other: {
            payload: any
            operations: {
                $executeRaw: {
                    args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]]
                    result: any
                }
                $executeRawUnsafe: {
                    args: [query: string, ...values: any[]]
                    result: any
                }
                $queryRaw: {
                    args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]]
                    result: any
                }
                $queryRawUnsafe: {
                    args: [query: string, ...values: any[]]
                    result: any
                }
            }
        }
    }
    export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
    export type DefaultPrismaClient = PrismaClient
    export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
    export interface PrismaClientOptions {
        /**
         * Overwrites the datasource url from your schema.prisma file
         */
        datasources?: Datasources
        /**
         * Overwrites the datasource url from your schema.prisma file
         */
        datasourceUrl?: string
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
         * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    }
    export type GlobalOmitConfig = {
        tb_destination?: tb_destinationOmit
        tb_payment_status?: tb_payment_statusOmit
        tb_payment_type?: tb_payment_typeOmit
        tb_role?: tb_roleOmit
        tb_trip_status?: tb_trip_statusOmit
        tb_payment_history?: tb_payment_historyOmit
        tb_trip?: tb_tripOmit
        tb_trip_invoice?: tb_trip_invoiceOmit
        tb_user?: tb_userOmit
    }

    /* Types for Logging */
    export type LogLevel = 'info' | 'query' | 'warn' | 'error'
    export type LogDefinition = {
        level: LogLevel
        emit: 'stdout' | 'event'
    }

    export type CheckIsLogLevel<T> = T extends LogLevel ? T : never

    export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>

    export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never

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

    /**
     * These options are being passed into the middleware as "params"
     */
    export type MiddlewareParams = {
        model?: ModelName
        action: PrismaAction
        args: any
        dataPath: string[]
        runInTransaction: boolean
    }

    /**
     * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
     */
    export type Middleware<T = any> = (
        params: MiddlewareParams,
        next: (params: MiddlewareParams) => $Utils.JsPromise<T>
    ) => $Utils.JsPromise<T>

    // tested in getLogLevel.test.ts
    export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined

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
     * Count Type Tb_destinationCountOutputType
     */

    export type Tb_destinationCountOutputType = {
        tb_trip: number
    }

    export type Tb_destinationCountOutputTypeSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        tb_trip?: boolean | Tb_destinationCountOutputTypeCountTb_tripArgs
    }

    // Custom InputTypes
    /**
     * Tb_destinationCountOutputType without action
     */
    export type Tb_destinationCountOutputTypeDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Tb_destinationCountOutputType
         */
        select?: Tb_destinationCountOutputTypeSelect<ExtArgs> | null
    }

    /**
     * Tb_destinationCountOutputType without action
     */
    export type Tb_destinationCountOutputTypeCountTb_tripArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: tb_tripWhereInput
    }

    /**
     * Count Type Tb_payment_statusCountOutputType
     */

    export type Tb_payment_statusCountOutputType = {
        tb_payment_history: number
    }

    export type Tb_payment_statusCountOutputTypeSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        tb_payment_history?: boolean | Tb_payment_statusCountOutputTypeCountTb_payment_historyArgs
    }

    // Custom InputTypes
    /**
     * Tb_payment_statusCountOutputType without action
     */
    export type Tb_payment_statusCountOutputTypeDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Tb_payment_statusCountOutputType
         */
        select?: Tb_payment_statusCountOutputTypeSelect<ExtArgs> | null
    }

    /**
     * Tb_payment_statusCountOutputType without action
     */
    export type Tb_payment_statusCountOutputTypeCountTb_payment_historyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: tb_payment_historyWhereInput
    }

    /**
     * Count Type Tb_payment_typeCountOutputType
     */

    export type Tb_payment_typeCountOutputType = {
        tb_trip_invoice: number
    }

    export type Tb_payment_typeCountOutputTypeSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        tb_trip_invoice?: boolean | Tb_payment_typeCountOutputTypeCountTb_trip_invoiceArgs
    }

    // Custom InputTypes
    /**
     * Tb_payment_typeCountOutputType without action
     */
    export type Tb_payment_typeCountOutputTypeDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Tb_payment_typeCountOutputType
         */
        select?: Tb_payment_typeCountOutputTypeSelect<ExtArgs> | null
    }

    /**
     * Tb_payment_typeCountOutputType without action
     */
    export type Tb_payment_typeCountOutputTypeCountTb_trip_invoiceArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: tb_trip_invoiceWhereInput
    }

    /**
     * Count Type Tb_roleCountOutputType
     */

    export type Tb_roleCountOutputType = {
        tb_user: number
    }

    export type Tb_roleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        tb_user?: boolean | Tb_roleCountOutputTypeCountTb_userArgs
    }

    // Custom InputTypes
    /**
     * Tb_roleCountOutputType without action
     */
    export type Tb_roleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        {
            /**
             * Select specific fields to fetch from the Tb_roleCountOutputType
             */
            select?: Tb_roleCountOutputTypeSelect<ExtArgs> | null
        }

    /**
     * Tb_roleCountOutputType without action
     */
    export type Tb_roleCountOutputTypeCountTb_userArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: tb_userWhereInput
    }

    /**
     * Count Type Tb_trip_statusCountOutputType
     */

    export type Tb_trip_statusCountOutputType = {
        tb_trip: number
    }

    export type Tb_trip_statusCountOutputTypeSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        tb_trip?: boolean | Tb_trip_statusCountOutputTypeCountTb_tripArgs
    }

    // Custom InputTypes
    /**
     * Tb_trip_statusCountOutputType without action
     */
    export type Tb_trip_statusCountOutputTypeDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Tb_trip_statusCountOutputType
         */
        select?: Tb_trip_statusCountOutputTypeSelect<ExtArgs> | null
    }

    /**
     * Tb_trip_statusCountOutputType without action
     */
    export type Tb_trip_statusCountOutputTypeCountTb_tripArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: tb_tripWhereInput
    }

    /**
     * Count Type Tb_tripCountOutputType
     */

    export type Tb_tripCountOutputType = {
        tb_trip_invoice: number
    }

    export type Tb_tripCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        tb_trip_invoice?: boolean | Tb_tripCountOutputTypeCountTb_trip_invoiceArgs
    }

    // Custom InputTypes
    /**
     * Tb_tripCountOutputType without action
     */
    export type Tb_tripCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        {
            /**
             * Select specific fields to fetch from the Tb_tripCountOutputType
             */
            select?: Tb_tripCountOutputTypeSelect<ExtArgs> | null
        }

    /**
     * Tb_tripCountOutputType without action
     */
    export type Tb_tripCountOutputTypeCountTb_trip_invoiceArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: tb_trip_invoiceWhereInput
    }

    /**
     * Count Type Tb_trip_invoiceCountOutputType
     */

    export type Tb_trip_invoiceCountOutputType = {
        tb_payment_history: number
    }

    export type Tb_trip_invoiceCountOutputTypeSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        tb_payment_history?: boolean | Tb_trip_invoiceCountOutputTypeCountTb_payment_historyArgs
    }

    // Custom InputTypes
    /**
     * Tb_trip_invoiceCountOutputType without action
     */
    export type Tb_trip_invoiceCountOutputTypeDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Tb_trip_invoiceCountOutputType
         */
        select?: Tb_trip_invoiceCountOutputTypeSelect<ExtArgs> | null
    }

    /**
     * Tb_trip_invoiceCountOutputType without action
     */
    export type Tb_trip_invoiceCountOutputTypeCountTb_payment_historyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: tb_payment_historyWhereInput
    }

    /**
     * Count Type Tb_userCountOutputType
     */

    export type Tb_userCountOutputType = {
        tb_trip: number
    }

    export type Tb_userCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        tb_trip?: boolean | Tb_userCountOutputTypeCountTb_tripArgs
    }

    // Custom InputTypes
    /**
     * Tb_userCountOutputType without action
     */
    export type Tb_userCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        {
            /**
             * Select specific fields to fetch from the Tb_userCountOutputType
             */
            select?: Tb_userCountOutputTypeSelect<ExtArgs> | null
        }

    /**
     * Tb_userCountOutputType without action
     */
    export type Tb_userCountOutputTypeCountTb_tripArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: tb_tripWhereInput
    }

    /**
     * Models
     */

    /**
     * Model tb_destination
     */

    export type AggregateTb_destination = {
        _count: Tb_destinationCountAggregateOutputType | null
        _avg: Tb_destinationAvgAggregateOutputType | null
        _sum: Tb_destinationSumAggregateOutputType | null
        _min: Tb_destinationMinAggregateOutputType | null
        _max: Tb_destinationMaxAggregateOutputType | null
    }

    export type Tb_destinationAvgAggregateOutputType = {
        destination_id: number | null
        quota: number | null
        price: Decimal | null
    }

    export type Tb_destinationSumAggregateOutputType = {
        destination_id: bigint | null
        quota: bigint | null
        price: Decimal | null
    }

    export type Tb_destinationMinAggregateOutputType = {
        destination_id: bigint | null
        name: string | null
        quota: bigint | null
        is_open: boolean | null
        price: Decimal | null
    }

    export type Tb_destinationMaxAggregateOutputType = {
        destination_id: bigint | null
        name: string | null
        quota: bigint | null
        is_open: boolean | null
        price: Decimal | null
    }

    export type Tb_destinationCountAggregateOutputType = {
        destination_id: number
        name: number
        destinations: number
        quota: number
        is_open: number
        price: number
        _all: number
    }

    export type Tb_destinationAvgAggregateInputType = {
        destination_id?: true
        quota?: true
        price?: true
    }

    export type Tb_destinationSumAggregateInputType = {
        destination_id?: true
        quota?: true
        price?: true
    }

    export type Tb_destinationMinAggregateInputType = {
        destination_id?: true
        name?: true
        quota?: true
        is_open?: true
        price?: true
    }

    export type Tb_destinationMaxAggregateInputType = {
        destination_id?: true
        name?: true
        quota?: true
        is_open?: true
        price?: true
    }

    export type Tb_destinationCountAggregateInputType = {
        destination_id?: true
        name?: true
        destinations?: true
        quota?: true
        is_open?: true
        price?: true
        _all?: true
    }

    export type Tb_destinationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which tb_destination to aggregate.
         */
        where?: tb_destinationWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of tb_destinations to fetch.
         */
        orderBy?: tb_destinationOrderByWithRelationInput | tb_destinationOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: tb_destinationWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` tb_destinations from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` tb_destinations.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned tb_destinations
         **/
        _count?: true | Tb_destinationCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to average
         **/
        _avg?: Tb_destinationAvgAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to sum
         **/
        _sum?: Tb_destinationSumAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: Tb_destinationMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: Tb_destinationMaxAggregateInputType
    }

    export type GetTb_destinationAggregateType<T extends Tb_destinationAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_destination]: P extends '_count' | 'count'
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateTb_destination[P]>
            : GetScalarType<T[P], AggregateTb_destination[P]>
    }

    export type tb_destinationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: tb_destinationWhereInput
        orderBy?: tb_destinationOrderByWithAggregationInput | tb_destinationOrderByWithAggregationInput[]
        by: Tb_destinationScalarFieldEnum[] | Tb_destinationScalarFieldEnum
        having?: tb_destinationScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: Tb_destinationCountAggregateInputType | true
        _avg?: Tb_destinationAvgAggregateInputType
        _sum?: Tb_destinationSumAggregateInputType
        _min?: Tb_destinationMinAggregateInputType
        _max?: Tb_destinationMaxAggregateInputType
    }

    export type Tb_destinationGroupByOutputType = {
        destination_id: bigint
        name: string | null
        destinations: string[]
        quota: bigint | null
        is_open: boolean | null
        price: Decimal | null
        _count: Tb_destinationCountAggregateOutputType | null
        _avg: Tb_destinationAvgAggregateOutputType | null
        _sum: Tb_destinationSumAggregateOutputType | null
        _min: Tb_destinationMinAggregateOutputType | null
        _max: Tb_destinationMaxAggregateOutputType | null
    }

    type GetTb_destinationGroupByPayload<T extends tb_destinationGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<Tb_destinationGroupByOutputType, T['by']> & {
                [P in keyof T & keyof Tb_destinationGroupByOutputType]: P extends '_count'
                    ? T[P] extends boolean
                        ? number
                        : GetScalarType<T[P], Tb_destinationGroupByOutputType[P]>
                    : GetScalarType<T[P], Tb_destinationGroupByOutputType[P]>
            }
        >
    >

    export type tb_destinationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        $Extensions.GetSelect<
            {
                destination_id?: boolean
                name?: boolean
                destinations?: boolean
                quota?: boolean
                is_open?: boolean
                price?: boolean
                tb_trip?: boolean | tb_destination$tb_tripArgs<ExtArgs>
                _count?: boolean | Tb_destinationCountOutputTypeDefaultArgs<ExtArgs>
            },
            ExtArgs['result']['tb_destination']
        >

    export type tb_destinationSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            destination_id?: boolean
            name?: boolean
            destinations?: boolean
            quota?: boolean
            is_open?: boolean
            price?: boolean
        },
        ExtArgs['result']['tb_destination']
    >

    export type tb_destinationSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            destination_id?: boolean
            name?: boolean
            destinations?: boolean
            quota?: boolean
            is_open?: boolean
            price?: boolean
        },
        ExtArgs['result']['tb_destination']
    >

    export type tb_destinationSelectScalar = {
        destination_id?: boolean
        name?: boolean
        destinations?: boolean
        quota?: boolean
        is_open?: boolean
        price?: boolean
    }

    export type tb_destinationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        $Extensions.GetOmit<
            'destination_id' | 'name' | 'destinations' | 'quota' | 'is_open' | 'price',
            ExtArgs['result']['tb_destination']
        >
    export type tb_destinationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        tb_trip?: boolean | tb_destination$tb_tripArgs<ExtArgs>
        _count?: boolean | Tb_destinationCountOutputTypeDefaultArgs<ExtArgs>
    }
    export type tb_destinationIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {}
    export type tb_destinationIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {}

    export type $tb_destinationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: 'tb_destination'
        objects: {
            tb_trip: Prisma.$tb_tripPayload<ExtArgs>[]
        }
        scalars: $Extensions.GetPayloadResult<
            {
                destination_id: bigint
                name: string | null
                destinations: string[]
                quota: bigint | null
                is_open: boolean | null
                price: Prisma.Decimal | null
            },
            ExtArgs['result']['tb_destination']
        >
        composites: {}
    }

    type tb_destinationGetPayload<S extends boolean | null | undefined | tb_destinationDefaultArgs> = $Result.GetResult<
        Prisma.$tb_destinationPayload,
        S
    >

    type tb_destinationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
        tb_destinationFindManyArgs,
        'select' | 'include' | 'distinct' | 'omit'
    > & {
        select?: Tb_destinationCountAggregateInputType | true
    }

    export interface tb_destinationDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_destination']; meta: { name: 'tb_destination' } }
        /**
         * Find zero or one Tb_destination that matches the filter.
         * @param {tb_destinationFindUniqueArgs} args - Arguments to find a Tb_destination
         * @example
         * // Get one Tb_destination
         * const tb_destination = await prisma.tb_destination.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends tb_destinationFindUniqueArgs>(
            args: SelectSubset<T, tb_destinationFindUniqueArgs<ExtArgs>>
        ): Prisma__tb_destinationClient<
            $Result.GetResult<Prisma.$tb_destinationPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find one Tb_destination that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {tb_destinationFindUniqueOrThrowArgs} args - Arguments to find a Tb_destination
         * @example
         * // Get one Tb_destination
         * const tb_destination = await prisma.tb_destination.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends tb_destinationFindUniqueOrThrowArgs>(
            args: SelectSubset<T, tb_destinationFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__tb_destinationClient<
            $Result.GetResult<Prisma.$tb_destinationPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first Tb_destination that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_destinationFindFirstArgs} args - Arguments to find a Tb_destination
         * @example
         * // Get one Tb_destination
         * const tb_destination = await prisma.tb_destination.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends tb_destinationFindFirstArgs>(
            args?: SelectSubset<T, tb_destinationFindFirstArgs<ExtArgs>>
        ): Prisma__tb_destinationClient<
            $Result.GetResult<Prisma.$tb_destinationPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first Tb_destination that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_destinationFindFirstOrThrowArgs} args - Arguments to find a Tb_destination
         * @example
         * // Get one Tb_destination
         * const tb_destination = await prisma.tb_destination.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends tb_destinationFindFirstOrThrowArgs>(
            args?: SelectSubset<T, tb_destinationFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__tb_destinationClient<
            $Result.GetResult<Prisma.$tb_destinationPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find zero or more Tb_destinations that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_destinationFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Tb_destinations
         * const tb_destinations = await prisma.tb_destination.findMany()
         *
         * // Get first 10 Tb_destinations
         * const tb_destinations = await prisma.tb_destination.findMany({ take: 10 })
         *
         * // Only select the `destination_id`
         * const tb_destinationWithDestination_idOnly = await prisma.tb_destination.findMany({ select: { destination_id: true } })
         *
         */
        findMany<T extends tb_destinationFindManyArgs>(
            args?: SelectSubset<T, tb_destinationFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$tb_destinationPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
        >

        /**
         * Create a Tb_destination.
         * @param {tb_destinationCreateArgs} args - Arguments to create a Tb_destination.
         * @example
         * // Create one Tb_destination
         * const Tb_destination = await prisma.tb_destination.create({
         *   data: {
         *     // ... data to create a Tb_destination
         *   }
         * })
         *
         */
        create<T extends tb_destinationCreateArgs>(
            args: SelectSubset<T, tb_destinationCreateArgs<ExtArgs>>
        ): Prisma__tb_destinationClient<
            $Result.GetResult<Prisma.$tb_destinationPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Create many Tb_destinations.
         * @param {tb_destinationCreateManyArgs} args - Arguments to create many Tb_destinations.
         * @example
         * // Create many Tb_destinations
         * const tb_destination = await prisma.tb_destination.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends tb_destinationCreateManyArgs>(
            args?: SelectSubset<T, tb_destinationCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Create many Tb_destinations and returns the data saved in the database.
         * @param {tb_destinationCreateManyAndReturnArgs} args - Arguments to create many Tb_destinations.
         * @example
         * // Create many Tb_destinations
         * const tb_destination = await prisma.tb_destination.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Tb_destinations and only return the `destination_id`
         * const tb_destinationWithDestination_idOnly = await prisma.tb_destination.createManyAndReturn({
         *   select: { destination_id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends tb_destinationCreateManyAndReturnArgs>(
            args?: SelectSubset<T, tb_destinationCreateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$tb_destinationPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
        >

        /**
         * Delete a Tb_destination.
         * @param {tb_destinationDeleteArgs} args - Arguments to delete one Tb_destination.
         * @example
         * // Delete one Tb_destination
         * const Tb_destination = await prisma.tb_destination.delete({
         *   where: {
         *     // ... filter to delete one Tb_destination
         *   }
         * })
         *
         */
        delete<T extends tb_destinationDeleteArgs>(
            args: SelectSubset<T, tb_destinationDeleteArgs<ExtArgs>>
        ): Prisma__tb_destinationClient<
            $Result.GetResult<Prisma.$tb_destinationPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Update one Tb_destination.
         * @param {tb_destinationUpdateArgs} args - Arguments to update one Tb_destination.
         * @example
         * // Update one Tb_destination
         * const tb_destination = await prisma.tb_destination.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends tb_destinationUpdateArgs>(
            args: SelectSubset<T, tb_destinationUpdateArgs<ExtArgs>>
        ): Prisma__tb_destinationClient<
            $Result.GetResult<Prisma.$tb_destinationPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Delete zero or more Tb_destinations.
         * @param {tb_destinationDeleteManyArgs} args - Arguments to filter Tb_destinations to delete.
         * @example
         * // Delete a few Tb_destinations
         * const { count } = await prisma.tb_destination.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends tb_destinationDeleteManyArgs>(
            args?: SelectSubset<T, tb_destinationDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Tb_destinations.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_destinationUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Tb_destinations
         * const tb_destination = await prisma.tb_destination.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends tb_destinationUpdateManyArgs>(
            args: SelectSubset<T, tb_destinationUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Tb_destinations and returns the data updated in the database.
         * @param {tb_destinationUpdateManyAndReturnArgs} args - Arguments to update many Tb_destinations.
         * @example
         * // Update many Tb_destinations
         * const tb_destination = await prisma.tb_destination.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more Tb_destinations and only return the `destination_id`
         * const tb_destinationWithDestination_idOnly = await prisma.tb_destination.updateManyAndReturn({
         *   select: { destination_id: true },
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
        updateManyAndReturn<T extends tb_destinationUpdateManyAndReturnArgs>(
            args: SelectSubset<T, tb_destinationUpdateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$tb_destinationPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
        >

        /**
         * Create or update one Tb_destination.
         * @param {tb_destinationUpsertArgs} args - Arguments to update or create a Tb_destination.
         * @example
         * // Update or create a Tb_destination
         * const tb_destination = await prisma.tb_destination.upsert({
         *   create: {
         *     // ... data to create a Tb_destination
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Tb_destination we want to update
         *   }
         * })
         */
        upsert<T extends tb_destinationUpsertArgs>(
            args: SelectSubset<T, tb_destinationUpsertArgs<ExtArgs>>
        ): Prisma__tb_destinationClient<
            $Result.GetResult<Prisma.$tb_destinationPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Count the number of Tb_destinations.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_destinationCountArgs} args - Arguments to filter Tb_destinations to count.
         * @example
         * // Count the number of Tb_destinations
         * const count = await prisma.tb_destination.count({
         *   where: {
         *     // ... the filter for the Tb_destinations we want to count
         *   }
         * })
         **/
        count<T extends tb_destinationCountArgs>(
            args?: Subset<T, tb_destinationCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
                ? T['select'] extends true
                    ? number
                    : GetScalarType<T['select'], Tb_destinationCountAggregateOutputType>
                : number
        >

        /**
         * Allows you to perform aggregations operations on a Tb_destination.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {Tb_destinationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends Tb_destinationAggregateArgs>(
            args: Subset<T, Tb_destinationAggregateArgs>
        ): Prisma.PrismaPromise<GetTb_destinationAggregateType<T>>

        /**
         * Group by Tb_destination.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_destinationGroupByArgs} args - Group by arguments.
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
            T extends tb_destinationGroupByArgs,
            HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: tb_destinationGroupByArgs['orderBy'] }
                : { orderBy?: tb_destinationGroupByArgs['orderBy'] },
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
                              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
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
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, tb_destinationGroupByArgs, OrderByArg> & InputErrors
        ): {} extends InputErrors ? GetTb_destinationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
        /**
         * Fields of the tb_destination model
         */
        readonly fields: tb_destinationFieldRefs
    }

    /**
     * The delegate class that acts as a "Promise-like" for tb_destination.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__tb_destinationClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: 'PrismaPromise'
        tb_trip<T extends tb_destination$tb_tripArgs<ExtArgs> = {}>(
            args?: Subset<T, tb_destination$tb_tripArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$tb_tripPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
        >
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
        ): $Utils.JsPromise<TResult1 | TResult2>
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
        ): $Utils.JsPromise<T | TResult>
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
    }

    /**
     * Fields of the tb_destination model
     */
    interface tb_destinationFieldRefs {
        readonly destination_id: FieldRef<'tb_destination', 'BigInt'>
        readonly name: FieldRef<'tb_destination', 'String'>
        readonly destinations: FieldRef<'tb_destination', 'String[]'>
        readonly quota: FieldRef<'tb_destination', 'BigInt'>
        readonly is_open: FieldRef<'tb_destination', 'Boolean'>
        readonly price: FieldRef<'tb_destination', 'Decimal'>
    }

    // Custom InputTypes
    /**
     * tb_destination findUnique
     */
    export type tb_destinationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_destination
         */
        select?: tb_destinationSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_destination
         */
        omit?: tb_destinationOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_destinationInclude<ExtArgs> | null
        /**
         * Filter, which tb_destination to fetch.
         */
        where: tb_destinationWhereUniqueInput
    }

    /**
     * tb_destination findUniqueOrThrow
     */
    export type tb_destinationFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the tb_destination
         */
        select?: tb_destinationSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_destination
         */
        omit?: tb_destinationOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_destinationInclude<ExtArgs> | null
        /**
         * Filter, which tb_destination to fetch.
         */
        where: tb_destinationWhereUniqueInput
    }

    /**
     * tb_destination findFirst
     */
    export type tb_destinationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_destination
         */
        select?: tb_destinationSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_destination
         */
        omit?: tb_destinationOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_destinationInclude<ExtArgs> | null
        /**
         * Filter, which tb_destination to fetch.
         */
        where?: tb_destinationWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of tb_destinations to fetch.
         */
        orderBy?: tb_destinationOrderByWithRelationInput | tb_destinationOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for tb_destinations.
         */
        cursor?: tb_destinationWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` tb_destinations from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` tb_destinations.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of tb_destinations.
         */
        distinct?: Tb_destinationScalarFieldEnum | Tb_destinationScalarFieldEnum[]
    }

    /**
     * tb_destination findFirstOrThrow
     */
    export type tb_destinationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        {
            /**
             * Select specific fields to fetch from the tb_destination
             */
            select?: tb_destinationSelect<ExtArgs> | null
            /**
             * Omit specific fields from the tb_destination
             */
            omit?: tb_destinationOmit<ExtArgs> | null
            /**
             * Choose, which related nodes to fetch as well
             */
            include?: tb_destinationInclude<ExtArgs> | null
            /**
             * Filter, which tb_destination to fetch.
             */
            where?: tb_destinationWhereInput
            /**
             * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
             *
             * Determine the order of tb_destinations to fetch.
             */
            orderBy?: tb_destinationOrderByWithRelationInput | tb_destinationOrderByWithRelationInput[]
            /**
             * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
             *
             * Sets the position for searching for tb_destinations.
             */
            cursor?: tb_destinationWhereUniqueInput
            /**
             * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
             *
             * Take `±n` tb_destinations from the position of the cursor.
             */
            take?: number
            /**
             * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
             *
             * Skip the first `n` tb_destinations.
             */
            skip?: number
            /**
             * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
             *
             * Filter by unique combinations of tb_destinations.
             */
            distinct?: Tb_destinationScalarFieldEnum | Tb_destinationScalarFieldEnum[]
        }

    /**
     * tb_destination findMany
     */
    export type tb_destinationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_destination
         */
        select?: tb_destinationSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_destination
         */
        omit?: tb_destinationOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_destinationInclude<ExtArgs> | null
        /**
         * Filter, which tb_destinations to fetch.
         */
        where?: tb_destinationWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of tb_destinations to fetch.
         */
        orderBy?: tb_destinationOrderByWithRelationInput | tb_destinationOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing tb_destinations.
         */
        cursor?: tb_destinationWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` tb_destinations from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` tb_destinations.
         */
        skip?: number
        distinct?: Tb_destinationScalarFieldEnum | Tb_destinationScalarFieldEnum[]
    }

    /**
     * tb_destination create
     */
    export type tb_destinationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_destination
         */
        select?: tb_destinationSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_destination
         */
        omit?: tb_destinationOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_destinationInclude<ExtArgs> | null
        /**
         * The data needed to create a tb_destination.
         */
        data?: XOR<tb_destinationCreateInput, tb_destinationUncheckedCreateInput>
    }

    /**
     * tb_destination createMany
     */
    export type tb_destinationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many tb_destinations.
         */
        data: tb_destinationCreateManyInput | tb_destinationCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * tb_destination createManyAndReturn
     */
    export type tb_destinationCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the tb_destination
         */
        select?: tb_destinationSelectCreateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the tb_destination
         */
        omit?: tb_destinationOmit<ExtArgs> | null
        /**
         * The data used to create many tb_destinations.
         */
        data: tb_destinationCreateManyInput | tb_destinationCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * tb_destination update
     */
    export type tb_destinationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_destination
         */
        select?: tb_destinationSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_destination
         */
        omit?: tb_destinationOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_destinationInclude<ExtArgs> | null
        /**
         * The data needed to update a tb_destination.
         */
        data: XOR<tb_destinationUpdateInput, tb_destinationUncheckedUpdateInput>
        /**
         * Choose, which tb_destination to update.
         */
        where: tb_destinationWhereUniqueInput
    }

    /**
     * tb_destination updateMany
     */
    export type tb_destinationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update tb_destinations.
         */
        data: XOR<tb_destinationUpdateManyMutationInput, tb_destinationUncheckedUpdateManyInput>
        /**
         * Filter which tb_destinations to update
         */
        where?: tb_destinationWhereInput
        /**
         * Limit how many tb_destinations to update.
         */
        limit?: number
    }

    /**
     * tb_destination updateManyAndReturn
     */
    export type tb_destinationUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the tb_destination
         */
        select?: tb_destinationSelectUpdateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the tb_destination
         */
        omit?: tb_destinationOmit<ExtArgs> | null
        /**
         * The data used to update tb_destinations.
         */
        data: XOR<tb_destinationUpdateManyMutationInput, tb_destinationUncheckedUpdateManyInput>
        /**
         * Filter which tb_destinations to update
         */
        where?: tb_destinationWhereInput
        /**
         * Limit how many tb_destinations to update.
         */
        limit?: number
    }

    /**
     * tb_destination upsert
     */
    export type tb_destinationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_destination
         */
        select?: tb_destinationSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_destination
         */
        omit?: tb_destinationOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_destinationInclude<ExtArgs> | null
        /**
         * The filter to search for the tb_destination to update in case it exists.
         */
        where: tb_destinationWhereUniqueInput
        /**
         * In case the tb_destination found by the `where` argument doesn't exist, create a new tb_destination with this data.
         */
        create: XOR<tb_destinationCreateInput, tb_destinationUncheckedCreateInput>
        /**
         * In case the tb_destination was found with the provided `where` argument, update it with this data.
         */
        update: XOR<tb_destinationUpdateInput, tb_destinationUncheckedUpdateInput>
    }

    /**
     * tb_destination delete
     */
    export type tb_destinationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_destination
         */
        select?: tb_destinationSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_destination
         */
        omit?: tb_destinationOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_destinationInclude<ExtArgs> | null
        /**
         * Filter which tb_destination to delete.
         */
        where: tb_destinationWhereUniqueInput
    }

    /**
     * tb_destination deleteMany
     */
    export type tb_destinationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which tb_destinations to delete
         */
        where?: tb_destinationWhereInput
        /**
         * Limit how many tb_destinations to delete.
         */
        limit?: number
    }

    /**
     * tb_destination.tb_trip
     */
    export type tb_destination$tb_tripArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_trip
         */
        select?: tb_tripSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip
         */
        omit?: tb_tripOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_tripInclude<ExtArgs> | null
        where?: tb_tripWhereInput
        orderBy?: tb_tripOrderByWithRelationInput | tb_tripOrderByWithRelationInput[]
        cursor?: tb_tripWhereUniqueInput
        take?: number
        skip?: number
        distinct?: Tb_tripScalarFieldEnum | Tb_tripScalarFieldEnum[]
    }

    /**
     * tb_destination without action
     */
    export type tb_destinationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_destination
         */
        select?: tb_destinationSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_destination
         */
        omit?: tb_destinationOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_destinationInclude<ExtArgs> | null
    }

    /**
     * Model tb_payment_status
     */

    export type AggregateTb_payment_status = {
        _count: Tb_payment_statusCountAggregateOutputType | null
        _avg: Tb_payment_statusAvgAggregateOutputType | null
        _sum: Tb_payment_statusSumAggregateOutputType | null
        _min: Tb_payment_statusMinAggregateOutputType | null
        _max: Tb_payment_statusMaxAggregateOutputType | null
    }

    export type Tb_payment_statusAvgAggregateOutputType = {
        pay_status_id: number | null
    }

    export type Tb_payment_statusSumAggregateOutputType = {
        pay_status_id: bigint | null
    }

    export type Tb_payment_statusMinAggregateOutputType = {
        pay_status_id: bigint | null
        Name: string | null
    }

    export type Tb_payment_statusMaxAggregateOutputType = {
        pay_status_id: bigint | null
        Name: string | null
    }

    export type Tb_payment_statusCountAggregateOutputType = {
        pay_status_id: number
        Name: number
        _all: number
    }

    export type Tb_payment_statusAvgAggregateInputType = {
        pay_status_id?: true
    }

    export type Tb_payment_statusSumAggregateInputType = {
        pay_status_id?: true
    }

    export type Tb_payment_statusMinAggregateInputType = {
        pay_status_id?: true
        Name?: true
    }

    export type Tb_payment_statusMaxAggregateInputType = {
        pay_status_id?: true
        Name?: true
    }

    export type Tb_payment_statusCountAggregateInputType = {
        pay_status_id?: true
        Name?: true
        _all?: true
    }

    export type Tb_payment_statusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which tb_payment_status to aggregate.
         */
        where?: tb_payment_statusWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of tb_payment_statuses to fetch.
         */
        orderBy?: tb_payment_statusOrderByWithRelationInput | tb_payment_statusOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: tb_payment_statusWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` tb_payment_statuses from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` tb_payment_statuses.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned tb_payment_statuses
         **/
        _count?: true | Tb_payment_statusCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to average
         **/
        _avg?: Tb_payment_statusAvgAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to sum
         **/
        _sum?: Tb_payment_statusSumAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: Tb_payment_statusMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: Tb_payment_statusMaxAggregateInputType
    }

    export type GetTb_payment_statusAggregateType<T extends Tb_payment_statusAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_payment_status]: P extends '_count' | 'count'
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateTb_payment_status[P]>
            : GetScalarType<T[P], AggregateTb_payment_status[P]>
    }

    export type tb_payment_statusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: tb_payment_statusWhereInput
        orderBy?: tb_payment_statusOrderByWithAggregationInput | tb_payment_statusOrderByWithAggregationInput[]
        by: Tb_payment_statusScalarFieldEnum[] | Tb_payment_statusScalarFieldEnum
        having?: tb_payment_statusScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: Tb_payment_statusCountAggregateInputType | true
        _avg?: Tb_payment_statusAvgAggregateInputType
        _sum?: Tb_payment_statusSumAggregateInputType
        _min?: Tb_payment_statusMinAggregateInputType
        _max?: Tb_payment_statusMaxAggregateInputType
    }

    export type Tb_payment_statusGroupByOutputType = {
        pay_status_id: bigint
        Name: string | null
        _count: Tb_payment_statusCountAggregateOutputType | null
        _avg: Tb_payment_statusAvgAggregateOutputType | null
        _sum: Tb_payment_statusSumAggregateOutputType | null
        _min: Tb_payment_statusMinAggregateOutputType | null
        _max: Tb_payment_statusMaxAggregateOutputType | null
    }

    type GetTb_payment_statusGroupByPayload<T extends tb_payment_statusGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<Tb_payment_statusGroupByOutputType, T['by']> & {
                [P in keyof T & keyof Tb_payment_statusGroupByOutputType]: P extends '_count'
                    ? T[P] extends boolean
                        ? number
                        : GetScalarType<T[P], Tb_payment_statusGroupByOutputType[P]>
                    : GetScalarType<T[P], Tb_payment_statusGroupByOutputType[P]>
            }
        >
    >

    export type tb_payment_statusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        $Extensions.GetSelect<
            {
                pay_status_id?: boolean
                Name?: boolean
                tb_payment_history?: boolean | tb_payment_status$tb_payment_historyArgs<ExtArgs>
                _count?: boolean | Tb_payment_statusCountOutputTypeDefaultArgs<ExtArgs>
            },
            ExtArgs['result']['tb_payment_status']
        >

    export type tb_payment_statusSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            pay_status_id?: boolean
            Name?: boolean
        },
        ExtArgs['result']['tb_payment_status']
    >

    export type tb_payment_statusSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            pay_status_id?: boolean
            Name?: boolean
        },
        ExtArgs['result']['tb_payment_status']
    >

    export type tb_payment_statusSelectScalar = {
        pay_status_id?: boolean
        Name?: boolean
    }

    export type tb_payment_statusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        $Extensions.GetOmit<'pay_status_id' | 'Name', ExtArgs['result']['tb_payment_status']>
    export type tb_payment_statusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        tb_payment_history?: boolean | tb_payment_status$tb_payment_historyArgs<ExtArgs>
        _count?: boolean | Tb_payment_statusCountOutputTypeDefaultArgs<ExtArgs>
    }
    export type tb_payment_statusIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {}
    export type tb_payment_statusIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {}

    export type $tb_payment_statusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: 'tb_payment_status'
        objects: {
            tb_payment_history: Prisma.$tb_payment_historyPayload<ExtArgs>[]
        }
        scalars: $Extensions.GetPayloadResult<
            {
                pay_status_id: bigint
                Name: string | null
            },
            ExtArgs['result']['tb_payment_status']
        >
        composites: {}
    }

    type tb_payment_statusGetPayload<S extends boolean | null | undefined | tb_payment_statusDefaultArgs> =
        $Result.GetResult<Prisma.$tb_payment_statusPayload, S>

    type tb_payment_statusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
        tb_payment_statusFindManyArgs,
        'select' | 'include' | 'distinct' | 'omit'
    > & {
        select?: Tb_payment_statusCountAggregateInputType | true
    }

    export interface tb_payment_statusDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>['model']['tb_payment_status']
            meta: { name: 'tb_payment_status' }
        }
        /**
         * Find zero or one Tb_payment_status that matches the filter.
         * @param {tb_payment_statusFindUniqueArgs} args - Arguments to find a Tb_payment_status
         * @example
         * // Get one Tb_payment_status
         * const tb_payment_status = await prisma.tb_payment_status.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends tb_payment_statusFindUniqueArgs>(
            args: SelectSubset<T, tb_payment_statusFindUniqueArgs<ExtArgs>>
        ): Prisma__tb_payment_statusClient<
            $Result.GetResult<Prisma.$tb_payment_statusPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find one Tb_payment_status that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {tb_payment_statusFindUniqueOrThrowArgs} args - Arguments to find a Tb_payment_status
         * @example
         * // Get one Tb_payment_status
         * const tb_payment_status = await prisma.tb_payment_status.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends tb_payment_statusFindUniqueOrThrowArgs>(
            args: SelectSubset<T, tb_payment_statusFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__tb_payment_statusClient<
            $Result.GetResult<Prisma.$tb_payment_statusPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first Tb_payment_status that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_payment_statusFindFirstArgs} args - Arguments to find a Tb_payment_status
         * @example
         * // Get one Tb_payment_status
         * const tb_payment_status = await prisma.tb_payment_status.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends tb_payment_statusFindFirstArgs>(
            args?: SelectSubset<T, tb_payment_statusFindFirstArgs<ExtArgs>>
        ): Prisma__tb_payment_statusClient<
            $Result.GetResult<Prisma.$tb_payment_statusPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first Tb_payment_status that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_payment_statusFindFirstOrThrowArgs} args - Arguments to find a Tb_payment_status
         * @example
         * // Get one Tb_payment_status
         * const tb_payment_status = await prisma.tb_payment_status.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends tb_payment_statusFindFirstOrThrowArgs>(
            args?: SelectSubset<T, tb_payment_statusFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__tb_payment_statusClient<
            $Result.GetResult<Prisma.$tb_payment_statusPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find zero or more Tb_payment_statuses that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_payment_statusFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Tb_payment_statuses
         * const tb_payment_statuses = await prisma.tb_payment_status.findMany()
         *
         * // Get first 10 Tb_payment_statuses
         * const tb_payment_statuses = await prisma.tb_payment_status.findMany({ take: 10 })
         *
         * // Only select the `pay_status_id`
         * const tb_payment_statusWithPay_status_idOnly = await prisma.tb_payment_status.findMany({ select: { pay_status_id: true } })
         *
         */
        findMany<T extends tb_payment_statusFindManyArgs>(
            args?: SelectSubset<T, tb_payment_statusFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$tb_payment_statusPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
        >

        /**
         * Create a Tb_payment_status.
         * @param {tb_payment_statusCreateArgs} args - Arguments to create a Tb_payment_status.
         * @example
         * // Create one Tb_payment_status
         * const Tb_payment_status = await prisma.tb_payment_status.create({
         *   data: {
         *     // ... data to create a Tb_payment_status
         *   }
         * })
         *
         */
        create<T extends tb_payment_statusCreateArgs>(
            args: SelectSubset<T, tb_payment_statusCreateArgs<ExtArgs>>
        ): Prisma__tb_payment_statusClient<
            $Result.GetResult<Prisma.$tb_payment_statusPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Create many Tb_payment_statuses.
         * @param {tb_payment_statusCreateManyArgs} args - Arguments to create many Tb_payment_statuses.
         * @example
         * // Create many Tb_payment_statuses
         * const tb_payment_status = await prisma.tb_payment_status.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends tb_payment_statusCreateManyArgs>(
            args?: SelectSubset<T, tb_payment_statusCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Create many Tb_payment_statuses and returns the data saved in the database.
         * @param {tb_payment_statusCreateManyAndReturnArgs} args - Arguments to create many Tb_payment_statuses.
         * @example
         * // Create many Tb_payment_statuses
         * const tb_payment_status = await prisma.tb_payment_status.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Tb_payment_statuses and only return the `pay_status_id`
         * const tb_payment_statusWithPay_status_idOnly = await prisma.tb_payment_status.createManyAndReturn({
         *   select: { pay_status_id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends tb_payment_statusCreateManyAndReturnArgs>(
            args?: SelectSubset<T, tb_payment_statusCreateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$tb_payment_statusPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
        >

        /**
         * Delete a Tb_payment_status.
         * @param {tb_payment_statusDeleteArgs} args - Arguments to delete one Tb_payment_status.
         * @example
         * // Delete one Tb_payment_status
         * const Tb_payment_status = await prisma.tb_payment_status.delete({
         *   where: {
         *     // ... filter to delete one Tb_payment_status
         *   }
         * })
         *
         */
        delete<T extends tb_payment_statusDeleteArgs>(
            args: SelectSubset<T, tb_payment_statusDeleteArgs<ExtArgs>>
        ): Prisma__tb_payment_statusClient<
            $Result.GetResult<Prisma.$tb_payment_statusPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Update one Tb_payment_status.
         * @param {tb_payment_statusUpdateArgs} args - Arguments to update one Tb_payment_status.
         * @example
         * // Update one Tb_payment_status
         * const tb_payment_status = await prisma.tb_payment_status.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends tb_payment_statusUpdateArgs>(
            args: SelectSubset<T, tb_payment_statusUpdateArgs<ExtArgs>>
        ): Prisma__tb_payment_statusClient<
            $Result.GetResult<Prisma.$tb_payment_statusPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Delete zero or more Tb_payment_statuses.
         * @param {tb_payment_statusDeleteManyArgs} args - Arguments to filter Tb_payment_statuses to delete.
         * @example
         * // Delete a few Tb_payment_statuses
         * const { count } = await prisma.tb_payment_status.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends tb_payment_statusDeleteManyArgs>(
            args?: SelectSubset<T, tb_payment_statusDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Tb_payment_statuses.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_payment_statusUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Tb_payment_statuses
         * const tb_payment_status = await prisma.tb_payment_status.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends tb_payment_statusUpdateManyArgs>(
            args: SelectSubset<T, tb_payment_statusUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Tb_payment_statuses and returns the data updated in the database.
         * @param {tb_payment_statusUpdateManyAndReturnArgs} args - Arguments to update many Tb_payment_statuses.
         * @example
         * // Update many Tb_payment_statuses
         * const tb_payment_status = await prisma.tb_payment_status.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more Tb_payment_statuses and only return the `pay_status_id`
         * const tb_payment_statusWithPay_status_idOnly = await prisma.tb_payment_status.updateManyAndReturn({
         *   select: { pay_status_id: true },
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
        updateManyAndReturn<T extends tb_payment_statusUpdateManyAndReturnArgs>(
            args: SelectSubset<T, tb_payment_statusUpdateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$tb_payment_statusPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
        >

        /**
         * Create or update one Tb_payment_status.
         * @param {tb_payment_statusUpsertArgs} args - Arguments to update or create a Tb_payment_status.
         * @example
         * // Update or create a Tb_payment_status
         * const tb_payment_status = await prisma.tb_payment_status.upsert({
         *   create: {
         *     // ... data to create a Tb_payment_status
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Tb_payment_status we want to update
         *   }
         * })
         */
        upsert<T extends tb_payment_statusUpsertArgs>(
            args: SelectSubset<T, tb_payment_statusUpsertArgs<ExtArgs>>
        ): Prisma__tb_payment_statusClient<
            $Result.GetResult<Prisma.$tb_payment_statusPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Count the number of Tb_payment_statuses.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_payment_statusCountArgs} args - Arguments to filter Tb_payment_statuses to count.
         * @example
         * // Count the number of Tb_payment_statuses
         * const count = await prisma.tb_payment_status.count({
         *   where: {
         *     // ... the filter for the Tb_payment_statuses we want to count
         *   }
         * })
         **/
        count<T extends tb_payment_statusCountArgs>(
            args?: Subset<T, tb_payment_statusCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
                ? T['select'] extends true
                    ? number
                    : GetScalarType<T['select'], Tb_payment_statusCountAggregateOutputType>
                : number
        >

        /**
         * Allows you to perform aggregations operations on a Tb_payment_status.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {Tb_payment_statusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends Tb_payment_statusAggregateArgs>(
            args: Subset<T, Tb_payment_statusAggregateArgs>
        ): Prisma.PrismaPromise<GetTb_payment_statusAggregateType<T>>

        /**
         * Group by Tb_payment_status.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_payment_statusGroupByArgs} args - Group by arguments.
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
            T extends tb_payment_statusGroupByArgs,
            HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: tb_payment_statusGroupByArgs['orderBy'] }
                : { orderBy?: tb_payment_statusGroupByArgs['orderBy'] },
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
                              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
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
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, tb_payment_statusGroupByArgs, OrderByArg> & InputErrors
        ): {} extends InputErrors ? GetTb_payment_statusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
        /**
         * Fields of the tb_payment_status model
         */
        readonly fields: tb_payment_statusFieldRefs
    }

    /**
     * The delegate class that acts as a "Promise-like" for tb_payment_status.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__tb_payment_statusClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: 'PrismaPromise'
        tb_payment_history<T extends tb_payment_status$tb_payment_historyArgs<ExtArgs> = {}>(
            args?: Subset<T, tb_payment_status$tb_payment_historyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$tb_payment_historyPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
        >
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
        ): $Utils.JsPromise<TResult1 | TResult2>
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
        ): $Utils.JsPromise<T | TResult>
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
    }

    /**
     * Fields of the tb_payment_status model
     */
    interface tb_payment_statusFieldRefs {
        readonly pay_status_id: FieldRef<'tb_payment_status', 'BigInt'>
        readonly Name: FieldRef<'tb_payment_status', 'String'>
    }

    // Custom InputTypes
    /**
     * tb_payment_status findUnique
     */
    export type tb_payment_statusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_payment_status
         */
        select?: tb_payment_statusSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_status
         */
        omit?: tb_payment_statusOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_payment_statusInclude<ExtArgs> | null
        /**
         * Filter, which tb_payment_status to fetch.
         */
        where: tb_payment_statusWhereUniqueInput
    }

    /**
     * tb_payment_status findUniqueOrThrow
     */
    export type tb_payment_statusFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the tb_payment_status
         */
        select?: tb_payment_statusSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_status
         */
        omit?: tb_payment_statusOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_payment_statusInclude<ExtArgs> | null
        /**
         * Filter, which tb_payment_status to fetch.
         */
        where: tb_payment_statusWhereUniqueInput
    }

    /**
     * tb_payment_status findFirst
     */
    export type tb_payment_statusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_payment_status
         */
        select?: tb_payment_statusSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_status
         */
        omit?: tb_payment_statusOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_payment_statusInclude<ExtArgs> | null
        /**
         * Filter, which tb_payment_status to fetch.
         */
        where?: tb_payment_statusWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of tb_payment_statuses to fetch.
         */
        orderBy?: tb_payment_statusOrderByWithRelationInput | tb_payment_statusOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for tb_payment_statuses.
         */
        cursor?: tb_payment_statusWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` tb_payment_statuses from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` tb_payment_statuses.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of tb_payment_statuses.
         */
        distinct?: Tb_payment_statusScalarFieldEnum | Tb_payment_statusScalarFieldEnum[]
    }

    /**
     * tb_payment_status findFirstOrThrow
     */
    export type tb_payment_statusFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the tb_payment_status
         */
        select?: tb_payment_statusSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_status
         */
        omit?: tb_payment_statusOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_payment_statusInclude<ExtArgs> | null
        /**
         * Filter, which tb_payment_status to fetch.
         */
        where?: tb_payment_statusWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of tb_payment_statuses to fetch.
         */
        orderBy?: tb_payment_statusOrderByWithRelationInput | tb_payment_statusOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for tb_payment_statuses.
         */
        cursor?: tb_payment_statusWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` tb_payment_statuses from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` tb_payment_statuses.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of tb_payment_statuses.
         */
        distinct?: Tb_payment_statusScalarFieldEnum | Tb_payment_statusScalarFieldEnum[]
    }

    /**
     * tb_payment_status findMany
     */
    export type tb_payment_statusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_payment_status
         */
        select?: tb_payment_statusSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_status
         */
        omit?: tb_payment_statusOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_payment_statusInclude<ExtArgs> | null
        /**
         * Filter, which tb_payment_statuses to fetch.
         */
        where?: tb_payment_statusWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of tb_payment_statuses to fetch.
         */
        orderBy?: tb_payment_statusOrderByWithRelationInput | tb_payment_statusOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing tb_payment_statuses.
         */
        cursor?: tb_payment_statusWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` tb_payment_statuses from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` tb_payment_statuses.
         */
        skip?: number
        distinct?: Tb_payment_statusScalarFieldEnum | Tb_payment_statusScalarFieldEnum[]
    }

    /**
     * tb_payment_status create
     */
    export type tb_payment_statusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_payment_status
         */
        select?: tb_payment_statusSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_status
         */
        omit?: tb_payment_statusOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_payment_statusInclude<ExtArgs> | null
        /**
         * The data needed to create a tb_payment_status.
         */
        data?: XOR<tb_payment_statusCreateInput, tb_payment_statusUncheckedCreateInput>
    }

    /**
     * tb_payment_status createMany
     */
    export type tb_payment_statusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many tb_payment_statuses.
         */
        data: tb_payment_statusCreateManyInput | tb_payment_statusCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * tb_payment_status createManyAndReturn
     */
    export type tb_payment_statusCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the tb_payment_status
         */
        select?: tb_payment_statusSelectCreateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_status
         */
        omit?: tb_payment_statusOmit<ExtArgs> | null
        /**
         * The data used to create many tb_payment_statuses.
         */
        data: tb_payment_statusCreateManyInput | tb_payment_statusCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * tb_payment_status update
     */
    export type tb_payment_statusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_payment_status
         */
        select?: tb_payment_statusSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_status
         */
        omit?: tb_payment_statusOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_payment_statusInclude<ExtArgs> | null
        /**
         * The data needed to update a tb_payment_status.
         */
        data: XOR<tb_payment_statusUpdateInput, tb_payment_statusUncheckedUpdateInput>
        /**
         * Choose, which tb_payment_status to update.
         */
        where: tb_payment_statusWhereUniqueInput
    }

    /**
     * tb_payment_status updateMany
     */
    export type tb_payment_statusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update tb_payment_statuses.
         */
        data: XOR<tb_payment_statusUpdateManyMutationInput, tb_payment_statusUncheckedUpdateManyInput>
        /**
         * Filter which tb_payment_statuses to update
         */
        where?: tb_payment_statusWhereInput
        /**
         * Limit how many tb_payment_statuses to update.
         */
        limit?: number
    }

    /**
     * tb_payment_status updateManyAndReturn
     */
    export type tb_payment_statusUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the tb_payment_status
         */
        select?: tb_payment_statusSelectUpdateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_status
         */
        omit?: tb_payment_statusOmit<ExtArgs> | null
        /**
         * The data used to update tb_payment_statuses.
         */
        data: XOR<tb_payment_statusUpdateManyMutationInput, tb_payment_statusUncheckedUpdateManyInput>
        /**
         * Filter which tb_payment_statuses to update
         */
        where?: tb_payment_statusWhereInput
        /**
         * Limit how many tb_payment_statuses to update.
         */
        limit?: number
    }

    /**
     * tb_payment_status upsert
     */
    export type tb_payment_statusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_payment_status
         */
        select?: tb_payment_statusSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_status
         */
        omit?: tb_payment_statusOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_payment_statusInclude<ExtArgs> | null
        /**
         * The filter to search for the tb_payment_status to update in case it exists.
         */
        where: tb_payment_statusWhereUniqueInput
        /**
         * In case the tb_payment_status found by the `where` argument doesn't exist, create a new tb_payment_status with this data.
         */
        create: XOR<tb_payment_statusCreateInput, tb_payment_statusUncheckedCreateInput>
        /**
         * In case the tb_payment_status was found with the provided `where` argument, update it with this data.
         */
        update: XOR<tb_payment_statusUpdateInput, tb_payment_statusUncheckedUpdateInput>
    }

    /**
     * tb_payment_status delete
     */
    export type tb_payment_statusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_payment_status
         */
        select?: tb_payment_statusSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_status
         */
        omit?: tb_payment_statusOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_payment_statusInclude<ExtArgs> | null
        /**
         * Filter which tb_payment_status to delete.
         */
        where: tb_payment_statusWhereUniqueInput
    }

    /**
     * tb_payment_status deleteMany
     */
    export type tb_payment_statusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which tb_payment_statuses to delete
         */
        where?: tb_payment_statusWhereInput
        /**
         * Limit how many tb_payment_statuses to delete.
         */
        limit?: number
    }

    /**
     * tb_payment_status.tb_payment_history
     */
    export type tb_payment_status$tb_payment_historyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the tb_payment_history
         */
        select?: tb_payment_historySelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_history
         */
        omit?: tb_payment_historyOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_payment_historyInclude<ExtArgs> | null
        where?: tb_payment_historyWhereInput
        orderBy?: tb_payment_historyOrderByWithRelationInput | tb_payment_historyOrderByWithRelationInput[]
        cursor?: tb_payment_historyWhereUniqueInput
        take?: number
        skip?: number
        distinct?: Tb_payment_historyScalarFieldEnum | Tb_payment_historyScalarFieldEnum[]
    }

    /**
     * tb_payment_status without action
     */
    export type tb_payment_statusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_payment_status
         */
        select?: tb_payment_statusSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_status
         */
        omit?: tb_payment_statusOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_payment_statusInclude<ExtArgs> | null
    }

    /**
     * Model tb_payment_type
     */

    export type AggregateTb_payment_type = {
        _count: Tb_payment_typeCountAggregateOutputType | null
        _avg: Tb_payment_typeAvgAggregateOutputType | null
        _sum: Tb_payment_typeSumAggregateOutputType | null
        _min: Tb_payment_typeMinAggregateOutputType | null
        _max: Tb_payment_typeMaxAggregateOutputType | null
    }

    export type Tb_payment_typeAvgAggregateOutputType = {
        pay_type_id: number | null
    }

    export type Tb_payment_typeSumAggregateOutputType = {
        pay_type_id: bigint | null
    }

    export type Tb_payment_typeMinAggregateOutputType = {
        pay_type_id: bigint | null
        name: string | null
    }

    export type Tb_payment_typeMaxAggregateOutputType = {
        pay_type_id: bigint | null
        name: string | null
    }

    export type Tb_payment_typeCountAggregateOutputType = {
        pay_type_id: number
        name: number
        _all: number
    }

    export type Tb_payment_typeAvgAggregateInputType = {
        pay_type_id?: true
    }

    export type Tb_payment_typeSumAggregateInputType = {
        pay_type_id?: true
    }

    export type Tb_payment_typeMinAggregateInputType = {
        pay_type_id?: true
        name?: true
    }

    export type Tb_payment_typeMaxAggregateInputType = {
        pay_type_id?: true
        name?: true
    }

    export type Tb_payment_typeCountAggregateInputType = {
        pay_type_id?: true
        name?: true
        _all?: true
    }

    export type Tb_payment_typeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which tb_payment_type to aggregate.
         */
        where?: tb_payment_typeWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of tb_payment_types to fetch.
         */
        orderBy?: tb_payment_typeOrderByWithRelationInput | tb_payment_typeOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: tb_payment_typeWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` tb_payment_types from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` tb_payment_types.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned tb_payment_types
         **/
        _count?: true | Tb_payment_typeCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to average
         **/
        _avg?: Tb_payment_typeAvgAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to sum
         **/
        _sum?: Tb_payment_typeSumAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: Tb_payment_typeMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: Tb_payment_typeMaxAggregateInputType
    }

    export type GetTb_payment_typeAggregateType<T extends Tb_payment_typeAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_payment_type]: P extends '_count' | 'count'
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateTb_payment_type[P]>
            : GetScalarType<T[P], AggregateTb_payment_type[P]>
    }

    export type tb_payment_typeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: tb_payment_typeWhereInput
        orderBy?: tb_payment_typeOrderByWithAggregationInput | tb_payment_typeOrderByWithAggregationInput[]
        by: Tb_payment_typeScalarFieldEnum[] | Tb_payment_typeScalarFieldEnum
        having?: tb_payment_typeScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: Tb_payment_typeCountAggregateInputType | true
        _avg?: Tb_payment_typeAvgAggregateInputType
        _sum?: Tb_payment_typeSumAggregateInputType
        _min?: Tb_payment_typeMinAggregateInputType
        _max?: Tb_payment_typeMaxAggregateInputType
    }

    export type Tb_payment_typeGroupByOutputType = {
        pay_type_id: bigint
        name: string | null
        _count: Tb_payment_typeCountAggregateOutputType | null
        _avg: Tb_payment_typeAvgAggregateOutputType | null
        _sum: Tb_payment_typeSumAggregateOutputType | null
        _min: Tb_payment_typeMinAggregateOutputType | null
        _max: Tb_payment_typeMaxAggregateOutputType | null
    }

    type GetTb_payment_typeGroupByPayload<T extends tb_payment_typeGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<Tb_payment_typeGroupByOutputType, T['by']> & {
                [P in keyof T & keyof Tb_payment_typeGroupByOutputType]: P extends '_count'
                    ? T[P] extends boolean
                        ? number
                        : GetScalarType<T[P], Tb_payment_typeGroupByOutputType[P]>
                    : GetScalarType<T[P], Tb_payment_typeGroupByOutputType[P]>
            }
        >
    >

    export type tb_payment_typeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        $Extensions.GetSelect<
            {
                pay_type_id?: boolean
                name?: boolean
                tb_trip_invoice?: boolean | tb_payment_type$tb_trip_invoiceArgs<ExtArgs>
                _count?: boolean | Tb_payment_typeCountOutputTypeDefaultArgs<ExtArgs>
            },
            ExtArgs['result']['tb_payment_type']
        >

    export type tb_payment_typeSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            pay_type_id?: boolean
            name?: boolean
        },
        ExtArgs['result']['tb_payment_type']
    >

    export type tb_payment_typeSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            pay_type_id?: boolean
            name?: boolean
        },
        ExtArgs['result']['tb_payment_type']
    >

    export type tb_payment_typeSelectScalar = {
        pay_type_id?: boolean
        name?: boolean
    }

    export type tb_payment_typeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        $Extensions.GetOmit<'pay_type_id' | 'name', ExtArgs['result']['tb_payment_type']>
    export type tb_payment_typeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        tb_trip_invoice?: boolean | tb_payment_type$tb_trip_invoiceArgs<ExtArgs>
        _count?: boolean | Tb_payment_typeCountOutputTypeDefaultArgs<ExtArgs>
    }
    export type tb_payment_typeIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {}
    export type tb_payment_typeIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {}

    export type $tb_payment_typePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: 'tb_payment_type'
        objects: {
            tb_trip_invoice: Prisma.$tb_trip_invoicePayload<ExtArgs>[]
        }
        scalars: $Extensions.GetPayloadResult<
            {
                pay_type_id: bigint
                name: string | null
            },
            ExtArgs['result']['tb_payment_type']
        >
        composites: {}
    }

    type tb_payment_typeGetPayload<S extends boolean | null | undefined | tb_payment_typeDefaultArgs> =
        $Result.GetResult<Prisma.$tb_payment_typePayload, S>

    type tb_payment_typeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
        tb_payment_typeFindManyArgs,
        'select' | 'include' | 'distinct' | 'omit'
    > & {
        select?: Tb_payment_typeCountAggregateInputType | true
    }

    export interface tb_payment_typeDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_payment_type']; meta: { name: 'tb_payment_type' } }
        /**
         * Find zero or one Tb_payment_type that matches the filter.
         * @param {tb_payment_typeFindUniqueArgs} args - Arguments to find a Tb_payment_type
         * @example
         * // Get one Tb_payment_type
         * const tb_payment_type = await prisma.tb_payment_type.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends tb_payment_typeFindUniqueArgs>(
            args: SelectSubset<T, tb_payment_typeFindUniqueArgs<ExtArgs>>
        ): Prisma__tb_payment_typeClient<
            $Result.GetResult<Prisma.$tb_payment_typePayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find one Tb_payment_type that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {tb_payment_typeFindUniqueOrThrowArgs} args - Arguments to find a Tb_payment_type
         * @example
         * // Get one Tb_payment_type
         * const tb_payment_type = await prisma.tb_payment_type.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends tb_payment_typeFindUniqueOrThrowArgs>(
            args: SelectSubset<T, tb_payment_typeFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__tb_payment_typeClient<
            $Result.GetResult<Prisma.$tb_payment_typePayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first Tb_payment_type that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_payment_typeFindFirstArgs} args - Arguments to find a Tb_payment_type
         * @example
         * // Get one Tb_payment_type
         * const tb_payment_type = await prisma.tb_payment_type.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends tb_payment_typeFindFirstArgs>(
            args?: SelectSubset<T, tb_payment_typeFindFirstArgs<ExtArgs>>
        ): Prisma__tb_payment_typeClient<
            $Result.GetResult<Prisma.$tb_payment_typePayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first Tb_payment_type that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_payment_typeFindFirstOrThrowArgs} args - Arguments to find a Tb_payment_type
         * @example
         * // Get one Tb_payment_type
         * const tb_payment_type = await prisma.tb_payment_type.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends tb_payment_typeFindFirstOrThrowArgs>(
            args?: SelectSubset<T, tb_payment_typeFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__tb_payment_typeClient<
            $Result.GetResult<Prisma.$tb_payment_typePayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find zero or more Tb_payment_types that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_payment_typeFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Tb_payment_types
         * const tb_payment_types = await prisma.tb_payment_type.findMany()
         *
         * // Get first 10 Tb_payment_types
         * const tb_payment_types = await prisma.tb_payment_type.findMany({ take: 10 })
         *
         * // Only select the `pay_type_id`
         * const tb_payment_typeWithPay_type_idOnly = await prisma.tb_payment_type.findMany({ select: { pay_type_id: true } })
         *
         */
        findMany<T extends tb_payment_typeFindManyArgs>(
            args?: SelectSubset<T, tb_payment_typeFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$tb_payment_typePayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
        >

        /**
         * Create a Tb_payment_type.
         * @param {tb_payment_typeCreateArgs} args - Arguments to create a Tb_payment_type.
         * @example
         * // Create one Tb_payment_type
         * const Tb_payment_type = await prisma.tb_payment_type.create({
         *   data: {
         *     // ... data to create a Tb_payment_type
         *   }
         * })
         *
         */
        create<T extends tb_payment_typeCreateArgs>(
            args: SelectSubset<T, tb_payment_typeCreateArgs<ExtArgs>>
        ): Prisma__tb_payment_typeClient<
            $Result.GetResult<Prisma.$tb_payment_typePayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Create many Tb_payment_types.
         * @param {tb_payment_typeCreateManyArgs} args - Arguments to create many Tb_payment_types.
         * @example
         * // Create many Tb_payment_types
         * const tb_payment_type = await prisma.tb_payment_type.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends tb_payment_typeCreateManyArgs>(
            args?: SelectSubset<T, tb_payment_typeCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Create many Tb_payment_types and returns the data saved in the database.
         * @param {tb_payment_typeCreateManyAndReturnArgs} args - Arguments to create many Tb_payment_types.
         * @example
         * // Create many Tb_payment_types
         * const tb_payment_type = await prisma.tb_payment_type.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Tb_payment_types and only return the `pay_type_id`
         * const tb_payment_typeWithPay_type_idOnly = await prisma.tb_payment_type.createManyAndReturn({
         *   select: { pay_type_id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends tb_payment_typeCreateManyAndReturnArgs>(
            args?: SelectSubset<T, tb_payment_typeCreateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$tb_payment_typePayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
        >

        /**
         * Delete a Tb_payment_type.
         * @param {tb_payment_typeDeleteArgs} args - Arguments to delete one Tb_payment_type.
         * @example
         * // Delete one Tb_payment_type
         * const Tb_payment_type = await prisma.tb_payment_type.delete({
         *   where: {
         *     // ... filter to delete one Tb_payment_type
         *   }
         * })
         *
         */
        delete<T extends tb_payment_typeDeleteArgs>(
            args: SelectSubset<T, tb_payment_typeDeleteArgs<ExtArgs>>
        ): Prisma__tb_payment_typeClient<
            $Result.GetResult<Prisma.$tb_payment_typePayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Update one Tb_payment_type.
         * @param {tb_payment_typeUpdateArgs} args - Arguments to update one Tb_payment_type.
         * @example
         * // Update one Tb_payment_type
         * const tb_payment_type = await prisma.tb_payment_type.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends tb_payment_typeUpdateArgs>(
            args: SelectSubset<T, tb_payment_typeUpdateArgs<ExtArgs>>
        ): Prisma__tb_payment_typeClient<
            $Result.GetResult<Prisma.$tb_payment_typePayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Delete zero or more Tb_payment_types.
         * @param {tb_payment_typeDeleteManyArgs} args - Arguments to filter Tb_payment_types to delete.
         * @example
         * // Delete a few Tb_payment_types
         * const { count } = await prisma.tb_payment_type.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends tb_payment_typeDeleteManyArgs>(
            args?: SelectSubset<T, tb_payment_typeDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Tb_payment_types.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_payment_typeUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Tb_payment_types
         * const tb_payment_type = await prisma.tb_payment_type.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends tb_payment_typeUpdateManyArgs>(
            args: SelectSubset<T, tb_payment_typeUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Tb_payment_types and returns the data updated in the database.
         * @param {tb_payment_typeUpdateManyAndReturnArgs} args - Arguments to update many Tb_payment_types.
         * @example
         * // Update many Tb_payment_types
         * const tb_payment_type = await prisma.tb_payment_type.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more Tb_payment_types and only return the `pay_type_id`
         * const tb_payment_typeWithPay_type_idOnly = await prisma.tb_payment_type.updateManyAndReturn({
         *   select: { pay_type_id: true },
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
        updateManyAndReturn<T extends tb_payment_typeUpdateManyAndReturnArgs>(
            args: SelectSubset<T, tb_payment_typeUpdateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$tb_payment_typePayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
        >

        /**
         * Create or update one Tb_payment_type.
         * @param {tb_payment_typeUpsertArgs} args - Arguments to update or create a Tb_payment_type.
         * @example
         * // Update or create a Tb_payment_type
         * const tb_payment_type = await prisma.tb_payment_type.upsert({
         *   create: {
         *     // ... data to create a Tb_payment_type
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Tb_payment_type we want to update
         *   }
         * })
         */
        upsert<T extends tb_payment_typeUpsertArgs>(
            args: SelectSubset<T, tb_payment_typeUpsertArgs<ExtArgs>>
        ): Prisma__tb_payment_typeClient<
            $Result.GetResult<Prisma.$tb_payment_typePayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Count the number of Tb_payment_types.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_payment_typeCountArgs} args - Arguments to filter Tb_payment_types to count.
         * @example
         * // Count the number of Tb_payment_types
         * const count = await prisma.tb_payment_type.count({
         *   where: {
         *     // ... the filter for the Tb_payment_types we want to count
         *   }
         * })
         **/
        count<T extends tb_payment_typeCountArgs>(
            args?: Subset<T, tb_payment_typeCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
                ? T['select'] extends true
                    ? number
                    : GetScalarType<T['select'], Tb_payment_typeCountAggregateOutputType>
                : number
        >

        /**
         * Allows you to perform aggregations operations on a Tb_payment_type.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {Tb_payment_typeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends Tb_payment_typeAggregateArgs>(
            args: Subset<T, Tb_payment_typeAggregateArgs>
        ): Prisma.PrismaPromise<GetTb_payment_typeAggregateType<T>>

        /**
         * Group by Tb_payment_type.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_payment_typeGroupByArgs} args - Group by arguments.
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
            T extends tb_payment_typeGroupByArgs,
            HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: tb_payment_typeGroupByArgs['orderBy'] }
                : { orderBy?: tb_payment_typeGroupByArgs['orderBy'] },
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
                              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
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
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, tb_payment_typeGroupByArgs, OrderByArg> & InputErrors
        ): {} extends InputErrors ? GetTb_payment_typeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
        /**
         * Fields of the tb_payment_type model
         */
        readonly fields: tb_payment_typeFieldRefs
    }

    /**
     * The delegate class that acts as a "Promise-like" for tb_payment_type.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__tb_payment_typeClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: 'PrismaPromise'
        tb_trip_invoice<T extends tb_payment_type$tb_trip_invoiceArgs<ExtArgs> = {}>(
            args?: Subset<T, tb_payment_type$tb_trip_invoiceArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$tb_trip_invoicePayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
        >
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
        ): $Utils.JsPromise<TResult1 | TResult2>
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
        ): $Utils.JsPromise<T | TResult>
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
    }

    /**
     * Fields of the tb_payment_type model
     */
    interface tb_payment_typeFieldRefs {
        readonly pay_type_id: FieldRef<'tb_payment_type', 'BigInt'>
        readonly name: FieldRef<'tb_payment_type', 'String'>
    }

    // Custom InputTypes
    /**
     * tb_payment_type findUnique
     */
    export type tb_payment_typeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_payment_type
         */
        select?: tb_payment_typeSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_type
         */
        omit?: tb_payment_typeOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_payment_typeInclude<ExtArgs> | null
        /**
         * Filter, which tb_payment_type to fetch.
         */
        where: tb_payment_typeWhereUniqueInput
    }

    /**
     * tb_payment_type findUniqueOrThrow
     */
    export type tb_payment_typeFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the tb_payment_type
         */
        select?: tb_payment_typeSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_type
         */
        omit?: tb_payment_typeOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_payment_typeInclude<ExtArgs> | null
        /**
         * Filter, which tb_payment_type to fetch.
         */
        where: tb_payment_typeWhereUniqueInput
    }

    /**
     * tb_payment_type findFirst
     */
    export type tb_payment_typeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_payment_type
         */
        select?: tb_payment_typeSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_type
         */
        omit?: tb_payment_typeOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_payment_typeInclude<ExtArgs> | null
        /**
         * Filter, which tb_payment_type to fetch.
         */
        where?: tb_payment_typeWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of tb_payment_types to fetch.
         */
        orderBy?: tb_payment_typeOrderByWithRelationInput | tb_payment_typeOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for tb_payment_types.
         */
        cursor?: tb_payment_typeWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` tb_payment_types from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` tb_payment_types.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of tb_payment_types.
         */
        distinct?: Tb_payment_typeScalarFieldEnum | Tb_payment_typeScalarFieldEnum[]
    }

    /**
     * tb_payment_type findFirstOrThrow
     */
    export type tb_payment_typeFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the tb_payment_type
         */
        select?: tb_payment_typeSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_type
         */
        omit?: tb_payment_typeOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_payment_typeInclude<ExtArgs> | null
        /**
         * Filter, which tb_payment_type to fetch.
         */
        where?: tb_payment_typeWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of tb_payment_types to fetch.
         */
        orderBy?: tb_payment_typeOrderByWithRelationInput | tb_payment_typeOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for tb_payment_types.
         */
        cursor?: tb_payment_typeWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` tb_payment_types from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` tb_payment_types.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of tb_payment_types.
         */
        distinct?: Tb_payment_typeScalarFieldEnum | Tb_payment_typeScalarFieldEnum[]
    }

    /**
     * tb_payment_type findMany
     */
    export type tb_payment_typeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_payment_type
         */
        select?: tb_payment_typeSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_type
         */
        omit?: tb_payment_typeOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_payment_typeInclude<ExtArgs> | null
        /**
         * Filter, which tb_payment_types to fetch.
         */
        where?: tb_payment_typeWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of tb_payment_types to fetch.
         */
        orderBy?: tb_payment_typeOrderByWithRelationInput | tb_payment_typeOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing tb_payment_types.
         */
        cursor?: tb_payment_typeWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` tb_payment_types from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` tb_payment_types.
         */
        skip?: number
        distinct?: Tb_payment_typeScalarFieldEnum | Tb_payment_typeScalarFieldEnum[]
    }

    /**
     * tb_payment_type create
     */
    export type tb_payment_typeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_payment_type
         */
        select?: tb_payment_typeSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_type
         */
        omit?: tb_payment_typeOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_payment_typeInclude<ExtArgs> | null
        /**
         * The data needed to create a tb_payment_type.
         */
        data?: XOR<tb_payment_typeCreateInput, tb_payment_typeUncheckedCreateInput>
    }

    /**
     * tb_payment_type createMany
     */
    export type tb_payment_typeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many tb_payment_types.
         */
        data: tb_payment_typeCreateManyInput | tb_payment_typeCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * tb_payment_type createManyAndReturn
     */
    export type tb_payment_typeCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the tb_payment_type
         */
        select?: tb_payment_typeSelectCreateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_type
         */
        omit?: tb_payment_typeOmit<ExtArgs> | null
        /**
         * The data used to create many tb_payment_types.
         */
        data: tb_payment_typeCreateManyInput | tb_payment_typeCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * tb_payment_type update
     */
    export type tb_payment_typeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_payment_type
         */
        select?: tb_payment_typeSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_type
         */
        omit?: tb_payment_typeOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_payment_typeInclude<ExtArgs> | null
        /**
         * The data needed to update a tb_payment_type.
         */
        data: XOR<tb_payment_typeUpdateInput, tb_payment_typeUncheckedUpdateInput>
        /**
         * Choose, which tb_payment_type to update.
         */
        where: tb_payment_typeWhereUniqueInput
    }

    /**
     * tb_payment_type updateMany
     */
    export type tb_payment_typeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update tb_payment_types.
         */
        data: XOR<tb_payment_typeUpdateManyMutationInput, tb_payment_typeUncheckedUpdateManyInput>
        /**
         * Filter which tb_payment_types to update
         */
        where?: tb_payment_typeWhereInput
        /**
         * Limit how many tb_payment_types to update.
         */
        limit?: number
    }

    /**
     * tb_payment_type updateManyAndReturn
     */
    export type tb_payment_typeUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the tb_payment_type
         */
        select?: tb_payment_typeSelectUpdateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_type
         */
        omit?: tb_payment_typeOmit<ExtArgs> | null
        /**
         * The data used to update tb_payment_types.
         */
        data: XOR<tb_payment_typeUpdateManyMutationInput, tb_payment_typeUncheckedUpdateManyInput>
        /**
         * Filter which tb_payment_types to update
         */
        where?: tb_payment_typeWhereInput
        /**
         * Limit how many tb_payment_types to update.
         */
        limit?: number
    }

    /**
     * tb_payment_type upsert
     */
    export type tb_payment_typeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_payment_type
         */
        select?: tb_payment_typeSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_type
         */
        omit?: tb_payment_typeOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_payment_typeInclude<ExtArgs> | null
        /**
         * The filter to search for the tb_payment_type to update in case it exists.
         */
        where: tb_payment_typeWhereUniqueInput
        /**
         * In case the tb_payment_type found by the `where` argument doesn't exist, create a new tb_payment_type with this data.
         */
        create: XOR<tb_payment_typeCreateInput, tb_payment_typeUncheckedCreateInput>
        /**
         * In case the tb_payment_type was found with the provided `where` argument, update it with this data.
         */
        update: XOR<tb_payment_typeUpdateInput, tb_payment_typeUncheckedUpdateInput>
    }

    /**
     * tb_payment_type delete
     */
    export type tb_payment_typeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_payment_type
         */
        select?: tb_payment_typeSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_type
         */
        omit?: tb_payment_typeOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_payment_typeInclude<ExtArgs> | null
        /**
         * Filter which tb_payment_type to delete.
         */
        where: tb_payment_typeWhereUniqueInput
    }

    /**
     * tb_payment_type deleteMany
     */
    export type tb_payment_typeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which tb_payment_types to delete
         */
        where?: tb_payment_typeWhereInput
        /**
         * Limit how many tb_payment_types to delete.
         */
        limit?: number
    }

    /**
     * tb_payment_type.tb_trip_invoice
     */
    export type tb_payment_type$tb_trip_invoiceArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the tb_trip_invoice
         */
        select?: tb_trip_invoiceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip_invoice
         */
        omit?: tb_trip_invoiceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_trip_invoiceInclude<ExtArgs> | null
        where?: tb_trip_invoiceWhereInput
        orderBy?: tb_trip_invoiceOrderByWithRelationInput | tb_trip_invoiceOrderByWithRelationInput[]
        cursor?: tb_trip_invoiceWhereUniqueInput
        take?: number
        skip?: number
        distinct?: Tb_trip_invoiceScalarFieldEnum | Tb_trip_invoiceScalarFieldEnum[]
    }

    /**
     * tb_payment_type without action
     */
    export type tb_payment_typeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_payment_type
         */
        select?: tb_payment_typeSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_type
         */
        omit?: tb_payment_typeOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_payment_typeInclude<ExtArgs> | null
    }

    /**
     * Model tb_role
     */

    export type AggregateTb_role = {
        _count: Tb_roleCountAggregateOutputType | null
        _avg: Tb_roleAvgAggregateOutputType | null
        _sum: Tb_roleSumAggregateOutputType | null
        _min: Tb_roleMinAggregateOutputType | null
        _max: Tb_roleMaxAggregateOutputType | null
    }

    export type Tb_roleAvgAggregateOutputType = {
        role_id: number | null
    }

    export type Tb_roleSumAggregateOutputType = {
        role_id: number | null
    }

    export type Tb_roleMinAggregateOutputType = {
        role_id: number | null
        name: string | null
    }

    export type Tb_roleMaxAggregateOutputType = {
        role_id: number | null
        name: string | null
    }

    export type Tb_roleCountAggregateOutputType = {
        role_id: number
        name: number
        _all: number
    }

    export type Tb_roleAvgAggregateInputType = {
        role_id?: true
    }

    export type Tb_roleSumAggregateInputType = {
        role_id?: true
    }

    export type Tb_roleMinAggregateInputType = {
        role_id?: true
        name?: true
    }

    export type Tb_roleMaxAggregateInputType = {
        role_id?: true
        name?: true
    }

    export type Tb_roleCountAggregateInputType = {
        role_id?: true
        name?: true
        _all?: true
    }

    export type Tb_roleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which tb_role to aggregate.
         */
        where?: tb_roleWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of tb_roles to fetch.
         */
        orderBy?: tb_roleOrderByWithRelationInput | tb_roleOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: tb_roleWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` tb_roles from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` tb_roles.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned tb_roles
         **/
        _count?: true | Tb_roleCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to average
         **/
        _avg?: Tb_roleAvgAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to sum
         **/
        _sum?: Tb_roleSumAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: Tb_roleMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: Tb_roleMaxAggregateInputType
    }

    export type GetTb_roleAggregateType<T extends Tb_roleAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_role]: P extends '_count' | 'count'
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateTb_role[P]>
            : GetScalarType<T[P], AggregateTb_role[P]>
    }

    export type tb_roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: tb_roleWhereInput
        orderBy?: tb_roleOrderByWithAggregationInput | tb_roleOrderByWithAggregationInput[]
        by: Tb_roleScalarFieldEnum[] | Tb_roleScalarFieldEnum
        having?: tb_roleScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: Tb_roleCountAggregateInputType | true
        _avg?: Tb_roleAvgAggregateInputType
        _sum?: Tb_roleSumAggregateInputType
        _min?: Tb_roleMinAggregateInputType
        _max?: Tb_roleMaxAggregateInputType
    }

    export type Tb_roleGroupByOutputType = {
        role_id: number
        name: string
        _count: Tb_roleCountAggregateOutputType | null
        _avg: Tb_roleAvgAggregateOutputType | null
        _sum: Tb_roleSumAggregateOutputType | null
        _min: Tb_roleMinAggregateOutputType | null
        _max: Tb_roleMaxAggregateOutputType | null
    }

    type GetTb_roleGroupByPayload<T extends tb_roleGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<Tb_roleGroupByOutputType, T['by']> & {
                [P in keyof T & keyof Tb_roleGroupByOutputType]: P extends '_count'
                    ? T[P] extends boolean
                        ? number
                        : GetScalarType<T[P], Tb_roleGroupByOutputType[P]>
                    : GetScalarType<T[P], Tb_roleGroupByOutputType[P]>
            }
        >
    >

    export type tb_roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        $Extensions.GetSelect<
            {
                role_id?: boolean
                name?: boolean
                tb_user?: boolean | tb_role$tb_userArgs<ExtArgs>
                _count?: boolean | Tb_roleCountOutputTypeDefaultArgs<ExtArgs>
            },
            ExtArgs['result']['tb_role']
        >

    export type tb_roleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        $Extensions.GetSelect<
            {
                role_id?: boolean
                name?: boolean
            },
            ExtArgs['result']['tb_role']
        >

    export type tb_roleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        $Extensions.GetSelect<
            {
                role_id?: boolean
                name?: boolean
            },
            ExtArgs['result']['tb_role']
        >

    export type tb_roleSelectScalar = {
        role_id?: boolean
        name?: boolean
    }

    export type tb_roleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<
        'role_id' | 'name',
        ExtArgs['result']['tb_role']
    >
    export type tb_roleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        tb_user?: boolean | tb_role$tb_userArgs<ExtArgs>
        _count?: boolean | Tb_roleCountOutputTypeDefaultArgs<ExtArgs>
    }
    export type tb_roleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        {}
    export type tb_roleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        {}

    export type $tb_rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: 'tb_role'
        objects: {
            tb_user: Prisma.$tb_userPayload<ExtArgs>[]
        }
        scalars: $Extensions.GetPayloadResult<
            {
                role_id: number
                name: string
            },
            ExtArgs['result']['tb_role']
        >
        composites: {}
    }

    type tb_roleGetPayload<S extends boolean | null | undefined | tb_roleDefaultArgs> = $Result.GetResult<
        Prisma.$tb_rolePayload,
        S
    >

    type tb_roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
        tb_roleFindManyArgs,
        'select' | 'include' | 'distinct' | 'omit'
    > & {
        select?: Tb_roleCountAggregateInputType | true
    }

    export interface tb_roleDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_role']; meta: { name: 'tb_role' } }
        /**
         * Find zero or one Tb_role that matches the filter.
         * @param {tb_roleFindUniqueArgs} args - Arguments to find a Tb_role
         * @example
         * // Get one Tb_role
         * const tb_role = await prisma.tb_role.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends tb_roleFindUniqueArgs>(
            args: SelectSubset<T, tb_roleFindUniqueArgs<ExtArgs>>
        ): Prisma__tb_roleClient<
            $Result.GetResult<Prisma.$tb_rolePayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find one Tb_role that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {tb_roleFindUniqueOrThrowArgs} args - Arguments to find a Tb_role
         * @example
         * // Get one Tb_role
         * const tb_role = await prisma.tb_role.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends tb_roleFindUniqueOrThrowArgs>(
            args: SelectSubset<T, tb_roleFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__tb_roleClient<
            $Result.GetResult<Prisma.$tb_rolePayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first Tb_role that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_roleFindFirstArgs} args - Arguments to find a Tb_role
         * @example
         * // Get one Tb_role
         * const tb_role = await prisma.tb_role.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends tb_roleFindFirstArgs>(
            args?: SelectSubset<T, tb_roleFindFirstArgs<ExtArgs>>
        ): Prisma__tb_roleClient<
            $Result.GetResult<Prisma.$tb_rolePayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first Tb_role that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_roleFindFirstOrThrowArgs} args - Arguments to find a Tb_role
         * @example
         * // Get one Tb_role
         * const tb_role = await prisma.tb_role.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends tb_roleFindFirstOrThrowArgs>(
            args?: SelectSubset<T, tb_roleFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__tb_roleClient<
            $Result.GetResult<Prisma.$tb_rolePayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find zero or more Tb_roles that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_roleFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Tb_roles
         * const tb_roles = await prisma.tb_role.findMany()
         *
         * // Get first 10 Tb_roles
         * const tb_roles = await prisma.tb_role.findMany({ take: 10 })
         *
         * // Only select the `role_id`
         * const tb_roleWithRole_idOnly = await prisma.tb_role.findMany({ select: { role_id: true } })
         *
         */
        findMany<T extends tb_roleFindManyArgs>(
            args?: SelectSubset<T, tb_roleFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_rolePayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>>

        /**
         * Create a Tb_role.
         * @param {tb_roleCreateArgs} args - Arguments to create a Tb_role.
         * @example
         * // Create one Tb_role
         * const Tb_role = await prisma.tb_role.create({
         *   data: {
         *     // ... data to create a Tb_role
         *   }
         * })
         *
         */
        create<T extends tb_roleCreateArgs>(
            args: SelectSubset<T, tb_roleCreateArgs<ExtArgs>>
        ): Prisma__tb_roleClient<
            $Result.GetResult<Prisma.$tb_rolePayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Create many Tb_roles.
         * @param {tb_roleCreateManyArgs} args - Arguments to create many Tb_roles.
         * @example
         * // Create many Tb_roles
         * const tb_role = await prisma.tb_role.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends tb_roleCreateManyArgs>(
            args?: SelectSubset<T, tb_roleCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Create many Tb_roles and returns the data saved in the database.
         * @param {tb_roleCreateManyAndReturnArgs} args - Arguments to create many Tb_roles.
         * @example
         * // Create many Tb_roles
         * const tb_role = await prisma.tb_role.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Tb_roles and only return the `role_id`
         * const tb_roleWithRole_idOnly = await prisma.tb_role.createManyAndReturn({
         *   select: { role_id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends tb_roleCreateManyAndReturnArgs>(
            args?: SelectSubset<T, tb_roleCreateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$tb_rolePayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
        >

        /**
         * Delete a Tb_role.
         * @param {tb_roleDeleteArgs} args - Arguments to delete one Tb_role.
         * @example
         * // Delete one Tb_role
         * const Tb_role = await prisma.tb_role.delete({
         *   where: {
         *     // ... filter to delete one Tb_role
         *   }
         * })
         *
         */
        delete<T extends tb_roleDeleteArgs>(
            args: SelectSubset<T, tb_roleDeleteArgs<ExtArgs>>
        ): Prisma__tb_roleClient<
            $Result.GetResult<Prisma.$tb_rolePayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Update one Tb_role.
         * @param {tb_roleUpdateArgs} args - Arguments to update one Tb_role.
         * @example
         * // Update one Tb_role
         * const tb_role = await prisma.tb_role.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends tb_roleUpdateArgs>(
            args: SelectSubset<T, tb_roleUpdateArgs<ExtArgs>>
        ): Prisma__tb_roleClient<
            $Result.GetResult<Prisma.$tb_rolePayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Delete zero or more Tb_roles.
         * @param {tb_roleDeleteManyArgs} args - Arguments to filter Tb_roles to delete.
         * @example
         * // Delete a few Tb_roles
         * const { count } = await prisma.tb_role.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends tb_roleDeleteManyArgs>(
            args?: SelectSubset<T, tb_roleDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Tb_roles.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_roleUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Tb_roles
         * const tb_role = await prisma.tb_role.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends tb_roleUpdateManyArgs>(
            args: SelectSubset<T, tb_roleUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Tb_roles and returns the data updated in the database.
         * @param {tb_roleUpdateManyAndReturnArgs} args - Arguments to update many Tb_roles.
         * @example
         * // Update many Tb_roles
         * const tb_role = await prisma.tb_role.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more Tb_roles and only return the `role_id`
         * const tb_roleWithRole_idOnly = await prisma.tb_role.updateManyAndReturn({
         *   select: { role_id: true },
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
        updateManyAndReturn<T extends tb_roleUpdateManyAndReturnArgs>(
            args: SelectSubset<T, tb_roleUpdateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$tb_rolePayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
        >

        /**
         * Create or update one Tb_role.
         * @param {tb_roleUpsertArgs} args - Arguments to update or create a Tb_role.
         * @example
         * // Update or create a Tb_role
         * const tb_role = await prisma.tb_role.upsert({
         *   create: {
         *     // ... data to create a Tb_role
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Tb_role we want to update
         *   }
         * })
         */
        upsert<T extends tb_roleUpsertArgs>(
            args: SelectSubset<T, tb_roleUpsertArgs<ExtArgs>>
        ): Prisma__tb_roleClient<
            $Result.GetResult<Prisma.$tb_rolePayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Count the number of Tb_roles.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_roleCountArgs} args - Arguments to filter Tb_roles to count.
         * @example
         * // Count the number of Tb_roles
         * const count = await prisma.tb_role.count({
         *   where: {
         *     // ... the filter for the Tb_roles we want to count
         *   }
         * })
         **/
        count<T extends tb_roleCountArgs>(
            args?: Subset<T, tb_roleCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
                ? T['select'] extends true
                    ? number
                    : GetScalarType<T['select'], Tb_roleCountAggregateOutputType>
                : number
        >

        /**
         * Allows you to perform aggregations operations on a Tb_role.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {Tb_roleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends Tb_roleAggregateArgs>(
            args: Subset<T, Tb_roleAggregateArgs>
        ): Prisma.PrismaPromise<GetTb_roleAggregateType<T>>

        /**
         * Group by Tb_role.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_roleGroupByArgs} args - Group by arguments.
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
            T extends tb_roleGroupByArgs,
            HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: tb_roleGroupByArgs['orderBy'] }
                : { orderBy?: tb_roleGroupByArgs['orderBy'] },
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
                              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
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
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, tb_roleGroupByArgs, OrderByArg> & InputErrors
        ): {} extends InputErrors ? GetTb_roleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
        /**
         * Fields of the tb_role model
         */
        readonly fields: tb_roleFieldRefs
    }

    /**
     * The delegate class that acts as a "Promise-like" for tb_role.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__tb_roleClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: 'PrismaPromise'
        tb_user<T extends tb_role$tb_userArgs<ExtArgs> = {}>(
            args?: Subset<T, tb_role$tb_userArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$tb_userPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
        >
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
        ): $Utils.JsPromise<TResult1 | TResult2>
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
        ): $Utils.JsPromise<T | TResult>
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
    }

    /**
     * Fields of the tb_role model
     */
    interface tb_roleFieldRefs {
        readonly role_id: FieldRef<'tb_role', 'Int'>
        readonly name: FieldRef<'tb_role', 'String'>
    }

    // Custom InputTypes
    /**
     * tb_role findUnique
     */
    export type tb_roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_role
         */
        select?: tb_roleSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_role
         */
        omit?: tb_roleOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_roleInclude<ExtArgs> | null
        /**
         * Filter, which tb_role to fetch.
         */
        where: tb_roleWhereUniqueInput
    }

    /**
     * tb_role findUniqueOrThrow
     */
    export type tb_roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_role
         */
        select?: tb_roleSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_role
         */
        omit?: tb_roleOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_roleInclude<ExtArgs> | null
        /**
         * Filter, which tb_role to fetch.
         */
        where: tb_roleWhereUniqueInput
    }

    /**
     * tb_role findFirst
     */
    export type tb_roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_role
         */
        select?: tb_roleSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_role
         */
        omit?: tb_roleOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_roleInclude<ExtArgs> | null
        /**
         * Filter, which tb_role to fetch.
         */
        where?: tb_roleWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of tb_roles to fetch.
         */
        orderBy?: tb_roleOrderByWithRelationInput | tb_roleOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for tb_roles.
         */
        cursor?: tb_roleWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` tb_roles from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` tb_roles.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of tb_roles.
         */
        distinct?: Tb_roleScalarFieldEnum | Tb_roleScalarFieldEnum[]
    }

    /**
     * tb_role findFirstOrThrow
     */
    export type tb_roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_role
         */
        select?: tb_roleSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_role
         */
        omit?: tb_roleOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_roleInclude<ExtArgs> | null
        /**
         * Filter, which tb_role to fetch.
         */
        where?: tb_roleWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of tb_roles to fetch.
         */
        orderBy?: tb_roleOrderByWithRelationInput | tb_roleOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for tb_roles.
         */
        cursor?: tb_roleWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` tb_roles from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` tb_roles.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of tb_roles.
         */
        distinct?: Tb_roleScalarFieldEnum | Tb_roleScalarFieldEnum[]
    }

    /**
     * tb_role findMany
     */
    export type tb_roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_role
         */
        select?: tb_roleSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_role
         */
        omit?: tb_roleOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_roleInclude<ExtArgs> | null
        /**
         * Filter, which tb_roles to fetch.
         */
        where?: tb_roleWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of tb_roles to fetch.
         */
        orderBy?: tb_roleOrderByWithRelationInput | tb_roleOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing tb_roles.
         */
        cursor?: tb_roleWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` tb_roles from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` tb_roles.
         */
        skip?: number
        distinct?: Tb_roleScalarFieldEnum | Tb_roleScalarFieldEnum[]
    }

    /**
     * tb_role create
     */
    export type tb_roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_role
         */
        select?: tb_roleSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_role
         */
        omit?: tb_roleOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_roleInclude<ExtArgs> | null
        /**
         * The data needed to create a tb_role.
         */
        data: XOR<tb_roleCreateInput, tb_roleUncheckedCreateInput>
    }

    /**
     * tb_role createMany
     */
    export type tb_roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many tb_roles.
         */
        data: tb_roleCreateManyInput | tb_roleCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * tb_role createManyAndReturn
     */
    export type tb_roleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_role
         */
        select?: tb_roleSelectCreateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the tb_role
         */
        omit?: tb_roleOmit<ExtArgs> | null
        /**
         * The data used to create many tb_roles.
         */
        data: tb_roleCreateManyInput | tb_roleCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * tb_role update
     */
    export type tb_roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_role
         */
        select?: tb_roleSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_role
         */
        omit?: tb_roleOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_roleInclude<ExtArgs> | null
        /**
         * The data needed to update a tb_role.
         */
        data: XOR<tb_roleUpdateInput, tb_roleUncheckedUpdateInput>
        /**
         * Choose, which tb_role to update.
         */
        where: tb_roleWhereUniqueInput
    }

    /**
     * tb_role updateMany
     */
    export type tb_roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update tb_roles.
         */
        data: XOR<tb_roleUpdateManyMutationInput, tb_roleUncheckedUpdateManyInput>
        /**
         * Filter which tb_roles to update
         */
        where?: tb_roleWhereInput
        /**
         * Limit how many tb_roles to update.
         */
        limit?: number
    }

    /**
     * tb_role updateManyAndReturn
     */
    export type tb_roleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_role
         */
        select?: tb_roleSelectUpdateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the tb_role
         */
        omit?: tb_roleOmit<ExtArgs> | null
        /**
         * The data used to update tb_roles.
         */
        data: XOR<tb_roleUpdateManyMutationInput, tb_roleUncheckedUpdateManyInput>
        /**
         * Filter which tb_roles to update
         */
        where?: tb_roleWhereInput
        /**
         * Limit how many tb_roles to update.
         */
        limit?: number
    }

    /**
     * tb_role upsert
     */
    export type tb_roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_role
         */
        select?: tb_roleSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_role
         */
        omit?: tb_roleOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_roleInclude<ExtArgs> | null
        /**
         * The filter to search for the tb_role to update in case it exists.
         */
        where: tb_roleWhereUniqueInput
        /**
         * In case the tb_role found by the `where` argument doesn't exist, create a new tb_role with this data.
         */
        create: XOR<tb_roleCreateInput, tb_roleUncheckedCreateInput>
        /**
         * In case the tb_role was found with the provided `where` argument, update it with this data.
         */
        update: XOR<tb_roleUpdateInput, tb_roleUncheckedUpdateInput>
    }

    /**
     * tb_role delete
     */
    export type tb_roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_role
         */
        select?: tb_roleSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_role
         */
        omit?: tb_roleOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_roleInclude<ExtArgs> | null
        /**
         * Filter which tb_role to delete.
         */
        where: tb_roleWhereUniqueInput
    }

    /**
     * tb_role deleteMany
     */
    export type tb_roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which tb_roles to delete
         */
        where?: tb_roleWhereInput
        /**
         * Limit how many tb_roles to delete.
         */
        limit?: number
    }

    /**
     * tb_role.tb_user
     */
    export type tb_role$tb_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_user
         */
        select?: tb_userSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_user
         */
        omit?: tb_userOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_userInclude<ExtArgs> | null
        where?: tb_userWhereInput
        orderBy?: tb_userOrderByWithRelationInput | tb_userOrderByWithRelationInput[]
        cursor?: tb_userWhereUniqueInput
        take?: number
        skip?: number
        distinct?: Tb_userScalarFieldEnum | Tb_userScalarFieldEnum[]
    }

    /**
     * tb_role without action
     */
    export type tb_roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_role
         */
        select?: tb_roleSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_role
         */
        omit?: tb_roleOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_roleInclude<ExtArgs> | null
    }

    /**
     * Model tb_trip_status
     */

    export type AggregateTb_trip_status = {
        _count: Tb_trip_statusCountAggregateOutputType | null
        _avg: Tb_trip_statusAvgAggregateOutputType | null
        _sum: Tb_trip_statusSumAggregateOutputType | null
        _min: Tb_trip_statusMinAggregateOutputType | null
        _max: Tb_trip_statusMaxAggregateOutputType | null
    }

    export type Tb_trip_statusAvgAggregateOutputType = {
        trip_status_id: number | null
    }

    export type Tb_trip_statusSumAggregateOutputType = {
        trip_status_id: bigint | null
    }

    export type Tb_trip_statusMinAggregateOutputType = {
        trip_status_id: bigint | null
        name: string | null
    }

    export type Tb_trip_statusMaxAggregateOutputType = {
        trip_status_id: bigint | null
        name: string | null
    }

    export type Tb_trip_statusCountAggregateOutputType = {
        trip_status_id: number
        name: number
        _all: number
    }

    export type Tb_trip_statusAvgAggregateInputType = {
        trip_status_id?: true
    }

    export type Tb_trip_statusSumAggregateInputType = {
        trip_status_id?: true
    }

    export type Tb_trip_statusMinAggregateInputType = {
        trip_status_id?: true
        name?: true
    }

    export type Tb_trip_statusMaxAggregateInputType = {
        trip_status_id?: true
        name?: true
    }

    export type Tb_trip_statusCountAggregateInputType = {
        trip_status_id?: true
        name?: true
        _all?: true
    }

    export type Tb_trip_statusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which tb_trip_status to aggregate.
         */
        where?: tb_trip_statusWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of tb_trip_statuses to fetch.
         */
        orderBy?: tb_trip_statusOrderByWithRelationInput | tb_trip_statusOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: tb_trip_statusWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` tb_trip_statuses from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` tb_trip_statuses.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned tb_trip_statuses
         **/
        _count?: true | Tb_trip_statusCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to average
         **/
        _avg?: Tb_trip_statusAvgAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to sum
         **/
        _sum?: Tb_trip_statusSumAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: Tb_trip_statusMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: Tb_trip_statusMaxAggregateInputType
    }

    export type GetTb_trip_statusAggregateType<T extends Tb_trip_statusAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_trip_status]: P extends '_count' | 'count'
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateTb_trip_status[P]>
            : GetScalarType<T[P], AggregateTb_trip_status[P]>
    }

    export type tb_trip_statusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: tb_trip_statusWhereInput
        orderBy?: tb_trip_statusOrderByWithAggregationInput | tb_trip_statusOrderByWithAggregationInput[]
        by: Tb_trip_statusScalarFieldEnum[] | Tb_trip_statusScalarFieldEnum
        having?: tb_trip_statusScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: Tb_trip_statusCountAggregateInputType | true
        _avg?: Tb_trip_statusAvgAggregateInputType
        _sum?: Tb_trip_statusSumAggregateInputType
        _min?: Tb_trip_statusMinAggregateInputType
        _max?: Tb_trip_statusMaxAggregateInputType
    }

    export type Tb_trip_statusGroupByOutputType = {
        trip_status_id: bigint
        name: string | null
        _count: Tb_trip_statusCountAggregateOutputType | null
        _avg: Tb_trip_statusAvgAggregateOutputType | null
        _sum: Tb_trip_statusSumAggregateOutputType | null
        _min: Tb_trip_statusMinAggregateOutputType | null
        _max: Tb_trip_statusMaxAggregateOutputType | null
    }

    type GetTb_trip_statusGroupByPayload<T extends tb_trip_statusGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<Tb_trip_statusGroupByOutputType, T['by']> & {
                [P in keyof T & keyof Tb_trip_statusGroupByOutputType]: P extends '_count'
                    ? T[P] extends boolean
                        ? number
                        : GetScalarType<T[P], Tb_trip_statusGroupByOutputType[P]>
                    : GetScalarType<T[P], Tb_trip_statusGroupByOutputType[P]>
            }
        >
    >

    export type tb_trip_statusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        $Extensions.GetSelect<
            {
                trip_status_id?: boolean
                name?: boolean
                tb_trip?: boolean | tb_trip_status$tb_tripArgs<ExtArgs>
                _count?: boolean | Tb_trip_statusCountOutputTypeDefaultArgs<ExtArgs>
            },
            ExtArgs['result']['tb_trip_status']
        >

    export type tb_trip_statusSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            trip_status_id?: boolean
            name?: boolean
        },
        ExtArgs['result']['tb_trip_status']
    >

    export type tb_trip_statusSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            trip_status_id?: boolean
            name?: boolean
        },
        ExtArgs['result']['tb_trip_status']
    >

    export type tb_trip_statusSelectScalar = {
        trip_status_id?: boolean
        name?: boolean
    }

    export type tb_trip_statusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        $Extensions.GetOmit<'trip_status_id' | 'name', ExtArgs['result']['tb_trip_status']>
    export type tb_trip_statusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        tb_trip?: boolean | tb_trip_status$tb_tripArgs<ExtArgs>
        _count?: boolean | Tb_trip_statusCountOutputTypeDefaultArgs<ExtArgs>
    }
    export type tb_trip_statusIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {}
    export type tb_trip_statusIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {}

    export type $tb_trip_statusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: 'tb_trip_status'
        objects: {
            tb_trip: Prisma.$tb_tripPayload<ExtArgs>[]
        }
        scalars: $Extensions.GetPayloadResult<
            {
                trip_status_id: bigint
                name: string | null
            },
            ExtArgs['result']['tb_trip_status']
        >
        composites: {}
    }

    type tb_trip_statusGetPayload<S extends boolean | null | undefined | tb_trip_statusDefaultArgs> = $Result.GetResult<
        Prisma.$tb_trip_statusPayload,
        S
    >

    type tb_trip_statusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
        tb_trip_statusFindManyArgs,
        'select' | 'include' | 'distinct' | 'omit'
    > & {
        select?: Tb_trip_statusCountAggregateInputType | true
    }

    export interface tb_trip_statusDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_trip_status']; meta: { name: 'tb_trip_status' } }
        /**
         * Find zero or one Tb_trip_status that matches the filter.
         * @param {tb_trip_statusFindUniqueArgs} args - Arguments to find a Tb_trip_status
         * @example
         * // Get one Tb_trip_status
         * const tb_trip_status = await prisma.tb_trip_status.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends tb_trip_statusFindUniqueArgs>(
            args: SelectSubset<T, tb_trip_statusFindUniqueArgs<ExtArgs>>
        ): Prisma__tb_trip_statusClient<
            $Result.GetResult<Prisma.$tb_trip_statusPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find one Tb_trip_status that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {tb_trip_statusFindUniqueOrThrowArgs} args - Arguments to find a Tb_trip_status
         * @example
         * // Get one Tb_trip_status
         * const tb_trip_status = await prisma.tb_trip_status.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends tb_trip_statusFindUniqueOrThrowArgs>(
            args: SelectSubset<T, tb_trip_statusFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__tb_trip_statusClient<
            $Result.GetResult<Prisma.$tb_trip_statusPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first Tb_trip_status that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_trip_statusFindFirstArgs} args - Arguments to find a Tb_trip_status
         * @example
         * // Get one Tb_trip_status
         * const tb_trip_status = await prisma.tb_trip_status.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends tb_trip_statusFindFirstArgs>(
            args?: SelectSubset<T, tb_trip_statusFindFirstArgs<ExtArgs>>
        ): Prisma__tb_trip_statusClient<
            $Result.GetResult<Prisma.$tb_trip_statusPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first Tb_trip_status that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_trip_statusFindFirstOrThrowArgs} args - Arguments to find a Tb_trip_status
         * @example
         * // Get one Tb_trip_status
         * const tb_trip_status = await prisma.tb_trip_status.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends tb_trip_statusFindFirstOrThrowArgs>(
            args?: SelectSubset<T, tb_trip_statusFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__tb_trip_statusClient<
            $Result.GetResult<Prisma.$tb_trip_statusPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find zero or more Tb_trip_statuses that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_trip_statusFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Tb_trip_statuses
         * const tb_trip_statuses = await prisma.tb_trip_status.findMany()
         *
         * // Get first 10 Tb_trip_statuses
         * const tb_trip_statuses = await prisma.tb_trip_status.findMany({ take: 10 })
         *
         * // Only select the `trip_status_id`
         * const tb_trip_statusWithTrip_status_idOnly = await prisma.tb_trip_status.findMany({ select: { trip_status_id: true } })
         *
         */
        findMany<T extends tb_trip_statusFindManyArgs>(
            args?: SelectSubset<T, tb_trip_statusFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$tb_trip_statusPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
        >

        /**
         * Create a Tb_trip_status.
         * @param {tb_trip_statusCreateArgs} args - Arguments to create a Tb_trip_status.
         * @example
         * // Create one Tb_trip_status
         * const Tb_trip_status = await prisma.tb_trip_status.create({
         *   data: {
         *     // ... data to create a Tb_trip_status
         *   }
         * })
         *
         */
        create<T extends tb_trip_statusCreateArgs>(
            args: SelectSubset<T, tb_trip_statusCreateArgs<ExtArgs>>
        ): Prisma__tb_trip_statusClient<
            $Result.GetResult<Prisma.$tb_trip_statusPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Create many Tb_trip_statuses.
         * @param {tb_trip_statusCreateManyArgs} args - Arguments to create many Tb_trip_statuses.
         * @example
         * // Create many Tb_trip_statuses
         * const tb_trip_status = await prisma.tb_trip_status.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends tb_trip_statusCreateManyArgs>(
            args?: SelectSubset<T, tb_trip_statusCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Create many Tb_trip_statuses and returns the data saved in the database.
         * @param {tb_trip_statusCreateManyAndReturnArgs} args - Arguments to create many Tb_trip_statuses.
         * @example
         * // Create many Tb_trip_statuses
         * const tb_trip_status = await prisma.tb_trip_status.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Tb_trip_statuses and only return the `trip_status_id`
         * const tb_trip_statusWithTrip_status_idOnly = await prisma.tb_trip_status.createManyAndReturn({
         *   select: { trip_status_id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends tb_trip_statusCreateManyAndReturnArgs>(
            args?: SelectSubset<T, tb_trip_statusCreateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$tb_trip_statusPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
        >

        /**
         * Delete a Tb_trip_status.
         * @param {tb_trip_statusDeleteArgs} args - Arguments to delete one Tb_trip_status.
         * @example
         * // Delete one Tb_trip_status
         * const Tb_trip_status = await prisma.tb_trip_status.delete({
         *   where: {
         *     // ... filter to delete one Tb_trip_status
         *   }
         * })
         *
         */
        delete<T extends tb_trip_statusDeleteArgs>(
            args: SelectSubset<T, tb_trip_statusDeleteArgs<ExtArgs>>
        ): Prisma__tb_trip_statusClient<
            $Result.GetResult<Prisma.$tb_trip_statusPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Update one Tb_trip_status.
         * @param {tb_trip_statusUpdateArgs} args - Arguments to update one Tb_trip_status.
         * @example
         * // Update one Tb_trip_status
         * const tb_trip_status = await prisma.tb_trip_status.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends tb_trip_statusUpdateArgs>(
            args: SelectSubset<T, tb_trip_statusUpdateArgs<ExtArgs>>
        ): Prisma__tb_trip_statusClient<
            $Result.GetResult<Prisma.$tb_trip_statusPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Delete zero or more Tb_trip_statuses.
         * @param {tb_trip_statusDeleteManyArgs} args - Arguments to filter Tb_trip_statuses to delete.
         * @example
         * // Delete a few Tb_trip_statuses
         * const { count } = await prisma.tb_trip_status.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends tb_trip_statusDeleteManyArgs>(
            args?: SelectSubset<T, tb_trip_statusDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Tb_trip_statuses.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_trip_statusUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Tb_trip_statuses
         * const tb_trip_status = await prisma.tb_trip_status.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends tb_trip_statusUpdateManyArgs>(
            args: SelectSubset<T, tb_trip_statusUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Tb_trip_statuses and returns the data updated in the database.
         * @param {tb_trip_statusUpdateManyAndReturnArgs} args - Arguments to update many Tb_trip_statuses.
         * @example
         * // Update many Tb_trip_statuses
         * const tb_trip_status = await prisma.tb_trip_status.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more Tb_trip_statuses and only return the `trip_status_id`
         * const tb_trip_statusWithTrip_status_idOnly = await prisma.tb_trip_status.updateManyAndReturn({
         *   select: { trip_status_id: true },
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
        updateManyAndReturn<T extends tb_trip_statusUpdateManyAndReturnArgs>(
            args: SelectSubset<T, tb_trip_statusUpdateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$tb_trip_statusPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
        >

        /**
         * Create or update one Tb_trip_status.
         * @param {tb_trip_statusUpsertArgs} args - Arguments to update or create a Tb_trip_status.
         * @example
         * // Update or create a Tb_trip_status
         * const tb_trip_status = await prisma.tb_trip_status.upsert({
         *   create: {
         *     // ... data to create a Tb_trip_status
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Tb_trip_status we want to update
         *   }
         * })
         */
        upsert<T extends tb_trip_statusUpsertArgs>(
            args: SelectSubset<T, tb_trip_statusUpsertArgs<ExtArgs>>
        ): Prisma__tb_trip_statusClient<
            $Result.GetResult<Prisma.$tb_trip_statusPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Count the number of Tb_trip_statuses.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_trip_statusCountArgs} args - Arguments to filter Tb_trip_statuses to count.
         * @example
         * // Count the number of Tb_trip_statuses
         * const count = await prisma.tb_trip_status.count({
         *   where: {
         *     // ... the filter for the Tb_trip_statuses we want to count
         *   }
         * })
         **/
        count<T extends tb_trip_statusCountArgs>(
            args?: Subset<T, tb_trip_statusCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
                ? T['select'] extends true
                    ? number
                    : GetScalarType<T['select'], Tb_trip_statusCountAggregateOutputType>
                : number
        >

        /**
         * Allows you to perform aggregations operations on a Tb_trip_status.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {Tb_trip_statusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends Tb_trip_statusAggregateArgs>(
            args: Subset<T, Tb_trip_statusAggregateArgs>
        ): Prisma.PrismaPromise<GetTb_trip_statusAggregateType<T>>

        /**
         * Group by Tb_trip_status.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_trip_statusGroupByArgs} args - Group by arguments.
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
            T extends tb_trip_statusGroupByArgs,
            HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: tb_trip_statusGroupByArgs['orderBy'] }
                : { orderBy?: tb_trip_statusGroupByArgs['orderBy'] },
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
                              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
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
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, tb_trip_statusGroupByArgs, OrderByArg> & InputErrors
        ): {} extends InputErrors ? GetTb_trip_statusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
        /**
         * Fields of the tb_trip_status model
         */
        readonly fields: tb_trip_statusFieldRefs
    }

    /**
     * The delegate class that acts as a "Promise-like" for tb_trip_status.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__tb_trip_statusClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: 'PrismaPromise'
        tb_trip<T extends tb_trip_status$tb_tripArgs<ExtArgs> = {}>(
            args?: Subset<T, tb_trip_status$tb_tripArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$tb_tripPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
        >
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
        ): $Utils.JsPromise<TResult1 | TResult2>
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
        ): $Utils.JsPromise<T | TResult>
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
    }

    /**
     * Fields of the tb_trip_status model
     */
    interface tb_trip_statusFieldRefs {
        readonly trip_status_id: FieldRef<'tb_trip_status', 'BigInt'>
        readonly name: FieldRef<'tb_trip_status', 'String'>
    }

    // Custom InputTypes
    /**
     * tb_trip_status findUnique
     */
    export type tb_trip_statusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_trip_status
         */
        select?: tb_trip_statusSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip_status
         */
        omit?: tb_trip_statusOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_trip_statusInclude<ExtArgs> | null
        /**
         * Filter, which tb_trip_status to fetch.
         */
        where: tb_trip_statusWhereUniqueInput
    }

    /**
     * tb_trip_status findUniqueOrThrow
     */
    export type tb_trip_statusFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the tb_trip_status
         */
        select?: tb_trip_statusSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip_status
         */
        omit?: tb_trip_statusOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_trip_statusInclude<ExtArgs> | null
        /**
         * Filter, which tb_trip_status to fetch.
         */
        where: tb_trip_statusWhereUniqueInput
    }

    /**
     * tb_trip_status findFirst
     */
    export type tb_trip_statusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_trip_status
         */
        select?: tb_trip_statusSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip_status
         */
        omit?: tb_trip_statusOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_trip_statusInclude<ExtArgs> | null
        /**
         * Filter, which tb_trip_status to fetch.
         */
        where?: tb_trip_statusWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of tb_trip_statuses to fetch.
         */
        orderBy?: tb_trip_statusOrderByWithRelationInput | tb_trip_statusOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for tb_trip_statuses.
         */
        cursor?: tb_trip_statusWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` tb_trip_statuses from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` tb_trip_statuses.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of tb_trip_statuses.
         */
        distinct?: Tb_trip_statusScalarFieldEnum | Tb_trip_statusScalarFieldEnum[]
    }

    /**
     * tb_trip_status findFirstOrThrow
     */
    export type tb_trip_statusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        {
            /**
             * Select specific fields to fetch from the tb_trip_status
             */
            select?: tb_trip_statusSelect<ExtArgs> | null
            /**
             * Omit specific fields from the tb_trip_status
             */
            omit?: tb_trip_statusOmit<ExtArgs> | null
            /**
             * Choose, which related nodes to fetch as well
             */
            include?: tb_trip_statusInclude<ExtArgs> | null
            /**
             * Filter, which tb_trip_status to fetch.
             */
            where?: tb_trip_statusWhereInput
            /**
             * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
             *
             * Determine the order of tb_trip_statuses to fetch.
             */
            orderBy?: tb_trip_statusOrderByWithRelationInput | tb_trip_statusOrderByWithRelationInput[]
            /**
             * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
             *
             * Sets the position for searching for tb_trip_statuses.
             */
            cursor?: tb_trip_statusWhereUniqueInput
            /**
             * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
             *
             * Take `±n` tb_trip_statuses from the position of the cursor.
             */
            take?: number
            /**
             * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
             *
             * Skip the first `n` tb_trip_statuses.
             */
            skip?: number
            /**
             * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
             *
             * Filter by unique combinations of tb_trip_statuses.
             */
            distinct?: Tb_trip_statusScalarFieldEnum | Tb_trip_statusScalarFieldEnum[]
        }

    /**
     * tb_trip_status findMany
     */
    export type tb_trip_statusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_trip_status
         */
        select?: tb_trip_statusSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip_status
         */
        omit?: tb_trip_statusOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_trip_statusInclude<ExtArgs> | null
        /**
         * Filter, which tb_trip_statuses to fetch.
         */
        where?: tb_trip_statusWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of tb_trip_statuses to fetch.
         */
        orderBy?: tb_trip_statusOrderByWithRelationInput | tb_trip_statusOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing tb_trip_statuses.
         */
        cursor?: tb_trip_statusWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` tb_trip_statuses from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` tb_trip_statuses.
         */
        skip?: number
        distinct?: Tb_trip_statusScalarFieldEnum | Tb_trip_statusScalarFieldEnum[]
    }

    /**
     * tb_trip_status create
     */
    export type tb_trip_statusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_trip_status
         */
        select?: tb_trip_statusSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip_status
         */
        omit?: tb_trip_statusOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_trip_statusInclude<ExtArgs> | null
        /**
         * The data needed to create a tb_trip_status.
         */
        data?: XOR<tb_trip_statusCreateInput, tb_trip_statusUncheckedCreateInput>
    }

    /**
     * tb_trip_status createMany
     */
    export type tb_trip_statusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many tb_trip_statuses.
         */
        data: tb_trip_statusCreateManyInput | tb_trip_statusCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * tb_trip_status createManyAndReturn
     */
    export type tb_trip_statusCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the tb_trip_status
         */
        select?: tb_trip_statusSelectCreateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip_status
         */
        omit?: tb_trip_statusOmit<ExtArgs> | null
        /**
         * The data used to create many tb_trip_statuses.
         */
        data: tb_trip_statusCreateManyInput | tb_trip_statusCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * tb_trip_status update
     */
    export type tb_trip_statusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_trip_status
         */
        select?: tb_trip_statusSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip_status
         */
        omit?: tb_trip_statusOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_trip_statusInclude<ExtArgs> | null
        /**
         * The data needed to update a tb_trip_status.
         */
        data: XOR<tb_trip_statusUpdateInput, tb_trip_statusUncheckedUpdateInput>
        /**
         * Choose, which tb_trip_status to update.
         */
        where: tb_trip_statusWhereUniqueInput
    }

    /**
     * tb_trip_status updateMany
     */
    export type tb_trip_statusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update tb_trip_statuses.
         */
        data: XOR<tb_trip_statusUpdateManyMutationInput, tb_trip_statusUncheckedUpdateManyInput>
        /**
         * Filter which tb_trip_statuses to update
         */
        where?: tb_trip_statusWhereInput
        /**
         * Limit how many tb_trip_statuses to update.
         */
        limit?: number
    }

    /**
     * tb_trip_status updateManyAndReturn
     */
    export type tb_trip_statusUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the tb_trip_status
         */
        select?: tb_trip_statusSelectUpdateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip_status
         */
        omit?: tb_trip_statusOmit<ExtArgs> | null
        /**
         * The data used to update tb_trip_statuses.
         */
        data: XOR<tb_trip_statusUpdateManyMutationInput, tb_trip_statusUncheckedUpdateManyInput>
        /**
         * Filter which tb_trip_statuses to update
         */
        where?: tb_trip_statusWhereInput
        /**
         * Limit how many tb_trip_statuses to update.
         */
        limit?: number
    }

    /**
     * tb_trip_status upsert
     */
    export type tb_trip_statusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_trip_status
         */
        select?: tb_trip_statusSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip_status
         */
        omit?: tb_trip_statusOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_trip_statusInclude<ExtArgs> | null
        /**
         * The filter to search for the tb_trip_status to update in case it exists.
         */
        where: tb_trip_statusWhereUniqueInput
        /**
         * In case the tb_trip_status found by the `where` argument doesn't exist, create a new tb_trip_status with this data.
         */
        create: XOR<tb_trip_statusCreateInput, tb_trip_statusUncheckedCreateInput>
        /**
         * In case the tb_trip_status was found with the provided `where` argument, update it with this data.
         */
        update: XOR<tb_trip_statusUpdateInput, tb_trip_statusUncheckedUpdateInput>
    }

    /**
     * tb_trip_status delete
     */
    export type tb_trip_statusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_trip_status
         */
        select?: tb_trip_statusSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip_status
         */
        omit?: tb_trip_statusOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_trip_statusInclude<ExtArgs> | null
        /**
         * Filter which tb_trip_status to delete.
         */
        where: tb_trip_statusWhereUniqueInput
    }

    /**
     * tb_trip_status deleteMany
     */
    export type tb_trip_statusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which tb_trip_statuses to delete
         */
        where?: tb_trip_statusWhereInput
        /**
         * Limit how many tb_trip_statuses to delete.
         */
        limit?: number
    }

    /**
     * tb_trip_status.tb_trip
     */
    export type tb_trip_status$tb_tripArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_trip
         */
        select?: tb_tripSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip
         */
        omit?: tb_tripOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_tripInclude<ExtArgs> | null
        where?: tb_tripWhereInput
        orderBy?: tb_tripOrderByWithRelationInput | tb_tripOrderByWithRelationInput[]
        cursor?: tb_tripWhereUniqueInput
        take?: number
        skip?: number
        distinct?: Tb_tripScalarFieldEnum | Tb_tripScalarFieldEnum[]
    }

    /**
     * tb_trip_status without action
     */
    export type tb_trip_statusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_trip_status
         */
        select?: tb_trip_statusSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip_status
         */
        omit?: tb_trip_statusOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_trip_statusInclude<ExtArgs> | null
    }

    /**
     * Model tb_payment_history
     */

    export type AggregateTb_payment_history = {
        _count: Tb_payment_historyCountAggregateOutputType | null
        _avg: Tb_payment_historyAvgAggregateOutputType | null
        _sum: Tb_payment_historySumAggregateOutputType | null
        _min: Tb_payment_historyMinAggregateOutputType | null
        _max: Tb_payment_historyMaxAggregateOutputType | null
    }

    export type Tb_payment_historyAvgAggregateOutputType = {
        pay_hist_id: number | null
        pay_status_id: number | null
        trip_invoice_id: number | null
    }

    export type Tb_payment_historySumAggregateOutputType = {
        pay_hist_id: bigint | null
        pay_status_id: bigint | null
        trip_invoice_id: bigint | null
    }

    export type Tb_payment_historyMinAggregateOutputType = {
        pay_hist_id: bigint | null
        pay_status_id: bigint | null
        created_at: Date | null
        trip_invoice_id: bigint | null
    }

    export type Tb_payment_historyMaxAggregateOutputType = {
        pay_hist_id: bigint | null
        pay_status_id: bigint | null
        created_at: Date | null
        trip_invoice_id: bigint | null
    }

    export type Tb_payment_historyCountAggregateOutputType = {
        pay_hist_id: number
        pay_status_id: number
        created_at: number
        trip_invoice_id: number
        _all: number
    }

    export type Tb_payment_historyAvgAggregateInputType = {
        pay_hist_id?: true
        pay_status_id?: true
        trip_invoice_id?: true
    }

    export type Tb_payment_historySumAggregateInputType = {
        pay_hist_id?: true
        pay_status_id?: true
        trip_invoice_id?: true
    }

    export type Tb_payment_historyMinAggregateInputType = {
        pay_hist_id?: true
        pay_status_id?: true
        created_at?: true
        trip_invoice_id?: true
    }

    export type Tb_payment_historyMaxAggregateInputType = {
        pay_hist_id?: true
        pay_status_id?: true
        created_at?: true
        trip_invoice_id?: true
    }

    export type Tb_payment_historyCountAggregateInputType = {
        pay_hist_id?: true
        pay_status_id?: true
        created_at?: true
        trip_invoice_id?: true
        _all?: true
    }

    export type Tb_payment_historyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which tb_payment_history to aggregate.
         */
        where?: tb_payment_historyWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of tb_payment_histories to fetch.
         */
        orderBy?: tb_payment_historyOrderByWithRelationInput | tb_payment_historyOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: tb_payment_historyWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` tb_payment_histories from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` tb_payment_histories.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned tb_payment_histories
         **/
        _count?: true | Tb_payment_historyCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to average
         **/
        _avg?: Tb_payment_historyAvgAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to sum
         **/
        _sum?: Tb_payment_historySumAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: Tb_payment_historyMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: Tb_payment_historyMaxAggregateInputType
    }

    export type GetTb_payment_historyAggregateType<T extends Tb_payment_historyAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_payment_history]: P extends '_count' | 'count'
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateTb_payment_history[P]>
            : GetScalarType<T[P], AggregateTb_payment_history[P]>
    }

    export type tb_payment_historyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: tb_payment_historyWhereInput
        orderBy?: tb_payment_historyOrderByWithAggregationInput | tb_payment_historyOrderByWithAggregationInput[]
        by: Tb_payment_historyScalarFieldEnum[] | Tb_payment_historyScalarFieldEnum
        having?: tb_payment_historyScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: Tb_payment_historyCountAggregateInputType | true
        _avg?: Tb_payment_historyAvgAggregateInputType
        _sum?: Tb_payment_historySumAggregateInputType
        _min?: Tb_payment_historyMinAggregateInputType
        _max?: Tb_payment_historyMaxAggregateInputType
    }

    export type Tb_payment_historyGroupByOutputType = {
        pay_hist_id: bigint
        pay_status_id: bigint | null
        created_at: Date | null
        trip_invoice_id: bigint | null
        _count: Tb_payment_historyCountAggregateOutputType | null
        _avg: Tb_payment_historyAvgAggregateOutputType | null
        _sum: Tb_payment_historySumAggregateOutputType | null
        _min: Tb_payment_historyMinAggregateOutputType | null
        _max: Tb_payment_historyMaxAggregateOutputType | null
    }

    type GetTb_payment_historyGroupByPayload<T extends tb_payment_historyGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<Tb_payment_historyGroupByOutputType, T['by']> & {
                [P in keyof T & keyof Tb_payment_historyGroupByOutputType]: P extends '_count'
                    ? T[P] extends boolean
                        ? number
                        : GetScalarType<T[P], Tb_payment_historyGroupByOutputType[P]>
                    : GetScalarType<T[P], Tb_payment_historyGroupByOutputType[P]>
            }
        >
    >

    export type tb_payment_historySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        $Extensions.GetSelect<
            {
                pay_hist_id?: boolean
                pay_status_id?: boolean
                created_at?: boolean
                trip_invoice_id?: boolean
                tb_payment_status?: boolean | tb_payment_history$tb_payment_statusArgs<ExtArgs>
                tb_trip_invoice?: boolean | tb_payment_history$tb_trip_invoiceArgs<ExtArgs>
            },
            ExtArgs['result']['tb_payment_history']
        >

    export type tb_payment_historySelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            pay_hist_id?: boolean
            pay_status_id?: boolean
            created_at?: boolean
            trip_invoice_id?: boolean
            tb_payment_status?: boolean | tb_payment_history$tb_payment_statusArgs<ExtArgs>
            tb_trip_invoice?: boolean | tb_payment_history$tb_trip_invoiceArgs<ExtArgs>
        },
        ExtArgs['result']['tb_payment_history']
    >

    export type tb_payment_historySelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            pay_hist_id?: boolean
            pay_status_id?: boolean
            created_at?: boolean
            trip_invoice_id?: boolean
            tb_payment_status?: boolean | tb_payment_history$tb_payment_statusArgs<ExtArgs>
            tb_trip_invoice?: boolean | tb_payment_history$tb_trip_invoiceArgs<ExtArgs>
        },
        ExtArgs['result']['tb_payment_history']
    >

    export type tb_payment_historySelectScalar = {
        pay_hist_id?: boolean
        pay_status_id?: boolean
        created_at?: boolean
        trip_invoice_id?: boolean
    }

    export type tb_payment_historyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        $Extensions.GetOmit<
            'pay_hist_id' | 'pay_status_id' | 'created_at' | 'trip_invoice_id',
            ExtArgs['result']['tb_payment_history']
        >
    export type tb_payment_historyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        tb_payment_status?: boolean | tb_payment_history$tb_payment_statusArgs<ExtArgs>
        tb_trip_invoice?: boolean | tb_payment_history$tb_trip_invoiceArgs<ExtArgs>
    }
    export type tb_payment_historyIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        tb_payment_status?: boolean | tb_payment_history$tb_payment_statusArgs<ExtArgs>
        tb_trip_invoice?: boolean | tb_payment_history$tb_trip_invoiceArgs<ExtArgs>
    }
    export type tb_payment_historyIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        tb_payment_status?: boolean | tb_payment_history$tb_payment_statusArgs<ExtArgs>
        tb_trip_invoice?: boolean | tb_payment_history$tb_trip_invoiceArgs<ExtArgs>
    }

    export type $tb_payment_historyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: 'tb_payment_history'
        objects: {
            tb_payment_status: Prisma.$tb_payment_statusPayload<ExtArgs> | null
            tb_trip_invoice: Prisma.$tb_trip_invoicePayload<ExtArgs> | null
        }
        scalars: $Extensions.GetPayloadResult<
            {
                pay_hist_id: bigint
                pay_status_id: bigint | null
                created_at: Date | null
                trip_invoice_id: bigint | null
            },
            ExtArgs['result']['tb_payment_history']
        >
        composites: {}
    }

    type tb_payment_historyGetPayload<S extends boolean | null | undefined | tb_payment_historyDefaultArgs> =
        $Result.GetResult<Prisma.$tb_payment_historyPayload, S>

    type tb_payment_historyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
        tb_payment_historyFindManyArgs,
        'select' | 'include' | 'distinct' | 'omit'
    > & {
        select?: Tb_payment_historyCountAggregateInputType | true
    }

    export interface tb_payment_historyDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>['model']['tb_payment_history']
            meta: { name: 'tb_payment_history' }
        }
        /**
         * Find zero or one Tb_payment_history that matches the filter.
         * @param {tb_payment_historyFindUniqueArgs} args - Arguments to find a Tb_payment_history
         * @example
         * // Get one Tb_payment_history
         * const tb_payment_history = await prisma.tb_payment_history.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends tb_payment_historyFindUniqueArgs>(
            args: SelectSubset<T, tb_payment_historyFindUniqueArgs<ExtArgs>>
        ): Prisma__tb_payment_historyClient<
            $Result.GetResult<Prisma.$tb_payment_historyPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find one Tb_payment_history that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {tb_payment_historyFindUniqueOrThrowArgs} args - Arguments to find a Tb_payment_history
         * @example
         * // Get one Tb_payment_history
         * const tb_payment_history = await prisma.tb_payment_history.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends tb_payment_historyFindUniqueOrThrowArgs>(
            args: SelectSubset<T, tb_payment_historyFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__tb_payment_historyClient<
            $Result.GetResult<Prisma.$tb_payment_historyPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first Tb_payment_history that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_payment_historyFindFirstArgs} args - Arguments to find a Tb_payment_history
         * @example
         * // Get one Tb_payment_history
         * const tb_payment_history = await prisma.tb_payment_history.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends tb_payment_historyFindFirstArgs>(
            args?: SelectSubset<T, tb_payment_historyFindFirstArgs<ExtArgs>>
        ): Prisma__tb_payment_historyClient<
            $Result.GetResult<Prisma.$tb_payment_historyPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first Tb_payment_history that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_payment_historyFindFirstOrThrowArgs} args - Arguments to find a Tb_payment_history
         * @example
         * // Get one Tb_payment_history
         * const tb_payment_history = await prisma.tb_payment_history.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends tb_payment_historyFindFirstOrThrowArgs>(
            args?: SelectSubset<T, tb_payment_historyFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__tb_payment_historyClient<
            $Result.GetResult<Prisma.$tb_payment_historyPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find zero or more Tb_payment_histories that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_payment_historyFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Tb_payment_histories
         * const tb_payment_histories = await prisma.tb_payment_history.findMany()
         *
         * // Get first 10 Tb_payment_histories
         * const tb_payment_histories = await prisma.tb_payment_history.findMany({ take: 10 })
         *
         * // Only select the `pay_hist_id`
         * const tb_payment_historyWithPay_hist_idOnly = await prisma.tb_payment_history.findMany({ select: { pay_hist_id: true } })
         *
         */
        findMany<T extends tb_payment_historyFindManyArgs>(
            args?: SelectSubset<T, tb_payment_historyFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$tb_payment_historyPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
        >

        /**
         * Create a Tb_payment_history.
         * @param {tb_payment_historyCreateArgs} args - Arguments to create a Tb_payment_history.
         * @example
         * // Create one Tb_payment_history
         * const Tb_payment_history = await prisma.tb_payment_history.create({
         *   data: {
         *     // ... data to create a Tb_payment_history
         *   }
         * })
         *
         */
        create<T extends tb_payment_historyCreateArgs>(
            args: SelectSubset<T, tb_payment_historyCreateArgs<ExtArgs>>
        ): Prisma__tb_payment_historyClient<
            $Result.GetResult<Prisma.$tb_payment_historyPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Create many Tb_payment_histories.
         * @param {tb_payment_historyCreateManyArgs} args - Arguments to create many Tb_payment_histories.
         * @example
         * // Create many Tb_payment_histories
         * const tb_payment_history = await prisma.tb_payment_history.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends tb_payment_historyCreateManyArgs>(
            args?: SelectSubset<T, tb_payment_historyCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Create many Tb_payment_histories and returns the data saved in the database.
         * @param {tb_payment_historyCreateManyAndReturnArgs} args - Arguments to create many Tb_payment_histories.
         * @example
         * // Create many Tb_payment_histories
         * const tb_payment_history = await prisma.tb_payment_history.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Tb_payment_histories and only return the `pay_hist_id`
         * const tb_payment_historyWithPay_hist_idOnly = await prisma.tb_payment_history.createManyAndReturn({
         *   select: { pay_hist_id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends tb_payment_historyCreateManyAndReturnArgs>(
            args?: SelectSubset<T, tb_payment_historyCreateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$tb_payment_historyPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
        >

        /**
         * Delete a Tb_payment_history.
         * @param {tb_payment_historyDeleteArgs} args - Arguments to delete one Tb_payment_history.
         * @example
         * // Delete one Tb_payment_history
         * const Tb_payment_history = await prisma.tb_payment_history.delete({
         *   where: {
         *     // ... filter to delete one Tb_payment_history
         *   }
         * })
         *
         */
        delete<T extends tb_payment_historyDeleteArgs>(
            args: SelectSubset<T, tb_payment_historyDeleteArgs<ExtArgs>>
        ): Prisma__tb_payment_historyClient<
            $Result.GetResult<Prisma.$tb_payment_historyPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Update one Tb_payment_history.
         * @param {tb_payment_historyUpdateArgs} args - Arguments to update one Tb_payment_history.
         * @example
         * // Update one Tb_payment_history
         * const tb_payment_history = await prisma.tb_payment_history.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends tb_payment_historyUpdateArgs>(
            args: SelectSubset<T, tb_payment_historyUpdateArgs<ExtArgs>>
        ): Prisma__tb_payment_historyClient<
            $Result.GetResult<Prisma.$tb_payment_historyPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Delete zero or more Tb_payment_histories.
         * @param {tb_payment_historyDeleteManyArgs} args - Arguments to filter Tb_payment_histories to delete.
         * @example
         * // Delete a few Tb_payment_histories
         * const { count } = await prisma.tb_payment_history.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends tb_payment_historyDeleteManyArgs>(
            args?: SelectSubset<T, tb_payment_historyDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Tb_payment_histories.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_payment_historyUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Tb_payment_histories
         * const tb_payment_history = await prisma.tb_payment_history.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends tb_payment_historyUpdateManyArgs>(
            args: SelectSubset<T, tb_payment_historyUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Tb_payment_histories and returns the data updated in the database.
         * @param {tb_payment_historyUpdateManyAndReturnArgs} args - Arguments to update many Tb_payment_histories.
         * @example
         * // Update many Tb_payment_histories
         * const tb_payment_history = await prisma.tb_payment_history.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more Tb_payment_histories and only return the `pay_hist_id`
         * const tb_payment_historyWithPay_hist_idOnly = await prisma.tb_payment_history.updateManyAndReturn({
         *   select: { pay_hist_id: true },
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
        updateManyAndReturn<T extends tb_payment_historyUpdateManyAndReturnArgs>(
            args: SelectSubset<T, tb_payment_historyUpdateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$tb_payment_historyPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
        >

        /**
         * Create or update one Tb_payment_history.
         * @param {tb_payment_historyUpsertArgs} args - Arguments to update or create a Tb_payment_history.
         * @example
         * // Update or create a Tb_payment_history
         * const tb_payment_history = await prisma.tb_payment_history.upsert({
         *   create: {
         *     // ... data to create a Tb_payment_history
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Tb_payment_history we want to update
         *   }
         * })
         */
        upsert<T extends tb_payment_historyUpsertArgs>(
            args: SelectSubset<T, tb_payment_historyUpsertArgs<ExtArgs>>
        ): Prisma__tb_payment_historyClient<
            $Result.GetResult<Prisma.$tb_payment_historyPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Count the number of Tb_payment_histories.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_payment_historyCountArgs} args - Arguments to filter Tb_payment_histories to count.
         * @example
         * // Count the number of Tb_payment_histories
         * const count = await prisma.tb_payment_history.count({
         *   where: {
         *     // ... the filter for the Tb_payment_histories we want to count
         *   }
         * })
         **/
        count<T extends tb_payment_historyCountArgs>(
            args?: Subset<T, tb_payment_historyCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
                ? T['select'] extends true
                    ? number
                    : GetScalarType<T['select'], Tb_payment_historyCountAggregateOutputType>
                : number
        >

        /**
         * Allows you to perform aggregations operations on a Tb_payment_history.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {Tb_payment_historyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends Tb_payment_historyAggregateArgs>(
            args: Subset<T, Tb_payment_historyAggregateArgs>
        ): Prisma.PrismaPromise<GetTb_payment_historyAggregateType<T>>

        /**
         * Group by Tb_payment_history.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_payment_historyGroupByArgs} args - Group by arguments.
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
            T extends tb_payment_historyGroupByArgs,
            HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: tb_payment_historyGroupByArgs['orderBy'] }
                : { orderBy?: tb_payment_historyGroupByArgs['orderBy'] },
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
                              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
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
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, tb_payment_historyGroupByArgs, OrderByArg> & InputErrors
        ): {} extends InputErrors ? GetTb_payment_historyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
        /**
         * Fields of the tb_payment_history model
         */
        readonly fields: tb_payment_historyFieldRefs
    }

    /**
     * The delegate class that acts as a "Promise-like" for tb_payment_history.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__tb_payment_historyClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: 'PrismaPromise'
        tb_payment_status<T extends tb_payment_history$tb_payment_statusArgs<ExtArgs> = {}>(
            args?: Subset<T, tb_payment_history$tb_payment_statusArgs<ExtArgs>>
        ): Prisma__tb_payment_statusClient<
            $Result.GetResult<
                Prisma.$tb_payment_statusPayload<ExtArgs>,
                T,
                'findUniqueOrThrow',
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >
        tb_trip_invoice<T extends tb_payment_history$tb_trip_invoiceArgs<ExtArgs> = {}>(
            args?: Subset<T, tb_payment_history$tb_trip_invoiceArgs<ExtArgs>>
        ): Prisma__tb_trip_invoiceClient<
            $Result.GetResult<
                Prisma.$tb_trip_invoicePayload<ExtArgs>,
                T,
                'findUniqueOrThrow',
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
        ): $Utils.JsPromise<TResult1 | TResult2>
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
        ): $Utils.JsPromise<T | TResult>
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
    }

    /**
     * Fields of the tb_payment_history model
     */
    interface tb_payment_historyFieldRefs {
        readonly pay_hist_id: FieldRef<'tb_payment_history', 'BigInt'>
        readonly pay_status_id: FieldRef<'tb_payment_history', 'BigInt'>
        readonly created_at: FieldRef<'tb_payment_history', 'DateTime'>
        readonly trip_invoice_id: FieldRef<'tb_payment_history', 'BigInt'>
    }

    // Custom InputTypes
    /**
     * tb_payment_history findUnique
     */
    export type tb_payment_historyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_payment_history
         */
        select?: tb_payment_historySelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_history
         */
        omit?: tb_payment_historyOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_payment_historyInclude<ExtArgs> | null
        /**
         * Filter, which tb_payment_history to fetch.
         */
        where: tb_payment_historyWhereUniqueInput
    }

    /**
     * tb_payment_history findUniqueOrThrow
     */
    export type tb_payment_historyFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the tb_payment_history
         */
        select?: tb_payment_historySelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_history
         */
        omit?: tb_payment_historyOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_payment_historyInclude<ExtArgs> | null
        /**
         * Filter, which tb_payment_history to fetch.
         */
        where: tb_payment_historyWhereUniqueInput
    }

    /**
     * tb_payment_history findFirst
     */
    export type tb_payment_historyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_payment_history
         */
        select?: tb_payment_historySelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_history
         */
        omit?: tb_payment_historyOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_payment_historyInclude<ExtArgs> | null
        /**
         * Filter, which tb_payment_history to fetch.
         */
        where?: tb_payment_historyWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of tb_payment_histories to fetch.
         */
        orderBy?: tb_payment_historyOrderByWithRelationInput | tb_payment_historyOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for tb_payment_histories.
         */
        cursor?: tb_payment_historyWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` tb_payment_histories from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` tb_payment_histories.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of tb_payment_histories.
         */
        distinct?: Tb_payment_historyScalarFieldEnum | Tb_payment_historyScalarFieldEnum[]
    }

    /**
     * tb_payment_history findFirstOrThrow
     */
    export type tb_payment_historyFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the tb_payment_history
         */
        select?: tb_payment_historySelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_history
         */
        omit?: tb_payment_historyOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_payment_historyInclude<ExtArgs> | null
        /**
         * Filter, which tb_payment_history to fetch.
         */
        where?: tb_payment_historyWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of tb_payment_histories to fetch.
         */
        orderBy?: tb_payment_historyOrderByWithRelationInput | tb_payment_historyOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for tb_payment_histories.
         */
        cursor?: tb_payment_historyWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` tb_payment_histories from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` tb_payment_histories.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of tb_payment_histories.
         */
        distinct?: Tb_payment_historyScalarFieldEnum | Tb_payment_historyScalarFieldEnum[]
    }

    /**
     * tb_payment_history findMany
     */
    export type tb_payment_historyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_payment_history
         */
        select?: tb_payment_historySelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_history
         */
        omit?: tb_payment_historyOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_payment_historyInclude<ExtArgs> | null
        /**
         * Filter, which tb_payment_histories to fetch.
         */
        where?: tb_payment_historyWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of tb_payment_histories to fetch.
         */
        orderBy?: tb_payment_historyOrderByWithRelationInput | tb_payment_historyOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing tb_payment_histories.
         */
        cursor?: tb_payment_historyWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` tb_payment_histories from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` tb_payment_histories.
         */
        skip?: number
        distinct?: Tb_payment_historyScalarFieldEnum | Tb_payment_historyScalarFieldEnum[]
    }

    /**
     * tb_payment_history create
     */
    export type tb_payment_historyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_payment_history
         */
        select?: tb_payment_historySelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_history
         */
        omit?: tb_payment_historyOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_payment_historyInclude<ExtArgs> | null
        /**
         * The data needed to create a tb_payment_history.
         */
        data?: XOR<tb_payment_historyCreateInput, tb_payment_historyUncheckedCreateInput>
    }

    /**
     * tb_payment_history createMany
     */
    export type tb_payment_historyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many tb_payment_histories.
         */
        data: tb_payment_historyCreateManyInput | tb_payment_historyCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * tb_payment_history createManyAndReturn
     */
    export type tb_payment_historyCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the tb_payment_history
         */
        select?: tb_payment_historySelectCreateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_history
         */
        omit?: tb_payment_historyOmit<ExtArgs> | null
        /**
         * The data used to create many tb_payment_histories.
         */
        data: tb_payment_historyCreateManyInput | tb_payment_historyCreateManyInput[]
        skipDuplicates?: boolean
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_payment_historyIncludeCreateManyAndReturn<ExtArgs> | null
    }

    /**
     * tb_payment_history update
     */
    export type tb_payment_historyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_payment_history
         */
        select?: tb_payment_historySelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_history
         */
        omit?: tb_payment_historyOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_payment_historyInclude<ExtArgs> | null
        /**
         * The data needed to update a tb_payment_history.
         */
        data: XOR<tb_payment_historyUpdateInput, tb_payment_historyUncheckedUpdateInput>
        /**
         * Choose, which tb_payment_history to update.
         */
        where: tb_payment_historyWhereUniqueInput
    }

    /**
     * tb_payment_history updateMany
     */
    export type tb_payment_historyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update tb_payment_histories.
         */
        data: XOR<tb_payment_historyUpdateManyMutationInput, tb_payment_historyUncheckedUpdateManyInput>
        /**
         * Filter which tb_payment_histories to update
         */
        where?: tb_payment_historyWhereInput
        /**
         * Limit how many tb_payment_histories to update.
         */
        limit?: number
    }

    /**
     * tb_payment_history updateManyAndReturn
     */
    export type tb_payment_historyUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the tb_payment_history
         */
        select?: tb_payment_historySelectUpdateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_history
         */
        omit?: tb_payment_historyOmit<ExtArgs> | null
        /**
         * The data used to update tb_payment_histories.
         */
        data: XOR<tb_payment_historyUpdateManyMutationInput, tb_payment_historyUncheckedUpdateManyInput>
        /**
         * Filter which tb_payment_histories to update
         */
        where?: tb_payment_historyWhereInput
        /**
         * Limit how many tb_payment_histories to update.
         */
        limit?: number
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_payment_historyIncludeUpdateManyAndReturn<ExtArgs> | null
    }

    /**
     * tb_payment_history upsert
     */
    export type tb_payment_historyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_payment_history
         */
        select?: tb_payment_historySelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_history
         */
        omit?: tb_payment_historyOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_payment_historyInclude<ExtArgs> | null
        /**
         * The filter to search for the tb_payment_history to update in case it exists.
         */
        where: tb_payment_historyWhereUniqueInput
        /**
         * In case the tb_payment_history found by the `where` argument doesn't exist, create a new tb_payment_history with this data.
         */
        create: XOR<tb_payment_historyCreateInput, tb_payment_historyUncheckedCreateInput>
        /**
         * In case the tb_payment_history was found with the provided `where` argument, update it with this data.
         */
        update: XOR<tb_payment_historyUpdateInput, tb_payment_historyUncheckedUpdateInput>
    }

    /**
     * tb_payment_history delete
     */
    export type tb_payment_historyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_payment_history
         */
        select?: tb_payment_historySelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_history
         */
        omit?: tb_payment_historyOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_payment_historyInclude<ExtArgs> | null
        /**
         * Filter which tb_payment_history to delete.
         */
        where: tb_payment_historyWhereUniqueInput
    }

    /**
     * tb_payment_history deleteMany
     */
    export type tb_payment_historyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which tb_payment_histories to delete
         */
        where?: tb_payment_historyWhereInput
        /**
         * Limit how many tb_payment_histories to delete.
         */
        limit?: number
    }

    /**
     * tb_payment_history.tb_payment_status
     */
    export type tb_payment_history$tb_payment_statusArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the tb_payment_status
         */
        select?: tb_payment_statusSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_status
         */
        omit?: tb_payment_statusOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_payment_statusInclude<ExtArgs> | null
        where?: tb_payment_statusWhereInput
    }

    /**
     * tb_payment_history.tb_trip_invoice
     */
    export type tb_payment_history$tb_trip_invoiceArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the tb_trip_invoice
         */
        select?: tb_trip_invoiceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip_invoice
         */
        omit?: tb_trip_invoiceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_trip_invoiceInclude<ExtArgs> | null
        where?: tb_trip_invoiceWhereInput
    }

    /**
     * tb_payment_history without action
     */
    export type tb_payment_historyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_payment_history
         */
        select?: tb_payment_historySelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_history
         */
        omit?: tb_payment_historyOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_payment_historyInclude<ExtArgs> | null
    }

    /**
     * Model tb_trip
     */

    export type AggregateTb_trip = {
        _count: Tb_tripCountAggregateOutputType | null
        _avg: Tb_tripAvgAggregateOutputType | null
        _sum: Tb_tripSumAggregateOutputType | null
        _min: Tb_tripMinAggregateOutputType | null
        _max: Tb_tripMaxAggregateOutputType | null
    }

    export type Tb_tripAvgAggregateOutputType = {
        trip_id: number | null
        destination_id: number | null
        trip_status: number | null
    }

    export type Tb_tripSumAggregateOutputType = {
        trip_id: bigint | null
        destination_id: bigint | null
        trip_status: bigint | null
    }

    export type Tb_tripMinAggregateOutputType = {
        trip_id: bigint | null
        user_id: string | null
        destination_id: bigint | null
        start_time: Date | null
        end_time: Date | null
        created_at: Date | null
        updated_at: Date | null
        trip_status: bigint | null
        schedule_at: Date | null
        created_by: string | null
        updated_by: string | null
    }

    export type Tb_tripMaxAggregateOutputType = {
        trip_id: bigint | null
        user_id: string | null
        destination_id: bigint | null
        start_time: Date | null
        end_time: Date | null
        created_at: Date | null
        updated_at: Date | null
        trip_status: bigint | null
        schedule_at: Date | null
        created_by: string | null
        updated_by: string | null
    }

    export type Tb_tripCountAggregateOutputType = {
        trip_id: number
        user_id: number
        destination_id: number
        start_time: number
        end_time: number
        created_at: number
        updated_at: number
        trip_status: number
        schedule_at: number
        created_by: number
        updated_by: number
        _all: number
    }

    export type Tb_tripAvgAggregateInputType = {
        trip_id?: true
        destination_id?: true
        trip_status?: true
    }

    export type Tb_tripSumAggregateInputType = {
        trip_id?: true
        destination_id?: true
        trip_status?: true
    }

    export type Tb_tripMinAggregateInputType = {
        trip_id?: true
        user_id?: true
        destination_id?: true
        start_time?: true
        end_time?: true
        created_at?: true
        updated_at?: true
        trip_status?: true
        schedule_at?: true
        created_by?: true
        updated_by?: true
    }

    export type Tb_tripMaxAggregateInputType = {
        trip_id?: true
        user_id?: true
        destination_id?: true
        start_time?: true
        end_time?: true
        created_at?: true
        updated_at?: true
        trip_status?: true
        schedule_at?: true
        created_by?: true
        updated_by?: true
    }

    export type Tb_tripCountAggregateInputType = {
        trip_id?: true
        user_id?: true
        destination_id?: true
        start_time?: true
        end_time?: true
        created_at?: true
        updated_at?: true
        trip_status?: true
        schedule_at?: true
        created_by?: true
        updated_by?: true
        _all?: true
    }

    export type Tb_tripAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which tb_trip to aggregate.
         */
        where?: tb_tripWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of tb_trips to fetch.
         */
        orderBy?: tb_tripOrderByWithRelationInput | tb_tripOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: tb_tripWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` tb_trips from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` tb_trips.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned tb_trips
         **/
        _count?: true | Tb_tripCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to average
         **/
        _avg?: Tb_tripAvgAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to sum
         **/
        _sum?: Tb_tripSumAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: Tb_tripMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: Tb_tripMaxAggregateInputType
    }

    export type GetTb_tripAggregateType<T extends Tb_tripAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_trip]: P extends '_count' | 'count'
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateTb_trip[P]>
            : GetScalarType<T[P], AggregateTb_trip[P]>
    }

    export type tb_tripGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: tb_tripWhereInput
        orderBy?: tb_tripOrderByWithAggregationInput | tb_tripOrderByWithAggregationInput[]
        by: Tb_tripScalarFieldEnum[] | Tb_tripScalarFieldEnum
        having?: tb_tripScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: Tb_tripCountAggregateInputType | true
        _avg?: Tb_tripAvgAggregateInputType
        _sum?: Tb_tripSumAggregateInputType
        _min?: Tb_tripMinAggregateInputType
        _max?: Tb_tripMaxAggregateInputType
    }

    export type Tb_tripGroupByOutputType = {
        trip_id: bigint
        user_id: string
        destination_id: bigint
        start_time: Date | null
        end_time: Date | null
        created_at: Date | null
        updated_at: Date | null
        trip_status: bigint | null
        schedule_at: Date | null
        created_by: string | null
        updated_by: string | null
        _count: Tb_tripCountAggregateOutputType | null
        _avg: Tb_tripAvgAggregateOutputType | null
        _sum: Tb_tripSumAggregateOutputType | null
        _min: Tb_tripMinAggregateOutputType | null
        _max: Tb_tripMaxAggregateOutputType | null
    }

    type GetTb_tripGroupByPayload<T extends tb_tripGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<Tb_tripGroupByOutputType, T['by']> & {
                [P in keyof T & keyof Tb_tripGroupByOutputType]: P extends '_count'
                    ? T[P] extends boolean
                        ? number
                        : GetScalarType<T[P], Tb_tripGroupByOutputType[P]>
                    : GetScalarType<T[P], Tb_tripGroupByOutputType[P]>
            }
        >
    >

    export type tb_tripSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        $Extensions.GetSelect<
            {
                trip_id?: boolean
                user_id?: boolean
                destination_id?: boolean
                start_time?: boolean
                end_time?: boolean
                created_at?: boolean
                updated_at?: boolean
                trip_status?: boolean
                schedule_at?: boolean
                created_by?: boolean
                updated_by?: boolean
                tb_destination?: boolean | tb_destinationDefaultArgs<ExtArgs>
                tb_trip_status?: boolean | tb_trip$tb_trip_statusArgs<ExtArgs>
                tb_user?: boolean | tb_userDefaultArgs<ExtArgs>
                tb_trip_invoice?: boolean | tb_trip$tb_trip_invoiceArgs<ExtArgs>
                _count?: boolean | Tb_tripCountOutputTypeDefaultArgs<ExtArgs>
            },
            ExtArgs['result']['tb_trip']
        >

    export type tb_tripSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        $Extensions.GetSelect<
            {
                trip_id?: boolean
                user_id?: boolean
                destination_id?: boolean
                start_time?: boolean
                end_time?: boolean
                created_at?: boolean
                updated_at?: boolean
                trip_status?: boolean
                schedule_at?: boolean
                created_by?: boolean
                updated_by?: boolean
                tb_destination?: boolean | tb_destinationDefaultArgs<ExtArgs>
                tb_trip_status?: boolean | tb_trip$tb_trip_statusArgs<ExtArgs>
                tb_user?: boolean | tb_userDefaultArgs<ExtArgs>
            },
            ExtArgs['result']['tb_trip']
        >

    export type tb_tripSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        $Extensions.GetSelect<
            {
                trip_id?: boolean
                user_id?: boolean
                destination_id?: boolean
                start_time?: boolean
                end_time?: boolean
                created_at?: boolean
                updated_at?: boolean
                trip_status?: boolean
                schedule_at?: boolean
                created_by?: boolean
                updated_by?: boolean
                tb_destination?: boolean | tb_destinationDefaultArgs<ExtArgs>
                tb_trip_status?: boolean | tb_trip$tb_trip_statusArgs<ExtArgs>
                tb_user?: boolean | tb_userDefaultArgs<ExtArgs>
            },
            ExtArgs['result']['tb_trip']
        >

    export type tb_tripSelectScalar = {
        trip_id?: boolean
        user_id?: boolean
        destination_id?: boolean
        start_time?: boolean
        end_time?: boolean
        created_at?: boolean
        updated_at?: boolean
        trip_status?: boolean
        schedule_at?: boolean
        created_by?: boolean
        updated_by?: boolean
    }

    export type tb_tripOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<
        | 'trip_id'
        | 'user_id'
        | 'destination_id'
        | 'start_time'
        | 'end_time'
        | 'created_at'
        | 'updated_at'
        | 'trip_status'
        | 'schedule_at'
        | 'created_by'
        | 'updated_by',
        ExtArgs['result']['tb_trip']
    >
    export type tb_tripInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        tb_destination?: boolean | tb_destinationDefaultArgs<ExtArgs>
        tb_trip_status?: boolean | tb_trip$tb_trip_statusArgs<ExtArgs>
        tb_user?: boolean | tb_userDefaultArgs<ExtArgs>
        tb_trip_invoice?: boolean | tb_trip$tb_trip_invoiceArgs<ExtArgs>
        _count?: boolean | Tb_tripCountOutputTypeDefaultArgs<ExtArgs>
    }
    export type tb_tripIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        {
            tb_destination?: boolean | tb_destinationDefaultArgs<ExtArgs>
            tb_trip_status?: boolean | tb_trip$tb_trip_statusArgs<ExtArgs>
            tb_user?: boolean | tb_userDefaultArgs<ExtArgs>
        }
    export type tb_tripIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        {
            tb_destination?: boolean | tb_destinationDefaultArgs<ExtArgs>
            tb_trip_status?: boolean | tb_trip$tb_trip_statusArgs<ExtArgs>
            tb_user?: boolean | tb_userDefaultArgs<ExtArgs>
        }

    export type $tb_tripPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: 'tb_trip'
        objects: {
            tb_destination: Prisma.$tb_destinationPayload<ExtArgs>
            tb_trip_status: Prisma.$tb_trip_statusPayload<ExtArgs> | null
            tb_user: Prisma.$tb_userPayload<ExtArgs>
            tb_trip_invoice: Prisma.$tb_trip_invoicePayload<ExtArgs>[]
        }
        scalars: $Extensions.GetPayloadResult<
            {
                trip_id: bigint
                user_id: string
                destination_id: bigint
                start_time: Date | null
                end_time: Date | null
                created_at: Date | null
                updated_at: Date | null
                trip_status: bigint | null
                schedule_at: Date | null
                created_by: string | null
                updated_by: string | null
            },
            ExtArgs['result']['tb_trip']
        >
        composites: {}
    }

    type tb_tripGetPayload<S extends boolean | null | undefined | tb_tripDefaultArgs> = $Result.GetResult<
        Prisma.$tb_tripPayload,
        S
    >

    type tb_tripCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
        tb_tripFindManyArgs,
        'select' | 'include' | 'distinct' | 'omit'
    > & {
        select?: Tb_tripCountAggregateInputType | true
    }

    export interface tb_tripDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_trip']; meta: { name: 'tb_trip' } }
        /**
         * Find zero or one Tb_trip that matches the filter.
         * @param {tb_tripFindUniqueArgs} args - Arguments to find a Tb_trip
         * @example
         * // Get one Tb_trip
         * const tb_trip = await prisma.tb_trip.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends tb_tripFindUniqueArgs>(
            args: SelectSubset<T, tb_tripFindUniqueArgs<ExtArgs>>
        ): Prisma__tb_tripClient<
            $Result.GetResult<Prisma.$tb_tripPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find one Tb_trip that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {tb_tripFindUniqueOrThrowArgs} args - Arguments to find a Tb_trip
         * @example
         * // Get one Tb_trip
         * const tb_trip = await prisma.tb_trip.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends tb_tripFindUniqueOrThrowArgs>(
            args: SelectSubset<T, tb_tripFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__tb_tripClient<
            $Result.GetResult<Prisma.$tb_tripPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first Tb_trip that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_tripFindFirstArgs} args - Arguments to find a Tb_trip
         * @example
         * // Get one Tb_trip
         * const tb_trip = await prisma.tb_trip.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends tb_tripFindFirstArgs>(
            args?: SelectSubset<T, tb_tripFindFirstArgs<ExtArgs>>
        ): Prisma__tb_tripClient<
            $Result.GetResult<Prisma.$tb_tripPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first Tb_trip that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_tripFindFirstOrThrowArgs} args - Arguments to find a Tb_trip
         * @example
         * // Get one Tb_trip
         * const tb_trip = await prisma.tb_trip.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends tb_tripFindFirstOrThrowArgs>(
            args?: SelectSubset<T, tb_tripFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__tb_tripClient<
            $Result.GetResult<Prisma.$tb_tripPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find zero or more Tb_trips that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_tripFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Tb_trips
         * const tb_trips = await prisma.tb_trip.findMany()
         *
         * // Get first 10 Tb_trips
         * const tb_trips = await prisma.tb_trip.findMany({ take: 10 })
         *
         * // Only select the `trip_id`
         * const tb_tripWithTrip_idOnly = await prisma.tb_trip.findMany({ select: { trip_id: true } })
         *
         */
        findMany<T extends tb_tripFindManyArgs>(
            args?: SelectSubset<T, tb_tripFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_tripPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>>

        /**
         * Create a Tb_trip.
         * @param {tb_tripCreateArgs} args - Arguments to create a Tb_trip.
         * @example
         * // Create one Tb_trip
         * const Tb_trip = await prisma.tb_trip.create({
         *   data: {
         *     // ... data to create a Tb_trip
         *   }
         * })
         *
         */
        create<T extends tb_tripCreateArgs>(
            args: SelectSubset<T, tb_tripCreateArgs<ExtArgs>>
        ): Prisma__tb_tripClient<
            $Result.GetResult<Prisma.$tb_tripPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Create many Tb_trips.
         * @param {tb_tripCreateManyArgs} args - Arguments to create many Tb_trips.
         * @example
         * // Create many Tb_trips
         * const tb_trip = await prisma.tb_trip.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends tb_tripCreateManyArgs>(
            args?: SelectSubset<T, tb_tripCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Create many Tb_trips and returns the data saved in the database.
         * @param {tb_tripCreateManyAndReturnArgs} args - Arguments to create many Tb_trips.
         * @example
         * // Create many Tb_trips
         * const tb_trip = await prisma.tb_trip.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Tb_trips and only return the `trip_id`
         * const tb_tripWithTrip_idOnly = await prisma.tb_trip.createManyAndReturn({
         *   select: { trip_id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends tb_tripCreateManyAndReturnArgs>(
            args?: SelectSubset<T, tb_tripCreateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$tb_tripPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
        >

        /**
         * Delete a Tb_trip.
         * @param {tb_tripDeleteArgs} args - Arguments to delete one Tb_trip.
         * @example
         * // Delete one Tb_trip
         * const Tb_trip = await prisma.tb_trip.delete({
         *   where: {
         *     // ... filter to delete one Tb_trip
         *   }
         * })
         *
         */
        delete<T extends tb_tripDeleteArgs>(
            args: SelectSubset<T, tb_tripDeleteArgs<ExtArgs>>
        ): Prisma__tb_tripClient<
            $Result.GetResult<Prisma.$tb_tripPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Update one Tb_trip.
         * @param {tb_tripUpdateArgs} args - Arguments to update one Tb_trip.
         * @example
         * // Update one Tb_trip
         * const tb_trip = await prisma.tb_trip.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends tb_tripUpdateArgs>(
            args: SelectSubset<T, tb_tripUpdateArgs<ExtArgs>>
        ): Prisma__tb_tripClient<
            $Result.GetResult<Prisma.$tb_tripPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Delete zero or more Tb_trips.
         * @param {tb_tripDeleteManyArgs} args - Arguments to filter Tb_trips to delete.
         * @example
         * // Delete a few Tb_trips
         * const { count } = await prisma.tb_trip.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends tb_tripDeleteManyArgs>(
            args?: SelectSubset<T, tb_tripDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Tb_trips.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_tripUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Tb_trips
         * const tb_trip = await prisma.tb_trip.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends tb_tripUpdateManyArgs>(
            args: SelectSubset<T, tb_tripUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Tb_trips and returns the data updated in the database.
         * @param {tb_tripUpdateManyAndReturnArgs} args - Arguments to update many Tb_trips.
         * @example
         * // Update many Tb_trips
         * const tb_trip = await prisma.tb_trip.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more Tb_trips and only return the `trip_id`
         * const tb_tripWithTrip_idOnly = await prisma.tb_trip.updateManyAndReturn({
         *   select: { trip_id: true },
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
        updateManyAndReturn<T extends tb_tripUpdateManyAndReturnArgs>(
            args: SelectSubset<T, tb_tripUpdateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$tb_tripPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
        >

        /**
         * Create or update one Tb_trip.
         * @param {tb_tripUpsertArgs} args - Arguments to update or create a Tb_trip.
         * @example
         * // Update or create a Tb_trip
         * const tb_trip = await prisma.tb_trip.upsert({
         *   create: {
         *     // ... data to create a Tb_trip
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Tb_trip we want to update
         *   }
         * })
         */
        upsert<T extends tb_tripUpsertArgs>(
            args: SelectSubset<T, tb_tripUpsertArgs<ExtArgs>>
        ): Prisma__tb_tripClient<
            $Result.GetResult<Prisma.$tb_tripPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Count the number of Tb_trips.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_tripCountArgs} args - Arguments to filter Tb_trips to count.
         * @example
         * // Count the number of Tb_trips
         * const count = await prisma.tb_trip.count({
         *   where: {
         *     // ... the filter for the Tb_trips we want to count
         *   }
         * })
         **/
        count<T extends tb_tripCountArgs>(
            args?: Subset<T, tb_tripCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
                ? T['select'] extends true
                    ? number
                    : GetScalarType<T['select'], Tb_tripCountAggregateOutputType>
                : number
        >

        /**
         * Allows you to perform aggregations operations on a Tb_trip.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {Tb_tripAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends Tb_tripAggregateArgs>(
            args: Subset<T, Tb_tripAggregateArgs>
        ): Prisma.PrismaPromise<GetTb_tripAggregateType<T>>

        /**
         * Group by Tb_trip.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_tripGroupByArgs} args - Group by arguments.
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
            T extends tb_tripGroupByArgs,
            HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: tb_tripGroupByArgs['orderBy'] }
                : { orderBy?: tb_tripGroupByArgs['orderBy'] },
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
                              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
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
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, tb_tripGroupByArgs, OrderByArg> & InputErrors
        ): {} extends InputErrors ? GetTb_tripGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
        /**
         * Fields of the tb_trip model
         */
        readonly fields: tb_tripFieldRefs
    }

    /**
     * The delegate class that acts as a "Promise-like" for tb_trip.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__tb_tripClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: 'PrismaPromise'
        tb_destination<T extends tb_destinationDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, tb_destinationDefaultArgs<ExtArgs>>
        ): Prisma__tb_destinationClient<
            $Result.GetResult<Prisma.$tb_destinationPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions> | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >
        tb_trip_status<T extends tb_trip$tb_trip_statusArgs<ExtArgs> = {}>(
            args?: Subset<T, tb_trip$tb_trip_statusArgs<ExtArgs>>
        ): Prisma__tb_trip_statusClient<
            $Result.GetResult<Prisma.$tb_trip_statusPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions> | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >
        tb_user<T extends tb_userDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, tb_userDefaultArgs<ExtArgs>>
        ): Prisma__tb_userClient<
            $Result.GetResult<Prisma.$tb_userPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions> | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >
        tb_trip_invoice<T extends tb_trip$tb_trip_invoiceArgs<ExtArgs> = {}>(
            args?: Subset<T, tb_trip$tb_trip_invoiceArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$tb_trip_invoicePayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
        >
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
        ): $Utils.JsPromise<TResult1 | TResult2>
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
        ): $Utils.JsPromise<T | TResult>
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
    }

    /**
     * Fields of the tb_trip model
     */
    interface tb_tripFieldRefs {
        readonly trip_id: FieldRef<'tb_trip', 'BigInt'>
        readonly user_id: FieldRef<'tb_trip', 'String'>
        readonly destination_id: FieldRef<'tb_trip', 'BigInt'>
        readonly start_time: FieldRef<'tb_trip', 'DateTime'>
        readonly end_time: FieldRef<'tb_trip', 'DateTime'>
        readonly created_at: FieldRef<'tb_trip', 'DateTime'>
        readonly updated_at: FieldRef<'tb_trip', 'DateTime'>
        readonly trip_status: FieldRef<'tb_trip', 'BigInt'>
        readonly schedule_at: FieldRef<'tb_trip', 'DateTime'>
        readonly created_by: FieldRef<'tb_trip', 'String'>
        readonly updated_by: FieldRef<'tb_trip', 'String'>
    }

    // Custom InputTypes
    /**
     * tb_trip findUnique
     */
    export type tb_tripFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_trip
         */
        select?: tb_tripSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip
         */
        omit?: tb_tripOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_tripInclude<ExtArgs> | null
        /**
         * Filter, which tb_trip to fetch.
         */
        where: tb_tripWhereUniqueInput
    }

    /**
     * tb_trip findUniqueOrThrow
     */
    export type tb_tripFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_trip
         */
        select?: tb_tripSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip
         */
        omit?: tb_tripOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_tripInclude<ExtArgs> | null
        /**
         * Filter, which tb_trip to fetch.
         */
        where: tb_tripWhereUniqueInput
    }

    /**
     * tb_trip findFirst
     */
    export type tb_tripFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_trip
         */
        select?: tb_tripSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip
         */
        omit?: tb_tripOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_tripInclude<ExtArgs> | null
        /**
         * Filter, which tb_trip to fetch.
         */
        where?: tb_tripWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of tb_trips to fetch.
         */
        orderBy?: tb_tripOrderByWithRelationInput | tb_tripOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for tb_trips.
         */
        cursor?: tb_tripWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` tb_trips from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` tb_trips.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of tb_trips.
         */
        distinct?: Tb_tripScalarFieldEnum | Tb_tripScalarFieldEnum[]
    }

    /**
     * tb_trip findFirstOrThrow
     */
    export type tb_tripFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_trip
         */
        select?: tb_tripSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip
         */
        omit?: tb_tripOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_tripInclude<ExtArgs> | null
        /**
         * Filter, which tb_trip to fetch.
         */
        where?: tb_tripWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of tb_trips to fetch.
         */
        orderBy?: tb_tripOrderByWithRelationInput | tb_tripOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for tb_trips.
         */
        cursor?: tb_tripWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` tb_trips from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` tb_trips.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of tb_trips.
         */
        distinct?: Tb_tripScalarFieldEnum | Tb_tripScalarFieldEnum[]
    }

    /**
     * tb_trip findMany
     */
    export type tb_tripFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_trip
         */
        select?: tb_tripSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip
         */
        omit?: tb_tripOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_tripInclude<ExtArgs> | null
        /**
         * Filter, which tb_trips to fetch.
         */
        where?: tb_tripWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of tb_trips to fetch.
         */
        orderBy?: tb_tripOrderByWithRelationInput | tb_tripOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing tb_trips.
         */
        cursor?: tb_tripWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` tb_trips from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` tb_trips.
         */
        skip?: number
        distinct?: Tb_tripScalarFieldEnum | Tb_tripScalarFieldEnum[]
    }

    /**
     * tb_trip create
     */
    export type tb_tripCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_trip
         */
        select?: tb_tripSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip
         */
        omit?: tb_tripOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_tripInclude<ExtArgs> | null
        /**
         * The data needed to create a tb_trip.
         */
        data: XOR<tb_tripCreateInput, tb_tripUncheckedCreateInput>
    }

    /**
     * tb_trip createMany
     */
    export type tb_tripCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many tb_trips.
         */
        data: tb_tripCreateManyInput | tb_tripCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * tb_trip createManyAndReturn
     */
    export type tb_tripCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_trip
         */
        select?: tb_tripSelectCreateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip
         */
        omit?: tb_tripOmit<ExtArgs> | null
        /**
         * The data used to create many tb_trips.
         */
        data: tb_tripCreateManyInput | tb_tripCreateManyInput[]
        skipDuplicates?: boolean
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_tripIncludeCreateManyAndReturn<ExtArgs> | null
    }

    /**
     * tb_trip update
     */
    export type tb_tripUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_trip
         */
        select?: tb_tripSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip
         */
        omit?: tb_tripOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_tripInclude<ExtArgs> | null
        /**
         * The data needed to update a tb_trip.
         */
        data: XOR<tb_tripUpdateInput, tb_tripUncheckedUpdateInput>
        /**
         * Choose, which tb_trip to update.
         */
        where: tb_tripWhereUniqueInput
    }

    /**
     * tb_trip updateMany
     */
    export type tb_tripUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update tb_trips.
         */
        data: XOR<tb_tripUpdateManyMutationInput, tb_tripUncheckedUpdateManyInput>
        /**
         * Filter which tb_trips to update
         */
        where?: tb_tripWhereInput
        /**
         * Limit how many tb_trips to update.
         */
        limit?: number
    }

    /**
     * tb_trip updateManyAndReturn
     */
    export type tb_tripUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_trip
         */
        select?: tb_tripSelectUpdateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip
         */
        omit?: tb_tripOmit<ExtArgs> | null
        /**
         * The data used to update tb_trips.
         */
        data: XOR<tb_tripUpdateManyMutationInput, tb_tripUncheckedUpdateManyInput>
        /**
         * Filter which tb_trips to update
         */
        where?: tb_tripWhereInput
        /**
         * Limit how many tb_trips to update.
         */
        limit?: number
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_tripIncludeUpdateManyAndReturn<ExtArgs> | null
    }

    /**
     * tb_trip upsert
     */
    export type tb_tripUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_trip
         */
        select?: tb_tripSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip
         */
        omit?: tb_tripOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_tripInclude<ExtArgs> | null
        /**
         * The filter to search for the tb_trip to update in case it exists.
         */
        where: tb_tripWhereUniqueInput
        /**
         * In case the tb_trip found by the `where` argument doesn't exist, create a new tb_trip with this data.
         */
        create: XOR<tb_tripCreateInput, tb_tripUncheckedCreateInput>
        /**
         * In case the tb_trip was found with the provided `where` argument, update it with this data.
         */
        update: XOR<tb_tripUpdateInput, tb_tripUncheckedUpdateInput>
    }

    /**
     * tb_trip delete
     */
    export type tb_tripDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_trip
         */
        select?: tb_tripSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip
         */
        omit?: tb_tripOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_tripInclude<ExtArgs> | null
        /**
         * Filter which tb_trip to delete.
         */
        where: tb_tripWhereUniqueInput
    }

    /**
     * tb_trip deleteMany
     */
    export type tb_tripDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which tb_trips to delete
         */
        where?: tb_tripWhereInput
        /**
         * Limit how many tb_trips to delete.
         */
        limit?: number
    }

    /**
     * tb_trip.tb_trip_status
     */
    export type tb_trip$tb_trip_statusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_trip_status
         */
        select?: tb_trip_statusSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip_status
         */
        omit?: tb_trip_statusOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_trip_statusInclude<ExtArgs> | null
        where?: tb_trip_statusWhereInput
    }

    /**
     * tb_trip.tb_trip_invoice
     */
    export type tb_trip$tb_trip_invoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_trip_invoice
         */
        select?: tb_trip_invoiceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip_invoice
         */
        omit?: tb_trip_invoiceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_trip_invoiceInclude<ExtArgs> | null
        where?: tb_trip_invoiceWhereInput
        orderBy?: tb_trip_invoiceOrderByWithRelationInput | tb_trip_invoiceOrderByWithRelationInput[]
        cursor?: tb_trip_invoiceWhereUniqueInput
        take?: number
        skip?: number
        distinct?: Tb_trip_invoiceScalarFieldEnum | Tb_trip_invoiceScalarFieldEnum[]
    }

    /**
     * tb_trip without action
     */
    export type tb_tripDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_trip
         */
        select?: tb_tripSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip
         */
        omit?: tb_tripOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_tripInclude<ExtArgs> | null
    }

    /**
     * Model tb_trip_invoice
     */

    export type AggregateTb_trip_invoice = {
        _count: Tb_trip_invoiceCountAggregateOutputType | null
        _avg: Tb_trip_invoiceAvgAggregateOutputType | null
        _sum: Tb_trip_invoiceSumAggregateOutputType | null
        _min: Tb_trip_invoiceMinAggregateOutputType | null
        _max: Tb_trip_invoiceMaxAggregateOutputType | null
    }

    export type Tb_trip_invoiceAvgAggregateOutputType = {
        trip_invoice_id: number | null
        quantity: number | null
        total_amount: Decimal | null
        pay_type_id: number | null
        trip_id: number | null
    }

    export type Tb_trip_invoiceSumAggregateOutputType = {
        trip_invoice_id: bigint | null
        quantity: bigint | null
        total_amount: Decimal | null
        pay_type_id: bigint | null
        trip_id: bigint | null
    }

    export type Tb_trip_invoiceMinAggregateOutputType = {
        trip_invoice_id: bigint | null
        invoice_no: string | null
        quantity: bigint | null
        total_amount: Decimal | null
        pay_type_id: bigint | null
        trip_id: bigint | null
    }

    export type Tb_trip_invoiceMaxAggregateOutputType = {
        trip_invoice_id: bigint | null
        invoice_no: string | null
        quantity: bigint | null
        total_amount: Decimal | null
        pay_type_id: bigint | null
        trip_id: bigint | null
    }

    export type Tb_trip_invoiceCountAggregateOutputType = {
        trip_invoice_id: number
        invoice_no: number
        quantity: number
        total_amount: number
        pay_type_id: number
        trip_id: number
        _all: number
    }

    export type Tb_trip_invoiceAvgAggregateInputType = {
        trip_invoice_id?: true
        quantity?: true
        total_amount?: true
        pay_type_id?: true
        trip_id?: true
    }

    export type Tb_trip_invoiceSumAggregateInputType = {
        trip_invoice_id?: true
        quantity?: true
        total_amount?: true
        pay_type_id?: true
        trip_id?: true
    }

    export type Tb_trip_invoiceMinAggregateInputType = {
        trip_invoice_id?: true
        invoice_no?: true
        quantity?: true
        total_amount?: true
        pay_type_id?: true
        trip_id?: true
    }

    export type Tb_trip_invoiceMaxAggregateInputType = {
        trip_invoice_id?: true
        invoice_no?: true
        quantity?: true
        total_amount?: true
        pay_type_id?: true
        trip_id?: true
    }

    export type Tb_trip_invoiceCountAggregateInputType = {
        trip_invoice_id?: true
        invoice_no?: true
        quantity?: true
        total_amount?: true
        pay_type_id?: true
        trip_id?: true
        _all?: true
    }

    export type Tb_trip_invoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which tb_trip_invoice to aggregate.
         */
        where?: tb_trip_invoiceWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of tb_trip_invoices to fetch.
         */
        orderBy?: tb_trip_invoiceOrderByWithRelationInput | tb_trip_invoiceOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: tb_trip_invoiceWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` tb_trip_invoices from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` tb_trip_invoices.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned tb_trip_invoices
         **/
        _count?: true | Tb_trip_invoiceCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to average
         **/
        _avg?: Tb_trip_invoiceAvgAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to sum
         **/
        _sum?: Tb_trip_invoiceSumAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: Tb_trip_invoiceMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: Tb_trip_invoiceMaxAggregateInputType
    }

    export type GetTb_trip_invoiceAggregateType<T extends Tb_trip_invoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_trip_invoice]: P extends '_count' | 'count'
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateTb_trip_invoice[P]>
            : GetScalarType<T[P], AggregateTb_trip_invoice[P]>
    }

    export type tb_trip_invoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: tb_trip_invoiceWhereInput
        orderBy?: tb_trip_invoiceOrderByWithAggregationInput | tb_trip_invoiceOrderByWithAggregationInput[]
        by: Tb_trip_invoiceScalarFieldEnum[] | Tb_trip_invoiceScalarFieldEnum
        having?: tb_trip_invoiceScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: Tb_trip_invoiceCountAggregateInputType | true
        _avg?: Tb_trip_invoiceAvgAggregateInputType
        _sum?: Tb_trip_invoiceSumAggregateInputType
        _min?: Tb_trip_invoiceMinAggregateInputType
        _max?: Tb_trip_invoiceMaxAggregateInputType
    }

    export type Tb_trip_invoiceGroupByOutputType = {
        trip_invoice_id: bigint
        invoice_no: string | null
        quantity: bigint | null
        total_amount: Decimal | null
        pay_type_id: bigint | null
        trip_id: bigint | null
        _count: Tb_trip_invoiceCountAggregateOutputType | null
        _avg: Tb_trip_invoiceAvgAggregateOutputType | null
        _sum: Tb_trip_invoiceSumAggregateOutputType | null
        _min: Tb_trip_invoiceMinAggregateOutputType | null
        _max: Tb_trip_invoiceMaxAggregateOutputType | null
    }

    type GetTb_trip_invoiceGroupByPayload<T extends tb_trip_invoiceGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<Tb_trip_invoiceGroupByOutputType, T['by']> & {
                [P in keyof T & keyof Tb_trip_invoiceGroupByOutputType]: P extends '_count'
                    ? T[P] extends boolean
                        ? number
                        : GetScalarType<T[P], Tb_trip_invoiceGroupByOutputType[P]>
                    : GetScalarType<T[P], Tb_trip_invoiceGroupByOutputType[P]>
            }
        >
    >

    export type tb_trip_invoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        $Extensions.GetSelect<
            {
                trip_invoice_id?: boolean
                invoice_no?: boolean
                quantity?: boolean
                total_amount?: boolean
                pay_type_id?: boolean
                trip_id?: boolean
                tb_payment_history?: boolean | tb_trip_invoice$tb_payment_historyArgs<ExtArgs>
                tb_payment_type?: boolean | tb_trip_invoice$tb_payment_typeArgs<ExtArgs>
                tb_trip?: boolean | tb_trip_invoice$tb_tripArgs<ExtArgs>
                _count?: boolean | Tb_trip_invoiceCountOutputTypeDefaultArgs<ExtArgs>
            },
            ExtArgs['result']['tb_trip_invoice']
        >

    export type tb_trip_invoiceSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            trip_invoice_id?: boolean
            invoice_no?: boolean
            quantity?: boolean
            total_amount?: boolean
            pay_type_id?: boolean
            trip_id?: boolean
            tb_payment_type?: boolean | tb_trip_invoice$tb_payment_typeArgs<ExtArgs>
            tb_trip?: boolean | tb_trip_invoice$tb_tripArgs<ExtArgs>
        },
        ExtArgs['result']['tb_trip_invoice']
    >

    export type tb_trip_invoiceSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            trip_invoice_id?: boolean
            invoice_no?: boolean
            quantity?: boolean
            total_amount?: boolean
            pay_type_id?: boolean
            trip_id?: boolean
            tb_payment_type?: boolean | tb_trip_invoice$tb_payment_typeArgs<ExtArgs>
            tb_trip?: boolean | tb_trip_invoice$tb_tripArgs<ExtArgs>
        },
        ExtArgs['result']['tb_trip_invoice']
    >

    export type tb_trip_invoiceSelectScalar = {
        trip_invoice_id?: boolean
        invoice_no?: boolean
        quantity?: boolean
        total_amount?: boolean
        pay_type_id?: boolean
        trip_id?: boolean
    }

    export type tb_trip_invoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        $Extensions.GetOmit<
            'trip_invoice_id' | 'invoice_no' | 'quantity' | 'total_amount' | 'pay_type_id' | 'trip_id',
            ExtArgs['result']['tb_trip_invoice']
        >
    export type tb_trip_invoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        tb_payment_history?: boolean | tb_trip_invoice$tb_payment_historyArgs<ExtArgs>
        tb_payment_type?: boolean | tb_trip_invoice$tb_payment_typeArgs<ExtArgs>
        tb_trip?: boolean | tb_trip_invoice$tb_tripArgs<ExtArgs>
        _count?: boolean | Tb_trip_invoiceCountOutputTypeDefaultArgs<ExtArgs>
    }
    export type tb_trip_invoiceIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        tb_payment_type?: boolean | tb_trip_invoice$tb_payment_typeArgs<ExtArgs>
        tb_trip?: boolean | tb_trip_invoice$tb_tripArgs<ExtArgs>
    }
    export type tb_trip_invoiceIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        tb_payment_type?: boolean | tb_trip_invoice$tb_payment_typeArgs<ExtArgs>
        tb_trip?: boolean | tb_trip_invoice$tb_tripArgs<ExtArgs>
    }

    export type $tb_trip_invoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: 'tb_trip_invoice'
        objects: {
            tb_payment_history: Prisma.$tb_payment_historyPayload<ExtArgs>[]
            tb_payment_type: Prisma.$tb_payment_typePayload<ExtArgs> | null
            tb_trip: Prisma.$tb_tripPayload<ExtArgs> | null
        }
        scalars: $Extensions.GetPayloadResult<
            {
                trip_invoice_id: bigint
                invoice_no: string | null
                quantity: bigint | null
                total_amount: Prisma.Decimal | null
                pay_type_id: bigint | null
                trip_id: bigint | null
            },
            ExtArgs['result']['tb_trip_invoice']
        >
        composites: {}
    }

    type tb_trip_invoiceGetPayload<S extends boolean | null | undefined | tb_trip_invoiceDefaultArgs> =
        $Result.GetResult<Prisma.$tb_trip_invoicePayload, S>

    type tb_trip_invoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
        tb_trip_invoiceFindManyArgs,
        'select' | 'include' | 'distinct' | 'omit'
    > & {
        select?: Tb_trip_invoiceCountAggregateInputType | true
    }

    export interface tb_trip_invoiceDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_trip_invoice']; meta: { name: 'tb_trip_invoice' } }
        /**
         * Find zero or one Tb_trip_invoice that matches the filter.
         * @param {tb_trip_invoiceFindUniqueArgs} args - Arguments to find a Tb_trip_invoice
         * @example
         * // Get one Tb_trip_invoice
         * const tb_trip_invoice = await prisma.tb_trip_invoice.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends tb_trip_invoiceFindUniqueArgs>(
            args: SelectSubset<T, tb_trip_invoiceFindUniqueArgs<ExtArgs>>
        ): Prisma__tb_trip_invoiceClient<
            $Result.GetResult<Prisma.$tb_trip_invoicePayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find one Tb_trip_invoice that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {tb_trip_invoiceFindUniqueOrThrowArgs} args - Arguments to find a Tb_trip_invoice
         * @example
         * // Get one Tb_trip_invoice
         * const tb_trip_invoice = await prisma.tb_trip_invoice.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends tb_trip_invoiceFindUniqueOrThrowArgs>(
            args: SelectSubset<T, tb_trip_invoiceFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__tb_trip_invoiceClient<
            $Result.GetResult<Prisma.$tb_trip_invoicePayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first Tb_trip_invoice that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_trip_invoiceFindFirstArgs} args - Arguments to find a Tb_trip_invoice
         * @example
         * // Get one Tb_trip_invoice
         * const tb_trip_invoice = await prisma.tb_trip_invoice.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends tb_trip_invoiceFindFirstArgs>(
            args?: SelectSubset<T, tb_trip_invoiceFindFirstArgs<ExtArgs>>
        ): Prisma__tb_trip_invoiceClient<
            $Result.GetResult<Prisma.$tb_trip_invoicePayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first Tb_trip_invoice that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_trip_invoiceFindFirstOrThrowArgs} args - Arguments to find a Tb_trip_invoice
         * @example
         * // Get one Tb_trip_invoice
         * const tb_trip_invoice = await prisma.tb_trip_invoice.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends tb_trip_invoiceFindFirstOrThrowArgs>(
            args?: SelectSubset<T, tb_trip_invoiceFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__tb_trip_invoiceClient<
            $Result.GetResult<Prisma.$tb_trip_invoicePayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find zero or more Tb_trip_invoices that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_trip_invoiceFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Tb_trip_invoices
         * const tb_trip_invoices = await prisma.tb_trip_invoice.findMany()
         *
         * // Get first 10 Tb_trip_invoices
         * const tb_trip_invoices = await prisma.tb_trip_invoice.findMany({ take: 10 })
         *
         * // Only select the `trip_invoice_id`
         * const tb_trip_invoiceWithTrip_invoice_idOnly = await prisma.tb_trip_invoice.findMany({ select: { trip_invoice_id: true } })
         *
         */
        findMany<T extends tb_trip_invoiceFindManyArgs>(
            args?: SelectSubset<T, tb_trip_invoiceFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$tb_trip_invoicePayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
        >

        /**
         * Create a Tb_trip_invoice.
         * @param {tb_trip_invoiceCreateArgs} args - Arguments to create a Tb_trip_invoice.
         * @example
         * // Create one Tb_trip_invoice
         * const Tb_trip_invoice = await prisma.tb_trip_invoice.create({
         *   data: {
         *     // ... data to create a Tb_trip_invoice
         *   }
         * })
         *
         */
        create<T extends tb_trip_invoiceCreateArgs>(
            args: SelectSubset<T, tb_trip_invoiceCreateArgs<ExtArgs>>
        ): Prisma__tb_trip_invoiceClient<
            $Result.GetResult<Prisma.$tb_trip_invoicePayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Create many Tb_trip_invoices.
         * @param {tb_trip_invoiceCreateManyArgs} args - Arguments to create many Tb_trip_invoices.
         * @example
         * // Create many Tb_trip_invoices
         * const tb_trip_invoice = await prisma.tb_trip_invoice.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends tb_trip_invoiceCreateManyArgs>(
            args?: SelectSubset<T, tb_trip_invoiceCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Create many Tb_trip_invoices and returns the data saved in the database.
         * @param {tb_trip_invoiceCreateManyAndReturnArgs} args - Arguments to create many Tb_trip_invoices.
         * @example
         * // Create many Tb_trip_invoices
         * const tb_trip_invoice = await prisma.tb_trip_invoice.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Tb_trip_invoices and only return the `trip_invoice_id`
         * const tb_trip_invoiceWithTrip_invoice_idOnly = await prisma.tb_trip_invoice.createManyAndReturn({
         *   select: { trip_invoice_id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends tb_trip_invoiceCreateManyAndReturnArgs>(
            args?: SelectSubset<T, tb_trip_invoiceCreateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$tb_trip_invoicePayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
        >

        /**
         * Delete a Tb_trip_invoice.
         * @param {tb_trip_invoiceDeleteArgs} args - Arguments to delete one Tb_trip_invoice.
         * @example
         * // Delete one Tb_trip_invoice
         * const Tb_trip_invoice = await prisma.tb_trip_invoice.delete({
         *   where: {
         *     // ... filter to delete one Tb_trip_invoice
         *   }
         * })
         *
         */
        delete<T extends tb_trip_invoiceDeleteArgs>(
            args: SelectSubset<T, tb_trip_invoiceDeleteArgs<ExtArgs>>
        ): Prisma__tb_trip_invoiceClient<
            $Result.GetResult<Prisma.$tb_trip_invoicePayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Update one Tb_trip_invoice.
         * @param {tb_trip_invoiceUpdateArgs} args - Arguments to update one Tb_trip_invoice.
         * @example
         * // Update one Tb_trip_invoice
         * const tb_trip_invoice = await prisma.tb_trip_invoice.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends tb_trip_invoiceUpdateArgs>(
            args: SelectSubset<T, tb_trip_invoiceUpdateArgs<ExtArgs>>
        ): Prisma__tb_trip_invoiceClient<
            $Result.GetResult<Prisma.$tb_trip_invoicePayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Delete zero or more Tb_trip_invoices.
         * @param {tb_trip_invoiceDeleteManyArgs} args - Arguments to filter Tb_trip_invoices to delete.
         * @example
         * // Delete a few Tb_trip_invoices
         * const { count } = await prisma.tb_trip_invoice.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends tb_trip_invoiceDeleteManyArgs>(
            args?: SelectSubset<T, tb_trip_invoiceDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Tb_trip_invoices.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_trip_invoiceUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Tb_trip_invoices
         * const tb_trip_invoice = await prisma.tb_trip_invoice.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends tb_trip_invoiceUpdateManyArgs>(
            args: SelectSubset<T, tb_trip_invoiceUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Tb_trip_invoices and returns the data updated in the database.
         * @param {tb_trip_invoiceUpdateManyAndReturnArgs} args - Arguments to update many Tb_trip_invoices.
         * @example
         * // Update many Tb_trip_invoices
         * const tb_trip_invoice = await prisma.tb_trip_invoice.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more Tb_trip_invoices and only return the `trip_invoice_id`
         * const tb_trip_invoiceWithTrip_invoice_idOnly = await prisma.tb_trip_invoice.updateManyAndReturn({
         *   select: { trip_invoice_id: true },
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
        updateManyAndReturn<T extends tb_trip_invoiceUpdateManyAndReturnArgs>(
            args: SelectSubset<T, tb_trip_invoiceUpdateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$tb_trip_invoicePayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
        >

        /**
         * Create or update one Tb_trip_invoice.
         * @param {tb_trip_invoiceUpsertArgs} args - Arguments to update or create a Tb_trip_invoice.
         * @example
         * // Update or create a Tb_trip_invoice
         * const tb_trip_invoice = await prisma.tb_trip_invoice.upsert({
         *   create: {
         *     // ... data to create a Tb_trip_invoice
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Tb_trip_invoice we want to update
         *   }
         * })
         */
        upsert<T extends tb_trip_invoiceUpsertArgs>(
            args: SelectSubset<T, tb_trip_invoiceUpsertArgs<ExtArgs>>
        ): Prisma__tb_trip_invoiceClient<
            $Result.GetResult<Prisma.$tb_trip_invoicePayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Count the number of Tb_trip_invoices.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_trip_invoiceCountArgs} args - Arguments to filter Tb_trip_invoices to count.
         * @example
         * // Count the number of Tb_trip_invoices
         * const count = await prisma.tb_trip_invoice.count({
         *   where: {
         *     // ... the filter for the Tb_trip_invoices we want to count
         *   }
         * })
         **/
        count<T extends tb_trip_invoiceCountArgs>(
            args?: Subset<T, tb_trip_invoiceCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
                ? T['select'] extends true
                    ? number
                    : GetScalarType<T['select'], Tb_trip_invoiceCountAggregateOutputType>
                : number
        >

        /**
         * Allows you to perform aggregations operations on a Tb_trip_invoice.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {Tb_trip_invoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends Tb_trip_invoiceAggregateArgs>(
            args: Subset<T, Tb_trip_invoiceAggregateArgs>
        ): Prisma.PrismaPromise<GetTb_trip_invoiceAggregateType<T>>

        /**
         * Group by Tb_trip_invoice.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_trip_invoiceGroupByArgs} args - Group by arguments.
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
            T extends tb_trip_invoiceGroupByArgs,
            HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: tb_trip_invoiceGroupByArgs['orderBy'] }
                : { orderBy?: tb_trip_invoiceGroupByArgs['orderBy'] },
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
                              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
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
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, tb_trip_invoiceGroupByArgs, OrderByArg> & InputErrors
        ): {} extends InputErrors ? GetTb_trip_invoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
        /**
         * Fields of the tb_trip_invoice model
         */
        readonly fields: tb_trip_invoiceFieldRefs
    }

    /**
     * The delegate class that acts as a "Promise-like" for tb_trip_invoice.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__tb_trip_invoiceClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: 'PrismaPromise'
        tb_payment_history<T extends tb_trip_invoice$tb_payment_historyArgs<ExtArgs> = {}>(
            args?: Subset<T, tb_trip_invoice$tb_payment_historyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$tb_payment_historyPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
        >
        tb_payment_type<T extends tb_trip_invoice$tb_payment_typeArgs<ExtArgs> = {}>(
            args?: Subset<T, tb_trip_invoice$tb_payment_typeArgs<ExtArgs>>
        ): Prisma__tb_payment_typeClient<
            $Result.GetResult<
                Prisma.$tb_payment_typePayload<ExtArgs>,
                T,
                'findUniqueOrThrow',
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >
        tb_trip<T extends tb_trip_invoice$tb_tripArgs<ExtArgs> = {}>(
            args?: Subset<T, tb_trip_invoice$tb_tripArgs<ExtArgs>>
        ): Prisma__tb_tripClient<
            $Result.GetResult<Prisma.$tb_tripPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions> | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
        ): $Utils.JsPromise<TResult1 | TResult2>
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
        ): $Utils.JsPromise<T | TResult>
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
    }

    /**
     * Fields of the tb_trip_invoice model
     */
    interface tb_trip_invoiceFieldRefs {
        readonly trip_invoice_id: FieldRef<'tb_trip_invoice', 'BigInt'>
        readonly invoice_no: FieldRef<'tb_trip_invoice', 'String'>
        readonly quantity: FieldRef<'tb_trip_invoice', 'BigInt'>
        readonly total_amount: FieldRef<'tb_trip_invoice', 'Decimal'>
        readonly pay_type_id: FieldRef<'tb_trip_invoice', 'BigInt'>
        readonly trip_id: FieldRef<'tb_trip_invoice', 'BigInt'>
    }

    // Custom InputTypes
    /**
     * tb_trip_invoice findUnique
     */
    export type tb_trip_invoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_trip_invoice
         */
        select?: tb_trip_invoiceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip_invoice
         */
        omit?: tb_trip_invoiceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_trip_invoiceInclude<ExtArgs> | null
        /**
         * Filter, which tb_trip_invoice to fetch.
         */
        where: tb_trip_invoiceWhereUniqueInput
    }

    /**
     * tb_trip_invoice findUniqueOrThrow
     */
    export type tb_trip_invoiceFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the tb_trip_invoice
         */
        select?: tb_trip_invoiceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip_invoice
         */
        omit?: tb_trip_invoiceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_trip_invoiceInclude<ExtArgs> | null
        /**
         * Filter, which tb_trip_invoice to fetch.
         */
        where: tb_trip_invoiceWhereUniqueInput
    }

    /**
     * tb_trip_invoice findFirst
     */
    export type tb_trip_invoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_trip_invoice
         */
        select?: tb_trip_invoiceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip_invoice
         */
        omit?: tb_trip_invoiceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_trip_invoiceInclude<ExtArgs> | null
        /**
         * Filter, which tb_trip_invoice to fetch.
         */
        where?: tb_trip_invoiceWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of tb_trip_invoices to fetch.
         */
        orderBy?: tb_trip_invoiceOrderByWithRelationInput | tb_trip_invoiceOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for tb_trip_invoices.
         */
        cursor?: tb_trip_invoiceWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` tb_trip_invoices from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` tb_trip_invoices.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of tb_trip_invoices.
         */
        distinct?: Tb_trip_invoiceScalarFieldEnum | Tb_trip_invoiceScalarFieldEnum[]
    }

    /**
     * tb_trip_invoice findFirstOrThrow
     */
    export type tb_trip_invoiceFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the tb_trip_invoice
         */
        select?: tb_trip_invoiceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip_invoice
         */
        omit?: tb_trip_invoiceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_trip_invoiceInclude<ExtArgs> | null
        /**
         * Filter, which tb_trip_invoice to fetch.
         */
        where?: tb_trip_invoiceWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of tb_trip_invoices to fetch.
         */
        orderBy?: tb_trip_invoiceOrderByWithRelationInput | tb_trip_invoiceOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for tb_trip_invoices.
         */
        cursor?: tb_trip_invoiceWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` tb_trip_invoices from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` tb_trip_invoices.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of tb_trip_invoices.
         */
        distinct?: Tb_trip_invoiceScalarFieldEnum | Tb_trip_invoiceScalarFieldEnum[]
    }

    /**
     * tb_trip_invoice findMany
     */
    export type tb_trip_invoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_trip_invoice
         */
        select?: tb_trip_invoiceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip_invoice
         */
        omit?: tb_trip_invoiceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_trip_invoiceInclude<ExtArgs> | null
        /**
         * Filter, which tb_trip_invoices to fetch.
         */
        where?: tb_trip_invoiceWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of tb_trip_invoices to fetch.
         */
        orderBy?: tb_trip_invoiceOrderByWithRelationInput | tb_trip_invoiceOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing tb_trip_invoices.
         */
        cursor?: tb_trip_invoiceWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` tb_trip_invoices from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` tb_trip_invoices.
         */
        skip?: number
        distinct?: Tb_trip_invoiceScalarFieldEnum | Tb_trip_invoiceScalarFieldEnum[]
    }

    /**
     * tb_trip_invoice create
     */
    export type tb_trip_invoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_trip_invoice
         */
        select?: tb_trip_invoiceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip_invoice
         */
        omit?: tb_trip_invoiceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_trip_invoiceInclude<ExtArgs> | null
        /**
         * The data needed to create a tb_trip_invoice.
         */
        data?: XOR<tb_trip_invoiceCreateInput, tb_trip_invoiceUncheckedCreateInput>
    }

    /**
     * tb_trip_invoice createMany
     */
    export type tb_trip_invoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many tb_trip_invoices.
         */
        data: tb_trip_invoiceCreateManyInput | tb_trip_invoiceCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * tb_trip_invoice createManyAndReturn
     */
    export type tb_trip_invoiceCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the tb_trip_invoice
         */
        select?: tb_trip_invoiceSelectCreateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip_invoice
         */
        omit?: tb_trip_invoiceOmit<ExtArgs> | null
        /**
         * The data used to create many tb_trip_invoices.
         */
        data: tb_trip_invoiceCreateManyInput | tb_trip_invoiceCreateManyInput[]
        skipDuplicates?: boolean
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_trip_invoiceIncludeCreateManyAndReturn<ExtArgs> | null
    }

    /**
     * tb_trip_invoice update
     */
    export type tb_trip_invoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_trip_invoice
         */
        select?: tb_trip_invoiceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip_invoice
         */
        omit?: tb_trip_invoiceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_trip_invoiceInclude<ExtArgs> | null
        /**
         * The data needed to update a tb_trip_invoice.
         */
        data: XOR<tb_trip_invoiceUpdateInput, tb_trip_invoiceUncheckedUpdateInput>
        /**
         * Choose, which tb_trip_invoice to update.
         */
        where: tb_trip_invoiceWhereUniqueInput
    }

    /**
     * tb_trip_invoice updateMany
     */
    export type tb_trip_invoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update tb_trip_invoices.
         */
        data: XOR<tb_trip_invoiceUpdateManyMutationInput, tb_trip_invoiceUncheckedUpdateManyInput>
        /**
         * Filter which tb_trip_invoices to update
         */
        where?: tb_trip_invoiceWhereInput
        /**
         * Limit how many tb_trip_invoices to update.
         */
        limit?: number
    }

    /**
     * tb_trip_invoice updateManyAndReturn
     */
    export type tb_trip_invoiceUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the tb_trip_invoice
         */
        select?: tb_trip_invoiceSelectUpdateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip_invoice
         */
        omit?: tb_trip_invoiceOmit<ExtArgs> | null
        /**
         * The data used to update tb_trip_invoices.
         */
        data: XOR<tb_trip_invoiceUpdateManyMutationInput, tb_trip_invoiceUncheckedUpdateManyInput>
        /**
         * Filter which tb_trip_invoices to update
         */
        where?: tb_trip_invoiceWhereInput
        /**
         * Limit how many tb_trip_invoices to update.
         */
        limit?: number
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_trip_invoiceIncludeUpdateManyAndReturn<ExtArgs> | null
    }

    /**
     * tb_trip_invoice upsert
     */
    export type tb_trip_invoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_trip_invoice
         */
        select?: tb_trip_invoiceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip_invoice
         */
        omit?: tb_trip_invoiceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_trip_invoiceInclude<ExtArgs> | null
        /**
         * The filter to search for the tb_trip_invoice to update in case it exists.
         */
        where: tb_trip_invoiceWhereUniqueInput
        /**
         * In case the tb_trip_invoice found by the `where` argument doesn't exist, create a new tb_trip_invoice with this data.
         */
        create: XOR<tb_trip_invoiceCreateInput, tb_trip_invoiceUncheckedCreateInput>
        /**
         * In case the tb_trip_invoice was found with the provided `where` argument, update it with this data.
         */
        update: XOR<tb_trip_invoiceUpdateInput, tb_trip_invoiceUncheckedUpdateInput>
    }

    /**
     * tb_trip_invoice delete
     */
    export type tb_trip_invoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_trip_invoice
         */
        select?: tb_trip_invoiceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip_invoice
         */
        omit?: tb_trip_invoiceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_trip_invoiceInclude<ExtArgs> | null
        /**
         * Filter which tb_trip_invoice to delete.
         */
        where: tb_trip_invoiceWhereUniqueInput
    }

    /**
     * tb_trip_invoice deleteMany
     */
    export type tb_trip_invoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which tb_trip_invoices to delete
         */
        where?: tb_trip_invoiceWhereInput
        /**
         * Limit how many tb_trip_invoices to delete.
         */
        limit?: number
    }

    /**
     * tb_trip_invoice.tb_payment_history
     */
    export type tb_trip_invoice$tb_payment_historyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the tb_payment_history
         */
        select?: tb_payment_historySelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_history
         */
        omit?: tb_payment_historyOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_payment_historyInclude<ExtArgs> | null
        where?: tb_payment_historyWhereInput
        orderBy?: tb_payment_historyOrderByWithRelationInput | tb_payment_historyOrderByWithRelationInput[]
        cursor?: tb_payment_historyWhereUniqueInput
        take?: number
        skip?: number
        distinct?: Tb_payment_historyScalarFieldEnum | Tb_payment_historyScalarFieldEnum[]
    }

    /**
     * tb_trip_invoice.tb_payment_type
     */
    export type tb_trip_invoice$tb_payment_typeArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the tb_payment_type
         */
        select?: tb_payment_typeSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_payment_type
         */
        omit?: tb_payment_typeOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_payment_typeInclude<ExtArgs> | null
        where?: tb_payment_typeWhereInput
    }

    /**
     * tb_trip_invoice.tb_trip
     */
    export type tb_trip_invoice$tb_tripArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_trip
         */
        select?: tb_tripSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip
         */
        omit?: tb_tripOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_tripInclude<ExtArgs> | null
        where?: tb_tripWhereInput
    }

    /**
     * tb_trip_invoice without action
     */
    export type tb_trip_invoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_trip_invoice
         */
        select?: tb_trip_invoiceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip_invoice
         */
        omit?: tb_trip_invoiceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_trip_invoiceInclude<ExtArgs> | null
    }

    /**
     * Model tb_user
     */

    export type AggregateTb_user = {
        _count: Tb_userCountAggregateOutputType | null
        _avg: Tb_userAvgAggregateOutputType | null
        _sum: Tb_userSumAggregateOutputType | null
        _min: Tb_userMinAggregateOutputType | null
        _max: Tb_userMaxAggregateOutputType | null
    }

    export type Tb_userAvgAggregateOutputType = {
        role_id: number | null
    }

    export type Tb_userSumAggregateOutputType = {
        role_id: number | null
    }

    export type Tb_userMinAggregateOutputType = {
        user_id: string | null
        name: string | null
        email: string | null
        password: string | null
        role_id: number | null
        created_at: Date | null
        created_by: string | null
        updated_by: string | null
        is_active: boolean | null
    }

    export type Tb_userMaxAggregateOutputType = {
        user_id: string | null
        name: string | null
        email: string | null
        password: string | null
        role_id: number | null
        created_at: Date | null
        created_by: string | null
        updated_by: string | null
        is_active: boolean | null
    }

    export type Tb_userCountAggregateOutputType = {
        user_id: number
        name: number
        email: number
        password: number
        role_id: number
        created_at: number
        created_by: number
        updated_by: number
        is_active: number
        _all: number
    }

    export type Tb_userAvgAggregateInputType = {
        role_id?: true
    }

    export type Tb_userSumAggregateInputType = {
        role_id?: true
    }

    export type Tb_userMinAggregateInputType = {
        user_id?: true
        name?: true
        email?: true
        password?: true
        role_id?: true
        created_at?: true
        created_by?: true
        updated_by?: true
        is_active?: true
    }

    export type Tb_userMaxAggregateInputType = {
        user_id?: true
        name?: true
        email?: true
        password?: true
        role_id?: true
        created_at?: true
        created_by?: true
        updated_by?: true
        is_active?: true
    }

    export type Tb_userCountAggregateInputType = {
        user_id?: true
        name?: true
        email?: true
        password?: true
        role_id?: true
        created_at?: true
        created_by?: true
        updated_by?: true
        is_active?: true
        _all?: true
    }

    export type Tb_userAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which tb_user to aggregate.
         */
        where?: tb_userWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of tb_users to fetch.
         */
        orderBy?: tb_userOrderByWithRelationInput | tb_userOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: tb_userWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` tb_users from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` tb_users.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned tb_users
         **/
        _count?: true | Tb_userCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to average
         **/
        _avg?: Tb_userAvgAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to sum
         **/
        _sum?: Tb_userSumAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: Tb_userMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: Tb_userMaxAggregateInputType
    }

    export type GetTb_userAggregateType<T extends Tb_userAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_user]: P extends '_count' | 'count'
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateTb_user[P]>
            : GetScalarType<T[P], AggregateTb_user[P]>
    }

    export type tb_userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: tb_userWhereInput
        orderBy?: tb_userOrderByWithAggregationInput | tb_userOrderByWithAggregationInput[]
        by: Tb_userScalarFieldEnum[] | Tb_userScalarFieldEnum
        having?: tb_userScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: Tb_userCountAggregateInputType | true
        _avg?: Tb_userAvgAggregateInputType
        _sum?: Tb_userSumAggregateInputType
        _min?: Tb_userMinAggregateInputType
        _max?: Tb_userMaxAggregateInputType
    }

    export type Tb_userGroupByOutputType = {
        user_id: string
        name: string
        email: string
        password: string
        role_id: number
        created_at: Date | null
        created_by: string | null
        updated_by: string | null
        is_active: boolean | null
        _count: Tb_userCountAggregateOutputType | null
        _avg: Tb_userAvgAggregateOutputType | null
        _sum: Tb_userSumAggregateOutputType | null
        _min: Tb_userMinAggregateOutputType | null
        _max: Tb_userMaxAggregateOutputType | null
    }

    type GetTb_userGroupByPayload<T extends tb_userGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<Tb_userGroupByOutputType, T['by']> & {
                [P in keyof T & keyof Tb_userGroupByOutputType]: P extends '_count'
                    ? T[P] extends boolean
                        ? number
                        : GetScalarType<T[P], Tb_userGroupByOutputType[P]>
                    : GetScalarType<T[P], Tb_userGroupByOutputType[P]>
            }
        >
    >

    export type tb_userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        $Extensions.GetSelect<
            {
                user_id?: boolean
                name?: boolean
                email?: boolean
                password?: boolean
                role_id?: boolean
                created_at?: boolean
                created_by?: boolean
                updated_by?: boolean
                is_active?: boolean
                tb_trip?: boolean | tb_user$tb_tripArgs<ExtArgs>
                tb_role?: boolean | tb_roleDefaultArgs<ExtArgs>
                _count?: boolean | Tb_userCountOutputTypeDefaultArgs<ExtArgs>
            },
            ExtArgs['result']['tb_user']
        >

    export type tb_userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        $Extensions.GetSelect<
            {
                user_id?: boolean
                name?: boolean
                email?: boolean
                password?: boolean
                role_id?: boolean
                created_at?: boolean
                created_by?: boolean
                updated_by?: boolean
                is_active?: boolean
                tb_role?: boolean | tb_roleDefaultArgs<ExtArgs>
            },
            ExtArgs['result']['tb_user']
        >

    export type tb_userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        $Extensions.GetSelect<
            {
                user_id?: boolean
                name?: boolean
                email?: boolean
                password?: boolean
                role_id?: boolean
                created_at?: boolean
                created_by?: boolean
                updated_by?: boolean
                is_active?: boolean
                tb_role?: boolean | tb_roleDefaultArgs<ExtArgs>
            },
            ExtArgs['result']['tb_user']
        >

    export type tb_userSelectScalar = {
        user_id?: boolean
        name?: boolean
        email?: boolean
        password?: boolean
        role_id?: boolean
        created_at?: boolean
        created_by?: boolean
        updated_by?: boolean
        is_active?: boolean
    }

    export type tb_userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<
        | 'user_id'
        | 'name'
        | 'email'
        | 'password'
        | 'role_id'
        | 'created_at'
        | 'created_by'
        | 'updated_by'
        | 'is_active',
        ExtArgs['result']['tb_user']
    >
    export type tb_userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        tb_trip?: boolean | tb_user$tb_tripArgs<ExtArgs>
        tb_role?: boolean | tb_roleDefaultArgs<ExtArgs>
        _count?: boolean | Tb_userCountOutputTypeDefaultArgs<ExtArgs>
    }
    export type tb_userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        {
            tb_role?: boolean | tb_roleDefaultArgs<ExtArgs>
        }
    export type tb_userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        {
            tb_role?: boolean | tb_roleDefaultArgs<ExtArgs>
        }

    export type $tb_userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: 'tb_user'
        objects: {
            tb_trip: Prisma.$tb_tripPayload<ExtArgs>[]
            tb_role: Prisma.$tb_rolePayload<ExtArgs>
        }
        scalars: $Extensions.GetPayloadResult<
            {
                user_id: string
                name: string
                email: string
                password: string
                role_id: number
                created_at: Date | null
                created_by: string | null
                updated_by: string | null
                is_active: boolean | null
            },
            ExtArgs['result']['tb_user']
        >
        composites: {}
    }

    type tb_userGetPayload<S extends boolean | null | undefined | tb_userDefaultArgs> = $Result.GetResult<
        Prisma.$tb_userPayload,
        S
    >

    type tb_userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
        tb_userFindManyArgs,
        'select' | 'include' | 'distinct' | 'omit'
    > & {
        select?: Tb_userCountAggregateInputType | true
    }

    export interface tb_userDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_user']; meta: { name: 'tb_user' } }
        /**
         * Find zero or one Tb_user that matches the filter.
         * @param {tb_userFindUniqueArgs} args - Arguments to find a Tb_user
         * @example
         * // Get one Tb_user
         * const tb_user = await prisma.tb_user.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends tb_userFindUniqueArgs>(
            args: SelectSubset<T, tb_userFindUniqueArgs<ExtArgs>>
        ): Prisma__tb_userClient<
            $Result.GetResult<Prisma.$tb_userPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find one Tb_user that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {tb_userFindUniqueOrThrowArgs} args - Arguments to find a Tb_user
         * @example
         * // Get one Tb_user
         * const tb_user = await prisma.tb_user.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends tb_userFindUniqueOrThrowArgs>(
            args: SelectSubset<T, tb_userFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__tb_userClient<
            $Result.GetResult<Prisma.$tb_userPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first Tb_user that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_userFindFirstArgs} args - Arguments to find a Tb_user
         * @example
         * // Get one Tb_user
         * const tb_user = await prisma.tb_user.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends tb_userFindFirstArgs>(
            args?: SelectSubset<T, tb_userFindFirstArgs<ExtArgs>>
        ): Prisma__tb_userClient<
            $Result.GetResult<Prisma.$tb_userPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first Tb_user that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_userFindFirstOrThrowArgs} args - Arguments to find a Tb_user
         * @example
         * // Get one Tb_user
         * const tb_user = await prisma.tb_user.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends tb_userFindFirstOrThrowArgs>(
            args?: SelectSubset<T, tb_userFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__tb_userClient<
            $Result.GetResult<Prisma.$tb_userPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find zero or more Tb_users that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_userFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Tb_users
         * const tb_users = await prisma.tb_user.findMany()
         *
         * // Get first 10 Tb_users
         * const tb_users = await prisma.tb_user.findMany({ take: 10 })
         *
         * // Only select the `user_id`
         * const tb_userWithUser_idOnly = await prisma.tb_user.findMany({ select: { user_id: true } })
         *
         */
        findMany<T extends tb_userFindManyArgs>(
            args?: SelectSubset<T, tb_userFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_userPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>>

        /**
         * Create a Tb_user.
         * @param {tb_userCreateArgs} args - Arguments to create a Tb_user.
         * @example
         * // Create one Tb_user
         * const Tb_user = await prisma.tb_user.create({
         *   data: {
         *     // ... data to create a Tb_user
         *   }
         * })
         *
         */
        create<T extends tb_userCreateArgs>(
            args: SelectSubset<T, tb_userCreateArgs<ExtArgs>>
        ): Prisma__tb_userClient<
            $Result.GetResult<Prisma.$tb_userPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Create many Tb_users.
         * @param {tb_userCreateManyArgs} args - Arguments to create many Tb_users.
         * @example
         * // Create many Tb_users
         * const tb_user = await prisma.tb_user.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends tb_userCreateManyArgs>(
            args?: SelectSubset<T, tb_userCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Create many Tb_users and returns the data saved in the database.
         * @param {tb_userCreateManyAndReturnArgs} args - Arguments to create many Tb_users.
         * @example
         * // Create many Tb_users
         * const tb_user = await prisma.tb_user.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Tb_users and only return the `user_id`
         * const tb_userWithUser_idOnly = await prisma.tb_user.createManyAndReturn({
         *   select: { user_id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends tb_userCreateManyAndReturnArgs>(
            args?: SelectSubset<T, tb_userCreateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$tb_userPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
        >

        /**
         * Delete a Tb_user.
         * @param {tb_userDeleteArgs} args - Arguments to delete one Tb_user.
         * @example
         * // Delete one Tb_user
         * const Tb_user = await prisma.tb_user.delete({
         *   where: {
         *     // ... filter to delete one Tb_user
         *   }
         * })
         *
         */
        delete<T extends tb_userDeleteArgs>(
            args: SelectSubset<T, tb_userDeleteArgs<ExtArgs>>
        ): Prisma__tb_userClient<
            $Result.GetResult<Prisma.$tb_userPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Update one Tb_user.
         * @param {tb_userUpdateArgs} args - Arguments to update one Tb_user.
         * @example
         * // Update one Tb_user
         * const tb_user = await prisma.tb_user.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends tb_userUpdateArgs>(
            args: SelectSubset<T, tb_userUpdateArgs<ExtArgs>>
        ): Prisma__tb_userClient<
            $Result.GetResult<Prisma.$tb_userPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Delete zero or more Tb_users.
         * @param {tb_userDeleteManyArgs} args - Arguments to filter Tb_users to delete.
         * @example
         * // Delete a few Tb_users
         * const { count } = await prisma.tb_user.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends tb_userDeleteManyArgs>(
            args?: SelectSubset<T, tb_userDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Tb_users.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_userUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Tb_users
         * const tb_user = await prisma.tb_user.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends tb_userUpdateManyArgs>(
            args: SelectSubset<T, tb_userUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Tb_users and returns the data updated in the database.
         * @param {tb_userUpdateManyAndReturnArgs} args - Arguments to update many Tb_users.
         * @example
         * // Update many Tb_users
         * const tb_user = await prisma.tb_user.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more Tb_users and only return the `user_id`
         * const tb_userWithUser_idOnly = await prisma.tb_user.updateManyAndReturn({
         *   select: { user_id: true },
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
        updateManyAndReturn<T extends tb_userUpdateManyAndReturnArgs>(
            args: SelectSubset<T, tb_userUpdateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$tb_userPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
        >

        /**
         * Create or update one Tb_user.
         * @param {tb_userUpsertArgs} args - Arguments to update or create a Tb_user.
         * @example
         * // Update or create a Tb_user
         * const tb_user = await prisma.tb_user.upsert({
         *   create: {
         *     // ... data to create a Tb_user
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Tb_user we want to update
         *   }
         * })
         */
        upsert<T extends tb_userUpsertArgs>(
            args: SelectSubset<T, tb_userUpsertArgs<ExtArgs>>
        ): Prisma__tb_userClient<
            $Result.GetResult<Prisma.$tb_userPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Count the number of Tb_users.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_userCountArgs} args - Arguments to filter Tb_users to count.
         * @example
         * // Count the number of Tb_users
         * const count = await prisma.tb_user.count({
         *   where: {
         *     // ... the filter for the Tb_users we want to count
         *   }
         * })
         **/
        count<T extends tb_userCountArgs>(
            args?: Subset<T, tb_userCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
                ? T['select'] extends true
                    ? number
                    : GetScalarType<T['select'], Tb_userCountAggregateOutputType>
                : number
        >

        /**
         * Allows you to perform aggregations operations on a Tb_user.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {Tb_userAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends Tb_userAggregateArgs>(
            args: Subset<T, Tb_userAggregateArgs>
        ): Prisma.PrismaPromise<GetTb_userAggregateType<T>>

        /**
         * Group by Tb_user.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {tb_userGroupByArgs} args - Group by arguments.
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
            T extends tb_userGroupByArgs,
            HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: tb_userGroupByArgs['orderBy'] }
                : { orderBy?: tb_userGroupByArgs['orderBy'] },
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
                              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
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
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, tb_userGroupByArgs, OrderByArg> & InputErrors
        ): {} extends InputErrors ? GetTb_userGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
        /**
         * Fields of the tb_user model
         */
        readonly fields: tb_userFieldRefs
    }

    /**
     * The delegate class that acts as a "Promise-like" for tb_user.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__tb_userClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: 'PrismaPromise'
        tb_trip<T extends tb_user$tb_tripArgs<ExtArgs> = {}>(
            args?: Subset<T, tb_user$tb_tripArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$tb_tripPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
        >
        tb_role<T extends tb_roleDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, tb_roleDefaultArgs<ExtArgs>>
        ): Prisma__tb_roleClient<
            $Result.GetResult<Prisma.$tb_rolePayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions> | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
        ): $Utils.JsPromise<TResult1 | TResult2>
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
        ): $Utils.JsPromise<T | TResult>
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
    }

    /**
     * Fields of the tb_user model
     */
    interface tb_userFieldRefs {
        readonly user_id: FieldRef<'tb_user', 'String'>
        readonly name: FieldRef<'tb_user', 'String'>
        readonly email: FieldRef<'tb_user', 'String'>
        readonly password: FieldRef<'tb_user', 'String'>
        readonly role_id: FieldRef<'tb_user', 'Int'>
        readonly created_at: FieldRef<'tb_user', 'DateTime'>
        readonly created_by: FieldRef<'tb_user', 'String'>
        readonly updated_by: FieldRef<'tb_user', 'String'>
        readonly is_active: FieldRef<'tb_user', 'Boolean'>
    }

    // Custom InputTypes
    /**
     * tb_user findUnique
     */
    export type tb_userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_user
         */
        select?: tb_userSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_user
         */
        omit?: tb_userOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_userInclude<ExtArgs> | null
        /**
         * Filter, which tb_user to fetch.
         */
        where: tb_userWhereUniqueInput
    }

    /**
     * tb_user findUniqueOrThrow
     */
    export type tb_userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_user
         */
        select?: tb_userSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_user
         */
        omit?: tb_userOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_userInclude<ExtArgs> | null
        /**
         * Filter, which tb_user to fetch.
         */
        where: tb_userWhereUniqueInput
    }

    /**
     * tb_user findFirst
     */
    export type tb_userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_user
         */
        select?: tb_userSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_user
         */
        omit?: tb_userOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_userInclude<ExtArgs> | null
        /**
         * Filter, which tb_user to fetch.
         */
        where?: tb_userWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of tb_users to fetch.
         */
        orderBy?: tb_userOrderByWithRelationInput | tb_userOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for tb_users.
         */
        cursor?: tb_userWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` tb_users from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` tb_users.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of tb_users.
         */
        distinct?: Tb_userScalarFieldEnum | Tb_userScalarFieldEnum[]
    }

    /**
     * tb_user findFirstOrThrow
     */
    export type tb_userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_user
         */
        select?: tb_userSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_user
         */
        omit?: tb_userOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_userInclude<ExtArgs> | null
        /**
         * Filter, which tb_user to fetch.
         */
        where?: tb_userWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of tb_users to fetch.
         */
        orderBy?: tb_userOrderByWithRelationInput | tb_userOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for tb_users.
         */
        cursor?: tb_userWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` tb_users from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` tb_users.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of tb_users.
         */
        distinct?: Tb_userScalarFieldEnum | Tb_userScalarFieldEnum[]
    }

    /**
     * tb_user findMany
     */
    export type tb_userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_user
         */
        select?: tb_userSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_user
         */
        omit?: tb_userOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_userInclude<ExtArgs> | null
        /**
         * Filter, which tb_users to fetch.
         */
        where?: tb_userWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of tb_users to fetch.
         */
        orderBy?: tb_userOrderByWithRelationInput | tb_userOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing tb_users.
         */
        cursor?: tb_userWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` tb_users from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` tb_users.
         */
        skip?: number
        distinct?: Tb_userScalarFieldEnum | Tb_userScalarFieldEnum[]
    }

    /**
     * tb_user create
     */
    export type tb_userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_user
         */
        select?: tb_userSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_user
         */
        omit?: tb_userOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_userInclude<ExtArgs> | null
        /**
         * The data needed to create a tb_user.
         */
        data: XOR<tb_userCreateInput, tb_userUncheckedCreateInput>
    }

    /**
     * tb_user createMany
     */
    export type tb_userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many tb_users.
         */
        data: tb_userCreateManyInput | tb_userCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * tb_user createManyAndReturn
     */
    export type tb_userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_user
         */
        select?: tb_userSelectCreateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the tb_user
         */
        omit?: tb_userOmit<ExtArgs> | null
        /**
         * The data used to create many tb_users.
         */
        data: tb_userCreateManyInput | tb_userCreateManyInput[]
        skipDuplicates?: boolean
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_userIncludeCreateManyAndReturn<ExtArgs> | null
    }

    /**
     * tb_user update
     */
    export type tb_userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_user
         */
        select?: tb_userSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_user
         */
        omit?: tb_userOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_userInclude<ExtArgs> | null
        /**
         * The data needed to update a tb_user.
         */
        data: XOR<tb_userUpdateInput, tb_userUncheckedUpdateInput>
        /**
         * Choose, which tb_user to update.
         */
        where: tb_userWhereUniqueInput
    }

    /**
     * tb_user updateMany
     */
    export type tb_userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update tb_users.
         */
        data: XOR<tb_userUpdateManyMutationInput, tb_userUncheckedUpdateManyInput>
        /**
         * Filter which tb_users to update
         */
        where?: tb_userWhereInput
        /**
         * Limit how many tb_users to update.
         */
        limit?: number
    }

    /**
     * tb_user updateManyAndReturn
     */
    export type tb_userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_user
         */
        select?: tb_userSelectUpdateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the tb_user
         */
        omit?: tb_userOmit<ExtArgs> | null
        /**
         * The data used to update tb_users.
         */
        data: XOR<tb_userUpdateManyMutationInput, tb_userUncheckedUpdateManyInput>
        /**
         * Filter which tb_users to update
         */
        where?: tb_userWhereInput
        /**
         * Limit how many tb_users to update.
         */
        limit?: number
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_userIncludeUpdateManyAndReturn<ExtArgs> | null
    }

    /**
     * tb_user upsert
     */
    export type tb_userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_user
         */
        select?: tb_userSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_user
         */
        omit?: tb_userOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_userInclude<ExtArgs> | null
        /**
         * The filter to search for the tb_user to update in case it exists.
         */
        where: tb_userWhereUniqueInput
        /**
         * In case the tb_user found by the `where` argument doesn't exist, create a new tb_user with this data.
         */
        create: XOR<tb_userCreateInput, tb_userUncheckedCreateInput>
        /**
         * In case the tb_user was found with the provided `where` argument, update it with this data.
         */
        update: XOR<tb_userUpdateInput, tb_userUncheckedUpdateInput>
    }

    /**
     * tb_user delete
     */
    export type tb_userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_user
         */
        select?: tb_userSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_user
         */
        omit?: tb_userOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_userInclude<ExtArgs> | null
        /**
         * Filter which tb_user to delete.
         */
        where: tb_userWhereUniqueInput
    }

    /**
     * tb_user deleteMany
     */
    export type tb_userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which tb_users to delete
         */
        where?: tb_userWhereInput
        /**
         * Limit how many tb_users to delete.
         */
        limit?: number
    }

    /**
     * tb_user.tb_trip
     */
    export type tb_user$tb_tripArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_trip
         */
        select?: tb_tripSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_trip
         */
        omit?: tb_tripOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_tripInclude<ExtArgs> | null
        where?: tb_tripWhereInput
        orderBy?: tb_tripOrderByWithRelationInput | tb_tripOrderByWithRelationInput[]
        cursor?: tb_tripWhereUniqueInput
        take?: number
        skip?: number
        distinct?: Tb_tripScalarFieldEnum | Tb_tripScalarFieldEnum[]
    }

    /**
     * tb_user without action
     */
    export type tb_userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the tb_user
         */
        select?: tb_userSelect<ExtArgs> | null
        /**
         * Omit specific fields from the tb_user
         */
        omit?: tb_userOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: tb_userInclude<ExtArgs> | null
    }

    /**
     * Enums
     */

    export const TransactionIsolationLevel: {
        ReadUncommitted: 'ReadUncommitted'
        ReadCommitted: 'ReadCommitted'
        RepeatableRead: 'RepeatableRead'
        Serializable: 'Serializable'
    }

    export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]

    export const Tb_destinationScalarFieldEnum: {
        destination_id: 'destination_id'
        name: 'name'
        destinations: 'destinations'
        quota: 'quota'
        is_open: 'is_open'
        price: 'price'
    }

    export type Tb_destinationScalarFieldEnum =
        (typeof Tb_destinationScalarFieldEnum)[keyof typeof Tb_destinationScalarFieldEnum]

    export const Tb_payment_statusScalarFieldEnum: {
        pay_status_id: 'pay_status_id'
        Name: 'Name'
    }

    export type Tb_payment_statusScalarFieldEnum =
        (typeof Tb_payment_statusScalarFieldEnum)[keyof typeof Tb_payment_statusScalarFieldEnum]

    export const Tb_payment_typeScalarFieldEnum: {
        pay_type_id: 'pay_type_id'
        name: 'name'
    }

    export type Tb_payment_typeScalarFieldEnum =
        (typeof Tb_payment_typeScalarFieldEnum)[keyof typeof Tb_payment_typeScalarFieldEnum]

    export const Tb_roleScalarFieldEnum: {
        role_id: 'role_id'
        name: 'name'
    }

    export type Tb_roleScalarFieldEnum = (typeof Tb_roleScalarFieldEnum)[keyof typeof Tb_roleScalarFieldEnum]

    export const Tb_trip_statusScalarFieldEnum: {
        trip_status_id: 'trip_status_id'
        name: 'name'
    }

    export type Tb_trip_statusScalarFieldEnum =
        (typeof Tb_trip_statusScalarFieldEnum)[keyof typeof Tb_trip_statusScalarFieldEnum]

    export const Tb_payment_historyScalarFieldEnum: {
        pay_hist_id: 'pay_hist_id'
        pay_status_id: 'pay_status_id'
        created_at: 'created_at'
        trip_invoice_id: 'trip_invoice_id'
    }

    export type Tb_payment_historyScalarFieldEnum =
        (typeof Tb_payment_historyScalarFieldEnum)[keyof typeof Tb_payment_historyScalarFieldEnum]

    export const Tb_tripScalarFieldEnum: {
        trip_id: 'trip_id'
        user_id: 'user_id'
        destination_id: 'destination_id'
        start_time: 'start_time'
        end_time: 'end_time'
        created_at: 'created_at'
        updated_at: 'updated_at'
        trip_status: 'trip_status'
        schedule_at: 'schedule_at'
        created_by: 'created_by'
        updated_by: 'updated_by'
    }

    export type Tb_tripScalarFieldEnum = (typeof Tb_tripScalarFieldEnum)[keyof typeof Tb_tripScalarFieldEnum]

    export const Tb_trip_invoiceScalarFieldEnum: {
        trip_invoice_id: 'trip_invoice_id'
        invoice_no: 'invoice_no'
        quantity: 'quantity'
        total_amount: 'total_amount'
        pay_type_id: 'pay_type_id'
        trip_id: 'trip_id'
    }

    export type Tb_trip_invoiceScalarFieldEnum =
        (typeof Tb_trip_invoiceScalarFieldEnum)[keyof typeof Tb_trip_invoiceScalarFieldEnum]

    export const Tb_userScalarFieldEnum: {
        user_id: 'user_id'
        name: 'name'
        email: 'email'
        password: 'password'
        role_id: 'role_id'
        created_at: 'created_at'
        created_by: 'created_by'
        updated_by: 'updated_by'
        is_active: 'is_active'
    }

    export type Tb_userScalarFieldEnum = (typeof Tb_userScalarFieldEnum)[keyof typeof Tb_userScalarFieldEnum]

    export const SortOrder: {
        asc: 'asc'
        desc: 'desc'
    }

    export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]

    export const QueryMode: {
        default: 'default'
        insensitive: 'insensitive'
    }

    export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]

    export const NullsOrder: {
        first: 'first'
        last: 'last'
    }

    export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]

    /**
     * Field references
     */

    /**
     * Reference to a field of type 'BigInt'
     */
    export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>

    /**
     * Reference to a field of type 'BigInt[]'
     */
    export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>

    /**
     * Reference to a field of type 'String'
     */
    export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>

    /**
     * Reference to a field of type 'String[]'
     */
    export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>

    /**
     * Reference to a field of type 'Boolean'
     */
    export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>

    /**
     * Reference to a field of type 'Decimal'
     */
    export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>

    /**
     * Reference to a field of type 'Decimal[]'
     */
    export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>

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
     * Reference to a field of type 'Float'
     */
    export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>

    /**
     * Reference to a field of type 'Float[]'
     */
    export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>

    /**
     * Deep Input Types
     */

    export type tb_destinationWhereInput = {
        AND?: tb_destinationWhereInput | tb_destinationWhereInput[]
        OR?: tb_destinationWhereInput[]
        NOT?: tb_destinationWhereInput | tb_destinationWhereInput[]
        destination_id?: BigIntFilter<'tb_destination'> | bigint | number
        name?: StringNullableFilter<'tb_destination'> | string | null
        destinations?: StringNullableListFilter<'tb_destination'>
        quota?: BigIntNullableFilter<'tb_destination'> | bigint | number | null
        is_open?: BoolNullableFilter<'tb_destination'> | boolean | null
        price?: DecimalNullableFilter<'tb_destination'> | Decimal | DecimalJsLike | number | string | null
        tb_trip?: Tb_tripListRelationFilter
    }

    export type tb_destinationOrderByWithRelationInput = {
        destination_id?: SortOrder
        name?: SortOrderInput | SortOrder
        destinations?: SortOrder
        quota?: SortOrderInput | SortOrder
        is_open?: SortOrderInput | SortOrder
        price?: SortOrderInput | SortOrder
        tb_trip?: tb_tripOrderByRelationAggregateInput
    }

    export type tb_destinationWhereUniqueInput = Prisma.AtLeast<
        {
            destination_id?: bigint | number
            AND?: tb_destinationWhereInput | tb_destinationWhereInput[]
            OR?: tb_destinationWhereInput[]
            NOT?: tb_destinationWhereInput | tb_destinationWhereInput[]
            name?: StringNullableFilter<'tb_destination'> | string | null
            destinations?: StringNullableListFilter<'tb_destination'>
            quota?: BigIntNullableFilter<'tb_destination'> | bigint | number | null
            is_open?: BoolNullableFilter<'tb_destination'> | boolean | null
            price?: DecimalNullableFilter<'tb_destination'> | Decimal | DecimalJsLike | number | string | null
            tb_trip?: Tb_tripListRelationFilter
        },
        'destination_id'
    >

    export type tb_destinationOrderByWithAggregationInput = {
        destination_id?: SortOrder
        name?: SortOrderInput | SortOrder
        destinations?: SortOrder
        quota?: SortOrderInput | SortOrder
        is_open?: SortOrderInput | SortOrder
        price?: SortOrderInput | SortOrder
        _count?: tb_destinationCountOrderByAggregateInput
        _avg?: tb_destinationAvgOrderByAggregateInput
        _max?: tb_destinationMaxOrderByAggregateInput
        _min?: tb_destinationMinOrderByAggregateInput
        _sum?: tb_destinationSumOrderByAggregateInput
    }

    export type tb_destinationScalarWhereWithAggregatesInput = {
        AND?: tb_destinationScalarWhereWithAggregatesInput | tb_destinationScalarWhereWithAggregatesInput[]
        OR?: tb_destinationScalarWhereWithAggregatesInput[]
        NOT?: tb_destinationScalarWhereWithAggregatesInput | tb_destinationScalarWhereWithAggregatesInput[]
        destination_id?: BigIntWithAggregatesFilter<'tb_destination'> | bigint | number
        name?: StringNullableWithAggregatesFilter<'tb_destination'> | string | null
        destinations?: StringNullableListFilter<'tb_destination'>
        quota?: BigIntNullableWithAggregatesFilter<'tb_destination'> | bigint | number | null
        is_open?: BoolNullableWithAggregatesFilter<'tb_destination'> | boolean | null
        price?: DecimalNullableWithAggregatesFilter<'tb_destination'> | Decimal | DecimalJsLike | number | string | null
    }

    export type tb_payment_statusWhereInput = {
        AND?: tb_payment_statusWhereInput | tb_payment_statusWhereInput[]
        OR?: tb_payment_statusWhereInput[]
        NOT?: tb_payment_statusWhereInput | tb_payment_statusWhereInput[]
        pay_status_id?: BigIntFilter<'tb_payment_status'> | bigint | number
        Name?: StringNullableFilter<'tb_payment_status'> | string | null
        tb_payment_history?: Tb_payment_historyListRelationFilter
    }

    export type tb_payment_statusOrderByWithRelationInput = {
        pay_status_id?: SortOrder
        Name?: SortOrderInput | SortOrder
        tb_payment_history?: tb_payment_historyOrderByRelationAggregateInput
    }

    export type tb_payment_statusWhereUniqueInput = Prisma.AtLeast<
        {
            pay_status_id?: bigint | number
            AND?: tb_payment_statusWhereInput | tb_payment_statusWhereInput[]
            OR?: tb_payment_statusWhereInput[]
            NOT?: tb_payment_statusWhereInput | tb_payment_statusWhereInput[]
            Name?: StringNullableFilter<'tb_payment_status'> | string | null
            tb_payment_history?: Tb_payment_historyListRelationFilter
        },
        'pay_status_id'
    >

    export type tb_payment_statusOrderByWithAggregationInput = {
        pay_status_id?: SortOrder
        Name?: SortOrderInput | SortOrder
        _count?: tb_payment_statusCountOrderByAggregateInput
        _avg?: tb_payment_statusAvgOrderByAggregateInput
        _max?: tb_payment_statusMaxOrderByAggregateInput
        _min?: tb_payment_statusMinOrderByAggregateInput
        _sum?: tb_payment_statusSumOrderByAggregateInput
    }

    export type tb_payment_statusScalarWhereWithAggregatesInput = {
        AND?: tb_payment_statusScalarWhereWithAggregatesInput | tb_payment_statusScalarWhereWithAggregatesInput[]
        OR?: tb_payment_statusScalarWhereWithAggregatesInput[]
        NOT?: tb_payment_statusScalarWhereWithAggregatesInput | tb_payment_statusScalarWhereWithAggregatesInput[]
        pay_status_id?: BigIntWithAggregatesFilter<'tb_payment_status'> | bigint | number
        Name?: StringNullableWithAggregatesFilter<'tb_payment_status'> | string | null
    }

    export type tb_payment_typeWhereInput = {
        AND?: tb_payment_typeWhereInput | tb_payment_typeWhereInput[]
        OR?: tb_payment_typeWhereInput[]
        NOT?: tb_payment_typeWhereInput | tb_payment_typeWhereInput[]
        pay_type_id?: BigIntFilter<'tb_payment_type'> | bigint | number
        name?: StringNullableFilter<'tb_payment_type'> | string | null
        tb_trip_invoice?: Tb_trip_invoiceListRelationFilter
    }

    export type tb_payment_typeOrderByWithRelationInput = {
        pay_type_id?: SortOrder
        name?: SortOrderInput | SortOrder
        tb_trip_invoice?: tb_trip_invoiceOrderByRelationAggregateInput
    }

    export type tb_payment_typeWhereUniqueInput = Prisma.AtLeast<
        {
            pay_type_id?: bigint | number
            AND?: tb_payment_typeWhereInput | tb_payment_typeWhereInput[]
            OR?: tb_payment_typeWhereInput[]
            NOT?: tb_payment_typeWhereInput | tb_payment_typeWhereInput[]
            name?: StringNullableFilter<'tb_payment_type'> | string | null
            tb_trip_invoice?: Tb_trip_invoiceListRelationFilter
        },
        'pay_type_id'
    >

    export type tb_payment_typeOrderByWithAggregationInput = {
        pay_type_id?: SortOrder
        name?: SortOrderInput | SortOrder
        _count?: tb_payment_typeCountOrderByAggregateInput
        _avg?: tb_payment_typeAvgOrderByAggregateInput
        _max?: tb_payment_typeMaxOrderByAggregateInput
        _min?: tb_payment_typeMinOrderByAggregateInput
        _sum?: tb_payment_typeSumOrderByAggregateInput
    }

    export type tb_payment_typeScalarWhereWithAggregatesInput = {
        AND?: tb_payment_typeScalarWhereWithAggregatesInput | tb_payment_typeScalarWhereWithAggregatesInput[]
        OR?: tb_payment_typeScalarWhereWithAggregatesInput[]
        NOT?: tb_payment_typeScalarWhereWithAggregatesInput | tb_payment_typeScalarWhereWithAggregatesInput[]
        pay_type_id?: BigIntWithAggregatesFilter<'tb_payment_type'> | bigint | number
        name?: StringNullableWithAggregatesFilter<'tb_payment_type'> | string | null
    }

    export type tb_roleWhereInput = {
        AND?: tb_roleWhereInput | tb_roleWhereInput[]
        OR?: tb_roleWhereInput[]
        NOT?: tb_roleWhereInput | tb_roleWhereInput[]
        role_id?: IntFilter<'tb_role'> | number
        name?: StringFilter<'tb_role'> | string
        tb_user?: Tb_userListRelationFilter
    }

    export type tb_roleOrderByWithRelationInput = {
        role_id?: SortOrder
        name?: SortOrder
        tb_user?: tb_userOrderByRelationAggregateInput
    }

    export type tb_roleWhereUniqueInput = Prisma.AtLeast<
        {
            role_id?: number
            name?: string
            AND?: tb_roleWhereInput | tb_roleWhereInput[]
            OR?: tb_roleWhereInput[]
            NOT?: tb_roleWhereInput | tb_roleWhereInput[]
            tb_user?: Tb_userListRelationFilter
        },
        'role_id' | 'name'
    >

    export type tb_roleOrderByWithAggregationInput = {
        role_id?: SortOrder
        name?: SortOrder
        _count?: tb_roleCountOrderByAggregateInput
        _avg?: tb_roleAvgOrderByAggregateInput
        _max?: tb_roleMaxOrderByAggregateInput
        _min?: tb_roleMinOrderByAggregateInput
        _sum?: tb_roleSumOrderByAggregateInput
    }

    export type tb_roleScalarWhereWithAggregatesInput = {
        AND?: tb_roleScalarWhereWithAggregatesInput | tb_roleScalarWhereWithAggregatesInput[]
        OR?: tb_roleScalarWhereWithAggregatesInput[]
        NOT?: tb_roleScalarWhereWithAggregatesInput | tb_roleScalarWhereWithAggregatesInput[]
        role_id?: IntWithAggregatesFilter<'tb_role'> | number
        name?: StringWithAggregatesFilter<'tb_role'> | string
    }

    export type tb_trip_statusWhereInput = {
        AND?: tb_trip_statusWhereInput | tb_trip_statusWhereInput[]
        OR?: tb_trip_statusWhereInput[]
        NOT?: tb_trip_statusWhereInput | tb_trip_statusWhereInput[]
        trip_status_id?: BigIntFilter<'tb_trip_status'> | bigint | number
        name?: StringNullableFilter<'tb_trip_status'> | string | null
        tb_trip?: Tb_tripListRelationFilter
    }

    export type tb_trip_statusOrderByWithRelationInput = {
        trip_status_id?: SortOrder
        name?: SortOrderInput | SortOrder
        tb_trip?: tb_tripOrderByRelationAggregateInput
    }

    export type tb_trip_statusWhereUniqueInput = Prisma.AtLeast<
        {
            trip_status_id?: bigint | number
            AND?: tb_trip_statusWhereInput | tb_trip_statusWhereInput[]
            OR?: tb_trip_statusWhereInput[]
            NOT?: tb_trip_statusWhereInput | tb_trip_statusWhereInput[]
            name?: StringNullableFilter<'tb_trip_status'> | string | null
            tb_trip?: Tb_tripListRelationFilter
        },
        'trip_status_id'
    >

    export type tb_trip_statusOrderByWithAggregationInput = {
        trip_status_id?: SortOrder
        name?: SortOrderInput | SortOrder
        _count?: tb_trip_statusCountOrderByAggregateInput
        _avg?: tb_trip_statusAvgOrderByAggregateInput
        _max?: tb_trip_statusMaxOrderByAggregateInput
        _min?: tb_trip_statusMinOrderByAggregateInput
        _sum?: tb_trip_statusSumOrderByAggregateInput
    }

    export type tb_trip_statusScalarWhereWithAggregatesInput = {
        AND?: tb_trip_statusScalarWhereWithAggregatesInput | tb_trip_statusScalarWhereWithAggregatesInput[]
        OR?: tb_trip_statusScalarWhereWithAggregatesInput[]
        NOT?: tb_trip_statusScalarWhereWithAggregatesInput | tb_trip_statusScalarWhereWithAggregatesInput[]
        trip_status_id?: BigIntWithAggregatesFilter<'tb_trip_status'> | bigint | number
        name?: StringNullableWithAggregatesFilter<'tb_trip_status'> | string | null
    }

    export type tb_payment_historyWhereInput = {
        AND?: tb_payment_historyWhereInput | tb_payment_historyWhereInput[]
        OR?: tb_payment_historyWhereInput[]
        NOT?: tb_payment_historyWhereInput | tb_payment_historyWhereInput[]
        pay_hist_id?: BigIntFilter<'tb_payment_history'> | bigint | number
        pay_status_id?: BigIntNullableFilter<'tb_payment_history'> | bigint | number | null
        created_at?: DateTimeNullableFilter<'tb_payment_history'> | Date | string | null
        trip_invoice_id?: BigIntNullableFilter<'tb_payment_history'> | bigint | number | null
        tb_payment_status?: XOR<Tb_payment_statusNullableScalarRelationFilter, tb_payment_statusWhereInput> | null
        tb_trip_invoice?: XOR<Tb_trip_invoiceNullableScalarRelationFilter, tb_trip_invoiceWhereInput> | null
    }

    export type tb_payment_historyOrderByWithRelationInput = {
        pay_hist_id?: SortOrder
        pay_status_id?: SortOrderInput | SortOrder
        created_at?: SortOrderInput | SortOrder
        trip_invoice_id?: SortOrderInput | SortOrder
        tb_payment_status?: tb_payment_statusOrderByWithRelationInput
        tb_trip_invoice?: tb_trip_invoiceOrderByWithRelationInput
    }

    export type tb_payment_historyWhereUniqueInput = Prisma.AtLeast<
        {
            pay_hist_id?: bigint | number
            AND?: tb_payment_historyWhereInput | tb_payment_historyWhereInput[]
            OR?: tb_payment_historyWhereInput[]
            NOT?: tb_payment_historyWhereInput | tb_payment_historyWhereInput[]
            pay_status_id?: BigIntNullableFilter<'tb_payment_history'> | bigint | number | null
            created_at?: DateTimeNullableFilter<'tb_payment_history'> | Date | string | null
            trip_invoice_id?: BigIntNullableFilter<'tb_payment_history'> | bigint | number | null
            tb_payment_status?: XOR<Tb_payment_statusNullableScalarRelationFilter, tb_payment_statusWhereInput> | null
            tb_trip_invoice?: XOR<Tb_trip_invoiceNullableScalarRelationFilter, tb_trip_invoiceWhereInput> | null
        },
        'pay_hist_id'
    >

    export type tb_payment_historyOrderByWithAggregationInput = {
        pay_hist_id?: SortOrder
        pay_status_id?: SortOrderInput | SortOrder
        created_at?: SortOrderInput | SortOrder
        trip_invoice_id?: SortOrderInput | SortOrder
        _count?: tb_payment_historyCountOrderByAggregateInput
        _avg?: tb_payment_historyAvgOrderByAggregateInput
        _max?: tb_payment_historyMaxOrderByAggregateInput
        _min?: tb_payment_historyMinOrderByAggregateInput
        _sum?: tb_payment_historySumOrderByAggregateInput
    }

    export type tb_payment_historyScalarWhereWithAggregatesInput = {
        AND?: tb_payment_historyScalarWhereWithAggregatesInput | tb_payment_historyScalarWhereWithAggregatesInput[]
        OR?: tb_payment_historyScalarWhereWithAggregatesInput[]
        NOT?: tb_payment_historyScalarWhereWithAggregatesInput | tb_payment_historyScalarWhereWithAggregatesInput[]
        pay_hist_id?: BigIntWithAggregatesFilter<'tb_payment_history'> | bigint | number
        pay_status_id?: BigIntNullableWithAggregatesFilter<'tb_payment_history'> | bigint | number | null
        created_at?: DateTimeNullableWithAggregatesFilter<'tb_payment_history'> | Date | string | null
        trip_invoice_id?: BigIntNullableWithAggregatesFilter<'tb_payment_history'> | bigint | number | null
    }

    export type tb_tripWhereInput = {
        AND?: tb_tripWhereInput | tb_tripWhereInput[]
        OR?: tb_tripWhereInput[]
        NOT?: tb_tripWhereInput | tb_tripWhereInput[]
        trip_id?: BigIntFilter<'tb_trip'> | bigint | number
        user_id?: UuidFilter<'tb_trip'> | string
        destination_id?: BigIntFilter<'tb_trip'> | bigint | number
        start_time?: DateTimeNullableFilter<'tb_trip'> | Date | string | null
        end_time?: DateTimeNullableFilter<'tb_trip'> | Date | string | null
        created_at?: DateTimeNullableFilter<'tb_trip'> | Date | string | null
        updated_at?: DateTimeNullableFilter<'tb_trip'> | Date | string | null
        trip_status?: BigIntNullableFilter<'tb_trip'> | bigint | number | null
        schedule_at?: DateTimeNullableFilter<'tb_trip'> | Date | string | null
        created_by?: StringNullableFilter<'tb_trip'> | string | null
        updated_by?: StringNullableFilter<'tb_trip'> | string | null
        tb_destination?: XOR<Tb_destinationScalarRelationFilter, tb_destinationWhereInput>
        tb_trip_status?: XOR<Tb_trip_statusNullableScalarRelationFilter, tb_trip_statusWhereInput> | null
        tb_user?: XOR<Tb_userScalarRelationFilter, tb_userWhereInput>
        tb_trip_invoice?: Tb_trip_invoiceListRelationFilter
    }

    export type tb_tripOrderByWithRelationInput = {
        trip_id?: SortOrder
        user_id?: SortOrder
        destination_id?: SortOrder
        start_time?: SortOrderInput | SortOrder
        end_time?: SortOrderInput | SortOrder
        created_at?: SortOrderInput | SortOrder
        updated_at?: SortOrderInput | SortOrder
        trip_status?: SortOrderInput | SortOrder
        schedule_at?: SortOrderInput | SortOrder
        created_by?: SortOrderInput | SortOrder
        updated_by?: SortOrderInput | SortOrder
        tb_destination?: tb_destinationOrderByWithRelationInput
        tb_trip_status?: tb_trip_statusOrderByWithRelationInput
        tb_user?: tb_userOrderByWithRelationInput
        tb_trip_invoice?: tb_trip_invoiceOrderByRelationAggregateInput
    }

    export type tb_tripWhereUniqueInput = Prisma.AtLeast<
        {
            trip_id?: bigint | number
            AND?: tb_tripWhereInput | tb_tripWhereInput[]
            OR?: tb_tripWhereInput[]
            NOT?: tb_tripWhereInput | tb_tripWhereInput[]
            user_id?: UuidFilter<'tb_trip'> | string
            destination_id?: BigIntFilter<'tb_trip'> | bigint | number
            start_time?: DateTimeNullableFilter<'tb_trip'> | Date | string | null
            end_time?: DateTimeNullableFilter<'tb_trip'> | Date | string | null
            created_at?: DateTimeNullableFilter<'tb_trip'> | Date | string | null
            updated_at?: DateTimeNullableFilter<'tb_trip'> | Date | string | null
            trip_status?: BigIntNullableFilter<'tb_trip'> | bigint | number | null
            schedule_at?: DateTimeNullableFilter<'tb_trip'> | Date | string | null
            created_by?: StringNullableFilter<'tb_trip'> | string | null
            updated_by?: StringNullableFilter<'tb_trip'> | string | null
            tb_destination?: XOR<Tb_destinationScalarRelationFilter, tb_destinationWhereInput>
            tb_trip_status?: XOR<Tb_trip_statusNullableScalarRelationFilter, tb_trip_statusWhereInput> | null
            tb_user?: XOR<Tb_userScalarRelationFilter, tb_userWhereInput>
            tb_trip_invoice?: Tb_trip_invoiceListRelationFilter
        },
        'trip_id'
    >

    export type tb_tripOrderByWithAggregationInput = {
        trip_id?: SortOrder
        user_id?: SortOrder
        destination_id?: SortOrder
        start_time?: SortOrderInput | SortOrder
        end_time?: SortOrderInput | SortOrder
        created_at?: SortOrderInput | SortOrder
        updated_at?: SortOrderInput | SortOrder
        trip_status?: SortOrderInput | SortOrder
        schedule_at?: SortOrderInput | SortOrder
        created_by?: SortOrderInput | SortOrder
        updated_by?: SortOrderInput | SortOrder
        _count?: tb_tripCountOrderByAggregateInput
        _avg?: tb_tripAvgOrderByAggregateInput
        _max?: tb_tripMaxOrderByAggregateInput
        _min?: tb_tripMinOrderByAggregateInput
        _sum?: tb_tripSumOrderByAggregateInput
    }

    export type tb_tripScalarWhereWithAggregatesInput = {
        AND?: tb_tripScalarWhereWithAggregatesInput | tb_tripScalarWhereWithAggregatesInput[]
        OR?: tb_tripScalarWhereWithAggregatesInput[]
        NOT?: tb_tripScalarWhereWithAggregatesInput | tb_tripScalarWhereWithAggregatesInput[]
        trip_id?: BigIntWithAggregatesFilter<'tb_trip'> | bigint | number
        user_id?: UuidWithAggregatesFilter<'tb_trip'> | string
        destination_id?: BigIntWithAggregatesFilter<'tb_trip'> | bigint | number
        start_time?: DateTimeNullableWithAggregatesFilter<'tb_trip'> | Date | string | null
        end_time?: DateTimeNullableWithAggregatesFilter<'tb_trip'> | Date | string | null
        created_at?: DateTimeNullableWithAggregatesFilter<'tb_trip'> | Date | string | null
        updated_at?: DateTimeNullableWithAggregatesFilter<'tb_trip'> | Date | string | null
        trip_status?: BigIntNullableWithAggregatesFilter<'tb_trip'> | bigint | number | null
        schedule_at?: DateTimeNullableWithAggregatesFilter<'tb_trip'> | Date | string | null
        created_by?: StringNullableWithAggregatesFilter<'tb_trip'> | string | null
        updated_by?: StringNullableWithAggregatesFilter<'tb_trip'> | string | null
    }

    export type tb_trip_invoiceWhereInput = {
        AND?: tb_trip_invoiceWhereInput | tb_trip_invoiceWhereInput[]
        OR?: tb_trip_invoiceWhereInput[]
        NOT?: tb_trip_invoiceWhereInput | tb_trip_invoiceWhereInput[]
        trip_invoice_id?: BigIntFilter<'tb_trip_invoice'> | bigint | number
        invoice_no?: StringNullableFilter<'tb_trip_invoice'> | string | null
        quantity?: BigIntNullableFilter<'tb_trip_invoice'> | bigint | number | null
        total_amount?: DecimalNullableFilter<'tb_trip_invoice'> | Decimal | DecimalJsLike | number | string | null
        pay_type_id?: BigIntNullableFilter<'tb_trip_invoice'> | bigint | number | null
        trip_id?: BigIntNullableFilter<'tb_trip_invoice'> | bigint | number | null
        tb_payment_history?: Tb_payment_historyListRelationFilter
        tb_payment_type?: XOR<Tb_payment_typeNullableScalarRelationFilter, tb_payment_typeWhereInput> | null
        tb_trip?: XOR<Tb_tripNullableScalarRelationFilter, tb_tripWhereInput> | null
    }

    export type tb_trip_invoiceOrderByWithRelationInput = {
        trip_invoice_id?: SortOrder
        invoice_no?: SortOrderInput | SortOrder
        quantity?: SortOrderInput | SortOrder
        total_amount?: SortOrderInput | SortOrder
        pay_type_id?: SortOrderInput | SortOrder
        trip_id?: SortOrderInput | SortOrder
        tb_payment_history?: tb_payment_historyOrderByRelationAggregateInput
        tb_payment_type?: tb_payment_typeOrderByWithRelationInput
        tb_trip?: tb_tripOrderByWithRelationInput
    }

    export type tb_trip_invoiceWhereUniqueInput = Prisma.AtLeast<
        {
            trip_invoice_id?: bigint | number
            AND?: tb_trip_invoiceWhereInput | tb_trip_invoiceWhereInput[]
            OR?: tb_trip_invoiceWhereInput[]
            NOT?: tb_trip_invoiceWhereInput | tb_trip_invoiceWhereInput[]
            invoice_no?: StringNullableFilter<'tb_trip_invoice'> | string | null
            quantity?: BigIntNullableFilter<'tb_trip_invoice'> | bigint | number | null
            total_amount?: DecimalNullableFilter<'tb_trip_invoice'> | Decimal | DecimalJsLike | number | string | null
            pay_type_id?: BigIntNullableFilter<'tb_trip_invoice'> | bigint | number | null
            trip_id?: BigIntNullableFilter<'tb_trip_invoice'> | bigint | number | null
            tb_payment_history?: Tb_payment_historyListRelationFilter
            tb_payment_type?: XOR<Tb_payment_typeNullableScalarRelationFilter, tb_payment_typeWhereInput> | null
            tb_trip?: XOR<Tb_tripNullableScalarRelationFilter, tb_tripWhereInput> | null
        },
        'trip_invoice_id'
    >

    export type tb_trip_invoiceOrderByWithAggregationInput = {
        trip_invoice_id?: SortOrder
        invoice_no?: SortOrderInput | SortOrder
        quantity?: SortOrderInput | SortOrder
        total_amount?: SortOrderInput | SortOrder
        pay_type_id?: SortOrderInput | SortOrder
        trip_id?: SortOrderInput | SortOrder
        _count?: tb_trip_invoiceCountOrderByAggregateInput
        _avg?: tb_trip_invoiceAvgOrderByAggregateInput
        _max?: tb_trip_invoiceMaxOrderByAggregateInput
        _min?: tb_trip_invoiceMinOrderByAggregateInput
        _sum?: tb_trip_invoiceSumOrderByAggregateInput
    }

    export type tb_trip_invoiceScalarWhereWithAggregatesInput = {
        AND?: tb_trip_invoiceScalarWhereWithAggregatesInput | tb_trip_invoiceScalarWhereWithAggregatesInput[]
        OR?: tb_trip_invoiceScalarWhereWithAggregatesInput[]
        NOT?: tb_trip_invoiceScalarWhereWithAggregatesInput | tb_trip_invoiceScalarWhereWithAggregatesInput[]
        trip_invoice_id?: BigIntWithAggregatesFilter<'tb_trip_invoice'> | bigint | number
        invoice_no?: StringNullableWithAggregatesFilter<'tb_trip_invoice'> | string | null
        quantity?: BigIntNullableWithAggregatesFilter<'tb_trip_invoice'> | bigint | number | null
        total_amount?:
            | DecimalNullableWithAggregatesFilter<'tb_trip_invoice'>
            | Decimal
            | DecimalJsLike
            | number
            | string
            | null
        pay_type_id?: BigIntNullableWithAggregatesFilter<'tb_trip_invoice'> | bigint | number | null
        trip_id?: BigIntNullableWithAggregatesFilter<'tb_trip_invoice'> | bigint | number | null
    }

    export type tb_userWhereInput = {
        AND?: tb_userWhereInput | tb_userWhereInput[]
        OR?: tb_userWhereInput[]
        NOT?: tb_userWhereInput | tb_userWhereInput[]
        user_id?: UuidFilter<'tb_user'> | string
        name?: StringFilter<'tb_user'> | string
        email?: StringFilter<'tb_user'> | string
        password?: StringFilter<'tb_user'> | string
        role_id?: IntFilter<'tb_user'> | number
        created_at?: DateTimeNullableFilter<'tb_user'> | Date | string | null
        created_by?: UuidNullableFilter<'tb_user'> | string | null
        updated_by?: UuidNullableFilter<'tb_user'> | string | null
        is_active?: BoolNullableFilter<'tb_user'> | boolean | null
        tb_trip?: Tb_tripListRelationFilter
        tb_role?: XOR<Tb_roleScalarRelationFilter, tb_roleWhereInput>
    }

    export type tb_userOrderByWithRelationInput = {
        user_id?: SortOrder
        name?: SortOrder
        email?: SortOrder
        password?: SortOrder
        role_id?: SortOrder
        created_at?: SortOrderInput | SortOrder
        created_by?: SortOrderInput | SortOrder
        updated_by?: SortOrderInput | SortOrder
        is_active?: SortOrderInput | SortOrder
        tb_trip?: tb_tripOrderByRelationAggregateInput
        tb_role?: tb_roleOrderByWithRelationInput
    }

    export type tb_userWhereUniqueInput = Prisma.AtLeast<
        {
            user_id?: string
            email?: string
            AND?: tb_userWhereInput | tb_userWhereInput[]
            OR?: tb_userWhereInput[]
            NOT?: tb_userWhereInput | tb_userWhereInput[]
            name?: StringFilter<'tb_user'> | string
            password?: StringFilter<'tb_user'> | string
            role_id?: IntFilter<'tb_user'> | number
            created_at?: DateTimeNullableFilter<'tb_user'> | Date | string | null
            created_by?: UuidNullableFilter<'tb_user'> | string | null
            updated_by?: UuidNullableFilter<'tb_user'> | string | null
            is_active?: BoolNullableFilter<'tb_user'> | boolean | null
            tb_trip?: Tb_tripListRelationFilter
            tb_role?: XOR<Tb_roleScalarRelationFilter, tb_roleWhereInput>
        },
        'user_id' | 'email'
    >

    export type tb_userOrderByWithAggregationInput = {
        user_id?: SortOrder
        name?: SortOrder
        email?: SortOrder
        password?: SortOrder
        role_id?: SortOrder
        created_at?: SortOrderInput | SortOrder
        created_by?: SortOrderInput | SortOrder
        updated_by?: SortOrderInput | SortOrder
        is_active?: SortOrderInput | SortOrder
        _count?: tb_userCountOrderByAggregateInput
        _avg?: tb_userAvgOrderByAggregateInput
        _max?: tb_userMaxOrderByAggregateInput
        _min?: tb_userMinOrderByAggregateInput
        _sum?: tb_userSumOrderByAggregateInput
    }

    export type tb_userScalarWhereWithAggregatesInput = {
        AND?: tb_userScalarWhereWithAggregatesInput | tb_userScalarWhereWithAggregatesInput[]
        OR?: tb_userScalarWhereWithAggregatesInput[]
        NOT?: tb_userScalarWhereWithAggregatesInput | tb_userScalarWhereWithAggregatesInput[]
        user_id?: UuidWithAggregatesFilter<'tb_user'> | string
        name?: StringWithAggregatesFilter<'tb_user'> | string
        email?: StringWithAggregatesFilter<'tb_user'> | string
        password?: StringWithAggregatesFilter<'tb_user'> | string
        role_id?: IntWithAggregatesFilter<'tb_user'> | number
        created_at?: DateTimeNullableWithAggregatesFilter<'tb_user'> | Date | string | null
        created_by?: UuidNullableWithAggregatesFilter<'tb_user'> | string | null
        updated_by?: UuidNullableWithAggregatesFilter<'tb_user'> | string | null
        is_active?: BoolNullableWithAggregatesFilter<'tb_user'> | boolean | null
    }

    export type tb_destinationCreateInput = {
        destination_id?: bigint | number
        name?: string | null
        destinations?: tb_destinationCreatedestinationsInput | string[]
        quota?: bigint | number | null
        is_open?: boolean | null
        price?: Decimal | DecimalJsLike | number | string | null
        tb_trip?: tb_tripCreateNestedManyWithoutTb_destinationInput
    }

    export type tb_destinationUncheckedCreateInput = {
        destination_id?: bigint | number
        name?: string | null
        destinations?: tb_destinationCreatedestinationsInput | string[]
        quota?: bigint | number | null
        is_open?: boolean | null
        price?: Decimal | DecimalJsLike | number | string | null
        tb_trip?: tb_tripUncheckedCreateNestedManyWithoutTb_destinationInput
    }

    export type tb_destinationUpdateInput = {
        destination_id?: BigIntFieldUpdateOperationsInput | bigint | number
        name?: NullableStringFieldUpdateOperationsInput | string | null
        destinations?: tb_destinationUpdatedestinationsInput | string[]
        quota?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
        is_open?: NullableBoolFieldUpdateOperationsInput | boolean | null
        price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
        tb_trip?: tb_tripUpdateManyWithoutTb_destinationNestedInput
    }

    export type tb_destinationUncheckedUpdateInput = {
        destination_id?: BigIntFieldUpdateOperationsInput | bigint | number
        name?: NullableStringFieldUpdateOperationsInput | string | null
        destinations?: tb_destinationUpdatedestinationsInput | string[]
        quota?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
        is_open?: NullableBoolFieldUpdateOperationsInput | boolean | null
        price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
        tb_trip?: tb_tripUncheckedUpdateManyWithoutTb_destinationNestedInput
    }

    export type tb_destinationCreateManyInput = {
        destination_id?: bigint | number
        name?: string | null
        destinations?: tb_destinationCreatedestinationsInput | string[]
        quota?: bigint | number | null
        is_open?: boolean | null
        price?: Decimal | DecimalJsLike | number | string | null
    }

    export type tb_destinationUpdateManyMutationInput = {
        destination_id?: BigIntFieldUpdateOperationsInput | bigint | number
        name?: NullableStringFieldUpdateOperationsInput | string | null
        destinations?: tb_destinationUpdatedestinationsInput | string[]
        quota?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
        is_open?: NullableBoolFieldUpdateOperationsInput | boolean | null
        price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    }

    export type tb_destinationUncheckedUpdateManyInput = {
        destination_id?: BigIntFieldUpdateOperationsInput | bigint | number
        name?: NullableStringFieldUpdateOperationsInput | string | null
        destinations?: tb_destinationUpdatedestinationsInput | string[]
        quota?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
        is_open?: NullableBoolFieldUpdateOperationsInput | boolean | null
        price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    }

    export type tb_payment_statusCreateInput = {
        pay_status_id?: bigint | number
        Name?: string | null
        tb_payment_history?: tb_payment_historyCreateNestedManyWithoutTb_payment_statusInput
    }

    export type tb_payment_statusUncheckedCreateInput = {
        pay_status_id?: bigint | number
        Name?: string | null
        tb_payment_history?: tb_payment_historyUncheckedCreateNestedManyWithoutTb_payment_statusInput
    }

    export type tb_payment_statusUpdateInput = {
        pay_status_id?: BigIntFieldUpdateOperationsInput | bigint | number
        Name?: NullableStringFieldUpdateOperationsInput | string | null
        tb_payment_history?: tb_payment_historyUpdateManyWithoutTb_payment_statusNestedInput
    }

    export type tb_payment_statusUncheckedUpdateInput = {
        pay_status_id?: BigIntFieldUpdateOperationsInput | bigint | number
        Name?: NullableStringFieldUpdateOperationsInput | string | null
        tb_payment_history?: tb_payment_historyUncheckedUpdateManyWithoutTb_payment_statusNestedInput
    }

    export type tb_payment_statusCreateManyInput = {
        pay_status_id?: bigint | number
        Name?: string | null
    }

    export type tb_payment_statusUpdateManyMutationInput = {
        pay_status_id?: BigIntFieldUpdateOperationsInput | bigint | number
        Name?: NullableStringFieldUpdateOperationsInput | string | null
    }

    export type tb_payment_statusUncheckedUpdateManyInput = {
        pay_status_id?: BigIntFieldUpdateOperationsInput | bigint | number
        Name?: NullableStringFieldUpdateOperationsInput | string | null
    }

    export type tb_payment_typeCreateInput = {
        pay_type_id?: bigint | number
        name?: string | null
        tb_trip_invoice?: tb_trip_invoiceCreateNestedManyWithoutTb_payment_typeInput
    }

    export type tb_payment_typeUncheckedCreateInput = {
        pay_type_id?: bigint | number
        name?: string | null
        tb_trip_invoice?: tb_trip_invoiceUncheckedCreateNestedManyWithoutTb_payment_typeInput
    }

    export type tb_payment_typeUpdateInput = {
        pay_type_id?: BigIntFieldUpdateOperationsInput | bigint | number
        name?: NullableStringFieldUpdateOperationsInput | string | null
        tb_trip_invoice?: tb_trip_invoiceUpdateManyWithoutTb_payment_typeNestedInput
    }

    export type tb_payment_typeUncheckedUpdateInput = {
        pay_type_id?: BigIntFieldUpdateOperationsInput | bigint | number
        name?: NullableStringFieldUpdateOperationsInput | string | null
        tb_trip_invoice?: tb_trip_invoiceUncheckedUpdateManyWithoutTb_payment_typeNestedInput
    }

    export type tb_payment_typeCreateManyInput = {
        pay_type_id?: bigint | number
        name?: string | null
    }

    export type tb_payment_typeUpdateManyMutationInput = {
        pay_type_id?: BigIntFieldUpdateOperationsInput | bigint | number
        name?: NullableStringFieldUpdateOperationsInput | string | null
    }

    export type tb_payment_typeUncheckedUpdateManyInput = {
        pay_type_id?: BigIntFieldUpdateOperationsInput | bigint | number
        name?: NullableStringFieldUpdateOperationsInput | string | null
    }

    export type tb_roleCreateInput = {
        name: string
        tb_user?: tb_userCreateNestedManyWithoutTb_roleInput
    }

    export type tb_roleUncheckedCreateInput = {
        role_id?: number
        name: string
        tb_user?: tb_userUncheckedCreateNestedManyWithoutTb_roleInput
    }

    export type tb_roleUpdateInput = {
        name?: StringFieldUpdateOperationsInput | string
        tb_user?: tb_userUpdateManyWithoutTb_roleNestedInput
    }

    export type tb_roleUncheckedUpdateInput = {
        role_id?: IntFieldUpdateOperationsInput | number
        name?: StringFieldUpdateOperationsInput | string
        tb_user?: tb_userUncheckedUpdateManyWithoutTb_roleNestedInput
    }

    export type tb_roleCreateManyInput = {
        role_id?: number
        name: string
    }

    export type tb_roleUpdateManyMutationInput = {
        name?: StringFieldUpdateOperationsInput | string
    }

    export type tb_roleUncheckedUpdateManyInput = {
        role_id?: IntFieldUpdateOperationsInput | number
        name?: StringFieldUpdateOperationsInput | string
    }

    export type tb_trip_statusCreateInput = {
        trip_status_id?: bigint | number
        name?: string | null
        tb_trip?: tb_tripCreateNestedManyWithoutTb_trip_statusInput
    }

    export type tb_trip_statusUncheckedCreateInput = {
        trip_status_id?: bigint | number
        name?: string | null
        tb_trip?: tb_tripUncheckedCreateNestedManyWithoutTb_trip_statusInput
    }

    export type tb_trip_statusUpdateInput = {
        trip_status_id?: BigIntFieldUpdateOperationsInput | bigint | number
        name?: NullableStringFieldUpdateOperationsInput | string | null
        tb_trip?: tb_tripUpdateManyWithoutTb_trip_statusNestedInput
    }

    export type tb_trip_statusUncheckedUpdateInput = {
        trip_status_id?: BigIntFieldUpdateOperationsInput | bigint | number
        name?: NullableStringFieldUpdateOperationsInput | string | null
        tb_trip?: tb_tripUncheckedUpdateManyWithoutTb_trip_statusNestedInput
    }

    export type tb_trip_statusCreateManyInput = {
        trip_status_id?: bigint | number
        name?: string | null
    }

    export type tb_trip_statusUpdateManyMutationInput = {
        trip_status_id?: BigIntFieldUpdateOperationsInput | bigint | number
        name?: NullableStringFieldUpdateOperationsInput | string | null
    }

    export type tb_trip_statusUncheckedUpdateManyInput = {
        trip_status_id?: BigIntFieldUpdateOperationsInput | bigint | number
        name?: NullableStringFieldUpdateOperationsInput | string | null
    }

    export type tb_payment_historyCreateInput = {
        pay_hist_id?: bigint | number
        created_at?: Date | string | null
        tb_payment_status?: tb_payment_statusCreateNestedOneWithoutTb_payment_historyInput
        tb_trip_invoice?: tb_trip_invoiceCreateNestedOneWithoutTb_payment_historyInput
    }

    export type tb_payment_historyUncheckedCreateInput = {
        pay_hist_id?: bigint | number
        pay_status_id?: bigint | number | null
        created_at?: Date | string | null
        trip_invoice_id?: bigint | number | null
    }

    export type tb_payment_historyUpdateInput = {
        pay_hist_id?: BigIntFieldUpdateOperationsInput | bigint | number
        created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        tb_payment_status?: tb_payment_statusUpdateOneWithoutTb_payment_historyNestedInput
        tb_trip_invoice?: tb_trip_invoiceUpdateOneWithoutTb_payment_historyNestedInput
    }

    export type tb_payment_historyUncheckedUpdateInput = {
        pay_hist_id?: BigIntFieldUpdateOperationsInput | bigint | number
        pay_status_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
        created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        trip_invoice_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    }

    export type tb_payment_historyCreateManyInput = {
        pay_hist_id?: bigint | number
        pay_status_id?: bigint | number | null
        created_at?: Date | string | null
        trip_invoice_id?: bigint | number | null
    }

    export type tb_payment_historyUpdateManyMutationInput = {
        pay_hist_id?: BigIntFieldUpdateOperationsInput | bigint | number
        created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    }

    export type tb_payment_historyUncheckedUpdateManyInput = {
        pay_hist_id?: BigIntFieldUpdateOperationsInput | bigint | number
        pay_status_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
        created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        trip_invoice_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    }

    export type tb_tripCreateInput = {
        trip_id?: bigint | number
        start_time?: Date | string | null
        end_time?: Date | string | null
        created_at?: Date | string | null
        updated_at?: Date | string | null
        schedule_at?: Date | string | null
        created_by?: string | null
        updated_by?: string | null
        tb_destination: tb_destinationCreateNestedOneWithoutTb_tripInput
        tb_trip_status?: tb_trip_statusCreateNestedOneWithoutTb_tripInput
        tb_user: tb_userCreateNestedOneWithoutTb_tripInput
        tb_trip_invoice?: tb_trip_invoiceCreateNestedManyWithoutTb_tripInput
    }

    export type tb_tripUncheckedCreateInput = {
        trip_id?: bigint | number
        user_id: string
        destination_id: bigint | number
        start_time?: Date | string | null
        end_time?: Date | string | null
        created_at?: Date | string | null
        updated_at?: Date | string | null
        trip_status?: bigint | number | null
        schedule_at?: Date | string | null
        created_by?: string | null
        updated_by?: string | null
        tb_trip_invoice?: tb_trip_invoiceUncheckedCreateNestedManyWithoutTb_tripInput
    }

    export type tb_tripUpdateInput = {
        trip_id?: BigIntFieldUpdateOperationsInput | bigint | number
        start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        schedule_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        created_by?: NullableStringFieldUpdateOperationsInput | string | null
        updated_by?: NullableStringFieldUpdateOperationsInput | string | null
        tb_destination?: tb_destinationUpdateOneRequiredWithoutTb_tripNestedInput
        tb_trip_status?: tb_trip_statusUpdateOneWithoutTb_tripNestedInput
        tb_user?: tb_userUpdateOneRequiredWithoutTb_tripNestedInput
        tb_trip_invoice?: tb_trip_invoiceUpdateManyWithoutTb_tripNestedInput
    }

    export type tb_tripUncheckedUpdateInput = {
        trip_id?: BigIntFieldUpdateOperationsInput | bigint | number
        user_id?: StringFieldUpdateOperationsInput | string
        destination_id?: BigIntFieldUpdateOperationsInput | bigint | number
        start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        trip_status?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
        schedule_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        created_by?: NullableStringFieldUpdateOperationsInput | string | null
        updated_by?: NullableStringFieldUpdateOperationsInput | string | null
        tb_trip_invoice?: tb_trip_invoiceUncheckedUpdateManyWithoutTb_tripNestedInput
    }

    export type tb_tripCreateManyInput = {
        trip_id?: bigint | number
        user_id: string
        destination_id: bigint | number
        start_time?: Date | string | null
        end_time?: Date | string | null
        created_at?: Date | string | null
        updated_at?: Date | string | null
        trip_status?: bigint | number | null
        schedule_at?: Date | string | null
        created_by?: string | null
        updated_by?: string | null
    }

    export type tb_tripUpdateManyMutationInput = {
        trip_id?: BigIntFieldUpdateOperationsInput | bigint | number
        start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        schedule_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        created_by?: NullableStringFieldUpdateOperationsInput | string | null
        updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    }

    export type tb_tripUncheckedUpdateManyInput = {
        trip_id?: BigIntFieldUpdateOperationsInput | bigint | number
        user_id?: StringFieldUpdateOperationsInput | string
        destination_id?: BigIntFieldUpdateOperationsInput | bigint | number
        start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        trip_status?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
        schedule_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        created_by?: NullableStringFieldUpdateOperationsInput | string | null
        updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    }

    export type tb_trip_invoiceCreateInput = {
        trip_invoice_id?: bigint | number
        invoice_no?: string | null
        quantity?: bigint | number | null
        total_amount?: Decimal | DecimalJsLike | number | string | null
        tb_payment_history?: tb_payment_historyCreateNestedManyWithoutTb_trip_invoiceInput
        tb_payment_type?: tb_payment_typeCreateNestedOneWithoutTb_trip_invoiceInput
        tb_trip?: tb_tripCreateNestedOneWithoutTb_trip_invoiceInput
    }

    export type tb_trip_invoiceUncheckedCreateInput = {
        trip_invoice_id?: bigint | number
        invoice_no?: string | null
        quantity?: bigint | number | null
        total_amount?: Decimal | DecimalJsLike | number | string | null
        pay_type_id?: bigint | number | null
        trip_id?: bigint | number | null
        tb_payment_history?: tb_payment_historyUncheckedCreateNestedManyWithoutTb_trip_invoiceInput
    }

    export type tb_trip_invoiceUpdateInput = {
        trip_invoice_id?: BigIntFieldUpdateOperationsInput | bigint | number
        invoice_no?: NullableStringFieldUpdateOperationsInput | string | null
        quantity?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
        total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
        tb_payment_history?: tb_payment_historyUpdateManyWithoutTb_trip_invoiceNestedInput
        tb_payment_type?: tb_payment_typeUpdateOneWithoutTb_trip_invoiceNestedInput
        tb_trip?: tb_tripUpdateOneWithoutTb_trip_invoiceNestedInput
    }

    export type tb_trip_invoiceUncheckedUpdateInput = {
        trip_invoice_id?: BigIntFieldUpdateOperationsInput | bigint | number
        invoice_no?: NullableStringFieldUpdateOperationsInput | string | null
        quantity?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
        total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
        pay_type_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
        trip_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
        tb_payment_history?: tb_payment_historyUncheckedUpdateManyWithoutTb_trip_invoiceNestedInput
    }

    export type tb_trip_invoiceCreateManyInput = {
        trip_invoice_id?: bigint | number
        invoice_no?: string | null
        quantity?: bigint | number | null
        total_amount?: Decimal | DecimalJsLike | number | string | null
        pay_type_id?: bigint | number | null
        trip_id?: bigint | number | null
    }

    export type tb_trip_invoiceUpdateManyMutationInput = {
        trip_invoice_id?: BigIntFieldUpdateOperationsInput | bigint | number
        invoice_no?: NullableStringFieldUpdateOperationsInput | string | null
        quantity?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
        total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    }

    export type tb_trip_invoiceUncheckedUpdateManyInput = {
        trip_invoice_id?: BigIntFieldUpdateOperationsInput | bigint | number
        invoice_no?: NullableStringFieldUpdateOperationsInput | string | null
        quantity?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
        total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
        pay_type_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
        trip_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    }

    export type tb_userCreateInput = {
        user_id?: string
        name: string
        email: string
        password: string
        created_at?: Date | string | null
        created_by?: string | null
        updated_by?: string | null
        is_active?: boolean | null
        tb_trip?: tb_tripCreateNestedManyWithoutTb_userInput
        tb_role: tb_roleCreateNestedOneWithoutTb_userInput
    }

    export type tb_userUncheckedCreateInput = {
        user_id?: string
        name: string
        email: string
        password: string
        role_id: number
        created_at?: Date | string | null
        created_by?: string | null
        updated_by?: string | null
        is_active?: boolean | null
        tb_trip?: tb_tripUncheckedCreateNestedManyWithoutTb_userInput
    }

    export type tb_userUpdateInput = {
        user_id?: StringFieldUpdateOperationsInput | string
        name?: StringFieldUpdateOperationsInput | string
        email?: StringFieldUpdateOperationsInput | string
        password?: StringFieldUpdateOperationsInput | string
        created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        created_by?: NullableStringFieldUpdateOperationsInput | string | null
        updated_by?: NullableStringFieldUpdateOperationsInput | string | null
        is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
        tb_trip?: tb_tripUpdateManyWithoutTb_userNestedInput
        tb_role?: tb_roleUpdateOneRequiredWithoutTb_userNestedInput
    }

    export type tb_userUncheckedUpdateInput = {
        user_id?: StringFieldUpdateOperationsInput | string
        name?: StringFieldUpdateOperationsInput | string
        email?: StringFieldUpdateOperationsInput | string
        password?: StringFieldUpdateOperationsInput | string
        role_id?: IntFieldUpdateOperationsInput | number
        created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        created_by?: NullableStringFieldUpdateOperationsInput | string | null
        updated_by?: NullableStringFieldUpdateOperationsInput | string | null
        is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
        tb_trip?: tb_tripUncheckedUpdateManyWithoutTb_userNestedInput
    }

    export type tb_userCreateManyInput = {
        user_id?: string
        name: string
        email: string
        password: string
        role_id: number
        created_at?: Date | string | null
        created_by?: string | null
        updated_by?: string | null
        is_active?: boolean | null
    }

    export type tb_userUpdateManyMutationInput = {
        user_id?: StringFieldUpdateOperationsInput | string
        name?: StringFieldUpdateOperationsInput | string
        email?: StringFieldUpdateOperationsInput | string
        password?: StringFieldUpdateOperationsInput | string
        created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        created_by?: NullableStringFieldUpdateOperationsInput | string | null
        updated_by?: NullableStringFieldUpdateOperationsInput | string | null
        is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    }

    export type tb_userUncheckedUpdateManyInput = {
        user_id?: StringFieldUpdateOperationsInput | string
        name?: StringFieldUpdateOperationsInput | string
        email?: StringFieldUpdateOperationsInput | string
        password?: StringFieldUpdateOperationsInput | string
        role_id?: IntFieldUpdateOperationsInput | number
        created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        created_by?: NullableStringFieldUpdateOperationsInput | string | null
        updated_by?: NullableStringFieldUpdateOperationsInput | string | null
        is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    }

    export type BigIntFilter<$PrismaModel = never> = {
        equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
        in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
        notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
        lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
        lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
        gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
        gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
        not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

    export type StringNullableListFilter<$PrismaModel = never> = {
        equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
        has?: string | StringFieldRefInput<$PrismaModel> | null
        hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
        hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
        isEmpty?: boolean
    }

    export type BigIntNullableFilter<$PrismaModel = never> = {
        equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
        in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
        notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
        lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
        lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
        gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
        gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
        not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
    }

    export type BoolNullableFilter<$PrismaModel = never> = {
        equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
        not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
    }

    export type DecimalNullableFilter<$PrismaModel = never> = {
        equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
        in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
        notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
        lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
        lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
        gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
        gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
        not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    }

    export type Tb_tripListRelationFilter = {
        every?: tb_tripWhereInput
        some?: tb_tripWhereInput
        none?: tb_tripWhereInput
    }

    export type SortOrderInput = {
        sort: SortOrder
        nulls?: NullsOrder
    }

    export type tb_tripOrderByRelationAggregateInput = {
        _count?: SortOrder
    }

    export type tb_destinationCountOrderByAggregateInput = {
        destination_id?: SortOrder
        name?: SortOrder
        destinations?: SortOrder
        quota?: SortOrder
        is_open?: SortOrder
        price?: SortOrder
    }

    export type tb_destinationAvgOrderByAggregateInput = {
        destination_id?: SortOrder
        quota?: SortOrder
        price?: SortOrder
    }

    export type tb_destinationMaxOrderByAggregateInput = {
        destination_id?: SortOrder
        name?: SortOrder
        quota?: SortOrder
        is_open?: SortOrder
        price?: SortOrder
    }

    export type tb_destinationMinOrderByAggregateInput = {
        destination_id?: SortOrder
        name?: SortOrder
        quota?: SortOrder
        is_open?: SortOrder
        price?: SortOrder
    }

    export type tb_destinationSumOrderByAggregateInput = {
        destination_id?: SortOrder
        quota?: SortOrder
        price?: SortOrder
    }

    export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
        equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
        in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
        notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
        lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
        lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
        gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
        gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
        not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
        _count?: NestedIntFilter<$PrismaModel>
        _avg?: NestedFloatFilter<$PrismaModel>
        _sum?: NestedBigIntFilter<$PrismaModel>
        _min?: NestedBigIntFilter<$PrismaModel>
        _max?: NestedBigIntFilter<$PrismaModel>
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

    export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
        in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
        notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
        lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
        lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
        gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
        gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
        not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
        _count?: NestedIntNullableFilter<$PrismaModel>
        _avg?: NestedFloatNullableFilter<$PrismaModel>
        _sum?: NestedBigIntNullableFilter<$PrismaModel>
        _min?: NestedBigIntNullableFilter<$PrismaModel>
        _max?: NestedBigIntNullableFilter<$PrismaModel>
    }

    export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
        not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
        _count?: NestedIntNullableFilter<$PrismaModel>
        _min?: NestedBoolNullableFilter<$PrismaModel>
        _max?: NestedBoolNullableFilter<$PrismaModel>
    }

    export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
        in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
        notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
        lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
        lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
        gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
        gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
        not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
        _count?: NestedIntNullableFilter<$PrismaModel>
        _avg?: NestedDecimalNullableFilter<$PrismaModel>
        _sum?: NestedDecimalNullableFilter<$PrismaModel>
        _min?: NestedDecimalNullableFilter<$PrismaModel>
        _max?: NestedDecimalNullableFilter<$PrismaModel>
    }

    export type Tb_payment_historyListRelationFilter = {
        every?: tb_payment_historyWhereInput
        some?: tb_payment_historyWhereInput
        none?: tb_payment_historyWhereInput
    }

    export type tb_payment_historyOrderByRelationAggregateInput = {
        _count?: SortOrder
    }

    export type tb_payment_statusCountOrderByAggregateInput = {
        pay_status_id?: SortOrder
        Name?: SortOrder
    }

    export type tb_payment_statusAvgOrderByAggregateInput = {
        pay_status_id?: SortOrder
    }

    export type tb_payment_statusMaxOrderByAggregateInput = {
        pay_status_id?: SortOrder
        Name?: SortOrder
    }

    export type tb_payment_statusMinOrderByAggregateInput = {
        pay_status_id?: SortOrder
        Name?: SortOrder
    }

    export type tb_payment_statusSumOrderByAggregateInput = {
        pay_status_id?: SortOrder
    }

    export type Tb_trip_invoiceListRelationFilter = {
        every?: tb_trip_invoiceWhereInput
        some?: tb_trip_invoiceWhereInput
        none?: tb_trip_invoiceWhereInput
    }

    export type tb_trip_invoiceOrderByRelationAggregateInput = {
        _count?: SortOrder
    }

    export type tb_payment_typeCountOrderByAggregateInput = {
        pay_type_id?: SortOrder
        name?: SortOrder
    }

    export type tb_payment_typeAvgOrderByAggregateInput = {
        pay_type_id?: SortOrder
    }

    export type tb_payment_typeMaxOrderByAggregateInput = {
        pay_type_id?: SortOrder
        name?: SortOrder
    }

    export type tb_payment_typeMinOrderByAggregateInput = {
        pay_type_id?: SortOrder
        name?: SortOrder
    }

    export type tb_payment_typeSumOrderByAggregateInput = {
        pay_type_id?: SortOrder
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

    export type Tb_userListRelationFilter = {
        every?: tb_userWhereInput
        some?: tb_userWhereInput
        none?: tb_userWhereInput
    }

    export type tb_userOrderByRelationAggregateInput = {
        _count?: SortOrder
    }

    export type tb_roleCountOrderByAggregateInput = {
        role_id?: SortOrder
        name?: SortOrder
    }

    export type tb_roleAvgOrderByAggregateInput = {
        role_id?: SortOrder
    }

    export type tb_roleMaxOrderByAggregateInput = {
        role_id?: SortOrder
        name?: SortOrder
    }

    export type tb_roleMinOrderByAggregateInput = {
        role_id?: SortOrder
        name?: SortOrder
    }

    export type tb_roleSumOrderByAggregateInput = {
        role_id?: SortOrder
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

    export type tb_trip_statusCountOrderByAggregateInput = {
        trip_status_id?: SortOrder
        name?: SortOrder
    }

    export type tb_trip_statusAvgOrderByAggregateInput = {
        trip_status_id?: SortOrder
    }

    export type tb_trip_statusMaxOrderByAggregateInput = {
        trip_status_id?: SortOrder
        name?: SortOrder
    }

    export type tb_trip_statusMinOrderByAggregateInput = {
        trip_status_id?: SortOrder
        name?: SortOrder
    }

    export type tb_trip_statusSumOrderByAggregateInput = {
        trip_status_id?: SortOrder
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

    export type Tb_payment_statusNullableScalarRelationFilter = {
        is?: tb_payment_statusWhereInput | null
        isNot?: tb_payment_statusWhereInput | null
    }

    export type Tb_trip_invoiceNullableScalarRelationFilter = {
        is?: tb_trip_invoiceWhereInput | null
        isNot?: tb_trip_invoiceWhereInput | null
    }

    export type tb_payment_historyCountOrderByAggregateInput = {
        pay_hist_id?: SortOrder
        pay_status_id?: SortOrder
        created_at?: SortOrder
        trip_invoice_id?: SortOrder
    }

    export type tb_payment_historyAvgOrderByAggregateInput = {
        pay_hist_id?: SortOrder
        pay_status_id?: SortOrder
        trip_invoice_id?: SortOrder
    }

    export type tb_payment_historyMaxOrderByAggregateInput = {
        pay_hist_id?: SortOrder
        pay_status_id?: SortOrder
        created_at?: SortOrder
        trip_invoice_id?: SortOrder
    }

    export type tb_payment_historyMinOrderByAggregateInput = {
        pay_hist_id?: SortOrder
        pay_status_id?: SortOrder
        created_at?: SortOrder
        trip_invoice_id?: SortOrder
    }

    export type tb_payment_historySumOrderByAggregateInput = {
        pay_hist_id?: SortOrder
        pay_status_id?: SortOrder
        trip_invoice_id?: SortOrder
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

    export type UuidFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>
        in?: string[] | ListStringFieldRefInput<$PrismaModel>
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
        lt?: string | StringFieldRefInput<$PrismaModel>
        lte?: string | StringFieldRefInput<$PrismaModel>
        gt?: string | StringFieldRefInput<$PrismaModel>
        gte?: string | StringFieldRefInput<$PrismaModel>
        mode?: QueryMode
        not?: NestedUuidFilter<$PrismaModel> | string
    }

    export type Tb_destinationScalarRelationFilter = {
        is?: tb_destinationWhereInput
        isNot?: tb_destinationWhereInput
    }

    export type Tb_trip_statusNullableScalarRelationFilter = {
        is?: tb_trip_statusWhereInput | null
        isNot?: tb_trip_statusWhereInput | null
    }

    export type Tb_userScalarRelationFilter = {
        is?: tb_userWhereInput
        isNot?: tb_userWhereInput
    }

    export type tb_tripCountOrderByAggregateInput = {
        trip_id?: SortOrder
        user_id?: SortOrder
        destination_id?: SortOrder
        start_time?: SortOrder
        end_time?: SortOrder
        created_at?: SortOrder
        updated_at?: SortOrder
        trip_status?: SortOrder
        schedule_at?: SortOrder
        created_by?: SortOrder
        updated_by?: SortOrder
    }

    export type tb_tripAvgOrderByAggregateInput = {
        trip_id?: SortOrder
        destination_id?: SortOrder
        trip_status?: SortOrder
    }

    export type tb_tripMaxOrderByAggregateInput = {
        trip_id?: SortOrder
        user_id?: SortOrder
        destination_id?: SortOrder
        start_time?: SortOrder
        end_time?: SortOrder
        created_at?: SortOrder
        updated_at?: SortOrder
        trip_status?: SortOrder
        schedule_at?: SortOrder
        created_by?: SortOrder
        updated_by?: SortOrder
    }

    export type tb_tripMinOrderByAggregateInput = {
        trip_id?: SortOrder
        user_id?: SortOrder
        destination_id?: SortOrder
        start_time?: SortOrder
        end_time?: SortOrder
        created_at?: SortOrder
        updated_at?: SortOrder
        trip_status?: SortOrder
        schedule_at?: SortOrder
        created_by?: SortOrder
        updated_by?: SortOrder
    }

    export type tb_tripSumOrderByAggregateInput = {
        trip_id?: SortOrder
        destination_id?: SortOrder
        trip_status?: SortOrder
    }

    export type UuidWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>
        in?: string[] | ListStringFieldRefInput<$PrismaModel>
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
        lt?: string | StringFieldRefInput<$PrismaModel>
        lte?: string | StringFieldRefInput<$PrismaModel>
        gt?: string | StringFieldRefInput<$PrismaModel>
        gte?: string | StringFieldRefInput<$PrismaModel>
        mode?: QueryMode
        not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedStringFilter<$PrismaModel>
        _max?: NestedStringFilter<$PrismaModel>
    }

    export type Tb_payment_typeNullableScalarRelationFilter = {
        is?: tb_payment_typeWhereInput | null
        isNot?: tb_payment_typeWhereInput | null
    }

    export type Tb_tripNullableScalarRelationFilter = {
        is?: tb_tripWhereInput | null
        isNot?: tb_tripWhereInput | null
    }

    export type tb_trip_invoiceCountOrderByAggregateInput = {
        trip_invoice_id?: SortOrder
        invoice_no?: SortOrder
        quantity?: SortOrder
        total_amount?: SortOrder
        pay_type_id?: SortOrder
        trip_id?: SortOrder
    }

    export type tb_trip_invoiceAvgOrderByAggregateInput = {
        trip_invoice_id?: SortOrder
        quantity?: SortOrder
        total_amount?: SortOrder
        pay_type_id?: SortOrder
        trip_id?: SortOrder
    }

    export type tb_trip_invoiceMaxOrderByAggregateInput = {
        trip_invoice_id?: SortOrder
        invoice_no?: SortOrder
        quantity?: SortOrder
        total_amount?: SortOrder
        pay_type_id?: SortOrder
        trip_id?: SortOrder
    }

    export type tb_trip_invoiceMinOrderByAggregateInput = {
        trip_invoice_id?: SortOrder
        invoice_no?: SortOrder
        quantity?: SortOrder
        total_amount?: SortOrder
        pay_type_id?: SortOrder
        trip_id?: SortOrder
    }

    export type tb_trip_invoiceSumOrderByAggregateInput = {
        trip_invoice_id?: SortOrder
        quantity?: SortOrder
        total_amount?: SortOrder
        pay_type_id?: SortOrder
        trip_id?: SortOrder
    }

    export type UuidNullableFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null
        in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
        lt?: string | StringFieldRefInput<$PrismaModel>
        lte?: string | StringFieldRefInput<$PrismaModel>
        gt?: string | StringFieldRefInput<$PrismaModel>
        gte?: string | StringFieldRefInput<$PrismaModel>
        mode?: QueryMode
        not?: NestedUuidNullableFilter<$PrismaModel> | string | null
    }

    export type Tb_roleScalarRelationFilter = {
        is?: tb_roleWhereInput
        isNot?: tb_roleWhereInput
    }

    export type tb_userCountOrderByAggregateInput = {
        user_id?: SortOrder
        name?: SortOrder
        email?: SortOrder
        password?: SortOrder
        role_id?: SortOrder
        created_at?: SortOrder
        created_by?: SortOrder
        updated_by?: SortOrder
        is_active?: SortOrder
    }

    export type tb_userAvgOrderByAggregateInput = {
        role_id?: SortOrder
    }

    export type tb_userMaxOrderByAggregateInput = {
        user_id?: SortOrder
        name?: SortOrder
        email?: SortOrder
        password?: SortOrder
        role_id?: SortOrder
        created_at?: SortOrder
        created_by?: SortOrder
        updated_by?: SortOrder
        is_active?: SortOrder
    }

    export type tb_userMinOrderByAggregateInput = {
        user_id?: SortOrder
        name?: SortOrder
        email?: SortOrder
        password?: SortOrder
        role_id?: SortOrder
        created_at?: SortOrder
        created_by?: SortOrder
        updated_by?: SortOrder
        is_active?: SortOrder
    }

    export type tb_userSumOrderByAggregateInput = {
        role_id?: SortOrder
    }

    export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null
        in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
        lt?: string | StringFieldRefInput<$PrismaModel>
        lte?: string | StringFieldRefInput<$PrismaModel>
        gt?: string | StringFieldRefInput<$PrismaModel>
        gte?: string | StringFieldRefInput<$PrismaModel>
        mode?: QueryMode
        not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
        _count?: NestedIntNullableFilter<$PrismaModel>
        _min?: NestedStringNullableFilter<$PrismaModel>
        _max?: NestedStringNullableFilter<$PrismaModel>
    }

    export type tb_destinationCreatedestinationsInput = {
        set: string[]
    }

    export type tb_tripCreateNestedManyWithoutTb_destinationInput = {
        create?:
            | XOR<tb_tripCreateWithoutTb_destinationInput, tb_tripUncheckedCreateWithoutTb_destinationInput>
            | tb_tripCreateWithoutTb_destinationInput[]
            | tb_tripUncheckedCreateWithoutTb_destinationInput[]
        connectOrCreate?:
            | tb_tripCreateOrConnectWithoutTb_destinationInput
            | tb_tripCreateOrConnectWithoutTb_destinationInput[]
        createMany?: tb_tripCreateManyTb_destinationInputEnvelope
        connect?: tb_tripWhereUniqueInput | tb_tripWhereUniqueInput[]
    }

    export type tb_tripUncheckedCreateNestedManyWithoutTb_destinationInput = {
        create?:
            | XOR<tb_tripCreateWithoutTb_destinationInput, tb_tripUncheckedCreateWithoutTb_destinationInput>
            | tb_tripCreateWithoutTb_destinationInput[]
            | tb_tripUncheckedCreateWithoutTb_destinationInput[]
        connectOrCreate?:
            | tb_tripCreateOrConnectWithoutTb_destinationInput
            | tb_tripCreateOrConnectWithoutTb_destinationInput[]
        createMany?: tb_tripCreateManyTb_destinationInputEnvelope
        connect?: tb_tripWhereUniqueInput | tb_tripWhereUniqueInput[]
    }

    export type BigIntFieldUpdateOperationsInput = {
        set?: bigint | number
        increment?: bigint | number
        decrement?: bigint | number
        multiply?: bigint | number
        divide?: bigint | number
    }

    export type NullableStringFieldUpdateOperationsInput = {
        set?: string | null
    }

    export type tb_destinationUpdatedestinationsInput = {
        set?: string[]
        push?: string | string[]
    }

    export type NullableBigIntFieldUpdateOperationsInput = {
        set?: bigint | number | null
        increment?: bigint | number
        decrement?: bigint | number
        multiply?: bigint | number
        divide?: bigint | number
    }

    export type NullableBoolFieldUpdateOperationsInput = {
        set?: boolean | null
    }

    export type NullableDecimalFieldUpdateOperationsInput = {
        set?: Decimal | DecimalJsLike | number | string | null
        increment?: Decimal | DecimalJsLike | number | string
        decrement?: Decimal | DecimalJsLike | number | string
        multiply?: Decimal | DecimalJsLike | number | string
        divide?: Decimal | DecimalJsLike | number | string
    }

    export type tb_tripUpdateManyWithoutTb_destinationNestedInput = {
        create?:
            | XOR<tb_tripCreateWithoutTb_destinationInput, tb_tripUncheckedCreateWithoutTb_destinationInput>
            | tb_tripCreateWithoutTb_destinationInput[]
            | tb_tripUncheckedCreateWithoutTb_destinationInput[]
        connectOrCreate?:
            | tb_tripCreateOrConnectWithoutTb_destinationInput
            | tb_tripCreateOrConnectWithoutTb_destinationInput[]
        upsert?:
            | tb_tripUpsertWithWhereUniqueWithoutTb_destinationInput
            | tb_tripUpsertWithWhereUniqueWithoutTb_destinationInput[]
        createMany?: tb_tripCreateManyTb_destinationInputEnvelope
        set?: tb_tripWhereUniqueInput | tb_tripWhereUniqueInput[]
        disconnect?: tb_tripWhereUniqueInput | tb_tripWhereUniqueInput[]
        delete?: tb_tripWhereUniqueInput | tb_tripWhereUniqueInput[]
        connect?: tb_tripWhereUniqueInput | tb_tripWhereUniqueInput[]
        update?:
            | tb_tripUpdateWithWhereUniqueWithoutTb_destinationInput
            | tb_tripUpdateWithWhereUniqueWithoutTb_destinationInput[]
        updateMany?:
            | tb_tripUpdateManyWithWhereWithoutTb_destinationInput
            | tb_tripUpdateManyWithWhereWithoutTb_destinationInput[]
        deleteMany?: tb_tripScalarWhereInput | tb_tripScalarWhereInput[]
    }

    export type tb_tripUncheckedUpdateManyWithoutTb_destinationNestedInput = {
        create?:
            | XOR<tb_tripCreateWithoutTb_destinationInput, tb_tripUncheckedCreateWithoutTb_destinationInput>
            | tb_tripCreateWithoutTb_destinationInput[]
            | tb_tripUncheckedCreateWithoutTb_destinationInput[]
        connectOrCreate?:
            | tb_tripCreateOrConnectWithoutTb_destinationInput
            | tb_tripCreateOrConnectWithoutTb_destinationInput[]
        upsert?:
            | tb_tripUpsertWithWhereUniqueWithoutTb_destinationInput
            | tb_tripUpsertWithWhereUniqueWithoutTb_destinationInput[]
        createMany?: tb_tripCreateManyTb_destinationInputEnvelope
        set?: tb_tripWhereUniqueInput | tb_tripWhereUniqueInput[]
        disconnect?: tb_tripWhereUniqueInput | tb_tripWhereUniqueInput[]
        delete?: tb_tripWhereUniqueInput | tb_tripWhereUniqueInput[]
        connect?: tb_tripWhereUniqueInput | tb_tripWhereUniqueInput[]
        update?:
            | tb_tripUpdateWithWhereUniqueWithoutTb_destinationInput
            | tb_tripUpdateWithWhereUniqueWithoutTb_destinationInput[]
        updateMany?:
            | tb_tripUpdateManyWithWhereWithoutTb_destinationInput
            | tb_tripUpdateManyWithWhereWithoutTb_destinationInput[]
        deleteMany?: tb_tripScalarWhereInput | tb_tripScalarWhereInput[]
    }

    export type tb_payment_historyCreateNestedManyWithoutTb_payment_statusInput = {
        create?:
            | XOR<
                  tb_payment_historyCreateWithoutTb_payment_statusInput,
                  tb_payment_historyUncheckedCreateWithoutTb_payment_statusInput
              >
            | tb_payment_historyCreateWithoutTb_payment_statusInput[]
            | tb_payment_historyUncheckedCreateWithoutTb_payment_statusInput[]
        connectOrCreate?:
            | tb_payment_historyCreateOrConnectWithoutTb_payment_statusInput
            | tb_payment_historyCreateOrConnectWithoutTb_payment_statusInput[]
        createMany?: tb_payment_historyCreateManyTb_payment_statusInputEnvelope
        connect?: tb_payment_historyWhereUniqueInput | tb_payment_historyWhereUniqueInput[]
    }

    export type tb_payment_historyUncheckedCreateNestedManyWithoutTb_payment_statusInput = {
        create?:
            | XOR<
                  tb_payment_historyCreateWithoutTb_payment_statusInput,
                  tb_payment_historyUncheckedCreateWithoutTb_payment_statusInput
              >
            | tb_payment_historyCreateWithoutTb_payment_statusInput[]
            | tb_payment_historyUncheckedCreateWithoutTb_payment_statusInput[]
        connectOrCreate?:
            | tb_payment_historyCreateOrConnectWithoutTb_payment_statusInput
            | tb_payment_historyCreateOrConnectWithoutTb_payment_statusInput[]
        createMany?: tb_payment_historyCreateManyTb_payment_statusInputEnvelope
        connect?: tb_payment_historyWhereUniqueInput | tb_payment_historyWhereUniqueInput[]
    }

    export type tb_payment_historyUpdateManyWithoutTb_payment_statusNestedInput = {
        create?:
            | XOR<
                  tb_payment_historyCreateWithoutTb_payment_statusInput,
                  tb_payment_historyUncheckedCreateWithoutTb_payment_statusInput
              >
            | tb_payment_historyCreateWithoutTb_payment_statusInput[]
            | tb_payment_historyUncheckedCreateWithoutTb_payment_statusInput[]
        connectOrCreate?:
            | tb_payment_historyCreateOrConnectWithoutTb_payment_statusInput
            | tb_payment_historyCreateOrConnectWithoutTb_payment_statusInput[]
        upsert?:
            | tb_payment_historyUpsertWithWhereUniqueWithoutTb_payment_statusInput
            | tb_payment_historyUpsertWithWhereUniqueWithoutTb_payment_statusInput[]
        createMany?: tb_payment_historyCreateManyTb_payment_statusInputEnvelope
        set?: tb_payment_historyWhereUniqueInput | tb_payment_historyWhereUniqueInput[]
        disconnect?: tb_payment_historyWhereUniqueInput | tb_payment_historyWhereUniqueInput[]
        delete?: tb_payment_historyWhereUniqueInput | tb_payment_historyWhereUniqueInput[]
        connect?: tb_payment_historyWhereUniqueInput | tb_payment_historyWhereUniqueInput[]
        update?:
            | tb_payment_historyUpdateWithWhereUniqueWithoutTb_payment_statusInput
            | tb_payment_historyUpdateWithWhereUniqueWithoutTb_payment_statusInput[]
        updateMany?:
            | tb_payment_historyUpdateManyWithWhereWithoutTb_payment_statusInput
            | tb_payment_historyUpdateManyWithWhereWithoutTb_payment_statusInput[]
        deleteMany?: tb_payment_historyScalarWhereInput | tb_payment_historyScalarWhereInput[]
    }

    export type tb_payment_historyUncheckedUpdateManyWithoutTb_payment_statusNestedInput = {
        create?:
            | XOR<
                  tb_payment_historyCreateWithoutTb_payment_statusInput,
                  tb_payment_historyUncheckedCreateWithoutTb_payment_statusInput
              >
            | tb_payment_historyCreateWithoutTb_payment_statusInput[]
            | tb_payment_historyUncheckedCreateWithoutTb_payment_statusInput[]
        connectOrCreate?:
            | tb_payment_historyCreateOrConnectWithoutTb_payment_statusInput
            | tb_payment_historyCreateOrConnectWithoutTb_payment_statusInput[]
        upsert?:
            | tb_payment_historyUpsertWithWhereUniqueWithoutTb_payment_statusInput
            | tb_payment_historyUpsertWithWhereUniqueWithoutTb_payment_statusInput[]
        createMany?: tb_payment_historyCreateManyTb_payment_statusInputEnvelope
        set?: tb_payment_historyWhereUniqueInput | tb_payment_historyWhereUniqueInput[]
        disconnect?: tb_payment_historyWhereUniqueInput | tb_payment_historyWhereUniqueInput[]
        delete?: tb_payment_historyWhereUniqueInput | tb_payment_historyWhereUniqueInput[]
        connect?: tb_payment_historyWhereUniqueInput | tb_payment_historyWhereUniqueInput[]
        update?:
            | tb_payment_historyUpdateWithWhereUniqueWithoutTb_payment_statusInput
            | tb_payment_historyUpdateWithWhereUniqueWithoutTb_payment_statusInput[]
        updateMany?:
            | tb_payment_historyUpdateManyWithWhereWithoutTb_payment_statusInput
            | tb_payment_historyUpdateManyWithWhereWithoutTb_payment_statusInput[]
        deleteMany?: tb_payment_historyScalarWhereInput | tb_payment_historyScalarWhereInput[]
    }

    export type tb_trip_invoiceCreateNestedManyWithoutTb_payment_typeInput = {
        create?:
            | XOR<
                  tb_trip_invoiceCreateWithoutTb_payment_typeInput,
                  tb_trip_invoiceUncheckedCreateWithoutTb_payment_typeInput
              >
            | tb_trip_invoiceCreateWithoutTb_payment_typeInput[]
            | tb_trip_invoiceUncheckedCreateWithoutTb_payment_typeInput[]
        connectOrCreate?:
            | tb_trip_invoiceCreateOrConnectWithoutTb_payment_typeInput
            | tb_trip_invoiceCreateOrConnectWithoutTb_payment_typeInput[]
        createMany?: tb_trip_invoiceCreateManyTb_payment_typeInputEnvelope
        connect?: tb_trip_invoiceWhereUniqueInput | tb_trip_invoiceWhereUniqueInput[]
    }

    export type tb_trip_invoiceUncheckedCreateNestedManyWithoutTb_payment_typeInput = {
        create?:
            | XOR<
                  tb_trip_invoiceCreateWithoutTb_payment_typeInput,
                  tb_trip_invoiceUncheckedCreateWithoutTb_payment_typeInput
              >
            | tb_trip_invoiceCreateWithoutTb_payment_typeInput[]
            | tb_trip_invoiceUncheckedCreateWithoutTb_payment_typeInput[]
        connectOrCreate?:
            | tb_trip_invoiceCreateOrConnectWithoutTb_payment_typeInput
            | tb_trip_invoiceCreateOrConnectWithoutTb_payment_typeInput[]
        createMany?: tb_trip_invoiceCreateManyTb_payment_typeInputEnvelope
        connect?: tb_trip_invoiceWhereUniqueInput | tb_trip_invoiceWhereUniqueInput[]
    }

    export type tb_trip_invoiceUpdateManyWithoutTb_payment_typeNestedInput = {
        create?:
            | XOR<
                  tb_trip_invoiceCreateWithoutTb_payment_typeInput,
                  tb_trip_invoiceUncheckedCreateWithoutTb_payment_typeInput
              >
            | tb_trip_invoiceCreateWithoutTb_payment_typeInput[]
            | tb_trip_invoiceUncheckedCreateWithoutTb_payment_typeInput[]
        connectOrCreate?:
            | tb_trip_invoiceCreateOrConnectWithoutTb_payment_typeInput
            | tb_trip_invoiceCreateOrConnectWithoutTb_payment_typeInput[]
        upsert?:
            | tb_trip_invoiceUpsertWithWhereUniqueWithoutTb_payment_typeInput
            | tb_trip_invoiceUpsertWithWhereUniqueWithoutTb_payment_typeInput[]
        createMany?: tb_trip_invoiceCreateManyTb_payment_typeInputEnvelope
        set?: tb_trip_invoiceWhereUniqueInput | tb_trip_invoiceWhereUniqueInput[]
        disconnect?: tb_trip_invoiceWhereUniqueInput | tb_trip_invoiceWhereUniqueInput[]
        delete?: tb_trip_invoiceWhereUniqueInput | tb_trip_invoiceWhereUniqueInput[]
        connect?: tb_trip_invoiceWhereUniqueInput | tb_trip_invoiceWhereUniqueInput[]
        update?:
            | tb_trip_invoiceUpdateWithWhereUniqueWithoutTb_payment_typeInput
            | tb_trip_invoiceUpdateWithWhereUniqueWithoutTb_payment_typeInput[]
        updateMany?:
            | tb_trip_invoiceUpdateManyWithWhereWithoutTb_payment_typeInput
            | tb_trip_invoiceUpdateManyWithWhereWithoutTb_payment_typeInput[]
        deleteMany?: tb_trip_invoiceScalarWhereInput | tb_trip_invoiceScalarWhereInput[]
    }

    export type tb_trip_invoiceUncheckedUpdateManyWithoutTb_payment_typeNestedInput = {
        create?:
            | XOR<
                  tb_trip_invoiceCreateWithoutTb_payment_typeInput,
                  tb_trip_invoiceUncheckedCreateWithoutTb_payment_typeInput
              >
            | tb_trip_invoiceCreateWithoutTb_payment_typeInput[]
            | tb_trip_invoiceUncheckedCreateWithoutTb_payment_typeInput[]
        connectOrCreate?:
            | tb_trip_invoiceCreateOrConnectWithoutTb_payment_typeInput
            | tb_trip_invoiceCreateOrConnectWithoutTb_payment_typeInput[]
        upsert?:
            | tb_trip_invoiceUpsertWithWhereUniqueWithoutTb_payment_typeInput
            | tb_trip_invoiceUpsertWithWhereUniqueWithoutTb_payment_typeInput[]
        createMany?: tb_trip_invoiceCreateManyTb_payment_typeInputEnvelope
        set?: tb_trip_invoiceWhereUniqueInput | tb_trip_invoiceWhereUniqueInput[]
        disconnect?: tb_trip_invoiceWhereUniqueInput | tb_trip_invoiceWhereUniqueInput[]
        delete?: tb_trip_invoiceWhereUniqueInput | tb_trip_invoiceWhereUniqueInput[]
        connect?: tb_trip_invoiceWhereUniqueInput | tb_trip_invoiceWhereUniqueInput[]
        update?:
            | tb_trip_invoiceUpdateWithWhereUniqueWithoutTb_payment_typeInput
            | tb_trip_invoiceUpdateWithWhereUniqueWithoutTb_payment_typeInput[]
        updateMany?:
            | tb_trip_invoiceUpdateManyWithWhereWithoutTb_payment_typeInput
            | tb_trip_invoiceUpdateManyWithWhereWithoutTb_payment_typeInput[]
        deleteMany?: tb_trip_invoiceScalarWhereInput | tb_trip_invoiceScalarWhereInput[]
    }

    export type tb_userCreateNestedManyWithoutTb_roleInput = {
        create?:
            | XOR<tb_userCreateWithoutTb_roleInput, tb_userUncheckedCreateWithoutTb_roleInput>
            | tb_userCreateWithoutTb_roleInput[]
            | tb_userUncheckedCreateWithoutTb_roleInput[]
        connectOrCreate?: tb_userCreateOrConnectWithoutTb_roleInput | tb_userCreateOrConnectWithoutTb_roleInput[]
        createMany?: tb_userCreateManyTb_roleInputEnvelope
        connect?: tb_userWhereUniqueInput | tb_userWhereUniqueInput[]
    }

    export type tb_userUncheckedCreateNestedManyWithoutTb_roleInput = {
        create?:
            | XOR<tb_userCreateWithoutTb_roleInput, tb_userUncheckedCreateWithoutTb_roleInput>
            | tb_userCreateWithoutTb_roleInput[]
            | tb_userUncheckedCreateWithoutTb_roleInput[]
        connectOrCreate?: tb_userCreateOrConnectWithoutTb_roleInput | tb_userCreateOrConnectWithoutTb_roleInput[]
        createMany?: tb_userCreateManyTb_roleInputEnvelope
        connect?: tb_userWhereUniqueInput | tb_userWhereUniqueInput[]
    }

    export type StringFieldUpdateOperationsInput = {
        set?: string
    }

    export type tb_userUpdateManyWithoutTb_roleNestedInput = {
        create?:
            | XOR<tb_userCreateWithoutTb_roleInput, tb_userUncheckedCreateWithoutTb_roleInput>
            | tb_userCreateWithoutTb_roleInput[]
            | tb_userUncheckedCreateWithoutTb_roleInput[]
        connectOrCreate?: tb_userCreateOrConnectWithoutTb_roleInput | tb_userCreateOrConnectWithoutTb_roleInput[]
        upsert?: tb_userUpsertWithWhereUniqueWithoutTb_roleInput | tb_userUpsertWithWhereUniqueWithoutTb_roleInput[]
        createMany?: tb_userCreateManyTb_roleInputEnvelope
        set?: tb_userWhereUniqueInput | tb_userWhereUniqueInput[]
        disconnect?: tb_userWhereUniqueInput | tb_userWhereUniqueInput[]
        delete?: tb_userWhereUniqueInput | tb_userWhereUniqueInput[]
        connect?: tb_userWhereUniqueInput | tb_userWhereUniqueInput[]
        update?: tb_userUpdateWithWhereUniqueWithoutTb_roleInput | tb_userUpdateWithWhereUniqueWithoutTb_roleInput[]
        updateMany?: tb_userUpdateManyWithWhereWithoutTb_roleInput | tb_userUpdateManyWithWhereWithoutTb_roleInput[]
        deleteMany?: tb_userScalarWhereInput | tb_userScalarWhereInput[]
    }

    export type IntFieldUpdateOperationsInput = {
        set?: number
        increment?: number
        decrement?: number
        multiply?: number
        divide?: number
    }

    export type tb_userUncheckedUpdateManyWithoutTb_roleNestedInput = {
        create?:
            | XOR<tb_userCreateWithoutTb_roleInput, tb_userUncheckedCreateWithoutTb_roleInput>
            | tb_userCreateWithoutTb_roleInput[]
            | tb_userUncheckedCreateWithoutTb_roleInput[]
        connectOrCreate?: tb_userCreateOrConnectWithoutTb_roleInput | tb_userCreateOrConnectWithoutTb_roleInput[]
        upsert?: tb_userUpsertWithWhereUniqueWithoutTb_roleInput | tb_userUpsertWithWhereUniqueWithoutTb_roleInput[]
        createMany?: tb_userCreateManyTb_roleInputEnvelope
        set?: tb_userWhereUniqueInput | tb_userWhereUniqueInput[]
        disconnect?: tb_userWhereUniqueInput | tb_userWhereUniqueInput[]
        delete?: tb_userWhereUniqueInput | tb_userWhereUniqueInput[]
        connect?: tb_userWhereUniqueInput | tb_userWhereUniqueInput[]
        update?: tb_userUpdateWithWhereUniqueWithoutTb_roleInput | tb_userUpdateWithWhereUniqueWithoutTb_roleInput[]
        updateMany?: tb_userUpdateManyWithWhereWithoutTb_roleInput | tb_userUpdateManyWithWhereWithoutTb_roleInput[]
        deleteMany?: tb_userScalarWhereInput | tb_userScalarWhereInput[]
    }

    export type tb_tripCreateNestedManyWithoutTb_trip_statusInput = {
        create?:
            | XOR<tb_tripCreateWithoutTb_trip_statusInput, tb_tripUncheckedCreateWithoutTb_trip_statusInput>
            | tb_tripCreateWithoutTb_trip_statusInput[]
            | tb_tripUncheckedCreateWithoutTb_trip_statusInput[]
        connectOrCreate?:
            | tb_tripCreateOrConnectWithoutTb_trip_statusInput
            | tb_tripCreateOrConnectWithoutTb_trip_statusInput[]
        createMany?: tb_tripCreateManyTb_trip_statusInputEnvelope
        connect?: tb_tripWhereUniqueInput | tb_tripWhereUniqueInput[]
    }

    export type tb_tripUncheckedCreateNestedManyWithoutTb_trip_statusInput = {
        create?:
            | XOR<tb_tripCreateWithoutTb_trip_statusInput, tb_tripUncheckedCreateWithoutTb_trip_statusInput>
            | tb_tripCreateWithoutTb_trip_statusInput[]
            | tb_tripUncheckedCreateWithoutTb_trip_statusInput[]
        connectOrCreate?:
            | tb_tripCreateOrConnectWithoutTb_trip_statusInput
            | tb_tripCreateOrConnectWithoutTb_trip_statusInput[]
        createMany?: tb_tripCreateManyTb_trip_statusInputEnvelope
        connect?: tb_tripWhereUniqueInput | tb_tripWhereUniqueInput[]
    }

    export type tb_tripUpdateManyWithoutTb_trip_statusNestedInput = {
        create?:
            | XOR<tb_tripCreateWithoutTb_trip_statusInput, tb_tripUncheckedCreateWithoutTb_trip_statusInput>
            | tb_tripCreateWithoutTb_trip_statusInput[]
            | tb_tripUncheckedCreateWithoutTb_trip_statusInput[]
        connectOrCreate?:
            | tb_tripCreateOrConnectWithoutTb_trip_statusInput
            | tb_tripCreateOrConnectWithoutTb_trip_statusInput[]
        upsert?:
            | tb_tripUpsertWithWhereUniqueWithoutTb_trip_statusInput
            | tb_tripUpsertWithWhereUniqueWithoutTb_trip_statusInput[]
        createMany?: tb_tripCreateManyTb_trip_statusInputEnvelope
        set?: tb_tripWhereUniqueInput | tb_tripWhereUniqueInput[]
        disconnect?: tb_tripWhereUniqueInput | tb_tripWhereUniqueInput[]
        delete?: tb_tripWhereUniqueInput | tb_tripWhereUniqueInput[]
        connect?: tb_tripWhereUniqueInput | tb_tripWhereUniqueInput[]
        update?:
            | tb_tripUpdateWithWhereUniqueWithoutTb_trip_statusInput
            | tb_tripUpdateWithWhereUniqueWithoutTb_trip_statusInput[]
        updateMany?:
            | tb_tripUpdateManyWithWhereWithoutTb_trip_statusInput
            | tb_tripUpdateManyWithWhereWithoutTb_trip_statusInput[]
        deleteMany?: tb_tripScalarWhereInput | tb_tripScalarWhereInput[]
    }

    export type tb_tripUncheckedUpdateManyWithoutTb_trip_statusNestedInput = {
        create?:
            | XOR<tb_tripCreateWithoutTb_trip_statusInput, tb_tripUncheckedCreateWithoutTb_trip_statusInput>
            | tb_tripCreateWithoutTb_trip_statusInput[]
            | tb_tripUncheckedCreateWithoutTb_trip_statusInput[]
        connectOrCreate?:
            | tb_tripCreateOrConnectWithoutTb_trip_statusInput
            | tb_tripCreateOrConnectWithoutTb_trip_statusInput[]
        upsert?:
            | tb_tripUpsertWithWhereUniqueWithoutTb_trip_statusInput
            | tb_tripUpsertWithWhereUniqueWithoutTb_trip_statusInput[]
        createMany?: tb_tripCreateManyTb_trip_statusInputEnvelope
        set?: tb_tripWhereUniqueInput | tb_tripWhereUniqueInput[]
        disconnect?: tb_tripWhereUniqueInput | tb_tripWhereUniqueInput[]
        delete?: tb_tripWhereUniqueInput | tb_tripWhereUniqueInput[]
        connect?: tb_tripWhereUniqueInput | tb_tripWhereUniqueInput[]
        update?:
            | tb_tripUpdateWithWhereUniqueWithoutTb_trip_statusInput
            | tb_tripUpdateWithWhereUniqueWithoutTb_trip_statusInput[]
        updateMany?:
            | tb_tripUpdateManyWithWhereWithoutTb_trip_statusInput
            | tb_tripUpdateManyWithWhereWithoutTb_trip_statusInput[]
        deleteMany?: tb_tripScalarWhereInput | tb_tripScalarWhereInput[]
    }

    export type tb_payment_statusCreateNestedOneWithoutTb_payment_historyInput = {
        create?: XOR<
            tb_payment_statusCreateWithoutTb_payment_historyInput,
            tb_payment_statusUncheckedCreateWithoutTb_payment_historyInput
        >
        connectOrCreate?: tb_payment_statusCreateOrConnectWithoutTb_payment_historyInput
        connect?: tb_payment_statusWhereUniqueInput
    }

    export type tb_trip_invoiceCreateNestedOneWithoutTb_payment_historyInput = {
        create?: XOR<
            tb_trip_invoiceCreateWithoutTb_payment_historyInput,
            tb_trip_invoiceUncheckedCreateWithoutTb_payment_historyInput
        >
        connectOrCreate?: tb_trip_invoiceCreateOrConnectWithoutTb_payment_historyInput
        connect?: tb_trip_invoiceWhereUniqueInput
    }

    export type NullableDateTimeFieldUpdateOperationsInput = {
        set?: Date | string | null
    }

    export type tb_payment_statusUpdateOneWithoutTb_payment_historyNestedInput = {
        create?: XOR<
            tb_payment_statusCreateWithoutTb_payment_historyInput,
            tb_payment_statusUncheckedCreateWithoutTb_payment_historyInput
        >
        connectOrCreate?: tb_payment_statusCreateOrConnectWithoutTb_payment_historyInput
        upsert?: tb_payment_statusUpsertWithoutTb_payment_historyInput
        disconnect?: tb_payment_statusWhereInput | boolean
        delete?: tb_payment_statusWhereInput | boolean
        connect?: tb_payment_statusWhereUniqueInput
        update?: XOR<
            XOR<
                tb_payment_statusUpdateToOneWithWhereWithoutTb_payment_historyInput,
                tb_payment_statusUpdateWithoutTb_payment_historyInput
            >,
            tb_payment_statusUncheckedUpdateWithoutTb_payment_historyInput
        >
    }

    export type tb_trip_invoiceUpdateOneWithoutTb_payment_historyNestedInput = {
        create?: XOR<
            tb_trip_invoiceCreateWithoutTb_payment_historyInput,
            tb_trip_invoiceUncheckedCreateWithoutTb_payment_historyInput
        >
        connectOrCreate?: tb_trip_invoiceCreateOrConnectWithoutTb_payment_historyInput
        upsert?: tb_trip_invoiceUpsertWithoutTb_payment_historyInput
        disconnect?: tb_trip_invoiceWhereInput | boolean
        delete?: tb_trip_invoiceWhereInput | boolean
        connect?: tb_trip_invoiceWhereUniqueInput
        update?: XOR<
            XOR<
                tb_trip_invoiceUpdateToOneWithWhereWithoutTb_payment_historyInput,
                tb_trip_invoiceUpdateWithoutTb_payment_historyInput
            >,
            tb_trip_invoiceUncheckedUpdateWithoutTb_payment_historyInput
        >
    }

    export type tb_destinationCreateNestedOneWithoutTb_tripInput = {
        create?: XOR<tb_destinationCreateWithoutTb_tripInput, tb_destinationUncheckedCreateWithoutTb_tripInput>
        connectOrCreate?: tb_destinationCreateOrConnectWithoutTb_tripInput
        connect?: tb_destinationWhereUniqueInput
    }

    export type tb_trip_statusCreateNestedOneWithoutTb_tripInput = {
        create?: XOR<tb_trip_statusCreateWithoutTb_tripInput, tb_trip_statusUncheckedCreateWithoutTb_tripInput>
        connectOrCreate?: tb_trip_statusCreateOrConnectWithoutTb_tripInput
        connect?: tb_trip_statusWhereUniqueInput
    }

    export type tb_userCreateNestedOneWithoutTb_tripInput = {
        create?: XOR<tb_userCreateWithoutTb_tripInput, tb_userUncheckedCreateWithoutTb_tripInput>
        connectOrCreate?: tb_userCreateOrConnectWithoutTb_tripInput
        connect?: tb_userWhereUniqueInput
    }

    export type tb_trip_invoiceCreateNestedManyWithoutTb_tripInput = {
        create?:
            | XOR<tb_trip_invoiceCreateWithoutTb_tripInput, tb_trip_invoiceUncheckedCreateWithoutTb_tripInput>
            | tb_trip_invoiceCreateWithoutTb_tripInput[]
            | tb_trip_invoiceUncheckedCreateWithoutTb_tripInput[]
        connectOrCreate?:
            | tb_trip_invoiceCreateOrConnectWithoutTb_tripInput
            | tb_trip_invoiceCreateOrConnectWithoutTb_tripInput[]
        createMany?: tb_trip_invoiceCreateManyTb_tripInputEnvelope
        connect?: tb_trip_invoiceWhereUniqueInput | tb_trip_invoiceWhereUniqueInput[]
    }

    export type tb_trip_invoiceUncheckedCreateNestedManyWithoutTb_tripInput = {
        create?:
            | XOR<tb_trip_invoiceCreateWithoutTb_tripInput, tb_trip_invoiceUncheckedCreateWithoutTb_tripInput>
            | tb_trip_invoiceCreateWithoutTb_tripInput[]
            | tb_trip_invoiceUncheckedCreateWithoutTb_tripInput[]
        connectOrCreate?:
            | tb_trip_invoiceCreateOrConnectWithoutTb_tripInput
            | tb_trip_invoiceCreateOrConnectWithoutTb_tripInput[]
        createMany?: tb_trip_invoiceCreateManyTb_tripInputEnvelope
        connect?: tb_trip_invoiceWhereUniqueInput | tb_trip_invoiceWhereUniqueInput[]
    }

    export type tb_destinationUpdateOneRequiredWithoutTb_tripNestedInput = {
        create?: XOR<tb_destinationCreateWithoutTb_tripInput, tb_destinationUncheckedCreateWithoutTb_tripInput>
        connectOrCreate?: tb_destinationCreateOrConnectWithoutTb_tripInput
        upsert?: tb_destinationUpsertWithoutTb_tripInput
        connect?: tb_destinationWhereUniqueInput
        update?: XOR<
            XOR<tb_destinationUpdateToOneWithWhereWithoutTb_tripInput, tb_destinationUpdateWithoutTb_tripInput>,
            tb_destinationUncheckedUpdateWithoutTb_tripInput
        >
    }

    export type tb_trip_statusUpdateOneWithoutTb_tripNestedInput = {
        create?: XOR<tb_trip_statusCreateWithoutTb_tripInput, tb_trip_statusUncheckedCreateWithoutTb_tripInput>
        connectOrCreate?: tb_trip_statusCreateOrConnectWithoutTb_tripInput
        upsert?: tb_trip_statusUpsertWithoutTb_tripInput
        disconnect?: tb_trip_statusWhereInput | boolean
        delete?: tb_trip_statusWhereInput | boolean
        connect?: tb_trip_statusWhereUniqueInput
        update?: XOR<
            XOR<tb_trip_statusUpdateToOneWithWhereWithoutTb_tripInput, tb_trip_statusUpdateWithoutTb_tripInput>,
            tb_trip_statusUncheckedUpdateWithoutTb_tripInput
        >
    }

    export type tb_userUpdateOneRequiredWithoutTb_tripNestedInput = {
        create?: XOR<tb_userCreateWithoutTb_tripInput, tb_userUncheckedCreateWithoutTb_tripInput>
        connectOrCreate?: tb_userCreateOrConnectWithoutTb_tripInput
        upsert?: tb_userUpsertWithoutTb_tripInput
        connect?: tb_userWhereUniqueInput
        update?: XOR<
            XOR<tb_userUpdateToOneWithWhereWithoutTb_tripInput, tb_userUpdateWithoutTb_tripInput>,
            tb_userUncheckedUpdateWithoutTb_tripInput
        >
    }

    export type tb_trip_invoiceUpdateManyWithoutTb_tripNestedInput = {
        create?:
            | XOR<tb_trip_invoiceCreateWithoutTb_tripInput, tb_trip_invoiceUncheckedCreateWithoutTb_tripInput>
            | tb_trip_invoiceCreateWithoutTb_tripInput[]
            | tb_trip_invoiceUncheckedCreateWithoutTb_tripInput[]
        connectOrCreate?:
            | tb_trip_invoiceCreateOrConnectWithoutTb_tripInput
            | tb_trip_invoiceCreateOrConnectWithoutTb_tripInput[]
        upsert?:
            | tb_trip_invoiceUpsertWithWhereUniqueWithoutTb_tripInput
            | tb_trip_invoiceUpsertWithWhereUniqueWithoutTb_tripInput[]
        createMany?: tb_trip_invoiceCreateManyTb_tripInputEnvelope
        set?: tb_trip_invoiceWhereUniqueInput | tb_trip_invoiceWhereUniqueInput[]
        disconnect?: tb_trip_invoiceWhereUniqueInput | tb_trip_invoiceWhereUniqueInput[]
        delete?: tb_trip_invoiceWhereUniqueInput | tb_trip_invoiceWhereUniqueInput[]
        connect?: tb_trip_invoiceWhereUniqueInput | tb_trip_invoiceWhereUniqueInput[]
        update?:
            | tb_trip_invoiceUpdateWithWhereUniqueWithoutTb_tripInput
            | tb_trip_invoiceUpdateWithWhereUniqueWithoutTb_tripInput[]
        updateMany?:
            | tb_trip_invoiceUpdateManyWithWhereWithoutTb_tripInput
            | tb_trip_invoiceUpdateManyWithWhereWithoutTb_tripInput[]
        deleteMany?: tb_trip_invoiceScalarWhereInput | tb_trip_invoiceScalarWhereInput[]
    }

    export type tb_trip_invoiceUncheckedUpdateManyWithoutTb_tripNestedInput = {
        create?:
            | XOR<tb_trip_invoiceCreateWithoutTb_tripInput, tb_trip_invoiceUncheckedCreateWithoutTb_tripInput>
            | tb_trip_invoiceCreateWithoutTb_tripInput[]
            | tb_trip_invoiceUncheckedCreateWithoutTb_tripInput[]
        connectOrCreate?:
            | tb_trip_invoiceCreateOrConnectWithoutTb_tripInput
            | tb_trip_invoiceCreateOrConnectWithoutTb_tripInput[]
        upsert?:
            | tb_trip_invoiceUpsertWithWhereUniqueWithoutTb_tripInput
            | tb_trip_invoiceUpsertWithWhereUniqueWithoutTb_tripInput[]
        createMany?: tb_trip_invoiceCreateManyTb_tripInputEnvelope
        set?: tb_trip_invoiceWhereUniqueInput | tb_trip_invoiceWhereUniqueInput[]
        disconnect?: tb_trip_invoiceWhereUniqueInput | tb_trip_invoiceWhereUniqueInput[]
        delete?: tb_trip_invoiceWhereUniqueInput | tb_trip_invoiceWhereUniqueInput[]
        connect?: tb_trip_invoiceWhereUniqueInput | tb_trip_invoiceWhereUniqueInput[]
        update?:
            | tb_trip_invoiceUpdateWithWhereUniqueWithoutTb_tripInput
            | tb_trip_invoiceUpdateWithWhereUniqueWithoutTb_tripInput[]
        updateMany?:
            | tb_trip_invoiceUpdateManyWithWhereWithoutTb_tripInput
            | tb_trip_invoiceUpdateManyWithWhereWithoutTb_tripInput[]
        deleteMany?: tb_trip_invoiceScalarWhereInput | tb_trip_invoiceScalarWhereInput[]
    }

    export type tb_payment_historyCreateNestedManyWithoutTb_trip_invoiceInput = {
        create?:
            | XOR<
                  tb_payment_historyCreateWithoutTb_trip_invoiceInput,
                  tb_payment_historyUncheckedCreateWithoutTb_trip_invoiceInput
              >
            | tb_payment_historyCreateWithoutTb_trip_invoiceInput[]
            | tb_payment_historyUncheckedCreateWithoutTb_trip_invoiceInput[]
        connectOrCreate?:
            | tb_payment_historyCreateOrConnectWithoutTb_trip_invoiceInput
            | tb_payment_historyCreateOrConnectWithoutTb_trip_invoiceInput[]
        createMany?: tb_payment_historyCreateManyTb_trip_invoiceInputEnvelope
        connect?: tb_payment_historyWhereUniqueInput | tb_payment_historyWhereUniqueInput[]
    }

    export type tb_payment_typeCreateNestedOneWithoutTb_trip_invoiceInput = {
        create?: XOR<
            tb_payment_typeCreateWithoutTb_trip_invoiceInput,
            tb_payment_typeUncheckedCreateWithoutTb_trip_invoiceInput
        >
        connectOrCreate?: tb_payment_typeCreateOrConnectWithoutTb_trip_invoiceInput
        connect?: tb_payment_typeWhereUniqueInput
    }

    export type tb_tripCreateNestedOneWithoutTb_trip_invoiceInput = {
        create?: XOR<tb_tripCreateWithoutTb_trip_invoiceInput, tb_tripUncheckedCreateWithoutTb_trip_invoiceInput>
        connectOrCreate?: tb_tripCreateOrConnectWithoutTb_trip_invoiceInput
        connect?: tb_tripWhereUniqueInput
    }

    export type tb_payment_historyUncheckedCreateNestedManyWithoutTb_trip_invoiceInput = {
        create?:
            | XOR<
                  tb_payment_historyCreateWithoutTb_trip_invoiceInput,
                  tb_payment_historyUncheckedCreateWithoutTb_trip_invoiceInput
              >
            | tb_payment_historyCreateWithoutTb_trip_invoiceInput[]
            | tb_payment_historyUncheckedCreateWithoutTb_trip_invoiceInput[]
        connectOrCreate?:
            | tb_payment_historyCreateOrConnectWithoutTb_trip_invoiceInput
            | tb_payment_historyCreateOrConnectWithoutTb_trip_invoiceInput[]
        createMany?: tb_payment_historyCreateManyTb_trip_invoiceInputEnvelope
        connect?: tb_payment_historyWhereUniqueInput | tb_payment_historyWhereUniqueInput[]
    }

    export type tb_payment_historyUpdateManyWithoutTb_trip_invoiceNestedInput = {
        create?:
            | XOR<
                  tb_payment_historyCreateWithoutTb_trip_invoiceInput,
                  tb_payment_historyUncheckedCreateWithoutTb_trip_invoiceInput
              >
            | tb_payment_historyCreateWithoutTb_trip_invoiceInput[]
            | tb_payment_historyUncheckedCreateWithoutTb_trip_invoiceInput[]
        connectOrCreate?:
            | tb_payment_historyCreateOrConnectWithoutTb_trip_invoiceInput
            | tb_payment_historyCreateOrConnectWithoutTb_trip_invoiceInput[]
        upsert?:
            | tb_payment_historyUpsertWithWhereUniqueWithoutTb_trip_invoiceInput
            | tb_payment_historyUpsertWithWhereUniqueWithoutTb_trip_invoiceInput[]
        createMany?: tb_payment_historyCreateManyTb_trip_invoiceInputEnvelope
        set?: tb_payment_historyWhereUniqueInput | tb_payment_historyWhereUniqueInput[]
        disconnect?: tb_payment_historyWhereUniqueInput | tb_payment_historyWhereUniqueInput[]
        delete?: tb_payment_historyWhereUniqueInput | tb_payment_historyWhereUniqueInput[]
        connect?: tb_payment_historyWhereUniqueInput | tb_payment_historyWhereUniqueInput[]
        update?:
            | tb_payment_historyUpdateWithWhereUniqueWithoutTb_trip_invoiceInput
            | tb_payment_historyUpdateWithWhereUniqueWithoutTb_trip_invoiceInput[]
        updateMany?:
            | tb_payment_historyUpdateManyWithWhereWithoutTb_trip_invoiceInput
            | tb_payment_historyUpdateManyWithWhereWithoutTb_trip_invoiceInput[]
        deleteMany?: tb_payment_historyScalarWhereInput | tb_payment_historyScalarWhereInput[]
    }

    export type tb_payment_typeUpdateOneWithoutTb_trip_invoiceNestedInput = {
        create?: XOR<
            tb_payment_typeCreateWithoutTb_trip_invoiceInput,
            tb_payment_typeUncheckedCreateWithoutTb_trip_invoiceInput
        >
        connectOrCreate?: tb_payment_typeCreateOrConnectWithoutTb_trip_invoiceInput
        upsert?: tb_payment_typeUpsertWithoutTb_trip_invoiceInput
        disconnect?: tb_payment_typeWhereInput | boolean
        delete?: tb_payment_typeWhereInput | boolean
        connect?: tb_payment_typeWhereUniqueInput
        update?: XOR<
            XOR<
                tb_payment_typeUpdateToOneWithWhereWithoutTb_trip_invoiceInput,
                tb_payment_typeUpdateWithoutTb_trip_invoiceInput
            >,
            tb_payment_typeUncheckedUpdateWithoutTb_trip_invoiceInput
        >
    }

    export type tb_tripUpdateOneWithoutTb_trip_invoiceNestedInput = {
        create?: XOR<tb_tripCreateWithoutTb_trip_invoiceInput, tb_tripUncheckedCreateWithoutTb_trip_invoiceInput>
        connectOrCreate?: tb_tripCreateOrConnectWithoutTb_trip_invoiceInput
        upsert?: tb_tripUpsertWithoutTb_trip_invoiceInput
        disconnect?: tb_tripWhereInput | boolean
        delete?: tb_tripWhereInput | boolean
        connect?: tb_tripWhereUniqueInput
        update?: XOR<
            XOR<tb_tripUpdateToOneWithWhereWithoutTb_trip_invoiceInput, tb_tripUpdateWithoutTb_trip_invoiceInput>,
            tb_tripUncheckedUpdateWithoutTb_trip_invoiceInput
        >
    }

    export type tb_payment_historyUncheckedUpdateManyWithoutTb_trip_invoiceNestedInput = {
        create?:
            | XOR<
                  tb_payment_historyCreateWithoutTb_trip_invoiceInput,
                  tb_payment_historyUncheckedCreateWithoutTb_trip_invoiceInput
              >
            | tb_payment_historyCreateWithoutTb_trip_invoiceInput[]
            | tb_payment_historyUncheckedCreateWithoutTb_trip_invoiceInput[]
        connectOrCreate?:
            | tb_payment_historyCreateOrConnectWithoutTb_trip_invoiceInput
            | tb_payment_historyCreateOrConnectWithoutTb_trip_invoiceInput[]
        upsert?:
            | tb_payment_historyUpsertWithWhereUniqueWithoutTb_trip_invoiceInput
            | tb_payment_historyUpsertWithWhereUniqueWithoutTb_trip_invoiceInput[]
        createMany?: tb_payment_historyCreateManyTb_trip_invoiceInputEnvelope
        set?: tb_payment_historyWhereUniqueInput | tb_payment_historyWhereUniqueInput[]
        disconnect?: tb_payment_historyWhereUniqueInput | tb_payment_historyWhereUniqueInput[]
        delete?: tb_payment_historyWhereUniqueInput | tb_payment_historyWhereUniqueInput[]
        connect?: tb_payment_historyWhereUniqueInput | tb_payment_historyWhereUniqueInput[]
        update?:
            | tb_payment_historyUpdateWithWhereUniqueWithoutTb_trip_invoiceInput
            | tb_payment_historyUpdateWithWhereUniqueWithoutTb_trip_invoiceInput[]
        updateMany?:
            | tb_payment_historyUpdateManyWithWhereWithoutTb_trip_invoiceInput
            | tb_payment_historyUpdateManyWithWhereWithoutTb_trip_invoiceInput[]
        deleteMany?: tb_payment_historyScalarWhereInput | tb_payment_historyScalarWhereInput[]
    }

    export type tb_tripCreateNestedManyWithoutTb_userInput = {
        create?:
            | XOR<tb_tripCreateWithoutTb_userInput, tb_tripUncheckedCreateWithoutTb_userInput>
            | tb_tripCreateWithoutTb_userInput[]
            | tb_tripUncheckedCreateWithoutTb_userInput[]
        connectOrCreate?: tb_tripCreateOrConnectWithoutTb_userInput | tb_tripCreateOrConnectWithoutTb_userInput[]
        createMany?: tb_tripCreateManyTb_userInputEnvelope
        connect?: tb_tripWhereUniqueInput | tb_tripWhereUniqueInput[]
    }

    export type tb_roleCreateNestedOneWithoutTb_userInput = {
        create?: XOR<tb_roleCreateWithoutTb_userInput, tb_roleUncheckedCreateWithoutTb_userInput>
        connectOrCreate?: tb_roleCreateOrConnectWithoutTb_userInput
        connect?: tb_roleWhereUniqueInput
    }

    export type tb_tripUncheckedCreateNestedManyWithoutTb_userInput = {
        create?:
            | XOR<tb_tripCreateWithoutTb_userInput, tb_tripUncheckedCreateWithoutTb_userInput>
            | tb_tripCreateWithoutTb_userInput[]
            | tb_tripUncheckedCreateWithoutTb_userInput[]
        connectOrCreate?: tb_tripCreateOrConnectWithoutTb_userInput | tb_tripCreateOrConnectWithoutTb_userInput[]
        createMany?: tb_tripCreateManyTb_userInputEnvelope
        connect?: tb_tripWhereUniqueInput | tb_tripWhereUniqueInput[]
    }

    export type tb_tripUpdateManyWithoutTb_userNestedInput = {
        create?:
            | XOR<tb_tripCreateWithoutTb_userInput, tb_tripUncheckedCreateWithoutTb_userInput>
            | tb_tripCreateWithoutTb_userInput[]
            | tb_tripUncheckedCreateWithoutTb_userInput[]
        connectOrCreate?: tb_tripCreateOrConnectWithoutTb_userInput | tb_tripCreateOrConnectWithoutTb_userInput[]
        upsert?: tb_tripUpsertWithWhereUniqueWithoutTb_userInput | tb_tripUpsertWithWhereUniqueWithoutTb_userInput[]
        createMany?: tb_tripCreateManyTb_userInputEnvelope
        set?: tb_tripWhereUniqueInput | tb_tripWhereUniqueInput[]
        disconnect?: tb_tripWhereUniqueInput | tb_tripWhereUniqueInput[]
        delete?: tb_tripWhereUniqueInput | tb_tripWhereUniqueInput[]
        connect?: tb_tripWhereUniqueInput | tb_tripWhereUniqueInput[]
        update?: tb_tripUpdateWithWhereUniqueWithoutTb_userInput | tb_tripUpdateWithWhereUniqueWithoutTb_userInput[]
        updateMany?: tb_tripUpdateManyWithWhereWithoutTb_userInput | tb_tripUpdateManyWithWhereWithoutTb_userInput[]
        deleteMany?: tb_tripScalarWhereInput | tb_tripScalarWhereInput[]
    }

    export type tb_roleUpdateOneRequiredWithoutTb_userNestedInput = {
        create?: XOR<tb_roleCreateWithoutTb_userInput, tb_roleUncheckedCreateWithoutTb_userInput>
        connectOrCreate?: tb_roleCreateOrConnectWithoutTb_userInput
        upsert?: tb_roleUpsertWithoutTb_userInput
        connect?: tb_roleWhereUniqueInput
        update?: XOR<
            XOR<tb_roleUpdateToOneWithWhereWithoutTb_userInput, tb_roleUpdateWithoutTb_userInput>,
            tb_roleUncheckedUpdateWithoutTb_userInput
        >
    }

    export type tb_tripUncheckedUpdateManyWithoutTb_userNestedInput = {
        create?:
            | XOR<tb_tripCreateWithoutTb_userInput, tb_tripUncheckedCreateWithoutTb_userInput>
            | tb_tripCreateWithoutTb_userInput[]
            | tb_tripUncheckedCreateWithoutTb_userInput[]
        connectOrCreate?: tb_tripCreateOrConnectWithoutTb_userInput | tb_tripCreateOrConnectWithoutTb_userInput[]
        upsert?: tb_tripUpsertWithWhereUniqueWithoutTb_userInput | tb_tripUpsertWithWhereUniqueWithoutTb_userInput[]
        createMany?: tb_tripCreateManyTb_userInputEnvelope
        set?: tb_tripWhereUniqueInput | tb_tripWhereUniqueInput[]
        disconnect?: tb_tripWhereUniqueInput | tb_tripWhereUniqueInput[]
        delete?: tb_tripWhereUniqueInput | tb_tripWhereUniqueInput[]
        connect?: tb_tripWhereUniqueInput | tb_tripWhereUniqueInput[]
        update?: tb_tripUpdateWithWhereUniqueWithoutTb_userInput | tb_tripUpdateWithWhereUniqueWithoutTb_userInput[]
        updateMany?: tb_tripUpdateManyWithWhereWithoutTb_userInput | tb_tripUpdateManyWithWhereWithoutTb_userInput[]
        deleteMany?: tb_tripScalarWhereInput | tb_tripScalarWhereInput[]
    }

    export type NestedBigIntFilter<$PrismaModel = never> = {
        equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
        in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
        notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
        lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
        lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
        gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
        gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
        not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

    export type NestedBigIntNullableFilter<$PrismaModel = never> = {
        equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
        in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
        notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
        lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
        lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
        gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
        gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
        not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
    }

    export type NestedBoolNullableFilter<$PrismaModel = never> = {
        equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
        not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
    }

    export type NestedDecimalNullableFilter<$PrismaModel = never> = {
        equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
        in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
        notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
        lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
        lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
        gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
        gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
        not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    }

    export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
        equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
        in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
        notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
        lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
        lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
        gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
        gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
        not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
        _count?: NestedIntFilter<$PrismaModel>
        _avg?: NestedFloatFilter<$PrismaModel>
        _sum?: NestedBigIntFilter<$PrismaModel>
        _min?: NestedBigIntFilter<$PrismaModel>
        _max?: NestedBigIntFilter<$PrismaModel>
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

    export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
        in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
        notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
        lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
        lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
        gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
        gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
        not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
        _count?: NestedIntNullableFilter<$PrismaModel>
        _avg?: NestedFloatNullableFilter<$PrismaModel>
        _sum?: NestedBigIntNullableFilter<$PrismaModel>
        _min?: NestedBigIntNullableFilter<$PrismaModel>
        _max?: NestedBigIntNullableFilter<$PrismaModel>
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

    export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
        not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
        _count?: NestedIntNullableFilter<$PrismaModel>
        _min?: NestedBoolNullableFilter<$PrismaModel>
        _max?: NestedBoolNullableFilter<$PrismaModel>
    }

    export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
        in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
        notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
        lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
        lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
        gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
        gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
        not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
        _count?: NestedIntNullableFilter<$PrismaModel>
        _avg?: NestedDecimalNullableFilter<$PrismaModel>
        _sum?: NestedDecimalNullableFilter<$PrismaModel>
        _min?: NestedDecimalNullableFilter<$PrismaModel>
        _max?: NestedDecimalNullableFilter<$PrismaModel>
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

    export type NestedUuidFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>
        in?: string[] | ListStringFieldRefInput<$PrismaModel>
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
        lt?: string | StringFieldRefInput<$PrismaModel>
        lte?: string | StringFieldRefInput<$PrismaModel>
        gt?: string | StringFieldRefInput<$PrismaModel>
        gte?: string | StringFieldRefInput<$PrismaModel>
        not?: NestedUuidFilter<$PrismaModel> | string
    }

    export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>
        in?: string[] | ListStringFieldRefInput<$PrismaModel>
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
        lt?: string | StringFieldRefInput<$PrismaModel>
        lte?: string | StringFieldRefInput<$PrismaModel>
        gt?: string | StringFieldRefInput<$PrismaModel>
        gte?: string | StringFieldRefInput<$PrismaModel>
        not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedStringFilter<$PrismaModel>
        _max?: NestedStringFilter<$PrismaModel>
    }

    export type NestedUuidNullableFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null
        in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
        lt?: string | StringFieldRefInput<$PrismaModel>
        lte?: string | StringFieldRefInput<$PrismaModel>
        gt?: string | StringFieldRefInput<$PrismaModel>
        gte?: string | StringFieldRefInput<$PrismaModel>
        not?: NestedUuidNullableFilter<$PrismaModel> | string | null
    }

    export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null
        in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
        lt?: string | StringFieldRefInput<$PrismaModel>
        lte?: string | StringFieldRefInput<$PrismaModel>
        gt?: string | StringFieldRefInput<$PrismaModel>
        gte?: string | StringFieldRefInput<$PrismaModel>
        not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
        _count?: NestedIntNullableFilter<$PrismaModel>
        _min?: NestedStringNullableFilter<$PrismaModel>
        _max?: NestedStringNullableFilter<$PrismaModel>
    }

    export type tb_tripCreateWithoutTb_destinationInput = {
        trip_id?: bigint | number
        start_time?: Date | string | null
        end_time?: Date | string | null
        created_at?: Date | string | null
        updated_at?: Date | string | null
        schedule_at?: Date | string | null
        created_by?: string | null
        updated_by?: string | null
        tb_trip_status?: tb_trip_statusCreateNestedOneWithoutTb_tripInput
        tb_user: tb_userCreateNestedOneWithoutTb_tripInput
        tb_trip_invoice?: tb_trip_invoiceCreateNestedManyWithoutTb_tripInput
    }

    export type tb_tripUncheckedCreateWithoutTb_destinationInput = {
        trip_id?: bigint | number
        user_id: string
        start_time?: Date | string | null
        end_time?: Date | string | null
        created_at?: Date | string | null
        updated_at?: Date | string | null
        trip_status?: bigint | number | null
        schedule_at?: Date | string | null
        created_by?: string | null
        updated_by?: string | null
        tb_trip_invoice?: tb_trip_invoiceUncheckedCreateNestedManyWithoutTb_tripInput
    }

    export type tb_tripCreateOrConnectWithoutTb_destinationInput = {
        where: tb_tripWhereUniqueInput
        create: XOR<tb_tripCreateWithoutTb_destinationInput, tb_tripUncheckedCreateWithoutTb_destinationInput>
    }

    export type tb_tripCreateManyTb_destinationInputEnvelope = {
        data: tb_tripCreateManyTb_destinationInput | tb_tripCreateManyTb_destinationInput[]
        skipDuplicates?: boolean
    }

    export type tb_tripUpsertWithWhereUniqueWithoutTb_destinationInput = {
        where: tb_tripWhereUniqueInput
        update: XOR<tb_tripUpdateWithoutTb_destinationInput, tb_tripUncheckedUpdateWithoutTb_destinationInput>
        create: XOR<tb_tripCreateWithoutTb_destinationInput, tb_tripUncheckedCreateWithoutTb_destinationInput>
    }

    export type tb_tripUpdateWithWhereUniqueWithoutTb_destinationInput = {
        where: tb_tripWhereUniqueInput
        data: XOR<tb_tripUpdateWithoutTb_destinationInput, tb_tripUncheckedUpdateWithoutTb_destinationInput>
    }

    export type tb_tripUpdateManyWithWhereWithoutTb_destinationInput = {
        where: tb_tripScalarWhereInput
        data: XOR<tb_tripUpdateManyMutationInput, tb_tripUncheckedUpdateManyWithoutTb_destinationInput>
    }

    export type tb_tripScalarWhereInput = {
        AND?: tb_tripScalarWhereInput | tb_tripScalarWhereInput[]
        OR?: tb_tripScalarWhereInput[]
        NOT?: tb_tripScalarWhereInput | tb_tripScalarWhereInput[]
        trip_id?: BigIntFilter<'tb_trip'> | bigint | number
        user_id?: UuidFilter<'tb_trip'> | string
        destination_id?: BigIntFilter<'tb_trip'> | bigint | number
        start_time?: DateTimeNullableFilter<'tb_trip'> | Date | string | null
        end_time?: DateTimeNullableFilter<'tb_trip'> | Date | string | null
        created_at?: DateTimeNullableFilter<'tb_trip'> | Date | string | null
        updated_at?: DateTimeNullableFilter<'tb_trip'> | Date | string | null
        trip_status?: BigIntNullableFilter<'tb_trip'> | bigint | number | null
        schedule_at?: DateTimeNullableFilter<'tb_trip'> | Date | string | null
        created_by?: StringNullableFilter<'tb_trip'> | string | null
        updated_by?: StringNullableFilter<'tb_trip'> | string | null
    }

    export type tb_payment_historyCreateWithoutTb_payment_statusInput = {
        pay_hist_id?: bigint | number
        created_at?: Date | string | null
        tb_trip_invoice?: tb_trip_invoiceCreateNestedOneWithoutTb_payment_historyInput
    }

    export type tb_payment_historyUncheckedCreateWithoutTb_payment_statusInput = {
        pay_hist_id?: bigint | number
        created_at?: Date | string | null
        trip_invoice_id?: bigint | number | null
    }

    export type tb_payment_historyCreateOrConnectWithoutTb_payment_statusInput = {
        where: tb_payment_historyWhereUniqueInput
        create: XOR<
            tb_payment_historyCreateWithoutTb_payment_statusInput,
            tb_payment_historyUncheckedCreateWithoutTb_payment_statusInput
        >
    }

    export type tb_payment_historyCreateManyTb_payment_statusInputEnvelope = {
        data: tb_payment_historyCreateManyTb_payment_statusInput | tb_payment_historyCreateManyTb_payment_statusInput[]
        skipDuplicates?: boolean
    }

    export type tb_payment_historyUpsertWithWhereUniqueWithoutTb_payment_statusInput = {
        where: tb_payment_historyWhereUniqueInput
        update: XOR<
            tb_payment_historyUpdateWithoutTb_payment_statusInput,
            tb_payment_historyUncheckedUpdateWithoutTb_payment_statusInput
        >
        create: XOR<
            tb_payment_historyCreateWithoutTb_payment_statusInput,
            tb_payment_historyUncheckedCreateWithoutTb_payment_statusInput
        >
    }

    export type tb_payment_historyUpdateWithWhereUniqueWithoutTb_payment_statusInput = {
        where: tb_payment_historyWhereUniqueInput
        data: XOR<
            tb_payment_historyUpdateWithoutTb_payment_statusInput,
            tb_payment_historyUncheckedUpdateWithoutTb_payment_statusInput
        >
    }

    export type tb_payment_historyUpdateManyWithWhereWithoutTb_payment_statusInput = {
        where: tb_payment_historyScalarWhereInput
        data: XOR<
            tb_payment_historyUpdateManyMutationInput,
            tb_payment_historyUncheckedUpdateManyWithoutTb_payment_statusInput
        >
    }

    export type tb_payment_historyScalarWhereInput = {
        AND?: tb_payment_historyScalarWhereInput | tb_payment_historyScalarWhereInput[]
        OR?: tb_payment_historyScalarWhereInput[]
        NOT?: tb_payment_historyScalarWhereInput | tb_payment_historyScalarWhereInput[]
        pay_hist_id?: BigIntFilter<'tb_payment_history'> | bigint | number
        pay_status_id?: BigIntNullableFilter<'tb_payment_history'> | bigint | number | null
        created_at?: DateTimeNullableFilter<'tb_payment_history'> | Date | string | null
        trip_invoice_id?: BigIntNullableFilter<'tb_payment_history'> | bigint | number | null
    }

    export type tb_trip_invoiceCreateWithoutTb_payment_typeInput = {
        trip_invoice_id?: bigint | number
        invoice_no?: string | null
        quantity?: bigint | number | null
        total_amount?: Decimal | DecimalJsLike | number | string | null
        tb_payment_history?: tb_payment_historyCreateNestedManyWithoutTb_trip_invoiceInput
        tb_trip?: tb_tripCreateNestedOneWithoutTb_trip_invoiceInput
    }

    export type tb_trip_invoiceUncheckedCreateWithoutTb_payment_typeInput = {
        trip_invoice_id?: bigint | number
        invoice_no?: string | null
        quantity?: bigint | number | null
        total_amount?: Decimal | DecimalJsLike | number | string | null
        trip_id?: bigint | number | null
        tb_payment_history?: tb_payment_historyUncheckedCreateNestedManyWithoutTb_trip_invoiceInput
    }

    export type tb_trip_invoiceCreateOrConnectWithoutTb_payment_typeInput = {
        where: tb_trip_invoiceWhereUniqueInput
        create: XOR<
            tb_trip_invoiceCreateWithoutTb_payment_typeInput,
            tb_trip_invoiceUncheckedCreateWithoutTb_payment_typeInput
        >
    }

    export type tb_trip_invoiceCreateManyTb_payment_typeInputEnvelope = {
        data: tb_trip_invoiceCreateManyTb_payment_typeInput | tb_trip_invoiceCreateManyTb_payment_typeInput[]
        skipDuplicates?: boolean
    }

    export type tb_trip_invoiceUpsertWithWhereUniqueWithoutTb_payment_typeInput = {
        where: tb_trip_invoiceWhereUniqueInput
        update: XOR<
            tb_trip_invoiceUpdateWithoutTb_payment_typeInput,
            tb_trip_invoiceUncheckedUpdateWithoutTb_payment_typeInput
        >
        create: XOR<
            tb_trip_invoiceCreateWithoutTb_payment_typeInput,
            tb_trip_invoiceUncheckedCreateWithoutTb_payment_typeInput
        >
    }

    export type tb_trip_invoiceUpdateWithWhereUniqueWithoutTb_payment_typeInput = {
        where: tb_trip_invoiceWhereUniqueInput
        data: XOR<
            tb_trip_invoiceUpdateWithoutTb_payment_typeInput,
            tb_trip_invoiceUncheckedUpdateWithoutTb_payment_typeInput
        >
    }

    export type tb_trip_invoiceUpdateManyWithWhereWithoutTb_payment_typeInput = {
        where: tb_trip_invoiceScalarWhereInput
        data: XOR<tb_trip_invoiceUpdateManyMutationInput, tb_trip_invoiceUncheckedUpdateManyWithoutTb_payment_typeInput>
    }

    export type tb_trip_invoiceScalarWhereInput = {
        AND?: tb_trip_invoiceScalarWhereInput | tb_trip_invoiceScalarWhereInput[]
        OR?: tb_trip_invoiceScalarWhereInput[]
        NOT?: tb_trip_invoiceScalarWhereInput | tb_trip_invoiceScalarWhereInput[]
        trip_invoice_id?: BigIntFilter<'tb_trip_invoice'> | bigint | number
        invoice_no?: StringNullableFilter<'tb_trip_invoice'> | string | null
        quantity?: BigIntNullableFilter<'tb_trip_invoice'> | bigint | number | null
        total_amount?: DecimalNullableFilter<'tb_trip_invoice'> | Decimal | DecimalJsLike | number | string | null
        pay_type_id?: BigIntNullableFilter<'tb_trip_invoice'> | bigint | number | null
        trip_id?: BigIntNullableFilter<'tb_trip_invoice'> | bigint | number | null
    }

    export type tb_userCreateWithoutTb_roleInput = {
        user_id?: string
        name: string
        email: string
        password: string
        created_at?: Date | string | null
        created_by?: string | null
        updated_by?: string | null
        is_active?: boolean | null
        tb_trip?: tb_tripCreateNestedManyWithoutTb_userInput
    }

    export type tb_userUncheckedCreateWithoutTb_roleInput = {
        user_id?: string
        name: string
        email: string
        password: string
        created_at?: Date | string | null
        created_by?: string | null
        updated_by?: string | null
        is_active?: boolean | null
        tb_trip?: tb_tripUncheckedCreateNestedManyWithoutTb_userInput
    }

    export type tb_userCreateOrConnectWithoutTb_roleInput = {
        where: tb_userWhereUniqueInput
        create: XOR<tb_userCreateWithoutTb_roleInput, tb_userUncheckedCreateWithoutTb_roleInput>
    }

    export type tb_userCreateManyTb_roleInputEnvelope = {
        data: tb_userCreateManyTb_roleInput | tb_userCreateManyTb_roleInput[]
        skipDuplicates?: boolean
    }

    export type tb_userUpsertWithWhereUniqueWithoutTb_roleInput = {
        where: tb_userWhereUniqueInput
        update: XOR<tb_userUpdateWithoutTb_roleInput, tb_userUncheckedUpdateWithoutTb_roleInput>
        create: XOR<tb_userCreateWithoutTb_roleInput, tb_userUncheckedCreateWithoutTb_roleInput>
    }

    export type tb_userUpdateWithWhereUniqueWithoutTb_roleInput = {
        where: tb_userWhereUniqueInput
        data: XOR<tb_userUpdateWithoutTb_roleInput, tb_userUncheckedUpdateWithoutTb_roleInput>
    }

    export type tb_userUpdateManyWithWhereWithoutTb_roleInput = {
        where: tb_userScalarWhereInput
        data: XOR<tb_userUpdateManyMutationInput, tb_userUncheckedUpdateManyWithoutTb_roleInput>
    }

    export type tb_userScalarWhereInput = {
        AND?: tb_userScalarWhereInput | tb_userScalarWhereInput[]
        OR?: tb_userScalarWhereInput[]
        NOT?: tb_userScalarWhereInput | tb_userScalarWhereInput[]
        user_id?: UuidFilter<'tb_user'> | string
        name?: StringFilter<'tb_user'> | string
        email?: StringFilter<'tb_user'> | string
        password?: StringFilter<'tb_user'> | string
        role_id?: IntFilter<'tb_user'> | number
        created_at?: DateTimeNullableFilter<'tb_user'> | Date | string | null
        created_by?: UuidNullableFilter<'tb_user'> | string | null
        updated_by?: UuidNullableFilter<'tb_user'> | string | null
        is_active?: BoolNullableFilter<'tb_user'> | boolean | null
    }

    export type tb_tripCreateWithoutTb_trip_statusInput = {
        trip_id?: bigint | number
        start_time?: Date | string | null
        end_time?: Date | string | null
        created_at?: Date | string | null
        updated_at?: Date | string | null
        schedule_at?: Date | string | null
        created_by?: string | null
        updated_by?: string | null
        tb_destination: tb_destinationCreateNestedOneWithoutTb_tripInput
        tb_user: tb_userCreateNestedOneWithoutTb_tripInput
        tb_trip_invoice?: tb_trip_invoiceCreateNestedManyWithoutTb_tripInput
    }

    export type tb_tripUncheckedCreateWithoutTb_trip_statusInput = {
        trip_id?: bigint | number
        user_id: string
        destination_id: bigint | number
        start_time?: Date | string | null
        end_time?: Date | string | null
        created_at?: Date | string | null
        updated_at?: Date | string | null
        schedule_at?: Date | string | null
        created_by?: string | null
        updated_by?: string | null
        tb_trip_invoice?: tb_trip_invoiceUncheckedCreateNestedManyWithoutTb_tripInput
    }

    export type tb_tripCreateOrConnectWithoutTb_trip_statusInput = {
        where: tb_tripWhereUniqueInput
        create: XOR<tb_tripCreateWithoutTb_trip_statusInput, tb_tripUncheckedCreateWithoutTb_trip_statusInput>
    }

    export type tb_tripCreateManyTb_trip_statusInputEnvelope = {
        data: tb_tripCreateManyTb_trip_statusInput | tb_tripCreateManyTb_trip_statusInput[]
        skipDuplicates?: boolean
    }

    export type tb_tripUpsertWithWhereUniqueWithoutTb_trip_statusInput = {
        where: tb_tripWhereUniqueInput
        update: XOR<tb_tripUpdateWithoutTb_trip_statusInput, tb_tripUncheckedUpdateWithoutTb_trip_statusInput>
        create: XOR<tb_tripCreateWithoutTb_trip_statusInput, tb_tripUncheckedCreateWithoutTb_trip_statusInput>
    }

    export type tb_tripUpdateWithWhereUniqueWithoutTb_trip_statusInput = {
        where: tb_tripWhereUniqueInput
        data: XOR<tb_tripUpdateWithoutTb_trip_statusInput, tb_tripUncheckedUpdateWithoutTb_trip_statusInput>
    }

    export type tb_tripUpdateManyWithWhereWithoutTb_trip_statusInput = {
        where: tb_tripScalarWhereInput
        data: XOR<tb_tripUpdateManyMutationInput, tb_tripUncheckedUpdateManyWithoutTb_trip_statusInput>
    }

    export type tb_payment_statusCreateWithoutTb_payment_historyInput = {
        pay_status_id?: bigint | number
        Name?: string | null
    }

    export type tb_payment_statusUncheckedCreateWithoutTb_payment_historyInput = {
        pay_status_id?: bigint | number
        Name?: string | null
    }

    export type tb_payment_statusCreateOrConnectWithoutTb_payment_historyInput = {
        where: tb_payment_statusWhereUniqueInput
        create: XOR<
            tb_payment_statusCreateWithoutTb_payment_historyInput,
            tb_payment_statusUncheckedCreateWithoutTb_payment_historyInput
        >
    }

    export type tb_trip_invoiceCreateWithoutTb_payment_historyInput = {
        trip_invoice_id?: bigint | number
        invoice_no?: string | null
        quantity?: bigint | number | null
        total_amount?: Decimal | DecimalJsLike | number | string | null
        tb_payment_type?: tb_payment_typeCreateNestedOneWithoutTb_trip_invoiceInput
        tb_trip?: tb_tripCreateNestedOneWithoutTb_trip_invoiceInput
    }

    export type tb_trip_invoiceUncheckedCreateWithoutTb_payment_historyInput = {
        trip_invoice_id?: bigint | number
        invoice_no?: string | null
        quantity?: bigint | number | null
        total_amount?: Decimal | DecimalJsLike | number | string | null
        pay_type_id?: bigint | number | null
        trip_id?: bigint | number | null
    }

    export type tb_trip_invoiceCreateOrConnectWithoutTb_payment_historyInput = {
        where: tb_trip_invoiceWhereUniqueInput
        create: XOR<
            tb_trip_invoiceCreateWithoutTb_payment_historyInput,
            tb_trip_invoiceUncheckedCreateWithoutTb_payment_historyInput
        >
    }

    export type tb_payment_statusUpsertWithoutTb_payment_historyInput = {
        update: XOR<
            tb_payment_statusUpdateWithoutTb_payment_historyInput,
            tb_payment_statusUncheckedUpdateWithoutTb_payment_historyInput
        >
        create: XOR<
            tb_payment_statusCreateWithoutTb_payment_historyInput,
            tb_payment_statusUncheckedCreateWithoutTb_payment_historyInput
        >
        where?: tb_payment_statusWhereInput
    }

    export type tb_payment_statusUpdateToOneWithWhereWithoutTb_payment_historyInput = {
        where?: tb_payment_statusWhereInput
        data: XOR<
            tb_payment_statusUpdateWithoutTb_payment_historyInput,
            tb_payment_statusUncheckedUpdateWithoutTb_payment_historyInput
        >
    }

    export type tb_payment_statusUpdateWithoutTb_payment_historyInput = {
        pay_status_id?: BigIntFieldUpdateOperationsInput | bigint | number
        Name?: NullableStringFieldUpdateOperationsInput | string | null
    }

    export type tb_payment_statusUncheckedUpdateWithoutTb_payment_historyInput = {
        pay_status_id?: BigIntFieldUpdateOperationsInput | bigint | number
        Name?: NullableStringFieldUpdateOperationsInput | string | null
    }

    export type tb_trip_invoiceUpsertWithoutTb_payment_historyInput = {
        update: XOR<
            tb_trip_invoiceUpdateWithoutTb_payment_historyInput,
            tb_trip_invoiceUncheckedUpdateWithoutTb_payment_historyInput
        >
        create: XOR<
            tb_trip_invoiceCreateWithoutTb_payment_historyInput,
            tb_trip_invoiceUncheckedCreateWithoutTb_payment_historyInput
        >
        where?: tb_trip_invoiceWhereInput
    }

    export type tb_trip_invoiceUpdateToOneWithWhereWithoutTb_payment_historyInput = {
        where?: tb_trip_invoiceWhereInput
        data: XOR<
            tb_trip_invoiceUpdateWithoutTb_payment_historyInput,
            tb_trip_invoiceUncheckedUpdateWithoutTb_payment_historyInput
        >
    }

    export type tb_trip_invoiceUpdateWithoutTb_payment_historyInput = {
        trip_invoice_id?: BigIntFieldUpdateOperationsInput | bigint | number
        invoice_no?: NullableStringFieldUpdateOperationsInput | string | null
        quantity?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
        total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
        tb_payment_type?: tb_payment_typeUpdateOneWithoutTb_trip_invoiceNestedInput
        tb_trip?: tb_tripUpdateOneWithoutTb_trip_invoiceNestedInput
    }

    export type tb_trip_invoiceUncheckedUpdateWithoutTb_payment_historyInput = {
        trip_invoice_id?: BigIntFieldUpdateOperationsInput | bigint | number
        invoice_no?: NullableStringFieldUpdateOperationsInput | string | null
        quantity?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
        total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
        pay_type_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
        trip_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    }

    export type tb_destinationCreateWithoutTb_tripInput = {
        destination_id?: bigint | number
        name?: string | null
        destinations?: tb_destinationCreatedestinationsInput | string[]
        quota?: bigint | number | null
        is_open?: boolean | null
        price?: Decimal | DecimalJsLike | number | string | null
    }

    export type tb_destinationUncheckedCreateWithoutTb_tripInput = {
        destination_id?: bigint | number
        name?: string | null
        destinations?: tb_destinationCreatedestinationsInput | string[]
        quota?: bigint | number | null
        is_open?: boolean | null
        price?: Decimal | DecimalJsLike | number | string | null
    }

    export type tb_destinationCreateOrConnectWithoutTb_tripInput = {
        where: tb_destinationWhereUniqueInput
        create: XOR<tb_destinationCreateWithoutTb_tripInput, tb_destinationUncheckedCreateWithoutTb_tripInput>
    }

    export type tb_trip_statusCreateWithoutTb_tripInput = {
        trip_status_id?: bigint | number
        name?: string | null
    }

    export type tb_trip_statusUncheckedCreateWithoutTb_tripInput = {
        trip_status_id?: bigint | number
        name?: string | null
    }

    export type tb_trip_statusCreateOrConnectWithoutTb_tripInput = {
        where: tb_trip_statusWhereUniqueInput
        create: XOR<tb_trip_statusCreateWithoutTb_tripInput, tb_trip_statusUncheckedCreateWithoutTb_tripInput>
    }

    export type tb_userCreateWithoutTb_tripInput = {
        user_id?: string
        name: string
        email: string
        password: string
        created_at?: Date | string | null
        created_by?: string | null
        updated_by?: string | null
        is_active?: boolean | null
        tb_role: tb_roleCreateNestedOneWithoutTb_userInput
    }

    export type tb_userUncheckedCreateWithoutTb_tripInput = {
        user_id?: string
        name: string
        email: string
        password: string
        role_id: number
        created_at?: Date | string | null
        created_by?: string | null
        updated_by?: string | null
        is_active?: boolean | null
    }

    export type tb_userCreateOrConnectWithoutTb_tripInput = {
        where: tb_userWhereUniqueInput
        create: XOR<tb_userCreateWithoutTb_tripInput, tb_userUncheckedCreateWithoutTb_tripInput>
    }

    export type tb_trip_invoiceCreateWithoutTb_tripInput = {
        trip_invoice_id?: bigint | number
        invoice_no?: string | null
        quantity?: bigint | number | null
        total_amount?: Decimal | DecimalJsLike | number | string | null
        tb_payment_history?: tb_payment_historyCreateNestedManyWithoutTb_trip_invoiceInput
        tb_payment_type?: tb_payment_typeCreateNestedOneWithoutTb_trip_invoiceInput
    }

    export type tb_trip_invoiceUncheckedCreateWithoutTb_tripInput = {
        trip_invoice_id?: bigint | number
        invoice_no?: string | null
        quantity?: bigint | number | null
        total_amount?: Decimal | DecimalJsLike | number | string | null
        pay_type_id?: bigint | number | null
        tb_payment_history?: tb_payment_historyUncheckedCreateNestedManyWithoutTb_trip_invoiceInput
    }

    export type tb_trip_invoiceCreateOrConnectWithoutTb_tripInput = {
        where: tb_trip_invoiceWhereUniqueInput
        create: XOR<tb_trip_invoiceCreateWithoutTb_tripInput, tb_trip_invoiceUncheckedCreateWithoutTb_tripInput>
    }

    export type tb_trip_invoiceCreateManyTb_tripInputEnvelope = {
        data: tb_trip_invoiceCreateManyTb_tripInput | tb_trip_invoiceCreateManyTb_tripInput[]
        skipDuplicates?: boolean
    }

    export type tb_destinationUpsertWithoutTb_tripInput = {
        update: XOR<tb_destinationUpdateWithoutTb_tripInput, tb_destinationUncheckedUpdateWithoutTb_tripInput>
        create: XOR<tb_destinationCreateWithoutTb_tripInput, tb_destinationUncheckedCreateWithoutTb_tripInput>
        where?: tb_destinationWhereInput
    }

    export type tb_destinationUpdateToOneWithWhereWithoutTb_tripInput = {
        where?: tb_destinationWhereInput
        data: XOR<tb_destinationUpdateWithoutTb_tripInput, tb_destinationUncheckedUpdateWithoutTb_tripInput>
    }

    export type tb_destinationUpdateWithoutTb_tripInput = {
        destination_id?: BigIntFieldUpdateOperationsInput | bigint | number
        name?: NullableStringFieldUpdateOperationsInput | string | null
        destinations?: tb_destinationUpdatedestinationsInput | string[]
        quota?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
        is_open?: NullableBoolFieldUpdateOperationsInput | boolean | null
        price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    }

    export type tb_destinationUncheckedUpdateWithoutTb_tripInput = {
        destination_id?: BigIntFieldUpdateOperationsInput | bigint | number
        name?: NullableStringFieldUpdateOperationsInput | string | null
        destinations?: tb_destinationUpdatedestinationsInput | string[]
        quota?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
        is_open?: NullableBoolFieldUpdateOperationsInput | boolean | null
        price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    }

    export type tb_trip_statusUpsertWithoutTb_tripInput = {
        update: XOR<tb_trip_statusUpdateWithoutTb_tripInput, tb_trip_statusUncheckedUpdateWithoutTb_tripInput>
        create: XOR<tb_trip_statusCreateWithoutTb_tripInput, tb_trip_statusUncheckedCreateWithoutTb_tripInput>
        where?: tb_trip_statusWhereInput
    }

    export type tb_trip_statusUpdateToOneWithWhereWithoutTb_tripInput = {
        where?: tb_trip_statusWhereInput
        data: XOR<tb_trip_statusUpdateWithoutTb_tripInput, tb_trip_statusUncheckedUpdateWithoutTb_tripInput>
    }

    export type tb_trip_statusUpdateWithoutTb_tripInput = {
        trip_status_id?: BigIntFieldUpdateOperationsInput | bigint | number
        name?: NullableStringFieldUpdateOperationsInput | string | null
    }

    export type tb_trip_statusUncheckedUpdateWithoutTb_tripInput = {
        trip_status_id?: BigIntFieldUpdateOperationsInput | bigint | number
        name?: NullableStringFieldUpdateOperationsInput | string | null
    }

    export type tb_userUpsertWithoutTb_tripInput = {
        update: XOR<tb_userUpdateWithoutTb_tripInput, tb_userUncheckedUpdateWithoutTb_tripInput>
        create: XOR<tb_userCreateWithoutTb_tripInput, tb_userUncheckedCreateWithoutTb_tripInput>
        where?: tb_userWhereInput
    }

    export type tb_userUpdateToOneWithWhereWithoutTb_tripInput = {
        where?: tb_userWhereInput
        data: XOR<tb_userUpdateWithoutTb_tripInput, tb_userUncheckedUpdateWithoutTb_tripInput>
    }

    export type tb_userUpdateWithoutTb_tripInput = {
        user_id?: StringFieldUpdateOperationsInput | string
        name?: StringFieldUpdateOperationsInput | string
        email?: StringFieldUpdateOperationsInput | string
        password?: StringFieldUpdateOperationsInput | string
        created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        created_by?: NullableStringFieldUpdateOperationsInput | string | null
        updated_by?: NullableStringFieldUpdateOperationsInput | string | null
        is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
        tb_role?: tb_roleUpdateOneRequiredWithoutTb_userNestedInput
    }

    export type tb_userUncheckedUpdateWithoutTb_tripInput = {
        user_id?: StringFieldUpdateOperationsInput | string
        name?: StringFieldUpdateOperationsInput | string
        email?: StringFieldUpdateOperationsInput | string
        password?: StringFieldUpdateOperationsInput | string
        role_id?: IntFieldUpdateOperationsInput | number
        created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        created_by?: NullableStringFieldUpdateOperationsInput | string | null
        updated_by?: NullableStringFieldUpdateOperationsInput | string | null
        is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    }

    export type tb_trip_invoiceUpsertWithWhereUniqueWithoutTb_tripInput = {
        where: tb_trip_invoiceWhereUniqueInput
        update: XOR<tb_trip_invoiceUpdateWithoutTb_tripInput, tb_trip_invoiceUncheckedUpdateWithoutTb_tripInput>
        create: XOR<tb_trip_invoiceCreateWithoutTb_tripInput, tb_trip_invoiceUncheckedCreateWithoutTb_tripInput>
    }

    export type tb_trip_invoiceUpdateWithWhereUniqueWithoutTb_tripInput = {
        where: tb_trip_invoiceWhereUniqueInput
        data: XOR<tb_trip_invoiceUpdateWithoutTb_tripInput, tb_trip_invoiceUncheckedUpdateWithoutTb_tripInput>
    }

    export type tb_trip_invoiceUpdateManyWithWhereWithoutTb_tripInput = {
        where: tb_trip_invoiceScalarWhereInput
        data: XOR<tb_trip_invoiceUpdateManyMutationInput, tb_trip_invoiceUncheckedUpdateManyWithoutTb_tripInput>
    }

    export type tb_payment_historyCreateWithoutTb_trip_invoiceInput = {
        pay_hist_id?: bigint | number
        created_at?: Date | string | null
        tb_payment_status?: tb_payment_statusCreateNestedOneWithoutTb_payment_historyInput
    }

    export type tb_payment_historyUncheckedCreateWithoutTb_trip_invoiceInput = {
        pay_hist_id?: bigint | number
        pay_status_id?: bigint | number | null
        created_at?: Date | string | null
    }

    export type tb_payment_historyCreateOrConnectWithoutTb_trip_invoiceInput = {
        where: tb_payment_historyWhereUniqueInput
        create: XOR<
            tb_payment_historyCreateWithoutTb_trip_invoiceInput,
            tb_payment_historyUncheckedCreateWithoutTb_trip_invoiceInput
        >
    }

    export type tb_payment_historyCreateManyTb_trip_invoiceInputEnvelope = {
        data: tb_payment_historyCreateManyTb_trip_invoiceInput | tb_payment_historyCreateManyTb_trip_invoiceInput[]
        skipDuplicates?: boolean
    }

    export type tb_payment_typeCreateWithoutTb_trip_invoiceInput = {
        pay_type_id?: bigint | number
        name?: string | null
    }

    export type tb_payment_typeUncheckedCreateWithoutTb_trip_invoiceInput = {
        pay_type_id?: bigint | number
        name?: string | null
    }

    export type tb_payment_typeCreateOrConnectWithoutTb_trip_invoiceInput = {
        where: tb_payment_typeWhereUniqueInput
        create: XOR<
            tb_payment_typeCreateWithoutTb_trip_invoiceInput,
            tb_payment_typeUncheckedCreateWithoutTb_trip_invoiceInput
        >
    }

    export type tb_tripCreateWithoutTb_trip_invoiceInput = {
        trip_id?: bigint | number
        start_time?: Date | string | null
        end_time?: Date | string | null
        created_at?: Date | string | null
        updated_at?: Date | string | null
        schedule_at?: Date | string | null
        created_by?: string | null
        updated_by?: string | null
        tb_destination: tb_destinationCreateNestedOneWithoutTb_tripInput
        tb_trip_status?: tb_trip_statusCreateNestedOneWithoutTb_tripInput
        tb_user: tb_userCreateNestedOneWithoutTb_tripInput
    }

    export type tb_tripUncheckedCreateWithoutTb_trip_invoiceInput = {
        trip_id?: bigint | number
        user_id: string
        destination_id: bigint | number
        start_time?: Date | string | null
        end_time?: Date | string | null
        created_at?: Date | string | null
        updated_at?: Date | string | null
        trip_status?: bigint | number | null
        schedule_at?: Date | string | null
        created_by?: string | null
        updated_by?: string | null
    }

    export type tb_tripCreateOrConnectWithoutTb_trip_invoiceInput = {
        where: tb_tripWhereUniqueInput
        create: XOR<tb_tripCreateWithoutTb_trip_invoiceInput, tb_tripUncheckedCreateWithoutTb_trip_invoiceInput>
    }

    export type tb_payment_historyUpsertWithWhereUniqueWithoutTb_trip_invoiceInput = {
        where: tb_payment_historyWhereUniqueInput
        update: XOR<
            tb_payment_historyUpdateWithoutTb_trip_invoiceInput,
            tb_payment_historyUncheckedUpdateWithoutTb_trip_invoiceInput
        >
        create: XOR<
            tb_payment_historyCreateWithoutTb_trip_invoiceInput,
            tb_payment_historyUncheckedCreateWithoutTb_trip_invoiceInput
        >
    }

    export type tb_payment_historyUpdateWithWhereUniqueWithoutTb_trip_invoiceInput = {
        where: tb_payment_historyWhereUniqueInput
        data: XOR<
            tb_payment_historyUpdateWithoutTb_trip_invoiceInput,
            tb_payment_historyUncheckedUpdateWithoutTb_trip_invoiceInput
        >
    }

    export type tb_payment_historyUpdateManyWithWhereWithoutTb_trip_invoiceInput = {
        where: tb_payment_historyScalarWhereInput
        data: XOR<
            tb_payment_historyUpdateManyMutationInput,
            tb_payment_historyUncheckedUpdateManyWithoutTb_trip_invoiceInput
        >
    }

    export type tb_payment_typeUpsertWithoutTb_trip_invoiceInput = {
        update: XOR<
            tb_payment_typeUpdateWithoutTb_trip_invoiceInput,
            tb_payment_typeUncheckedUpdateWithoutTb_trip_invoiceInput
        >
        create: XOR<
            tb_payment_typeCreateWithoutTb_trip_invoiceInput,
            tb_payment_typeUncheckedCreateWithoutTb_trip_invoiceInput
        >
        where?: tb_payment_typeWhereInput
    }

    export type tb_payment_typeUpdateToOneWithWhereWithoutTb_trip_invoiceInput = {
        where?: tb_payment_typeWhereInput
        data: XOR<
            tb_payment_typeUpdateWithoutTb_trip_invoiceInput,
            tb_payment_typeUncheckedUpdateWithoutTb_trip_invoiceInput
        >
    }

    export type tb_payment_typeUpdateWithoutTb_trip_invoiceInput = {
        pay_type_id?: BigIntFieldUpdateOperationsInput | bigint | number
        name?: NullableStringFieldUpdateOperationsInput | string | null
    }

    export type tb_payment_typeUncheckedUpdateWithoutTb_trip_invoiceInput = {
        pay_type_id?: BigIntFieldUpdateOperationsInput | bigint | number
        name?: NullableStringFieldUpdateOperationsInput | string | null
    }

    export type tb_tripUpsertWithoutTb_trip_invoiceInput = {
        update: XOR<tb_tripUpdateWithoutTb_trip_invoiceInput, tb_tripUncheckedUpdateWithoutTb_trip_invoiceInput>
        create: XOR<tb_tripCreateWithoutTb_trip_invoiceInput, tb_tripUncheckedCreateWithoutTb_trip_invoiceInput>
        where?: tb_tripWhereInput
    }

    export type tb_tripUpdateToOneWithWhereWithoutTb_trip_invoiceInput = {
        where?: tb_tripWhereInput
        data: XOR<tb_tripUpdateWithoutTb_trip_invoiceInput, tb_tripUncheckedUpdateWithoutTb_trip_invoiceInput>
    }

    export type tb_tripUpdateWithoutTb_trip_invoiceInput = {
        trip_id?: BigIntFieldUpdateOperationsInput | bigint | number
        start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        schedule_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        created_by?: NullableStringFieldUpdateOperationsInput | string | null
        updated_by?: NullableStringFieldUpdateOperationsInput | string | null
        tb_destination?: tb_destinationUpdateOneRequiredWithoutTb_tripNestedInput
        tb_trip_status?: tb_trip_statusUpdateOneWithoutTb_tripNestedInput
        tb_user?: tb_userUpdateOneRequiredWithoutTb_tripNestedInput
    }

    export type tb_tripUncheckedUpdateWithoutTb_trip_invoiceInput = {
        trip_id?: BigIntFieldUpdateOperationsInput | bigint | number
        user_id?: StringFieldUpdateOperationsInput | string
        destination_id?: BigIntFieldUpdateOperationsInput | bigint | number
        start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        trip_status?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
        schedule_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        created_by?: NullableStringFieldUpdateOperationsInput | string | null
        updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    }

    export type tb_tripCreateWithoutTb_userInput = {
        trip_id?: bigint | number
        start_time?: Date | string | null
        end_time?: Date | string | null
        created_at?: Date | string | null
        updated_at?: Date | string | null
        schedule_at?: Date | string | null
        created_by?: string | null
        updated_by?: string | null
        tb_destination: tb_destinationCreateNestedOneWithoutTb_tripInput
        tb_trip_status?: tb_trip_statusCreateNestedOneWithoutTb_tripInput
        tb_trip_invoice?: tb_trip_invoiceCreateNestedManyWithoutTb_tripInput
    }

    export type tb_tripUncheckedCreateWithoutTb_userInput = {
        trip_id?: bigint | number
        destination_id: bigint | number
        start_time?: Date | string | null
        end_time?: Date | string | null
        created_at?: Date | string | null
        updated_at?: Date | string | null
        trip_status?: bigint | number | null
        schedule_at?: Date | string | null
        created_by?: string | null
        updated_by?: string | null
        tb_trip_invoice?: tb_trip_invoiceUncheckedCreateNestedManyWithoutTb_tripInput
    }

    export type tb_tripCreateOrConnectWithoutTb_userInput = {
        where: tb_tripWhereUniqueInput
        create: XOR<tb_tripCreateWithoutTb_userInput, tb_tripUncheckedCreateWithoutTb_userInput>
    }

    export type tb_tripCreateManyTb_userInputEnvelope = {
        data: tb_tripCreateManyTb_userInput | tb_tripCreateManyTb_userInput[]
        skipDuplicates?: boolean
    }

    export type tb_roleCreateWithoutTb_userInput = {
        name: string
    }

    export type tb_roleUncheckedCreateWithoutTb_userInput = {
        role_id?: number
        name: string
    }

    export type tb_roleCreateOrConnectWithoutTb_userInput = {
        where: tb_roleWhereUniqueInput
        create: XOR<tb_roleCreateWithoutTb_userInput, tb_roleUncheckedCreateWithoutTb_userInput>
    }

    export type tb_tripUpsertWithWhereUniqueWithoutTb_userInput = {
        where: tb_tripWhereUniqueInput
        update: XOR<tb_tripUpdateWithoutTb_userInput, tb_tripUncheckedUpdateWithoutTb_userInput>
        create: XOR<tb_tripCreateWithoutTb_userInput, tb_tripUncheckedCreateWithoutTb_userInput>
    }

    export type tb_tripUpdateWithWhereUniqueWithoutTb_userInput = {
        where: tb_tripWhereUniqueInput
        data: XOR<tb_tripUpdateWithoutTb_userInput, tb_tripUncheckedUpdateWithoutTb_userInput>
    }

    export type tb_tripUpdateManyWithWhereWithoutTb_userInput = {
        where: tb_tripScalarWhereInput
        data: XOR<tb_tripUpdateManyMutationInput, tb_tripUncheckedUpdateManyWithoutTb_userInput>
    }

    export type tb_roleUpsertWithoutTb_userInput = {
        update: XOR<tb_roleUpdateWithoutTb_userInput, tb_roleUncheckedUpdateWithoutTb_userInput>
        create: XOR<tb_roleCreateWithoutTb_userInput, tb_roleUncheckedCreateWithoutTb_userInput>
        where?: tb_roleWhereInput
    }

    export type tb_roleUpdateToOneWithWhereWithoutTb_userInput = {
        where?: tb_roleWhereInput
        data: XOR<tb_roleUpdateWithoutTb_userInput, tb_roleUncheckedUpdateWithoutTb_userInput>
    }

    export type tb_roleUpdateWithoutTb_userInput = {
        name?: StringFieldUpdateOperationsInput | string
    }

    export type tb_roleUncheckedUpdateWithoutTb_userInput = {
        role_id?: IntFieldUpdateOperationsInput | number
        name?: StringFieldUpdateOperationsInput | string
    }

    export type tb_tripCreateManyTb_destinationInput = {
        trip_id?: bigint | number
        user_id: string
        start_time?: Date | string | null
        end_time?: Date | string | null
        created_at?: Date | string | null
        updated_at?: Date | string | null
        trip_status?: bigint | number | null
        schedule_at?: Date | string | null
        created_by?: string | null
        updated_by?: string | null
    }

    export type tb_tripUpdateWithoutTb_destinationInput = {
        trip_id?: BigIntFieldUpdateOperationsInput | bigint | number
        start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        schedule_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        created_by?: NullableStringFieldUpdateOperationsInput | string | null
        updated_by?: NullableStringFieldUpdateOperationsInput | string | null
        tb_trip_status?: tb_trip_statusUpdateOneWithoutTb_tripNestedInput
        tb_user?: tb_userUpdateOneRequiredWithoutTb_tripNestedInput
        tb_trip_invoice?: tb_trip_invoiceUpdateManyWithoutTb_tripNestedInput
    }

    export type tb_tripUncheckedUpdateWithoutTb_destinationInput = {
        trip_id?: BigIntFieldUpdateOperationsInput | bigint | number
        user_id?: StringFieldUpdateOperationsInput | string
        start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        trip_status?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
        schedule_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        created_by?: NullableStringFieldUpdateOperationsInput | string | null
        updated_by?: NullableStringFieldUpdateOperationsInput | string | null
        tb_trip_invoice?: tb_trip_invoiceUncheckedUpdateManyWithoutTb_tripNestedInput
    }

    export type tb_tripUncheckedUpdateManyWithoutTb_destinationInput = {
        trip_id?: BigIntFieldUpdateOperationsInput | bigint | number
        user_id?: StringFieldUpdateOperationsInput | string
        start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        trip_status?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
        schedule_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        created_by?: NullableStringFieldUpdateOperationsInput | string | null
        updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    }

    export type tb_payment_historyCreateManyTb_payment_statusInput = {
        pay_hist_id?: bigint | number
        created_at?: Date | string | null
        trip_invoice_id?: bigint | number | null
    }

    export type tb_payment_historyUpdateWithoutTb_payment_statusInput = {
        pay_hist_id?: BigIntFieldUpdateOperationsInput | bigint | number
        created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        tb_trip_invoice?: tb_trip_invoiceUpdateOneWithoutTb_payment_historyNestedInput
    }

    export type tb_payment_historyUncheckedUpdateWithoutTb_payment_statusInput = {
        pay_hist_id?: BigIntFieldUpdateOperationsInput | bigint | number
        created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        trip_invoice_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    }

    export type tb_payment_historyUncheckedUpdateManyWithoutTb_payment_statusInput = {
        pay_hist_id?: BigIntFieldUpdateOperationsInput | bigint | number
        created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        trip_invoice_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    }

    export type tb_trip_invoiceCreateManyTb_payment_typeInput = {
        trip_invoice_id?: bigint | number
        invoice_no?: string | null
        quantity?: bigint | number | null
        total_amount?: Decimal | DecimalJsLike | number | string | null
        trip_id?: bigint | number | null
    }

    export type tb_trip_invoiceUpdateWithoutTb_payment_typeInput = {
        trip_invoice_id?: BigIntFieldUpdateOperationsInput | bigint | number
        invoice_no?: NullableStringFieldUpdateOperationsInput | string | null
        quantity?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
        total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
        tb_payment_history?: tb_payment_historyUpdateManyWithoutTb_trip_invoiceNestedInput
        tb_trip?: tb_tripUpdateOneWithoutTb_trip_invoiceNestedInput
    }

    export type tb_trip_invoiceUncheckedUpdateWithoutTb_payment_typeInput = {
        trip_invoice_id?: BigIntFieldUpdateOperationsInput | bigint | number
        invoice_no?: NullableStringFieldUpdateOperationsInput | string | null
        quantity?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
        total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
        trip_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
        tb_payment_history?: tb_payment_historyUncheckedUpdateManyWithoutTb_trip_invoiceNestedInput
    }

    export type tb_trip_invoiceUncheckedUpdateManyWithoutTb_payment_typeInput = {
        trip_invoice_id?: BigIntFieldUpdateOperationsInput | bigint | number
        invoice_no?: NullableStringFieldUpdateOperationsInput | string | null
        quantity?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
        total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
        trip_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    }

    export type tb_userCreateManyTb_roleInput = {
        user_id?: string
        name: string
        email: string
        password: string
        created_at?: Date | string | null
        created_by?: string | null
        updated_by?: string | null
        is_active?: boolean | null
    }

    export type tb_userUpdateWithoutTb_roleInput = {
        user_id?: StringFieldUpdateOperationsInput | string
        name?: StringFieldUpdateOperationsInput | string
        email?: StringFieldUpdateOperationsInput | string
        password?: StringFieldUpdateOperationsInput | string
        created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        created_by?: NullableStringFieldUpdateOperationsInput | string | null
        updated_by?: NullableStringFieldUpdateOperationsInput | string | null
        is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
        tb_trip?: tb_tripUpdateManyWithoutTb_userNestedInput
    }

    export type tb_userUncheckedUpdateWithoutTb_roleInput = {
        user_id?: StringFieldUpdateOperationsInput | string
        name?: StringFieldUpdateOperationsInput | string
        email?: StringFieldUpdateOperationsInput | string
        password?: StringFieldUpdateOperationsInput | string
        created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        created_by?: NullableStringFieldUpdateOperationsInput | string | null
        updated_by?: NullableStringFieldUpdateOperationsInput | string | null
        is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
        tb_trip?: tb_tripUncheckedUpdateManyWithoutTb_userNestedInput
    }

    export type tb_userUncheckedUpdateManyWithoutTb_roleInput = {
        user_id?: StringFieldUpdateOperationsInput | string
        name?: StringFieldUpdateOperationsInput | string
        email?: StringFieldUpdateOperationsInput | string
        password?: StringFieldUpdateOperationsInput | string
        created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        created_by?: NullableStringFieldUpdateOperationsInput | string | null
        updated_by?: NullableStringFieldUpdateOperationsInput | string | null
        is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    }

    export type tb_tripCreateManyTb_trip_statusInput = {
        trip_id?: bigint | number
        user_id: string
        destination_id: bigint | number
        start_time?: Date | string | null
        end_time?: Date | string | null
        created_at?: Date | string | null
        updated_at?: Date | string | null
        schedule_at?: Date | string | null
        created_by?: string | null
        updated_by?: string | null
    }

    export type tb_tripUpdateWithoutTb_trip_statusInput = {
        trip_id?: BigIntFieldUpdateOperationsInput | bigint | number
        start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        schedule_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        created_by?: NullableStringFieldUpdateOperationsInput | string | null
        updated_by?: NullableStringFieldUpdateOperationsInput | string | null
        tb_destination?: tb_destinationUpdateOneRequiredWithoutTb_tripNestedInput
        tb_user?: tb_userUpdateOneRequiredWithoutTb_tripNestedInput
        tb_trip_invoice?: tb_trip_invoiceUpdateManyWithoutTb_tripNestedInput
    }

    export type tb_tripUncheckedUpdateWithoutTb_trip_statusInput = {
        trip_id?: BigIntFieldUpdateOperationsInput | bigint | number
        user_id?: StringFieldUpdateOperationsInput | string
        destination_id?: BigIntFieldUpdateOperationsInput | bigint | number
        start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        schedule_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        created_by?: NullableStringFieldUpdateOperationsInput | string | null
        updated_by?: NullableStringFieldUpdateOperationsInput | string | null
        tb_trip_invoice?: tb_trip_invoiceUncheckedUpdateManyWithoutTb_tripNestedInput
    }

    export type tb_tripUncheckedUpdateManyWithoutTb_trip_statusInput = {
        trip_id?: BigIntFieldUpdateOperationsInput | bigint | number
        user_id?: StringFieldUpdateOperationsInput | string
        destination_id?: BigIntFieldUpdateOperationsInput | bigint | number
        start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        schedule_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        created_by?: NullableStringFieldUpdateOperationsInput | string | null
        updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    }

    export type tb_trip_invoiceCreateManyTb_tripInput = {
        trip_invoice_id?: bigint | number
        invoice_no?: string | null
        quantity?: bigint | number | null
        total_amount?: Decimal | DecimalJsLike | number | string | null
        pay_type_id?: bigint | number | null
    }

    export type tb_trip_invoiceUpdateWithoutTb_tripInput = {
        trip_invoice_id?: BigIntFieldUpdateOperationsInput | bigint | number
        invoice_no?: NullableStringFieldUpdateOperationsInput | string | null
        quantity?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
        total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
        tb_payment_history?: tb_payment_historyUpdateManyWithoutTb_trip_invoiceNestedInput
        tb_payment_type?: tb_payment_typeUpdateOneWithoutTb_trip_invoiceNestedInput
    }

    export type tb_trip_invoiceUncheckedUpdateWithoutTb_tripInput = {
        trip_invoice_id?: BigIntFieldUpdateOperationsInput | bigint | number
        invoice_no?: NullableStringFieldUpdateOperationsInput | string | null
        quantity?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
        total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
        pay_type_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
        tb_payment_history?: tb_payment_historyUncheckedUpdateManyWithoutTb_trip_invoiceNestedInput
    }

    export type tb_trip_invoiceUncheckedUpdateManyWithoutTb_tripInput = {
        trip_invoice_id?: BigIntFieldUpdateOperationsInput | bigint | number
        invoice_no?: NullableStringFieldUpdateOperationsInput | string | null
        quantity?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
        total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
        pay_type_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    }

    export type tb_payment_historyCreateManyTb_trip_invoiceInput = {
        pay_hist_id?: bigint | number
        pay_status_id?: bigint | number | null
        created_at?: Date | string | null
    }

    export type tb_payment_historyUpdateWithoutTb_trip_invoiceInput = {
        pay_hist_id?: BigIntFieldUpdateOperationsInput | bigint | number
        created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        tb_payment_status?: tb_payment_statusUpdateOneWithoutTb_payment_historyNestedInput
    }

    export type tb_payment_historyUncheckedUpdateWithoutTb_trip_invoiceInput = {
        pay_hist_id?: BigIntFieldUpdateOperationsInput | bigint | number
        pay_status_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
        created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    }

    export type tb_payment_historyUncheckedUpdateManyWithoutTb_trip_invoiceInput = {
        pay_hist_id?: BigIntFieldUpdateOperationsInput | bigint | number
        pay_status_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
        created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    }

    export type tb_tripCreateManyTb_userInput = {
        trip_id?: bigint | number
        destination_id: bigint | number
        start_time?: Date | string | null
        end_time?: Date | string | null
        created_at?: Date | string | null
        updated_at?: Date | string | null
        trip_status?: bigint | number | null
        schedule_at?: Date | string | null
        created_by?: string | null
        updated_by?: string | null
    }

    export type tb_tripUpdateWithoutTb_userInput = {
        trip_id?: BigIntFieldUpdateOperationsInput | bigint | number
        start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        schedule_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        created_by?: NullableStringFieldUpdateOperationsInput | string | null
        updated_by?: NullableStringFieldUpdateOperationsInput | string | null
        tb_destination?: tb_destinationUpdateOneRequiredWithoutTb_tripNestedInput
        tb_trip_status?: tb_trip_statusUpdateOneWithoutTb_tripNestedInput
        tb_trip_invoice?: tb_trip_invoiceUpdateManyWithoutTb_tripNestedInput
    }

    export type tb_tripUncheckedUpdateWithoutTb_userInput = {
        trip_id?: BigIntFieldUpdateOperationsInput | bigint | number
        destination_id?: BigIntFieldUpdateOperationsInput | bigint | number
        start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        trip_status?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
        schedule_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        created_by?: NullableStringFieldUpdateOperationsInput | string | null
        updated_by?: NullableStringFieldUpdateOperationsInput | string | null
        tb_trip_invoice?: tb_trip_invoiceUncheckedUpdateManyWithoutTb_tripNestedInput
    }

    export type tb_tripUncheckedUpdateManyWithoutTb_userInput = {
        trip_id?: BigIntFieldUpdateOperationsInput | bigint | number
        destination_id?: BigIntFieldUpdateOperationsInput | bigint | number
        start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        trip_status?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
        schedule_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        created_by?: NullableStringFieldUpdateOperationsInput | string | null
        updated_by?: NullableStringFieldUpdateOperationsInput | string | null
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
