import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Grid, Box, CardContent, Typography, Stack } from '@mui/material';
import DashboardCard from '../../shared/DashboardCard';
import { TariffData } from './dataroom-financial-abd/dataroom-financial-abd';

const TariffLossFinancialABD = ({ selectedState }) => {
  const theme = useTheme();

  const tariffLoss = selectedState
    ? TariffData[selectedState] || []
    : Object.values(TariffData).flat();
  const categories = tariffLoss.map(data => [data.name.split(' ')[0], data.name.split(' ')[1]]);
  
  const seriesData = tariffLoss.map(data => data.tariffLoss);

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
      labels: { rotate: 0 },
      axisBorder: { show: false },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false,
    },
  };

  const seriescolumnchart = [
    {
      name: 'Avg. Tariff Loss',
      data: seriesData,
    },
  ];

  return (
    <DashboardCard title="Tariff Loss" subtitle="₦/kWh">
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

export default TariffLossFinancialABD;
