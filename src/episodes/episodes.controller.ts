import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('episodes')
export class EpisodesController {
  @Get()
  findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc') {
    console.log(sort);

    return 'all episode ';
  }

  @Get('featured')
  findFeature() {
    return 'featured Epsidoes';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return `Return episode number ${id}`;
  }

  @Post()
  create(@Body() input: unknown) {
    console.log(input);

    return 'new Episode';
  }
}
