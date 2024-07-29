import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Box, CardContent, Grid, Typography, Stack, Avatar, FormControlLabel } from '@mui/material';
import BlankCard from '../../shared/BlankCard';
import CustomSwitch from '../../forms/theme-elements/CustomSwitch';

const TariffFinancialAS = () => {
  const theme = useTheme();
  const { primary, secondary, mode } = theme.palette;
  const textColor = mode === 'dark' ? 'rgba(255,255,255,0.8)' : '#2A3547';
  const [showComparison, setShowComparison] = useState(false);

  const baseChartOptions = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: { show: false },
      height: 200,
      width: "100%",
    },
    colors: ['#0074BA', '#02B7FA', '#ABC4C9', '#97BEDC', '#B3CEE6'],
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: '60%',
        barHeight: '60%',
        distributed: true,
        endingShape: 'rounded',
        dataLabels: { position: 'top' },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => `₦${val} /kWh`,
      position: 'top',
      style: { fontSize: '10px', colors: ['#304758'], fontWeight: 700 },
      offsetY: -20,
    },
    legend: { show: false },
    grid: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      show: false,
    },
    xaxis: {
      categories: [['MYTO', 'Allowed Tariff'], ['Actual', 'Tariff Collected'], ['Tariff', 'Loss']],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { show: true, colors: ['#304758'] },
    },
    yaxis: {
      labels: { show: false, formatter: (val) => `₦${val} /kWh` },
    },
    tooltip: {
      theme: mode === 'dark' ? 'dark' : 'light',
    },
  };

  const chartData = {
    kano: { options: { ...baseChartOptions }, series: [{ name: '', data: [59, 78, 45] }] },
    katsina: { options: { ...baseChartOptions }, series: [{ name: '', data: [59, 78, 45] }] },
    jigawa: { options: { ...baseChartOptions }, series: [{ name: '', data: [19, 18, 26] }] },
  };

  const comparisonChartOptions = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: { show: false },
      height: 300,
      width: "100%",
    },
    colors: ['#0074BA', '#02B7FA', '#ABC4C9', '#97BEDC', '#B3CEE6'],
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: '50%',
        barHeight: '60%',
        grouped: true,
        endingShape: 'rounded',
        dataLabels: { position: 'top' },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => `₦${val} /kWh`,
      position: 'top',
      style: { fontSize: '10px', colors: ['#304758'], fontWeight: 700 },
      offsetY: -20,
    },
    legend: { show: true },
    grid: {
      yaxis: { lines: { show: false } },
    },
    xaxis: {
      categories: ['Kano', 'Katsina', 'Jigawa'],
      axisBorder: { show: false },
    },
    yaxis: {
      tickAmount: 3,
      labels: {
        show: true,
        style: { colors: mode === 'dark' ? '#fff' : '#adb0bb' },
      },
    },
    tooltip: {
      theme: mode === 'dark' ? 'dark' : 'light',
    },
  };

  const comparisonSeries = [
    { name: 'MYTO Allowed Tariff', data: [79, 78, 78] },
    { name: 'Actual Tariff Collected', data: [94, 53, 56] },
    { name: 'Tariff Loss', data: [40, 49, 26] },
  ];

  const renderChartCard = (title, chartOptions, chartSeries) => (
    <BlankCard>
      <CardContent sx={{ p: '10px' }}>
        <Box>
          <Chart options={chartOptions} series={chartSeries} type="bar" height="250px" />
        </Box>
        <Box justifyContent="center" mt={1}>
          <Typography variant="h6" fontWeight={600} textAlign="center" mb={1}>
            {title}
          </Typography>
        </Box>
      </CardContent>
    </BlankCard>
  );

  return (
    <BlankCard>
      <CardContent sx={{ p: '30px' }}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Typography variant="h5">Tariff Metrics</Typography>
          <Stack direction="row" spacing={2} mt={5} justifyContent="center">
            <Stack direction="row" spacing={3}>
              {['#0074BA', '#02B7FA', '#ABC4C9'].map((color, index) => (
                <Stack key={color} direction="row" alignItems="center" spacing={1}>
                  <Avatar sx={{ width: 9, height: 9, bgcolor: color, svg: { display: 'none' } }}></Avatar>
                  <Box>
                    <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
                      {['MYTO Allowed Tariff', 'Actual Tariff Collected', 'Tariff Loss'][index]}
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack>

        {!showComparison && (
          <Grid container spacing={3} mt={2}>
            {['Kano', 'Katsina', 'Jigawa'].map((state, index) => (
              <Grid key={state} item xs={12} sm={4}>
                {renderChartCard(state, chartData[state.toLowerCase()].options, chartData[state.toLowerCase()].series)}
              </Grid>
            ))}
          </Grid>
        )}

        {showComparison && (
          <Grid container spacing={3} mt={2}>
            <Grid item xs={12}>
              <BlankCard>
                <CardContent sx={{ p: '10px' }}>
                  <Box>
                    <Chart options={comparisonChartOptions} series={comparisonSeries} type="bar" height="300px" />
                  </Box>
                </CardContent>
              </BlankCard>
            </Grid>
          </Grid>
        )}

        <Box textAlign="right" marginTop="10px">
          <FormControlLabel
            control={<CustomSwitch checked={showComparison} onChange={() => setShowComparison(!showComparison)} />}
            label="Compare"
          />
        </Box>
      </CardContent>
    </BlankCard>
  );
};

export default TariffFinancialAS;
