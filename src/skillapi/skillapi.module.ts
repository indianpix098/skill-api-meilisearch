import { Module } from "@nestjs/common"; 
import { SkillApiController } from "./skillapi.controller";
import { SkillApiService } from "./skillapi.service";
import { MeiliSearchModule } from 'nestjs-meilisearch';

@Module({
    imports: [MeiliSearchModule.forRoot({
        host: 'http://127.0.0.1:7700',
        apiKey: 'masterKey',
      }),],
    controllers: [SkillApiController],
    providers: [SkillApiService]
})

export class SkillApiModule{}