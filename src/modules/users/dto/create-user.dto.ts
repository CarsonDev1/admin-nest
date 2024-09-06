import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
  phone: string;
  address: string;
  image: string;
  codeId: string;
  codeExpired: Date;
}
