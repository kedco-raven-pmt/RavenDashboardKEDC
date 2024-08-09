import React, { useState } from 'react';
import { Grid, Box, FormControlLabel } from '@mui/material';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import RevenueCostFinancialFeeder from '../../../components/financial-components/feeder-chart-cards/revenue-cost-feeder';
import FeederFilterFinancial from '../../../components/financial-components/feeder-chart-cards/feeder-filters-fin-feeder';
import FeederCompareFinancial from '../../../components/financial-components/feeder-chart-cards/revenue-cost-compare-financial';
import CustomSwitch from '../../../components/forms/theme-elements/CustomSwitch';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'State',
  },
  {
    title: 'Financial Feeder',
  },
];

const FinancialFeeder = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedBusinessDistrict, setSelectedBusinessDistrict] = useState('');

  const handleFilterChange = ({ state, businessDistrict }) => {
    setSelectedState(state);
    setSelectedBusinessDistrict(businessDistrict);
    console.log(`Selected State: ${state}, Selected Business District: ${businessDistrict}`);
  };

  const [compare, setCompare] = useState(false);

  const handleCompareChange = (event) => {
    setCompare(event.target.checked);
  };

  return (
    <PageContainer title="Financial Feeder" description="this is Charts page">
      <Breadcrumb title="Financial Feeder" items={BCrumb} />

      <Grid container spacing={3}>

        
        <Grid item xs={8} >
        <FeederFilterFinancial onFilterChange={handleFilterChange} selectedState={selectedState} selectedBusinessDistrict={selectedBusinessDistrict} />
        </Grid>

        <Grid item xs={4} >
          <Box textAlign="right">
            <FormControlLabel
              control={<CustomSwitch checked={compare} onChange={handleCompareChange} />}
              label="Compare"
            />
          </Box>
        </Grid>

        <Grid item xs={12}>
          {compare ?  <FeederCompareFinancial
        selectedState={selectedState}
        selectedBusinessDistrict={selectedBusinessDistrict}
        />  : <RevenueCostFinancialFeeder 
        selectedState={selectedState}
        selectedBusinessDistrict={selectedBusinessDistrict}
      />}
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default FinancialFeeder;
