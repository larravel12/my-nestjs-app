import { Injectable } from '@nestjs/common';
import type { HelloResponseDto } from './dto/hello.dto';
import type { HealthResponseDto } from './dto/health.dto';

@Injectable()
export class AppService {
  // Existing method
  getHello(): string {
    return 'Hello, Belle!';
  }

  // Bonus Task 1: helloName method
  helloName(name: string): HelloResponseDto {
    const cleaned = name.trim();
    return {
      message: `Hello, ${cleaned}!`,
      at: new Date().toISOString(),
    };
  }

  // Bonus Task 3: health method
  health(): HealthResponseDto {
    return {
      status: 'ok',
      uptimeSeconds: Math.floor(process.uptime()),
      now: new Date().toISOString(),
    };
  }
}
