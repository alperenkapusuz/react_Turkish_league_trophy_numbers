import React from "react";
import { Table } from "reactstrap";
import leaguecupData from "../../api/leaguecup.json";

const LeagueCup = () => {
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>logo</th>
          <th>Takım adı</th>
          <th>Süper Lig Birincliği</th>
          <th>Süper Lig İkinciliği</th>
        </tr>
      </thead>
      <tbody>
        {leaguecupData.map((team) => {
          return (
            <tr key={team.id}>
              <td>
                <img src={team.img} />
              </td>
              <td>{team.teamName}</td>
              <td>{team.championships}</td>
              <td>{team.secondPlace}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default LeagueCup;
