import React from 'react';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';

function CardExample() {
  return ( // Adicionado return
    <div className="w-full pt-10 h-50 flex justify-center items-center  ">
      <Row gutter={16}>
        <Col span={12} className='lg:w-1/4 sm:w-1/2 w-full'>
          <Card variant="borderless">
            <Statistic
              title="Saldo"
              value={200.00}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpOutlined />}
              suffix="R$"
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card variant="borderless">
            <Statistic
              title="Prejuízos"
              value={50.00}
              precision={2}
              valueStyle={{ color: '#cf1322' }}
              prefix={<ArrowDownOutlined />}
              suffix="R$"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default CardExample;
