import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { CustomerService } from 'src/customers/service/customers/customers.service';
import { Request, Response } from 'express';
import { CreateCustomerDto } from 'src/customers/dto/CreateCustomer.dto';

@Controller('customers')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  /** this endpoint already has a prefix of customers */
  @Get('/:id')
  /** Using express to handle Request Response cycle */
  getCustomers(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    console.log(typeof id);

    const customer = this.customerService.findById(id);
    if (!customer)
      return res.status(404).send({ msg: `Customer not found: ${id}` });
    else return res.send(customer);
  }

  /** Using nest to handle Request Response cycle */
  @Get('/search/:id')
  searchByCustomerId(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customerService.searchCustomerById(id);
    if (customer) return customer;
    else throw new HttpException('Customer not found', HttpStatus.NOT_FOUND);
  }

  @Get('')
  getAllCustomers() {
    return this.customerService.getAllCustomers();
  }

  @Post()
  createUser(@Body() createCustomerDto: CreateCustomerDto) {
    const customer = this.customerService.createNewCustomer(createCustomerDto);
    console.log(customer);
  }
}
