# VacApp - The Backend

# What is VacApp backend?

It's the server side application of the VacApp project. It serves as the interface between the client mobile app and the database, receiving queries and mutations from the client. The backend also handles the business logic of the data entities stored in the database and provides the system with algorithms to determine safe routes tailored to user preferences.

# Technologies / libraries used

- _Express_: Web framework for Node.js.
- _PostgreSQL_: Relational database management system used for the project.
- _Sequelize_: Object-relational mapping tool.
- _GraphQL_: Query language for the endpoint API.
  - _apollo-server-express_: GraphQL server used for the backend app.
  - _graphql-shield_: GraphQL permissions framework for management of user authorization logic.
- _jsonwebtoken_: Implementation of JSON Web Tokens for storage of authenticated user sessions.
- _dataloader_: Utility to reduce database queries in the GraphQL API (see n + 1 problem).

# Features

## Endpoint API

Sets up the GraphQL API on the server and enables a unique URI address in the backend's router, which the mobile app can establish communication. The schemas represent ORM models or abstract representations of a particular request, as the crowd report and the travel scheduler requests. To request data from the API, the user is required to be logged in with an authorized user in the database (see [Authentication and Authorization Logic](#authentication-and-authorization-logic)).

The API exposes a set of queries and mutations for use by the client application. A GraphQL query consists of its name, the required attributes, and optional parameters if needed. An example query is as follows:

```graphql
query PlaceById($id: ID!) {
  placeById(id: $id) {
    id
    place_name
    place_short_name
    place_address
    place_type {
      id
      place_type_name
    }
  }
}
```

The mutations are a distinct type of request as they make modifications to the database, for that reason the logic is typically wrapped within a transaction block to guarantee the integrity of the data. The following mutations were implemented in this project:

- _Login / Sign up_: Handles authentication logic either by registering a new account or accessing via a registered user. More info on [Authentication and Authorization Logic](#authentication-and-authorization-logic).
- _Update from user feedback_: Updates the current indicators of a particular place based on the feedback captured in the 'Update feedback' section of the client app. For each category, a new average is calculated taking into consideration the new data and the current number of opinions.

## Authentication and authorization logic

## Crowd report by place

## Travel scheduler algorithm
