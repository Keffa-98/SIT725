# Week 2 : EXPRESS WEB SERVERS

## Installation 
clone the repository
```
git clone git https://github.com/Keffa-98/SIT725 
```

## Install dependencies

change directory to week-2

```
cd Week-2
```

install node_modules via npm 

`npm install
`

## Run the application

use the following command to run the application
```
npm run start
```

## Test Application

In your favourite browser navigate to https://localhost:3000

## Adding two numbers
To add two numbers provide the two numners a query params such as:
`http://localhost:3000/add?num1=5&num2=8` and you should be able to get response such as:
```json
{
    "result":13
}
```