import React from "react";
import { Table } from "reactstrap";
import leaguecupData from "../../api/leaguecup.json";

const LeagueCup = () => {
  return (
    <Table>
      <thead className="thead">
        <tr>
          <th style={{textAlign:"center"}}>logo</th>
          <th style={{textAlign:"center"}}>Takım adı</th>
          <th style={{textAlign:"center"}}>Süper Lig Birincliği</th>
          <th style={{textAlign:"center"}}>Süper Lig İkinciliği</th>
        </tr>
      </thead>
      <tbody>
        {leaguecupData.map((team) => {
          return (
            <tr key={team.id}>
              <td style={{textAlign:"center"}}>
                <img src={team.img} alt="logo" width="65"/>
              </td>
              <td style={{textAlign:"center", fontSize:"25px"}}>{team.teamName}</td>
              <td style={{textAlign:"center", fontSize:"30px"}}>{team.championships}</td>
              <td style={{textAlign:"center", fontSize:"30px"}}>{team.secondPlace}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default LeagueCup;