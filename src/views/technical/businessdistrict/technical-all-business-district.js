import React, { useState } from 'react';
import { Grid, Box, FormControlLabel } from '@mui/material';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import AvailabilityTechnicalABD from '../../../components/technical-components/all-business-district-chart-cards/availability-abd';
import AvailabilityCompareTechnicalABD from '../../../components/technical-components/all-business-district-chart-cards/availability-compare-abd';
import FeederNumberTechnicalABD from '../../../components/technical-components/all-business-district-chart-cards/feeder-number-abd';
import PeakLoadTechnicalABD from '../../../components/technical-components/all-business-district-chart-cards/peak-load-abd';
import CustomSwitch from '../../../components/forms/theme-elements/CustomSwitch';
import StateFilterTechnicalABD from '../../../components/technical-components/all-business-district-chart-cards/state-filters-tech-abd';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'State',
  },
  {
    title: 'Technical All Business District',
  },
];

const TechnicalAllBusinessDistricts = () => {
  const [selectedState, setSelectedState] = useState('');
  const [compare, setCompare] = useState(false);

  const handleStateClick = (stateName) => {
    setSelectedState(stateName);
  };

  const handleFilterChange = (stateName) => {
    setSelectedState(stateName);
  };

  const handleCompareChange = (event) => {
    setCompare(event.target.checked);
  };

  return (
    <PageContainer title="Technical All Business District" description="this is Charts page">
      <Breadcrumb title="Technical All Business District" items={BCrumb} />
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <StateFilterTechnicalABD onFilterChange={handleFilterChange} selectedState={selectedState} />
        </Grid>
        <Grid item xs={8}>
          <Box textAlign="right">
            <FormControlLabel
              control={<CustomSwitch checked={compare} onChange={handleCompareChange} />}
              label="Compare"
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          {compare ? <AvailabilityCompareTechnicalABD selectedState={selectedState} /> : <AvailabilityTechnicalABD selectedState={selectedState} />}
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FeederNumberTechnicalABD selectedState={selectedState} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <PeakLoadTechnicalABD selectedState={selectedState} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default TechnicalAllBusinessDistricts;
