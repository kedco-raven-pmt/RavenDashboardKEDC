import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { CardContent, Typography, Avatar, Grid, Stack } from '@mui/material';
import BlankCard from '../../shared/BlankCard';
import { IconArrowDownRight, IconArrowUpRight } from '@tabler/icons';

const AverageAvailabilityTechnicalOverview = () => {
  // chart color
  const theme = useTheme();
  const secondary = theme.palette.secondary.main;
  const secondarylight = theme.palette.secondary.light;

  // chart
  const optionscolumnchart = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 100,
      sparkline: {
        enabled: true,
      },
    },
    colors: ['#e4e9ec', '#e4e9ec', '#e4e9ec', '#b8c0c6'],
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: '50%',
        distributed: true,
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
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
        show: false,
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
  };
  const seriescolumnchart = [
    {
      name: '',
      data: [20, 15, 30, 25],
    },
  ];

  return (
    <BlankCard>
      <CardContent sx={{ p: '30px' }}>
        <Typography variant="h5">Avg. Hours Of Supply</Typography>
        <Grid container spacing={3}>
          <Grid item xs={7}>
            
            <Typography variant="h4" mt={3} fontWeight={600}>10 hrs</Typography>
            <Typography variant="subtitle2"  mt={1} fontSize="12px" color="textSecondary">
              (MTD: <strong>177.62 </strong>)
            </Typography>
            <Stack direction="row" spacing={1} mt={1} alignItems="center">
              <Avatar sx={{ bgcolor: 'success.light', width: 20, height: 20 }}>
                <IconArrowUpRight width={16} color="#39b69a" />
              </Avatar>
              <Typography variant="subtitle2" color="textSecondary">
                +9%
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={5}>
            <Chart
              options={optionscolumnchart}
              series={seriescolumnchart}
              type="bar"
              height="100px"
            />
          </Grid>
        </Grid>
      </CardContent>
    </BlankCard>
  );
};

export default AverageAvailabilityTechnicalOverview;
