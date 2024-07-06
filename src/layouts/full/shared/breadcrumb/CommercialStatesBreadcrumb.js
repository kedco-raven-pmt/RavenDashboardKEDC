import React, { useEffect, useState } from 'react';
import { Grid, Typography, Box, Breadcrumbs, Link, MenuItem, FormControl, InputLabel, Stack, Button, useTheme } from '@mui/material';
import { NavLink } from 'react-router-dom';
import CustomSelect from '../../../../components/forms/theme-elements/CustomSelect';
import { IconCircle } from '@tabler/icons';

const CommercialStatesBreadcrumb = ({ subtitle, items, title, onFilterChange }) => {
  const [year, setYear] = useState('All');
  const [month, setMonth] = useState('All');
  const [selectedState, setSelectedState] = useState('');

  const theme = useTheme();

  const handleYearChange = (event) => {
    setYear(event.target.value);
    onFilterChange({ year: event.target.value, month, state: selectedState });
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
    onFilterChange({ year, month: event.target.value, state: selectedState });
  };

  const handleStateButtonClick = (state) => {
    const newSelectedState = selectedState === state ? '' : state;
    setSelectedState(newSelectedState);
    onFilterChange({ year, month, state: newSelectedState });
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
    <Grid
      container
      sx={{
        backgroundColor: 'primary.light',
        borderRadius: (theme) => theme.shape.borderRadius / 4,
        p: '30px 25px 20px',
        marginBottom: '30px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Grid item xs={12} mb={1}>
        <Typography variant="h4">{title}</Typography>
        <Typography color="textSecondary" variant="h6" fontWeight={400} mt={0.8} mb={0}>
          {subtitle}
        </Typography>
        <Breadcrumbs
          separator={
            <IconCircle
              size="5"
              fill="textSecondary"
              fillOpacity={'0.6'}
              style={{ margin: '0 5px' }}
            />
          }
          sx={{ alignItems: 'center', mt: items ? '10px' : '' }}
          aria-label="breadcrumb"
        >
          {items
            ? items.map((item) => (
                <div key={item.title}>
                  {item.to ? (
                    <Link underline="none" color="inherit" component={NavLink} to={item.to}>
                      {item.title}
                    </Link>
                  ) : (
                    <Typography color="textPrimary">{item.title}</Typography>
                  )}
                </div>
              ))
            : ''}
        </Breadcrumbs>
      </Grid>
      <Grid item xs={12} display="flex" justifyContent="space-between" mt={2}>
        <Stack direction="row" spacing={2}>
          <Button
            variant={selectedState === 'Kano' ? 'contained' : 'outlined'}
            onClick={() => handleStateButtonClick('Kano')}
          >
            Kano
          </Button>
          <Button
            variant={selectedState === 'Katsina' ? 'contained' : 'outlined'}
            onClick={() => handleStateButtonClick('Katsina')}
          >
            Katsina
          </Button>
          <Button
            variant={selectedState === 'Jigawa' ? 'contained' : 'outlined'}
            onClick={() => handleStateButtonClick('Jigawa')}
          >
            Jigawa
          </Button>
        </Stack>
        <Box>
          <Stack direction="row" spacing={2}>
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel
                id="year-label"
                sx={{ color: theme.palette.mode === 'dark' ? 'white' : 'black' }}
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
                  backgroundColor: theme.palette.mode === 'dark' ? '#424242' : 'white',
                  color: theme.palette.mode === 'dark' ? 'white' : 'black',
                }}
              >
                {years.map((y) => (
                  <MenuItem
                    key={y}
                    value={y}
                    sx={{ color: theme.palette.mode === 'dark' ? 'white' : 'black' }}
                  >
                    {y}
                  </MenuItem>
                ))}
              </CustomSelect>
            </FormControl>
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel
                id="month-label"
                sx={{ color: theme.palette.mode === 'dark' ? 'white' : 'black' }}
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
                  backgroundColor: theme.palette.mode === 'dark' ? '#424242' : 'white',
                  color: theme.palette.mode === 'dark' ? 'white' : 'black',
                }}
              >
                {availableMonths.map((m) => (
                  <MenuItem
                    key={m}
                    value={m}
                    sx={{ color: theme.palette.mode === 'dark' ? 'white' : 'black' }}
                  >
                    {m}
                  </MenuItem>
                ))}
              </CustomSelect>
            </FormControl>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CommercialStatesBreadcrumb;
