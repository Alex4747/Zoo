import React from 'react';
import styled from "styled-components";
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom';
import Header from "../components/Header";

const ZooMainStyled = styled.div`
  background-color: #343a37;
  width: 100%;
  height: 100%;
`;

const ZooMainAnimalsStyled = styled.div`
  text-align: center;
  div {
    div {
      div {
        border: 20px solid #8837b7;
        padding: 10px;
        align-items: center;
        justify-content: center;

        .circle {
          height: 50px;
          width: 50px;
          border: 3px solid black;
          border-radius: 50%;
          margin: 0 auto 10px;
          background-color: green;
        }

        img {
          height: 300px;
        }

        p {
          font-size: 35px;
          color: white;
          text-decoration: none;
        }

        button {
          margin-top: 10px;
          background-color: #8837b7;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          font-size: 16px;
        }

        .greenColor {
          background-color: green;
        }

        .yellowColor {
          background-color: yellow;
        }

        .redColor {
          background-color: red;
        }
      }
    }
  }
`

function Main({animals}) {

  return (
    <>
    <Header />
      <ZooMainStyled>
          <main>
            <ZooMainAnimalsStyled>
              <Grid container spacing={0}>
                {animals.map((animal) => (
                  animal.alive ?
                  <Grid item sm={12} md={6} key={animal.id}>
                      <div>
                        <div className={`${animal.hungryStatus}Color circle`}></div>
                        <Link to={`/animal/${animal.id}`}>
                          <img src={animal.src} alt="animal"/>
                        </Link>
                        <p>{animal.name}</p>
                        <button onClick={animal.hungryStatus === 'green' ? false : animal.feed}>Покормить</button>
                      </div>
                  </Grid> : false
                ))}
              </Grid>
            </ZooMainAnimalsStyled>
          </main>
      </ZooMainStyled>

    </>
  );
}

export default Main;
