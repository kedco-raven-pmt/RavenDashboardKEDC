import React from 'react';
import { Box, CardContent, Grid, Typography } from '@mui/material';

import icon1 from '../../../assets/images/svgs/icon-collections.svg';
import icon2 from '../../../assets/images/svgs/icon-connect.svg';
import icon3 from '../../../assets/images/svgs/icon-bill.svg';
import icon4 from '../../../assets/images/svgs/icon-collectionefficiency.svg';
import icon5 from '../../../assets/images/svgs/icon-Totalcost.svg';
import icon6 from '../../../assets/images/svgs/icon-Revenuebilled.svg';

const topcards = [
  {
    icon: icon2,
    title: 'ATCC',
    digits: '59%',
    bgcolor: 'primary',
  },
  {
    icon: icon3,
    title: 'Billing Efficiency',
    digits: '71%',
    bgcolor: 'warning',
  },
  {
    icon: icon4,
    title: 'Collection Efficiency',
    digits: '58%',
    bgcolor: 'secondary',
  },
  {
    icon: icon5,
    title: 'Total Cost',
    digits: '₦58.69bn',
    bgcolor: 'error',
  },
  {
    icon: icon6,
    title: 'Revenue Billed',
    digits: '₦79.53bn',
    bgcolor: 'success',
  },
  {
    icon: icon1,
    title: 'Collections',
    digits: '₦46bn',
    bgcolor: 'info',
  },
];

const TopCards = () => {
  return (
    <Grid container spacing={3} mt={3}>
      {topcards.map((topcard, i) => (
        <Grid item xs={12} sm={4} lg={2} key={i}>
          <Box bgcolor={topcard.bgcolor + '.light'} textAlign="center">
            <CardContent>
              <img src={topcard.icon} alt={topcard.icon} width="50" />
              <Typography
                color={topcard.bgcolor + '.main'}
                mt={1}
                variant="subtitle1"
                fontWeight={600}
                sx={{ fontSize: '0.75rem' }}
              >
                {topcard.title}
              </Typography>
              <Typography color={topcard.bgcolor + '.main'} variant="h4" fontWeight={600}>
                {topcard.digits}
              </Typography>
            </CardContent>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default TopCards;
