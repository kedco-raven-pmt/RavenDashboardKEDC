import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import StateMapboxFinancialBBD from '../../../components/financial-components/by-business-district-chart-cards/statemapbox-bbd';
import StateCostBreakdownFinancialBBD from '../../../components/financial-components/by-business-district-chart-cards/statecost-breakdown-bbd';
import TariffFinancialBBD from '../../../components/financial-components/by-business-district-chart-cards/tarrifs-bbd';
import BusinessDistrictFilterFinancialBBD from '../../../components/financial-components/by-business-district-chart-cards/business-district-filters-fin-bbd';
import OpexBreakdownFinancialBBD from '../../../components/financial-components/by-business-district-chart-cards/opex-breakdown-bbd';
import AgentCollectionBBD from '../../../components/financial-components/by-business-district-chart-cards/agent-collections-bbd';
import { FinancialDataBusinessDistrict } from '../../../components/financial-components/by-business-district-chart-cards/dataroom-financial-by-bd/dataroom-financial-bbd';
import DailyCollectionPostPaidBBD from '../../../components/financial-components/by-business-district-chart-cards/daily-collections-postpaid-bbd';
import DailyCollectionPrePaidBBD from '../../../components/financial-components/by-business-district-chart-cards/daily-collections-prepaid-bbd';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'State',
  },
  {
    title: 'Financial By Business District',
  },
];

const FinancialByBusinessDistricts = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedBusinessDistrict, setSelectedBusinessDistrict] = useState('');

  const handleFilterChange = (filter) => {
    console.log('Filter change triggered:', filter);
    if (filter === 'Kano' || filter === 'Katsina' || filter === 'Jigawa') {
      setSelectedState(filter);
      setSelectedBusinessDistrict('');
    } else {
      setSelectedBusinessDistrict(filter);
      // Determine the state based on the business district
      const state = Object.keys(FinancialDataBusinessDistrict).find(state =>
        Object.keys(FinancialDataBusinessDistrict[state].businessDistricts).includes(filter)
      );
      setSelectedState(state);
      console.log('State set from business district:', state);
    }
  };

  const handleBusinessDistrictClick = (district) => {
    console.log('Business district clicked on map:', district);
    setSelectedBusinessDistrict(district);
    const state = Object.keys(FinancialDataBusinessDistrict).find(state =>
      Object.keys(FinancialDataBusinessDistrict[state].businessDistricts).includes(district)
    );
    setSelectedState(state);
    console.log('State set from map click:', state);
  };

  return (
    <PageContainer title="Financial By Business District" description="this is Charts page">
      <Breadcrumb title="Financial By Business District" items={BCrumb} />
      
      
      <Grid container spacing={3}>

        <Grid item xs={12} >
          <BusinessDistrictFilterFinancialBBD 
            onFilterChange={handleFilterChange} 
            selectedState={selectedState}
            selectedBusinessDistrict={selectedBusinessDistrict}
          />
        </Grid>

        <Grid item xs={12}>
          <StateMapboxFinancialBBD 
            selectedBusinessDistrict={selectedBusinessDistrict} 
            onBusinessDistrictClick={handleBusinessDistrictClick} 
          />
        </Grid>

        <Grid item xs={12}>
          <DailyCollectionPrePaidBBD selectedBusinessDistrict={selectedBusinessDistrict} />
        </Grid>

        <Grid item xs={12}>
          <DailyCollectionPostPaidBBD selectedBusinessDistrict={selectedBusinessDistrict} />
        </Grid>

        <Grid item xs={12}>
          <AgentCollectionBBD selectedBusinessDistrict={selectedBusinessDistrict} />
        </Grid>

        <Grid item xs={12}>
          <OpexBreakdownFinancialBBD 
            selectedBusinessDistrict={selectedBusinessDistrict}
          />
        </Grid>
        <Grid item xs={12} >
          <StateCostBreakdownFinancialBBD 
            selectedBusinessDistrict={selectedBusinessDistrict}
          />
        </Grid>
        <Grid item xs={12} >
          <TariffFinancialBBD 
            selectedBusinessDistrict={selectedBusinessDistrict}
          />
        </Grid>

      </Grid>
    </PageContainer>
  );
};

export default FinancialByBusinessDistricts;
