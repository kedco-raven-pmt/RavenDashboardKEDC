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

const RevenueCostFinancialFeeder = ({
  selectedState,
  selectedBusinessDistrict,
  selectedFeeder,
  selectedDT,
}) => {
  const theme = useTheme();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (selectedState) {
      const stateData = FeederData[selectedState];
      if (stateData) {
        if (selectedBusinessDistrict) {
          const districtData = stateData.businessDistricts[selectedBusinessDistrict];
          if (districtData) {
            if (selectedFeeder && selectedFeeder !== 'All Feeders') {
              const feederData = districtData.find((feeder) => feeder.name === selectedFeeder);
              if (selectedDT && feederData) {
                const selectedDTData = feederData.DTs.find((dt) => dt.name === selectedDT);
                if (selectedDTData) {
                  setFilteredData([
                    { name: feederData.name, ...aggregateDTValues(feederData) },
                    { ...selectedDTData, isDT: true },
                  ]);
                }
              } else if (feederData) {
                const aggregatedFeeder = {
                  name: feederData.name,
                  ...aggregateDTValues(feederData),
                };
                setFilteredData([
                  aggregatedFeeder,
                  ...feederData.DTs.map((dt) => ({
                    ...dt,
                    isDT: true,
                  })),
                ]);
              }
            } else {
              const aggregatedFeederData = districtData.map((feeder) => ({
                name: feeder.name,
                ...aggregateDTValues(feeder),
              }));
              setFilteredData(aggregatedFeederData);
            }
          }
        } else {
          const aggregatedDistrictFeederData = Object.values(stateData.businessDistricts).flatMap(
            (district) =>
              district.map((feeder) => ({
                name: feeder.name,
                ...aggregateDTValues(feeder),
              })),
          );
          setFilteredData(aggregatedDistrictFeederData);
        }
      }
    } else {
      const allStateFeederData = Object.values(FeederData).flatMap((state) =>
        Object.values(state.businessDistricts).flatMap((district) =>
          district.map((feeder) => ({
            name: feeder.name,
            ...aggregateDTValues(feeder),
          })),
        ),
      );
      setFilteredData(allStateFeederData);
    }
  }, [selectedState, selectedBusinessDistrict, selectedFeeder, selectedDT]);

  console.log('Filtered Data:', filteredData);

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
          <Typography variant="h5">Expenditure and Collections</Typography>
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
              <Box
                sx={{
                  boxShadow:
                    item.name === selectedFeeder
                      ? 'rgb(0 214 255) 0px 0px 2px 0px, rgb(22 118 141 / 22%) 0px 12px 24px -4px !important'
                      : '',
                }}
              >
                <BlankCard>
                  <CardContent sx={{ p: '20px' }}>
                    <Box>
                      <Chart
                        options={FeederChartOptions}
                        series={[
                          {
                            name: '',
                            data: [item.totalCost, item.revenueBilled, item.collections],
                          },
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
                        {item.name}
                      </Typography>
                      <Avatar sx={{ bgcolor: '#f7f8f9', width: 30, height: 30 }}>
                        <Typography variant="subtitle1" fontSize="10px" color="#000">
                          {item.isDT ? `DT-${index}` : index + 1}
                        </Typography>
                      </Avatar>
                    </Stack>
                  </CardContent>
                </BlankCard>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </BlankCard>
  );
};

export default RevenueCostFinancialFeeder;
