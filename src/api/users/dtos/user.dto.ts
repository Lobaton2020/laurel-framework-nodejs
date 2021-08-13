import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class UserDto {

    @IsString()
    @IsNotEmpty()
    id:string = '';

    @IsString()
    @IsNotEmpty()
    @MaxLength(10)
    name:string = '';
}