import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsBoolean, IsDate, IsOptional, IsString } from 'class-validator';

export class CreateEpisodeDTO {
  @ApiProperty({
    example: 'Full stack dev episode',
  })
  @IsString()
  name: string;

  @ApiProperty({
    required: false,
    example: true,
  })
  @IsBoolean()
  @IsOptional()
  featured?: boolean;

  @ApiProperty({
    example: '2022-02-02',
  })
  @IsDate()
  @Type(() => Date)
  publishedAt: Date;
}
