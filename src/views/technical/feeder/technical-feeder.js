import React, { useState, useEffect } from 'react';
import { Grid, Box } from '@mui/material';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import AvailabilityTechnicalFeeder from '../../../components/technical-components/feeder-charts-cards/availability-feeder';
import FeederFilterTechnical from '../../../components/technical-components/feeder-charts-cards/feeder-filter-tech';
import { FeederData } from '../../../components/technical-components/feeder-charts-cards/dataroom-tech-feeder/dataroom-technical-feeder';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'State',
  },
  {
    title: 'Technical Feeder',
  },
];

const TechnicalFeeder = () => {
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
      setFilteredData(FeederData[selectedState].businessDistricts[selectedBusinessDistrict]);
    } else if (selectedState) {
      const data = Object.values(FeederData[selectedState].businessDistricts).flat();
      setFilteredData(data);
    } else {
      const data = Object.values(FeederData).flatMap(state => Object.values(state.businessDistricts).flat());
      setFilteredData(data);
    }
  }, [selectedState, selectedBusinessDistrict]);

  return (
    <PageContainer title="Technical Feeder" description="this is Charts page">
      <Breadcrumb title="Technical Feeder" items={BCrumb} />

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FeederFilterTechnical onFilterChange={handleFilterChange} selectedState={selectedState} selectedBusinessDistrict={selectedBusinessDistrict} />
        </Grid>
        <Grid item xs={12}>
          <AvailabilityTechnicalFeeder filteredData={filteredData} />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default TechnicalFeeder;
