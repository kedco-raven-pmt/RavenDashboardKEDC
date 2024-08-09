import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, Grid, Divider, Stack, MenuItem, FormControl, InputLabel } from '@mui/material';
import { IconArrowUpRight, IconArrowDownLeft } from '@tabler/icons';
import CustomSelect from '../../forms/theme-elements/CustomSelect';
import welcomeImg from 'src/assets/images/backgrounds/overveiw-bg.svg';
import { useTheme } from '@mui/material/styles';

const TechnicalWelcomeCard = () => {
  const theme = useTheme();
  const primaryLight = theme.palette.primary.light;
  const textColor = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.8)' : '#2A3547';

  const [year, setYear] = useState('All');
  const [month, setMonth] = useState('All');

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const years = ['All', '2023', '2024'];
  const allMonths = ['All', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const [availableMonths, setAvailableMonths] = useState(allMonths);

  useEffect(() => {
    if (year === '2024') {
      const currentMonth = new Date().getMonth();
      setAvailableMonths(['All', ...allMonths.slice(1, currentMonth + 2)]);
    } else {
      setAvailableMonths(allMonths);
    }
  }, [year]);

  return (
    <Card elevation={0} sx={{ backgroundColor: primaryLight, py: 0 }}>
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
                <Typography variant="h5" whiteSpace="nowrap">Technical Overview:</Typography>
              </Box>

              <Stack spacing={2} direction="row" divider={<Divider orientation="vertical" flexItem />}>
                <Box>  
                  <Typography variant="h2" whiteSpace="nowrap">2,950 (MW) <span><IconArrowUpRight width={18} color="#39B69A" /></span></Typography>
                  <Typography variant="subtitle1" whiteSpace="nowrap">Energy Delivered</Typography>
                </Box>
                <Box> 
                  <Typography variant="h2" whiteSpace="nowrap">2.9 (MW) <span><IconArrowUpRight width={18} color="#39B69A" /></span></Typography>
                  <Typography variant="subtitle1" whiteSpace="nowrap">Average Load</Typography>
                </Box>
                <Box>
                  <Typography variant="h2" whiteSpace="nowrap">79<span><IconArrowDownLeft width={18} color="#b63939" /></span></Typography>
                  <Typography variant="subtitle1" whiteSpace="nowrap">Interruptions</Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>
          <Grid item sm={5}>
            <Box mb="-30px" mt="50px">
              <img src={welcomeImg} alt="Welcome Background" width={'400px'} />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TechnicalWelcomeCard;
