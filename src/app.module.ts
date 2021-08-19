import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SkillApiModule } from './skillapi/skillapi.module';

@Module({
  imports: [SkillApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
