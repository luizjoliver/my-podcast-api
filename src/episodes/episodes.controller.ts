import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
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
    return this.episodeService.findAll(sort);
  }

  @Get('featured') //Http method
  findFeature() {
    return this.episodeService.featured();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const episode = await this.episodeService.findOne(id);

    if (!episode)
      throw new HttpException('Epsiode not found', HttpStatus.NOT_FOUND);

    return episode;
  }

  @Post()
  create(@Body() input: CreateEpisodeDTO) {
    return this.episodeService.create(input);
  }
}
