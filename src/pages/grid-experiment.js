import React from 'react'
import Layout from '../components/layout'
import { StyledLink } from '../assets/GlobalStyles'
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react'
import axios from 'axios';
// const axios = require('axios');

const URL = 'https://randomuser.me/api/'



const GridExperiment = () => {

  const [personData, setPersonData] = useState([])

  useEffect(() => {
    // Make a request for a user with a given ID
    axios.get(URL,  {
      params: {
      format: JSON,
      nat: 'us',
      results: 10,
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

    console.log('data', personData)
    
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
            <StyledLink to="/experiments">back</StyledLink>
           {personData.map((n,i) => {
             return <div key={i}>
             <h2>{n.name.first} {n.name.last}</h2>
             <p>{n.location.city}, {n.location.state}</p>
             <p>{n.email}</p>
             </div>
           })
           }
        </div>
        </Layout>
    )
}

export default GridExperiment


