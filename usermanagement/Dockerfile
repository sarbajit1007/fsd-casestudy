FROM openjdk:8-jdk-alpine
EXPOSE 8086
ADD target/user-service.jar user-service.jar
ENTRYPOINT ["sh", "-c", "java -jar /user-service.jar"]