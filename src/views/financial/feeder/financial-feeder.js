import React, { useState } from 'react';
import { Grid, Box, FormControlLabel } from '@mui/material';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import RevenueCostFinancialFeeder from '../../../components/financial-components/feeder-chart-cards/revenue-cost-feeder';
import FeederFilterFinancial from '../../../components/financial-components/feeder-chart-cards/feeder-filters-fin-feeder';
import FeederCompareFinancial from '../../../components/financial-components/feeder-chart-cards/revenue-cost-compare-financial';
import FeederDropdown from '../../../components/financial-components/feeder-chart-cards/feeder-dropdown';
import DTDropdown from '../../../components/financial-components/feeder-chart-cards/dt-dropdown';
import CustomSwitch from '../../../components/mui-forms/theme-elements/CustomSwitch';
import DailyCollectionPostPaidFeeder from '../../../components/financial-components/feeder-chart-cards/daily-collections-postpaid-feeder';
import DailyCollectionPrePaidFeeder from '../../../components/financial-components/feeder-chart-cards/daily-collections-prepaid-feeder';
import AgentCollectionsFeeder from '../../../components/financial-components/feeder-chart-cards/agent-collections-feeder';
import StateCostBreakdownFeeder from '../../../components/financial-components/feeder-chart-cards/statecost-breakdown-feeder';
import TariffFeeder from '../../../components/financial-components/feeder-chart-cards/tariffs-feeder';
import { Stack } from '@mui/system';

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
  const [selectedDT, setSelectedDT] = useState('DT');

  const handleFilterChange = ({ state, businessDistrict }) => {
    console.log('Filter change:', state, businessDistrict);
    setSelectedState(state);
    setSelectedBusinessDistrict(businessDistrict);
    setSelectedFeeder('');
    setSelectedDT('');
    console.log(`Selected State: ${state}, Selected Business District: ${businessDistrict}`);
  };

  const handleFeederChange = (feeder) => {
    setSelectedFeeder(feeder);
    setSelectedDT('');
    console.log(`Selected Feeder: ${feeder}`);
  };

  const handleDTChange = (dt) => {
    setSelectedDT(dt);
    console.log(`Selected DT: ${dt}`);
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
          <Stack direction="row" justifyContent="right" spacing={2}>
            <FeederDropdown
              selectedState={selectedState}
              selectedBusinessDistrict={selectedBusinessDistrict}
              selectedFeeder={selectedFeeder}
              onFeederChange={handleFeederChange}
            />

            <DTDropdown
              selectedState={selectedState}
              selectedBusinessDistrict={selectedBusinessDistrict}
              selectedFeeder={selectedFeeder}
              selectedDT={selectedDT}
              onDTChange={handleDTChange}
            />
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <RevenueCostFinancialFeeder
            selectedState={selectedState}
            selectedBusinessDistrict={selectedBusinessDistrict}
            selectedFeeder={selectedFeeder === 'Feeder' ? 'All Feeders' : selectedFeeder}
            selectedDT={selectedDT}
          />
        </Grid>
        <Grid item xs={12}>
          <DailyCollectionPrePaidFeeder
            selectedState={selectedState}
            selectedBusinessDistrict={selectedBusinessDistrict}
            selectedFeeder={selectedFeeder === 'Feeder' ? 'All Feeders' : selectedFeeder}
            selectedDT={selectedDT}
          />
        </Grid>
        <Grid item xs={12}>
          <DailyCollectionPostPaidFeeder
            selectedState={selectedState}
            selectedBusinessDistrict={selectedBusinessDistrict}
            selectedFeeder={selectedFeeder === 'Feeder' ? 'All Feeders' : selectedFeeder}
            selectedDT={selectedDT}
          />
        </Grid>
        <Grid item xs={12}>
          <AgentCollectionsFeeder
            selectedState={selectedState}
            selectedBusinessDistrict={selectedBusinessDistrict}
            selectedFeeder={selectedFeeder === 'Feeder' ? 'All Feeders' : selectedFeeder}
            selectedDT={selectedDT}
          />
        </Grid>
        <Grid item xs={12}>
          <StateCostBreakdownFeeder
            selectedState={selectedState}
            selectedBusinessDistrict={selectedBusinessDistrict}
            selectedFeeder={selectedFeeder === 'Feeder' ? 'All Feeders' : selectedFeeder}
            selectedDT={selectedDT}
          />
        </Grid>
        <Grid item xs={12}>
          <TariffFeeder
            selectedState={selectedState}
            selectedBusinessDistrict={selectedBusinessDistrict}
            selectedFeeder={selectedFeeder === 'Feeder' ? 'All Feeders' : selectedFeeder}
            selectedDT={selectedDT}
          />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default FinancialFeeder;
