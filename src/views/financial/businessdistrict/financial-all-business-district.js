import React, { useState } from 'react';
import { Grid, Box, FormControlLabel } from '@mui/material';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import CostBreakdownFinancialABD from '../../../components/financial-components/all-business-district-chart-card/cost-breakdown-abd';
import TariffLossFinancialABD from '../../../components/financial-components/all-business-district-chart-card/tariffloss-abd';
import HighestTariffLossFinancialABD from '../../../components/financial-components/all-business-district-chart-card/highest-tariffloss-abd';
import LowestTariffLossFinancialABD from '../../../components/financial-components/all-business-district-chart-card/lowest-tariffloss-abd';
import CostBreakdownCompareFinancialABD from '../../../components/financial-components/all-business-district-chart-card/cost-breakdown-compare-abd';
import CustomSwitch from '../../../components/forms/theme-elements/CustomSwitch';
import StateFilterFinancialABD from '../../../components/financial-components/all-business-district-chart-card/state-filters-fin-abd';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'State',
  },
  {
    title: 'Financial All Business District',
  },
];

const FinancialAllBusinessDistricts = () => {
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
    <PageContainer title="Financial All Business District" description="this is Charts page">
      <Breadcrumb title="Financial All Business District" items={BCrumb} />
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <StateFilterFinancialABD onFilterChange={handleFilterChange} selectedState={selectedState} />
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
          {compare ? <CostBreakdownCompareFinancialABD selectedState={selectedState} /> : <CostBreakdownFinancialABD selectedState={selectedState} />}
        </Grid>
        <Grid item xs={12} lg={8}>
          <TariffLossFinancialABD selectedState={selectedState} />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} lg={12}>
              <HighestTariffLossFinancialABD selectedState={selectedState} />
            </Grid>
            <Grid item xs={12} sm={6} lg={12}>
              <LowestTariffLossFinancialABD selectedState={selectedState} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default FinancialAllBusinessDistricts;
