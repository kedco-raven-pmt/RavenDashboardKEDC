// src/layouts/full/vertical/header/Ribbon.jsx
import React from 'react';
import { Box, MenuItem, Grid, Stack, Typography, IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import CustomSelect from '../../../../components/mui-forms/theme-elements/CustomSelect';
import CustomTextField from '../../../../components/mui-forms/theme-elements/CustomTextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { IconFilter, IconPrinter, IconReload } from '@tabler/icons';

const Ribbon = ({ onFilterChange }) => {
  const [month, setMonth] = React.useState('0');
  const [year, setYear] = React.useState('0');
  const [week, setWeek] = React.useState('0');
  const [value, setValue] = React.useState(new Date());

  const handleDateChange = (newValue) => {
    setValue(newValue);
    onFilterChange('date', newValue);
  };

  const handleWeekChange = (event) => {
    setWeek(event.target.value);
    onFilterChange('week', event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
    onFilterChange('month', event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
    onFilterChange('year', event.target.value);
  };

  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: '#f7fafc',
        display: 'flex',
        justifyContent: 'center',
        position: 'sticky',
        top: '64px', // Adjust this value based on your header height
        zIndex: 1100,
        width: '100%',
        borderRadius: 0,
        marginBottom: 1,
      }}
    >
      <Stack spacing={1} direction="row" alignItems="center">
        <IconButton>
          <IconFilter />
        </IconButton>
        <Typography variant="h6" fontSize={14} color="#7b7f95">
          Filter:
        </Typography>

        <Grid item xs={2}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              renderInput={(props) => (
                <CustomTextField
                  {...props}
                  fullWidth
                  size="small"
                  sx={{
                    '& .MuiSvgIcon-root': {
                      width: '18px',
                      height: '18px',
                    },
                    '& .MuiFormHelperText-root': {
                      display: 'none',
                    },
                  }}
                />
              )}
              value={value}
              onChange={handleDateChange}
            />
          </LocalizationProvider>
        </Grid>

        <CustomSelect
          labelId="week-dd"
          id="week-dd"
          value={week}
          size="small"
          onChange={handleWeekChange}
        >
          <MenuItem value={0}>Week</MenuItem>
          <MenuItem value={21}>Week 1</MenuItem>
          <MenuItem value={22}>Week 2</MenuItem>
          <MenuItem value={23}>Week 3</MenuItem>
          <MenuItem value={23}>Week 4</MenuItem>
        </CustomSelect>

        <CustomSelect
          labelId="month-dd"
          id="month-dd"
          value={month}
          size="small"
          onChange={handleMonthChange}
        >
          <MenuItem value={0}>Month</MenuItem>
          <MenuItem value={1}>January</MenuItem>
          <MenuItem value={2}>February</MenuItem>
          <MenuItem value={3}>March</MenuItem>
          <MenuItem value={4}>April</MenuItem>
          <MenuItem value={5}>May</MenuItem>
          <MenuItem value={6}>June</MenuItem>
          <MenuItem value={7}>July</MenuItem>
          <MenuItem value={8}>August</MenuItem>
          <MenuItem value={9}>September</MenuItem>
          <MenuItem value={10}>October</MenuItem>
          <MenuItem value={11}>November</MenuItem>
          <MenuItem value={12}>December</MenuItem>
        </CustomSelect>

        <CustomSelect
          labelId="year-dd"
          id="year-dd"
          value={year}
          size="small"
          onChange={handleYearChange}
        >
          <MenuItem value={0}>Year</MenuItem>
          <MenuItem value={1}>2024</MenuItem>
          <MenuItem value={2}>2023</MenuItem>
          <MenuItem value={3}>2022</MenuItem>
        </CustomSelect>

        <IconButton>
          <IconReload size={20} />
        </IconButton>

        <IconButton>
          <IconPrinter size={20} />
        </IconButton>
      </Stack>
    </Box>
  );
};

Ribbon.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Ribbon;
