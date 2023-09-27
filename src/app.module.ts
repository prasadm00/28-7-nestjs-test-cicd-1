import { Module } from '@nestjs/common'; //CacheModule
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [], //CacheModule.register({ store: redisStore })
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
