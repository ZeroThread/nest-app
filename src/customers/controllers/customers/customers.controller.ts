import { Controller, Get, Param, ParseIntPipe, Req, Res } from '@nestjs/common';
import { CustomerService } from 'src/customers/service/customers/customers.service';
import { Request, Response } from 'express';

@Controller('customers')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  /** this endpoint already has a prefix of customers */
  @Get('/:id')
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
}
