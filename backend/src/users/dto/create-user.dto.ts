import {
    IsEmail,
    IsIn,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    Max,
    Min,
} from 'class-validator';
import { UserResponseMessages } from 'src/enums/user-response-messages.enum';

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsNumber()
    @IsNotEmpty()
    @Min(15)
    @Max(120)
    age: number;

    @IsNotEmpty()
    @IsIn(['male', 'female', 'non-binary'], {
        message:
            UserResponseMessages.GENDER_NOT_VALID,
    })
    gender: string;

    @IsOptional()
    @IsString()
    phoneNumber?: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsString()
    picture?: string;
}
