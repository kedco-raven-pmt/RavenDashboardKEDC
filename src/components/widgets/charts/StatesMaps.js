import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, CardContent, Grid, Typography, Stack } from '@mui/material';
import BlankCard from '../../shared/BlankCard';
import { MapContainer, TileLayer, Polygon, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const kanoCoordinates = [
  [12.002179, 8.591956],
  [11.999444, 8.579444],
  [11.993333, 8.572778],
  [12.004722, 8.578611],
  [12.010000, 8.590000],
  [12.020000, 8.601667],
  [12.022222, 8.611111],
];
const katsinaCoordinates = [
  [12.971390, 7.597780],
  [12.960556, 7.588611],
  [12.950000, 7.580278],
  [12.970000, 7.590000],
  [12.980000, 7.600000],
  [12.990000, 7.610000],
  [13.000000, 7.620000],
];
const jigawaCoordinates = [
  [12.568400, 9.857800],
  [12.558889, 9.848333],
  [12.550000, 9.839167],
  [12.570000, 9.850000],
  [12.580000, 9.860000],
  [12.590000, 9.870000],
  [12.600000, 9.880000],
];

const statesData = {
  Kano: { coordinates: kanoCoordinates, value: 1273, center: [12.002179, 8.591956] },
  Katsina: { coordinates: katsinaCoordinates, value: 375, center: [12.971390, 7.597780] },
  Jigawa: { coordinates: jigawaCoordinates, value: 124, center: [12.568400, 9.857800] },
};

const StatesMaps = ({ filters }) => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  const MapController = () => {
    const map = useMap();
    if (filters.state && statesData[filters.state]) {
      map.setView(statesData[filters.state].center, 10);
    } else {
      map.setView([12.5, 8], 7);
    }
    return null;
  };

  return (
    <BlankCard>
      <CardContent sx={{ p: '30px' }}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Typography variant="h5">State Maps</Typography>
          {/* No need for state buttons here, use filters.state */}
        </Stack>

        <Grid container spacing={3} mt={2}>
          <Grid item xs={12}>
            <MapContainer center={[12.5, 8]} zoom={7} style={{ height: '300px', width: '100%' }}>
              <MapController />
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {filters.state === 'Kano' && (
                <>
                  <Polygon positions={statesData.Kano.coordinates} color={primary}>
                    <Popup>Kano: Energy Delivered = 1273</Popup>
                  </Polygon>
                  <Marker position={statesData.Kano.center}>
                    <Popup>Kano: Energy Delivered = 1273</Popup>
                  </Marker>
                </>
              )}
              {filters.state === 'Katsina' && (
                <>
                  <Polygon positions={statesData.Katsina.coordinates} color={secondary}>
                    <Popup>Katsina: Energy Delivered = 375</Popup>
                  </Polygon>
                  <Marker position={statesData.Katsina.center}>
                    <Popup>Katsina: Energy Delivered = 375</Popup>
                  </Marker>
                </>
              )}
              {filters.state === 'Jigawa' && (
                <>
                  <Polygon positions={statesData.Jigawa.coordinates} color="red">
                    <Popup>Jigawa: Energy Delivered = 124</Popup>
                  </Polygon>
                  <Marker position={statesData.Jigawa.center}>
                    <Popup>Jigawa: Energy Delivered = 124</Popup>
                  </Marker>
                </>
              )}
            </MapContainer>
          </Grid>
        </Grid>
      </CardContent>
    </BlankCard>
  );
};

export default StatesMaps;

