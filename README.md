<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

# Movie Magic backend application

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#pages">Pages</a></li>
  </ol>
</details>

## About The Project

Simple application that stores and shows Movies to both logged users and guests. Guests can only view the data, in order for them to edit a movie they need to either login or register.

### Built with

-  HTML & CSS
-  JavaScript
-  MongoDB

## Getting Started

Currently the application runs locally so you need to download it on your computer or simply clone the repository.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
-  npm
   ```sh
   npm install npm@latest -g
   ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/SissyManson/MovieMagic.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the project
   ```sh
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Pages

### Visible for Guest users

#### Home
The home page shows all of the movies from the database. 
  <img alt="home-page" src="https://github.com/SissyManson/MovieMagic/assets/44162252/0c546500-2f41-417e-8142-292618a86506" width="80%">

#### Details
When you hover on the movie image the Details button is shown and it leads you to the Details page
<img alt="details" src="https://github.com/SissyManson/MovieMagic/assets/44162252/478f45d9-f1bc-44f2-80de-6568986d6b1a" width="80%">


#### About

<img alt="about" src="https://github.com/SissyManson/MovieMagic/assets/44162252/b59330ec-6d08-4a62-bcc4-226dd38a6097" width="80%">


#### Search
Both logged in and guest users can perform search by 3 criteria
<ul>
  <li>Title</li>
  <li>Genre</li>
  <li>Year</li>
</ul>
<br>
<img alt="search" src="https://github.com/SissyManson/MovieMagic/assets/44162252/c90c068c-cf26-430b-9300-384d5916cef5" width="80%">


#### Login & Register
Users can login or register if they do not have an account
<img alt="login" src="https://github.com/SissyManson/MovieMagic/assets/44162252/8a12b3bd-11f2-4c57-9845-078e655d5667" width="80%">

<img alt="register" src="https://github.com/SissyManson/MovieMagic/assets/44162252/95719f91-b3d1-43e5-980b-db126f113c51" width="80%">

<hr>

### Pages visible for Logged users

#### Create New Movie
A logged in user can create new movies
<img alt="create-movie" src="https://github.com/SissyManson/MovieMagic/assets/44162252/1520147c-5392-4d1e-a233-065cef24c2bc" width="80%">

#### Create Cast
A logged in user can create new cast
<img alt="create-cast" src="https://github.com/SissyManson/MovieMagic/assets/44162252/b9e379c6-451d-4893-b575-e7d837991ea2" width="80%">

#### Edit Movie
A logged in user can edit the movies he has created
<img alt="edit-movie" src="https://github.com/SissyManson/MovieMagic/assets/44162252/0a7d7c0c-73df-4f1b-99ec-8c9f15443b34" width="80%">

#### Add Cast to a movie
A logged in user can attach cast to the existing movies
<img alt="add-cast" src="https://github.com/SissyManson/MovieMagic/assets/44162252/78dda7c3-6ea5-408d-b0d1-3e170214d9aa" width="80%">


<p align="right">(<a href="#readme-top">back to top</a>)</p>

