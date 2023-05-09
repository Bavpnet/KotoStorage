# KotoStorage
Final project in the System and Network Administration course.

## Description

The web appliaction is designed to provide a gallery of cats for people who are passionate about felines. This platform enables users to upload and share their favourite cat pictures with other cat lovers,  as well as view an extensive collection of cat photos uploaded by other users.

## How to use

This web application is avaible by following link: https://sna.dropteam.ru/

## Demonstration
About page:
<img width="1440" alt="изображение" src="https://user-images.githubusercontent.com/88327718/237022463-eda81797-d272-41f6-a6c5-df244793acdd.png">
Upload page:
<img width="1144" alt="изображение" src="https://user-images.githubusercontent.com/88327718/237022811-a54332c6-47f3-4c16-87fa-eedef1447e53.png">
Gallery page:
<img width="963" alt="изображение" src="https://user-images.githubusercontent.com/88327718/237022898-0f15f921-14a2-4fc2-9351-529bef24abd5.png">
Adaptability to various devices:
<img width="451" alt="изображение" src="https://user-images.githubusercontent.com/88327718/237022578-abac67a1-262e-46df-882b-856c81d561b2.png">

## Frontend production building & deploying

In `/frontend` folder:

`docker build . -t KotoStorage`
`docker run -p 80:80 -e API_URL=https://staging.api.com -t KotoStorage` 

