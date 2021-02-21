import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-ightning-rainy", 
        gradient: ["#373B44", "#4286f4"]
    }, 
    Drizzle: {
        iconName: "weather-rainy", 
        gradient: ["#74ebd5", "#ACB6E5"]
    }, 
    Rain: {
        iconName: "weather-pouring", 
        gradient: ["#0082c8", "#667db6"]
    }, 
    Snow: {
        iconName: "weather-snowy-heavy", 
        gradient: ["#E2E2E2", "#C9D6FF"]
    }, 
    Atmosphere: {
        iconName: "weather-lightning", 
        gradient: ["#a2ab58", "#636363"]
    }, 
    Clear: {
        iconName: "weather-sunny", 
        gradient: ["#F7971E", "#FFD200"], 
        title: "hoihoi", 
        subTitle: "okok"
    }, 
    Clouds: {
        iconName: "weather-cloudy", 
        gradient: ["#1c92d2", "#f2fcfe"]
    }, 
    Haze: {
        iconName: "weather-fog", 
        gradient: ["#232526", "#414345"]
    }, 
    Mist: {
        iconName: "weather-fog", 
        gradient: ["#485563", "#29323c"]
    }, 
    Smoke: {
        iconName: "weather-tornado", 
        gradient: ["#34d50", "#cbcaa5"]
    }, 
    Dust: {
        iconName: "weather-hazy", 
        gradient: ["#666600", "#999966"]
    }, 
    Fog: {
        iconName: "weather-fog", 
        gradient: ["#2c3e50", "#bdc3c7"]
    }, 
    Sand: {
        iconName: "weather-windy-variant", 
        gradient: ["#6d6027", "#d3cbb8"]
    }, 
    Ash: {
        iconName: "weather-windy-variant", 
        gradient: ["#3C3B3F", "#605C3C"]
    }, 
    Sqall: {
        iconName: "weather-windy", 
        gradient: ["#000000", "#EB5757"]
    }, 
    Tornado: {
        iconName: "weather-hurricane", 
        gradient: ["#fc4a1a", "#f7b733"]
    }
};

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white" />
                <Text style={styles.temp}>{temp}∘</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subTitle}>{weatherOptions[condition].subTitle}</Text>
            </View>
        </LinearGradient>
    )
};

Weather.propTypes = {
    temp: PropTypes.number.isRequired, 
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds", 
        "Haze", 
        "Mist", 
        "Smoke", 
        "Dust", 
        "Fog", 
        "Sand", 
        "Ash", 
        "Sqall", 
        "Tornado"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center"
    }, 
    temp: {
        fontSize: 42, 
        color: "white"
    }, 
    halfContainer: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center"
    }, 
    title: {
        color: "white", 
        fontSize: 44, 
        fontWeight: "300", 
        marginBottom: 10
    }, 
    subTitle: {
        fontWeight: "600", 
         color: "white", 
         fontSize: 24
    }, 
    textContainer: {
        paddingHorizontal: 20, 
        alignItems: "flex-start"
    }
});