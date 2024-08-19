import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { CardContent, Typography, Stack } from '@mui/material';
import BlankCard from '../../shared/BlankCard';
import { fontSize } from '@mui/system';

const FeederInterruptionsTO = () => {
  // chart color
  const theme = useTheme();
  const secondary = theme.palette.secondary.main;
  const secondarylight = theme.palette.secondary.light;

  // chart
  const optionscolumnchart = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 200,
      width: "100%",
      
    },
    colors: ['#3B80B2', '#599BC8', '#77ADD2', '#97BEDC', '#B3CEE6'],
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: '60%',
        barHeight: '60%',
        distributed: true,
        endingShape: 'rounded',
        dataLabels: {
            position: 'top', 
            
          },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return  val ;  
      },
      position: 'top',
      style: {
        fontSize: '10px',
        colors: ['#304758'],
        fontWeight: 700,
      },
      offsetY: -20 ,
      
    },
    legend: {
      show: false,
    },
    grid: {
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        show:false,
    },
    xaxis: {
      categories: [['Fault'], ['LS'], ['Permit'], ['TCN'], ],
      axisBorder: {
        show: false,
      },
      
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
      },
    },
    yaxis: {
      labels: {
        show: false,
        formatter: function (val) {
          return val + "bn";  
        }
        
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
  };
  
  const seriescolumnchart = [
    {
      name: '',
      data: [39, 40, 38, 46],
    },
  ];

  return (
    <BlankCard>
      <CardContent sx={{ p: '20px' }}>
        <Typography variant="h4">Feeder Interruptions</Typography>
        <Stack direction="row" spacing={2} justifyContent="space-between" mb={2}>
        </Stack>
        <Chart options={optionscolumnchart} series={seriescolumnchart} type="bar" height="145px" />
      </CardContent>
    </BlankCard>
  );
};

export default FeederInterruptionsTO;
