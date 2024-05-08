import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { ExpoLeaflet, MapLayer, MapMarker } from "expo-leaflet";

// Map Layer is based on OpenStreetMap, https://www.openstreetmap.org/#map=17/-25.35051/-51.47748
const mapLayer: MapLayer = {
  baseLayerName: "OpenStreetMap",
  baseLayerIsChecked: true,
  layerType: "TileLayer",
  baseLayer: true,
  url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  attribution:
    "&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors",
};

export default function MyMap() {
  // You can define custom markers
  const markers: MapMarker[] = [
    {
      id: "1",
      position: { lat: -25.34936, lng: -51.4788 },
      icon: "<div style='color:blue'>⚑</div>", // This icon should be an HTML Element because it's rendered inside a webview!
      size: [24, 24],
    },
  ];

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <ExpoLeaflet
        mapLayers={[mapLayer]}
        mapMarkers={markers}
        mapCenterPosition={{ lat: -25.35084, lng: -51.47921 }}
        maxZoom={20}
        zoom={15}
        loadingIndicator={() => <ActivityIndicator />}
        onMessage={(message) => {
          // You can capture map interacions here
          console.log(message);
        }}
      />
    </View>
  );
}
