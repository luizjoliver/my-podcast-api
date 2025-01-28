import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateEpisodeDTO {
  @IsString()
  name: string;

  @IsBoolean()
  @IsOptional()
  featured?: boolean;
}
