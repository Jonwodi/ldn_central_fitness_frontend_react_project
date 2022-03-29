import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Bar} from 'react-chartjs-2';
import Select from 'react-select';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import theme from '../theme';
import Protected from '../components/Protected';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';


const breakpoints = createBreakpoints({});

const useStyles = makeStyles((theme) => ({
box:{
  padding: '50px',
  margin: '10px auto 300px auto',
  textAlign: 'center',
  [breakpoints.down('sm')]: {
    padding: '25px',
    margin: '10px auto 300px auto',
    textAlign: 'center',
  }, 
},
}))

const drawBar = (labels, data) => {
  return {
    labels: labels,
    datasets: [
      {
        label: 'Number of avaliable bicycles per bike station address',
        data: data,
        backgroundColor: [
          theme.palette.common.green,
          theme.palette.common.green,
          theme.palette.common.green,
          theme.palette.common.green,
          theme.palette.common.green,
          theme.palette.common.green,
        ],
        borderColor: [
          theme.palette.common.grey900,
          theme.palette.common.grey900,
          theme.palette.common.grey900,
          theme.palette.common.grey900,
          theme.palette.common.grey900,
          theme.palette.common.grey900,
        ],
        borderWidth: 2,
      },
    ],
  }
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
   },
};

export default function PublicAPI() {
  const classes = useStyles();
  const publicApi_Url = "http://api.citybik.es/v2/networks/";

  const [networks, setNetworks] = useState({});
  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);
  const [result, setResult] = useState({});

  const handleChange = async (e) => {
    const response = await axios.get(`${publicApi_Url}${e.value}`, { withCredentials: false });
    setLabels([]);
    setData([]);
    response.data.network.stations.slice(0, 6).map(s => {
      setLabels(labels => [...labels, s.extra.address]);
      setData(data => [...data, s.free_bikes]);
    })
    // console.log(response.data.network);
  }    

  useEffect(() => {
    setResult(drawBar(labels, data))
  }, [labels, data]);

  useEffect(() => {
    async function fetchNetworks() {
      const response = await axios.get(publicApi_Url, { withCredentials: false });
      setNetworks(response.data.networks);
    }
    fetchNetworks();
  }, []);

  const options = []
 



  // console.log(networks);
  if (Object.keys(networks).length === 0) {
      // array empty or does not exist
      return false;
  }
  networks.slice(0,150).map((network) => {
    return options.push({value: network.id, label: network.location.city});
  }) 

  return (
    <Protected>
      <Select options={options} onChange={handleChange} />
        <Box className={classes.box}>
          <Bar data={result} options={options} className={classes.barChart}/>
        </Box>
    </Protected>
  )
}


// npm install --save react-chartjs-2 chart.js
// import {bar} from 'react-chartjs-2'