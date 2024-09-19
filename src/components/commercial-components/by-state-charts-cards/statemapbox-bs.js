import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { useTheme } from '@mui/material/styles';
import { Grid, Box } from '@mui/material';
import DashboardCard from '../../shared/DashboardCard';
import 'mapbox-gl/dist/mapbox-gl.css';
import StateMapBoxDataCards from './statemapbox-datacards-bs';
import { CommercialDataMapbox } from './dataroom-commercial-by-state/dataroom-commercial-bs';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZHZvLXJlZ2lzIiwiYSI6ImNseXNsdzYzZTBsMTYycnM2bXY5dDh2M2sifQ.w7XKnvlxVxtWiYIFEVbz2g';

const StateMapboxCommercialBS = ({ selectedState, onStateClick }) => {
  const [selectedStateData, setSelectedStateData] = useState(null);
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
          data: '/assets/map-data/KEDC.geojson',
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
            const selectedPcod = feature.properties.admin1Pcod;
            console.log('Selected feature', feature);

            if (selectedPcod) {
              const data = CommercialDataMapbox[selectedPcod] || {
                name: 'Unknown',
                energyDelivered: [0, 0, 0, 0],
                energyBilled: [0, 0, 0, 0],
                collections: [0, 0, 0, 0],
                atcc: [0],
                billingEfficiency: [0],
                collectionEfficiency: [0],
              };
              setSelectedStateData(data);
              onStateClick(data.name);

              // Update fill color immediately
              map.setPaintProperty('states-layer', 'fill-color', [
                'case',
                ['==', ['get', 'admin1Pcod'], selectedPcod],
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
  }, [theme, primary, onStateClick]);

  useEffect(() => {
    if (!mapRef.current) return;

    console.log('Updating map layer for selectedState:', selectedState);
    const map = mapRef.current;

    const updateMapLayer = () => {
      const selectedPcod = Object.keys(CommercialDataMapbox).find(
        (key) => CommercialDataMapbox[key].name === selectedState,
      );

      if (selectedPcod) {
        console.log('Setting fill color for selectedPcod:', selectedPcod);
        map.setPaintProperty('states-layer', 'fill-color', [
          'case',
          ['==', ['get', 'admin1Pcod'], selectedPcod],
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
  }, [selectedState, primary]);

  useEffect(() => {
    console.log('Selected state changed:', selectedState);
    if (selectedState) {
      const stateData = Object.values(CommercialDataMapbox).find(
        (state) => state.name === selectedState,
      );
      setSelectedStateData(stateData);
      console.log('State data:', stateData);
    } else {
      setSelectedStateData(null);
    }
  }, [selectedState]);

  return (
    <DashboardCard title="Commercial Breakdown By State" subtitle="Select a state">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box className="rounded-bars" bgcolor="#f7f8f9" height={350} ref={mapContainerRef} />
        </Grid>
        {selectedStateData && (
          <>
            <Grid item xs={12} sm={4}>
              <StateMapBoxDataCards
                title="Energy Delivered"
                value={`${
                  selectedStateData.energyDelivered[selectedStateData.energyDelivered.length - 1]
                } GWh`}
                chartData={selectedStateData.energyDelivered}
                stateName={selectedStateData.name}
                unit="GWh"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <StateMapBoxDataCards
                title="Energy Billed"
                value={`${
                  selectedStateData.energyBilled[selectedStateData.energyBilled.length - 1]
                } GWh`}
                chartData={selectedStateData.energyBilled}
                stateName={selectedStateData.name}
                unit="GWh"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <StateMapBoxDataCards
                title="Collections"
                value={`${
                  selectedStateData.collections[selectedStateData.collections.length - 1]
                } GWh`}
                chartData={selectedStateData.collections}
                stateName={selectedStateData.name}
                unit="GWh"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <StateMapBoxDataCards
                title="ATCC"
                value={`${selectedStateData.atcc[selectedStateData.atcc.length - 1]}%`}
                chartData={selectedStateData.atcc}
                unit="%"
                stateName={selectedStateData.name}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <StateMapBoxDataCards
                title="Billing Efficiency"
                value={`${
                  selectedStateData.billingEfficiency[
                    selectedStateData.billingEfficiency.length - 1
                  ]
                }%`}
                chartData={selectedStateData.billingEfficiency}
                unit="%"
                stateName={selectedStateData.name}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <StateMapBoxDataCards
                title="Collection Efficiency"
                value={`${
                  selectedStateData.collectionEfficiency[
                    selectedStateData.collectionEfficiency.length - 1
                  ]
                }%`}
                chartData={selectedStateData.collectionEfficiency}
                stateName={selectedStateData.name}
                unit="%"
              />
            </Grid>
          </>
        )}
      </Grid>
    </DashboardCard>
  );
};

export default StateMapboxCommercialBS;
