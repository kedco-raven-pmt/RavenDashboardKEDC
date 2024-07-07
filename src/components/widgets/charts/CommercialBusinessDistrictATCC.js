import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Box, CardContent, Typography } from '@mui/material';

const CommercialBusinessDistrictATCC = () => {
  const theme = useTheme();
  const textColor = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.8)' : '#2A3547';
  const borderColor = theme.palette.grey[100];

  const optionsLineChart = {
    chart: {
      type: 'line',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: 7,
      curve: 'smooth',
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 5,
    },
    xaxis: {
      categories: [
        'Kano Industrial',
        'Kano Central',
        'Katsina North',
        'Kano North',
        'Kano East',
        'Kano West',
        'Katsina South',
        'Kano Central',
        'Jigawa South',
        'Jigawa North'
      ],
      labels: {
        style: {
          colors: textColor,
        },
      },
    },
    yaxis: {
      tickAmount: 3,
      labels: {
        formatter: (val) => `${val}%`,
        style: {
          colors: textColor,
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'vertical',
        shadeIntensity: 0.9,
        gradientToColors: ['#FF0000'],
        inverseColors: false,
        opacityFrom: 0.9,
        opacityTo: 0.5,
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      y: {
        formatter: (val) => `${val}%`,
      },
    },
    legend: {
      position: 'top',
      labels: {
        colors: textColor,
      },
    },
    colors: ['#FF0000'],
  };

  const seriesLineChart = [
    {
      name: 'ATCC',
      data: [44, 78, 74, 76, 60, 64, 56, 55, 67, 60],
    },
  ];

  return (
    <CardContent sx={{ p: '30px', border: `1px solid ${borderColor}` }}>
      <Typography variant="h5">Business District ATCC</Typography>
      <Box mt={4}>
        <Chart options={optionsLineChart} series={seriesLineChart} type="line" height="350" />
      </Box>
    </CardContent>
  );
};

export default CommercialBusinessDistrictATCC;