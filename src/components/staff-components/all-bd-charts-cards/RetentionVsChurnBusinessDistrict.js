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
      name: 'Turnover Rate',
      data: [12, 18, 8, 20, 15, 4, 10, 8, 6, 12],
    },
  ];

  const allGenderData = [
    {
      name: 'Male',
      data: [30, 20, 20, 25, 20, 10, 8, 13, 20, 15],
    },
    {
      name: 'Female',
      data: [50, 25, 18, 13, 20, 15, 10, 27, 25, 15],
    },
  ];

  const [filteredCategories, setFilteredCategories] = useState(allCategories);
  const [filteredData, setFilteredData] = useState(allData);
  const [filteredGenderData, setFilteredGenderData] = useState(allGenderData);
  const [month, setMonth] = useState('Months');
  const [activeState, setActiveState] = useState('All');

  const filterData = (state) => {
    if (state === 'All') {
      setFilteredCategories(allCategories);
      setFilteredData(allData);
      setFilteredGenderData(allGenderData);
      setActiveState('All');
    } else {
      const filteredCategories = allCategories.filter(category => category.includes(state));
      const filteredData = allData.map(series => ({
        ...series,
        data: series.data.filter((_, index) => allCategories[index].includes(state))
      }));
      const filteredGenderData = allGenderData.map(series => ({
        ...series,
        data: series.data.filter((_, index) => allCategories[index].includes(state))
      }));
      setFilteredCategories(filteredCategories);
      setFilteredData(filteredData);
      setFilteredGenderData(filteredGenderData);
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
        fontSize: '10px',
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
          fontSize: '10px',
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

  const optionsGenderChart = {
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
        fontSize: '10px',
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
      tickAmount: 2,
      labels: {
        style: {
          colors: textColor,
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
    },
    legend: {
      position: 'top',
      labels: {
        colors: textColor,
      },
    },
    colors: [primary, secondary],
  };

  return (
    <CardContent sx={{ p: '30px', border: `1px solid ${borderColor}` }}>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Typography variant="h5">Retention Vs. Turnover and Gender Distribution</Typography>
        
      </Stack>
      <Grid container spacing={3} mt={4}>
        <Grid item xs={12} sm={6}>
          <Box>
            <Chart options={optionsColumnChart} series={filteredData} type="bar" height="350" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>
            <Chart options={optionsGenderChart} series={filteredGenderData} type="bar" height="350" />
          </Box>
        </Grid>
      </Grid>
    </CardContent>
  );
};

export default RetentionVsChurnBusinessDistrict;
