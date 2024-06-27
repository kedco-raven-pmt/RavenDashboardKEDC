import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { CardContent, Typography, Stack, Box } from '@mui/material';
import BlankCard from '../../shared/BlankCard';

const Least5FeedersATCC = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  const feederNames = [
    '11KV Natsinta',
    '11KV Kut',
    '11KV Kadarko',
    '11KV Majestic',
    '11KV Nagoggo',
  ];

  const optionscolumnchart = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: theme.palette.mode === 'dark' ? '#fff' : '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 250,
    },
    colors: [primary],
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '60%',
        borderRadius: 3,
        dataLabels: {
          position: 'top'
        }
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: [theme.palette.mode === 'dark' ? '#fff' : '#adb0bb'],
      },
      offsetX: 10,
      textAnchor: 'start',
    },
    xaxis: {
      categories: feederNames,
      labels: {
        formatter: function (val) {
          return val + "%";
        }
      },
      tickAmount: 2
      },
    yaxis: {
      labels: {
        style: {
          colors: theme.palette.mode === 'dark' ? '#fff' : '#adb0bb',
        },
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      y: {
        title: {
          formatter: function (seriesName, opts) {
            return feederNames[opts.dataPointIndex] + ":";
          }
        },
        formatter: function (val) {
          return val + "%";
        }
      }
    },
    grid: {
      show: true,
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      },
    },
  };

  const seriescolumnchart = [
    {
      name: 'ATCC',
      data: [96, 97, 99, 100, 100],
    },
  ];

  return (
    <BlankCard>
      <CardContent sx={{ p: '30px' }}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h5">Least 5 Feeders - ATCC</Typography>
        </Stack>

        <Chart options={optionscolumnchart} series={seriescolumnchart} type="bar" height="250px" />

        <Stack direction="row" spacing={2} justifyContent="center">
          <Box display="flex" alignItems="center" gap={1}>
            <Box
              sx={{
                width: '8px',
                height: '8px',
                backgroundColor: 'primary.main',
                borderRadius: '100%',
              }}
            ></Box>
            <Typography variant="subtitle2" color="textSecondary">
              ATCC
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </BlankCard>
  );
};

export default Least5FeedersATCC;