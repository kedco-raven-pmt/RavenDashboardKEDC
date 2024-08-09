import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import StateMapboxCommercialBBD from '../../../components/commercial-components/by-business-district-charts-cards/statemapbox-bbd';
import BusinessDistrictFilterFinancialBBD from '../../../components/commercial-components/by-business-district-charts-cards/business-district-filters-bbd';
import { FinancialDataBusinessDistrict } from '../../../components/commercial-components/by-business-district-charts-cards/dataroom-commercial-by-bd/dataroom-commercial-bbd';
import CustomerMetricsBusinessDistrict from 'src/components/dashboards/ecommerce/CustomerMetricsBusinessDistrict';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'State',
  },
  {
    title: 'Commercial By Business District',
  },
];

const CommercialByBusinessDistricts = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedBusinessDistrict, setSelectedBusinessDistrict] = useState('');

  const handleFilterChange = (filter) => {
    if (filter === 'Kano' || filter === 'Katsina' || filter === 'Jigawa') {
      setSelectedState(filter);
      setSelectedBusinessDistrict('');
    } else {
      setSelectedBusinessDistrict(filter);
      const state = Object.keys(FinancialDataBusinessDistrict).find(state =>
        Object.keys(FinancialDataBusinessDistrict[state].businessDistricts).includes(filter)
      );
      setSelectedState(state);
    }
  };

  const handleBusinessDistrictClick = (district) => {
    setSelectedBusinessDistrict(district);
    const state = Object.keys(FinancialDataBusinessDistrict).find(state =>
      Object.keys(FinancialDataBusinessDistrict[state].businessDistricts).includes(district)
    );
    setSelectedState(state);
  };

  return (
    <PageContainer title="Commercial By Business District" description="this is Charts page">
      <Breadcrumb title="Commercial By Business District" items={BCrumb} />
      
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <BusinessDistrictFilterFinancialBBD 
            onFilterChange={handleFilterChange} 
            selectedState={selectedState}
            selectedBusinessDistrict={selectedBusinessDistrict}
          />
        </Grid>

        <Grid item xs={12}>
          <StateMapboxCommercialBBD 
            selectedBusinessDistrict={selectedBusinessDistrict} 
            onBusinessDistrictClick={handleBusinessDistrictClick} 
          />
        </Grid>
        <Grid item xs={12}>
          <CustomerMetricsBusinessDistrict 
          />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default CommercialByBusinessDistricts;
