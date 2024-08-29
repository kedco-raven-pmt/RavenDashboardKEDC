import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Box, Button, CardContent, Grid, Typography, Stack, Avatar, Chip, Tooltip } from '@mui/material';
import BlankCard from '../../shared/BlankCard';

const BreakdownCommercialSBT = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const redColor = '#009688'; 

  // Common chart options
  const SBTChartOptions = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.8)' : '#2A3547',
      toolbar: { show: false },
      height: 200,
      width: "100%",
    },
    colors: [primary, secondary, redColor], 
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: '60%',
        barHeight: '60%',
        distributed: true,
        endingShape: 'rounded',
        dataLabels: { position: 'top' },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: val =>  val + " MW",
      position: 'top',
      style: {
        fontSize: '10px',
        colors: [theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.8)' : '#304758'], // Ensure visibility in dark mode
        fontWeight: 700,
      },
      offsetY: -20,
    },
    legend: { show: false },
    grid: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      show: false,
    },
    xaxis: {
      categories: [['Energy Delivered'], ['Energy Billed'], ['Energy Collected']],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { show: false },
    },
    yaxis: {
      labels: {
        show: false,
        formatter: val => val + " MW",
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fixed: {
        enabled: true,
        position: 'topRight',
      },
    },
  };

  const servicebanddata = [
    { name: 'Band A', data: [62, 52, 48], atcc: [65] },
    { name: 'Band B', data: [38, 32, 22], atcc: [65]  },
    { name: 'Band C', data: [34, 26, 20], atcc: [65]  },
    { name: 'Band D', data: [24, 16, 10], atcc: [65]  },
    { name: 'Band E', data: [21, 10, 5], atcc: [65]  },
  ];

  return (
    <BlankCard >
      <CardContent sx={{ p: '30px' }}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
        <Stack spacing={1}>
            <Typography variant="h5">Service Bands</Typography>
          </Stack>
          <Stack direction="row" spacing={3}>
            {['Energy Delivered', 'Energy Billed', 'Energy Collected', 'ATC&C'].map((label, index) => (
              <Stack direction="row" alignItems="center" spacing={1} key={index}>
                <Avatar sx={{ width: 9, height: 9, bgcolor: index === 3 ? redColor : (index % 2 === 0 ? primary : secondary), svg: { display: 'none' } }}></Avatar>
                <Box>
                  <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
                    {label}
                  </Typography>
                </Box>
              </Stack>
            ))}
          </Stack>
        </Stack>

        <Grid container spacing={3} mt={2}>
          {servicebanddata.map((series, index) => (
            <Grid item xs={12} sm={2.4} key={index}>
              <BlankCard>
                <CardContent sx={{ p: '20px' }}>
                <Box justifyContent="center" textAlign="right">
                  <Tooltip title="ATC&C">
                    <Chip justifyContent="center" mb={2} label={[series.atcc] + "%"} size="small"/>
                  </Tooltip>
                </Box>
                  <Box>
                    <Chart
                      options={SBTChartOptions}
                      series={[{ name: '', data: series.data }]}
                      type="bar"
                      height="220px"
                    />
                  </Box>
                  <Box justifyContent="center" mt={1}>
                    <Typography variant="h6" fontWeight={600} textAlign="center" mb={1}>
                      {series.name}
                    </Typography>
                  </Box>
                </CardContent>
              </BlankCard>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </BlankCard>
  );
};

export default BreakdownCommercialSBT;
