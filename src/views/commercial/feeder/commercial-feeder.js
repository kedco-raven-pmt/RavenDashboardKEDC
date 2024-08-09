import React, { useState, useEffect }  from 'react';
import { Grid, Box } from '@mui/material';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import LowestATCCFeeder from '../../../components/commercial-components/feeder-charts-cards/lower-atcc-feeder';
import HighestATCCFeeder from '../../../components/commercial-components/feeder-charts-cards/higher-atcc-feeder';
import BreakdownCommercialFeeder from '../../../components/commercial-components/feeder-charts-cards/commercial-breakdown-feeder';
import FeederFilterCommercial from '../../../components/commercial-components/feeder-charts-cards/feeder-filter-commercial';
import { CommercialData } from '../../../components/commercial-components/feeder-charts-cards/dataroom-com-feeder/dataroom-com-feeder';

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

const buttonStyles = {
  minWidth: '100px', // Adjust this value as needed
  margin: '5px',
};

const CommercialFeeder = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedBusinessDistrict, setSelectedBusinessDistrict] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleFilterChange = ({ state, businessDistrict }) => {
    setSelectedState(state);
    setSelectedBusinessDistrict(businessDistrict);
    console.log(`Selected State: ${state}, Selected Business District: ${businessDistrict}`);
  };

  useEffect(() => {
    if (selectedState && selectedBusinessDistrict) {
      setFilteredData(CommercialData[selectedState].businessDistricts[selectedBusinessDistrict]);
    } else if (selectedState) {
      const data = Object.values(CommercialData[selectedState].businessDistricts).flat();
      setFilteredData(data);
    } else {
      const data = Object.values(CommercialData).flatMap(state => Object.values(state.businessDistricts).flat());
      setFilteredData(data);
    }
  }, [selectedState, selectedBusinessDistrict]);

  return (
    <PageContainer title="Commercial Feeder" description="this is Charts page">
      {/* breadcrumb */}
      <Breadcrumb title="Commercial Feeder" items={BCrumb} />
      {/* end breadcrumb */}
      <Grid container spacing={3}>
      <Grid item xs={12}>
          <FeederFilterCommercial onFilterChange={handleFilterChange} selectedState={selectedState} selectedBusinessDistrict={selectedBusinessDistrict} />
        </Grid>
        <Grid item xs={12}>
          <BreakdownCommercialFeeder filteredData={filteredData} />
        </Grid>

      <Grid item xs={12} lg={6}>
          <LowestATCCFeeder />
        </Grid>
        <Grid item xs={12} lg={6}>
          <HighestATCCFeeder />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default CommercialFeeder;
