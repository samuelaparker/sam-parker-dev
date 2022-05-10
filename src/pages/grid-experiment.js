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
        title='grid-experiment'>
      </Helmet>
      <Wrapper>
        
        <StyledFlexGrid>
        <TextWrapper>
        <h1>Grid Experiment</h1>
        <p>This is a responsive grid made with flexbox. Each card pulls data from a random person API. </p>
        </TextWrapper>
          {personData.map(person => (
            <Card
              key={person.dob.date}
              firstName={person.name.first}
              lastName={person.name.last}
              thumbnail={person.picture.thumbnail}
              {...person}
            ></Card>
          ))}
        </StyledFlexGrid>
        
      </Wrapper>

    </Layout>
  )
}

export default GridExperiment

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  
`
const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`


const StyledFlexGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: center;
`

