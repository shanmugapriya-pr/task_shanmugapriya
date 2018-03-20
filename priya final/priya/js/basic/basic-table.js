import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import axios from 'axios';

export default class BasicTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderDetails: []
    };
  }

  componentWillMount() {
    console.log('test');
    axios.get('http://172.16.106.237:3005/order/getdata')
    .then(res => {
      const orderDetails = res.data;
      console.log(orderDetails);
      this.setState({
        orderDetails: orderDetails
      });
    })
    .catch(function(error) {
      console.log(error);
    });
  }


  render() {
    const orderDetails = this.state.orderDetails ? this.state.orderDetails : [];
    return (
      <BootstrapTable data={ orderDetails.resultArray }>
          <TableHeaderColumn dataField='orderno' isKey={ true }>Order #</TableHeaderColumn>
          <TableHeaderColumn dataField='orderdate'>Order Date</TableHeaderColumn>
          <TableHeaderColumn dataField='paymentstatus'>Payment Status</TableHeaderColumn>
          <TableHeaderColumn dataField='deliverystatus'>Delivery Status</TableHeaderColumn>
          <TableHeaderColumn dataField='customername'>Customer Name</TableHeaderColumn>
          <TableHeaderColumn dataField='emailid'>E-mail</TableHeaderColumn>
          <TableHeaderColumn dataField='amount'>Amount</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
