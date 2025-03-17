import { View, Text } from "react-native";
import React from "react";
import { ExpoLeaflet, MapLayer, MapMarker, MapShape } from "expo-leaflet";

const icon = `<svg stroke="currentColor" fill="red" stroke-width="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>`;

export default function MyMap() {
  const mapLayers: MapLayer[] = [
    {
      baseLayerName: "OpenStreetMap", // This will be seen in the layer selection control
      baseLayerIsChecked: true, // If the layer is selected in the layer selection control
      layerType: "TileLayer",
      baseLayer: true,
      url: `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`,
      attribution:
        "&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors",
    },
  ];

  const markers: MapMarker[] = [
    {
      id: "1", // The ID attached to the marker. It will be returned when onMarkerClicked is called
      position: {
        lat: -25.350734,
        lng: -51.478104,
      },
      // HTML element that will be displayed as the marker.  It can also be text or an SVG string.
      icon: icon,
      size: [32, 32],
    },
  ];

  const mapShapes: any[] = [
    {
      shapeType: "circle",
      id: "1",
      center: { lat: -25.350734, lng: -51.478104 },
      radius: 500,
      pathOptions: { color: "blue" },
    },
  ];

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <ExpoLeaflet
        mapLayers={mapLayers}
        mapCenterPosition={{
          lat: -25.350734,
          lng: -51.478104,
        }}
        mapMarkers={markers}
        mapShapes={mapShapes}
        onMessage={(msg) => {
          if (msg.tag === "onMapClicked") {
            console.log(msg.location.lat, msg.location.lng);
          }
        }}
        zoom={15}
      />
    </View>
  );
}
