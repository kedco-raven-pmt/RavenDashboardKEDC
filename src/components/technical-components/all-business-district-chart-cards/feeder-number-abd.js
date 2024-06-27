import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { MenuItem, Grid, Stack, Typography, Button, Avatar, Box } from '@mui/material';
import { IconGridDots } from '@tabler/icons';
import DashboardCard from '../../shared/DashboardCard';
import CustomSelect from '../../forms/theme-elements/CustomSelect';
import { color, positions } from '@mui/system';

const FeederNumberTechnicalABD = () => {
  const [month, setMonth] = React.useState('1');

  const handleChange = (event) => {
    setMonth(event.target.value);
  };

  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = theme.palette.primary.light;
  const error = theme.palette.error.main;
  const errorlight = theme.palette.error.light;
  const secondary = theme.palette.success.main;
  const secondarylight = theme.palette.success.light;


  // chart
  const optionscolumnchart = {
    chart: {
      type: 'area',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 300,

    },
    
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0,
        stops: [20, 180],
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    dataLabels: {
      enabled: true,
      position: 'top',
      offsetY: -10,
      style: {
        fontSize: '10px',
        fontWeight: 700,
        color: '#000',
      },
      
      background: '#fff'
    },
    legend: {
      show: false,
    },
    grid: {
      borderColor: 'rgba(0,0,0,0.1)',
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    yaxis: {
      min: 0,
      tickAmount: 4,
    },
    xaxis: {
      categories: [['Jigawa', 'North'], ['Jigawa', 'South'], ['Kano', 'Central'], ['Kano' ,'East'], ['Kano', 'Industrial'], ['Kano' ,'North'], ['Kano', 'South'], ['Katsina', 'Central'], ['Katsina', 'North'], ['Katsina', 'South']],
      labels:{
        rotate: 0,
        style: {
            fontSize: '10px',
          },
      },
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false,
    },
  };
  const seriescolumnchart = [
    {
      name: 'Feeder Count',
      data: [15, 27, 22, 36, 15, 10, 15, 27, 22, 36],
    },
  ];

  return (
    <DashboardCard
      title="Number of Feeders By Business District"
      
    >
      <Grid container spacing={3}>
        {/* column */}
        <Grid item xs={12} >
          <Box className="rounded-bars">
            <Chart
              options={optionscolumnchart}
              series={seriescolumnchart}
              type="area"
              height="390px"
            />
          </Box>
        </Grid>
        {/* column */}
        
      </Grid>
    </DashboardCard>
  );
};

export default FeederNumberTechnicalABD;
