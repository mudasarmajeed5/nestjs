import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminController } from './admin/admin.controller';
import { AdminModule } from './admin/admin.module';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [AdminModule],
  controllers: [AppController, AdminController, AuthController],
  providers: [AppService],
})
export class AppModule {}
