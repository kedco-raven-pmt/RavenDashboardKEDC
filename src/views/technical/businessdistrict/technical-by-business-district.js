import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import BDMapboxTechnicalBBD from '../../../components/technical-components/by-business-district-chart-cards/business-district-mapbox-bbd';
import HighestPeakFeedersBBD from '../../../components/technical-components/by-business-district-chart-cards/highest-peak-feeders-bbd';
import LowestPeakFeedersBBD from '../../../components/technical-components/by-business-district-chart-cards/lowest-peak-feeders-bbd';
import BusinessDistrictFilterTechnicalBBD from '../../../components/technical-components/by-business-district-chart-cards/business-district-filters-tech-bbd';
import { TechnicalDataBusinessDistrict } from '../../../components/technical-components/by-business-district-chart-cards/dataroom-tech-by-bd/dataroom-tech-bbd';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'State',
  },
  {
    title: 'Technical By Business District',
  },
];

const TechnicalByBusinessDistricts = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedBusinessDistrict, setSelectedBusinessDistrict] = useState('');

  const handleFilterChange = (filter) => {
    if (filter === 'Kano' || filter === 'Katsina' || filter === 'Jigawa') {
      setSelectedState(filter);
      setSelectedBusinessDistrict('');
    } else {
      setSelectedBusinessDistrict(filter);
      const state = Object.keys(TechnicalDataBusinessDistrict).find(state =>
        Object.keys(TechnicalDataBusinessDistrict[state].businessDistricts).includes(filter)
      );
      setSelectedState(state);
    }
  };

  const handleBusinessDistrictClick = (district) => {
    setSelectedBusinessDistrict(district);
    const state = Object.keys(TechnicalDataBusinessDistrict).find(state =>
      Object.keys(TechnicalDataBusinessDistrict[state].businessDistricts).includes(district)
    );
    setSelectedState(state);
  };

  return (
    <PageContainer title="Technical By Business District" description="this is Charts page">
      <Breadcrumb title="Technical By Business District" items={BCrumb} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <BusinessDistrictFilterTechnicalBBD
            onFilterChange={handleFilterChange}
            selectedState={selectedState}
            selectedBusinessDistrict={selectedBusinessDistrict}
          />
        </Grid>
        <Grid item xs={12}>
          <BDMapboxTechnicalBBD
            selectedBusinessDistrict={selectedBusinessDistrict}
            onBusinessDistrictClick={handleBusinessDistrictClick}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <HighestPeakFeedersBBD />
            </Grid>
            <Grid item xs={12} sm={6}>
              <LowestPeakFeedersBBD />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default TechnicalByBusinessDistricts;
