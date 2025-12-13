/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ApiResponse<T> {
    data: T[] | Record<string, T> | Record<string, T[]> | Record<string, any>
}