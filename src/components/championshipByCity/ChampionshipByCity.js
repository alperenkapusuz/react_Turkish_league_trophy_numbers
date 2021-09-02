import React from "react";
import {  Row, Col, Card } from "reactstrap";
import Leaguecup from "../../api/leaguecup.json";
import ziraatcup from "../../api/ziraatcup.json";
import supercup from "../../api/supercup.json";

import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  LabelList,
} from "recharts";

const LeagueCup = () => {
  const data = Leaguecup;
  const data2 = ziraatcup;
  const data3 = supercup;

  return (
    <Row>
      <Card>
        <Col>
          <BarChart
            width={1250}
            height={500}
            data={data}
            margin={{ top: 30, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="teamName" tick={false} />
            <YAxis />
            <Bar dataKey="championships" fill="#8884d8">
              <LabelList dataKey="teamName" position="insideTop" angle="35" />
            </Bar>
          </BarChart>
        </Col>
      </Card>

      <Card>
        <Col>
          <BarChart
            width={1250}
            height={500}
            data={data2}
            margin={{ top: 30, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="teamName" tick={false} />
            <YAxis />
            <Bar dataKey="championships" fill="#8884d8">
              <LabelList dataKey="teamName" position="insideTop" angle="35" />
            </Bar>
          </BarChart>
        </Col>
      </Card>

      <Card>
        <Col>
          <BarChart
            width={1250}
            height={500}
            data={data3}
            margin={{ top: 30, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="teamName" tick={false} />
            <YAxis />
            <Bar dataKey="championships" fill="#8884d8">
              <LabelList dataKey="teamName" position="insideTop" angle="35" />
            </Bar>
          </BarChart>
        </Col>
      </Card>
    </Row>
  );
};

export default LeagueCup;
