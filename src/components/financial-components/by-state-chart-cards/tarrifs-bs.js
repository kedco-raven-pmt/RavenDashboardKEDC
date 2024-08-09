import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Stack, Typography, Avatar, Box, Chip } from '@mui/material';
import DashboardCard from '../../shared/DashboardCard';
import { tariffData } from './dataroom-financial-by-state/dataroom-financial-bs';

const formatNumberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const calculateWeightedAverageTariff = (selectedState) => {
  if (selectedState) {
    const state = Object.values(tariffData).find(state => state.name === selectedState);
    if (state) {
      return state.tariffs[2]; 
    }
    return 0;
  }

  const totalEnergyDelivered = Object.values(tariffData).reduce((sum, state) => sum + state.energyDelivered, 0);
  const weightedTariffSum = Object.values(tariffData).reduce((sum, state) => sum + (state.tariffs[2] * state.energyDelivered), 0);

  return weightedTariffSum / totalEnergyDelivered;
};

const TariffFinancialBS = ({ selectedState }) => {
  const theme = useTheme();

  const state = Object.values(tariffData).find(state => state.name === selectedState);
  const tariffs = state ? state.tariffs : [56, 62, 48, 25];

  console.log("Selected State:", selectedState);
  console.log("Tariffs:", tariffs);

  const tariffColumnChart = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 200,
      width: "100%",
    },
    colors: [  '#0074BA', '#B3CEE6', '#000', '#ABC4C9', ],
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: '60%',
        barHeight: '60%',
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
        return "₦" + formatNumberWithCommas(val) + " /kWh" ;   
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
      categories: [['MYTO Tariff'], ['Billing Tariff'], ['Collection Tariff'], ['Tariff Loss']],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
        formatter: function (val) {
          return "₦" + formatNumberWithCommas(val) + " /kWh";  
        }
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
  };

  const tariffSeries = [
    {
      name: '',
      data: tariffs,
    },
  ];

  const weightedAverageTariff = calculateWeightedAverageTariff(selectedState);

  console.log("Weighted Average Tariff:", weightedAverageTariff);

  return (
    <DashboardCard title="Tariff (₦/kWh)"
      action={<Chip label={selectedState || "All state"} size="small" />}
    >
      <Stack direction="row" spacing={3} mb={3} mt={3}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Avatar sx={{ width: 9, height: 9, bgcolor: '#3B80B2', svg: { display: 'none' } }} />
          <Box>
            <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
              MYTO Tariff
            </Typography>
          </Box>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Avatar sx={{ width: 9, height: 9, bgcolor: '#599BC8', svg: { display: 'none' } }} />
          <Box>
            <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
              Billing Tariff
            </Typography>
          </Box>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Avatar sx={{ width: 9, height: 9, bgcolor: '#77ADD2', svg: { display: 'none' } }} />
          <Box>
            <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
              Collection Tariff
            </Typography>
          </Box>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Avatar sx={{ width: 9, height: 9, bgcolor: '#97BEDC', svg: { display: 'none' } }} />
          <Box>
            <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
              Tariff Loss
            </Typography>
          </Box>
        </Stack>
      </Stack>
      <Chart options={tariffColumnChart} series={tariffSeries} type="bar" height="280px" />
      <Stack spacing={3} mt={3}>
        <Stack direction="row" spacing={2} alignItems="center" textAlign='center' justifyContent='center'>
          <Box>
            <Typography variant="h5" fontWeight="700">
              ₦{weightedAverageTariff.toFixed(2)} /kWh
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              Weighted Average Tariff
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </DashboardCard>
  );
};

export default TariffFinancialBS;
