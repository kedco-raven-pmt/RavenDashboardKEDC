import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CustomSelect from '../../../components/forms/theme-elements/CustomSelect';
import { MenuItem } from '@mui/material';
import { FeederData } from './dataroom-financial-feeder/dataroom-financial-feeder';

const DTDropdown = ({
  selectedState,
  selectedBusinessDistrict,
  selectedFeeder,
  selectedDT,
  onDTChange,
}) => {
  const [dts, setDTs] = useState([]);

  useEffect(() => {
    if (selectedState && selectedBusinessDistrict && selectedFeeder) {
      const feederData = FeederData[selectedState]?.businessDistricts[
        selectedBusinessDistrict
      ]?.find((feeder) => feeder.name === selectedFeeder);
      if (feederData && feederData.DTs) {
        setDTs(feederData.DTs.map((dt) => dt.name));
      } else {
        setDTs([]);
      }
    } else {
      setDTs([]);
    }
  }, [selectedState, selectedBusinessDistrict, selectedFeeder]);

  const handleChange = (event) => {
    const dt = event.target.value === 'DT' ? '' : event.target.value;
    onDTChange(dt);
  };

  return (
    <CustomSelect
      labelId="dt-dd"
      id="dt-dd"
      value={selectedDT === '' ? 'DT' : selectedDT}
      size="small"
      onChange={handleChange}
      disabled={dts.length === 0}
    >
      <MenuItem value="DT">Transformer</MenuItem>
      {dts.map((dt, index) => (
        <MenuItem key={index} value={dt}>
          {dt}
        </MenuItem>
      ))}
    </CustomSelect>
  );
};

DTDropdown.propTypes = {
  selectedState: PropTypes.string,
  selectedBusinessDistrict: PropTypes.string,
  selectedFeeder: PropTypes.string,
  selectedDT: PropTypes.string,
  onDTChange: PropTypes.func.isRequired,
};

export default DTDropdown;
