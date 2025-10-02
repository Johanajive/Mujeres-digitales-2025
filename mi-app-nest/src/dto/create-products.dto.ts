import {  IsNotEmpty, IsNumber, IsPositive } from "class-validator";

export class CreateProductDTO {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    amount: number

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    price: number;

    @IsNotEmpty()
    category: string

    @IsNotEmpty()
    description: string;
}