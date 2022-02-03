import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Grid from '@mui/material/Grid';
import Header from "../components/Header";
import { useParams } from "react-router-dom";

const CloudStyled = styled.div`
  position: relative;
  text-align: center;
  .imgCloud {
    margin-right: -100%;
    width: 200px;
    height: 150px;
  }
  .textInImg {
    width: 140px;
    margin: 0 auto;
    text-align: center;
    position: absolute;
    bottom: 60px;
    left: 140px;
    font-size: 18px;
    font-weight: bold;
  }
`;

function Cloud({animals}) {

  const a = {
    green: 'Полный бак, дай полежать',
    yellow: 'Ну, печенюшку скушаю',
    red: 'Дайте покушоц пожалуйсто',
  }



  return (
    <CloudStyled>
      {animals.map((animal) => (
        animal.alive ?
          <div>
            <img className="imgCloud" src="../images/cloud.png" alt="cloud"/>
            <div className="textInImg">{animal.speech}</div>
          </div> : false
        ))}
    </CloudStyled>
  );
}

export default Cloud;
