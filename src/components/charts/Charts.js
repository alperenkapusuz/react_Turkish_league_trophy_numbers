import React from "react";
import { Row, Col, Card } from "reactstrap";
import Leaguecup from "../../api/leaguecup.json";
import ziraatcup from "../../api/ziraatcup.json";
import supercup from "../../api/supercup.json";
import superligcupImg from "../../images/superligcup.png";
import supercupImg from "../../images/supercup.png";
import ziraatcupImg from "../../images/ziraatcup.png";
import "./Charts.css"

import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  LabelList,
} from "recharts";

const Charts = () => {
  const data = Leaguecup;
  const data2 = ziraatcup;
  const data3 = supercup;

  return (
    <Row>
      <Card className="card">
        <Col>
          <h1>Süper Lig Kupası<img src={superligcupImg} alt="cup" width="60" /></h1>
          <BarChart
            width={1250}
            height={500}
            data={data}
            margin={{ top: 30, right: 30, left: 20, bottom: 30 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="teamName" tick={false} />
            <YAxis />
            <Bar dataKey="championships" fill="#ffd700">
              <LabelList dataKey="teamName" position="insideTop" angle="40" fontSize={15}/>
            </Bar>
          </BarChart>
        </Col>
      </Card>

      <Card className="card">
        <Col>
        <h1>Ziraat Türkiye Kupası<img src={ziraatcupImg} alt="cup" width="60" /></h1>
          <BarChart
            width={1250}
            height={500}
            data={data2}
            margin={{ top: 30, right: 30, left: 20, bottom: 30 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="teamName" tick={false} />
            <YAxis />
            <Bar dataKey="championships" fill="#ff4040">
              <LabelList dataKey="teamName" position="insideTop" angle="35" fontSize={17}/>
            </Bar>
          </BarChart>
        </Col>
      </Card>

      <Card className="card">
        <Col>
        <h1>Süper Kupa<img src={supercupImg} alt="cup" width="60" /></h1>
          <BarChart
            width={1250}
            height={500}
            data={data3}
            margin={{ top: 30, right: 30, left: 20, bottom: 30 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="teamName" tick={false} />
            <YAxis />
            <Bar dataKey="championships" fill="#8884d8">
              <LabelList dataKey="teamName" position="top" angle="0" fontSize={17}/>
            </Bar>
          </BarChart>
        </Col>
      </Card>

    </Row>
  );
};

export default Charts;