import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import EnergyComparisonAllStatesDashboardWidgetCard from '../../shared/EnergyComparisonAllStatesDashboardWidgetCard';

const RetentionChurnRateState = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

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
      position: "top",
      style: {
        fontSize: '12px',
        colors: [theme.palette.mode === 'dark' ? '#fff' : '#000'],
      },
      offsetY: -20,
      formatter: (val) => `${val}%`
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
      categories: ['Kano', 'Katsina', 'Jigawa'],
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      tickAmount: 3,
      labels: {
        show: true,
        formatter: (val) => `${val}%`,
        style: {
          colors: theme.palette.mode === 'dark' ? '#fff' : '#adb0bb',
        },
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
  };

  const retentionRates = [96, 92, 90]; // Example retention rates
  const churnRates = retentionRates.map(rate => 100 - rate);

  const seriescolumnchart = [
    {
      name: 'Retention',
      data: retentionRates,
      color: primary,
    },
    {
      name: 'Churn',
      data: churnRates,
      color: secondary,
    },
  ];

  return (
    <EnergyComparisonAllStatesDashboardWidgetCard title="Retention Vs. Turnover Rate" sx={{ height: '250px' }}> 
      <Chart options={optionscolumnchart} series={seriescolumnchart} type="bar" height="345px" /> 
    </EnergyComparisonAllStatesDashboardWidgetCard>
  );
};

export default RetentionChurnRateState;
