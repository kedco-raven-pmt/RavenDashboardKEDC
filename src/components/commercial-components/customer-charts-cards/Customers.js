import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Box, CardContent, Grid, Typography, Stack, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import BlankCard from '../../shared/BlankCard';
import { IconArrowUpRight } from '@tabler/icons';

const Customers = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = theme.palette.primary.light;
  const secondary = theme.palette.secondary.main;
  const textColor = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.8)' : '#2A3547';
  const legendTextColor = theme.palette.mode === 'dark' ? '#fff' : '#000';

  const donutChartOptions = (totalLabel) => ({
    chart: {
      type: 'donut',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      toolbar: {
        show: false,
      },
      height: 220,
    },
    labels: ['MD1', 'MD2', 'Non-MD'],
    colors: [primary, primarylight, secondary],
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: '89%',
          background: 'transparent',
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 7,
            },
            value: {
              show: false,
            },
            total: {
              show: true,
              color: textColor,
              fontSize: '20px',
              fontWeight: '600',
              label: totalLabel,
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
    },
    legend: {
      show: true,
      labels: {
        colors: legendTextColor,
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false,
    },
  });

  const donutChartOptionsUnmetered = (totalLabel) => ({
    chart: {
      type: 'donut',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      toolbar: {
        show: false,
      },
      height: 220,
    },
    labels: ['Non-MD'],
    colors: [secondary],
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: '89%',
          background: 'transparent',
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 7,
            },
            value: {
              show: false,
            },
            total: {
              show: true,
              color: textColor,
              fontSize: '20px',
              fontWeight: '600',
              label: totalLabel,
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
    },
    legend: {
      show: true,
      labels: {
        colors: legendTextColor,
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false,
    },
  });

  const seriesPrepaid = [32614, 32020, 33332];
  const seriesPostpaid = [32603, 33755, 32941];
  const seriesUnmetered = [32029];

  return (
    <BlankCard>
      <CardContent sx={{ p: '30px' }}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Stack spacing={1}>
            <Typography variant="h5">Total Customers</Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="h4">229,294</Typography>
              <Stack direction="row" alignItems="center" color="success.main">
                <IconArrowUpRight size={20} />
                <Typography variant="subtitle1" color="success.main">
                  +7%
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={2}>
            <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
            <InputLabel>State</InputLabel>
    <Select defaultValue="All" label="State">
      <MenuItem value="All">All</MenuItem>
      <MenuItem value="Kano">Kano</MenuItem>
      <MenuItem value="Katsina">Katsina</MenuItem>
      <MenuItem value="Jigawa">Jigawa</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Business District</InputLabel>
    <Select defaultValue="All" label="Business District">
      <MenuItem value="All">All</MenuItem>
      <MenuItem value="Kano Industrial">Kano Industrial</MenuItem>
      <MenuItem value="Kano Central">Kano Central</MenuItem>
      <MenuItem value="Katsina North">Katsina North</MenuItem>
      <MenuItem value="Kano North">Kano North</MenuItem>
      <MenuItem value="Kano East">Kano East</MenuItem>
      <MenuItem value="Kano West">Kano West</MenuItem>
      <MenuItem value="Katsina South">Katsina South</MenuItem>
      <MenuItem value="Jigawa South">Jigawa South</MenuItem>
      <MenuItem value="Jigawa North">Jigawa North</MenuItem>
    </Select>
            </FormControl>
            
          </Stack>
        </Stack>

        <Grid container spacing={3} mt={2}>
          {/* 1 */}
          <Grid item xs={12} sm={4}>
            <BlankCard>
              <CardContent sx={{ p: '30px' }}>
                <Box>
                  <Chart
                    options={donutChartOptions('97,966')}
                    series={seriesPrepaid}
                    type="donut"
                    height="220px"
                  />
                </Box>
                <Box mt={4}>
                  <Typography variant="h6" fontWeight={400} mb={1}>
                    Prepaid
                  </Typography>
                  <Stack direction="row" spacing={2} justifyContent="space-between">
                    <Typography variant="h4">97,966</Typography>
                    <Typography variant="subtitle1" color="success.main">
                      +1.25%
                    </Typography>
                  </Stack>
                </Box>
              </CardContent>
            </BlankCard>
          </Grid>
          {/* 2 */}
          <Grid item xs={12} sm={4}>
            <BlankCard>
              <CardContent sx={{ p: '30px' }}>
                <Box>
                  <Chart
                    options={donutChartOptions('99,299')}
                    series={seriesPostpaid}
                    type="donut"
                    height="220px"
                  />
                </Box>
                <Box mt={4}>
                  <Typography variant="h6" fontWeight={400} mb={1}>
                    PostPaid
                  </Typography>
                  <Stack direction="row" spacing={2} justifyContent="space-between">
                    <Typography variant="h4">99,299</Typography>
                    <Typography variant="subtitle1" color="success.main">
                      +4.25%
                    </Typography>
                  </Stack>
                </Box>
              </CardContent>
            </BlankCard>
          </Grid>
          {/* 3 */}
          <Grid item xs={12} sm={4}>
            <BlankCard>
              <CardContent sx={{ p: '30px' }}>
                <Box>
                  <Chart
                    options={donutChartOptionsUnmetered('32,029')}
                    series={seriesUnmetered}
                    type="donut"
                    height="220px"
                  />
                </Box>
                <Box mt={4}>
                  <Typography variant="h6" fontWeight={400} mb={1}>
                    UnMetered
                  </Typography>
                  <Stack direction="row" spacing={2} justifyContent="space-between">
                    <Typography variant="h4">32,029</Typography>
                    <Typography variant="subtitle1" color="success.main">
                      +2.5%
                    </Typography>
                  </Stack>
                </Box>
              </CardContent>
            </BlankCard>
          </Grid>
        </Grid>
        </CardContent>
    </BlankCard>
  );
};

export default Customers;

