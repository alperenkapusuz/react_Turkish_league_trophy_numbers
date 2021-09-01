import React from "react";
import { Table } from "reactstrap";
import supercupData from "../../api/supercup.json";

const SuperCup = () => {
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>logo</th>
          <th>Takım adı</th>
          <th>Süper Kupa Birincliği</th>
        </tr>
      </thead>
      <tbody>
        {supercupData.map((team) => {
          return (
            <tr key={team.id}>
              <td>
                <img src={team.img} alt="logo"/>
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

export default SuperCup;