import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Box, CardContent, Grid, Typography, Stack, Avatar } from '@mui/material';
import BlankCard from '../../shared/BlankCard';
import { FeederData } from './dataroom-financial-feeder/dataroom-financial-feeder';

const formatAmount = (amount) => {
  if (amount >= 1000000000) {
    return `₦${(amount / 1000000000).toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}B`;
  }
  return `₦${(amount / 1000000).toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}M`;
};

// Aggregates DT values if needed
const aggregateDTValues = (feeder) => {
  const totalCost = feeder.DTs?.reduce((acc, dt) => acc + (dt.totalCost || 0), 0);
  const revenueBilled = feeder.DTs?.reduce((acc, dt) => acc + (dt.revenueBilled || 0), 0);
  const collections = feeder.DTs?.reduce((acc, dt) => acc + (dt.collections || 0), 0);
  return {
    totalCost: feeder.totalCost || totalCost,
    revenueBilled: feeder.revenueBilled || revenueBilled,
    collections: feeder.collections || collections,
  };
};

const FeederCompareFinancial = ({
  selectedState,
  selectedBusinessDistrict,
  selectedFeederList,
  selectedDTList,
}) => {
  const theme = useTheme();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (selectedState && FeederData[selectedState]) {
      const stateData = FeederData[selectedState];
      const districtData = selectedBusinessDistrict
        ? stateData.businessDistricts[selectedBusinessDistrict] || []
        : Object.values(stateData.businessDistricts).flat();

      const comparisonData = selectedFeederList
        .map((feederName) => {
          const feederData = districtData.find((feeder) => feeder.name === feederName);
          if (!feederData) return null;

          // Check if there are selected DTs for this feeder
          const selectedDTs = selectedDTList.filter((dt) => dt.feederName === feederName);
          if (selectedDTs.length > 0) {
            // Show parent feeder and selected DTs
            return [
              { name: feederData.name, ...aggregateDTValues(feederData) },
              ...selectedDTs
                .map((dt) => {
                  const dtData = feederData.DTs?.find((d) => d.name === dt.dtName);
                  return dtData ? { ...dtData, isDT: true } : null;
                })
                .filter(Boolean),
            ];
          }

          // Return parent feeder with aggregated DT values if no specific DTs are selected
          return [{ name: feederData.name, ...aggregateDTValues(feederData) }];
        })
        .flat()
        .filter(Boolean);

      setFilteredData(comparisonData);
    } else {
      // Handle cases when state or data is unavailable
      setFilteredData([]);
    }
  }, [selectedState, selectedBusinessDistrict, selectedFeederList, selectedDTList]);

  const FeederChartOptions = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: { show: false },
      height: 200,
      width: '100%',
    },
    colors: ['#0074BA', '#02B7FA', '#ABC4C9'],
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: '60%',
        barHeight: '60%',
        distributed: true,
        endingShape: 'rounded',
        dataLabels: { position: 'top' },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => formatAmount(val),
      position: 'top',
      style: {
        fontSize: '10px',
        colors: ['#304758'],
        fontWeight: 700,
      },
      offsetY: -20,
    },
    legend: { show: false },
    grid: { show: false },
    xaxis: {
      categories: [
        ['Total', 'Cost'],
        ['Rev.', 'Billed'],
        ['Rev.', 'Collect'],
      ],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { show: true },
    },
    yaxis: {
      labels: {
        show: false,
        formatter: (val) => formatAmount(val),
      },
    },
    tooltip: { theme: theme.palette.mode === 'dark' ? 'dark' : 'light' },
  };

  return (
    <BlankCard>
      <CardContent sx={{ p: '30px' }}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Typography variant="h5">Feeder and DT Comparison</Typography>
          <Stack direction="row" spacing={3}>
            {['Total Cost', 'Revenue Billed', 'Collections'].map((label, index) => (
              <Stack direction="row" alignItems="center" spacing={1} key={index}>
                <Avatar
                  sx={{
                    width: 9,
                    height: 9,
                    bgcolor: FeederChartOptions.colors[index],
                    svg: { display: 'none' },
                  }}
                ></Avatar>
                <Typography
                  variant="subtitle2"
                  fontSize="12px"
                  fontWeight={700}
                  color="textSecondary"
                >
                  {label}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>

        <Grid container spacing={3} mt={2}>
          {filteredData.map((item, index) => (
            <Grid item xs={12} sm={2.4} key={index}>
              <BlankCard>
                <CardContent sx={{ p: '20px' }}>
                  <Box>
                    <Chart
                      options={FeederChartOptions}
                      series={[
                        { name: '', data: [item.totalCost, item.revenueBilled, item.collections] },
                      ]}
                      type="bar"
                      height="220px"
                    />
                  </Box>
                  <Stack
                    direction="row"
                    spacing={1}
                    mt={1}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography
                      variant="h10"
                      fontSize="11px"
                      fontWeight={600}
                      textAlign="center"
                      mb={1}
                    >
                      {item.isDT ? `DT-${item.name}` : item.name}
                    </Typography>
                    <Avatar sx={{ bgcolor: '#f7f8f9', width: 30, height: 30 }}>
                      <Typography variant="subtitle1" fontSize="10px" color="#000">
                        {index + 1}
                      </Typography>
                    </Avatar>
                  </Stack>
                </CardContent>
              </BlankCard>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </BlankCard>
  );
};

export default FeederCompareFinancial;
