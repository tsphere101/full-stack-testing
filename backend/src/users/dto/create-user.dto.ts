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
      'gender must be one of the following values: male, female, non-binary',
  })
  gender: string;

  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
