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
  Chip,
  TableContainer,
} from '@mui/material';

const CustomerMetrics = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const grey = theme.palette.grey[300];
  const primarylight = theme.palette.primary.light;
  const greylight = theme.palette.grey[100];

  // x-axis labels
  const xAxisLabels = ['J', 'M', 'A', 'M'];

  // common chart options
  const commonChartOptions = (color) => ({
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
    xaxis: {
      categories: xAxisLabels,
      labels: {
        show: true,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    fill: {
      colors: [color],
      type: 'solid',
      opacity: 0.05,
    },
    markers: {
      size: 0,
    },
    tooltip: {
      enabled: false,
    },
  });

  const seriesData = [
    {
      name: 'Customers',
      data: [30, 25, 35, 20],
    },
  ];

  return (
    <DashboardCard title="Customer Metrics">
      <TableContainer>
        <Table
          aria-label="simple table"
          sx={{ whiteSpace: 'nowrap' }}
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
                  Status
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
                <Chip
                  sx={{
                    bgcolor: (theme) => theme.palette.success.light,
                    color: (theme) => theme.palette.success.main,
                    borderRadius: '6px',
                    width: 80,
                  }}
                  size="small"
                  label="Low"
                />
              </TableCell>
              <TableCell>
                <Chart
                  options={commonChartOptions(primarylight)}
                  series={seriesData}
                  type="area"
                  height="35px"
                  width="100px"
                />
              </TableCell>
            </TableRow>
            {/* 2 */}
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
                <Chip
                  sx={{
                    bgcolor: (theme) => theme.palette.warning.light,
                    color: (theme) => theme.palette.warning.main,
                    borderRadius: '6px',
                    width: 80,
                  }}
                  size="small"
                  label="Medium"
                />
              </TableCell>
              <TableCell>
                <Chart
                  options={commonChartOptions(greylight)}
                  series={seriesData}
                  type="area"
                  height="35px"
                  width="100px"
                />
              </TableCell>
            </TableRow>
            {/* 3 */}
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
                <Chip
                  sx={{
                    bgcolor: (theme) => theme.palette.primary.light,
                    color: (theme) => theme.palette.primary.main,
                    borderRadius: '6px',
                    width: 80,
                  }}
                  size="small"
                  label="Very High"
                />
              </TableCell>
              <TableCell>
                <Chart
                  options={commonChartOptions(primarylight)}
                  series={seriesData}
                  type="area"
                  height="35px"
                  width="100px"
                />
              </TableCell>
            </TableRow>
            {/* 4 */}
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
                <Chip
                  sx={{
                    bgcolor: (theme) => theme.palette.error.light,
                    color: (theme) => theme.palette.error.main,
                    borderRadius: '6px',
                    width: 80,
                  }}
                  size="small"
                  label="High"
                />
              </TableCell>
              <TableCell>
                <Chart
                  options={commonChartOptions(greylight)}
                  series={seriesData}
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

export default CustomerMetrics;
