import React, { useEffect, useState } from 'react';
import { Box, Avatar, Typography, Grid, Stack, CardContent } from '@mui/material';
import { IconArrowUpRight, IconArrowDownRight } from '@tabler/icons';
import BlankCard from '../../shared/BlankCard';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { SalesRepData } from './dataroom-financial-salesrep/dataroom-financial-salesrep';

const FinancialOverviewSalesRep = ({ selectedSalesRep, selectedDT }) => {
  const theme = useTheme();
  const [aggregatedData, setAggregatedData] = useState({
    totalCost: 0,
    revenueBilled: 0,
    collections: 0,
  });

  const formatAmount = (amount) => {
    if (amount >= 1000000000) {
      return `₦${(amount / 1000000000).toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}B`;
    }
    return `₦${(amount / 1000000).toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}M`;
  };

  useEffect(() => {
    const calculateAggregatedData = () => {
      let totalCost = 0;
      let revenueBilled = 0;
      let collections = 0;

      const data = SalesRepData[selectedSalesRep] || {};

      if (selectedDT) {
        const dtData = data.DTs?.find((dt) => dt.name === selectedDT);
        if (dtData) {
          totalCost = dtData.totalCost || 0;
          revenueBilled = dtData.revenueBilled || 0;
          collections = dtData.collections || 0;
        }
      } else {
        data.DTs?.forEach((dt) => {
          totalCost += dt.totalCost || 0;
          revenueBilled += dt.revenueBilled || 0;
          collections += dt.collections || 0;
        });
      }

      setAggregatedData({
        totalCost,
        revenueBilled,
        collections,
      });
    };

    calculateAggregatedData();
  }, [selectedSalesRep, selectedDT]);

  const generateSeriesData = (value) => {
    return Array(4).fill(value);
  };

  const totalcostchart = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 70,
      sparkline: {
        enabled: true,
      },
    },
    colors: ['#0074BA'],
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
      formatter: formatAmount,
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
      categories: ['Sep', 'Aug', 'Jul', 'Jun'],
      labels: {
        show: true,
        style: {
          fontSize: '10px',
        },
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
        formatter: formatAmount,
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
    title: {
      text: '',
      align: 'center',
      style: {
        fontSize: '12px',
        fontWeight: 'bold',
        color: '#263238',
        padding: '10px',
      },
    },
  };

  const totalcostseries = [{ name: '', data: generateSeriesData(aggregatedData.totalCost) }];
  const revenuebilledseries = [
    { name: '', data: generateSeriesData(aggregatedData.revenueBilled) },
  ];
  const collectionsseries = [{ name: '', data: generateSeriesData(aggregatedData.collections) }];

  return (
    <BlankCard elevation={0} sx={{ backgroundColor: '#EAF1F6', p: 2 }}>
      <CardContent sx={{ py: 4, px: 4 }}>
        <Grid container justifyContent="space-between">
          <Grid item xs={12} sm={12} gap={3} display="flex" alignItems="center" textAlign="left">
            <Box width="100%" gap={3}>
              <Stack direction="row" justifyContent="space-between">
                <Typography
                  gap="16px"
                  variant="h4"
                  textAlign="left"
                  whiteSpace="nowrap"
                  fontWeight={700}
                >
                  Financial Overview - Sales Rep
                </Typography>
                <Stack direction="row" spacing={3}>
                  {['#0074BA', '#02B7FA', '#ABC4C9'].map((color, index) => (
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
                          {['Outstanding - All-Time', 'Revenue Billed', 'Collections'][index]}
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
                      <Typography variant="h5">Outstanding Billed</Typography>
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <Typography variant="h4" mt={2} fontWeight={600}>
                            ₦{aggregatedData.totalCost.toLocaleString()}
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
                            options={totalcostchart}
                            series={totalcostseries}
                            type="bar"
                            height="70px"
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
                      <Typography variant="h5">Current Billed</Typography>
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <Typography variant="h4" mt={2} fontWeight={600}>
                            ₦{aggregatedData.revenueBilled.toLocaleString()}
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
                            options={totalcostchart}
                            series={revenuebilledseries}
                            type="bar"
                            height="70px"
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
                        <Typography variant="h5">Collections</Typography>
                      </Box>
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <Typography variant="h4" mt={2} fontWeight={600}>
                            ₦{aggregatedData.collections.toLocaleString()}
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
                            options={totalcostchart}
                            series={collectionsseries}
                            type="bar"
                            height="70px"
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

export default FinancialOverviewSalesRep;
