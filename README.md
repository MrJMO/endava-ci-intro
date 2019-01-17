# Endava CI intro - Jenkins, git and docker

To use the different applications in this repository run the following docker commands:

## Jenkins

### Image

To start the jenkins server build the image directly from the Docker file:

```bash
docker build -t eci-jenkins-docker runtime/jenkins/
```

Otherwise, you can download it from docker hub using your personal docker hub account:

```bash
docker login
```

After logging into your docker hub account you can pull the image for the jenkins application  from docker hub.

```bash
docker pull juanmacoo/eci-jenkins-docker
```
###  Container

#### Linux

To start the container in linux just run the following:

```bash
docker run  -d \ # Run Detached
--dns 8.8.8.8 --dns 8.8.4.4 \ # Enable google dns to access Github
-p 8888:8080 \ # Publish Port
--name jenkins_master \ # Set container name
-v /var/run/docker.sock:/var/run/docker.sock \ # Use local docker docket
-v jenkins_home:/var/jenkins_home \ # Set named volume to persist jenkins files
juanmacoo/eci-jenkins-docker # Built image name
```

#### Windows

To start the container in windows just run the following:

```bash
docker run  -d \ # Run Detached
--dns 8.8.8.8 --dns 8.8.4.4 \ # Enable google dns to access Github
-p 8888:8080 \ # Publish Port
--name jenkins_master_win \ # Set container name
-v /var/run/docker.sock:/var/run/docker.sock \ # Use local docker docket
-v jenkins_home_win:/var/jenkins_home \ # Set named volume to persist jenkins files
juanmacoo/eci-jenkins-docker # Built image name
```
Additionally, since docker in docker for windows requires root permissions, lets add them then restart the container:

```bash
docker exec -u root jenkins_master_win usermod -aG root jenkins \
docker stop jenkins_master_win && docker start  jenkins_master_win
```

## Node App

To start the node app, build the image directly from the Docker file:

```bash
docker build -t eci-nodeapp nodeApp/
```

The start the container using the built image:

```bash
docker run -d -p 3000:3000 --name eci-nodeapp eci-nodeapp
```

## Springboot App

To start, lets first build the springboot app:

```bash
cd springbootApp && \
chmod +x gradlew && \
./gradlew build
```

### Build docker image
Then, build the image directly from the Docker file:

```bash
docker build -t eci-springboot .
```

Finally, start the container using the built image:

```bash
docker run -d -p 8181:8080 --name eci-nodeapp eci-nodeapp
```