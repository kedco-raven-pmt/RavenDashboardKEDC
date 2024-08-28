import React, { useState } from 'react';
import { Grid, Box, FormControlLabel } from '@mui/material';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import RevenueCostFinancialFeeder from '../../../components/financial-components/feeder-chart-cards/revenue-cost-feeder';
import FeederFilterFinancial from '../../../components/financial-components/feeder-chart-cards/feeder-filters-fin-feeder';
import FeederCompareFinancial from '../../../components/financial-components/feeder-chart-cards/revenue-cost-compare-financial';
import FeederDropdown from '../../../components/financial-components/feeder-chart-cards/feeder-dropdown';
import CustomSwitch from '../../../components/forms/theme-elements/CustomSwitch';
import DailyCollectionPostPaidFeeder from '../../../components/financial-components/feeder-chart-cards/daily-collections-postpaid-feeder';
import DailyCollectionPrePaidFeeder from '../../../components/financial-components/feeder-chart-cards/daily-collections-prepaid-feeder';
import AgentCollectionsFeeder from '../../../components/financial-components/feeder-chart-cards/agent-collections-feeder';
import StateCostBreakdownFeeder from '../../../components/financial-components/feeder-chart-cards/statecost-breakdown-feeder';
import TariffFeeder from '../../../components/financial-components/feeder-chart-cards/tariffs-feeder';

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
  const [selectedFeeder, setSelectedFeeder] = useState('Feeder');

  const handleFilterChange = ({ state, businessDistrict }) => {
    setSelectedState(state);
    setSelectedBusinessDistrict(businessDistrict);
    setSelectedFeeder('');
    console.log(`Selected State: ${state}, Selected Business District: ${businessDistrict}`);
  };

  const handleFeederChange = (feeder) => {
    setSelectedFeeder(feeder);
    console.log(`Selected Feeder: ${feeder}`);
  };

  const [compare, setCompare] = useState(false);

  const handleCompareChange = (event) => {
    setCompare(event.target.checked);
  };

  return (
    <PageContainer title="Financial Feeder" description="this is Charts page">
      <Breadcrumb title="Financial Feeder" items={BCrumb} />

      <Grid container spacing={3}>
        <Grid item xs={8}>
          <FeederFilterFinancial
            onFilterChange={handleFilterChange}
            selectedState={selectedState}
            selectedBusinessDistrict={selectedBusinessDistrict}
          />
        </Grid>

        <Grid item xs={4} textAlign="right">
          <FeederDropdown
            selectedState={selectedState}
            selectedBusinessDistrict={selectedBusinessDistrict}
            selectedFeeder={selectedFeeder}
            onFeederChange={handleFeederChange}
          />
        </Grid>

        <Grid item xs={12}>
          {compare ? (
            <FeederCompareFinancial
              selectedState={selectedState}
              selectedBusinessDistrict={selectedBusinessDistrict}
              selectedFeeder={selectedFeeder === 'Feeder' ? 'All Feeders' : selectedFeeder}
            />
          ) : (
            <RevenueCostFinancialFeeder
              selectedState={selectedState}
              selectedBusinessDistrict={selectedBusinessDistrict}
              selectedFeeder={selectedFeeder === 'Feeder' ? 'All Feeders' : selectedFeeder}
            />
          )}
        </Grid>

        <Grid item xs={12}>
          <DailyCollectionPostPaidFeeder
            selectedState={selectedState}
            selectedBusinessDistrict={selectedBusinessDistrict}
            selectedFeeder={selectedFeeder === 'Feeder' ? 'All Feeders' : selectedFeeder}
          />
        </Grid>
        <Grid item xs={12}>
          <DailyCollectionPrePaidFeeder
            selectedState={selectedState}
            selectedBusinessDistrict={selectedBusinessDistrict}
            selectedFeeder={selectedFeeder === 'Feeder' ? 'All Feeders' : selectedFeeder}
          />
        </Grid>
        <Grid item xs={12}>
          <AgentCollectionsFeeder
            selectedState={selectedState}
            selectedBusinessDistrict={selectedBusinessDistrict}
            selectedFeeder={selectedFeeder === 'Feeder' ? 'All Feeders' : selectedFeeder}
          />
        </Grid>

        <Grid item xs={12}>
          <StateCostBreakdownFeeder
            selectedState={selectedState}
            selectedBusinessDistrict={selectedBusinessDistrict}
            selectedFeeder={selectedFeeder === 'Feeder' ? 'All Feeders' : selectedFeeder}
          />
        </Grid>
        <Grid item xs={12}>
          <TariffFeeder
            selectedState={selectedState}
            selectedBusinessDistrict={selectedBusinessDistrict}
            selectedFeeder={selectedFeeder === 'Feeder' ? 'All Feeders' : selectedFeeder}
          />
        </Grid>

        <Grid item xs={12}>
          <Box textAlign="right">
            <FormControlLabel
              control={<CustomSwitch checked={compare} onChange={handleCompareChange} />}
              label="Compare"
            />
          </Box>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default FinancialFeeder;
