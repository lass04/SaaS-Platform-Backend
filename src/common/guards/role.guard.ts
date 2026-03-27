import { Reflector } from '@nestjs/core';
import { Injectable, ExecutionContext, CanActivate, UnauthorizedException } from '@nestjs/common';
import { Roles } from '../decorators/role.decorator';

@Injectable()
export class RoleGuard implements CanActivate{

    constructor(private reflector: Reflector){}

    canActivate(ctx:ExecutionContext){
       
        const role = this.reflector.get(Roles,ctx.getHandler());
       if(!role)
        return true;
       
       const req = ctx.switchToHttp().getRequest();
       const user = req.user;
    
       return user.role === role; 
    }

}