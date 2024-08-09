import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { CardContent, Typography, Stack } from '@mui/material';
import BlankCard from '../../shared/BlankCard';
import { TariffData } from './dataroom-financial-abd/dataroom-financial-abd';

const HighestTariffLossFinancialABD = ({ selectedState }) => {
  const theme = useTheme();
  const secondary = theme.palette.secondary.main;

  const tariffLoss = selectedState
    ? TariffData[selectedState] || []
    : Object.values(TariffData).flat();

  const top5Data = tariffLoss.sort((a, b) => b.tariffLoss - a.tariffLoss).slice(0, 5);
  const categories = top5Data.map(data => [data.name.split(' ')[0], data.name.split(' ')[1]]);

  const seriesData = top5Data.map(data => data.tariffLoss);

  const optionscolumnchart = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 250,
      width: "100%",
    },
    colors: ['#3B80B2', '#599BC8', '#77ADD2', '#97BEDC', '#B3CEE6'],
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: '60%',
        distributed: true,
        endingShape: 'rounded',
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return "₦" + val;  
      },
      position: 'top',
      style: {
        fontSize: '10px',
        colors: ['#304758'],
        fontWeight: 700,
      },
      offsetY: -20,
    },
    legend: {
      show: false,
    },
    grid: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      show: false,
    },
    xaxis: {
      categories: categories,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
      },
    },
    yaxis: {
      labels: {
        show: false,
        formatter: function (val) {
          return "₦" + val;  
        }
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
  };

  const seriescolumnchart = [
    {
      name: '',
      data: seriesData,
    },
  ];

  return (
    <BlankCard>
      <CardContent sx={{ p: '30px' }}>
        <Typography variant="h4">Highest Tariff Loss</Typography>
        <Stack direction="row" spacing={2} justifyContent="space-between" mb={2}>
          <Typography variant="subtitle2" color="textSecondary">
            (₦/kWh)
          </Typography>
        </Stack>
        <Chart options={optionscolumnchart} series={seriescolumnchart} type="bar" height={120} />
      </CardContent>
    </BlankCard>
  );
};

export default HighestTariffLossFinancialABD;
