import React from 'react';
import { styled, Select } from '@mui/material';

const CustomSelect = styled((props) => <Select  sx={{backgroundColor: "#00000000"}} {...props} />)();

export default CustomSelect;
