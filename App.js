import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "e594ac0accf5b11590a2d5c67e3e255f";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  geWeather = async(latitude, longitude) => {
    const { data: {main :{temp}, weather} } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
    this.setState({ isLoading: false, condition: weather[0].main, temp });
  };
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      this.geWeather(latitude, longitude);
    } catch(error) {
      Alert.alert("Can't find you", "So sad :(");
    }
  };
  componentDidMount() {
    this.getLocation();
  };
  render() {
    const { isLoading, condition, temp } = this.state;
    console.log(condition);
    return isLoading ? <Loading /> : <Weather condition={condition} temp={Math.round(temp)} />;
  };
}