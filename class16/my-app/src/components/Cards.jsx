import React from 'react';
import { Card, Col, Row } from 'antd';
import AppButton from './Button';
const AppCard = () => {
    // console.log(user)
    return(
    
  <Row gutter={16}>
    <Col span={8}>
      <Card title="Card title" variant="borderless">
        Card content <br />
        <AppButton title={"click"} />
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Card title" variant="borderless">
        Card content <br />
        <AppButton title={"click"} />
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Card title" variant="borderless">
     Card content <br />
        <AppButton title={"click"} />
      </Card>
    </Col>
  </Row>
)
};

export default AppCard;