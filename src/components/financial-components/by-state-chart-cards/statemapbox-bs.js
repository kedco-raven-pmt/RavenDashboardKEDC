import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { useTheme } from '@mui/material/styles';
import { Grid, Stack, Typography, Box } from '@mui/material';
import DashboardCard from '../../shared/DashboardCard';
import 'mapbox-gl/dist/mapbox-gl.css';

// Replace with your Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoiZHZvLXJlZ2lzIiwiYSI6ImNseXNsdzYzZTBsMTYycnM2bXY5dDh2M2sifQ.w7XKnvlxVxtWiYIFEVbz2g';

const financialData = {
  'NG018': { name: 'Jigawa', revenueRequired: 63242094983, revenueBilled: 80137421022, collections: 43042464340 },
  'NG020': { name: 'Kano', revenueRequired: 50000000000, revenueBilled: 60000000000, collections: 35000000000 },
  'NG021': { name: 'Katsina', revenueRequired: 70000000000, revenueBilled: 80000000000, collections: 45000000000 }
  // Add more states as needed
};

const StateMapboxFinancialBS = () => {
  const [selectedStateData, setSelectedStateData] = useState(null);
  const [selectedPcod, setSelectedPcod] = useState(null);
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  // Define the initial center of the map
  const longitude = 8.582; // Central longitude for Nigeria
  const latitude = 12.075;  // Central latitude for Nigeria

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'mapContainer',
      style: 'mapbox://styles/dvo-regis/clyssb5i7002301pc2fajh6kt',
      center: [longitude, latitude], // Set the initial center of the map
      zoom: 6.6 // Set the initial zoom level
    });

    map.on('load', () => {
      map.addSource('states', {
        type: 'geojson',
        data: '/assets/map-data/KEDC.geojson' // Ensure this path is correct
      });

      map.addLayer({
        id: 'states-layer',
        type: 'fill',
        source: 'states',
        paint: {
          'fill-color': '#888888',
          'fill-opacity': 0.5
        }
      });

      map.on('click', 'states-layer', (e) => {
        if (e.features.length > 0) {
          const feature = e.features[0];
          const selectedPcod = feature.properties.admin1Pcod;

          if (selectedPcod) {
            setSelectedPcod(selectedPcod);
            const data = financialData[selectedPcod] || { name: 'Unknown', revenueRequired: 0, revenueBilled: 0, collections: 0 };
            setSelectedStateData(data);

            // Reset all state colors
            map.setPaintProperty('states-layer', 'fill-color', '#888888');

            // Highlight the selected state
            map.setPaintProperty('states-layer', 'fill-color', [
              'case',
              ['==', ['get', 'admin1Pcod'], selectedPcod],
              primary, // Highlight color
              '#888888' // Default color
            ]);
          } else {
            console.error('Selected property code is undefined');
          }
        }
      });

      // Change the cursor to a pointer when the mouse is over the states layer
      map.on('mouseenter', 'states-layer', () => {
        map.getCanvas().style.cursor = 'pointer';
      });

      // Change it back to default when it leaves
      map.on('mouseleave', 'states-layer', () => {
        map.getCanvas().style.cursor = '';
      });
    });

    return () => map.remove();
  }, [theme, primary]);

  return (
    <DashboardCard title="Financial Breakdown By State" subtitle="Select a state">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <Box className="rounded-bars" bgcolor='#f7f8f9' height={500} id="mapContainer">
            {/* Map will be rendered here */}
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} alignContent='center' alignItems='flex-end'>
          <Stack spacing={3} mt={3}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box>
                <Typography variant="h4" fontWeight="700">
                  {selectedStateData ? selectedStateData.name : 'Select a state'}
                </Typography>
              </Box>
            </Stack>
            <Stack spacing={3} mt={3}>
              <Stack direction="row" spacing={2}>
                <Box>
                  <Typography variant="h5" fontWeight="700">
                    {selectedStateData ? `₦${selectedStateData.revenueRequired.toLocaleString()}` : '₦0'}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    Revenue Required
                  </Typography>
                </Box>
              </Stack>
              <Stack direction="row" spacing={2} mt={3}>
                <Box>
                  <Typography variant="h5" fontWeight="700">
                    {selectedStateData ? `₦${selectedStateData.revenueBilled.toLocaleString()}` : '₦0'}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    Revenue Billed
                  </Typography>
                </Box>
              </Stack>
              <Stack direction="row" spacing={2} mt={3} mb={9}>
                <Box>
                  <Typography variant="h5" fontWeight="700">
                    {selectedStateData ? `₦${selectedStateData.collections.toLocaleString()}` : '₦0'}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    Collections
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </DashboardCard>
  );
};

export default StateMapboxFinancialBS;
