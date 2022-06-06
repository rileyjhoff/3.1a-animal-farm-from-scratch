[backend-zodiac](https://alchemycodelab.github.io/backend-zodiac/)

# Zodiac

## Demo

[Zodiac API](https://alchemy-zodiac.herokuapp.com/)

## Getting Started

Use the backend generator to get started. `npm init @alchemycodelab/app@latest`

### Learning Objectives

- Create a GET endpoint using Express that returns an array of objects
- Create a GET endpoint using Express that returns a single object based on the id and `req.params.id`
- Test Express controller routes expectations using Jest and Supertest
- Explain how Express tries routes, in what order, and when it will stop or continue
- Deploy an Express application on Heroku

### Description

Your task is to create an API that returns information about Zodiac signs. You can find the list of Zodiac data [here](https://alchemy-zodiac.herokuapp.com/zodiac/all)

### Acceptance Criteria

- A controller exists with routes for GET requests (both list and detail)
- `app.test.js` includes a test for every route
- List route (`/zodiac`) only returns id and name for each sign

### Rubric

| Task                                              | Points |
| ------------------------------------------------- | ------ |
| `/zodiac` route with test                         | 6      |
| `/zodiac/:id` route with test                     | 6      |
| Home page in `public` folder with links to routes | 4      |
| API is deployed to Heroku                         | 2      |
| API routes are RESTful                            | 2      |
