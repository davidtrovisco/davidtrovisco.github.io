---
layout: '@/templates/BasePost.astro'
title: Shopping list App - HTML, CSS and JavaScript + Firebase
description: Never forget what you need to buy again. Share your list with friends and family."WebApp"
pubDate: 2024-03-25T00:00:00Z
imgSrc: '/assets/images/shopping_list.png'
imgAlt: 'Shopping List App'
---
![Visitor Count](https://visitor-badge.laobi.icu/badge?page_id=davidtrovisco.shoopinglistapp)

<h3 style="color: rgb(34, 211, 238); text-align: center;">Shopping List App - HTML, CSS and JavaScript + Firebase</h3>
<table>
  <tr>
    <td><strong>Shopping List "WebApp"</strong></td>
    <td style="text-align: right;"><strong>Last Update/Date</strong></td>
  </tr>
  <tr>
    <td>Setting up app skeleton.</td>
<td style="text-align: right;">26/03/2024</td>
  </tr>
  <tr>
    <td>Adding CSS and JavaScript.</td>
<td style="text-align: right;">27/03/2024</td>
  </tr>
  <tr>
    <td>Aside: Firebase Realtime Database.</td>
<td style="text-align: right;">27/03/2024</td>
  </tr>
  <tr>
    <td>Aside: Fetching database items in realtime using onValue.</td>
<td style="text-align: right;">27/03/2024</td>
  </tr>
  <td>Updating items in realtime.</td>
<td style="text-align: right;">27/03/2024</td>
  </tr>
  <td>For loop to render database items.</td>
<td style="text-align: right;">27/03/2024</td>
  </tr>
  <td>Deploy to Netlify.</td>
<td style="text-align: right;">27/03/2024</td>
  </tr>
</table>

<table>
  <tr>
    <td>
      <a href="https://github.com/davidtrovisco/shopping-list" style="background-color: #D1FAE5; color: #047857; font-size: 0.75rem; font-weight: 500; margin-right: 0.5rem; padding: 0.125rem 0.625rem; border: 1px solid #047857; border-radius: 0.375rem; text-decoration: none;">Git repository</a>
      <a href="https://shopping-list-appdt.netlify.app/" style="background-color: #FDE68A; color: #855C1B; font-size: 0.75rem; font-weight: 500; margin-right: 0.5rem; padding: 0.125rem 0.625rem; border: 1px solid #855C1B; border-radius: 0.375rem;">View Project</a>
    </td>
  </tr>
</table>

<h3 style="color: rgb(34, 211, 238); text-align: center;">Day 1</h3>
<h5 style="color: white; text-align: center;">26/03/2024</h4>

### Introduction
Never forget what you need to buy again. Share your list with friends and family.It will practically be a webapp.
 
 <h3 style="color: rgb(34, 211, 238); text-align: center;">Day 2</h3>
<h5 style="color: white; text-align: center;">27/03/2024</h4>


### Setting up app skeleton
<img alt="IMC App" src="/assets/images/code_html.png">
This is a simple HTML code template with your JavaScript implemented.

### Adding CSS
Simple web app style consisting of a container, buttons, and text with a custom font:
The CSS includes styles for:
Reseted CSS to remove default margins and paddings.
Styling for the container class.
Styling for buttons with hover effects.
Styling for text with a custom font, size, and color.

### Adding CSS and JavaScript
<img alt="IMC App" src="/assets/images/javascript.png">
Firebase Setup: The code initializes Firebase with the provided settings.
Database References: It sets up a reference for the shopping list in the database.
Page Elements: It gets relevant HTML page elements, such as the input field and the shopping list.
Add Item: When the user clicks the add button, the value entered in the input field is added to the shopping list in the database.
Update List: The shopping list is updated in real-time whenever there is a change in the database.
Helper Functions: Functions to clear the shopping list and input field, and to add items to the shopping list on the page.
Essentially, users can add items to the shopping list on the page, and these items are stored and updated in real-time using Firebase.

### Database Firebase
Aside: Fetching database items in realtime using onValue.	
<img alt="IMC App" src="/assets/images/database.png">

### App Results
In conclusion, this web application provides a straightforward solution for managing a shopping list. By leveraging Firebase Realtime Database, it offers real-time synchronization of data across multiple clients, ensuring that any changes made to the list are instantly reflected for all users. 

<img alt="IMC App" src="/assets/images/result1.png">

The user interface is simple, with an input field for adding items and a list to display them. The code is modular and easy to understand, making it accessible for further customization or integration into larger projects. 
Overall, this application demonstrates the power and ease of use of Firebase for creating dynamic and collaborative web applications.
###
<a target="_blank" href="https://shopping-list-appdt.netlify.app/">Open Project</a>





