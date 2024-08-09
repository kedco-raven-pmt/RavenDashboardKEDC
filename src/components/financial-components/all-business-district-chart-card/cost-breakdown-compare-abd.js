import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Box, CardContent, Grid, Typography, Stack, Avatar } from '@mui/material';
import BlankCard from '../../shared/BlankCard';
import BlankCardTransparent from '../../shared/BlankCardTransparent';
import { CostData } from './dataroom-financial-abd/dataroom-financial-abd';

const formatAmount = (amount) => {
  if (amount >= 1000000000) {
    return `₦${(amount / 1000000000).toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}B`;
  }
  return `₦${(amount / 1000000).toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}M`;
};

const CostBreakdownCompareFinancialABD = ({ selectedState }) => {
  const theme = useTheme();
  
  const costs = selectedState
    ? CostData[selectedState] || []
    : Object.values(CostData).flat();

  const categories = costs.map(data => [data.name.split(' ')[0], data.name.split(' ')[1]]);
  const totalCostData = costs.map(data => data.totalCost);
  const revenueBilledData = costs.map(data => data.revenueBilled);
  const collectionsData = costs.map(data => data.collections);

  const CostBreakdownCompareChart = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 500,
      width: "100%",
    },
    colors: ['#0074BA', '#02B7FA', '#ABC4C9'],
    plotOptions: {
      bar: {
        borderRadius: 0,
        columnWidth: '70%',
        barHeight: '60%',
        endingShape: 'rounded',
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return formatAmount(val); // Format the value using the formatAmount function
      },
      position: 'top',
      style: {
        fontSize: '9px',
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
      categories: categories,
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
        formatter: function (val) {
            return formatAmount(val);  
          }
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      formatter: function (val) {
        return formatAmount(val);  
      }
    },
  };

  const CostBreakdownCompareSeries = [
    {
      name: 'Total Cost',
      data: totalCostData,
    },
    {
      name: 'Revenue Billed',
      data: revenueBilledData,
    },
    {
      name: 'Collections',
      data: collectionsData,
    },
  ];

  return (
    <BlankCard>
      <CardContent sx={{ p: '30px' }}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Typography variant="h5">Expenditure and Collections</Typography>
          <Stack direction="row" spacing={3}>
            {['Total Cost', 'Revenue Billed', 'Collections'].map((label, index) => (
              <Stack direction="row" alignItems="center" spacing={1} key={index}>
                <Avatar
                  sx={{ width: 9, height: 9, bgcolor: CostBreakdownCompareChart.colors[index], svg: { display: 'none' } }}
                ></Avatar>
                <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
                  {label}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
        <Grid container spacing={3} mt={2}>
          <Grid item xs={12}>
            <BlankCardTransparent>
              <CardContent sx={{ p: '10px' }}>
                <Box>
                  <Chart options={CostBreakdownCompareChart} series={CostBreakdownCompareSeries} type="bar" height="400px" />
                </Box>
              </CardContent>
            </BlankCardTransparent>
          </Grid>
        </Grid>
      </CardContent>
    </BlankCard>
  );
};

export default CostBreakdownCompareFinancialABD;
