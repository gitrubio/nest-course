import { IsNumber, IsString, IsUUID } from "class-validator";

export class CreateBrandDto {

    @IsString()
    @IsUUID()
    readonly id : string
    @IsString()
    readonly name : string
    @IsNumber()
    readonly createdAt : number
}
