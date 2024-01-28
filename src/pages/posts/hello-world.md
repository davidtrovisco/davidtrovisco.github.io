---
layout: '@/templates/BasePost.astro'
title: 
description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero esse non molestias eos excepturi.
pubDate: 
imgSrc: 'https://cdn3d.iconscout.com/3d/premium/thumb/website-development-7556095-6168912.png'
imgAlt: 'Image post 6'
---
<h3 style="color: rgb(34, 211, 238); text-align: center;">Education</h3>

<table>
  <tr>
    <td><strong>POLYTECHNIC INSTITUTE OF BRAGANÇA</strong></td>
    <td style="text-align: right;"><strong>Bragança, PT</strong></td>
  </tr>
  <tr>
    <td>Bachelor's in Computer Engineering</td>
<td style="text-align: right;">2018 - 2022</td>
  </tr>
  <tr>
    <td><strong>POLYTECHNIC INSTITUTE OF BRAGANÇA</strong></td>
    <td style="text-align: right;"><strong>Bragança, PT</strong></td>
  </tr>
  <tr>
    <td>Accounting Technician</td>
<td style="text-align: right;">2016 - 2018</td>
  </tr>
</table>


##

<h3 style="color: rgb(34, 211, 238); text-align: center;">Awards</h3>
<table>
  <tr>
    <td><strong>INTERNACIONAL PARTICIPATION - Hackathon HACKING RIO'20</strong></td>
    <td><strong>Brazil/Portugal</strong></td>
  </tr>
  <tr>
   <tr>
    <td><strong>Google Play Mobile Application Development - Top 10 app's Portugal</strong></td>
<td style="text-align: right;"><strong>2020</strong></td>
  </tr>
  </tr>
</table>

##
<h3 style="color: rgb(34, 211, 238); text-align: center;">Interests and Hobbies</h3>
<table>
  <tr>
    <td><strong><center>🎿 ⚽ 🏃 🎡 📷 🎨 💻 🛫 🌄 👪 📺</center></strong></td>
  </tr>
  
</table>


<h3 style="color: rgb(34, 211, 238); text-align: center;">Professional Experience</h3>

<div class="timeline">
  <div class="container right">
    <div class="content">
    <h3 style="color:#130f40; text-align: center;">2022</h3>
      <div class="direito">Porto, PT</div>
      <h4 style="color:black">SOLUTIONS by Oryon, SA</h4>
      <p>Junior Software Developer - FullStack Developer / DevOps</p>
<div style="display: flex; gap: 5px;">
  <span>
    <img src="https://img.shields.io/badge/.NET-512BD4?logo=dotnet&logoColor=fff&style=plastic" alt=".NET Badge">
  </span>
  <span>
    <img src="https://img.shields.io/badge/Blazor-512BD4?logo=blazor&logoColor=fff&style=plastic" alt="Blazor Badge">
  </span>
  <span>
    <img src="https://img.shields.io/badge/Azure%20DevOps-0078D7?logo=azuredevops&logoColor=fff&style=plastic" alt="Azure DevOps Badge">
  </span>
  <span>
  <img src="https://img.shields.io/badge/Azure%20Pipelines-2560E0?logo=azurepipelines&logoColor=fff&style=plastic" alt="Azure Pipelines Badge">
  </span>
  <span>
    <img src="https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=fff&style=plastic" alt="Bootstrap Badge">
  </span>
  <span>
    <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=plastic" alt="HTML5 Badge">
  </span>
  <span>
<img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=plastic" alt="CSS3 Badge">  </span>
</div>

</div>
  <div class="container right">
    <div class="content">
    <h3 style="color:#130f40; text-align: center;">2018</h3>
          <div class="direito">Bragança, PT</div>
      <h4 style="color:black">ACCOUNTING TECHNICIAN</h4>
      <h4 style="color:black">SOCIEDADE BRIGANTINA DE CONSULTORES, Lda</h4>
      Experience in Financial Management and Billing.
    </div>
  </div>
</div>



<style>
.tr{
  text-align: center;
}
.direito{
  text-align: center;
  font-style: italic;
} 
.badge {
  background-color: red;
  color: white;
  padding: 4px 8px;
  text-align: center;
  border-radius: 20px;
}
  .h2{
    text-align: center;
  }
  * {
  box-sizing: border-box;
}

/* Set a background color */
body {
  background-color: #474e5d;
  font-family: Helvetica, sans-serif;
}

/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: '';
  position: absolute;
  width: 5px;
  background-color: white;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
  border-radius: 20px;
  z-index: -1; /* Definindo o z-index para -1 para que fique atrás dos elementos */
}

/* Container around content */
.container {
  padding: 15px 20px;
  position: relative;
  background-color: inherit;
}

/* The circles on the timeline */
.container::after {
  content: '';
  position: absolute;
  background-color: white;
  border-radius: 50%;
  z-index: 1;
}

/* Place the container to the left */
.left {
  left: 0;
}

/* Place the container to the right */


/* Add arrows to the left container (pointing right) */
.left::before {
  height: 0;
  position: absolute;
  width: 0;
  z-index: 1;
  right: 30px;
  color: black;
}

/* Add arrows to the right container (pointing left) */
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
  
}

/* Fix the circle for containers on the right side */
.right::after {
  left: -16px;
}

/* The actual content */
.content {
  padding: 5px 10px;
  background-color: white;
  position: relative;
  border-radius: 6px;
  color: black;
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
/* Place the timelime to the left */
  .timeline::after {
    left: 10px;
  }

/* Full-width containers */
  .container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    color: black;
  }

/* Make sure that all arrows are pointing leftwards */
  .container::before {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
    color: black;
  }

/* Make sure all circles are at the same spot */
  .left::after, .right::after {
    left: 15px;
  }

/* Make all right containers behave like the left ones */
  .right {
    left: 0%;
  }

}
</style>
