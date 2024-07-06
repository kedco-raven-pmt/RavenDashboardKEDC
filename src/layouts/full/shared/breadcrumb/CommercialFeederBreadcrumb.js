import React, { useState } from 'react';
import { Grid, Typography, Box, Breadcrumbs, Link, MenuItem, FormControl, InputLabel, Stack, Button, useTheme } from '@mui/material';
import { NavLink } from 'react-router-dom';
import CustomSelect from '../../../../components/forms/theme-elements/CustomSelect';
import { IconCircle } from '@tabler/icons';

const businessDistricts = [
  'Kano Industrial', 'Kano Central', 'Katsina North', 'Kano North', 'Kano East',
  'Kano West', 'Katsina South', 'Jigawa South', 'Jigawa North', 'Katsina Central'
];

const CommercialFeederBreadcrumb = ({ subtitle, items, title, onFilterChange }) => {
  const [year, setYear] = useState('All');
  const [month, setMonth] = useState('All');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedState, setSelectedState] = useState('All');
  const [selectedVoltage, setSelectedVoltage] = useState('');

  const theme = useTheme();

  const handleYearChange = (event) => {
    const selectedYear = event.target.value;
    const currentMonthIndex = selectedYear === '2024' ? new Date().getMonth() + 1 : 12; // Get current month index if year is 2024
    setYear(selectedYear);
    setMonth('All'); // Reset month when year changes
    onFilterChange({ year: selectedYear, month: 'All', district: selectedDistrict, state: selectedState, voltage: selectedVoltage });
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
    onFilterChange({ year, month: event.target.value, district: selectedDistrict, state: selectedState, voltage: selectedVoltage });
  };

  const handleDistrictButtonClick = (district) => {
    const newSelectedDistrict = selectedDistrict === district ? '' : district;
    setSelectedDistrict(newSelectedDistrict);
    onFilterChange({ year, month, district: newSelectedDistrict, state: selectedState, voltage: selectedVoltage });
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    onFilterChange({ year, month, district: selectedDistrict, state: event.target.value, voltage: selectedVoltage });
  };

  const handleVoltageButtonClick = (voltage) => {
    const newSelectedVoltage = selectedVoltage === voltage ? '' : voltage;
    setSelectedVoltage(newSelectedVoltage);
    onFilterChange({ year, month, district: selectedDistrict, state: selectedState, voltage: newSelectedVoltage });
  };

  
  const currentYear = new Date().getFullYear();
  const currentMonthIndex = year === '2024' ? new Date().getMonth() + 1 : 12;
  const months = [
    'All', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ].slice(0, currentMonthIndex + 1);

  const years = ['All', '2023', '2024'];
  const states = ['All', 'Kano', 'Katsina', 'Jigawa'];

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
      <Grid item xs={12} sm={6} lg={8} mb={1}>
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
      <Grid item xs={12} sm={6} lg={4} display="flex" alignItems="center" justifyContent="flex-end">
        <Box display="flex" alignItems="center">
          <FormControl size="small" sx={{ minWidth: 120, mr: 1 }}>
            <InputLabel id="year-label">Year</InputLabel>
            <CustomSelect
              labelId="year-label"
              id="year-select"
              value={year}
              onChange={handleYearChange}
              label="Year"
              sx={{
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'white',
                color: theme.palette.mode === 'dark' ? 'white' : 'black',
                '& .MuiSelect-icon': { color: theme.palette.mode === 'dark' ? 'white' : 'inherit' },
              }}
            >
              {years.map((y) => (
                <MenuItem key={y} value={y}>{y}</MenuItem>
              ))}
            </CustomSelect>
          </FormControl>
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel id="month-label">Month</InputLabel>
            <CustomSelect
              labelId="month-label"
              id="month-select"
              value={month}
              onChange={handleMonthChange}
              label="Month"
              sx={{
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'white',
                color: theme.palette.mode === 'dark' ? 'white' : 'black',
                '& .MuiSelect-icon': { color: theme.palette.mode === 'dark' ? 'white' : 'inherit' },
              }}
            >
              {months.map((m) => (
                <MenuItem key={m} value={m}>{m}</MenuItem>
              ))}
            </CustomSelect>
          </FormControl>
        </Box>
      </Grid>
      <Grid item xs={12} mt={2} display="flex" flexDirection="column">
        <Box display="flex" flexWrap="wrap" justifyContent="flex-start" sx={{ maxWidth: '100%' }}>
          {businessDistricts.map((district) => (
            <Button
              key={district}
              variant={selectedDistrict === district ? 'contained' : 'outlined'}
              onClick={() => handleDistrictButtonClick(district)}
              sx={{ 
                m: 0.5, 
                minWidth: 120, // Adjusted width
                padding: '4px 8px', 
                fontSize: '0.75rem', 
                textAlign: 'left', // Align text to left
              }}
            >
              {district}
            </Button>
          ))}
        </Box>
        <Box mt={2} display="flex" alignItems="center">
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel id="state-label">State</InputLabel>
            <CustomSelect
              labelId="state-label"
              id="state-select"
              value={selectedState}
              onChange={handleStateChange}
              label="State"
              sx={{
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'white',
                color: theme.palette.mode === 'dark' ? 'white' : 'black',
                '& .MuiSelect-icon': { color: theme.palette.mode === 'dark' ? 'white' : 'inherit' },
              }}
            >
              {states.map((s) => (
                <MenuItem key={s} value={s}>{s}</MenuItem>
              ))}
            </CustomSelect>
          </FormControl>
          <Box ml={2}>
            <Button
              variant={selectedVoltage === '11' ? 'contained' : 'outlined'}
              onClick={() => handleVoltageButtonClick('11')}
              sx={{ mr: 1 }}
            >
              11
            </Button>
            <Button
              variant={selectedVoltage === '33' ? 'contained' : 'outlined'}
              onClick={() => handleVoltageButtonClick('33')}
            >
              33
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CommercialFeederBreadcrumb;
