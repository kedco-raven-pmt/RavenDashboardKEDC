import React, { useState } from 'react';
import { Grid, Box, FormControlLabel } from '@mui/material';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import AvailabilityTechnicalAS from '../../../components/technical-components/all-state-charts-cards/availability-as';
import FeederInfoTechnicalAS from '../../../components/technical-components/all-state-charts-cards/feeder-info-as';
import AvailabilityCompareTechnicalAS from '../../../components/technical-components/all-state-charts-cards/availability-compare-as';
import FeederInfoCompareTechnicalAS from '../../../components/technical-components/all-state-charts-cards/feeder-info-compare-as';
import CustomSwitch from '../../../components/mui-forms/theme-elements/CustomSwitch';

const BCrumb = [{ to: '/', title: 'Home' }, { title: 'State' }, { title: 'Technical All State' }];

const TechnicalAllState = () => {
  const [compare, setCompare] = useState(false);

  const handleCompareChange = (event) => {
    setCompare(event.target.checked);
  };

  return (
    <PageContainer title="Technical All State" description="This is the Technical All State page">
      <Breadcrumb title="Technical All State" items={BCrumb} />
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Box textAlign="right">
            <FormControlLabel
              control={<CustomSwitch checked={compare} onChange={handleCompareChange} />}
              label="Compare"
            />
          </Box>
        </Grid>

        <Grid item xs={12}>
          {compare ? <AvailabilityCompareTechnicalAS /> : <AvailabilityTechnicalAS />}
        </Grid>
        <Grid item xs={12}>
          {compare ? <FeederInfoCompareTechnicalAS /> : <FeederInfoTechnicalAS />}
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default TechnicalAllState;
