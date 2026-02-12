import { Controller, Get, Param, BadRequestException } from '@nestjs/common';
import { AppService } from './app.service';
import type { HelloResponseDto } from './dto/hello.dto';
import type { HealthResponseDto } from './dto/health.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Task 1: GET /
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Task 1: GET /hello/:name
  @Get('hello/:name')
  helloName(@Param('name') name: string): HelloResponseDto {
    return this.appService.helloName(name);
  }

  // Task 2: GET /square/:n
  @Get('square/:n')
  square(@Param('n') n: string) {
    const value = Number(n);
    if (!Number.isFinite(value)) {
      throw new BadRequestException('n must be a number');
    }
    return { n: value, square: value * value };
  }

  // Task 3: GET /health
  @Get('health')
  health(): HealthResponseDto {
    return this.appService.health();
  }
}
