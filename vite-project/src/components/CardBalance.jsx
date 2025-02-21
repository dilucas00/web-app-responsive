import React from 'react';
import { Card, Col, Row, Statistic } from 'antd';

function CardBalance() {
  return (
    <div className="w-full bg-white h-65  flex justify-center items-center pt-15 mt-30">
      <Row gutter={16} className="w-full justify-center">
        <Col xs={24} sm={24} md={12} lg={10} xl={8} className="flex p-2">
          <Card className="w-full  shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 ">
            <Statistic
              className='font-oswald '
              title="Saldo Disponivel (mês)"
              value={200.0}
              precision={2}
              valueStyle={{ color: '#62DA98' }}
              suffix="R$"
            />
          </Card>
        </Col>
        
        <Col xs={24} sm={24} md={12} lg={10} xl={8} className="flex p-2">
          <Card className="w-full shadow-lg hover:scale-105 transition-transform duration-300 ">
            <Statistic
              className='font-oswald'
              title="Gasto Mensal"
              value={50.0}
              precision={2}
              valueStyle={{ color: '#cf1322' }}
              prefix={`-`}
              suffix="R$"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default CardBalance;