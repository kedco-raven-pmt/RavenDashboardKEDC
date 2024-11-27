import React, { useState, useEffect } from 'react';
import {
  Grid,
  Typography,
  Box,
  Breadcrumbs,
  Link,
  MenuItem,
  FormControl,
  InputLabel,
  Stack,
  Button,
  useTheme,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import CustomSelect from '../../../../components/mui-forms/theme-elements/CustomSelect';
import { IconCircle } from '@tabler/icons';

const businessDistricts = [
  'Kano Industrial',
  'Kano Central',
  'Katsina North',
  'Kano North',
  'Kano East',
  'Kano West',
  'Katsina South',
  'Jigawa South',
  'Jigawa North',
  'Katsina Central',
];

const CommercialBusinessDistrictBreadcrumb = ({ subtitle, items, title, onFilterChange }) => {
  const [year, setYear] = useState('All');
  const [month, setMonth] = useState('All');
  const [selectedDistrict, setSelectedDistrict] = useState('');

  const theme = useTheme();

  const handleYearChange = (event) => {
    const newYear = event.target.value;
    setYear(newYear);
    onFilterChange({ year: newYear, month, district: selectedDistrict });
  };

  const handleMonthChange = (event) => {
    const newMonth = event.target.value;
    setMonth(newMonth);
    onFilterChange({ year, month: newMonth, district: selectedDistrict });
  };

  const handleDistrictButtonClick = (district) => {
    const newSelectedDistrict = selectedDistrict === district ? '' : district;
    setSelectedDistrict(newSelectedDistrict);
    onFilterChange({ year, month, district: newSelectedDistrict });
  };

  const years = ['All', '2023', '2024'];
  const allMonths = [
    'All',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  useEffect(() => {
    if (year === '2024') {
      const currentMonth = new Date().getMonth();
      setMonth('All');
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
      <Grid item xs={12} display="flex" justifyContent="space-between" mt={2}>
        <Box display="flex" flexWrap="wrap" justifyContent="flex-start" sx={{ maxWidth: '600px' }}>
          {businessDistricts.map((district) => (
            <Button
              key={district}
              variant={selectedDistrict === district ? 'contained' : 'outlined'}
              onClick={() => handleDistrictButtonClick(district)}
              sx={{
                m: 0.5,
                flexBasis: 'calc(20% - 8px)',
                padding: '4px 8px',
                fontSize: '0.75rem',
              }}
            >
              {district}
            </Button>
          ))}
        </Box>
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
                  backgroundColor:
                    theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'white',
                  color: theme.palette.mode === 'dark' ? 'white' : 'black',
                  '& .MuiSelect-icon': {
                    color: theme.palette.mode === 'dark' ? 'white' : 'inherit',
                  },
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
                  backgroundColor:
                    theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'white',
                  color: theme.palette.mode === 'dark' ? 'white' : 'black',
                  '& .MuiSelect-icon': {
                    color: theme.palette.mode === 'dark' ? 'white' : 'inherit',
                  },
                }}
              >
                {allMonths.map((m) => (
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

export default CommercialBusinessDistrictBreadcrumb;
