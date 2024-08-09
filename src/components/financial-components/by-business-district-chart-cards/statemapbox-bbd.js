import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { useTheme } from '@mui/material/styles';
import { Grid, Box } from '@mui/material';
import DashboardCard from '../../shared/DashboardCard';
import 'mapbox-gl/dist/mapbox-gl.css';
import StateMapBoxDataCards from './statemapbox-datacards-bbd';
import { FinancialDataMapbox, FinancialDataBusinessDistrict } from "./dataroom-financial-by-bd/dataroom-financial-bbd";

mapboxgl.accessToken = 'pk.eyJ1IjoiZHZvLXJlZ2lzIiwiYSI6ImNseXNsdzYzZTBsMTYycnM2bXY5dDh2M2sifQ.w7XKnvlxVxtWiYIFEVbz2g';

const StateMapboxFinancialBBD = ({ selectedBusinessDistrict, onBusinessDistrictClick }) => {
  const [selectedDistrictData, setSelectedDistrictData] = useState(null);
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  const longitude = 8.582;
  const latitude = 12.075;

  useEffect(() => {
    if (!mapRef.current) {
      console.log('Initializing map...');
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/dvo-regis/clyssb5i7002301pc2fajh6kt',
        center: [longitude, latitude],
        zoom: 6.6
      });

      mapRef.current = map;

      map.on('load', () => {
        console.log('Map loaded');
        map.addSource('states', {
          type: 'geojson',
          data: '/assets/map-data/KEDCBUSINESSDISTRICTS.geojson'
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
          console.log('Map clicked', e);
          if (e.features.length > 0) {
            const feature = e.features[0];
            const selectedPcod = feature.properties.BusinessDistrict1Pcod;
            console.log('Selected feature', feature);

            if (selectedPcod) {
              const data = FinancialDataBusinessDistrict[selectedPcod] || { name: 'Unknown', revenueRequired: [0, 0, 0, 0], revenueBilled: [0, 0, 0, 0], collections: [0, 0, 0, 0] };
              setSelectedDistrictData(data);
              onBusinessDistrictClick(data.name);

              // Update fill color immediately
              map.setPaintProperty('states-layer', 'fill-color', [
                'case',
                ['==', ['get', 'BusinessDistrict1Pcod'], selectedPcod],
                primary,
                '#888888'
              ]);
            } else {
              console.error('Selected property code is undefined');
            }
          }
        });

        map.on('mouseenter', 'states-layer', () => {
          map.getCanvas().style.cursor = 'pointer';
        });

        map.on('mouseleave', 'states-layer', () => {
          map.getCanvas().style.cursor = '';
        });
      });
    }

    return () => {
      console.log('Cleaning up map initialization effect');
    };
  }, [theme, primary, onBusinessDistrictClick]);

  useEffect(() => {
    if (!mapRef.current) return;

    console.log('Updating map layer for selectedBusinessDistrict:', selectedBusinessDistrict);
    const map = mapRef.current;

    const updateMapLayer = () => {
      const selectedPcod = Object.keys(FinancialDataBusinessDistrict).find(key => FinancialDataBusinessDistrict[key].name === selectedBusinessDistrict);

      if (selectedPcod) {
        console.log('Setting fill color for selectedPcod:', selectedPcod);
        map.setPaintProperty('states-layer', 'fill-color', [
          'case',
          ['==', ['get', 'BusinessDistrict1Pcod'], selectedPcod],
          primary,
          '#888888'
        ]);
      } else {
        console.log('Resetting fill color');
        map.setPaintProperty('states-layer', 'fill-color', '#888888');
      }
    };

    if (map.isStyleLoaded()) {
      updateMapLayer();
    } else {
      map.once('styledata', updateMapLayer);
    }
  }, [selectedBusinessDistrict, primary]);

  useEffect(() => {
    console.log('Selected business district changed:', selectedBusinessDistrict);
    if (selectedBusinessDistrict) {
      const districtData = Object.values(FinancialDataBusinessDistrict).find(district => district.name === selectedBusinessDistrict);
      setSelectedDistrictData(districtData);
      console.log('District data:', districtData);
    } else {
      setSelectedDistrictData(null);
    }
  }, [selectedBusinessDistrict]);

  return (
    <DashboardCard title="Financial Breakdown By Business District" subtitle="Select a business district">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box className="rounded-bars" bgcolor='#f7f8f9' height={350} ref={mapContainerRef} />
        </Grid>
        {selectedDistrictData && (
          <>
            <Grid item xs={12} sm={4}>
              <StateMapBoxDataCards
                title="Total Cost"
                value={`₦${selectedDistrictData.revenueRequired[selectedDistrictData.revenueRequired.length - 1].toLocaleString()}`}
                chartData={selectedDistrictData.revenueRequired}
                stateName={selectedDistrictData.name}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <StateMapBoxDataCards
                title="Revenue Billed"
                value={`₦${selectedDistrictData.revenueBilled[selectedDistrictData.revenueBilled.length - 1].toLocaleString()}`}
                chartData={selectedDistrictData.revenueBilled}
                stateName={selectedDistrictData.name}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <StateMapBoxDataCards
                title="Collections"
                value={`₦${selectedDistrictData.collections[selectedDistrictData.collections.length - 1].toLocaleString()}`}
                chartData={selectedDistrictData.collections}
                stateName={selectedDistrictData.name}
              />
            </Grid>
          </>
        )}
      </Grid>
    </DashboardCard>
  );
};

export default StateMapboxFinancialBBD;
