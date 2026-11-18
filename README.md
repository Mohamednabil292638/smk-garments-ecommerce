# S.M.K. Shri Ayyappa Garments – Full Stack E-Commerce Platform

A full-stack wholesale garments e-commerce platform developed to digitize business operations, manage product catalogues, and streamline customer ordering workflows using **Java, Spring Boot, React, and MySQL**.

The application combines a responsive React frontend with a Spring Boot REST API backend, providing structured product management, customer interactions, order processing, and administrative workflows.

---

## Project Overview

S.M.K. Shri Ayyappa Garments is a wholesale garments e-commerce platform designed for retailers, resellers, and bulk buyers.

The project addresses the operational challenges of traditional wholesale garment businesses by providing a centralized digital platform for product discovery, customer management, and order processing.

Unlike a static business website, the upgraded application follows a full-stack architecture in which the React frontend communicates with the Java Spring Boot backend through REST APIs, while MySQL provides persistent data storage.

**Development Type:** Individual Full Stack Development Project  
**Application Domain:** Wholesale Garments / E-Commerce  
**Architecture:** Layered Full Stack Architecture  
**Backend:** Java + Spring Boot  
**Frontend:** React.js  
**Database:** MySQL

---

## Problem Statement

Traditional wholesale garment businesses often depend on manual processes for maintaining product information, handling customer enquiries, and managing bulk orders.

These processes can create operational difficulties such as:

- Manual product catalogue maintenance.
- Inefficient customer and order management.
- Limited accessibility to product information.
- Repetitive communication between customers and business owners.
- Difficulty maintaining structured business data.
- Lack of centralized administrative control.

The objective was to develop a full-stack web application that connects customer-facing shopping workflows with backend business operations through a structured and maintainable application architecture.

---

## My Role

**Full Stack Developer – Individual Project**

Responsible for designing, developing, integrating, and testing the frontend and backend components.

### Key Responsibilities

- Designed and developed the full-stack application architecture.
- Developed backend REST APIs using Java and Spring Boot.
- Implemented business logic using Controller-Service-Repository architecture.
- Designed relational database entities and relationships using JPA/Hibernate.
- Integrated MySQL for persistent data management.
- Developed responsive frontend components using React, HTML, CSS, and JavaScript.
- Integrated frontend components with backend REST APIs.
- Implemented product, customer, cart, order, and administrative workflows.
- Added request validation and exception-handling mechanisms.
- Tested REST API functionality and backend integration using Postman.
- Performed debugging and application-level testing.

---

## Technology Stack

### Backend Development

- Java
- Spring Boot
- Spring MVC
- Spring Data JPA
- Hibernate ORM
- RESTful Web Services
- JDBC fundamentals
- Maven
- JSON

### Frontend Development

- React.js
- JavaScript
- HTML5
- CSS3
- Responsive Web Design
- React Components
- API Integration

### Database Management

- MySQL
- Relational Database Design
- JPA Entity Mapping
- Database Relationships
- SQL Queries

### API Testing and Development Tools

- Postman
- Git
- GitHub
- Visual Studio Code
- MySQL Workbench

---

## Application Architecture

The application follows a layered architecture that separates frontend presentation, API handling, business logic, and database operations.

```text
                  CUSTOMER / ADMIN
                         |
                         |
                  React Frontend
                HTML | CSS | JavaScript
                         |
                         |
                  REST API Requests
                         |
                         |
                 Spring Boot Backend
                         |
                  Controller Layer
                         |
                    Service Layer
                         |
                  Repository Layer
                         |
                    JPA / Hibernate
                         |
                         |
                    MySQL Database
```

### Architecture Responsibilities

| Layer | Responsibility |
|---|---|
| React Frontend | User interface, product browsing, forms and customer interactions |
| Controller Layer | REST API endpoints and HTTP request handling |
| Service Layer | Business logic and application workflows |
| Repository Layer | Database operations through Spring Data JPA |
| Entity Layer | Database table mapping and relationships |
| MySQL Database | Persistent application data storage |

This separation improves code organization, maintainability, testing, and future extensibility.

---

## Backend Development

The backend was developed using Java and Spring Boot to provide structured REST APIs for the application's business operations.

### Backend Implementation

- Developed **33+ REST API endpoints** for application operations.
- Implemented **10+ JPA entities** for structured database management.
- Used Controller-Service-Repository architecture.
- Integrated Spring Data JPA and Hibernate for persistence.
- Connected the application to MySQL.
- Implemented CRUD operations for relevant business modules.
- Added request validation and exception handling.
- Developed business logic for product, customer, cart, and order workflows.
- Integrated frontend requests with backend API responses.
- Tested API operations and request-response workflows using Postman.

### Backend Functional Areas

- Product management
- Product category management
- Customer management
- Shopping cart operations
- Order processing
- Administrative operations
- Database persistence
- API request validation

---

## Frontend Development

The frontend was developed using React.js, JavaScript, HTML5, and CSS3 to provide a responsive and interactive shopping experience.

### Frontend Implementation

- Developed reusable React components.
- Created responsive product listing interfaces.
- Implemented dynamic product rendering.
- Integrated frontend components with Spring Boot REST APIs.
- Implemented customer-facing shopping workflows.
- Connected forms and user interactions with backend operations.
- Organized frontend code into reusable components and application modules.
- Improved usability across desktop and mobile screen sizes.

---

## Key Features

### Product Management

- Product catalogue management.
- Dynamic product information rendering.
- Product details and category organization.
- Backend-supported product data operations.

### Customer Workflows

- Customer-facing product browsing.
- Customer information management.
- Shopping cart operations.
- Order placement workflows.
- Minimum Order Quantity (MOQ) validation.

### Order Management

- Order creation and processing.
- Structured order information management.
- Backend integration for order operations.
- Customer order workflow support.

### Administrative Workflows

- Administrative product management.
- Customer and order-related operations.
- Backend-supported management functionality.

### Customer Communication and Payment

- WhatsApp-based business communication workflow.
- Razorpay payment integration from the original customer-facing ordering workflow.

---

## Business Workflow

1. Customer accesses the wholesale garments website.
2. Customer explores available garment products.
3. Product information is retrieved through the application.
4. Customer selects products and enters the required quantities.
5. Minimum Order Quantity validation is performed.
6. Customer proceeds through the cart and order workflow.
7. The frontend communicates with the Spring Boot backend through REST APIs.
8. Backend services validate and process application requests.
9. Relevant business data is persisted in the MySQL database.
10. Customer communication and payment workflows support order processing.

---

## Database Design and Persistence

MySQL is used as the relational database for managing application data.

Spring Data JPA and Hibernate handle object-relational mapping between Java entities and database tables.

### Database Implementation

- Created JPA entities for application modules.
- Established entity relationships.
- Implemented repository interfaces for data access.
- Used structured database operations.
- Integrated backend services with MySQL.
- Maintained separation between entity, service, and repository responsibilities.

**Database Scope:** 10+ JPA entities.

---

## API Development and Testing

The application exposes 33+ REST API endpoints to support frontend-backend communication and business operations.

### API Development Practices

- HTTP request and response handling.
- REST endpoint implementation.
- JSON request and response structures.
- CRUD operations.
- Request validation.
- Exception handling.
- Frontend API integration.
- API testing through Postman.

API testing was performed to verify endpoint functionality, request payloads, response handling, and backend integration.

---

## Development Challenges and Solutions

### 1. Managing Product Information

**Challenge:** Maintaining product information in a structured and reusable manner.

**Solution:** Implemented backend-supported product management with JPA entities and MySQL persistence.

### 2. Frontend and Backend Integration

**Challenge:** Connecting React user interactions with backend business operations.

**Solution:** Developed REST APIs using Spring Boot and integrated them with frontend components.

### 3. Database Management

**Challenge:** Maintaining structured relationships between different business modules.

**Solution:** Used MySQL, JPA, and Hibernate to organize application data and database relationships.

### 4. Business Workflow Validation

**Challenge:** Ensuring that customer ordering operations follow business requirements such as minimum order quantities.

**Solution:** Implemented validation and business rules within the application workflow.

### 5. Application Maintainability

**Challenge:** Avoiding tightly coupled backend components as the application grew.

**Solution:** Separated request handling, business logic, and database access using Controller-Service-Repository architecture.

---

## What I Learned

This project provided practical experience in full-stack application development, including:

- Java application development.
- Spring Boot backend development.
- RESTful API design and implementation.
- Spring Data JPA and Hibernate.
- MySQL database integration.
- Relational database design.
- React component development.
- Frontend and backend integration.
- Business logic implementation.
- Request validation and exception handling.
- API testing using Postman.
- Git-based version control.
- Developing an application around real business requirements.

---

## Future Enhancements

Potential improvements for the application include:

- Advanced inventory management.
- Real-time order status tracking.
- Customer authentication and profile management.
- Enhanced administrative analytics.
- Automated email and order notifications.
- Advanced product search and filtering.
- Improved reporting and sales analytics.
- Automated backend and frontend testing.
- CI/CD pipeline enhancements.

---

## Conclusion

S.M.K. Shri Ayyappa Garments evolved from a business-focused website into a full-stack e-commerce application with a Java Spring Boot backend, React frontend, and MySQL database.

The project demonstrates practical implementation of REST API development, layered backend architecture, relational database integration, frontend-backend communication, and business-oriented application workflows.

It strengthened my hands-on experience in Java full-stack development and provided practical exposure to building and integrating backend services with a modern frontend application.

---

## Project Repository

**GitHub:** https://github.com/Mohamednabil292638/smk-garments-ecommerce
**Live:** https://smk-garments-ecommerce.netlify.app/

**Developer:** Mohamed Nabil S  
**Project:** S.M.K. Shri Ayyappa Garments – Full Stack E-Commerce Platform
