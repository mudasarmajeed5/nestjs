import { IsAlphanumeric, IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
export class AuthDto {
  @IsNotEmpty()
  @IsString()
  @Length(3,40)
  name: string

  @IsEmail()
  @IsNotEmpty()
  email: string;
  
  
  @IsAlphanumeric()
  @IsNotEmpty()
  password: string;
}
