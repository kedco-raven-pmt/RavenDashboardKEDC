import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { CardContent, Typography, Avatar, Grid, Stack } from '@mui/material';
import BlankCard from '../../shared/BlankCard';
import { IconArrowUpRight } from '@tabler/icons';

const CollectionEfficiencyWidget = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

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
    colors: [primary, secondary],
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: '65%',
        endingShape: 'rounded',
        dataLabels: {
          position: 'top',
        },
      },
    },dataLabels: {
      enabled: true,
      style: {
        fontSize: '10px',
        colors: [theme.palette.mode === 'dark' ? '#fff' : '#000'],
      },
      offsetY: -20,
    },
    legend: {
      show: true,
      position: 'bottom',
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      categories: ['Kano', 'Katsina', 'Jigawa'],
      labels: {
        style: {
          fontSize: '10px',
          fontWeight: 600,
        },
      },
    },
    yaxis: {
      show:false,
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
  };

  const seriescolumnchart = [
    {
      name: 'Actuals',
      data: [61, 43, 60],
    },
    {
      name: 'Targets',
      data: [100, 100, 100],
    },
  ];

  return (
    <BlankCard>
      <CardContent sx={{ p: '25px' }}>
        <Typography variant="h5">Collection Efficiency</Typography>
        

        <Grid container spacing={3}>
          <Grid item xs={5} sx={{ paddingRight: '10px' }}>
            <Typography variant="h4" mt={3} fontWeight={600}>58%</Typography>
            <Typography variant="subtitle2" fontSize="12px" color="textSecondary">
              (last month)
            </Typography>
            <Stack direction="row" spacing={1} mt={1} alignItems="center">
              <Avatar sx={{ bgcolor: 'error.light', width: 20, height: 20 }}>
                <IconArrowUpRight width={16} color="#FA896B" />
              </Avatar>
              <Typography variant="subtitle2" color="textSecondary">
                +2.5%
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={7}>
            <Chart
              options={optionscolumnchart}
              series={seriescolumnchart}
              type="bar"
              height="125px"
            />
          </Grid>
        </Grid>
      </CardContent>
    </BlankCard>
  );
};

export default CollectionEfficiencyWidget;
