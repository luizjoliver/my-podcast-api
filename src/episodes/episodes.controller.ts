import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { CreateEpisodeDTO } from '../dto/createEpisode.dto';
import { ConfigService } from '../config/config.service';

@Controller('episodes')
export class EpisodesController {
  constructor(
    private episodeService: EpisodesService,
    private configService: ConfigService, //example of importing an exported service from another module
  ) {}
  @Get()
  findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc') {
    console.log(sort);

    return 'all episode ';
  }

  @Get('featured') //Http method
  findFeature() {
    return this.episodeService.featured();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.episodeService.findOne(id);
  }

  @Post()
  create(@Body() input: CreateEpisodeDTO) {
    return this.episodeService.create(input);
  }
}
