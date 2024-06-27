import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Box, Button, CardContent, Grid, Typography, Stack, Avatar } from '@mui/material';
import BlankCard from '../../shared/BlankCard';
import DashboardWidgetCard from '../../shared/DashboardWidgetCard';
import CostBreakdownCards from '../../shared/costbreakdowncard';
import { fontSize, fontWeight, padding, width } from '@mui/system';

const RevenueCostFinancialAS = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = theme.palette.primary.light;
  const secondary = theme.palette.secondary.main;
  const textColor = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.8)' : '#2A3547';

  // chart
  const kanocolumnchart = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 200,
      width: "100%",
    },
    colors: ['#3B80B2', '#599BC8', '#77ADD2', '#97BEDC', '#B3CEE6'],
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: '60%',
        barHeight: '60%',
        distributed: true,
        endingShape: 'rounded',
        dataLabels: {
            position: 'top', // Specify the position of data labels to be on top
          },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return "₦" + val + "B";  // Display the value with "bn"
      },
      position: 'top',
      style: {
        fontSize: '10px',
        colors: ['#304758'],
        fontWeight: 700,
      },
      offsetY: -20 ,
      
    },
    legend: {
      show: false,
    },
    grid: {
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        show:false,
    },
    xaxis: {
      categories: [['TotalCost'], ['Revenue Billed'], ['Collections']],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
        formatter: function (val) {
          return val + "bn";  // Append "bn" to y-axis labels
        }
        
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
  };
  
  const kanodataseries = [
    {
      name: '',
      data: [42, 62, 38],
    },
  ];

  //   chart 2
  const katsinacolumnchart = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 200,
      width: "100%",
    },
    colors: ['#3B80B2', '#599BC8', '#77ADD2', '#97BEDC', '#B3CEE6'],
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: '60%',
        barHeight: '60%',
        distributed: true,
        endingShape: 'rounded',
        dataLabels: {
            position: 'top', // Specify the position of data labels to be on top
          },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return "₦" + val + "B";  // Display the value with "bn"
      },
      position: 'top',
      style: {
        fontSize: '10px',
        colors: ['#304758'],
        fontWeight: 700,
      },
      offsetY: -20 ,
      
    },
    legend: {
      show: false,
    },
    grid: {
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        show:false,
    },
    xaxis: {
      categories: [['TotalCost'], ['Revenue Billed'], ['Collections']],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
        formatter: function (val) {
          return val + "bn";  // Append "bn" to y-axis labels
        }
        
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
  };
  
  const katsinadataseries = [
    {
      name: '',
      data: [21, 32, 12],
    },
  ];

  //   chart 3
  const jigawacolumnchart = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 200,
      width: "100%",
    },
    colors: ['#3B80B2', '#599BC8', '#77ADD2', '#97BEDC', '#B3CEE6'],
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: '60%',
        barHeight: '60%',
        distributed: true,
        endingShape: 'rounded',
        dataLabels: {
            position: 'top', // Specify the position of data labels to be on top
          },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return "₦" + val + "B";  // Display the value with "bn"
      },
      position: 'top',
      style: {
        fontSize: '10px',
        colors: ['#304758'],
        fontWeight: 700,
      },
      offsetY: -20 ,
      
    },
    legend: {
      show: false,
    },
    grid: {
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        show:false,
    },
    xaxis: {
      categories: [['TotalCost'], ['Revenue Billed'], ['Collections']],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
        formatter: function (val) {
          return val + "bn";  // Append "bn" to y-axis labels
        }
        
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
  };
  
  const jigawadataseries = [
    {
      name: '',
      data: [14, 26, 20],
    },
  ];

  return (
    <BlankCard>
      <CardContent sx={{ p: '30px' }}>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Stack direction="row" spacing={3}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar
              sx={{ width: 9, height: 9, bgcolor: '#3B80B2', svg: { display: 'none' } }}
            ></Avatar>
            <Box>
              <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
                Total Cost
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar
              sx={{ width: 9, height: 9, bgcolor: '#599BC8', svg: { display: 'none' } }}
            ></Avatar>
            <Box>
              <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
                Revenue Billed
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar
              sx={{ width: 9, height: 9, bgcolor: '#77ADD2', svg: { display: 'none' } }}
            ></Avatar>
            <Box>
              <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
                Collections
              </Typography>
            </Box>
          </Stack>
        </Stack>
        </Stack>

        <Grid container spacing={3} mt={2}>
          {/* 1 */}
          <Grid item xs={12} sm={4}>
            <BlankCard>
              <CardContent sx={{ p: '20px' }}>
                <Box>
                  <Chart
                    options={kanocolumnchart}
                    series={kanodataseries}
                    type="bar"
                    height="220px"   
                  />
                </Box>
                <Box justifyContent="center" mt={1}>
                  <Typography variant="h6" fontWeight={600} textAlign="center" mb={1}>
                    Kano
                  </Typography>
                </Box>
              </CardContent>
            </BlankCard>
          </Grid>
          {/* 2 */}
          <Grid item xs={12} sm={4}>
            <BlankCard>
              <CardContent sx={{ p: '20px' }}>
                <Box>
                  <Chart
                    options={katsinacolumnchart}
                    series={katsinadataseries}
                    type="bar"
                    height="220px"
                  />
                </Box>
                <Box justifyContent="center" mt={1}>
                  <Typography variant="h6" fontWeight={600} textAlign="center" mb={1}>
                    Katsina
                  </Typography>
                </Box>
              </CardContent>
            </BlankCard>
          </Grid>
          {/* 3 */}
          <Grid item xs={12} sm={4}>
            <BlankCard>
              <CardContent sx={{ p: '20px' }}>
                <Box>
                  <Chart
                    options={jigawacolumnchart}
                    series={jigawadataseries}
                    type="bar"
                    height="220px"
                  />
                </Box>
                <Box justifyContent="center" mt={1}>
                  <Typography variant="h6" fontWeight={600} textAlign="center" mb={1}>
                    Jigawa
                  </Typography>
                </Box>
              </CardContent>
            </BlankCard>
          </Grid>
        </Grid>
      </CardContent>
    </BlankCard>
  );
};

export default RevenueCostFinancialAS;
