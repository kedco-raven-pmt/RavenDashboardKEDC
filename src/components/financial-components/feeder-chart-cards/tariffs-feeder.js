import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Box, Grid, Typography, Stack, Avatar, CardContent, Chip } from '@mui/material';
import BlankCard from '../../shared/BlankCard';
import { FeederData } from './dataroom-financial-feeder/dataroom-financial-feeder';

// Helper function to aggregate tariffs across DTs within feeders
const aggregateTariffs = (selectedState, selectedBusinessDistrict, selectedFeeder) => {
  const aggregated = {
    'MYTO Tariff': { sum: 0, count: 0 },
    'Billing Tariff': { sum: 0, count: 0 },
    'Collection Tariff': { sum: 0, count: 0 },
    'Tariff Loss': { sum: 0, count: 0 },
  };

  Object.entries(FeederData).forEach(([stateName, stateData]) => {
    if (selectedState && stateName !== selectedState) return;

    Object.entries(stateData.businessDistricts).forEach(([districtName, districtFeeders]) => {
      if (selectedBusinessDistrict && districtName !== selectedBusinessDistrict) return;

      districtFeeders.forEach((feeder) => {
        if (selectedFeeder && feeder.name !== selectedFeeder) return;

        feeder.DTs.forEach((dt) => {
          aggregated['MYTO Tariff'].sum += dt.tariffs[0] || 0;
          aggregated['MYTO Tariff'].count += 1;

          aggregated['Billing Tariff'].sum += dt.tariffs[1] || 0;
          aggregated['Billing Tariff'].count += 1;

          aggregated['Collection Tariff'].sum += dt.tariffs[2] || 0;
          aggregated['Collection Tariff'].count += 1;

          aggregated['Tariff Loss'].sum += dt.tariffs[3] || 0;
          aggregated['Tariff Loss'].count += 1;
        });
      });
    });
  });

  return {
    'MYTO Tariff': aggregated['MYTO Tariff'].count
      ? aggregated['MYTO Tariff'].sum / aggregated['MYTO Tariff'].count
      : 0,
    'Billing Tariff': aggregated['Billing Tariff'].count
      ? aggregated['Billing Tariff'].sum / aggregated['Billing Tariff'].count
      : 0,
    'Collection Tariff': aggregated['Collection Tariff'].count
      ? aggregated['Collection Tariff'].sum / aggregated['Collection Tariff'].count
      : 0,
    'Tariff Loss': aggregated['Tariff Loss'].count
      ? aggregated['Tariff Loss'].sum / aggregated['Tariff Loss'].count
      : 0,
  };
};

const formatAmount = (amount) => {
  return `₦${amount.toFixed(0)} /kWh`;
};

const formatCategories = (categories) => {
  return categories.map((category) => {
    const words = category.split(' ');
    return words.length > 1 ? words : [category];
  });
};

const TariffFeeder = ({ selectedState, selectedBusinessDistrict, selectedFeeder, selectedDT }) => {
  const theme = useTheme();
  const [tariffs, setTariffs] = useState(() =>
    aggregateTariffs(selectedState, selectedBusinessDistrict, selectedFeeder, selectedDT),
  );

  useEffect(() => {
    // Update tariffs when state, district, feeder, or DT changes
    const updatedTariffs = aggregateTariffs(
      selectedState,
      selectedBusinessDistrict,
      selectedFeeder,
      selectedDT,
    );
    setTariffs(updatedTariffs);
  }, [selectedState, selectedBusinessDistrict, selectedFeeder, selectedDT]);

  // Aggregate tariffs on initial load
  useEffect(() => {
    const defaultTariffs = aggregateTariffs();
    setTariffs(defaultTariffs);
  }, []);

  const categories = ['MYTO Tariff', 'Billing Tariff', 'Collection Tariff', 'Tariff Loss'];
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
    colors: ['#0074BA', '#B3CEE6', '#000', '#ABC4C9'],
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

  const chartSeries = [{ name: '', data: Object.values(tariffs) }];

  return (
    <BlankCard>
      <CardContent sx={{ p: '30px' }}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Typography variant="h5">Tariff Breakdown By Feeder</Typography>
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
                      <Typography variant="h5">
                        {formatAmount(tariffs['Collection Tariff'])}
                      </Typography>
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

export default TariffFeeder;
