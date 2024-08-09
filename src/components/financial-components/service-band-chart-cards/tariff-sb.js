import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Box, Button, CardContent, Grid, Typography, Stack, Avatar, FormControlLabel } from '@mui/material';
import GreyCard from '../../shared/greycard';
import DashboardWidgetCard from '../../shared/DashboardWidgetCard';
import CostBreakdownCards from '../../shared/costbreakdowncard';
import { color, fontSize, fontWeight, padding, width } from '@mui/system';
import BlankCard from '../../shared/BlankCard';
import CustomSwitch from '../../forms/theme-elements/CustomSwitch';

const TariffFinancialAS = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = theme.palette.primary.light;
  const secondary = theme.palette.secondary.main;
  const textColor = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.8)' : '#2A3547';

  // chart
  const kano = {
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
    colors: ['#0074BA', '#02B7FA', '#ABC4C9', '#97BEDC', '#B3CEE6'],
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
        return "₦" + val + " /kWh";  
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
      categories: [['MYTO' ,'Allowed Tariff'], ['Actual' ,'Tariff Collected'], ['Tariff','Loss']],
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
          return "₦"+ val + "/kWh";  
        }
        
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
  };
  
  const kanoseries = [
    {
      name: '',
      data: [59, 78, 45],
    },
  ];

  //   chart 2

  const katsinachart = {
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
    colors: ['#0074BA', '#02B7FA', '#ABC4C9', '#97BEDC', '#B3CEE6'],
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
        return "₦" + val + " /kWh";  
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
      categories: [['MYTO', 'Allowed Tariff'], ['Actual' ,'Tariff Collected'], ['Tariff','Loss']],
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
          return "₦"+ val + "/kWh";  
        }
        
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
  };
  
  const katsinaseries = [
    {
      name: '',
      data: [59, 78, 45],
    },
  ];

  //   chart 3
  const jigawachart = {
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
    colors: ['#0074BA', '#02B7FA', '#ABC4C9', '#97BEDC', '#B3CEE6'],
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
        return "₦" + val + " /kWh";  
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
      categories: [['MYTO', 'Allowed Tariff'], ['Actual' ,'Tariff Collected'], ['Tariff','Loss']],
      axisBorder: {
        show: false,
      },
      
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        colors: ['#304758']
      },
    },
    yaxis: {
      labels: {
        show: false,
        formatter: function (val) {
          return "₦"+ val + "/kWh";  
        }
        
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
  };
  
  const jigawachartseries = [
    {
      name: '',
      data: [19, 18, 26],
    },
  ];




  return (
    <BlankCard  >
      <CardContent sx={{ p: '30px'}} >
        
      <Stack direction="row" spacing={2} justifyContent="space-between">
          <Typography variant="h5">Tariff Metrics</Typography>
          <Stack direction="row" spacing={2} mt={5} justifyContent="center">
          <Stack direction="row" spacing={3}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar
              sx={{ width: 9, height: 9, bgcolor: '#0074BA', svg: { display: 'none' } }}
            ></Avatar>
            <Box>
              <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
                MYTO Allowed Tariff
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar
              sx={{ width: 9, height: 9, bgcolor: '#02B7FA', svg: { display: 'none' } }}
            ></Avatar>
            <Box>
              <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
              Actual Tariff Collected
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
        </Stack>

        <Grid container spacing={3} mt={2}>
          {/* 1 */}
          <Grid item xs={12} sm={2.4}>
            <BlankCard>
              <CardContent sx={{ p: '10px' }}>
                <Box>
                  <Chart
                    options={kano}
                    series={kanoseries}
                    type="bar"
                    height="250px"   
                  />
                </Box>
                <Box justifyContent="center" mt={1}>
                  <Typography variant="h6" fontWeight={600} textAlign="center" mb={1}>
                    Band A
                  </Typography>
                </Box>
              </CardContent>
            </BlankCard>
          </Grid>
          {/* 2 */}
          <Grid item xs={12} sm={2.4}>
            <BlankCard>
              <CardContent sx={{ p: '10px' }}>
                <Box >
                  <Chart
                    options={katsinachart}
                    series={katsinaseries}
                    type="bar"
                    height="250px"
                  />
                </Box>
                <Box justifyContent="center" mt={1}>
                  <Typography variant="h6" fontWeight={600} textAlign="center" mb={1}>
                    Band B
                  </Typography>
                </Box>
              </CardContent>
            </BlankCard>
          </Grid>
          {/* 3 */}
          <Grid item xs={12} sm={2.4}>
            <BlankCard>
              <CardContent sx={{ p: '10px' }}>
                <Box>
                  <Chart
                    options={jigawachart}
                    series={jigawachartseries}
                    type="bar"
                    height="250px"
                  />
                </Box>
                <Box justifyContent="center" mt={1}>
                  <Typography variant="h6" fontWeight={600} textAlign="center" mb={1}>
                    Band C
                  </Typography>
                </Box>
              </CardContent>
            </BlankCard>
          </Grid>
          {/* 3 */}
          <Grid item xs={12} sm={2.4}>
            <BlankCard>
              <CardContent sx={{ p: '10px' }}>
                <Box>
                  <Chart
                    options={jigawachart}
                    series={jigawachartseries}
                    type="bar"
                    height="250px"
                  />
                </Box>
                <Box justifyContent="center" mt={1}>
                  <Typography variant="h6" fontWeight={600} textAlign="center" mb={1}>
                    Band D
                  </Typography>
                </Box>
              </CardContent>
            </BlankCard>
          </Grid>
          {/* 3 */}
          <Grid item xs={12} sm={2.4}>
            <BlankCard>
              <CardContent sx={{ p: '10px' }}>
                <Box>
                  <Chart
                    options={jigawachart}
                    series={jigawachartseries}
                    type="bar"
                    height="250px"
                  />
                </Box>
                <Box justifyContent="center" mt={1}>
                  <Typography variant="h6" fontWeight={600} textAlign="center" mb={1}>
                    Band E
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

export default TariffFinancialAS;