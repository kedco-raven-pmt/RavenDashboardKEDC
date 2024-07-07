import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Box, Button, CardContent, Grid, Typography, Stack, MenuItem, Select } from '@mui/material';

const RetentionVsChurnBusinessDistrict = () => {
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

  const allData = [
    {
      name: 'Retention Rate',
      data: [88, 82, 90, 80, 85, 96, 90, 92, 94, 88],
    },
    {
      name: 'Churn Rate',
      data: [12, 18, 8, 20, 15, 4, 10, 8, 6, 12],
    },
  ];

  const [filteredCategories, setFilteredCategories] = useState(allCategories);
  const [filteredData, setFilteredData] = useState(allData);
  const [month, setMonth] = useState('Months');
  const [activeState, setActiveState] = useState('All');

  const filterData = (state) => {
    if (state === 'All') {
      setFilteredCategories(allCategories);
      setFilteredData(allData);
      setActiveState('All');
    } else {
      const filteredCategories = allCategories.filter(category => category.includes(state));
      const filteredData = allData.map(series => ({
        ...series,
        data: series.data.filter((_, index) => allCategories[index].includes(state))
      }));
      setFilteredCategories(filteredCategories);
      setFilteredData(filteredData);
      setActiveState(state);
    }
  };

  const optionsColumnChart = {
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
      formatter: function (val) {
        return val.toFixed(0) + '%';
      },
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
        },
      },
    },
    yaxis: {
      tickAmount: 2,
      labels: {
        style: {
          colors: textColor,
        },
        formatter: function (val) {
          return val.toFixed(0) + '%';
        },
      },
    },
    grid: {
      show: true,
      borderColor: borderColor,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      y: {
        formatter: (val) => `${val}%`,
      },
    },
    legend: {
      position: 'top',
      labels: {
        colors: textColor,
      },
    },
    colors: [primary, secondary, textColor],
  };

  return (
    <CardContent sx={{ p: '30px', border: `1px solid ${borderColor}` }}>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Typography variant="h5">Retention Vs. Churn </Typography>
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
      <Box mt={4}>
        <Chart options={optionsColumnChart} series={filteredData} type="bar" height="350" />
      </Box>
    </CardContent>
  );
};

export default RetentionVsChurnBusinessDistrict;