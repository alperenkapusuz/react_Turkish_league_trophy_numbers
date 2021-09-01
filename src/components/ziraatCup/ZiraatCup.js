import React from "react";
import { Table } from "reactstrap";
import ziraatcupData from "../../api/ziraatcup.json";

const ZiraatCup = () => {
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>logo</th>
          <th>Takım adı</th>
          <th>Ziraat Kupası Birincliği</th>
        </tr>
      </thead>
      <tbody>
        {ziraatcupData.map((team) => {
          return (
            <tr key={team.id}>
              <td>
                <img src={team.img} alt="logo" />
              </td>
              <td>{team.teamName}</td>
              <td>{team.championships}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ZiraatCup;
