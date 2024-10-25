import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Grid, Box, Chip } from '@mui/material';
import DashboardCard from '../../shared/DashboardCard';
import { collectionData } from './dataroom-financial-by-state/dataroom-financial-bs';

const aggregateCollections = (type) => {
  const aggregated = Array.from({ length: 31 }, () => 0);

  Object.values(collectionData).forEach((state) => {
    const collections = type === 'postpaid' ? state.dailyPostPaidCollections : state.dailyPrePaidCollections;
    collections.forEach((amount, index) => {
      aggregated[index] += amount;
    });
  });

  return aggregated;
};

const DailyCollectionPostPaidBS = ({ selectedState }) => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  const state = selectedState
    ? Object.values(collectionData).find(state => state.name === selectedState)
    : null;

  const dailyPostPaidCollections = state ? state.dailyPostPaidCollections : aggregateCollections('postpaid');
  

  const optionscolumnchart = {
    chart: {
      type: 'area',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: '#adb0bb',
      toolbar: { show: false },
      height: 370,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.6,
        opacityTo: 0.1,
        stops: [0, 100],
        colorStops: [
          {
            offset: 0,
            color: primary,
            opacity: 0.3
          },
          {
            offset: 100,
            color: secondary,
            opacity: 0
          }
        ]
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    dataLabels: {
      enabled: true,
      formatter: val => `₦${val}M`,
      position: 'top',
      offsetY: -10,
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
      categories: Array.from({ length: 31 }, (_, i) => [`${i + 1}`]),
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
      name: 'Daily Post-Paid Collections',
      data: dailyPostPaidCollections,
    },
  ];

  return (
    <DashboardCard
      title="Daily Collections Post-Paid (₦)"
      subtitle=""
      action={ <Box display="flex" alignItems="left">
        <Chip label={selectedState || "All state"} size="small" />
      </Box>}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box className="rounded-bars">
            <Chart
              options={optionscolumnchart}
              series={seriescolumnchart}
              type="area"
              height="390px"
            />
          </Box>
        </Grid>
      </Grid>
    </DashboardCard>
  );
};

export default DailyCollectionPostPaidBS;
