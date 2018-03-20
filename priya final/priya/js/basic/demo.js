/* eslint max-len: 0 */
import React from 'react';
import BasicTable from './basic-table';


import { Col, Panel } from 'react-bootstrap';

class Demo extends React.Component {
  render() {
    return (
      <Col md={ 8 } mdOffset={ 1 }>
        <Panel header={ 'Order Details' }>
          <BasicTable/>
        </Panel>
      </Col>
    );
  }
}

export default Demo;
