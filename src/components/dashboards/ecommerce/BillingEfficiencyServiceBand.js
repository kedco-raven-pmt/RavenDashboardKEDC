import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';

import DashboardWidgetCard from '../../shared/DashboardWidgetCard';

const BillingEfficiencyServiceBand = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = theme.palette.primary.light;

  const data = [70, 62, 73, 75, 88];

  // chart options
  const optionscolumnchart = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: theme.palette.mode === 'dark' ? '#fff' : '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 295,
    },
    colors: [primary],
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: '45%',
        distributed: false,
        endingShape: 'rounded',
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: [theme.palette.mode === 'dark' ? '#fff' : '#000'],
      },
      offsetY: -20,
      formatter: function (val) {
        return val + "%";
      },
    },
    legend: {
      show: false,
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      categories: [['Band A'], ['Band B'], ['Band C'], ['Band D'], ['Band E']],
      axisBorder: {
        show: true,
      },
      labels: {
        style: {
          colors: theme.palette.mode === 'dark' ? '#fff' : '#adb0bb',
        },
      },
    },
    yaxis: {
      tickAmount: 5,
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

  const seriescolumnchart = [
    {
      name: 'Data',
      data: data,
    },
  ];

  return (
    <DashboardWidgetCard
      title="Billing Efficiency"
      subtitle="78%"
      dataLabel1="Last month"
      dataItem1="68%"
      dataLabel2="Target"
      dataItem2="100%"
    >
      <>
        <Chart options={optionscolumnchart} series={seriescolumnchart} type="bar" height="295px" />
      </>
    </DashboardWidgetCard>
  );
};

export default BillingEfficiencyServiceBand;
