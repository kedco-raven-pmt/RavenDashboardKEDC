import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import EnergyComparisonAllStatesDashboardWidgetCard from '../../shared/EnergyComparisonAllStatesDashboardWidgetCard';
import { Box, Button, Grid, Typography } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

const EnergyOverview = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const tertiary = theme.palette.error.main;

  const [visibleSeries, setVisibleSeries] = useState([true, true, true]);

  const energyData = [
    { title: 'Delivered', value: 1772, change: 9, color: 'primary' },
    { title: 'Billed', value: 1263, change: 6, color: 'secondary' },
    { title: 'Collected', value: 989, change: -14, color: 'error' },
  ];

  const seriescolumnchart = [
    {
      name: 'Delivered (GWh)',
      data: [1273, 375, 124, 150, 200, 225, 190, 170, 219, 242, 197, 200],
      color: primary,
    },
    {
      name: 'Billed (GWh)',
      data: [934, 253, 76, 55, 80, 160, 100, 80, 142, 125, 150, 119],
      color: secondary,
    },
    {
      name: 'Collected (GWh)',
      data: [500, 109, 46, 35, 50, 120, 80, 50, 112, 96, 104, 85],
      color: tertiary,
    },
  ].filter((_, index) => visibleSeries[index]);

  const optionscolumnchart = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: '45%',
        endingShape: 'rounded',
        grouped: true,
        dataLabels: {
          position: 'top'
        }
      },
    },
    dataLabels: {
      enabled: true,
      position:"top",
      style: {
        fontSize: '8px',
        colors: [theme.palette.mode === 'dark' ? '#fff' : '#000'],
      },
      offsetY: -20,
      formatter: function (val) {
        return val.toFixed(0);
      },
    },
    legend: {
      show: true,
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar','Apr', 'May','Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      tickAmount: 3,
      labels: {
        show: true,
        style: {
          colors: theme.palette.mode === 'dark' ? '#fff' : '#adb0bb',
        },
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
  };

  const toggleSeriesVisibility = (index) => {
    const newVisibleSeries = [...visibleSeries];
    newVisibleSeries[index] = !newVisibleSeries[index];
    setVisibleSeries(newVisibleSeries);
  };

  return (
    <EnergyComparisonAllStatesDashboardWidgetCard title="Energy Comparison">
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {energyData.map((item, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => toggleSeriesVisibility(index)}
              sx={{
                bgcolor: visibleSeries[index] ? theme.palette[item.color].light : theme.palette.action.disabledBackground,
                color: visibleSeries[index] ? theme.palette[item.color].main : theme.palette.text.disabled,
                '&:hover': {
                  bgcolor: theme.palette[item.color].main,
                  color: theme.palette[item.color].contrastText,
                },
                borderRadius: '50px',
                py: 1,
                textTransform: 'none',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <Typography variant="subtitle2">
                  {item.title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="h6" fontWeight={600} mr={1}>
                    {item.value}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {item.change > 0 ? (
                      <TrendingUpIcon sx={{ color: theme.palette.success.main, fontSize: 16 }} />
                    ) : (
                      <TrendingDownIcon sx={{ color: theme.palette.error.main, fontSize: 16 }} />
                    )}
                    <Typography
                      variant="caption"
                      sx={{ color: item.change > 0 ? theme.palette.success.main : theme.palette.error.main, ml: 0.5 }}
                    >
                      {Math.abs(item.change)}%
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Button>
          </Grid>
        ))}
      </Grid>
      <Chart options={optionscolumnchart} series={seriescolumnchart} type="bar" height="345px" />
    </EnergyComparisonAllStatesDashboardWidgetCard>
  );
};

export default EnergyOverview;