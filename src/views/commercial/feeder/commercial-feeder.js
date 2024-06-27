import React from 'react';
import { Grid } from '@mui/material';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import Top5FeedersATCC from '../../../components/widgets/charts/Top5FeedersATCC';
import Least5FeedersATCC from '../../../components/widgets/charts/Least5FeedersATCC';
import EnergyFeeders from '../../../components/widgets/charts/EnergyFeeders';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'State',
  },
  {
    title: 'Commercial Feeder',
  },
];

const CommercialFeeder = () => {
  return (
    <PageContainer title="Commercial Feeder" description="this is Charts page">
      {/* breadcrumb */}
      <Breadcrumb title="Commercial Feeder" items={BCrumb} />
      {/* end breadcrumb */}
      <Grid container spacing={3}>
      <Grid item xs={12} lg={6}>
          <Top5FeedersATCC />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Least5FeedersATCC />
        </Grid>
        <Grid item xs={12}>
          <EnergyFeeders />
        
        </Grid>
        
      </Grid>
    </PageContainer>
  );
};

export default CommercialFeeder;
