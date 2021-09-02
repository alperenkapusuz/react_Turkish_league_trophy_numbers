import React from "react";
import { Table } from "reactstrap";
import ziraatcupData from "../../api/ziraatcup.json";

const ZiraatCup = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th style={{textAlign:"center"}}>logo</th>
          <th style={{textAlign:"center"}}>Takım adı</th>
          <th style={{textAlign:"center"}}>Ziraat Kupası Birincliği</th>
        </tr>
      </thead>
      <tbody>
        {ziraatcupData.map((team) => {
          return (
            <tr key={team.id} >
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

export default ZiraatCup;
