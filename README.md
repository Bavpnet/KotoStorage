# KotoStorage
Final project in the System and Network Administration course.

## Description

The web appliaction is designed to provide a gallery of cats for people who are passionate about felines. This platform enables users to upload and share their favourite cat pictures with other cat lovers,  as well as view an extensive collection of cat photos uploaded by other users.

## How to use

This web application is avaible by following link: https://sna.dropteam.ru/

## Demonstration
![изображение](https://user-images.githubusercontent.com/88327718/237034543-669e2330-451a-4282-a0de-eae81b24728d.png)

![изображение](https://user-images.githubusercontent.com/88327718/237034612-e6d71c0a-f486-4d86-ae3b-742d19df03d1.png)
![изображение](https://user-images.githubusercontent.com/88327718/237034631-273cd066-a57c-4c54-bd0c-fb32a3e79d02.png)

![изображение](https://user-images.githubusercontent.com/88327718/237034648-cb3051de-52ee-483a-8209-bcba6aa3d5a9.png)

## Frontend production building & deploying

In `/frontend` folder:

`docker build . -t KotoStorage`
`docker run -p 80:80 -e API_URL=https://staging.api.com -t KotoStorage` 

