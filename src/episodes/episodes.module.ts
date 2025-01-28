import { Module } from '@nestjs/common';
import { EpisodesController } from './episodes.controller';
import { ConfigModule } from 'src/config/config.module';
import { EpisodesService } from './episodes.service';
import { IsPositivePipe } from 'src/pipes/is-positive.pipe';

@Module({
  imports: [ConfigModule],
  controllers: [EpisodesController],
  providers: [EpisodesService, IsPositivePipe],
})
export class EpisodesModule {}
