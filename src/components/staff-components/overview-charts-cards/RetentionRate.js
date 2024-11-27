import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

import DashboardCard from '../../shared/DashboardCard';
import { IconArrowUpRight, IconRecycle } from '@tabler/icons';

const RetentionRate = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <DashboardCard>
      <>
        <Box
          width={38}
          height={38}
          bgcolor="primary.light"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            color="primary.main"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <IconRecycle width={22} />
          </Typography>
        </Box>

        <Typography variant="h4">94%<span><IconArrowUpRight width={18} color="#39B69A" /></span></Typography>
        <Typography variant="subtitle2" color="textSecondary">
          Retention Rate
        </Typography>
      </>
    </DashboardCard>
  );
};

export default RetentionRate;
