import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Box, Grid, Typography, Stack, Avatar, CardContent, Chip } from '@mui/material';
import BlankCard from '../../shared/BlankCard';
import { FeederData } from './dataroom-financial-feeder/dataroom-financial-feeder';

// Aggregate costs including feeder and DT-level costs
const aggregateCosts = (selectedState, selectedBusinessDistrict, selectedFeeder, selectedDT) => {
  const aggregated = {
    'NBET Invoice': 0,
    'MO Invoice': 0,
    Salaries: 0,
    'Disco Opex': 0,
    Others: 0,
  };

  if (!FeederData) return aggregated;

  Object.entries(FeederData).forEach(([stateName, stateData]) => {
    if (selectedState && stateName !== selectedState) return;

    Object.entries(stateData.businessDistricts || {}).forEach(([districtName, feeders]) => {
      if (selectedBusinessDistrict && districtName !== selectedBusinessDistrict) return;

      feeders.forEach((feeder) => {
        if (selectedFeeder && feeder.name !== selectedFeeder) return;

        // Aggregate costs for Feeder
        if (feeder.costs) {
          Object.entries(feeder.costs || {}).forEach(([costType, amount]) => {
            aggregated[costType] += amount;
          });
        }

        // Aggregate costs for DTs when a feeder is selected or no specific DT is selected
        if (feeder.DTs) {
          feeder.DTs.forEach((dt) => {
            if (!selectedDT || dt.name === selectedDT) {
              if (dt.costs) {
                Object.entries(dt.costs || {}).forEach(([costType, amount]) => {
                  aggregated[costType] += amount;
                });
              }
            }
          });
        }
      });
    });
  });

  return aggregated;
};

const StateCostBreakdownFeeder = ({
  selectedState,
  selectedBusinessDistrict,
  selectedFeeder,
  selectedDT,
}) => {
  const theme = useTheme();
  const [costs, setCosts] = useState(() => aggregateCosts());

  useEffect(() => {
    // Update costs when state, district, feeder, or DT changes
    const updatedCosts = aggregateCosts(
      selectedState,
      selectedBusinessDistrict,
      selectedFeeder,
      selectedDT,
    );
    setCosts(updatedCosts);
  }, [selectedState, selectedBusinessDistrict, selectedFeeder, selectedDT]);

  // Ensure the component runs the aggregation for the initial load
  useEffect(() => {
    const defaultCosts = aggregateCosts();
    setCosts(defaultCosts);
  }, []); // Empty dependency array ensures this runs only once on initial mount

  const totalCost = Object.values(costs).reduce((sum, val) => sum + val, 0);

  const categories = Object.keys(costs);
  const data = categories.map((category) => costs[category]);

  const formatAmount = (amount) => {
    return amount >= 1000000000
      ? `₦${(amount / 1000000000).toFixed(1)}B`
      : `₦${(amount / 1000000).toFixed(1)}M`;
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
          <Typography variant="h5">Previous 4 Months Perfomance - Total Expenses</Typography>
          <Box display="flex" alignItems="left">
            <Chip
              label={
                selectedDT && selectedDT !== 'DT'
                  ? selectedDT
                  : selectedFeeder && selectedFeeder !== 'Feeder'
                  ? selectedFeeder
                  : selectedBusinessDistrict || selectedState || 'All Feeders'
              }
              size="small"
            />
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

export default StateCostBreakdownFeeder;
