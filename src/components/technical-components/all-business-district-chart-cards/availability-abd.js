import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Box, CardContent, Grid, Typography, Stack, Avatar, Tooltip, Chip } from '@mui/material';
import BlankCard from '../../shared/BlankCard';
import { TechnicalData } from './dataroom-technical-abd/dataroom-technical-abd';

const AvailabilityTechnicalABD = ({ selectedState }) => {
  const theme = useTheme();

  const businessdistricts = selectedState
    ? TechnicalData[selectedState] || []
    : Object.values(TechnicalData).flat();

  const BusinessDistrrictChartOptions = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: { show: false },
      height: 200,
      width: "100%",
    },
    colors: ['#70c78d', '#00734d', '#c5c770', '#ebebeb'],
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
    tooltip: { theme: theme.palette.mode === 'dark' ? 'dark' : 'light' },
  };

  return (
    <BlankCard>
      <CardContent sx={{ p: '30px' }}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Typography variant="h5">Technical Availability by Business District</Typography>
          <Stack direction="row" spacing={3}>
            {['Avg. Hours of Supply', 'Duration of Interruption', 'Turnaround Time', 'FTC'].map((label, index) => (
              <Stack direction="row" alignItems="center" spacing={1} key={index}>
                <Avatar sx={{ width: 9, height: 9, bgcolor: BusinessDistrrictChartOptions.colors[index], svg: { display: 'none' } }}></Avatar>
                <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
                  {label}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>

        <Grid container spacing={3} mt={2}>
          {businessdistricts.map((region, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <BlankCard>
                <CardContent sx={{ p: '20px' }}>
                  <Box justifyContent="center" textAlign="right">
                    <Tooltip title="Feeder Tripping Count">
                      <Chip justifyContent="center" mb={2} label={[3000]} size="small" />
                    </Tooltip>
                  </Box>
                  <Box>
                    <Chart
                      options={BusinessDistrrictChartOptions}
                      series={[{ name: '', data: [region.avgSupply, region.durationInterruption, region.turnaroundTime] }]}
                      type="bar"
                      height="220px"
                    />
                  </Box>
                  <Stack direction="row" spacing={1} mt={1} alignItems="center" justifyContent="space-between">
                    <Typography variant="h6" fontWeight={600} textAlign="center" mb={1}>
                      {region.name}
                    </Typography>
                    <Avatar sx={{ bgcolor: '#f7f8f9', width: 30, height: 30 }}>
                      <Typography variant="subtitle1" color="#000">
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

export default AvailabilityTechnicalABD;
