import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Box, Button, CardContent, Grid, Typography, Stack, Avatar } from '@mui/material';
import GreyCard from '../../shared/greycard';
import DashboardWidgetCard from '../../shared/DashboardWidgetCard';
import CostBreakdownCards from '../../shared/costbreakdowncard';
import { color, fontSize, fontWeight, padding, width } from '@mui/system';
import BlankCard from '../../shared/BlankCard';

const TechBreakdownTechnicalSBT = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = theme.palette.primary.light;
  const secondary = theme.palette.secondary.main;
  const textColor = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.8)' : '#2A3547';

  // chart
  const feedernumber = {
    chart: {
        type: 'donut',
        fontFamily: "'Plus Jakarta Sans', sans-serif;",
  
        toolbar: {
          show: false,
        },
        height: 275,
      },
      labels: ["Band A", "Band B", "Band C", "Band D", "Band E"],
      colors: [primary, primarylight, secondary,],
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
  
  const feedernumberseries = [42, 62, 30, 25, 14];

  //   chart 2
  const loadreading = {
    chart: {
        type: 'donut',
        fontFamily: "'Plus Jakarta Sans', sans-serif;",
  
        toolbar: {
          show: false,
        },
        height: 275,
      },
      labels: ["Band A", "Band B", "Band C", "Band D", "Band E"],
      colors: [primary, primarylight, secondary],
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
  
  const loadreadingseries = [42, 62, 30, 25, 14];
  //   chart 3
  const customernumbers = {
    chart: {
        type: 'donut',
        fontFamily: "'Plus Jakarta Sans', sans-serif;",
  
        toolbar: {
          show: false,
        },
        height: 275,
      },
      labels: ["Band A", "Band B", "Band C", "Band D", "Band E"],
      colors: [primary, primarylight, secondary],
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
  
  const customernumbersseries = [42, 62, 30, 25, 14];

  return (
    <BlankCard >
      <CardContent sx={{ p: '30px' }}>
        
      <Stack direction="row" spacing={2} justifyContent="space-between">
          <Typography variant="h5">Tariff Metrics By Service Band</Typography>
          <Stack direction="row" spacing={2} mt={5} justifyContent="center">
          <Stack direction="row" spacing={3}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar
              sx={{ width: 9, height: 9, bgcolor: '#3B80B2', svg: { display: 'none' } }}
            ></Avatar>
            <Box>
              <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
                Band A
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar
              sx={{ width: 9, height: 9, bgcolor: '#599BC8', svg: { display: 'none' } }}
            ></Avatar>
            <Box>
              <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
                Band B
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar
              sx={{ width: 9, height: 9, bgcolor: '#599BC8', svg: { display: 'none' } }}
            ></Avatar>
            <Box>
              <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
                Band C
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar
              sx={{ width: 9, height: 9, bgcolor: '#599BC8', svg: { display: 'none' } }}
            ></Avatar>
            <Box>
              <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
                Band D
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar
              sx={{ width: 9, height: 9, bgcolor: '#77ADD2', svg: { display: 'none' } }}
            ></Avatar>
            <Box>
              <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
                Band E
              </Typography>
            </Box>
          </Stack>
        </Stack>
        </Stack>
        </Stack>

        <Grid container spacing={3} mt={2}>
          {/* 1 */}
          <Grid item xs={12} sm={4}>
            <BlankCard>
              <CardContent sx={{ p: '20px' }}>
              <Box justifyContent="center" textAlign="center" mt={1} mb={3}>
                  <Typography variant="h6" fontWeight={800} color='#273E76'>
                    Feeder Numbers
                  </Typography>
                </Box>

                <Box>
                  <Chart
                    options={feedernumber}
                    series={feedernumberseries}
                    type="donut"
                    height="275px"   
                  />
                </Box>
                
              </CardContent>
            </BlankCard>
          </Grid>
          {/* 2 */}
          <Grid item xs={12} sm={4}>
            <BlankCard>
              <CardContent sx={{ p: '20px' }}>
              <Box justifyContent="center" textAlign="center" mt={1} mb={3}>
                  <Typography variant="h6" fontWeight={800} color='#273E76'>
                    Load Reading
                  </Typography>
                </Box>

                <Box>
                  <Chart
                    options={loadreading}
                    series={loadreadingseries}
                    type="donut"
                    height="275px"
                  />
                </Box>
              </CardContent>
            </BlankCard>
          </Grid>
          {/* 3 */}
          <Grid item xs={12} sm={4}>
            <BlankCard>
              <CardContent sx={{ p: '20px' }}>
              <Box justifyContent="center" textAlign="center" mt={1} mb={3}>
                  <Typography variant="h6" fontWeight={800} color='#273E76'>
                    Customer Numbers
                  </Typography>
                </Box>
                <Box>
                  <Chart
                    options={customernumbers}
                    series={customernumbersseries}
                    type="donut"
                    height="275px"
                  />
                </Box>
              </CardContent>
            </BlankCard>
          </Grid>
        </Grid>
      </CardContent>
    </BlankCard>
  );
};

export default TechBreakdownTechnicalSBT;