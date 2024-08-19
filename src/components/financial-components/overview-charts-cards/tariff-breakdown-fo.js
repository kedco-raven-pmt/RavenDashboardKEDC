import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Box, Button, CardContent, Grid, Typography, Stack, Avatar } from '@mui/material';
import BlankCard from '../../shared/BlankCard';
import DashboardWidgetCard from '../../shared/DashboardWidgetCard';
import CostBreakdownCards from '../../shared/costbreakdowncard';
import { fontSize, fontWeight, padding, width } from '@mui/system';

const TariffBreakdownFinancial = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = theme.palette.primary.light;
  const secondary = theme.palette.secondary.main;
  const textColor = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.8)' : '#2A3547';

  // chart
  const optionscolumnchart = {
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
    colors: ['#0074BA', '#B3CEE6', '#000', '#ABC4C9',],
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: '60%',
        barHeight: '60%',
        distributed: true,
        endingShape: 'rounded',
        dataLabels: {
            position: 'top', 
          },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return "₦" + val ;  
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
      categories: [['MYTO', 'Tariff'], ['Billing' ,'Tariff'], ['Collection','Tariff'], ['Tariff' ,'Loss']],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
      },
    },
    yaxis: {
      labels: {
        show: false,
        formatter: function (val) {
          return val + " /kWh";  
        }
        
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
  };
  
  const seriescolumnchart = [
    {
      name: '',
      data: [49, 51, 45, 9],
    },
  ];

  //   chart 2
  const optionscolumn2chart = {
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
    colors: ['#0074BA', '#B3CEE6', '#000', '#ABC4C9',],
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
        return "₦" + val ;  // Display the value with " /kWh"
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
      categories: [['MYTO', 'Tariff'], ['Billing' ,'Tariff'], ['Collection','Tariff'], ['Tariff' ,'Loss']],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
      },
    },
    yaxis: {
      labels: {
        show: false,
        formatter: function (val) {
          return val + " /kWh";  
        }
        
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
  };
  const seriescolumn2chart = [
    {
      name: '',
      data: [49, 51, 45, 9],
    },
  ];

  //   chart 3
  const optionscolumn3chart = {
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
    colors: ['#0074BA', '#B3CEE6', '#000', '#ABC4C9',],
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
        return "₦" + val ;  // Display the value with " /kWh"
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
      categories: [['MYTO', 'Tariff'], ['Billing' ,'Tariff'], ['Collection', 'Tariff'], ['Tariff' ,'Loss']],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
      },
    },
    yaxis: {
      labels: {
        show: false,
        formatter: function (val) {
          return val + " /kWh";  
        }
        
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
  };
  
  const seriescolumn3chart = [
    {
      name: '',
      data: [49, 51, 45, 9],
    },
  ];

  return (
    <BlankCard>
      <CardContent sx={{ p: '30px' }}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Typography variant="h5">Previous 4 Months Perfomance - Tariff</Typography>
          <Stack direction="row" spacing={3}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar
              sx={{ width: 9, height: 9, bgcolor: '#0074BA', svg: { display: 'none' } }}
            ></Avatar>
            <Box>
              <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
                MYTO Tariff
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar
              sx={{ width: 9, height: 9, bgcolor: '#B3CEE6', svg: { display: 'none' } }}
            ></Avatar>
            <Box>
              <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
                Billing Tariff
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar
              sx={{ width: 9, height: 9, bgcolor: '#000', svg: { display: 'none' } }}
            ></Avatar>
            <Box>
              <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
                Collection Tariff
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar
              sx={{ width: 9, height: 9, bgcolor: '#ABC4C9', svg: { display: 'none' } }}
            ></Avatar>
            <Box>
              <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
                Tariff Loss
              </Typography>
            </Box>
          </Stack>
        </Stack>
        </Stack>

        <Grid container spacing={3} mt={2}>
          {/* 1 */}
          <Grid item xs={12} sm={3}>
            <BlankCard>
              <CardContent sx={{ p: '20px' }}>
                <Box>
                  <Chart
                    options={optionscolumnchart}
                    series={seriescolumnchart}
                    type="bar"
                    height="190px"   
                  />
                </Box>
                <Box mt={2}>
                  <Typography variant="h6" fontWeight={400} mb={1}>
                    August 
                  </Typography>
                  <Stack direction="row" spacing={2} justifyContent="space-between">
                    <Typography variant="h4">₦47 /kWh</Typography>
                    <Typography variant="subtitle1" color="success.main">
                      +1.25%
                    </Typography>
                  </Stack>
                </Box>
              </CardContent>
            </BlankCard>
          </Grid>
          {/* 2 */}
          <Grid item xs={12} sm={3}>
            <BlankCard>
              <CardContent sx={{ p: '20px' }}>
                <Box>
                  <Chart
                    options={optionscolumn2chart}
                    series={seriescolumn2chart}
                    type="bar"
                    height="190px"
                  />
                </Box>
                <Box mt={2}>
                  <Typography variant="h6" fontWeight={400} mb={1}>
                    July 
                  </Typography>
                  <Stack direction="row" spacing={2} justifyContent="space-between">
                    <Typography variant="h4">₦48 /kWh</Typography>
                    <Typography variant="subtitle1" color="success.main">
                      +4.25%
                    </Typography>
                  </Stack>
                </Box>
              </CardContent>
            </BlankCard>
          </Grid>
          {/* 3 */}
          <Grid item xs={12} sm={3}>
            <BlankCard>
              <CardContent sx={{ p: '20px' }}>
                <Box>
                  <Chart
                    options={optionscolumn2chart}
                    series={seriescolumn2chart}
                    type="bar"
                    height="190px"
                  />
                </Box>
                <Box mt={2}>
                  <Typography variant="h6" fontWeight={400} mb={1}>
                    June 
                  </Typography>
                  <Stack direction="row" spacing={2} justifyContent="space-between">
                    <Typography variant="h4">₦55 /kWh</Typography>
                    <Typography variant="subtitle1" color="success.main">
                      +2.5%
                    </Typography>
                  </Stack>
                </Box>
              </CardContent>
            </BlankCard>
          </Grid>
          <Grid item xs={12} sm={3}>
            
            <BlankCard>
                <CardContent sx={{ p: '20px' }}>
                <Box>
                    <Chart  options={optionscolumn3chart} series={seriescolumn3chart} type="bar" height="190px" />
                </Box>
                <Box mt={2}>
                  <Typography variant="h6" fontWeight={400} mb={1}>
                    May 
                  </Typography>
                  <Stack direction="row" spacing={2} justifyContent="space-between">
                    <Typography variant="h4">₦56 /kWh</Typography>
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

export default TariffBreakdownFinancial;
