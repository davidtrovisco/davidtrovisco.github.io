---
layout: '@/templates/BasePost.astro'
title: IMC App - ReactNative
description: IMC App Calculator depending on height and weight using ReactNative
pubDate: 2024-03-19T00:00:00Z
imgSrc: '/assets/images/imc_appv.png'
imgAlt: 'IMC_app'
---

<h3 style="color: rgb(34, 211, 238); text-align: center;">Individual Mass Index (IMC) App - ReactNative</h3>

<table>
  <tr>
    <td><strong>IMC App - ReactNative</strong></td>
    <td style="text-align: right;"><strong>Last Update/Date</strong></td>
  </tr>
  <tr>
    <td>Presentation of the application and draft/design of the app.</td>
<td style="text-align: right;">19/03/2024</td>
  </tr>
  <tr>
    <td>Preparation dependencies, allowed libraries and Expo CLI.</td>
<td style="text-align: right;">20/03/2024</td>
  </tr>
  <tr>
    <td>Done. Components, style created and tested.</td>
<td style="text-align: right;">21/03/2024</td>
  </tr>
</table>
<h3 style="color: rgb(34, 211, 238); text-align: center;">Day 1</h3>
<h5 style="color: white; text-align: center;">19/03/2024</h4>

### Introduction
This is a simple application developed in React Native that calculates the Individual Mass Index (IMC) according to the user’s height and weight.
 
### App Mockup 
<img alt="IMC App" src="/assets/images/imc_appv.png">
As we can see in the mockup, we will only use TextInput, Text, and Button.
Very simple design, but I promise to make it more appealing! :)

<h3 style="color: rgb(34, 211, 238); text-align: center;">Day 2 & Day 3</h3>
<h5 style="color: white; text-align: center;">20/03/2024 - 21/03/2024</h4>

### App Results
I have made a very basic version of my app with the following features :
Just enter the height and weight, and the app will return the person's IMC.

First, imported the React Native dependencies. Imported the React, useState, View, Text, TextInput, Button and TouchableOpacity components from the "react-native" package. 
###
Also Import the ResultImc component from the "resultImc/resultImc" file and the stylesForm style object from the "formStyle" file. useEffect to update reset state.
###
Finally added style, text, textTitle, view, chartContainer, button, buttonText,viewCenter.
And here is the end result:
###
<img alt="App Results" src="/assets/images/app_results.jpg">


