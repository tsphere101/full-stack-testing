import { Injectable } from '@nestjs/common';
import { GenericResponseDto } from './generic-response.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHealth(): GenericResponseDto {
    return {
      code: '200',
      message: 'OK',
    };
  }
}
