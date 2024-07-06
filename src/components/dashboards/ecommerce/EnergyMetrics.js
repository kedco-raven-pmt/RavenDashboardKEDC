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

const EnergyMetrics = () => {
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

  const getColumnChartOptions = (color, data) => ({
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
      formatter: (val) => val,
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
  });

  const energyDeliveredSeries = [{ name: 'Energy Delivered', data: [150, 105, 192, 100] }];
  const energyBilledSeries = [{ name: 'Energy Billed', data: [80, 75, 55, 100] }];
  const energyCollectedSeries = [{ name: 'Energy Collected', data: [40, 35, 25, 50] }];

  return (
    <DashboardCard title="Energy Metrics">
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
                  GWh
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
                    Energy Delivered 
                  </Typography>
                  <Typography color="textSecondary" fontSize="12px" variant="subtitle2">
                    Energy
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                  1772
                </Typography>
              </TableCell>
              <TableCell>
                <Chart
                  options={getColumnChartOptions(primary, energyDeliveredSeries[0].data)}
                  series={energyDeliveredSeries}
                  type="bar"
                  height="75px"
                  width="100px"
                />
              </TableCell>
            </TableRow>
            {/* 2 */}
            <TableRow>
              <TableCell sx={{ pl: 0 }}>
                <Box>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Energy Billed 
                  </Typography>
                  <Typography color="textSecondary" fontSize="12px" variant="subtitle2">
                    Energy
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                  1263
                </Typography>
              </TableCell>
              <TableCell>
                <Chart
                  options={getColumnChartOptions(grey, energyBilledSeries[0].data)}
                  series={energyBilledSeries}
                  type="bar"
                  height="75px"
                  width="100px"
                />
              </TableCell>
            </TableRow>
            {/* 3 */}
            <TableRow>
              <TableCell sx={{ pl: 0 }}>
                <Box>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Energy Collected  
                  </Typography>
                  <Typography color="textSecondary" fontSize="12px" variant="subtitle2">
                    Energy
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                  989
                </Typography>
              </TableCell>
              <TableCell>
                <Chart
                  options={getColumnChartOptions(primary, energyCollectedSeries[0].data)}
                  series={energyCollectedSeries}
                  type="bar"
                  height="75px"
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

export default EnergyMetrics;
