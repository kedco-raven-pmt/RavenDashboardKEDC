import React from 'react';
import PageContainer from 'src/components/container/PageContainer';

// components
import Banner from '../../components/homepage-components/Banner';
import DemoSlider from '../../components/homepage-components/DemoSlider';

const Homepage = () => {
  return (
    <PageContainer title="Homepage" description="this is Homepage">
      <Banner />
      < DemoSlider/>


    </PageContainer>
  );
};

export default Homepage;
