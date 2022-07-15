import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SetResolver } from './set.resolver';
import { databaseProviders } from '../database/database.providers';
import { DatabaseModule } from '../database/database.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      driver: ApolloDriver,
    }),
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService, SetResolver, ...databaseProviders]
})
export class AppModule { }
