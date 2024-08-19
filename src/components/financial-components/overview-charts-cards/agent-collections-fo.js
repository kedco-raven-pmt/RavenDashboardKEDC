import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Grid, Box } from '@mui/material';
import DashboardCard from '../../shared/DashboardCard';
import { fontSize } from '@mui/system';

const AgentCollectionFinancialOverview = () => {

  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  const optionscolumnchart = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: '#4d5561',
      fontSize: '11px',
      toolbar: { show: false },
      height: 370,
    },
    colors: ['#a2c1c5'],
    plotOptions: {                                                                                                  
      bar: {
        borderRadius: 0,
        columnWidth: '50%',
        distributed: true,
        endingShape: 'rounded',
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: val => `₦${val}M`,
      position: 'top',
      offsetY: -20,
      style: {
        fontSize: '11px',
        fontWeight: 700,
        colors: ['#4d5561'],
      },
      background: '#fff',
    },
    legend: { show: false },
    grid: {
      borderColor: 'rgba(0,0,0,0.1)',
      strokeDashArray: 3,
      xaxis: { lines: { show: false } },
    },
    yaxis: {
      min: 0,
      tickAmount: 4,
    },
    xaxis: {
      categories: [['BuyPower.ng'], ['Banahim.net'], ['Bank'], ['Cash'], ['POS'], ['powershop.ng'], ['Remita'] ],
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
      name: 'Daily Collections',
      data: [15, 27, 22, 36, 15, 10, 15],
    },
  ];

  return (
    <DashboardCard
      title="Collections By Vendors (₦)"
      subtitle=""
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box  mt={2}>
            <Chart
              options={optionscolumnchart}
              series={seriescolumnchart}
              type="bar"
              height="390px"
            />
          </Box>
        </Grid>
      </Grid>
    </DashboardCard>
  );
};

export default AgentCollectionFinancialOverview;
