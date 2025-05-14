# React + Spring Boot Monolithic App

This is a full-stack monolithic web application built with:

- **Frontend:** React (served as static files)
- **Backend:** Spring Boot (Java)
- **Build Tool:** Maven
- **Deployment Script:** PowerShell script for integrating the frontend into the backend

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Java 17+
- Maven
- Node.js & npm
- Git
- PowerShell (for running the deploy script)

---

## Development Workflow


From the project root:

```bash
./mvnw spring-boot:run
```

This starts the Spring Boot server at [http://localhost:8080](http://localhost:8080)

---

## Deploy Frontend to Spring Boot


From the project root:

```powershell
.\deploy-to-spring.ps1
```

This moves the contents of `frontend/build` to `src/main/resources/static/`, where Spring Boot will serve them.

---

## Test Production Build

After deploying, restart the backend:

```bash
./mvnw spring-boot:run
```

Then open [http://localhost:8080](http://localhost:8080) — your React app is now served by Spring Boot.

---

## Clean Build

If needed:

```bash
./mvnw clean install
```

---


## License

This project is for learning/demo purposes.