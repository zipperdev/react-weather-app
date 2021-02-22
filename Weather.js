import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-ightning-rainy", 
        gradient: ["#373B44", "#4286f4"], 
        title: "Thunderstorm", 
        subTitle: "Becareful cause Thounderstorm is here"
    }, 
    Drizzle: {
        iconName: "weather-rainy", 
        gradient: ["#74ebd5", "#ACB6E5"], 
        title: "Drizzle", 
        subTitle: "Drizzle is on here"
    }, 
    Rain: {
        iconName: "weather-pouring", 
        gradient: ["#0082c8", "#667db6"], 
        title: "Rainy", 
        subTitle: "It's rainy outside"
    }, 
    Snow: {
        iconName: "weather-snowy-heavy", 
        gradient: ["#E2E2E2", "#C9D6FF"], 
        title: "Snowy", 
        subTitle: "It's cool"
    }, 
    Atmosphere: {
        iconName: "weather-lightning", 
        gradient: ["#a2ab58", "#636363"], 
        title: "Atmosphere", 
        subTitle: "Someones house will be burnt down"
    }, 
    Clear: {
        iconName: "weather-sunny", 
        gradient: ["#F7971E", "#FFD200"], 
        title: "Clear", 
        subTitle: "You can go outside if microdust is low"
    }, 
    Clouds: {
        iconName: "weather-cloudy", 
        gradient: ["#1c92d2", "#f2fcfe"], 
        title: "Cloudy", 
        subTitle: "It might rain I think about"
    }, 
    Haze: {
        iconName: "weather-fog", 
        gradient: ["#232526", "#414345"], 
        title: "Hazy", 
        subTitle: "Little bit hazy"
    }, 
    Mist: {
        iconName: "weather-fog", 
        gradient: ["#485563", "#29323c"], 
        title: "Mist", 
        subTitle: "Care your lung"
    }, 
    Smoke: {
        iconName: "weather-tornado", 
        gradient: ["#34d50", "#cbcaa5"], 
        title: "Smoke", 
        subTitle: "Care your lung more becareful"
    }, 
    Dust: {
        iconName: "weather-hazy", 
        gradient: ["#666600", "#999966"], 
        title: "Dusty", 
        subTitle: "Sorry you can't go outside"
    }, 
    Fog: {
        iconName: "weather-fog", 
        gradient: ["#2c3e50", "#bdc3c7"], 
        title: "Foggy", 
        subTitle: "Little blindness"
    }, 
    Sand: {
        iconName: "weather-windy-variant", 
        gradient: ["#6d6027", "#d3cbb8"], 
        title: "Sand", 
        subTitle: "Keep you eyes don't hurt"
    }, 
    Ash: {
        iconName: "weather-windy-variant", 
        gradient: ["#3C3B3F", "#605C3C"], 
        title: "Ash", 
        subTitle: "-CAREFUL- Spoon of ash here"
    }, 
    Sqall: {
        iconName: "weather-windy", 
        gradient: ["#000000", "#EB5757"], 
        title: "Sqall", 
        subTitle: "It's Dusty so keep you body in the house"
    }, 
    Tornado: {
        iconName: "weather-hurricane", 
        gradient: ["#fc4a1a", "#f7b733"], 
        title: "Tornado", 
        subTitle: "-WARNING- Tornado is here"
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