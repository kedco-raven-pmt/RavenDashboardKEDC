import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { MenuItem, Grid, Stack, Typography, Button, Avatar, Box, ButtonGroup } from '@mui/material';

import DashboardWidgetCard from '../../shared/DashboardWidgetCard';
import DashboardCard from '../../shared/DashboardCard';

const StateCostBreakdownFinancialBS = () => {
    // chart color
    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const primarylight = theme.palette.grey[100];

    // chart
    const statecostbbreakdowncolumnchart = {
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
          categories: [['NBET Invoice'], ['MO Invoice'], ['Salaries'], ['Disco Opex'], ['Others']],
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
      const statecostbreakdownseries = [
        {
          name: '',
          data: [4.2, 6.2, 3.8, 0.5, 0.8],
        },
      ];

    return (
        <DashboardCard
            title="State Cost And Breakdown" 
        >
                  <Stack direction="row" spacing={3} mb={3} mt={3}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar
              sx={{ width: 9, height: 9, bgcolor: '#3B80B2', svg: { display: 'none' } }}
            ></Avatar>
            <Box>
              <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
                NBET Invoice
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar
              sx={{ width: 9, height: 9, bgcolor: '#599BC8', svg: { display: 'none' } }}
            ></Avatar>
            <Box>
              <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
                MO Invoice
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar
              sx={{ width: 9, height: 9, bgcolor: '#77ADD2', svg: { display: 'none' } }}
            ></Avatar>
            <Box>
              <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
                Salaries
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar
              sx={{ width: 9, height: 9, bgcolor: '#97BEDC', svg: { display: 'none' } }}
            ></Avatar>
            <Box>
              <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
                Disco Opex
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar
              sx={{ width: 9, height: 9, bgcolor: '#B3CEE6', svg: { display: 'none' } }}
            ></Avatar>
            <Box>
              <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
                Others
              </Typography>
            </Box>
          </Stack>
        </Stack>
            <>
                <Chart options={statecostbbreakdowncolumnchart} series={statecostbreakdownseries} type="bar" height="280px" />
            </>
            <Stack spacing={3} mt={3}>
            <Stack direction="row" spacing={2} alignItems="center" textAlign='center' justifyContent='center'>
              <Box>
                <Typography variant="h5" fontWeight="700">
                ₦59,242,094,983
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  Total cost
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </DashboardCard>
    );
};

export default StateCostBreakdownFinancialBS;
