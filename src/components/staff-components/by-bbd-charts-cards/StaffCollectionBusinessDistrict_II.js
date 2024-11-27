import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { CardContent, Grid, Typography } from '@mui/material';

const StaffCollectionBusinessDistrict_II = ({ filteredDistrict }) => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const textColor = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.8)' : '#2A3547';
  const borderColor = theme.palette.grey[100];

  const allCategories = [
    'Kano Industrial', 'Kano Central', 'Katsina North', 'Kano North', 'Kano East',
    'Kano West', 'Katsina South', 'Katsina Central', 'Jigawa South', 'Jigawa North'
  ];

  const allCollectionsData = [40000, 32000, 23000, 20000, 19000, 12000, 8000, 6000, 6700, 6000];
  const allStaffCountData = [50, 45, 38, 38, 40, 25, 18, 40, 45, 30];

  const filteredCategories = filteredDistrict
    ? allCategories.filter(category => category.includes(filteredDistrict))
    : allCategories;

  const filteredCollectionsData = filteredDistrict
    ? allCollectionsData.filter((_, index) => allCategories[index].includes(filteredDistrict))
    : allCollectionsData;

  const filteredStaffCountData = filteredDistrict
    ? allStaffCountData.filter((_, index) => allCategories[index].includes(filteredDistrict))
    : allStaffCountData;

  const commonChartOptions = {
    chart: {
      type: 'bar',
      height: 250,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '65%',
        endingShape: 'rounded',
        borderRadius: 5,
        dataLabels: { position: 'top' }
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '12px',
        colors: [theme.palette.mode === 'dark' ? '#fff' : '#000'],
      },
      offsetY: -20,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: filteredCategories,
      labels: {
        style: {
          colors: textColor,
          fontSize: '10px',
        },
      },
    },
    yaxis: {
      tickAmount: 3,
      labels: {
        style: { colors: textColor },
      },
    },
    grid: {
      show: true,
      borderColor: borderColor,
    },
    fill: { opacity: 1 },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
  };

  const optionsCollectionsChart = {
    ...commonChartOptions,
    dataLabels: {
      ...commonChartOptions.dataLabels,
      formatter: (val) => (val / 1000).toFixed(0) + 'k',
    },
    yaxis: {
      ...commonChartOptions.yaxis,
      labels: {
        ...commonChartOptions.yaxis.labels,
        formatter: (value) => value.toFixed(0),
      },
    },
    tooltip: {
      ...commonChartOptions.tooltip,
      y: { formatter: (val) => `${val}` },
    },
    colors: [primary],
  };

  const optionsStaffCountChart = {
    ...commonChartOptions,
    dataLabels: {
      ...commonChartOptions.dataLabels,
      formatter: (val) => val.toFixed(0),
    },
    yaxis: {
      ...commonChartOptions.yaxis,
      labels: {
        ...commonChartOptions.yaxis.labels,
        formatter: (value) => value.toFixed(0),
      },
    },
    tooltip: {
      ...commonChartOptions.tooltip,
      y: { formatter: (val) => val },
    },
    colors: [secondary],
  };

  return (
    <CardContent sx={{ p: '30px', border: `1px solid ${borderColor}` }}>
      <Typography variant="h5">Staff Collections Vs. Staff Count</Typography>
      <Grid container spacing={2} mt={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" align="center">Collections Per Staff</Typography>
          <Chart 
            options={optionsCollectionsChart} 
            series={[{ name: 'Collections', data: filteredCollectionsData }]} 
            type="bar" 
            height="350" 
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" align="center">Staff Count</Typography>
          <Chart 
            options={optionsStaffCountChart} 
            series={[{ name: 'Staff Count', data: filteredStaffCountData }]} 
            type="bar" 
            height="350" 
          />
        </Grid>
      </Grid>
    </CardContent>
  );
};

export default StaffCollectionBusinessDistrict_II;