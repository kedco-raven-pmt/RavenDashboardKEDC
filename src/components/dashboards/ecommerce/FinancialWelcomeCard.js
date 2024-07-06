import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, Grid, Divider, Stack, MenuItem, FormControl, InputLabel } from '@mui/material';
import { IconArrowUpRight, IconArrowDownLeft } from '@tabler/icons';
import CustomSelect from '../../forms/theme-elements/CustomSelect';
import welcomeImg from 'src/assets/images/backgrounds/overveiw-bg.svg';
import { useTheme } from '@mui/material/styles';

const FinancialWelcomeCard = () => {
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
                <Typography variant="h5" whiteSpace="nowrap">
                  Financial Overview:
                </Typography>
              </Box>

              <Stack spacing={2} direction="row" divider={<Divider orientation="vertical" flexItem />}>
                <Box>
                  <Typography variant="h2" whiteSpace="nowrap">
                    ₦23,404,302 <span><IconArrowUpRight width={18} color="#39B69A" /></span>
                  </Typography>
                  <Typography variant="subtitle1" whiteSpace="nowrap">
                    Operating Expenditure
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h2" whiteSpace="nowrap">
                    28%<span><IconArrowDownLeft width={18} color="#b63939" /></span>
                  </Typography>
                  <Typography variant="subtitle1" whiteSpace="nowrap">
                    Profit Margin
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>
          <Grid item sm={5}>
            <Box mb="-30px" mt="50px">
              <Stack direction="row" spacing={4} sx={{ mb: 2 }}>
                <FormControl size="small" sx={{ minWidth: 200 }}>
                  <InputLabel
                    id="year-label"
                    sx={{ color: textColor }}
                  >
                    Year
                  </InputLabel>
                  <CustomSelect
                    labelId="year-label"
                    id="year-select"
                    value={year}
                    onChange={handleYearChange}
                    label="Year"
                    sx={{
                      backgroundColor: theme.palette.background.default,
                      color: textColor,
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.divider,
                      },
                    }}
                  >
                    {years.map((y) => (
                      <MenuItem
                        key={y}
                        value={y}
                        sx={{ color: textColor }}
                      >
                        {y}
                      </MenuItem>
                    ))}
                  </CustomSelect>
                </FormControl>
                <FormControl size="small" sx={{ minWidth: 200 }}>
                  <InputLabel
                    id="month-label"
                    sx={{ color: textColor }}
                  >
                    Month
                  </InputLabel>
                  <CustomSelect
                    labelId="month-label"
                    id="month-select"
                    value={month}
                    onChange={handleMonthChange}
                    label="Month"
                    sx={{
                      backgroundColor: theme.palette.background.default,
                      color: textColor,
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.divider,
                      },
                    }}
                  >
                    {availableMonths.map((m) => (
                      <MenuItem
                        key={m}
                        value={m}
                        sx={{ color: textColor }}
                      >
                        {m}
                      </MenuItem>
                    ))}
                  </CustomSelect>
                </FormControl>
              </Stack>
              <img src={welcomeImg} alt="Welcome Background" width={'400px'} />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default FinancialWelcomeCard;
