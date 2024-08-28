import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { CardContent, Typography, Avatar, Grid, Stack } from '@mui/material';
import BlankCard from '../../shared/BlankCard';
import { IconArrowUpRight } from '@tabler/icons';

const AverageDurationOfInterruptionTO = () => {
  const theme = useTheme();
  const textColor = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.9)' : '#2A3547';
  const primaryColor = theme.palette.primary.main;

  const data = [
    { month: 'July', value: 20 },
    { month: 'June', value: 15 },
    { month: 'May', value: 30 },
    { month: 'April', value: 25 },
  ];

  const optionscolumnchart = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: textColor,
      toolbar: {
        show: false,
      },
      height: 150,
      sparkline: {
        enabled: false,
      },
    },
    colors: [primaryColor],
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
      offsetY: -20,
      style: {
        fontSize: '10px',
        colors: [textColor],
        fontWeight: '600',
      },
      formatter: function(val) {
        return val;
      },
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
      padding: { left: 0, right: 0 }
    },
    xaxis: {
      categories: data.map(item => item.month),
      labels: {
        show: true,
        style: {
          colors: textColor,
        },
      },
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: true,
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
      data: data.map(item => item.value),
    },
  ];

  return (
    <BlankCard>
      <CardContent sx={{ p: '30px' }}>
        <Typography variant="h5">Avg. Duration of Interruption</Typography>
        <Grid container spacing={3}>
          <Grid item xs={7}>
            <Typography variant="h4" mt={3} fontWeight={600}>10 hrs</Typography>
            <Typography variant="subtitle2" mt={1} fontSize="12px" color="textSecondary">
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
              height="150px"
            />
          </Grid>
        </Grid>
      </CardContent>
    </BlankCard>
  );
};

export default AverageDurationOfInterruptionTO;