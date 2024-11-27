import React, { useState } from 'react';
import { Grid, Box, FormControlLabel } from '@mui/material';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import RevenueCostFinancialAS from '../../../components/financial-components/all-state-chart-cards/revenue-cost-as';
import TariffFinancialAS from '../../../components/financial-components/all-state-chart-cards/tariff-as';
import RevenueCostCompareFinancialAS from '../../../components/financial-components/all-state-chart-cards/revenue-cost-compare-as';
import TariffCompareFinancialAS from '../../../components/financial-components/all-state-chart-cards/tariff-compare-as';
import CustomSwitch from '../../../components/mui-forms/theme-elements/CustomSwitch';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'State',
  },
  {
    title: 'Financial All State',
  },
];

const FinancialAllState = () => {
  const [compare, setCompare] = useState(false);

  const handleCompareChange = (event) => {
    setCompare(event.target.checked);
  };

  return (
    <PageContainer title="Financial All State" description="This is the Financial All State page">
      {/* breadcrumb */}
      <Breadcrumb title="Financial All State" items={BCrumb} />
      {/* end breadcrumb */}
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
          {compare ? <RevenueCostCompareFinancialAS /> : <RevenueCostFinancialAS />}
        </Grid>
        <Grid item xs={12}>
          {compare ? <TariffCompareFinancialAS /> : <TariffFinancialAS />}
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default FinancialAllState;
