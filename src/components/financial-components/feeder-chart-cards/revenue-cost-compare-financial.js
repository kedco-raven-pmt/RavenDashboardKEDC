import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Box, CardContent, Typography, Stack, Avatar } from '@mui/material';
import BlankCard from '../../shared/BlankCard';
import { FeederData } from './dataroom-financial-feeder/dataroom-financial-feeder';

const formatAmount = (amount) => {
  if (amount >= 1000000000) {
    return `₦${(amount / 1000000000).toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}B`;
  }
  return `₦${(amount / 1000000).toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}M`;
};

const FeederCompareFinancial = ({ selectedState, selectedBusinessDistrict, selectedFeeder }) => {
  const theme = useTheme();
  const [comparisonData, setComparisonData] = useState([]);

  useEffect(() => {
    const calculateData = () => {
      let data = [];

      if (selectedState && selectedBusinessDistrict && selectedFeeder) {
        const feederData = FeederData[selectedState].businessDistricts[selectedBusinessDistrict].find(feeder => feeder.name === selectedFeeder);
        data = feederData ? [feederData] : [];
      } else if (selectedState && selectedBusinessDistrict) {
        data = FeederData[selectedState].businessDistricts[selectedBusinessDistrict];
      } else if (selectedState) {
        data = Object.values(FeederData[selectedState].businessDistricts).flat();
      } else {
        data = Object.values(FeederData).flatMap(state => Object.values(state.businessDistricts).flat());
      }

      setComparisonData(data);
    };

    calculateData();
  }, [selectedState, selectedBusinessDistrict, selectedFeeder]);

  const visibleData = comparisonData.slice(0, 6); // Display only the first 6 feeders

  const FeederComparisonChart = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: { show: false },
      height: 265,
      width: "100%",
      zoom: { enabled: false },
    },
    colors: ['#0074BA', '#02B7FA', '#ABC4C9', '#97BEDC', '#B3CEE6'],
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: '60%',
        barHeight: '60%',
        endingShape: 'rounded',
        dataLabels: { position: 'top' },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: val => formatAmount(val),
      position: 'top',
      style: {
        fontSize: '10px',
        colors: ['#304758'],
        fontWeight: 700,
      },
      offsetY: -20,
    },
    legend: { show: true },
    grid: { yaxis: { lines: { show: false } } },
    xaxis: {
      categories: visibleData.map(feeder => feeder.name), // Only show categories for visible feeders
      axisBorder: { show: false },
      labels: { rotate: -45 },
    },
    yaxis: {
      tickAmount: 3,
      labels: {
        show: true,
        style: { colors: theme.palette.mode === 'dark' ? '#fff' : '#adb0bb' },
      },
    },
    tooltip: { theme: theme.palette.mode === 'dark' ? 'dark' : 'light' },
  };

  const FeederComparisonSeries = [
    { name: 'Total Cost', data: visibleData.map(feeder => feeder.totalCost) },
    { name: 'Revenue Billed', data: visibleData.map(feeder => feeder.revenueBilled) },
    { name: 'Collections', data: visibleData.map(feeder => feeder.collections) },
  ];

  return (
    <BlankCard>
      <CardContent sx={{ p: '30px' }}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Typography variant="h5">Feeder Metrics Comparison</Typography>
          <Stack direction="row" spacing={2} mt={5} justifyContent="center">
            <Stack direction="row" spacing={3}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Avatar sx={{ width: 9, height: 9, bgcolor: '#0074BA', svg: { display: 'none' } }}></Avatar>
                <Box>
                  <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
                    Total Cost
                  </Typography>
                </Box>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Avatar sx={{ width: 9, height: 9, bgcolor: '#02B7FA', svg: { display: 'none' } }}></Avatar>
                <Box>
                  <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
                    Revenue Billed
                  </Typography>
                </Box>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Avatar sx={{ width: 9, height: 9, bgcolor: '#ABC4C9', svg: { display: 'none' } }}></Avatar>
                <Box>
                  <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
                    Collections
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        <Box sx={{ overflowX: 'auto', whiteSpace: 'nowrap', width: '100%' }}>
          <Box sx={{ width: '100%', minWidth: '1000px' }}> {/* Ensure minimum width for 6 feeders */}
            <Chart options={FeederComparisonChart} series={FeederComparisonSeries} type="bar" height="265px" />
          </Box>
        </Box>
      </CardContent>
    </BlankCard>
  );
};

export default FeederCompareFinancial;
