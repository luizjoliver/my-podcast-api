import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { CreateEpisodeDTO } from '../dto/createEpisode.dto';
import { ConfigService } from '../config/config.service';
import { IsPositivePipe } from 'src/pipes/is-positive.pipe';

@Controller('episodes')
export class EpisodesController {
  constructor(
    private episodeService: EpisodesService,
    private configService: ConfigService, //example of importing an exported service from another module
  ) {}
  @Get()
  findAll(
    @Query('sort') sort: 'asc' | 'desc' = 'desc',
    @Query('limit', new DefaultValuePipe(5), ParseIntPipe, IsPositivePipe)
    limit: number,
  ) {
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
  create(@Body(ValidationPipe) input: CreateEpisodeDTO) {
    return this.episodeService.create(input);
  }
}
