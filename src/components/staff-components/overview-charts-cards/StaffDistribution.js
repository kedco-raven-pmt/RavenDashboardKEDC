import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import DashboardCard from '../../shared/DashboardCard';

const StaffDistribution = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  // chart
  const optionscolumnchart = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 500,
      offsetX: -20,
    },
    colors: [primary],
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: '60%',
        columnWidth: '60%',
        borderRadius: 4,
        dataLabels: {
          position: 'top'
        }
      },
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: true,
      position: "top",
      style: {
        fontSize: '12px',
        colors: [theme.palette.mode === 'dark' ? '#fff' : '#000'],
      },
      offsetY: -20,
      formatter: function (val) {
        return val.toFixed(0);
      },
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    yaxis: {
      min: 0,
      tickAmount: 3,
    },
    xaxis: {
      categories: ['Finance', 'Technical', 'Commercial', 'Admin'],
      labels: {
        style: {
          fontSize: '10px', 
          fontWeight: 600, 
          colors: theme.palette.mode === 'dark' ? '#fff' : '#000', // Improved color contrast
          whiteSpace: 'nowrap',
        }
      },
      axisTicks: {
        show: false,
      }
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false,
    },
  };

  const seriescolumnchart = [
    {
      name: 'Staff Count',
      data: [250, 330, 400, 300],
    },
  ];

  return (
    <DashboardCard
      title="Staff Distribution"
      subtitle="">
      <>
        <Chart options={optionscolumnchart} series={seriescolumnchart} type="bar" height="360px" />
      </>
    </DashboardCard>
  );
};

export default StaffDistribution;