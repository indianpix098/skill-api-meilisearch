import { Injectable } from '@nestjs/common';
import { InjectMeiliSearch } from 'nestjs-meilisearch';
import { MeiliSearch } from 'meilisearch';

@Injectable()
export class SkillApiService {
  public constructor(
    @InjectMeiliSearch() private readonly meiliSearch: MeiliSearch,
  ) {}
    
  }

