import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import DashboardCard from '../../shared/DashboardCard';
import CustomSelect from '../../forms/theme-elements/CustomSelect';
import {
  MenuItem,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Stack,
} from '@mui/material';

const CustomerMetricsBusinessDistrict = () => {
  // for select
  const [month, setMonth] = React.useState('1');

  const handleChange = (event) => {
    setMonth(event.target.value);
  };

  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const grey = theme.palette.grey[300];
  const primarylight = theme.palette.primary.light;
  const greylight = theme.palette.grey[100];

  // chart 1
  const optionsrow1chart = {
    chart: {
      type: 'area',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 35,
      width: 100,
      sparkline: {
        enabled: true,
      },
      group: 'sparklines',
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    fill: {
      colors: [primarylight],
      type: 'solid',
      opacity: 0.05,
    },
    markers: {
      size: 0,
    },
    tooltip: {
      enabled: false,
    },
  };
  const seriesrow1chart = [
    {
      name: 'Customers',
      color: primary,
      data: [30, 25, 35,  30],
    },
  ];

  // chart 2
  const optionsrow2chart = {
    chart: {
      type: 'area',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 35,
      width: 100,
      sparkline: {
        enabled: true,
      },
      group: 'sparklines',
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    fill: {
      colors: [greylight],
      type: 'solid',
      opacity: 0.05,
    },
    markers: {
      size: 0,
    },
    tooltip: {
      enabled: false,
    },
  };
  const seriesrow2chart = [
    {
      name: 'Customers',
      color: grey,
      data: [30, 25, 35, 30],
    },
  ];

  // chart 3
  const optionsrow3chart = {
    chart: {
      type: 'area',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 35,
      width: 100,
      sparkline: {
        enabled: true,
      },
      group: 'sparklines',
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    fill: {
      colors: [primarylight],
      type: 'solid',
      opacity: 0.05,
    },
    markers: {
      size: 0,
    },
    tooltip: {
      enabled: false,
    },
  };
  const seriesrow3chart = [
    {
      name: 'Customers',
      color: primary,
      data: [30, 25, 35, 30],
    },
  ];

  // chart 4
  const optionsrow4chart = {
    chart: {
      type: 'area',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 35,
      width: 100,
      sparkline: {
        enabled: true,
      },
      group: 'sparklines',
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    fill: {
      colors: [greylight],
      type: 'solid',
      opacity: 0.05,
    },
    markers: {
      size: 0,
    },
    tooltip: {
      enabled: false,
    },
  };
  const seriesrow4chart = [
    {
      color: grey,
      data: [30, 25, 35, 30],
    },
  ];

  return (
    <DashboardCard
      title="Customer Metrics"
    >
      <TableContainer>
        <Table
          aria-label="simple table"
          sx={{
            whiteSpace: 'nowrap',
          }}
        >
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
                  options={optionsrow1chart}
                  series={seriesrow1chart}
                  type="area"
                  height="35px"
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
                  options={optionsrow2chart}
                  series={seriesrow2chart}
                  type="area"
                  height="35px"
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
                  options={optionsrow3chart}
                  series={seriesrow3chart}
                  type="area"
                  height="35px"
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
                  options={optionsrow4chart}
                  series={seriesrow4chart}
                  type="area"
                  height="35px"
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