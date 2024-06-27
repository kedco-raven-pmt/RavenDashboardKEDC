import React from 'react';
import { Box, Avatar, Typography, Card, CardContent, Grid, Divider, Stack, MenuItem } from '@mui/material';
import { IconArrowUpRight, IconArrowDownLeft } from '@tabler/icons';
import CustomSelect from '../../forms/theme-elements/CustomSelect';
import welcomeImg from 'src/assets/images/backgrounds/overveiw-bg.svg';
import userImg from 'src/assets/images/profile/user-1.jpg';
import BlankCard from '../../shared/BlankCard';

const TechnicalBreakdownFinancial = () => {
  const [month, setMonth] = React.useState('1');

  const handleChange = (event) => {
    setMonth(event.target.value);
  };
  return (
    <BlankCard elevation={0} sx={{ backgroundColor: '#EAF1F6', p: 2 }}>
      <CardContent sx={{ py: 4, px: 4 }}>
        <Grid container justifyContent="space-between">
          <Grid item xs={12} sm={12} display="flex" alignItems="center" textAlign="center">
            <Box width="100%">
                <Typography gap="16px" mb={11}  textAlign='left' variant="h4" whiteSpace="nowrap">
                  Technical Breakdown : 
                </Typography>

                <Stack spacing={2} justifyContent="space-between" direction="row" divider={<Divider sx={{ borderColor: "#959697" }} orientation="vertical" flexItem   />}>
                    <Box>
                        <Typography variant="h2" whiteSpace="nowrap">181<span><IconArrowUpRight width={18} color="#39B69A" /></span></Typography>
                        <Typography mt={2} variant="subtitle1" whiteSpace="nowrap">Number of Feeders</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h2" whiteSpace="nowrap">14 <span><IconArrowDownLeft width={18} color="#b63939" /></span></Typography>
                        <Typography mt={2} variant="subtitle1" whiteSpace="nowrap">Avg. Daily Interruption</Typography>
                    </Box>
                    
                    <Box>
                        <Typography variant="h2" whiteSpace="nowrap">15 Hrs <span><IconArrowUpRight width={18} color="#39B69A" /></span></Typography>
                        <Typography mt={2} variant="subtitle1" whiteSpace="nowrap">Avg. Turnaround Time</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h2" whiteSpace="nowrap">5M <span><IconArrowDownLeft width={18} color="#b63939" /></span></Typography>
                        <Typography mt={2} variant="subtitle1" whiteSpace="nowrap">Total Customer Count</Typography>
                    </Box>
                </Stack>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </BlankCard>
  );
};

export default TechnicalBreakdownFinancial;
