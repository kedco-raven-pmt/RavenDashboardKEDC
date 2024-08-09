import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Grid, Box, Typography } from '@mui/material';
import DashboardCard from '../../shared/DashboardCard';
import { FeederData } from './dataroom-technical-abd/dataroom-technical-abd';

const FeederNumberTechnicalABD = ({ selectedState }) => {
  const theme = useTheme();

  const feederNumbers = selectedState
    ? FeederData[selectedState] || []
    : Object.values(FeederData).flat();
  const categories = feederNumbers.map(data => [data.name.split(' ')[0], data.name.split(' ')[1]]);
  const seriesData = feederNumbers.map(data => data.feederCount);

  const optionscolumnchart = {
    chart: {
      type: 'area',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 370,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0,
        stops: [20, 180],
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    dataLabels: {
      enabled: true,
      position: 'top',
      offsetY: -10,
      style: {
        fontSize: '10px',
        fontWeight: 700,
        color: '#000',
      },
      background: '#fff'
    },
    legend: {
      show: false,
    },
    grid: {
      borderColor: 'rgba(0,0,0,0.1)',
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    yaxis: {
      min: 0,
      tickAmount: 4,
    },
    xaxis: {
      categories: categories,
      labels: { rotate: 0, 
        style: {
        fontSize: '10px',} },
      axisBorder: { show: false },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false,
    },
  };

  const seriescolumnchart = [
    {
      name: 'Feeder Count',
      data: seriesData,
    },
  ];

  return (
    <DashboardCard title="Number of Feeders By Business District">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box className="rounded-bars">
            <Chart options={optionscolumnchart} series={seriescolumnchart} type="area" height="390px" />
          </Box>
        </Grid>
      </Grid>
    </DashboardCard>
  );
};

export default FeederNumberTechnicalABD;
