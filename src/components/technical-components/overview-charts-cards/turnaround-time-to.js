import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { CardContent, Typography, Avatar, Grid, Stack } from '@mui/material';
import BlankCard from '../../shared/BlankCard';
import { IconArrowUpRight } from '@tabler/icons';

const TATTechnicalOverview = () => {
  // chart color
  const theme = useTheme();
  const secondary = theme.palette.secondary.main;
  const secondarylight = theme.palette.secondary.light;

  // chart
  const optionscolumnchart = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#4d5561',
      toolbar: {
        show: false,
      },
      height: 70,
      sparkline: {
        enabled: false,
      },
    },
    colors: ['#beb15b', '#d0d274', '#d5d98c', '#dfe2a6'],
    plotOptions: {
      bar: {
        borderRadius: 4,
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
      formatter: function (val) {
        return val + ' Hrs';
      },
      position: 'top',
      style: {
        fontSize: '10px',
        colors: ['#304758'],
        fontWeight: 700,
      },
      offsetY: -20,
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
      categories: [['Aug'], ['Jul'], ['Jun'], ['May']],
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
      data: [8, 7, 2, 2],
    },
  ];

  return (
    <BlankCard>
      <CardContent sx={{ p: '30px' }}>
        <Typography variant="h5">Average Turnaround Time - Faults</Typography>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" mt={3} fontWeight={600}>
              6 Hrs
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
          <Grid item xs={12}>
            <Typography
              mb={2}
              variant="subtitle2"
              whiteSpace="nowrap"
              fontWeight={600}
              textAlign="center"
            >
              Previous 4 Months
            </Typography>
            <Chart
              options={optionscolumnchart}
              series={seriescolumnchart}
              type="bar"
              height="120px"
            />
          </Grid>
        </Grid>
      </CardContent>
    </BlankCard>
  );
};

export default TATTechnicalOverview;
