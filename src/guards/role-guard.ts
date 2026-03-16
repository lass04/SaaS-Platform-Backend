import { Roles } from './../common/decorators/roles-decorator';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';   
import { Reflector } from '@nestjs/core';

@Injectable()

export class RoleGuard implements CanActivate{
    
    constructor(private reflector: Reflector){}

    canActivate(context:ExecutionContext){

        // retrieve role with Reflector.get(metadataKey,ContextHandler)
        const role = this.reflector.get(Roles,context.getHandler());
        const request = context.switchToHttp().getRequest();

        const user = request.user;
        return user.role ? this.matchRoles(user.role,role): false;
    }

    private matchRoles(arg1: string,arg2: string){
        return arg1.toLowerCase() === arg2.toLowerCase();
    }
}