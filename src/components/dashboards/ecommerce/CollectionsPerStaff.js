import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Stack, Typography, Avatar } from '@mui/material';
import { IconArrowUpLeft } from '@tabler/icons';

import DashboardCard from '../../shared/DashboardCard';
import icon1Img from 'src/assets/images/svgs/icon-master-card-2.svg';

const CollectionsPerStaff = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = theme.palette.primary.light;
  const successlight = theme.palette.success.light;

  // chart
  const optionscolumnchart = {
    chart: {
      type: 'area',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 120,
      sparkline: {
        enabled: false,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 1.5,
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
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      x: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
        style: {
          fontSize: '8px',
          fontFamily: "'Plus Jakarta Sans', sans-serif;",
        },
      },
    },
    yaxis: {
      show: false,
    },
    margin: {
      bottom: 30,
    },
  };
  const seriescolumnchart = [
    {
      name: 'Collections',
      color: primary,
      data: [120, 66, 200, 40, 180, 580, 300, 280, 250, 300, 190, 400],
    },
  ];

  return (
    <DashboardCard
      title="Collections Per Staff"
      action={
        <Avatar
          variant="rounded"
          sx={{ bgcolor: (theme) => theme.palette.primary.light, width: 40, height: 40 }}
        >
          <Avatar src={icon1Img} alt={icon1Img} sx={{ width: 24, height: 24 }} />
        </Avatar>
      }
      footer={
        <Chart options={optionscolumnchart} series={seriescolumnchart} type="area" height="100px" />
      }
    >
      <>
        <Stack direction="row" spacing={2} alignItems="flex-start" mb={3}>
          <Stack>
            <Typography variant="h3" fontWeight="700">
             ₦450k
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              (last year)
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <Avatar sx={{ bgcolor: successlight, width: 20, height: 20 }}>
              <IconArrowUpLeft width={18} color="#13DEB9" />
            </Avatar>
            <Typography variant="subtitle2" color="textSecondary">
              +9%
            </Typography>
          </Stack>
        </Stack>
      </>
    </DashboardCard>
  );
};

export default CollectionsPerStaff;