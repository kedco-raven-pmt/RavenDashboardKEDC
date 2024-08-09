import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Stack, Typography, Box } from '@mui/material';
import { IconGridDots } from '@tabler/icons';

import DashboardCard from '../../shared/DashboardCard';

const BillingEfficiency = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const primarylight = theme.palette.primary.light;
  const textColor = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.8)' : '#2A3547';

  // chart
  const optionscolumnchart = {
    chart: {
      type: 'donut',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",

      toolbar: {
        show: false,
      },
      height: 275,
    },
    labels: ["Efficiency", "Inefficiency"],
    colors: [primary, primarylight],
    plotOptions: {
      pie: {
        
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
              label: '71%',
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
      show: false,
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false,
    },
  };
  const seriescolumnchart = [71, 29];

  return (
    <DashboardCard title="Billing Efficiency" subtitle="71%">
      <>
        <Box mt={3}>
          <Chart
            options={optionscolumnchart}
            series={seriescolumnchart}
            type="donut"
            height="275px"
          />
        </Box>

        <Stack direction="row" spacing={2} justifyContent="space-between" mt={7}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Box
              width={19}
              height={19}
              bgcolor="primary.light"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                color="primary.main"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <IconGridDots width={11} />
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" fontSize="12px" fontWeight="600">
                56%
              </Typography>
              <Typography variant="subtitle2" fontSize="10px" color="textSecondary">
                July
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <Box
              width={19}
              height={19}
              bgcolor="secondary.light"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                color="secondary.main"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <IconGridDots width={11} />
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" fontSize="12px" fontWeight="600">
                65%
              </Typography>
              <Typography variant="subtitle2" fontSize="10px" color="textSecondary">
                June
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <Box
              width={19}
              height={19}
              bgcolor="primary.light"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                color="primary.main"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <IconGridDots width={11} />
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" fontSize="12px" fontWeight="600">
                56%
              </Typography>
              <Typography variant="subtitle2" fontSize="10px" color="textSecondary">
                May
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <Box
              width={19}
              height={19}
              bgcolor="secondary.light"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                color="secondary.main"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <IconGridDots width={11} />
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" fontSize="12px" fontWeight="600">
                65%
              </Typography>
              <Typography variant="subtitle2" fontSize="10px" color="textSecondary">
                April
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </>
    </DashboardCard>
  );
};

export default BillingEfficiency;
