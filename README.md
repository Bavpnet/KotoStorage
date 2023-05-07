# KotoStorage
Final project in the System and Network Administration course.

This applications storres the photos (links) in the database and show gallery of cats.

## Frontend production building & deploying

In `/frontend` folder:

`docker build . -t KotoStorage`
`docker run -p 80:80 -e API_URL=https://staging.api.com -t KotoStorage` 

