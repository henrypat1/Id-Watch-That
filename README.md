# I'd Watch That
# PROJECT 4 README <!-- omit in toc -->

https://612f8dd919c0850007746bc8--angry-visvesvaraya-f5b564.netlify.app/

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


(https://whimsical.com/RJiQwfx3EMXpbtvNwmwsEu)

- Desktop and phone


#### Component Tree


[Component Tree Sample](https://drive.google.com/file/d/1sEiYCKDRi-als9GtKjBggdhit5_R-xuA/view?usp=sharing)

#### Component Architecture


``` structure

src
|__ screens/
      |__ Movie.jsx
      |__ AddMovie.jsx
      |__ CreateReview.jsx
      |__ SignIn.jsx
      |__ SignUp.jsx
      |__ MovieDetail.jsx
      |__ UpdateMovie.jsx
|__ components/
      |__ Header.jsx
      |__ Review.jsx
|__ layouts/
      |__ Layout.jsx
|__ services/
      |__api-Config.js
      |__movie.js
      |__review.js

```

#### Time Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| DB                  |    H     |     4 hrs      |     4 hrs     |    4 hrs    |
| Create CRUD Actions |    H     |     4 hrs      |     3 hrs     |    3 hrs    |
| connect front end   |    H     |     4 hrs      |     3 hrs     |    3 hrs    |
| testing             |    H     |     4 hrs      |     4 hrs     |    4 hrs    |
| create Pages        |    H     |     6 hrs      |     8 hrs     |    8 hrs    |
| conecting pages     |    H     |     4 hrs      |     6 hrs     |    6 hrs    |
| auth                |    H     |     4 hrs      |     3 hrs     |    3 hrs    |
| Debugging           |    H     |     4 hrs      |     4 hrs     |    4 hrs    |
| CSS Styling         |    L     |     6 hrs      |     4 hrs     |    4 hrs    |
| Deployment          |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
| TOTAL               |          |     36 hrs     |               |    42 hrs   |



<br>

### Server (Back End)

#### ERD Model


[ERD Sample](https://drive.google.com/file/d/1UgfWbQSUmDoLqHmEfS29_Jiz_7RCOPlO/view?usp=sharing)
<br>

***

## Post-MVP


- _add authentication._
- _full crud for reviews._


***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.
``` 
 {currentUser?.id === movie?.user_id && (
            <div >
              <Link to={`/movies/${movie?.id}/edit`}>
                <button className="update-btn">Edit</button>
              </Link>
              <button className="delete-btn"onClick={() => handleDelete(movie?.id)}>Delete</button>
            </div>
      )}
      {console.log(currentUser?.id)}
```


## Code Issues & Resolutions

Had trouble grabbing the user data fo login and adding reviews. 
