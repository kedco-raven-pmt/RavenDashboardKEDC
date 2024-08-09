import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, Stack, Typography, Chip } from '@mui/material';
import DashboardCard from '../../shared/DashboardCard';
import { stateCostData } from './dataroom-financial-by-bd/dataroom-financial-bbd';

const aggregateCosts = () => {
  const aggregated = {
    'NBET Invoice': 0,
    'MO Invoice': 0,
    'Salaries': 0,
    'Disco Opex': 0,
    'Others': 0
  };

  Object.values(stateCostData).forEach(state => {
    Object.values(state.businessDistricts).forEach(businessDistrict => {
      Object.keys(businessDistrict.costs).forEach(key => {
        aggregated[key] += businessDistrict.costs[key];
      });
    });
  });

  return aggregated;
};

const formatAmount = (amount) => {
  if (amount >= 1000000000) {
    return `₦${(amount / 1000000000).toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}B`;
  }
  return `₦${(amount / 1000000).toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}M`;
};

const formatNumberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const StateCostBreakdownFinancialBBD = ({ selectedBusinessDistrict }) => {
  const theme = useTheme();

  const businessDistrict = selectedBusinessDistrict
    ? Object.values(stateCostData).flatMap(state => Object.values(state.businessDistricts))
        .find(district => district.name === selectedBusinessDistrict)
    : null;

  const costs = businessDistrict ? businessDistrict.costs : aggregateCosts();

  const categories = Object.keys(costs);
  const data = categories.map(category => costs[category]);

  console.log("Selected Business District:", selectedBusinessDistrict);
  console.log("Costs:", costs);
  console.log("Categories:", categories);
  console.log("Data:", data);

  const totalCost = data.reduce((acc, val) => acc + val, 0);

  const stateCostBreakdownColumnChart = {
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
    colors: ['#0074BA', '#02B7FA', '#ABC4C9', '#000', '#B3CEE6'],
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
        return formatAmount(val);
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
      categories: categories.map(category => [category]),
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
          return formatAmount(val);
        }
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
  };

  const stateCostBreakdownSeries = [
    {
      name: '',
      data: data,
    },
  ];

  return (
    <DashboardCard title="Cost And Breakdown By Business District"
      action={<Chip label={selectedBusinessDistrict || "All districts"} size="small" />}
    >
      <Stack direction="row" spacing={3} mb={3} mt={3}>
        {categories.map((category, index) => (
          <Stack direction="row" alignItems="center" spacing={1} key={index}>
            <Avatar sx={{ width: 9, height: 9, bgcolor: stateCostBreakdownColumnChart.colors[index], svg: { display: 'none' } }} />
            <Box>
              <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
                {category}
              </Typography>
            </Box>
          </Stack>
        ))}
      </Stack>
      <Chart options={stateCostBreakdownColumnChart} series={stateCostBreakdownSeries} type="bar" height="280px" />
      <Stack spacing={3} mt={3}>
        <Stack direction="row" spacing={2} alignItems="center" textAlign='center' justifyContent='center'>
          <Box>
            <Typography variant="h5" fontWeight="700">
              ₦{formatNumberWithCommas(totalCost)}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              Total cost
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </DashboardCard>
  );
};

export default StateCostBreakdownFinancialBBD;
