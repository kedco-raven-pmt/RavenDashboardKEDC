import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { useTheme } from '@mui/material/styles';
import { Grid, Box } from '@mui/material';
import DashboardCard from '../../shared/DashboardCard';
import 'mapbox-gl/dist/mapbox-gl.css';
import StateMapBoxDataCards from './statemapbox-datacards-bbd';
import {
  TechnicalDataMapbox,
  TechnicalDataBusinessDistrict,
} from './dataroom-tech-by-bd/dataroom-tech-bbd';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZHZvLXJlZ2lzIiwiYSI6ImNseXNsdzYzZTBsMTYycnM2bXY5dDh2M2sifQ.w7XKnvlxVxtWiYIFEVbz2g';

const StateMapboxTechnicalBBD = ({ selectedBusinessDistrict, onBusinessDistrictClick }) => {
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
        zoom: 6.6,
      });

      mapRef.current = map;

      mapRef.current.scrollZoom.disable();
      map.touchZoomRotate.enable();
      map.touchZoomRotate.enableRotation();
      map.dragRotate.enable();
      map.boxZoom.enable();
      map.keyboard.enable();

      map.on('load', () => {
        console.log('Map loaded');
        map.addSource('states', {
          type: 'geojson',
          data: '/assets/map-data/KEDCBUSINESSDISTRICTS.geojson',
        });

        map.addLayer({
          id: 'states-layer',
          type: 'fill',
          source: 'states',
          paint: {
            'fill-color': '#888888',
            'fill-opacity': 0.5,
          },
        });

        map.on('click', 'states-layer', (e) => {
          console.log('Map clicked', e);
          if (e.features.length > 0) {
            const feature = e.features[0];
            const selectedPcod = feature.properties.BusinessDistrict1Pcod;
            console.log('Selected feature', feature);

            if (selectedPcod) {
              const data = TechnicalDataBusinessDistrict[selectedPcod] || {
                name: 'Unknown',
                metrics: {},
              };
              setSelectedDistrictData(data);
              onBusinessDistrictClick(data.name);

              // Update fill color immediately
              map.setPaintProperty('states-layer', 'fill-color', [
                'case',
                ['==', ['get', 'BusinessDistrict1Pcod'], selectedPcod],
                primary,
                '#888888',
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
      const selectedPcod = Object.keys(TechnicalDataBusinessDistrict).find(
        (key) => TechnicalDataBusinessDistrict[key].name === selectedBusinessDistrict,
      );

      if (selectedPcod) {
        console.log('Setting fill color for selectedPcod:', selectedPcod);
        map.setPaintProperty('states-layer', 'fill-color', [
          'case',
          ['==', ['get', 'BusinessDistrict1Pcod'], selectedPcod],
          primary,
          '#888888',
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
      const districtData = Object.values(TechnicalDataBusinessDistrict).find(
        (district) => district.name === selectedBusinessDistrict,
      );
      setSelectedDistrictData(districtData);
      console.log('District data:', districtData);
    } else {
      setSelectedDistrictData(null);
    }
  }, [selectedBusinessDistrict]);

  return (
    <DashboardCard
      title="Technical Performance By Business District"
      subtitle="Select a business district"
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box className="rounded-bars" bgcolor="#f7f8f9" height={350} ref={mapContainerRef} />
        </Grid>
        {selectedDistrictData && (
          <>
            <Grid item xs={12} sm={4}>
              <StateMapBoxDataCards
                title="Average Supply Hours"
                value={`${selectedDistrictData.metrics.avgSupplyHours[
                  selectedDistrictData.metrics.avgSupplyHours.length - 1
                ].toFixed(2)} Hrs`}
                chartData={selectedDistrictData.metrics.avgSupplyHours}
                stateName={selectedDistrictData.name}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <StateMapBoxDataCards
                title="Interruption Duration"
                value={`${selectedDistrictData.metrics.durationInterruptions[
                  selectedDistrictData.metrics.durationInterruptions.length - 1
                ].toFixed(2)} Hrs`}
                chartData={selectedDistrictData.metrics.durationInterruptions}
                stateName={selectedDistrictData.name}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <StateMapBoxDataCards
                title="Turnaround Time"
                value={`${selectedDistrictData.metrics.turnaroundTime[
                  selectedDistrictData.metrics.turnaroundTime.length - 1
                ].toFixed(2)} Hrs`}
                chartData={selectedDistrictData.metrics.turnaroundTime}
                stateName={selectedDistrictData.name}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <StateMapBoxDataCards
                title="Daily Interruptions"
                value={`${
                  selectedDistrictData.metrics.dailyInterruptions[
                    selectedDistrictData.metrics.dailyInterruptions.length - 1
                  ]
                } Times`}
                chartData={selectedDistrictData.metrics.dailyInterruptions}
                stateName={selectedDistrictData.name}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <StateMapBoxDataCards
                title="Faults"
                value={`${selectedDistrictData.metrics.faults[
                  selectedDistrictData.metrics.faults.length - 1
                ].toLocaleString()}`}
                chartData={selectedDistrictData.metrics.faults}
                stateName={selectedDistrictData.name}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <StateMapBoxDataCards
                title="Feeders"
                value={`${
                  selectedDistrictData.metrics.feeders[
                    selectedDistrictData.metrics.feeders.length - 1
                  ]
                }`}
                chartData={selectedDistrictData.metrics.feeders}
                stateName={selectedDistrictData.name}
              />
            </Grid>
          </>
        )}
      </Grid>
    </DashboardCard>
  );
};

export default StateMapboxTechnicalBBD;
