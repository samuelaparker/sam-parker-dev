import React from 'react'
import Layout from '../components/layout'
import Card from '../components/card'
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react'
import axios from 'axios';
import styled from 'styled-components'


const URL = 'https://randomuser.me/api/'


const GridExperiment = () => {

  const [personData, setPersonData] = useState([])


  useEffect(() => {
    // Make a request for a user with a given ID
    axios.get(URL, {
      params: {
        format: JSON,
        nat: 'us',
        results: 12,
      }
    })
      .then(function (response) {
        // handle success
        // console.log(response.data.results);
        const data = response.data.results;
        setPersonData(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  
  console.log('personData:', personData)
  return (
    <Layout>
      <Helmet
        title='grid-experiment'
        meta={[
          {
            name: 'Samuel Parker',
            content: 'grid-experiment - samparker.dev',
          },
          {
            name: 'Sam Parker',
            content:
              '',
          },
        ]}>
      </Helmet>
      <div>
        <h1>Grid Experiment</h1>
        <p>This is an experiment in responsive grid layout without media queries that uses Math() functions. Each card pulls data from a random person API. </p>
        <StyledGrid>
          {personData.map(person => (
            <Card
              key={person.dob.date}
              firstName={person.name.first}
              lastName={person.name.last}
              thumbnail={person.picture.thumbnail}
              {...person}
            ></Card>
          ))}
        </StyledGrid>
        <Spacer></Spacer>
      </div>

    </Layout>
  )
}

export default GridExperiment


const StyledGrid = styled.div`
  --gap: 20px;
  --min-card-width: 30ch;
  --cols: 3;
  --preferred-value: ((var(--min-card-width) * var(--cols) - var(--gap) * 2) - 100%) * 999;
  display: grid;
  gap: var(--gap);

  /* Using min() */
  grid-template-columns:
    repeat(
      auto-fit,
      minmax(
        min(
          var(--preferred-value),
          100%),
        1fr
      )
    );

  /* Using clamp() */
  grid-template-columns:
    repeat(
      auto-fit,
      minmax(
        clamp(
          33.3333% - var(--gap),
          var(--preferred-value),
          100%),
        1fr
      )
    );
`
const Spacer = styled.div`
   height: 9rem;
   `;

