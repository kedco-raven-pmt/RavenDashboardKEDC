import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Grid, Box, Chip } from '@mui/material';
import DashboardCard from '../../shared/DashboardCard';
import { FeederData } from './dataroom-financial-feeder/dataroom-financial-feeder';

const formatAmount = (amount) => {
  if (amount >= 1000) {
    return `₦${(amount / 1000).toFixed(1)}B`;
  } else {
    return `₦${amount.toFixed(0)}M`;
  }
};

// Helper function to aggregate vendor collections
const aggregateVendorCollections = (selectedState, selectedBusinessDistrict) => {
  const aggregated = {};

  Object.values(FeederData).forEach((state) => {
    if (selectedState && state.name !== selectedState) return;

    Object.entries(state.businessDistricts || {}).forEach(([districtName, districtFeeders]) => {
      if (selectedBusinessDistrict && districtName !== selectedBusinessDistrict) return;

      districtFeeders.forEach((feeder) => {
        Object.entries(feeder.vendorCollections || {}).forEach(([vendor, collection]) => {
          if (!aggregated[vendor]) {
            aggregated[vendor] = 0;
          }
          aggregated[vendor] += collection;
        });
      });
    });
  });

  return Object.keys(aggregated).map((vendor) => ({
    name: vendor,
    data: aggregated[vendor],
  }));
};

const AgentCollectionsFeeder = ({ selectedState, selectedBusinessDistrict, selectedFeeder }) => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  const feederData =
    selectedFeeder &&
    selectedFeeder !== 'Feeder' &&
    selectedState &&
    selectedBusinessDistrict &&
    FeederData[selectedState] &&
    FeederData[selectedState].businessDistricts[selectedBusinessDistrict]
      ? FeederData[selectedState].businessDistricts[selectedBusinessDistrict].find(
          (feeder) => feeder.name === selectedFeeder,
        )
      : null;

  const vendorCollections = feederData
    ? Object.entries(feederData.vendorCollections || {}).map(([vendor, collection]) => ({
        name: vendor,
        data: collection,
      }))
    : aggregateVendorCollections(selectedState, selectedBusinessDistrict);

  const optionscolumnchart = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: '#adb0bb',
      toolbar: { show: false },
      height: 330,
    },
    colors: ['#a2c1c5'],
    plotOptions: {
      bar: {
        borderRadius: 0,
        columnWidth: '50%',
        distributed: true,
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: formatAmount,
      position: 'top',
      offsetY: -20,
      style: {
        fontSize: '10px',
        fontWeight: 700,
        colors: ['#3b78a7'],
      },
      background: '#fff',
    },
    legend: { show: false },
    grid: {
      borderColor: 'rgba(0,0,0,0.1)',
      strokeDashArray: 3,
      xaxis: { lines: { show: false } },
    },
    yaxis: {
      min: 0,
      tickAmount: 4,
    },
    xaxis: {
      categories: vendorCollections.map((vendor) => vendor.name),
      labels: { rotate: 0 },
      axisBorder: { show: false },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false,
    },
  };

  const seriescolumnchart = [
    {
      name: 'Vendor Collections',
      data: vendorCollections.map((vendor) => vendor.data),
    },
  ];

  return (
    <DashboardCard
      title="Vendor Collections (₦)"
      subtitle=""
      action={
        <Box display="flex" alignItems="left">
          <Chip
            label={
              selectedFeeder && selectedFeeder !== 'Feeder'
                ? selectedFeeder
                : selectedBusinessDistrict || selectedState || 'All Feeders'
            }
            size="small"
          />
        </Box>
      }
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box>
            <Chart
              options={optionscolumnchart}
              series={seriescolumnchart}
              type="bar"
              height="350px"
            />
          </Box>
        </Grid>
      </Grid>
    </DashboardCard>
  );
};

export default AgentCollectionsFeeder;
