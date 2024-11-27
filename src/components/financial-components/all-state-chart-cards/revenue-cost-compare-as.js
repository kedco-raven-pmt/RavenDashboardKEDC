import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  CardContent,
  Grid,
  Typography,
  Stack,
  Avatar,
  FormControlLabel,
} from '@mui/material';
import GreyCard from '../../shared/greycard';
import DashboardWidgetCard from '../../shared/DashboardWidgetCard';
import CostBreakdownCards from '../../shared/costbreakdowncard';
import { color, fontSize, fontWeight, padding, width } from '@mui/system';
import BlankCard from '../../shared/BlankCard';
import BlankCardTransparent from '../../shared/BlankCardTransparent';
import CustomSwitch from '../../mui-forms/theme-elements/CustomSwitch';

const RevenueCostCompareFinancialAS = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = theme.palette.primary.light;
  const secondary = theme.palette.secondary.main;
  const textColor = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.8)' : '#2A3547';

  const RevenueCostComparisonChart = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 265,
      width: '100%',
    },
    colors: ['#0074BA', '#02B7FA', '#ABC4C9', '#97BEDC', '#B3CEE6'],
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: '60%',
        barHeight: '60%',
        grouped: true,
        endingShape: 'rounded',
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return '₦' + val + ' /kWh';
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
      show: true,
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
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      tickAmount: 3,
      labels: {
        show: true,
        style: {
          colors: theme.palette.mode === 'dark' ? '#fff' : '#adb0bb',
        },
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
  };

  const RevenueCostComparisonSeries = [
    {
      name: 'Total Cost',
      data: [1273, 375, 124],
    },
    {
      name: 'Revenue Billed',
      data: [934, 253, 76],
    },
    {
      name: 'Collections',
      data: [500, 109, 46],
    },
  ];

  return (
    <BlankCard>
      <CardContent sx={{ p: '30px' }}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Typography variant="h5">Expenditure and Collections Metrics</Typography>
          <Stack direction="row" spacing={2} mt={5} justifyContent="center">
            <Stack direction="row" spacing={3}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Avatar
                  sx={{ width: 9, height: 9, bgcolor: '#0074BA', svg: { display: 'none' } }}
                ></Avatar>
                <Box>
                  <Typography
                    variant="subtitle2"
                    fontSize="12px"
                    fontWeight={700}
                    color="textSecondary"
                  >
                    Total Cost
                  </Typography>
                </Box>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Avatar
                  sx={{ width: 9, height: 9, bgcolor: '#02B7FA', svg: { display: 'none' } }}
                ></Avatar>
                <Box>
                  <Typography
                    variant="subtitle2"
                    fontSize="12px"
                    fontWeight={700}
                    color="textSecondary"
                  >
                    Revenue Billed
                  </Typography>
                </Box>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Avatar
                  sx={{ width: 9, height: 9, bgcolor: '#ABC4C9', svg: { display: 'none' } }}
                ></Avatar>
                <Box>
                  <Typography
                    variant="subtitle2"
                    fontSize="12px"
                    fontWeight={700}
                    color="textSecondary"
                  >
                    Collections
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        <Grid container spacing={3} mt={2}>
          {/* 1 */}
          <Grid item xs={12}>
            <BlankCard>
              <CardContent sx={{ p: '10px' }}>
                <Box>
                  <Chart
                    options={RevenueCostComparisonChart}
                    series={RevenueCostComparisonSeries}
                    type="bar"
                    height="265px"
                  />
                </Box>
              </CardContent>
            </BlankCard>
          </Grid>
        </Grid>
      </CardContent>
    </BlankCard>
  );
};

export default RevenueCostCompareFinancialAS;
