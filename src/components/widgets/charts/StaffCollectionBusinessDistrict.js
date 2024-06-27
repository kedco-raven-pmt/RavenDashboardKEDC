import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Box, Button, CardContent, Grid, Typography, Stack, MenuItem, Select } from '@mui/material';

const StaffCollectionBusinessDistrict = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const textColor = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.8)' : '#2A3547';
  const borderColor = theme.palette.grey[100];

  const allCategories = [
    'Kano Industrial',
    'Kano Central',
    'Katsina North',
    'Kano North',
    'Kano East',
    'Kano West',
    'Katsina South',
    'Kano Central',
    'Jigawa South',
    'Jigawa North'
  ];

  const allCollectionsData = [40000, 32000, 23000, 20000, 19000, 12000, 8000, 6000, 6700, 6000];
  const allStaffCountData = [50, 45, 38, 38, 40, 25, 18, 40, 45, 30];

  const [filteredCategories, setFilteredCategories] = useState(allCategories);
  const [filteredCollectionsData, setFilteredCollectionsData] = useState(allCollectionsData);
  const [filteredStaffCountData, setFilteredStaffCountData] = useState(allStaffCountData);
  const [month, setMonth] = useState('Months');
  const [activeState, setActiveState] = useState('All');

  const filterData = (state) => {
    if (state === 'All') {
      setFilteredCategories(allCategories);
      setFilteredCollectionsData(allCollectionsData);
      setFilteredStaffCountData(allStaffCountData);
      setActiveState('All');
    } else {
      const filteredIndices = allCategories.map((category, index) => category.includes(state) ? index : -1).filter(index => index !== -1);
      setFilteredCategories(filteredIndices.map(index => allCategories[index]));
      setFilteredCollectionsData(filteredIndices.map(index => allCollectionsData[index]));
      setFilteredStaffCountData(filteredIndices.map(index => allStaffCountData[index]));
      setActiveState(state);
    }
  };

  const commonChartOptions = {
    chart: {
      type: 'bar',
      height: 250,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '65%',
        endingShape: 'rounded',
        borderRadius: 5,
        dataLabels: {
          position: 'top'
        }
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
        style: {
          colors: textColor,
        },
      },
    },
    grid: {
      show: true,
      borderColor: borderColor,
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
  };

  const optionsCollectionsChart = {
    ...commonChartOptions,
    dataLabels: {
      ...commonChartOptions.dataLabels,
      formatter: function (val) {
        return (val / 1000).toFixed(0) + 'k';
      },
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
      y: {
        formatter: (val) => `${val}`,
      },
    },
    colors: [primary],
  };

  const optionsStaffCountChart = {
    ...commonChartOptions,
    dataLabels: {
      ...commonChartOptions.dataLabels,
      formatter: function (val) {
        return val.toFixed(0);
      },
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
      y: {
        formatter: (val) => val,
      },
    },
    colors: [secondary],
  };

  return (
    <CardContent sx={{ p: '30px', border: `1px solid ${borderColor}` }}>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Typography variant="h5">Staff Collections Vs. Staff Count</Typography>
        <Stack spacing={1} direction="row">
          <Button 
            color="primary" 
            variant={activeState === 'Kano' ? 'contained' : 'outlined'}
            onClick={() => filterData('Kano')}
          >
            Kano
          </Button>
          <Button 
            color="primary" 
            variant={activeState === 'Katsina' ? 'contained' : 'outlined'}
            onClick={() => filterData('Katsina')}
          >
            Katsina
          </Button>
          <Button 
            color="primary" 
            variant={activeState === 'Jigawa' ? 'contained' : 'outlined'}
            onClick={() => filterData('Jigawa')}
          >
            Jigawa
          </Button>
          <Button 
            color="primary" 
            variant={activeState === 'All' ? 'contained' : 'outlined'}
            onClick={() => filterData('All')}
          >
            Reset
          </Button>
        </Stack>
      </Stack>
      <Stack direction="row" justifyContent="flex-end" mt={2}>
        <Select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          variant="outlined"
          size="small"
        >
          <MenuItem value="Months">Months</MenuItem>
          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m) => (
            <MenuItem key={m} value={m}>
              {m}
            </MenuItem>
          ))}
        </Select>
      </Stack>
      <Grid container spacing={2} mt={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" align="center">Collections Per Staff</Typography>
          <Chart 
            options={optionsCollectionsChart} 
            series={[{name: 'Collections', data: filteredCollectionsData}]} 
            type="bar" 
            height="350" 
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" align="center">Staff Count</Typography>
          <Chart 
            options={optionsStaffCountChart} 
            series={[{name: 'Staff Count', data: filteredStaffCountData}]} 
            type="bar" 
            height="350" 
          />
        </Grid>
      </Grid>
    </CardContent>
  );
};

export default StaffCollectionBusinessDistrict;