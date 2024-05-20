import { CallHandler, Injectable } from "@nestjs/common";

import { ExecutionContext,NestInterceptor} from '@nestjs/common';
import { Observable } from "rxjs";


@Injectable()
export class AppInterceptor implements NestInterceptor{
    intercept(context:ExecutionContext,next:CallHandler<any>):Observable<any>{
        console.log("this is the interceptor");
        return undefined;
    }
}