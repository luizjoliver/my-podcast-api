import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';

export class Episode {
  @ApiProperty({
    example: 'Front end developer Episode',
  })
  name: string;
  @ApiProperty({
    example: `${randomUUID()}`,
  })
  id: string;
  @ApiProperty({
    example: true,
    required: false,
  })
  featured?: boolean;
}
