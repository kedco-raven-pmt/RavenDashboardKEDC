import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import DashboardCard from '../../shared/DashboardCard';
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
} from '@mui/material';

const CustomerMetricsBusinessDistrict = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const grey = theme.palette.grey[300];

  const getColumnChartOptions = (color, data, dataLabelFormat) => ({
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 75,
      sparkline: {
        enabled: true,
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
      formatter: (val) => {
        if (dataLabelFormat === 'percentage') return val + '%';
        if (dataLabelFormat === 'naira') return '₦' + val + 'k';
        return val.toFixed(2);
      },
      style: {
        fontSize: '8px',
        colors: [theme.palette.mode === 'dark' ? '#fff' : '#000'],
      },
      offsetY: -20,
    },
    xaxis: {
      categories: ['March', 'April', 'May', 'June'],
      labels: {
        style: {
          fontSize: '8px',
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
  });

  const customerResponseRateSeries = [{ name: 'Customer Response Rate', data: [63, 58, 68, 63] }];
  const customerResponseMetricSeries = [{ name: 'Customer Response Metric', data: [1.60, 1.55, 1.65, 1.60] }];
  const revenueBilledPerCustomerSeries = [{ name: 'Revenue Billed Per Customer', data: [90, 85, 95, 90] }];
  const collectionsPerCustomerSeries = [{ name: 'Collections Per Customer', data: [144, 139, 149, 144] }];

  return (
    <DashboardCard title="Customer Metrics">
      <TableContainer>
        <Table aria-label="simple table" sx={{ whiteSpace: 'nowrap' }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ pl: 0 }}>
                <Typography variant="subtitle2" fontWeight={600}>
                  Metrics
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Value
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Trend (Past four Months)
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{ pl: 0 }}>
                <Box>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Customer Response Rate
                  </Typography>
                  <Typography color="textSecondary" fontSize="12px" variant="subtitle2">
                    Response
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                  63%
                </Typography>
              </TableCell>
              <TableCell>
                <Chart
                  options={getColumnChartOptions(primary, customerResponseRateSeries[0].data, 'percentage')}
                  series={customerResponseRateSeries}
                  type="bar"
                  height="50px"
                  width="100px"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ pl: 0 }}>
                <Box>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Customer Response Metric
                  </Typography>
                  <Typography color="textSecondary" fontSize="12px" variant="subtitle2">
                    Response
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                  1.60
                </Typography>
              </TableCell>
              <TableCell>
                <Chart
                  options={getColumnChartOptions(grey, customerResponseMetricSeries[0].data, 'decimal')}
                  series={customerResponseMetricSeries}
                  type="bar"
                  height="50px"
                  width="100px"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ pl: 0 }}>
                <Box>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Revenue Billed Per Customer ('000)
                  </Typography>
                  <Typography color="textSecondary" fontSize="12px" variant="subtitle2">
                    Billings
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                  90
                </Typography>
              </TableCell>
              <TableCell>
                <Chart
                  options={getColumnChartOptions(primary, revenueBilledPerCustomerSeries[0].data, 'naira')}
                  series={revenueBilledPerCustomerSeries}
                  type="bar"
                  height="50px"
                  width="100px"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ pl: 0 }}>
                <Box>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Collections Per Customer ('000)
                  </Typography>
                  <Typography color="textSecondary" fontSize="12px" variant="subtitle2">
                    Collections
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                  144
                </Typography>
              </TableCell>
              <TableCell>
                <Chart
                  options={getColumnChartOptions(grey, collectionsPerCustomerSeries[0].data, 'naira')}
                  series={collectionsPerCustomerSeries}
                  type="bar"
                  height="50px"
                  width="100px"
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </DashboardCard>
  );
};

export default CustomerMetricsBusinessDistrict;