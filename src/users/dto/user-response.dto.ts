import { Exclude } from 'class-transformer';

export class UserReponseDto{
    id: string;
    name: string;
    email: string;
    companyId: string;

    @Exclude()
    passwordHash: string;
}