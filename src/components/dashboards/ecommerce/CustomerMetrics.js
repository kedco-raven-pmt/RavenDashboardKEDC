import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { CardContent, Typography, Grid, Stack, Box } from '@mui/material';
import BlankCard from '../../shared/BlankCard';
import { IconArrowUpRight } from '@tabler/icons';

const CustomerMetrics = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  const getColumnChartOptions = (color, formatter) => ({
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
    },
    colors: [color],
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: '65%',
        endingShape: 'rounded',
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: formatter,
      style: {
        fontSize: '10px',
        colors: [theme.palette.mode === 'dark' ? '#fff' : '#000'],
      },
      offsetY: -20,
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
      categories: ['March', 'April', 'May', 'June'],
      labels: {
        style: {
          fontSize: '10px',
          fontWeight: 600,
        },
      },
    },
    yaxis: {
      show: false,
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
    title: {
      text: 'Past Four Months',
      align: 'center',
      style: {
        fontSize: '14px',
        fontWeight: 600,
        color: theme.palette.mode === 'dark' ? '#fff' : '#000',
      },
    },
  });

  const responseSeries = [{ name: 'Response Rate', data: [63, 65, 68, 70] }];
  const metricSeries = [{ name: 'Metric', data: [1.6, 1.8, 1.5, 1.7] }];
  const revenueSeries = [{ name: 'Revenue', data: [90, 95, 85, 80] }];
  const collectionsSeries = [{ name: 'Collections', data: [144, 150, 138, 140] }];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <BlankCard>
          <CardContent>
            <Typography variant="h5">Customer Response Rate</Typography>
            <Typography variant="h4" mt={3} fontWeight={600}>63%</Typography>
            <Typography variant="subtitle2" fontSize="12px" color="textSecondary">
              (last month)
            </Typography>
            <Stack direction="row" spacing={1} mt={1} alignItems="center">
              <Box sx={{ bgcolor: 'success.light', width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                <IconArrowUpRight width={16} color="#28a745" />
              </Box>
              <Typography variant="subtitle2" color="textSecondary">
                +4%
              </Typography>
            </Stack>
            <Box mt={2}>
              <Chart
                options={getColumnChartOptions(theme.palette.success.main, (val) => val + '%')}
                series={responseSeries}
                type="bar"
                height="125px"
              />
            </Box>
          </CardContent>
        </BlankCard>
      </Grid>

      <Grid item xs={12} md={6}>
        <BlankCard>
          <CardContent>
            <Typography variant="h5">Revenue Billed Per Customer</Typography>
            <Typography variant="h4" mt={3} fontWeight={600}>₦90k</Typography>
            <Typography variant="subtitle2" fontSize="12px" color="textSecondary">
              (last month)
            </Typography>
            <Stack direction="row" spacing={1} mt={1} alignItems="center">
              <Box sx={{ bgcolor: 'primary.light', width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                <IconArrowUpRight width={16} color="#007bff" />
              </Box>
              <Typography variant="subtitle2" color="textSecondary">
                +3%
              </Typography>
            </Stack>
            <Box mt={2}>
              <Chart
                options={getColumnChartOptions(theme.palette.primary.main, (val) => '₦' + val + 'k')}
                series={revenueSeries}
                type="bar"
                height="125px"
              />
            </Box>
          </CardContent>
        </BlankCard>
      </Grid>

      <Grid item xs={12} md={6}>
        <BlankCard>
          <CardContent>
            <Typography variant="h5">Collections Per Customer</Typography>
            <Typography variant="h4" mt={3} fontWeight={600}>₦144k</Typography>
            <Typography variant="subtitle2" fontSize="12px" color="textSecondary">
              (last month)
            </Typography>
            <Stack direction="row" spacing={1} mt={1} alignItems="center">
              <Box sx={{ bgcolor: 'error.light', width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                <IconArrowUpRight width={16} color="#dc3545" />
              </Box>
              <Typography variant="subtitle2" color="textSecondary">
                +2%
              </Typography>
            </Stack>
            <Box mt={2}>
              <Chart
                options={getColumnChartOptions(theme.palette.error.main, (val) => '₦' + val + 'k')}
                series={collectionsSeries}
                type="bar"
                height="125px"
              />
            </Box>
          </CardContent>
        </BlankCard>
      </Grid>

      <Grid item xs={12} md={6}>
        <BlankCard>
          <CardContent>
            <Typography variant="h5">Customer Response Metric</Typography>
            <Typography variant="h4" mt={3} fontWeight={600}>1.60</Typography>
            <Typography variant="subtitle2" fontSize="12px" color="textSecondary">
              (last month)
            </Typography>
            <Stack direction="row" spacing={1} mt={1} alignItems="center">
              <Box sx={{ bgcolor: 'warning.light', width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                <IconArrowUpRight width={16} color="#ffc107" />
              </Box>
              <Typography variant="subtitle2" color="textSecondary">
                +1.5%
              </Typography>
            </Stack>
            <Box mt={2}>
              <Chart
                options={getColumnChartOptions(theme.palette.warning.main, (val) => val)}
                series={metricSeries}
                type="bar"
                height="125px"
              />
            </Box>
          </CardContent>
        </BlankCard>
      </Grid>
    </Grid>
  );
};

export default CustomerMetrics;
