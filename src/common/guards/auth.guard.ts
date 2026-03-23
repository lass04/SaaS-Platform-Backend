import { JwtService } from '@nestjs/jwt';
import { Injectable, ExecutionContext, CanActivate, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private readonly jwtService: JwtService){}

    canActivate(ctx:ExecutionContext){
        const request = ctx.switchToHttp().getRequest();
        const token = this.extractTokenFromHeaders(request);

        if(!token)
            throw new UnauthorizedException('Unauthorized');
        try{
            const payload = this.jwtService.verifyAsync(token);
            request.user = payload;

            return true;
        }catch{
            throw new UnauthorizedException('Unauthorized');
        }
    }

    extractTokenFromHeaders(req:Request){
        const [type,token] = req.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}