import React from 'react';
import { Grid } from '@mui/material';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';

import CommercialBusinessDistrictEnergy from '../../../components/widgets/charts/CommercialBusinessDistrictEnergy';
import CommercialBusinessDistrictATCC from '../../../components/widgets/charts/CommercialBusinessDistrictATCC';
import CommercialBusinessDistrictBillColl from '../../../components/widgets/charts/CommercialBusinessDistrictBillColl';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'State',
  },
  {
    title: 'Commercial All Business District',
  },
];

const CommercialAllBusinessDistricts = () => {
  return (
    <PageContainer title="Commercial All Business District" description="this is Charts page">
      {/* breadcrumb */}
      <Breadcrumb title="Commercial All Business District" items={BCrumb} />
      {/* end breadcrumb */}
      <Grid container spacing={3}>
        
        
        
        
        <Grid item xs={12}>
          <CommercialBusinessDistrictEnergy />
        </Grid>
        <Grid item xs={12}>
          <CommercialBusinessDistrictATCC />
        </Grid>
        <Grid item xs={12}>
          <CommercialBusinessDistrictBillColl />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Grid container spacing={3}>
            
            
            
         
            
            
            
            
          
            
            
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default CommercialAllBusinessDistricts;
