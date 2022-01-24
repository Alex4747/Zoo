import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Grid from '@mui/material/Grid';
import Header from "../components/Header";
import { useParams } from "react-router-dom";

const AnimalStyled = styled.div`
  background-color: #343a37;
  width: 100%;
  height: 100%;
  #e3f1ea;

  div {
    align-items: center;
    justify-content: center;
    color: white;
    div:first-child {
      img {
        width: 100%;
        padding: 10px;
      }
    }

    div:last-child {
      
      h2 {
        font-size: 40px;
        text-align: center;
        margin: 10px 0px;
      }

      p {
        font-weight: 600;
      }

      h3 {
        font-size: 30px;
        text-align: center;
        margin: 10px 0px;
      }

      img {
        width: 50%;
        display: block;
        margin: 0 auto;
      }

      .lastImg {
        margin-bottom: 20px;
      }
    }
  }
`;

function Animal({animals}) {

  let {id} = useParams();
  const animalIndex = animals.findIndex((animal) => animal.id.toString() === id.toString());

  return (
    <>
      <Header />
      <AnimalStyled>
      <Grid container spacing={0}>
          <Grid item sm={12} md={6}>
            <img src={animals[animalIndex].src} alt={animals[animalIndex].name}/>
          </Grid>
          <Grid item sm={12} md={6}>
            <h2>{animals[animalIndex].name}</h2>
            <p>{animals[animalIndex].title}</p>
            <h2>Последний дженчурики</h2>
            <h3>{animals[animalIndex].dgenName}</h3>
            <img src={animals[animalIndex].src2} alt={animals[animalIndex].dgenName}/>
            <h3>Анимационный вид</h3>
            <img className="lastImg" src={animals[animalIndex].gif} alt="gif"/>
          </Grid>
      </Grid>
      </AnimalStyled>
    </>
  );
}

export default Animal;
