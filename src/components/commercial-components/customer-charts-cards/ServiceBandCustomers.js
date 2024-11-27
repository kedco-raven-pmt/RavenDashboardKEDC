import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Box, CardContent, Grid, Typography, Stack } from '@mui/material';
import BlankCard from '../../shared/BlankCard';
import { IconArrowUpRight } from '@tabler/icons';

const Customers = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = theme.palette.primary.light;
  const secondary = theme.palette.secondary.main;
  const textColor = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.8)' : '#2A3547';

  const columnChartOptions = (bandName) => ({
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      toolbar: {
        show: false,
      },
      height: 220,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        columnWidth: '55%',
        endingShape: 'rounded',
        borderRadius: 4,
        dataLabels: {
          position: 'insideEnd',
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val.toLocaleString();
      },
      style: {
        fontSize: '10px',
        colors: ['#fff'],
      },
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['MD1', 'MD2', 'Non-MD'],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: textColor,
          fontSize: '10px',
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val.toLocaleString() + " customers";
        },
      },
    },
    legend: {
      show: false,
    },
    colors: [primary, primarylight, secondary],
    title: {
      text: bandName,
      align: 'center',
      style: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: textColor,
      },
    },
  });

  const bandData = [
    { name: 'Band A', data: [35000, 32000, 30000], total: 97000 },
    { name: 'Band B', data: [30000, 28000, 26000], total: 84000 },
    { name: 'Band C', data: [20000, 18000, 16000], total: 54000 },
    { name: 'Band D', data: [10000, 9000, 8000], total: 27000 },
    { name: 'Band E', data: [6000, 5000, 4000], total: 15000 },
  ];

  return (
    <BlankCard>
      <CardContent sx={{ p: '30px' }}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Stack spacing={1}>
            <Typography variant="h5">Service Bands</Typography>
          </Stack>
        </Stack>

        <Grid container spacing={3} mt={2}>
          {bandData.map((band, index) => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
              <BlankCard>
                <CardContent sx={{ p: '30px' }}>
                  <Box>
                    <Chart
                      options={columnChartOptions(band.name)}
                      series={[{ data: band.data }]}
                      type="bar"
                      height="220px"
                      />
                      </Box>
                      <Box mt={4}>
                      <Stack direction="row" spacing={2} justifyContent="space-between">
                      <Typography variant="h4">{band.total.toLocaleString()}</Typography>
                      <Typography variant="subtitle1" color="success.main">
                      +{(Math.random() * 5).toFixed(2)}%
                      </Typography>
                      </Stack>
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
                      
                      export default Customers;
