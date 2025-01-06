# Database Schema Overview

The schema consists of two primary tables: `Plans` and `AddOns`.

## Tables

### Plans Table

The `Plans` table stores information about subscription plans offered by the service. It includes the following fields:

- **PlanID**: (INT, Primary Key) A unique identifier for each plan.
- **Name**: (VARCHAR(50)) The name of the plan, such as Arcade, Advanced, or Pro.
- **Type**: (ENUM('Monthly', 'Yearly')) The type of billing cycle for the plan, either monthly or yearly.
- **Cost**: (DECIMAL(6, 2)) The cost of the plan in the specified currency.
- **Details**: (VARCHAR(100)) Additional details about the plan, such as promotional information or special features that will be presented in the UI.

### AddOns Table

The `AddOns` table contains information about additional services or features that can be added to subscription plans. It includes the following fields:

- **AddOnID**: (INT, Primary Key) A unique identifier for each add-on.
- **Title**: (VARCHAR(100)) The title of the add-on, such as Online Service or Large Storage.
- **Description**: (TEXT) A detailed description of what the add-on offers.
- **MonthlyPrice**: (DECIMAL(6, 2)) The cost of the add-on when billed monthly.
- **YearlyPrice**: (DECIMAL(6, 2)) The cost of the add-on when billed yearly.

### UserSubmissions Table

The `UserSubmissions` table records user submissions, including personal information and selected plans. It includes the following fields:

- **SubmissionID**: (INT, Primary Key) A unique identifier for each submission.
- **UserName**: (VARCHAR(100), NOT NULL) The name of the user making the submission.
- **Email**: (VARCHAR(100), NOT NULL) The user's email address.
- **PhoneNumber**: (VARCHAR(15)) The user's phone number.
- **PlanID**: (INT, NOT NULL) A foreign key referencing the `Plans` table to associate a submission with a selected plan.
- **SubmissionDate**: (TIMESTAMP) The date and time of the submission, defaulting to the current timestamp.

### UserSubmissionAddOns Table

The `UserSubmissionAddOns` table links user submissions to their selected add-ons. It includes the following fields:

- **SubmissionID**: (INT) A foreign key referencing the `UserSubmissions` table.
- **AddOnID**: (INT) A foreign key referencing the `AddOns` table.

This table allows for multiple add-ons to be associated with a single user submission.

![](database/database_schema.png)
   
## Notes

- The current `VARCHAR` length and `DECIMAL` precision is higher than presented in the examples, and can probably be modified and lowered.
- There is no direct relationship between `Plans` and `AddOns` in the given structure. However, in a more comprehensive system, you might consider creating a linking table to associate specific add-ons with specific plans, if needed.
- The table only supports two types of plans and prices (monthly and yearly). We could have defined it more generically and enforced the type in a backend code layer, instead of the database definition.
- We have the assumption that the cost is always saved in US dollars currency. The UI can present the price in different currencies based on the user-defined currency.
- We only save complete user submissions info. Meaning, partial filling of the multistep form won't be kept in the database.



# API Overview

This project also provides a RESTful API for viewing plans and add-ons, and storing user submissions.

### Endpoints

- **Plans**: Read subscription plans.
- **AddOns**: Read subscription plans.
- **UserSubmissions**: Create user submission.

## Viewing the Swagger Documentation

To view the API documentation using Swagger UI locally using Docker:

   - Pull the Swagger UI Docker image:
     ```bash
     docker pull swaggerapi/swagger-ui
     ```
   - Inside the project directory, run the Swagger UI container:
     ```bash
     docker run -p 8080:8080 -e SWAGGER_JSON=/api/openapi.yaml -v "$(pwd)"/api/openapi.yaml:/api/openapi.yaml swaggerapi/swagger-ui
     ```
   - Open your web browser and go to `http://localhost:8080`.

NOTE: I added another file called `api/extended_openapi.yaml` where I started adding CRUD operations for both plans and addons.

# Running the Project

To run the server and database using Docker, use the following command:
   ```bash
   docker-compose up --build
   ```
   
To stop the containers, use:
   ```bash
   docker-compose down
   ```
If you make changes to the database a volume cleanup is required, use:
```bash
docker volume rm your_project_name_my-db-data
```

## How to Access the Database Directly
1. Connect to the MySQL Database: 
   ```bash
   mysql -h 127.0.0.1 -P 3306 -u root -p
   ```
   Enter the password when prompted. You can find it in the Dockerfile under ENV MYSQL_ROOT_PASSWORD=rootpassword.
2. Once connected, select the database `net_nut_db`:
    ```bash
   USE net_nut_db;
   ```
   
## How to Query the Server API Directly

You can use curl to query the server API. Here are some examples:
```bash
curl http://localhost:8081/plans
    
[{"plan_id":1,"name":"Arcade","type":"Monthly","cost":"9.00","details":null},{"plan_id":2,"name":"Advanced","type":"Monthly","cost":"12.00","details":null},{"plan_id":3,"name":"Pro","type":"Monthly","cost":"15.00","details":null},{"plan_id":4,"name":"Arcade","type":"Yearly","cost":"90.00","details":"2 months free"},{"plan_id":5,"name":"Advanced","type":"Yearly","cost":"120.00","details":"2 months free"},{"plan_id":6,"name":"Pro","type":"Yearly","cost":"150.00","details":"2 months free"}]
```

```bash
curl http://localhost:8081/addons

[{"add_on_id":1,"title":"Online Service","description":"Access to multiplayer games","monthly_price":"1.00","yearly_price":"10.00"},{"add_on_id":2,"title":"Large Storage","description":"Extra 1TB of cloud save","monthly_price":"2.00","yearly_price":"20.00"},{"add_on_id":3,"title":"Customizable Profile","description":"Custom theme on your profile","monthly_price":"2.00","yearly_price":"20.00"}]
```

## App Overview

This application is built using Next.js and React and runs with **Bun** as the JavaScript runtime. It leverages a context state manager to:

- Render the correct step based on the application's state.
- Fetch step data and the current state on the first app render.
- Send the final user selections to the backend.

## Features

- **Responsive Design**: The app is fully responsive, fitting screens from mobile devices (230px width) to desktop.
- **Styling Consistency**: Utilizes `styled-components` for modular and maintainable styles, along with global style variables to ensure consistency and an enhanced user experience (UX).

## How to Access the UI

## Running the App Locally

To run the app in development mode, execute:

```
bun run dev
```

The local development server runs by default on port **3000**.

## Building the App

To build the app for production, execute:

```
bun run build
```

## Running the Built App

To run the app after building, execute:

```
bun run start
```





Open a web browser and navigate to http://localhost:8081 to access the application.