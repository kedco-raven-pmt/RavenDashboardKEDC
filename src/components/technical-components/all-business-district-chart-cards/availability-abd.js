import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Box, Button, CardContent, Grid, Typography, Stack, Avatar, ButtonGroup, Chip, Tooltip } from '@mui/material';
import BlankCard from '../../shared/BlankCard';

const AvailabilityTechnicalABD = () => {
  const theme = useTheme();
  const textColor = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.8)' : '#2A3547';

  const BusinessDistrrictChartOptions = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: { show: false },
      height: 200,
      width: "100%",
    },
    colors: ['#3B80B2', '#599BC8', '#77ADD2', '#97BEDC', '#B3CEE6'],
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
      formatter: val =>  val + " Hrs",
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
      categories: [['Total Cost'], ['Revenue Billed'], ['Collections']],
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

  const BusinessDistrictSeries = [
    { name: '', data: [11, 6, 9] },
    { name: '', data: [21, 3, 12] },
    { name: '', data: [14, 6, 10] },
    { name: '', data: [14, 6, 10] },
    { name: '', data: [14, 6, 7] },
    { name: '', data: [14, 6, 9] },
    { name: '', data: [14, 6, 11] },
    { name: '', data: [14, 6, 14] },
    { name: '', data: [14, 6, 9] },
    { name: '', data: [14, 6, 2] },
  ];

  const businessdistricts = [
    { name: "Jigawa North", series: BusinessDistrictSeries[0], id: "01", ftc: [3000] },
    { name: "Jigawa South", series: BusinessDistrictSeries[1], id: "02", ftc: [3000] },
    { name: "Kano Central", series: BusinessDistrictSeries[2], id: "03", ftc: [3000] },
    { name: "Kano East", series: BusinessDistrictSeries[3], id: "04", ftc: [3000] },
    { name: "Kano Industrial", series: BusinessDistrictSeries[4], id: "05", ftc: [3000] },
    { name: "Kano North", series: BusinessDistrictSeries[5], id: "06", ftc: [3000] },
    { name: "Kano West", series: BusinessDistrictSeries[6], id: "07", ftc: [3000] },
    { name: "Katsina Central", series: BusinessDistrictSeries[7], id: "08", ftc: [3000]},
    { name: "Katsina North", series: BusinessDistrictSeries[8], id: "09" , ftc: [3000]},
    { name: "Katsina South", series: BusinessDistrictSeries[9], id: "10" , ftc: [3000]},
  ];

  return (
    <BlankCard>
      <CardContent sx={{ p: '30px' }}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          
          <Stack direction="row" spacing={3}>
            {['Total Cost', 'Revenue Billed', 'Collections'].map((label, index) => (
              <Stack direction="row" alignItems="center" spacing={1} key={index}>
                <Avatar
                  sx={{ width: 9, height: 9, bgcolor: BusinessDistrrictChartOptions.colors[index], svg: { display: 'none' } }}
                ></Avatar>
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
                    <Chip justifyContent="center" mb={2} label={[region.ftc]} size="small"/>
                  </Tooltip>
                </Box>
                  <Box>
                    <Chart
                      options={BusinessDistrrictChartOptions}
                      series={[region.series]}
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
                        {region.id}
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
