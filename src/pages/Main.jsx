import React from 'react';
import styled from "styled-components";
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom';
import Header from "../components/Header";
import Cloud from "../components/Cloud";

const ZooMainStyled = styled.div`
  background-color: #343a37;
  width: 100%;
  height: 100%;
`;

const ZooMainAnimalsStyled = styled.div`
  text-align: center;
  div {
    div {
      .deadAnimal {
        background-color: rgba(250, 6, 6, 0.5);
        padding-top: 50px;
        border: 20px solid #8837b7;
        align-items: center;
        justify-content: center;
        height: 650px;
        img {
          width: 400px;
        }
        p {
          margin-top: 30px;
          color: white;
          font-size: 40px;
        }
      }

      .borderColor {
        border: 20px solid #8837b7;
        padding: 10px;
        align-items: center;
        justify-content: center;
        height: 650px;

        .imageFlex {
          display: flex;
          .greenColor {
            background-color: green !important;
          }

          .yellowColor {
            background-color: yellow !important;
          }

          .redColor {
            background-color: red !important;
          }
          .circle {
            height: 50px;
            width: 50px;
            border: 3px solid black;
            border-radius: 50%;
            margin-top: 50px;
            margin-left: 48%;
            background-color: green;
          }
          div {
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
          }
        }

        img {
          height: 300px;
        }

        p {
          font-size: 35px;
          color: white;
          text-decoration: none;
        }
        
        .birthDay {
          font-size: 25px;
        }

        button {
          cursor: pointer;
          margin-top: 10px;
          background-color: #8837b7;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          font-size: 16px;
          &.disabledButton {
            opacity: 0.5;
            cursor: text;
          }
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
                      <div className="borderColor">
                        <div className="imageFlex">
                          <div className={`${animal.hungryStatus}Color circle`}></div>
                          <div>
                            <img className="imgCloud" src="../images/cloud.png" alt="cloud"/>
                            <div className="textInImg">{animal.speech}</div>
                            {/*<Cloud />*/}
                          </div>
                        </div>
                        <Link to={`/animal/${animal.id}`}>
                          <img src={animal.src} alt="animal"/>
                        </Link>
                        <p>{animal.name}</p>
                        <p className="birthDay">Родился - {animal.birthday}</p>
                        <button className={`${animal.hungryStatus === 'green' ? `disabledButton` : ''}`} onClick={animal.hungryStatus === 'green' ? false : animal.feed}>Покормить</button>
                      </div>
                  </Grid> : <Grid item sm={12} md={6} key={animal.id}>
                      <div className="deadAnimal">
                        <img src="../images/naruto-crying.gif" alt="naruto-cry"/>
                        <p>{animal.name} захвачен Акацуки</p>
                      </div>
                    </Grid>
                ))}
              </Grid>
            </ZooMainAnimalsStyled>
          </main>
      </ZooMainStyled>

    </>
  );
}

export default Main;
