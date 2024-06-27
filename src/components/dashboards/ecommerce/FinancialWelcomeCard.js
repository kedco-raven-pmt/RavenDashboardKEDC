import React from 'react';
import { Box, Avatar, Typography, Card, CardContent, Grid, Divider, Stack, MenuItem } from '@mui/material';
import { IconArrowUpRight, IconArrowDownLeft } from '@tabler/icons';
import CustomSelect from '../../forms/theme-elements/CustomSelect';
import welcomeImg from 'src/assets/images/backgrounds/overveiw-bg.svg';
import userImg from 'src/assets/images/profile/user-1.jpg';

const FinancialWelcomeCard = () => {
  const [month, setMonth] = React.useState('1');

  const handleChange = (event) => {
    setMonth(event.target.value);
  };
  return (
    <Card elevation={0} sx={{ backgroundColor: '#e4e9ec', py: 0 }}>
      <CardContent sx={{ py: 2, px: 2 }}>
        <Grid container justifyContent="space-between">
          <Grid item sm={6} display="flex" alignItems="center">
            <Box>
            <Typography gap="16px" mb={10} variant="h4" whiteSpace="nowrap">
                  Welcome back Regis Fortune!
                </Typography>
              <Box
                gap="16px" mb={5}
                sx={{
                  display: {
                    xs: 'block',
                    sm: 'flex',
                  },
                  alignItems: 'center',
                }}
              >
              
                
                <Typography variant="h5" whiteSpace="nowrap">Financial Overview:</Typography>
              </Box>

              <Stack spacing={2}  direction="row" divider={<Divider orientation="vertical" flexItem />}>
                <Box>
                  
                <Typography variant="h2" whiteSpace="nowrap">₦23,404,302 <span><IconArrowUpRight width={18} color="#39B69A" /></span></Typography>
                <Typography variant="subtitle1" whiteSpace="nowrap">Operating Expenditure</Typography>
                </Box>
                <Box>
                <Typography variant="h2" whiteSpace="nowrap">28%<span><IconArrowDownLeft width={18} color="#b63939" /></span></Typography>
                <Typography variant="subtitle1" whiteSpace="nowrap">Profit Margin</Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>
          <Grid sm={5} >
         
            <Box mb="-30px" mt="50px">
              <CustomSelect labelId="month-dd" id="month-dd" size="small" value={month}  onChange={handleChange} sx={{ display: 'flex' }} p="15px"
              >
              <MenuItem value={1}>Today</MenuItem>
              <MenuItem value={2}>Week</MenuItem>
              <MenuItem value={3}>Month</MenuItem>
              </CustomSelect>
              <img src={welcomeImg} alt={welcomeImg} width={'400px'} />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default FinancialWelcomeCard;
