import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { IconArrowDownRight } from '@tabler/icons';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import CommercialDashboardWidgetCard from '../../shared/CommercialDashboardWidgetCard';

const BillingEfficiencyStates = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  // gauge chart options
  const optionsGaugeChart = {
    chart: {
      height: 295,
      type: 'radialBar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        hollow: {
          margin: 0,
          size: '70%',
          background: theme.palette.background.default,
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: 'front',
        },
        track: {
          background: theme.palette.grey[200],
          strokeWidth: '67%',
          margin: 0,
        },
        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: false,
            color: theme.palette.text.secondary,
            fontSize: '13px'
          },
          value: {
            formatter: function(val) {
              return parseInt(val) + '%';
            },
            color: theme.palette.text.primary,
            fontSize: '30px',
            show: true,
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: [primary],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: 'round'
    },
    labels: ['Billing Efficiency'],
    colors: [primary],
  };

  const seriesGaugeChart = [71];

  return (
    <CommercialDashboardWidgetCard
      title="Billing Efficiency"
      subtitle={(
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="subtitle2" fontSize="12px" color="textSecondary">
            (last month)
          </Typography>
          <Avatar sx={{ bgcolor: 'error.light', width: 20, height: 20 }}>
            <IconArrowDownRight width={16} color="#FA896B" />
          </Avatar>
          <Typography variant="subtitle2" color="textSecondary">
            -4%
          </Typography>
        </Stack>
      )}
      dataLabel1="Target"
      dataItem1="100%"
    >
      <>
        <Chart 
          options={optionsGaugeChart} 
          series={seriesGaugeChart} 
          type="radialBar" 
          height="295px" 
        />
      </>
    </CommercialDashboardWidgetCard>
  );
};

export default BillingEfficiencyStates;
