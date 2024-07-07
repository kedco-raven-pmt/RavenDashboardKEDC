import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Box, CardContent, Typography, Stack, MenuItem, Select } from '@mui/material';

const CommercialBusinessDistrictBillColl = () => {
  const theme = useTheme();
  const textColor = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.8)' : '#2A3547';
  const borderColor = theme.palette.grey[100];

  const optionsLineChart = {
    chart: {
      type: 'line',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: 7,
      curve: 'smooth',
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 5,
    },
    xaxis: {
      categories: [
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
      ],
      labels: {
        style: {
          colors: textColor,
        },
      },
    },
    yaxis: {
      tickAmount: 3,
      labels: {
        formatter: (val) => `${val}%`,
        style: {
          colors: textColor,
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'vertical',
        shadeIntensity: 0.9,
        gradientToColors: ['#00E396', '#008FFB'],
        inverseColors: false,
        opacityFrom: 0.9,
        opacityTo: 0.5,
      },
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
    colors: ['#008FFB', '#00E396'],
  };

  const seriesLineChart = {
    All: [
      {
        name: 'Billing Efficiency',
        data: [79, 72, 69, 71, 74, 81, 59, 64, 58, 65],
      },
      {
        name: 'Collection Efficiency',
        data: [71, 30, 38, 34, 54, 45, 75, 70, 57, 62],
      },
    ],
    'Billing Efficiency': [
      {
        name: 'Billing Efficiency',
        data: [79, 72, 69, 71, 74, 81, 59, 64, 58, 65],
      },
    ],
    'Collection Efficiency': [
      {
        name: 'Collection Efficiency',
        data: [71, 30, 38, 34, 54, 45, 75, 70, 57, 62],
      },
    ],
  };

  const [metric, setMetric] = useState('All');

  return (
    <CardContent sx={{ p: '30px', border: `1px solid ${borderColor}` }}>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Typography variant="h5">Business District Efficiencies</Typography>
        <Stack spacing={1} direction="row">
          <Select
            value={metric}
            onChange={(e) => setMetric(e.target.value)}
            variant="outlined"
            size="small"
          >
            {['All', 'Billing Efficiency', 'Collection Efficiency'].map((m) => (
              <MenuItem key={m} value={m}>
                {m}
              </MenuItem>
            ))}
          </Select>
        </Stack>
      </Stack>
      <Box mt={4}>
        <Chart options={optionsLineChart} series={seriesLineChart[metric]} type="line" height="350" />
      </Box>
    </CardContent>
  );
};

export default CommercialBusinessDistrictBillColl;