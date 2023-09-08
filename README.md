# Bike Index API

## Contributors
_Jeremy Josol_

## About
This application works with the [BikeIndex API](https://bikeindex.org/documentation/api_v3) and provides users with the capability to search for lost or stolen bikes using parameters for bike model, location, and distance proximity. Depending on the user's input, the webpage will present the results, displaying information on up to 25 lost or stolen bikes, including details such as the bike's year, color, date of theft, and an accompanying image.

## Technologies Used

* _Github_
* _VSCode_
* _HTML_
* _CSS_
* _Bootstrap_
* _Javascript_
* _Node.js v16.13.1_
* _npm v8.1.2_
* _BikeIndex API_

### Prerequisuites
> _Your computer or codespace should use **Node.js version 16** or greater. For more information, see_ [Node.js](https://nodejs.org/en).

## Application Setup

1. Clone the [repository](https://github.com/jeremyjosol/sep72023_bikeindexapi.git) by either copying the link or entering the command in your terminal:
    ```
     git clone https://github.com/jeremyjosol/sep72023_bikeindexapi.git
    ```
2. After successfully cloning down the repository, navigate to the **'sep72023_bikeindexapi'** directory, if the file is located in your desktop, enter the following command:
      ```
       cd sep72023_bikeindexapi   
3. In the root directory of `sep72023_bikeindexapi`, enter the following command `touch .env`. This file is where you will store your API key.

4. If you don't already have an API key for [BikeIndex](https://bikeindex.org/documentation/api_v3), create a free account to have one generated. This is required in order for the function to call on the API in this project.

5. After opening up your codespace, locate the **.env** file. Within the **.env** file, enter the following code: 
      ```
        API_KEY=yourAPIkey
      ```  
    > _.**env** will already be located in the **.gitignore** file to protect this sensitive information._

6. Before you can use or deploy the project, make sure to install its dependencies. Run the following command in your terminal:

    `$ npm install`

    > _This command will read the **package.json** file and install all the required packages_.

7. Once its dependencies are installed, you're ready to perform these available options:
    
    - To build the project:
    
      `$ npm run build`

      > _This will compile and prepare the project for deployment._

    - To lint files:

      `$ npm run lint`

      > _This will analyze your code and highlight any potential issues based on your linting rules_.

    - To run tests using Jest: 
    
      `$ npm run test`

      > _This will activate the test suites you've configured in your project and provide feedback on whether they have executed successfully._
        
    - To start the local development server: 
    
      `$ npm run start` 

      > _This will launch a local server for testing and development purposes_.


You should now be set up to use, develop, and test **BikeIndex API**. If you encounter any issues or have questions, feel free to reach out or refer to the project's documentation. Alternatively, if you'd like to view the project without setting up a local environment, you can access it on [Github Pages](https://jeremyjosol.github.io/sep72023_bikeindexapi/). 


## Known Bugs
No major bugs known. Some fetched results of bike thumbnail images don't show, but I believe it is an issue outside of this application. Please kindly report any known issues to the repository's creator.

## MIT License
Copyright (c) 2023 Jeremy Josol

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.