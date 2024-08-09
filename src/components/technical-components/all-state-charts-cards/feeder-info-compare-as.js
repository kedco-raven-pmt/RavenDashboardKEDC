import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Box, CardContent, Grid, Typography, Stack, Avatar } from '@mui/material';
import BlankCard from '../../shared/BlankCard';

const FeederInfoCompareTechnicalAS = () => {
  const theme = useTheme();

  const comparisonData = [
    { name: 'Kano', feederNumber: 94, customerNumber: 62, avgPeakLoad: 3.8 },
    { name: 'Katsina', feederNumber: 21, customerNumber: 32, avgPeakLoad: 5.4 },
    { name: 'Jigawa', feederNumber: 14, customerNumber: 26, avgPeakLoad: 2.0 },
  ];

  const comparisonChartOptions = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: { show: false },
      height: 300,
      width: "100%",
      zoom: { enabled: false },
    },
    colors: ['#70c78d', '#00734d', '#c5c770'],
    plotOptions: {
      bar: {
        borderRadius: 0,
        columnWidth: '60%',
        barHeight: '60%',
        endingShape: 'rounded',
        dataLabels: { position: 'top' },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: val => val,
      position: 'top',
      style: {
        fontSize: '10px',
        colors: ['#304758'],
        fontWeight: 700,
      },
      offsetY: -20,
    },
    legend: { show: true },
    grid: { yaxis: { lines: { show: false } } },
    xaxis: {
      categories: comparisonData.map(data => data.name),
      axisBorder: { show: false },
      labels: { rotate: -45 },
    },
    yaxis: {
      tickAmount: 3,
      labels: {
        show: true,
        style: { colors: theme.palette.mode === 'dark' ? '#fff' : '#adb0bb' },
      },
    },
    tooltip: { theme: theme.palette.mode === 'dark' ? 'dark' : 'light' },
  };

  const comparisonSeries = [
    { name: 'Feeder Number', data: comparisonData.map(data => data.feederNumber) },
    { name: 'Customer Number', data: comparisonData.map(data => data.customerNumber) },
    { name: 'Avg. Peak Load', data: comparisonData.map(data => data.avgPeakLoad) },
  ];

  return (
    <BlankCard>
      <CardContent sx={{ p: '30px' }}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Typography variant="h5">Feeder Info Comparison</Typography>
          <Stack direction="row" spacing={3}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Avatar sx={{ width: 9, height: 9, bgcolor: '#70c78d', svg: { display: 'none' } }}></Avatar>
              <Box>
                <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
                  Feeder Number
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Avatar sx={{ width: 9, height: 9, bgcolor: '#00734d', svg: { display: 'none' } }}></Avatar>
              <Box>
                <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
                  Customer Number
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Avatar sx={{ width: 9, height: 9, bgcolor: '#c5c770', svg: { display: 'none' } }}></Avatar>
              <Box>
                <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
                  Avg. Peak Load
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Stack>

        <Box sx={{ overflowX: 'auto' }}>
          <Box>
            <Chart options={comparisonChartOptions} series={comparisonSeries} type="bar" height="300px" />
          </Box>
        </Box>
      </CardContent>
    </BlankCard>
  );
};

export default FeederInfoCompareTechnicalAS;
