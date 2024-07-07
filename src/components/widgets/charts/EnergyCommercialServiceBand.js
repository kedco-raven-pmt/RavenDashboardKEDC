import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Box, CardContent, Grid, Typography, Stack, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const EnergyCommercialServiceBand = () => {
  const [selectedState, setSelectedState] = useState('All');

  // Chart color and theme
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = theme.palette.primary.light;
  const secondary = theme.palette.secondary.main;
  const textColor = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.8)' : '#2A3547';
  const borderColor = theme.palette.grey[100];

  const optionsColumnChart = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '65%',
        endingShape: 'rounded',
        borderRadius: 7,
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
        return val.toFixed(0) 
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Band A', 'Band B', 'Band C', 'Band D', 'Band E'],
      labels: {
        style: {
          colors: textColor,
        },
      },
    },
    yaxis: {
      tickAmount: 5,
      labels: {
        formatter: (value) => value.toFixed(0) + "%", // Format y-axis labels with '%' sign
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
      y: {
        formatter: (val) => `${val} GWh`,
      },
    },
    legend: {
      position: 'top',
      labels: {
        colors: textColor,
      },
    },
    colors: [primary, primarylight, secondary],
  };

  const seriesColumnChart = [
    {
      name: 'Energy Delivered (GWh)',
      data: [918, 443, 227, 161, 23],
    },
    {
      name: 'Energy Billed (GWh)',
      data: [639, 325, 142, 141, 17],
    },
    {
      name: 'Energy Collected (GWh)',
      data: [320, 110, 74, 59, 8],
    },
  ];

  return (
    <CardContent sx={{ p: '30px', border: `1px solid ${borderColor}` }}>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Box>
          <Typography variant="h5">Service Bands</Typography>
        </Box>
        <FormControl variant="outlined">
          <InputLabel>State</InputLabel>
          <Select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            label="State"
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Kano">Kano</MenuItem>
            <MenuItem value="Katsina">Katsina</MenuItem>
            <MenuItem value="Jigawa">Jigawa</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <Grid container spacing={3} mt={2}>
        <Grid item xs={12}>
          <Box>
            <Chart
              options={optionsColumnChart}
              series={seriesColumnChart}
              type="bar"
              height="300px"
            />
          </Box>
        </Grid>
      </Grid>
    </CardContent>
  );
};

export default EnergyCommercialServiceBand;
