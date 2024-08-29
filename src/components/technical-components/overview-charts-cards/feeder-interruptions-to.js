import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { CardContent, Typography, Stack } from '@mui/material';
import BlankCard from '../../shared/BlankCard';

const FeederInterruptionsTO = () => {
  const theme = useTheme();
  
  const data = [
    { category: 'Fault', value: 39 },
    { category: 'LS', value: 40 },
    { category: 'Permit', value: 38 },
    { category: 'TCN', value: 46 },
  ];

  const getColors = () => {
    return [
      theme.palette.primary.main,
      theme.palette.secondary.main,
      theme.palette.warning.main,
      theme.palette.error.main,
    ];
  };

  const optionscolumnchart = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: theme.palette.mode === 'dark' ? '#fff' : '#2A3547',
      toolbar: {
        show: false,
      },
      height: 200,
      width: "100%",
    },
    colors: getColors(),
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: '60%',
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
        return val;
      },
      style: {
        fontSize: '10px',
        colors: [theme.palette.mode === 'dark' ? '#fff' : '#2A3547'],
        fontWeight: 700,
      },
      offsetY: -20,
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
      show: false,
    },
    xaxis: {
      categories: data.map(item => item.category),
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: theme.palette.mode === 'dark' ? '#fff' : '#2A3547',
          fontSize: '12px',
          fontWeight: 600,
        },
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
  };
  
  const seriescolumnchart = [
    {
      name: '',
      data: data.map(item => item.value),
    },
  ];

  return (
    <BlankCard>
      <CardContent sx={{ p: '20px' }}>
        <Typography variant="h4" sx={{ color: theme.palette.mode === 'dark' ? '#fff' : '#2A3547' }}>
          Feeder Interruptions
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="space-between" mb={2} />
        <Chart 
          options={optionscolumnchart} 
          series={seriescolumnchart} 
          type="bar" 
          height="145px" 
        />
      </CardContent>
    </BlankCard>
  );
};

export default FeederInterruptionsTO;