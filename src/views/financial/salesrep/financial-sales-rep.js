import React, { useState } from 'react';
import { Grid, Stack } from '@mui/material';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import FinancialOverviewSalesRep from '../../../components/financial-components/sales-rep-chart-cards/financial-overview-salesrep';
import SalesRepDropdown from '../../../components/financial-components/sales-rep-chart-cards/salesrep-filter-dropdown';
import DTSalesRepDropdown from '../../../components/financial-components/sales-rep-chart-cards/salesrep-dt-filter-dropdown';
import SalesRepBreakdownFinancial from '../../../components/financial-components/sales-rep-chart-cards/salesrep-breakdown';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'State',
  },
  {
    title: 'Financial Sales Rep',
  },
];

const FinancialSalesRep = () => {
  const [selectedSalesRep, setSelectedSalesRep] = useState('');
  const [selectedDT, setSelectedDT] = useState('');

  const handleSalesRepChange = (salesRep) => {
    setSelectedSalesRep(salesRep);
    setSelectedDT(''); // Reset DT selection when a new Sales Rep is selected
  };

  const handleDTChange = (dt) => {
    setSelectedDT(dt);
  };

  return (
    <PageContainer
      title="Financial Sales Representative"
      description="This is the Financial Sales Rep page"
    >
      {/* breadcrumb */}
      <Breadcrumb title="Financial Sales Representative" items={BCrumb} />
      {/* end breadcrumb */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="space-between" spacing={2}>
            <SalesRepDropdown
              selectedSalesRep={selectedSalesRep}
              onSalesRepChange={handleSalesRepChange}
            />
            <DTSalesRepDropdown
              selectedSalesRep={selectedSalesRep}
              selectedDT={selectedDT}
              onDTChange={handleDTChange}
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <FinancialOverviewSalesRep selectedSalesRep={selectedSalesRep} selectedDT={selectedDT} />
        </Grid>
        <Grid item xs={8}>
          <SalesRepBreakdownFinancial />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default FinancialSalesRep;
