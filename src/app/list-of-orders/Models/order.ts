import { buyer } from "./buyer";

export interface order {
    id: number;
    czyZrealizowane: boolean;
    nazwa: string;
    ilosc: number;
    data: Date;
    cena: number;
    faktura: string;
    nabywca: buyer
}