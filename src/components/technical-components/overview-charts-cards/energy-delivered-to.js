import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { CardContent, Typography, Avatar, Grid, Stack } from '@mui/material';
import BlankCard from '../../shared/BlankCard';
import { IconArrowUpRight } from '@tabler/icons';

const EnergyDeliveredTechnicalOverview = () => {
  const theme = useTheme();
  const textColor = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.9)' : '#2A3547'; // Adapts to theme mode
  const primaryColor = theme.palette.primary.main; // Using primary color for the bars

  // Updated chart options
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
    colors: [primaryColor], // Setting bar color to primary
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
        colors: [textColor],
        fontSize: '10px',
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
      categories: ['July', 'June', 'May', 'April'],
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
      data: [20, 15, 30, 25],
    },
  ];

  return (
    <BlankCard>
      <CardContent sx={{ p: '30px' }}>
        <Typography variant="h5">Energy Delivered (GWh)</Typography>
        <Grid container spacing={3}>
          <Grid item xs={7}>
            <Typography variant="h4" mt={3} fontWeight={600}>1772</Typography>
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

export default EnergyDeliveredTechnicalOverview;
