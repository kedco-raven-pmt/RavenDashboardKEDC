import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Box, Button, CardContent, Grid, Typography, Stack, Avatar, Chip, Tooltip } from '@mui/material';
import BlankCard from '../../shared/BlankCard';
import DashboardWidgetCard from '../../shared/DashboardWidgetCard';
import CostBreakdownCards from '../../shared/costbreakdowncard';
import { fontSize, fontWeight, padding, width } from '@mui/system';

const AvailabilityTechnicalSBT = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const textColor = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.8)' : '#2A3547';

  // Common chart options
  const SBTChartOptions = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: { show: false },
      height: 200,
      width: "100%",
    },
    colors: ['#70c78d', '#00734d', '#c5c770', '#ebebeb', '#B3CEE6'],
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
      formatter: val => val + " Hrs",
      position: 'top',
      style: {
        fontSize: '10px',
        colors: ['#304758'],
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
      categories: [['Avg. Hours of Supply'], ['Duration of Interruption'], ['Turnaround Time']],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { show: false },
    },
    yaxis: {
      labels: {
        show: false,
        formatter: val => val + " Hrs",
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
    { name: 'Band A', data: [42, 62, 38], ftc: [300] },
    { name: 'Band B', data: [21, 32, 12], ftc: [300]  },
    { name: 'Band C', data: [14, 26, 20], ftc: [300]  },
    { name: 'Band D', data: [14, 26, 20], ftc: [300]  },
    { name: 'Band E', data: [14, 26, 20], ftc: [300]  },
  ];

  return (
    <BlankCard>
      <CardContent sx={{ p: '30px' }}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
        <Typography variant="h5">Availability Overview</Typography>
          <Stack direction="row" spacing={3}>
            {['#70c78d', '#00734d', '#c5c770', '#00000014'].map((color, index) => (
              <Stack direction="row" alignItems="center" spacing={1} key={index}>
                <Avatar sx={{ width: 9, height: 9, bgcolor: color, svg: { display: 'none' } }}></Avatar>
                <Box>
                  <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
                    {['Total Cost', 'Duration of Interruption', 'Turnaround Time', 'Feeder Tripping Rate'][index]}
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
                  <Tooltip title="Feeder Tripping Count">
                    <Chip justifyContent="center" mb={2} label={[series.ftc]} size="small"/>
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

export default AvailabilityTechnicalSBT;
