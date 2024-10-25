import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CustomSelect from '../../forms/theme-elements/CustomSelect';
import { MenuItem } from '@mui/material';
import { SalesRepData } from './dataroom-financial-salesrep/dataroom-financial-salesrep';

const SalesRepDropdown = ({ selectedSalesRep, onSalesRepChange }) => {
  const [salesReps, setSalesReps] = useState([]);

  useEffect(() => {
    // Extract sales rep names from SalesRepData and sort them alphabetically
    const reps = Object.keys(SalesRepData) || [];
    setSalesReps(reps.sort());
  }, []);

  const handleChange = (event) => {
    const salesRep = event.target.value;
    onSalesRepChange(salesRep !== 'Sales Representative' ? salesRep : '');
  };

  return (
    <CustomSelect
      labelId="salesrep-dd"
      id="salesrep-dd"
      value={selectedSalesRep || 'Sales Representative'}
      size="small"
      onChange={handleChange}
      disabled={salesReps.length === 0}
      MenuProps={{
        PaperProps: {
          style: {
            maxHeight: 48 * 5, // Limit to show 5 items at once
          },
        },
      }}
    >
      <MenuItem value="Sales Representative">Sales Representative</MenuItem>
      {salesReps.map((rep, index) => (
        <MenuItem key={index} value={rep}>
          {rep}
        </MenuItem>
      ))}
    </CustomSelect>
  );
};

SalesRepDropdown.propTypes = {
  selectedSalesRep: PropTypes.string,
  onSalesRepChange: PropTypes.func.isRequired,
};

export default SalesRepDropdown;
