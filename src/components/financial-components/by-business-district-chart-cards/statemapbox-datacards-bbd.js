import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { CardContent, Typography, Avatar, Grid, Stack, Chip, Box } from '@mui/material';
import BlankCard from '../../shared/BlankCard';
import { IconArrowUpRight, IconArrowDownRight } from '@tabler/icons';

const StateMapBoxDataCards = ({ title, value, chartData, stateName }) => {
  const theme = useTheme();
  const secondary = theme.palette.secondary.main;

  const calculatePercentageChange = (data) => {
    if (data.length < 2) return "0%";
    const previousValue = data[data.length - 2];
    const currentValue = data[data.length - 1];
    if (previousValue === 0) return "N/A";
    const change = ((currentValue - previousValue) / previousValue) * 100;
    return `${change.toFixed(2)}%`;
  };

  const formatNumber = (val) => {
    const billionVal = val / 1e9;
    return `₦${billionVal.toFixed(2)} B`;
  };

  const percentageChange = calculatePercentageChange(chartData);

  const optionscolumnchart = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 200,
      sparkline: {
        enabled: false,
      },
    },
    colors: ['#3B80B2', '#599BC8', '#77ADD2', '#97BEDC', '#B3CEE6','#e4e9ec', '#e4e9ec', '#e4e9ec', '#b8c0c6'],
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
        return formatNumber(val);
      },
      position: 'top',
      style: {
        fontSize: '12px',
        colors: [theme.palette.mode === 'dark' ? '#fff' : '#304758'],
        fontWeight: 600,
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
      categories: ['July', 'June', 'May', 'April'],
      labels: {
        show: true,
        style: {
          fontSize: '10px',
        },
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
      y: {
        formatter: function (val) {
          return formatNumber(val);
        },
      },
    },
    title: {
        text: '',
        align: 'center',
        style: {
          fontSize: '12px',
          fontWeight: 'bold',
          color: '#263238',
          padding: '10px',
        },
      },
  };

  const seriescolumnchart = [
    {
      name: '',
      data: chartData,
    },
  ];

  return (
    <BlankCard>
      <CardContent sx={{ p: '30px' }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5">{title}</Typography>
          <Chip label={stateName || "Select a state"} size="small" />
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" mt={3} fontWeight={600}>{value}</Typography>
            <Stack direction="row" spacing={1} mt={1} alignItems="center">
              <Avatar sx={{ bgcolor: 'success.light', width: 20, height: 20 }}>
                {percentageChange.startsWith("-") ? (
                  <IconArrowDownRight width={16} color="#d32f2f" />
                ) : (
                  <IconArrowUpRight width={16} color="#39b69a" />
                )}
              </Avatar>
              <Typography variant="subtitle2" color="textSecondary">
                {percentageChange}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Typography mb={2} variant="subtitle2" whiteSpace="nowrap" fontWeight={600} textAlign="center">
              Past Four Months
            </Typography>
            <Box mt={2}>
              <Chart
                options={optionscolumnchart}
                series={seriescolumnchart}
                type="bar"
                height="200px"
              />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </BlankCard>
  );
};

export default StateMapBoxDataCards;
