import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Grid, Box, Chip } from '@mui/material';
import DashboardCard from '../../shared/DashboardCard';
import { FeederData } from './dataroom-financial-feeder/dataroom-financial-feeder';

const formatAmount = (amount) => {
  if (amount >= 1000000000) {
    return `₦${(amount / 1000000000).toFixed(1)}B`;
  } else if (amount >= 1000000) {
    return `₦${(amount / 1000000).toFixed(1)}M`;
  } else {
    return `₦${(amount / 1000).toFixed(0)}K`;
  }
};

// Helper function to aggregate vendor collections from DTs within a feeder
const aggregateVendorCollectionsForFeeder = (feeder) => {
  const aggregated = {};

  feeder.DTs?.forEach((dt) => {
    Object.entries(dt.vendorCollections || {}).forEach(([vendor, collection]) => {
      if (!aggregated[vendor]) {
        aggregated[vendor] = 0;
      }
      aggregated[vendor] += collection;
    });
  });

  return aggregated;
};

// Helper function to aggregate vendor collections across all states, business districts, and feeders
const aggregateVendorCollections = (selectedState, selectedBusinessDistrict, selectedFeeder) => {
  const aggregated = {};

  Object.entries(FeederData).forEach(([stateName, stateData]) => {
    if (selectedState && stateName !== selectedState) return;

    Object.entries(stateData.businessDistricts || {}).forEach(([districtName, districtFeeders]) => {
      if (selectedBusinessDistrict && districtName !== selectedBusinessDistrict) return;

      districtFeeders.forEach((feeder) => {
        if (selectedFeeder && feeder.name !== selectedFeeder) return;

        // Aggregate vendor collections from feeder-level data if available
        feeder.DTs?.forEach((dt) => {
          Object.entries(dt.vendorCollections || {}).forEach(([vendor, collection]) => {
            if (!aggregated[vendor]) {
              aggregated[vendor] = 0;
            }
            aggregated[vendor] += collection;
          });
        });
      });
    });
  });

  return Object.keys(aggregated).map((vendor) => ({
    name: vendor,
    data: aggregated[vendor],
  }));
};

const AgentCollectionsFeeder = ({
  selectedState,
  selectedBusinessDistrict,
  selectedFeeder,
  selectedDT,
}) => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  const [vendorCollections, setVendorCollections] = useState([]);

  useEffect(() => {
    const aggregateAndSetData = () => {
      let aggregatedCollections = [];

      // If a specific DT is selected, use its data directly
      if (selectedDT && selectedFeeder && selectedBusinessDistrict && selectedState) {
        const feederData = FeederData[selectedState]?.businessDistricts[
          selectedBusinessDistrict
        ]?.find((feeder) => feeder.name === selectedFeeder);
        const dtData = feederData?.DTs?.find((dt) => dt.name === selectedDT);
        aggregatedCollections = Object.entries(dtData?.vendorCollections || {}).map(
          ([vendor, collection]) => ({
            name: vendor,
            data: collection,
          }),
        );
      } else if (selectedFeeder && selectedBusinessDistrict && selectedState) {
        // If a feeder is selected, aggregate vendor collections from its DTs
        const feederData = FeederData[selectedState]?.businessDistricts[
          selectedBusinessDistrict
        ]?.find((feeder) => feeder.name === selectedFeeder);
        if (feederData) {
          const aggregatedFeederCollections = aggregateVendorCollectionsForFeeder(feederData);
          aggregatedCollections = Object.entries(aggregatedFeederCollections).map(
            ([vendor, collection]) => ({
              name: vendor,
              data: collection,
            }),
          );
        }
      } else {
        // Aggregate across all states, business districts, and feeders
        aggregatedCollections = aggregateVendorCollections(
          selectedState,
          selectedBusinessDistrict,
          selectedFeeder,
        );
      }

      setVendorCollections(aggregatedCollections);
    };

    aggregateAndSetData();
  }, [selectedState, selectedBusinessDistrict, selectedFeeder, selectedDT]);

  // Initial load: run aggregation when the component mounts
  useEffect(() => {
    const defaultAggregation = aggregateVendorCollections();
    setVendorCollections(defaultAggregation);
  }, []); // Empty dependency array ensures this runs only once on initial mount

  const optionscolumnchart = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: '#adb0bb',
      toolbar: { show: false },
      height: 330,
    },
    colors: ['#a2c1c5'],
    plotOptions: {
      bar: {
        borderRadius: 0,
        columnWidth: '50%',
        distributed: true,
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: formatAmount,
      position: 'top',
      offsetY: -20,
      style: {
        fontSize: '10px',
        fontWeight: 700,
        colors: ['#3b78a7'],
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
      labels: {
        formatter: formatAmount,
      },
    },
    xaxis: {
      categories: vendorCollections.map((vendor) => vendor.name),
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
      name: 'Vendor Collections',
      data: vendorCollections.map((vendor) => vendor.data),
    },
  ];

  return (
    <DashboardCard
      title="Vendor Collections (₦)"
      subtitle=""
      action={
        <Box display="flex" alignItems="left">
          <Chip
            label={
              selectedDT && selectedDT !== 'DT'
                ? selectedDT
                : selectedFeeder && selectedFeeder !== 'Feeder'
                ? selectedFeeder
                : selectedBusinessDistrict || selectedState || 'All Feeders'
            }
            size="small"
          />
        </Box>
      }
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box>
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

export default AgentCollectionsFeeder;
