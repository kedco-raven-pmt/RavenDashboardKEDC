import React from 'react';
import {
  Box,
  Avatar,
  Typography,
  Card,
  CardContent,
  Grid,
  Divider,
  Stack,
  MenuItem,
  Chip,
  Tooltip,
} from '@mui/material';
import { IconArrowUpRight, IconArrowDownLeft } from '@tabler/icons';
import BlankCard from '../../shared/BlankCard';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import BlankCardTransparent from '../../shared/BlankCardTransparent';
import CLientLogo from 'src/assets/images/logos/cropped-Kedco-Logo-web copy.png';

const ForumOfficeDecisionsNERC = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  const forumdecisionsmadechart = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#4d5561',
      toolbar: {
        show: false,
      },
      height: 70,
    },
    colors: ['#394d5c', '#627787', '#a5bac9', '#c8d5de'],

    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: '50%',
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
        return val;
      },
      position: 'top',
      style: {
        fontSize: '10px',
        colors: ['#304758'],
        fontWeight: 700,
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
      categories: [['July'], ['June'], ['May'], ['April']],
      labels: {
        show: true,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
        formatter: function (val) {
          return val + '  - Decisions';
        },
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
  };
  const forumdecisionsmadeseries = [
    {
      name: '',
      data: [31, 33, 41, 35],
    },
  ];
  const forumdecisionsimplementedchart = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#4d5561',
      toolbar: {
        show: false,
      },
      height: 70,
    },
    colors: ['#395c4b', '#628774', '#a5c9b4', '#c8decf'],
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: '50%',
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
        return val;
      },
      position: 'top',
      style: {
        fontSize: '10px',
        colors: ['#304758'],
        fontWeight: 700,
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
      categories: [['July'], ['June'], ['May'], ['April']],
      labels: {
        show: true,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
        formatter: function (val) {
          return val + '  - Implemented';
        },
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
  };
  const forumdecisionsimplementedseries = [
    {
      name: '',
      data: [14, 17, 19, 26],
    },
  ];
  const complianceratechart = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#4d5561',
      toolbar: {
        show: false,
      },
      height: 70,
    },
    colors: ['#a8d70f', '#b6e717', '#cdf93c', '#e0ff78'],
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: '50%',
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
        return val + '%';
      },
      position: 'top',
      style: {
        fontSize: '10px',
        colors: ['#304758'],
        fontWeight: 700,
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
      categories: [['July'], ['June'], ['May'], ['April']],
      labels: {
        show: true,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
        formatter: function (val) {
          return val + '%';
        },
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
  };
  const compliancerateseries = [
    {
      name: '',
      data: [41, 52, 31, 72],
    },
  ];

  return (
    <BlankCard elevation={0} sx={{ backgroundColor: '#EAF1F6', p: 2 }}>
      <CardContent sx={{ py: 4, px: 4 }}>
        <Grid container justifyContent="space-between">
          <Grid item xs={12} sm={12} gap={3} display="flex" alignItems="center" textAlign="left">
            <Box width="100%" gap={3}>
              <Stack mb={5}>
                <Typography
                  gap="16px"
                  mb={4}
                  textAlign="center"
                  variant="h4"
                  whiteSpace="nowrap"
                  fontWeight={700}
                >
                  Implementation of Forum Office Decisions
                </Typography>
                <Stack direction="row" spacing={3} justifyContent="center">
                  {['#627787', '#628774', '#a8d70f', '#49BEFF'].map((color, index) => (
                    <Stack direction="row" alignItems="center" spacing={1} key={index}>
                      <Avatar
                        sx={{ width: 9, height: 9, bgcolor: color, svg: { display: 'none' } }}
                      ></Avatar>
                      <Box>
                        <Typography
                          variant="subtitle2"
                          fontSize="12px"
                          fontWeight={700}
                          color="textSecondary"
                        >
                          {
                            [
                              'Forum Office Decisions',
                              'Forum Decisions Implemented',
                              'Compliance Rate',
                              'NERC Target',
                            ][index]
                          }
                        </Typography>
                      </Box>
                    </Stack>
                  ))}
                </Stack>
              </Stack>

              <Grid container spacing={3} mt={2}>
                {/* 1 */}
                <Grid item xs={12} sm={4}>
                  <BlankCard>
                    <CardContent sx={{ p: '30px' }}>
                      <Typography variant="h5">Forum Office Decisions </Typography>

                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <Typography variant="h4" mt={3} fontWeight={600}>
                            37
                          </Typography>
                          <Stack direction="row" spacing={1} mt={1} alignItems="center">
                            <Avatar sx={{ bgcolor: 'success.light', width: 20, height: 20 }}>
                              <IconArrowUpRight width={16} color="#39b69a" />
                            </Avatar>
                            <Typography variant="subtitle2" color="textSecondary">
                              +9%
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography
                            mb={2}
                            variant="subtitle2"
                            whiteSpace="nowrap"
                            fontWeight={600}
                            textAlign="center"
                          >
                            Previous 4 Months
                          </Typography>
                          <Chart
                            options={forumdecisionsmadechart}
                            series={forumdecisionsmadeseries}
                            type="bar"
                            height="120px"
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                  </BlankCard>
                </Grid>
                {/* 2 */}
                <Grid item xs={12} sm={4}>
                  <BlankCard>
                    <CardContent sx={{ p: '30px' }}>
                      <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h5">Forum Decisions Implemented</Typography>
                      </Box>

                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <Typography variant="h4" mt={3} fontWeight={600}>
                            16
                          </Typography>
                          <Stack direction="row" spacing={1} mt={1} alignItems="center">
                            <Avatar sx={{ bgcolor: 'success.light', width: 20, height: 20 }}>
                              <IconArrowUpRight width={16} color="#39b69a" />
                            </Avatar>
                            <Typography variant="subtitle2" color="textSecondary">
                              +9%
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography
                            mb={2}
                            variant="subtitle2"
                            whiteSpace="nowrap"
                            fontWeight={600}
                            textAlign="center"
                          >
                            Previous 4 Months
                          </Typography>
                          <Chart
                            options={forumdecisionsimplementedchart}
                            series={forumdecisionsimplementedseries}
                            type="bar"
                            height="120px"
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                  </BlankCard>
                </Grid>
                {/* 3 */}
                <Grid item xs={12} sm={4}>
                  <BlankCard>
                    <CardContent sx={{ p: '30px' }}>
                      <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h5">Compliance Rate</Typography>
                        <Box justifyContent="center" textAlign="right">
                          <Tooltip title="NERC Target">
                            <Chip
                              color="secondary"
                              justifyContent="center"
                              label="100%"
                              size="small"
                            />
                          </Tooltip>
                        </Box>
                      </Box>

                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <Typography variant="h4" mt={3} fontWeight={600}>
                            47%
                          </Typography>
                          <Stack direction="row" spacing={1} mt={1} alignItems="center">
                            <Avatar sx={{ bgcolor: 'success.light', width: 20, height: 20 }}>
                              <IconArrowUpRight width={16} color="#39b69a" />
                            </Avatar>
                            <Typography variant="subtitle2" color="textSecondary">
                              +9%
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography
                            mb={2}
                            variant="subtitle2"
                            whiteSpace="nowrap"
                            fontWeight={600}
                            textAlign="center"
                          >
                            Previous 4 Months
                          </Typography>
                          <Chart
                            options={complianceratechart}
                            series={compliancerateseries}
                            type="bar"
                            height="120px"
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                  </BlankCard>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </BlankCard>
  );
};

export default ForumOfficeDecisionsNERC;
