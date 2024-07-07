import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Box, CardContent, Grid, Typography, Stack, MenuItem, Select } from '@mui/material';
import BlankCard from '../../shared/BlankCard';
import DashboardCard from '../../shared/DashboardCard';
import { IconArrowUpLeft, IconGridDots } from '@tabler/icons';
import { Avatar } from '@mui/material';
import icon1Img from 'src/assets/images/svgs/icon-master-card-2.svg';

const StaffMetricsStates = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = theme.palette.primary.light;
  const secondary = theme.palette.secondary.main;
  const successlight = theme.palette.success.light;
  const textColor = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.8)' : '#2A3547';

  // Chart 1: Staff Collections States
  const optionscolumnchart1 = {
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
  const seriescolumnchart1 = [
    {
      name: 'Collections',
      color: primary,
      data: [120, 66, 200, 40, 180, 580, 300, 280, 250, 300, 190, 400],
    },
  ];

  // Chart 2: Staff Distribution
  const optionscolumnchart2 = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 500,
      offsetX: -20,
    },
    colors: [primary],
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: '60%',
        columnWidth: '40%',
        borderRadius: 4,
        dataLabels: {
          position: 'top'
        }
      },
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: true,
      position: "top",
      style: {
        fontSize: '10px',
        colors: [theme.palette.mode === 'dark' ? '#fff' : '#000'],
      },
      offsetY: -20,
      formatter: function (val) {
        return val.toFixed(0);
      },
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    yaxis: {
      min: 0,
      tickAmount: 2,
    },
    xaxis: {
      categories: ['Finance', 'Technical', 'Commercial', 'Admin'],
      labels: {
        style: {
          fontSize: '8px',
          whiteSpace: 'nowrap',
        }
      },
      axisTicks: {
        show: false,
      }
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false,
    },
  };
  const seriescolumnchart2 = [
    {
      name: 'Staff Count',
      data: [250, 330, 400, 300],
    },
  ];

 // Chart 3: Retention vs Churn Rate
const optionscolumnchart3 = {
  chart: {
    type: 'donut',
    fontFamily: "'Plus Jakarta Sans', sans-serif;",
    toolbar: {
      show: false,
    },
    height: 220,
  },
  labels: ['Retention Rate', 'Churn Rate'],
  colors: [primary, secondary],
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
            show: false,
          },
          value: {
            show: true,
            fontSize: '14px',
            fontWeight: '600',
            color: textColor,
            offsetY: 7,
          },
          total: {
            show: true,
            label: 'Retention',
            color: textColor,
            fontSize: '16px',
            fontWeight: '600',
            formatter: function (w) {
              return '94%';
            }
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
    position: "bottom"
  },
  tooltip: {
    enabled: false,
  },
};
const seriescolumnchart3 = [94, 6];

  const [filter, setFilter] = React.useState('All');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <BlankCard>
      <CardContent sx={{ p: '30px' }}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Typography variant="h5">Staff Metrics</Typography>
          <Select
            value={filter}
            onChange={handleFilterChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Kano">Kano</MenuItem>
            <MenuItem value="Katsina">Katsina</MenuItem>
            <MenuItem value="Jigawa">Jigawa</MenuItem>
          </Select>
        </Stack>

        <Grid container spacing={3} mt={2}>
          {/* Chart 1: Staff Collections States */}
          <Grid item xs={12} sm={4}>
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
                <Chart options={optionscolumnchart1} series={seriescolumnchart1} type="area" height="100px" />
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
          </Grid>

          {/* Chart 2: Staff Distribution */}
          <Grid item xs={12} sm={4}>
            <DashboardCard title="Staff Distribution" subtitle="">
              <Chart options={optionscolumnchart2} series={seriescolumnchart2} type="bar" height="196px" />
            </DashboardCard>
          </Grid>

          {/* Chart 3: Retention vs Churn Rate */}
          <Grid item xs={12} sm={4}>
            <BlankCard>
              <CardContent sx={{ p: '30px' }}>
                <Typography variant="h6" mb={3}>Retention Vs. Churn</Typography>
                <Box>
                  <Chart
                    options={optionscolumnchart3}
                    series={seriescolumnchart3}
                    type="donut"
                    height="220px"
                  />
                </Box>
                <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <IconGridDots size={16} color={primary} />
                    <Typography variant="body2">Retention Rate: 94%</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <IconGridDots size={16} color={secondary} />
                    <Typography variant="body2">Churn Rate: 6%</Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </BlankCard>
          </Grid>
        </Grid>
      </CardContent>
    </BlankCard>
  );
};

export default StaffMetricsStates;