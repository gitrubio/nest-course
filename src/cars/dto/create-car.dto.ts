import { IsString, MaxLength, maxLength } from 'class-validator';

export class CreateCarDto {

    @IsString({message : 'brand debe ser un string'})
    @MaxLength(20)
    readonly brand: string;

    @IsString()
    readonly model: string;

}
