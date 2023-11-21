FROM amazoncorretto:17
ARG JAR_FILE=statistics/target/statistics-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} app.jar
EXPOSE 8083
ENTRYPOINT ["java","-jar","/app.jar"]