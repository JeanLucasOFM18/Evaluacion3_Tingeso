FROM openjdk:19
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} repositorio-service-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/repositorio-service-0.0.1-SNAPSHOT.jar"]