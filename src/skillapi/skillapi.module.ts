import { Module } from "@nestjs/common"; 
import { SkillApiController } from "./skillapi.controller";
import { SkillApiService } from "./skillapi.service";

@Module({
    imports: [],
    controllers: [SkillApiController],
    providers: [SkillApiService]
})

export class SkillApiModule{}