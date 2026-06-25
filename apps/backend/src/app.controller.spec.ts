import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  it('should return the API status payload', () => {
    expect(appController.getStatus()).toEqual(
      expect.objectContaining({
        name: 'Marketplace API',
        status: 'ok',
      }),
    );
  });
});
