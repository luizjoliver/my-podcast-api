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
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { CreateEpisodeDTO } from '../dto/createEpisode.dto';
import { ConfigService } from '../config/config.service';
import { IsPositivePipe } from 'src/pipes/is-positive.pipe';
import { ApiKeyGuard } from 'src/guard/api-key.guard';
import {
  ApiBearerAuth,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { Episode } from 'src/entity/episode.entity.';

@ApiTags('Episodes')
@UseGuards(ApiKeyGuard)
@Controller('episodes')
export class EpisodesController {
  constructor(
    private episodeService: EpisodesService,
    private configService: ConfigService,
  ) {}

  @ApiBearerAuth('api-key') // Indica que a autenticação usa o header X-API-KEY
  @ApiOperation({ description: 'Fetch all episodes' })
  @ApiOkResponse({
    description: 'List of episodes',
    type: Episode,
    isArray: true,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'items limit',
    type: Number,
  })
  @Get()
  findAll(
    @Query('sort') sort: 'asc' | 'desc' = 'desc',
    @Query('limit', new DefaultValuePipe(5), ParseIntPipe, IsPositivePipe)
    limit: number,
  ) {
    return this.episodeService.findAll(sort);
  }

  @ApiBearerAuth('api-key')
  @ApiOperation({ description: 'Fetch all featured episodes' })
  @ApiOkResponse({ description: 'List of only featured episodes' })
  @Get('featured')
  findFeature() {
    return this.episodeService.featured();
  }

  @ApiBearerAuth('api-key')
  @ApiOperation({ description: 'Fetch episodes by id' })
  @ApiOkResponse({ description: 'The episode number requested' })
  @ApiNotFoundResponse({ description: 'Episode not found' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const episode = await this.episodeService.findOne(id);

    if (!episode)
      throw new HttpException('Episode not found', HttpStatus.NOT_FOUND);

    return episode;
  }

  @ApiBearerAuth('api-key')
  @Post()
  create(@Body(ValidationPipe) input: CreateEpisodeDTO) {
    return this.episodeService.create(input);
  }
}
