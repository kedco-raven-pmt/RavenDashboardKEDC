import React from 'react';
import { Box, Avatar, Typography, IconButton, Tooltip, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import img1 from 'src/assets/images/profile/user-1.jpg';
import { IconPower } from '@tabler/icons';
import {Link} from "react-router-dom";
import logoImg from 'src/assets/images/backgrounds/emrc logo black.svg';

export const Profile = () => {
  const customizer = useSelector((state) => state.customizer);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const hideMenu = lgUp ? customizer.isCollapse && !customizer.isSidebarHover : '';
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems="center"
      gap={2}
      sx={{ m: 2, p: 2, bgcolor: '#f3f5f7' }}
    >
      {!hideMenu ? (
        <>
          <Box>
            <Typography variant="h8"  fontWeight='600' color="textPrimary" mb={2.5}>powered by</Typography>
          </Box>
          <Box>
            <img src={logoImg} alt={logoImg} width={'80px'} />
          </Box>
        </>
      ) : (
        ''
      )}
    </Box>
  );
};
