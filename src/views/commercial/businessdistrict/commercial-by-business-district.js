import React from 'react';
import { Grid } from '@mui/material';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import BusinessDistrictsATCC from '../../../components/dashboards/modern/BusinessDistrictsATCC';
import BusinessDistrictsBillingEfficiency from '../../../components/dashboards/modern/BusinessDistrictsBillingEfficiency';
import BusinessDistrictsCollectionEfficiency from '../../../components/dashboards/modern/BusinessDistrictsCollectionEfficiency';
import EnergyMetrics from 'src/components/dashboards/ecommerce/EnergyMetrics';
import CustomerMetricsBusinessDistrict from 'src/components/dashboards/ecommerce/CustomerMetricsBusinessDistrict';
import BusinessDistrictMap from '../../../components/widgets/charts/BusinessDistrictMap';

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
  return (
    <PageContainer title="Commercial By Business District" description="this is Charts page">
      {/* breadcrumb */}
      <Breadcrumb title="Commercial By Business District" items={BCrumb} />
      {/* end breadcrumb */}
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <BusinessDistrictMap />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <BusinessDistrictsATCC />
            </Grid>
            <Grid item xs={12}>
              <BusinessDistrictsBillingEfficiency />
            </Grid>
            <Grid item xs={12}>
              <BusinessDistrictsCollectionEfficiency />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <EnergyMetrics />
        </Grid>
        <Grid item xs={12} lg={6}>
          <CustomerMetricsBusinessDistrict />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default CommercialByBusinessDistricts;