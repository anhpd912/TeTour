## BUILD STAGES ##
FROM maven:3.9-eclipse-temurin-17-alpine as build

WORKDIR /app
COPY . .
RUN mvn install -DskipTests=true
## RUN STAGE ##
FROM amazoncorretto:17-alpine
WORKDIR /run
COPY --from=build /app/target/com-0.0.1-SNAPSHOT.jar tetour.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "tetour.jar", "--spring.profiles.active=prod"]