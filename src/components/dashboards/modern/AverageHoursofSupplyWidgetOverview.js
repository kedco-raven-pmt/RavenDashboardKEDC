import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { CardContent, Typography, Avatar, Grid, Stack, Box } from '@mui/material';
import BlankCard from '../../shared/BlankCard';
import { IconArrowUpRight } from '@tabler/icons';
import icon2 from '../../../assets/images/svgs/icon-HrsofSupply.svg';

const AverageHoursofSupplyWidgetOverview = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  // chart
  const optionscolumnchart = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
    },
    colors: [primary],
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: '65%',
        endingShape: 'rounded',
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + 'Hrs';
      },
      style: {
        fontSize: '10px',
        colors: [theme.palette.mode === 'dark' ? '#fff' : '#000'],
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
      categories: ['March', 'April', 'May', 'June'],
      labels: {
        style: {
          fontSize: '10px',
          fontWeight: 600,
        },
      },
    },
    yaxis: {
      show: false, // Hide y-axis
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      y: {
        formatter: function(val) {
          return  val + 'Hrs';
        }
      }
    },
    title: {
      text: 'Past Four Months',
      align: 'center',
      style: {
        fontSize: '14px',
        fontWeight: 600,
        color: theme.palette.mode === 'dark' ? '#fff' : '#000',
      },
    },
  };

  const seriescolumnchart = [
    {
      name: 'Avg Hrs of Supply',
      data: [10, 11, 9, 11], // Example data for the past 4 months
    },
  ];

  return (
    <BlankCard>
      <CardContent sx={{ p: '25px' }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <img src={icon2} alt="Total Cost Icon" style={{ width: '24px', height: '24px' }} />
          <Typography variant="h5">Average Hours of Supply</Typography>
        </Stack>

        <Grid container spacing={3} mt={2}>
          <Grid item xs={5} sx={{ paddingRight: '10px' }}>
            <Typography variant="h4" mt={3} fontWeight={600}>10 Hrs</Typography>
            <Typography variant="subtitle2" fontSize="12px" color="textSecondary">
              (last month)
            </Typography>
            <Stack direction="row" spacing={1} mt={1} alignItems="center">
              <Avatar sx={{ bgcolor: 'error.light', width: 20, height: 20 }}>
                <IconArrowUpRight width={16} color="#FA896B" />
              </Avatar>
              <Typography variant="subtitle2" color="textSecondary">
                11hrs
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={7}>
            <Box mt={2}>
              <Chart
                options={optionscolumnchart}
                series={seriescolumnchart}
                type="bar"
                height="125px"
              />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </BlankCard>
  );
};

export default AverageHoursofSupplyWidgetOverview;