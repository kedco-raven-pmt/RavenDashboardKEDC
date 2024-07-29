// src/layouts/full/vertical/header/Header.jsx
import React, { useState } from 'react';
import { IconButton, Box, AppBar, useMediaQuery, Toolbar, styled, Stack, Typography, Collapse } from '@mui/material';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar, toggleMobileSidebar } from 'src/store/customizer/CustomizerSlice';
import { IconMenu2, IconChevronDown, IconChevronUp } from '@tabler/icons';
import Notifications from './Notifications';
import Profile from './Profile';
import Search from './Search';
import Navigation from './Navigation';
import MobileRightSidebar from './MobileRightSidebar';
import Client from './client-tm';
import Ribbon from './Ribbon-Filters';

const Header = ({ onFilterChange }) => {
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const lgDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  const customizer = useSelector((state) => state.customizer);
  const dispatch = useDispatch();

  const [ribbonVisible, setRibbonVisible] = useState(false);

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: theme.palette.background.paper,
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: customizer.TopbarHeight,
    },
  }));

  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.secondary,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }));

  const CollapseStyled = styled(Collapse)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  }));

  const CenterContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  }));

  const handleToggleRibbon = () => {
    setRibbonVisible(!ribbonVisible);
  };

  return (
    <>
      <AppBarStyled position="sticky" color="default">
        <ToolbarStyled>
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={lgUp ? () => dispatch(toggleSidebar()) : () => dispatch(toggleMobileSidebar())}
          >
            <IconMenu2 size="20" />
          </IconButton>

          <Search />

          <CenterContainer>
            {lgUp ? <Navigation /> : null}
            <IconButton color="inherit" onClick={handleToggleRibbon}>
              {ribbonVisible ? <IconChevronUp size={15}/> : <IconChevronDown size={15}/>}
            </IconButton>
          </CenterContainer>

          <Stack spacing={1} direction="row" alignItems="center">
            <Notifications />
            <Box>
              <Typography variant="h6" fontSize={12} color="textPrimary">R.Fortune</Typography>
              <Typography variant="caption" fontSize={10} color="textSecondary">Management</Typography>
            </Box>
            <Profile />
            <Client />
          </Stack>
        </ToolbarStyled>
      </AppBarStyled>

      <CollapseStyled sx={{position: 'sticky',
        top: '64px', // Adjust this value based on your header height
        zIndex: 1100,}}  in={ribbonVisible}>
        <Ribbon onFilterChange={onFilterChange} />
      </CollapseStyled>
    </>
  );
};

Header.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  sx: PropTypes.object,
  toggleSidebar: PropTypes.func,
};

export default Header;
