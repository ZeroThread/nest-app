import { Module } from '@nestjs/common';
import { CustomerController } from './controllers/customers/customers.controller';
import { CustomerService } from './service/customers/customers.service';

@Module({
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomersModule {}
