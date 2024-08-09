import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Box, CardContent, Grid, Typography, Stack, Avatar, Chip, Tooltip } from '@mui/material';
import BlankCard from '../../shared/BlankCard';
import { FeederData } from './dataroom-tech-feeder/dataroom-technical-feeder';

const AvailabilityTechnicalFeeder = ({ filteredData }) => {
  const theme = useTheme();

  const FeederChartOptions = {
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
    grid: { show: false },
    xaxis: {
      categories: [['Avg. Hours of Supply'], ['Duration of Interruptions'], ['Turnaround Time']],
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
            offsetX: 0,
            offsetY: 0,
        },
    },
  };

  return (
    <BlankCard>
      <CardContent sx={{ p: '30px' }}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
        <Typography variant="h5">Availability Overview</Typography>
          <Stack direction="row" spacing={3}>
            {['Avg. Hours of Supply', 'Duration of Interruptions', 'Turnaround Time', 'FTC'].map((label, index) => (
              <Stack direction="row" alignItems="center" spacing={1} key={index}>
                <Avatar
                  sx={{ width: 9, height: 9, bgcolor: FeederChartOptions.colors[index], svg: { display: 'none' } }}
                ></Avatar>
                <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
                  {label}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>

        <Grid container spacing={3} mt={2}>
          {filteredData.map((feeder, index) => (
            <Grid item xs={12} sm={2.4} key={index}>
              <BlankCard>
                <CardContent sx={{ p: '20px' }}>
                  <Box justifyContent="center" textAlign="right">
                    <Tooltip title="Feeder Tripping Count">
                      <Chip justifyContent="center" mb={2} label={[feeder.ftc]} size="small" />
                    </Tooltip>
                  </Box>
                  <Box>
                    <Chart
                      options={FeederChartOptions}
                      series={[{ name: '', data: [feeder.avgSupplyHours, feeder.durationInterruptions, feeder.turnaroundTime] }]}
                      type="bar"
                      height="220px"
                    />
                  </Box>
                  <Stack direction="row" spacing={1} mt={1} alignItems="center" justifyContent="space-between">
                    <Typography variant="h10" fontSize="11px" fontWeight={600} textAlign="center" mb={1}>
                      {feeder.name}
                    </Typography>
                    <Avatar sx={{ bgcolor: '#f7f8f9', width: 30, height: 30 }}>
                      <Typography variant="subtitle1" fontSize="10px" color="#000">
                        {index + 1}
                      </Typography>
                    </Avatar>
                  </Stack>
                </CardContent>
              </BlankCard>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </BlankCard>
  );
};

export default AvailabilityTechnicalFeeder;
