import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, CardContent, Grid, Typography, Stack, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import BlankCard from '../../shared/BlankCard';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Define the coordinates for the business districts and their energy delivered values
const businessDistricts = {
  'Kano Industrial': { coordinates: [11.9716, 8.5204], value: 411 },
  'Kano Central': { coordinates: [12.0022, 8.5919], value: 329 },
  'Katsina North': { coordinates: [13.0170, 7.6734], value: 230 },
  'Kano North': { coordinates: [12.1822, 8.5166], value: 205 },
  'Kano East': { coordinates: [12.1505, 8.8786], value: 199 },
  'Kano West': { coordinates: [12.0352, 8.4262], value: 129 },
  'Katsina South': { coordinates: [12.8432, 7.6710], value: 80 },
  'Jigawa South': { coordinates: [11.7200, 9.6100], value: 64 },
  'Jigawa North': { coordinates: [12.8760, 9.6181], value: 60 }
};

const BusinessDistrictMap = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const tertiary = theme.palette.tertiary ? theme.palette.tertiary.main : 'blue';
  const [selectedDistrict, setSelectedDistrict] = useState('All');

  const MapController = () => {
    const map = useMap();
    if (selectedDistrict !== 'All') {
      const district = businessDistricts[selectedDistrict];
      map.setView(district.coordinates, 10);
    } else {
      map.setView([12.5, 8], 7);
    }
    return null;
  };

  return (
    <BlankCard>
      <CardContent sx={{ p: '30px' }}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Typography variant="h5">Business District Map</Typography>
          <FormControl variant="outlined">
            <InputLabel>Business District</InputLabel>
            <Select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              label="Business District"
            >
              <MenuItem value="All">All</MenuItem>
              {Object.keys(businessDistricts).map((district) => (
                <MenuItem key={district} value={district}>
                  {district}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>

        <Grid container spacing={3} mt={2}>
          <Grid item xs={12}>
            <MapContainer center={[12.5, 8]} zoom={7} style={{ height: '550px', width: '100%' }}>
              <MapController />
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {Object.entries(businessDistricts).map(([name, data]) => (
                <Marker key={name} position={data.coordinates}>
                  <Popup>
                    {name}: Energy Delivered = {data.value} GWh
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </Grid>
        </Grid>
      </CardContent>
    </BlankCard>
  );
};

export default BusinessDistrictMap;
