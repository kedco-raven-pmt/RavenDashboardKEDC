import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import StateMapboxTechnicalBS from '../../../components/technical-components/by-state-chart-cards/statemapbox-bs';
import HighestPeakFeedersBS from '../../../components/technical-components/by-state-chart-cards/highest-peak-feeders-bs';
import LowestPeakFeedersBS from '../../../components/technical-components/by-state-chart-cards/lowest-peak-feeders-bs';
import StateFilterTechnicalBS from '../../../components/technical-components/by-state-chart-cards/state-filters-tech-bs';

const BCrumb = [
  { to: '/', title: 'Home' },
  { title: 'State' },
  { title: 'Technical by State' },
];

const TechnicalByState = () => {
  const [selectedState, setSelectedState] = useState('');

  const handleStateClick = (stateName) => {
    setSelectedState(stateName);
  };

  const handleFilterChange = (stateName) => {
    setSelectedState(stateName);
  };

  return (
    <PageContainer title="Technical By State" description="this is Charts page">
      <Breadcrumb title="Technical by State" items={BCrumb} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <StateFilterTechnicalBS onFilterChange={handleFilterChange} selectedState={selectedState} />
        </Grid>
        <Grid item xs={12}>
          <StateMapboxTechnicalBS selectedState={selectedState} onStateClick={handleStateClick} />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <HighestPeakFeedersBS />
            </Grid>
            <Grid item xs={12} sm={6}>
              <LowestPeakFeedersBS />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default TechnicalByState;
