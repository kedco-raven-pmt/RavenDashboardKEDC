import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Box, CardContent, Grid, Typography, Stack, Avatar } from '@mui/material';
import BlankCard from '../../shared/BlankCard';
import BlankCardTransparent from '../../shared/BlankCardTransparent';
import { TechnicalData } from './dataroom-technical-abd/dataroom-technical-abd';

const AvailabilityCompareTechnicalABD = ({ selectedState }) => {
  const theme = useTheme();
  
  const businessdistricts = selectedState
    ? TechnicalData[selectedState] || []
    : Object.values(TechnicalData).flat();

  const categories = businessdistricts.map(data => [data.name.split(' ')[0], data.name.split(' ')[1]]);
  const avgSupplyData = businessdistricts.map(data => data.avgSupply);
  const durationInterruptionData = businessdistricts.map(data => data.durationInterruption);
  const turnaroundTimeData = businessdistricts.map(data => data.turnaroundTime);

  const AvailabilityCompareChart = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 500,
      width: "100%",
    },
    colors: ['#70c78d', '#00734d', '#c5c770', '#ebebeb'],
    plotOptions: {
      bar: {
        borderRadius: 0,
        columnWidth: '70%',
        barHeight: '60%',
        endingShape: 'rounded',
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + " Hrs"; 
      },
      position: 'top',
      style: {
        fontSize: '9px',
        colors: ['#304758'],
        fontWeight: 700,
      },
      offsetY: -20,
    },
    legend: {
      show: true,
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      categories: categories,
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      tickAmount: 3,
      labels: {
        show: true,
        style: {
          colors: theme.palette.mode === 'dark' ? '#fff' : '#adb0bb',
        },
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
  };

  const AvailabilityCompareSeries = [
    {
      name: 'Avg. Hours of Supply',
      data: avgSupplyData,
    },
    {
      name: 'Duration of Interruption',
      data: durationInterruptionData,
    },
    {
      name: 'Turnaround Time',
      data: turnaroundTimeData,
    },
  ];

  return (
    <BlankCard>
      <CardContent sx={{ p: '30px' }}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Typography variant="h5">Technical Availability Comparison</Typography>
          <Stack direction="row" spacing={3}>
            {['Avg. Hours of Supply', 'Duration of Interruption', 'Turnaround Time', 'FTC'].map((label, index) => (
              <Stack direction="row" alignItems="center" spacing={1} key={index}>
                <Avatar sx={{ width: 9, height: 9, bgcolor: AvailabilityCompareChart.colors[index], svg: { display: 'none' } }}></Avatar>
                <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
                  {label}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
        <Grid container spacing={3} mt={2}>
          <Grid item xs={12}>
            <BlankCardTransparent>
              <CardContent sx={{ p: '10px' }}>
                <Box>
                  <Chart options={AvailabilityCompareChart} series={AvailabilityCompareSeries} type="bar" height="400px" />
                </Box>
              </CardContent>
            </BlankCardTransparent>
          </Grid>
        </Grid>
      </CardContent>
    </BlankCard>
  );
};

export default AvailabilityCompareTechnicalABD;
