import { Frequency } from "@/src/entity";

export interface ICalculateResponse {
    "classes": number,
    "amplitude": number,
    "media": number,
    "variance": number,
    "standard_deviation": number,
    "table": Frequency[]
}