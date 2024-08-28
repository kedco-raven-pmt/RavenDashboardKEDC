import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Box, Grid, Typography, Stack, Avatar, CardContent, Chip } from '@mui/material';
import BlankCard from '../../shared/BlankCard';
import { stateCostData } from './dataroom-financial-by-bd/dataroom-financial-bbd';

const aggregateCosts = () => {
  const aggregated = {
    'NBET Invoice': 0,
    'MO Invoice': 0,
    Salaries: 0,
    'Disco Opex': 0,
    Others: 0,
  };

  Object.values(stateCostData).forEach((state) => {
    Object.values(state.businessDistricts).forEach((district) => {
      Object.keys(district.costs).forEach((key) => {
        aggregated[key] += district.costs[key] || 0;
      });
    });
  });

  return aggregated;
};

const StateCostBreakdownFinancialBBD = ({ selectedBusinessDistrict }) => {
  const theme = useTheme();

  const businessDistrict = selectedBusinessDistrict
    ? Object.values(stateCostData)
        .flatMap((state) => Object.values(state.businessDistricts))
        .find((district) => district.name === selectedBusinessDistrict)
    : null;

  const costs = businessDistrict ? businessDistrict.costs : aggregateCosts();

  const totalCost = Object.values(costs).reduce((sum, val) => sum + val, 0);

  const categories = Object.keys(costs);
  const data = categories.map((category) => costs[category]);

  const formatAmount = (amount) => {
    return amount >= 1000000000 ? `₦${(amount / 1000000000).toFixed(1)}B` : `₦${amount / 1000000}M`;
  };

  const formatCategories = (categories) => {
    return categories.map((category) => {
      const words = category.split(' ');
      return words.length > 1 ? words : [category];
    });
  };

  const formattedCategories = formatCategories(categories);

  const chartOptions = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: { show: false },
      height: 200,
      width: '100%',
    },
    colors: ['#0074BA', '#02B7FA', '#ABC4C9', '#000', '#B3CEE6'],
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: '60%',
        barHeight: '60%',
        distributed: true,
        endingShape: 'rounded',
        dataLabels: { position: 'top' },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => formatAmount(val),
      position: 'top',
      style: {
        fontSize: '10px',
        colors: ['#304758'],
        fontWeight: 700,
      },
      offsetY: -20,
    },
    legend: { show: false },
    grid: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      show: false,
    },
    xaxis: {
      categories: formattedCategories,
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { show: true },
    },
    yaxis: {
      labels: { show: false },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      y: {
        formatter: function (val) {
          return formatAmount(val);
        },
      },
    },
  };

  const chartSeries = [{ name: '', data: data }];

  return (
    <BlankCard>
      <CardContent sx={{ p: '30px' }}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Typography variant="h5">Cost And Breakdown By Business District</Typography>
          <Box display="flex" alignItems="left">
            <Chip label={selectedBusinessDistrict || 'All districts'} size="small" />
          </Box>
        </Stack>
        <Stack direction="row" spacing={3} mb={3} mt={3}>
          {categories.map((category, index) => (
            <Stack direction="row" alignItems="center" spacing={1} key={index}>
              <Avatar
                sx={{
                  width: 9,
                  height: 9,
                  bgcolor: chartOptions.colors[index],
                  svg: { display: 'none' },
                }}
              />
              <Box>
                <Typography
                  variant="subtitle2"
                  fontSize="12px"
                  fontWeight={700}
                  color="textSecondary"
                >
                  {category}
                </Typography>
              </Box>
            </Stack>
          ))}
        </Stack>

        <Grid container spacing={3} mt={2}>
          {['August', 'July', 'June', 'May'].map((month, index) => (
            <Grid item xs={12} sm={3} key={index}>
              <BlankCard>
                <CardContent sx={{ p: '20px' }}>
                  <Box>
                    <Chart options={chartOptions} series={chartSeries} type="bar" height="190px" />
                  </Box>
                  <Box mt={2}>
                    <Typography variant="h6" fontWeight={400} mb={1}>
                      {month}
                    </Typography>
                    <Stack direction="row" spacing={2} justifyContent="space-between">
                      <Typography variant="h4">{formatAmount(totalCost)}</Typography>
                      <Typography variant="subtitle1" color="success.main">
                        +2.5%
                      </Typography>
                    </Stack>
                  </Box>
                </CardContent>
              </BlankCard>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </BlankCard>
  );
};

export default StateCostBreakdownFinancialBBD;
