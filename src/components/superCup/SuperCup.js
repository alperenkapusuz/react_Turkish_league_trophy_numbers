import React from "react";
import { Table } from "reactstrap";
import supercupData from "../../api/supercup.json";

const SuperCup = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th style={{textAlign:"center"}}>logo</th>
          <th style={{textAlign:"center"}}>Takım adı</th>
          <th style={{textAlign:"center"}}>Süper Kupa Birincliği</th>
        </tr>
      </thead>
      <tbody>
        {supercupData.map((team) => {
          return (
            <tr key={team.id}>
              <td style={{textAlign:"center"}}>
                <img src={team.img} alt="logo" width="65"/>
              </td>
              <td style={{textAlign:"center", fontSize:"25px"}}>{team.teamName}</td>
              <td style={{textAlign:"center", fontSize:"30px"}}>{team.championships}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default SuperCup;