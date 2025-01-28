import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateEpisodeDTO } from 'src/dto/createEpisode.dto';
import { Episode } from 'src/entity/episode.entity.';

@Injectable() //Provides dependecy injection into another class
export class EpisodesService {
  private episodes: Episode[] = [];

  async findAll(sort: 'asc' | 'desc' = 'asc') {
    const sortAsc = (a: Episode, b: Episode) => (a.name > b.name ? 1 : -1);
    const sortDesc = (a: Episode, b: Episode) => (a.name < b.name ? 1 : -1);
    //async operation
    return sort === 'asc'
      ? this.episodes.sort(sortAsc)
      : this.episodes.sort(sortDesc);
  }

  async featured() {
    //async operation
    return this.episodes.filter((episode) => episode.featured);
  }
  async findOne(id: string) {
    //async operation
    return this.episodes.find((episodes) => episodes.id === id);
  }

  async create(createEpisodeDTO: CreateEpisodeDTO) {
    //async operation
    const newEpisode = { ...createEpisodeDTO, id: randomUUID() };
    this.episodes.push(newEpisode);

    return newEpisode;
  }
}
