import { Post,Controller ,UseInterceptors} from "@nestjs/common";
import { AppInterceptor } from "./app.interceptors";




@Controller("app")
export class AppController{
  @Post('')
@UseInterceptors(AppInterceptor)
    hellloWorld():string{
        return 'this is the post api';
    }
}