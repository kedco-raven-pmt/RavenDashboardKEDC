import React, { useState } from 'react';
import { Grid, FormControl, InputLabel, MenuItem, useTheme, Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import CustomSelect from '../../../../components/mui-forms/theme-elements/CustomSelect';

const states = ['All', 'Kano', 'Katsina', 'Jigawa'];

const StateMenuFilter = ({ onFilterChange }) => {
  const [selectedState, setSelectedState] = useState('All');
  const [selectedVoltage, setSelectedVoltage] = useState('');

  const theme = useTheme();

  const handleStateChange = (event) => {
    const newState = event.target.value;
    setSelectedState(newState);
    onFilterChange({ state: newState, voltage: selectedVoltage });
  };

  const handleVoltageButtonClick = (voltage) => {
    const newSelectedVoltage = selectedVoltage === voltage ? '' : voltage;
    setSelectedVoltage(newSelectedVoltage);
    onFilterChange({ state: selectedState, voltage: newSelectedVoltage });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} mt={2} display="flex" alignItems="center">
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
              <MenuItem key={s} value={s}>
                {s}
              </MenuItem>
            ))}
          </CustomSelect>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default StateMenuFilter;
