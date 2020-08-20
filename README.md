# Introduction

![](https://github.com/Manvityagi/Camping-Site/raw/master/images/home.PNG)

**Camping Site** is a RESTful website for camping lovers to share and explore camping-spots.

## [VIEW LIVE DEMO](https://vast-ridge-42817.herokuapp.com/)

## ❓ Problem Statement

- A social-media like patform is to be implemented for camping lovers to give them a platform to share their camping spots and know-about other camping spots.

## 🚧 Technology Stack

- **Server Enviornment** - NodeJS
- **Framework** - ExpressJS
- **Database** - MongoDB
- **Cloud database service** - MongoDB Atlas
- **Session Authentaication** - PassPortJS
- **Error Messages** - flash
- **Deployment** - Heroku

## 🔨 Features

- `Browse Campgrounds` All the posted campgrounds can be browsed.
- `Add Campground` A verified user can add/update campgrounds.
- `Comment` Users can add/update comments on different posts.
- `Resgistration` User Registration/Signup is available.
- `Authentication` To post a campground, user must login.
- `Authorization` A user can only edit the campgrounds/comments posted by her/him, but can comment on all.

## 🔨 API Endpoints

Index
| REQUEST METHODS | ENDPOINTS | DESCRIPTION |
| :-------------- | :-------: | ------------------: |
| GET | /register | Render signup page |
| POST | /register | Handle Signup Logic |
| POST | /login | Render Login Page |
| POST | /login | Handle Login logic |
| GET | /logout | Logs out the user |

`/campgrounds`
| REQUEST METHODS | ENDPOINTS | DESCRIPTION |
| :-------------- | :-------: | ------------------: |
| GET | / | Show all Campgrounds |
| POST | / | Add new campground to DB |
| GET | /new | Render post form |
| GET | /:id | Show details of campground with id |
| GET | /:id/edit | Render edit form |
| PUT | /:id/ | Do the edit logic |
| DELETE | /:id | Delete campground with id |

`/campgrounds/:id/comments`
| REQUEST METHODS | ENDPOINTS | DESCRIPTION |
| :-------------- | :-------: | ------------------: |
| POST | / | Add new comment to current campground |
| GET | /new | Render comment form |
| PUT | /:id/ | Do the comment edit logic |
| DELETE | /:id | Delete comment with id |

## ⬇️ Installation

```
# clone the repository to your local machine
$ git clone https://github.com/<YOUR-GITHUB-USERNAME>/Entry-Management-Software.git

# navigate to the project's directory and install all the relevant dev-dependencies
$ cd Camping-Site && npm intsall

# Make a .env file and include the Database details

# Start application
$ pnode index.js

# Visit localhost:5000 in your browser
```
