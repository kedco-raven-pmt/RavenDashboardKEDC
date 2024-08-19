import React, { useEffect } from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Grid, Box, Chip } from '@mui/material';
import DashboardCard from '../../shared/DashboardCard';
import { FinancialDataMapbox } from './dataroom-financial-by-state/dataroom-financial-bs';

const AgentCollectionByState = ({ selectedState }) => {
  const theme = useTheme();

  // Logging selected state
  console.log('Selected State:', selectedState);

  // Fetching data based on selected state
  const stateData = selectedState
    ? Object.values(FinancialDataMapbox).find(data => data.name === selectedState)
    : null;

  const chartData = stateData
    ? stateData.vendorCollections
    : Object.values(FinancialDataMapbox).reduce((totals, state) => {
        state.vendorCollections.forEach((value, index) => {
          totals[index] = (totals[index] || 0) + value;
        });
        return totals;
      }, []);

  const stateName = stateData ? stateData.name : 'All state';

  const optionscolumnchart = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: '#4d5561',
      fontSize: '11px',
      toolbar: { show: false },
      height: 330,
    },
    colors: ['#a2c1c5'],
    plotOptions: {                                                                                                  
      bar: {
        borderRadius: 0,
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
      formatter: val => `₦${val}M`,
      position: 'top',
      offsetY: -20,
      style: {
        fontSize: '11px',
        fontWeight: 700,
        colors: ['#4d5561'],
      },
      background: '#fff',
    },
    legend: { show: false },
    grid: {
      borderColor: 'rgba(0,0,0,0.1)',
      strokeDashArray: 3,
      xaxis: { lines: { show: false } },
    },
    yaxis: {
      min: 0,
      tickAmount: 4,
    },
    xaxis: {
      categories: ['BuyPower.ng', 'Banahim.net', 'Bank', 'Cash', 'POS', 'powershop.ng', 'Remita'],
      labels: { rotate: 0 },
      axisBorder: { show: false },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false,
    },
  };

  const seriescolumnchart = [
    {
      name: 'Daily Collections',
      data: chartData,
    },
  ];

  useEffect(() => {}, [selectedState, seriescolumnchart]);

  return (
    <DashboardCard
      title="Collections By Vendors (₦)"
      subtitle=""
      action={

        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Chip label={stateName} size="small" />
          </Box>

      }
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box mt={2}>
            <Chart
              options={optionscolumnchart}
              series={seriescolumnchart}
              type="bar"
              height="350px"
            />
          </Box>
        </Grid>
      </Grid>
    </DashboardCard>
  );
};

export default AgentCollectionByState;
