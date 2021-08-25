# I'd Watch That
# PROJECT 4 README <!-- omit in toc -->

> The Project Planning section **should be completed** for your project pitch with instructors.


- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**I'd Watch that** an app that will allow people to read and right there own reviews of movies._


<br>

## MVP

_The **I'd Watch That** MVP Should allow users to see a list of movie and search movies by title. Add movie that isn't there with review. Add reviews to movies in list _

<br>

### Goals

- _show movies._
- _Show the reviews for the movies._
- _search a movie._
- _create a review for the movie ._
- _add a movie and a review for it._

<br>

### Libraries and Dependencies



|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _I will be using react for the from end._ |
|   React Router   | _routing the pages._ |
|       axios      | _communicate to the back end._ |
|  ruby on rails   | _create back end._ |
|  Express Router  | _To create router handlers._ |

<br>

### Client (Front End)

#### Wireframes


![Dummy Link](https://whimsical.com/RJiQwfx3EMXpbtvNwmwsEu)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Tree


[Component Tree Sample](https://drive.google.com/file/d/1sEiYCKDRi-als9GtKjBggdhit5_R-xuA/view?usp=sharing)

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ screens/
      |__ movie.jsx
      |__ review.jsx
      |__ add mvie.jsx
      |__ create review
|__ components/
      |__ Header.jsx
|__ layouts/
      |__ Layout.jsx
|__ services/
      |__api-config.js
      |__movie.js
      |__review.js

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| DB                  |    H     |     4 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     4 hrs      |     1 hrs     |     TBD     |
| connect front end   |    H     |     3 hrs      |     3 hrs     |     TBD     |
| testing             |    H     |     3 hrs      |     2 hrs     |    3 hrs    |
| create Pages        |    H     |     5 hrs      |     1 hrs     |     TBD     |
| conecting pages     |    H     |     4 hrs      |     3 hrs     |     TBD     |
| auth                |    H     |     4 hrs      |     3 hrs     |     TBD     |
| Debugging           |    H     |     4 hrs      |     1 hrs     |     TBD     |
| Styling             |    H     |     3 hrs      |     3 hrs     |     TBD     |
| TOTAL               |    L     |                |               |             |


> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

[ERD Sample](https://drive.google.com/file/d/1UgfWbQSUmDoLqHmEfS29_Jiz_7RCOPlO/view?usp=sharing)
<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

- _add authorization._
- _registration._


***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
