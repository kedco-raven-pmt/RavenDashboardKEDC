import React, { useEffect } from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Grid, Box, Chip } from '@mui/material';
import DashboardCard from '../../shared/DashboardCard';
import { FinancialDataBusinessDistrict } from './dataroom-financial-by-bd/dataroom-financial-bbd';

const AgentCollectionBBD = ({ selectedBusinessDistrict }) => {
  const theme = useTheme();

  // Function to get the district code by district name
  const getDistrictCodeByName = (name) => {
    return Object.keys(FinancialDataBusinessDistrict).find(key => FinancialDataBusinessDistrict[key].name === name);
  };

  const districtCode = getDistrictCodeByName(selectedBusinessDistrict);
  const districtData = districtCode ? FinancialDataBusinessDistrict[districtCode] : null;

  // Aggregating data if no specific district is selected
  const chartData = districtData
    ? Object.values(districtData.vendorCollections)
    : Object.values(FinancialDataBusinessDistrict).reduce((totals, district) => {
        Object.entries(district.vendorCollections).forEach(([vendor, value]) => {
          totals[vendor] = (totals[vendor] || 0) + value;
        });
        return totals;
      }, {});

  const districtName = districtData ? districtData.name : 'All business districts';

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
      categories: Object.keys(districtData ? districtData.vendorCollections : chartData),
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
      data: Object.values(chartData),
    },
  ];

  useEffect(() => {}, [selectedBusinessDistrict, seriescolumnchart]);

  return (
    <DashboardCard
      title="Collections By Vendors (₦)"
      subtitle=""
      action={
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Chip label={districtName} size="small" />
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

export default AgentCollectionBBD;
