import React from "react";
import { Table, Row, Col } from "reactstrap";
//import championships_by_city from "../../api/championship_by_city.json";
import Leaguecup from "../../api/leaguecup.json";
import ziraatcup from "../../api/ziraatcup.json";

import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

const LeagueCup = () => {

  const data = Leaguecup;

  return (
    <Row>
      {/* <Col xs="3">
        <Table bordered>
          <thead>
            <tr>
              <th>Şehir</th>
              <th>Şampiyonluk Sayısı</th>
            </tr>
          </thead>
          <tbody>
            {championships_by_city.map((data) => {
              return (
                <tr key={data.id}>
                  <td>{data.city}</td>
                  <td>{data.championship}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Col> */}
      <Col xs="5">
        <BarChart width={970} height={500} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="teamName"/>
          <YAxis dataKey="championships"/>
          <Tooltip />
          <Legend />
          <Bar dataKey="championships" fill="#8884d8" />
        </BarChart>
      </Col>
    </Row>
  );
};

export default LeagueCup;
