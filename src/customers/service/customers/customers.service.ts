import { Injectable } from '@nestjs/common';
import { Customer } from 'src/customers/controllers/types/Customer';
import { CreateCustomerDto } from '../../dto/CreateCustomer.dto';

@Injectable()
export class CustomerService {
  private customers: Customer[] = [
    {
      id: 1,
      email: 'divine@test.com',
      name: 'divinewill',
    },
    {
      id: 2,
      email: 'test@test.com',
      name: 'test',
    },
    {
      id: 3,
      email: 'testing@test.com',
      name: 'testing',
    },
  ];
  findById(id: number) {
    return this.customers.find((user) => user.id === id);
  }

  searchCustomerById(id: number) {
    return this.findById(id);
  }

  createNewCustomer(createCustomerDto: CreateCustomerDto) {
    return this.customers.push(createCustomerDto);
  }

  getAllCustomers() {
    return this.customers;
  }
}
