import { Controller, Get, ParseArrayPipe, ParseBoolPipe, Query } from '@nestjs/common';

@Controller('admin')
export class AdminController {
    @Get()
    getAdmin(@Query("isAdmin", ParseBoolPipe) isAdmin: boolean){
        return isAdmin;
    }
    @Get('/array')
    getArray(@Query("nums", new ParseArrayPipe({items: Number})) num: number[]){
        return num;
    }

}
