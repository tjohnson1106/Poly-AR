import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Expo from "expo";
import ExpoTHREE, { THREE } from "expo-three";
import ExpoGraphics from "expo-graphics";

console.disableYellowBox = true;

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  onContextCreate = async ({
    gl,
    scale,
    width,
    height,
    arSession
  }) => {
    //initialize renderer
    this.renderer = ExpoTHREE.createRenderer({ gl });
    this.renderer.setPixelRatio(scale);
    this.renderer.setSize(width, height);

    //initialize scene
    this.scene = new THREE.scene();
    this.scene.background = ExpoTHREE.createARBackgroundTexture(
      arSession,
      this.renderer
    );

    //initialize camera
    this.camera = ExpoTHREE.createARCamera(
      arSession,
      width / scale,
      height / scale,
      0.01,
      1000
    );
  };

  onRender = delta => {
    this.renderer.render(this.scene, this.camera);
  };

  render() {
    return (
      <ExpoGraphics.View
        style={{ flex: 1 }}
        onContextCreate={this.onContextCreate}
        onRender={this.onRender}
        arEnabled={true}
      />
    );
  }
}
