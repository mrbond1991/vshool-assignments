# Intro to Express

    #Initialize a new node project
     - npm init -y

     - npm install <dependencies> (in this case, express)

     - command c ends server in terminal


# Vocabulary

 # Route
   * An event listener for http requests

 # Endpoint
   * "/item"  "/user"

 # Port
   * localhost:9000/ (above 3000 and below 9000)

# Nodemon
  * npm install -g nodemon

# Middleware - a function that fires on the inbetween
  # What is it?
    * app.use()
      1. (optional) - Mount Path ( endpoint )
      2. Callback Function - receives request, reponse objects, also the 'next' function
  # The "next" function
    * Moves on to the middleware in line on our server
# Request Body (req.body)

# UUID - creates unique IDs
  - npm install uuid

# Express Router - Enables to modularize our routes in express

# Modular file organization

# URL Parameters

  # Parts of a URL
   * Base - http://amazon.com
   * Endpoint - http://amazon.com/images
   * Parameter - http://amazon.com/image/3216546987sfv
   * Query

  # Parameters (req.params) - GET One

  # URL Queries

    # Query Strings - (typically to filter results)
      * Begins with the "?".
      * Built of key=value pairs.
      * Multiple queries separated by the "&".

# Console Errors in Express

  # Use A logger
    * npm install morgan

# Connecting the Front-end to the Back-end

  # Folder Structure
    * create a 'client' folder to host react app
    * npx create-react-app .
    * get rid of everything in 'src' and create boiler plate index.js file
  # Proxy
    * go to package.json in client/src/package.json
    * after last object curly, add '"proxy": "http:localhost:9000" <--- <endpoint for app>' to connect front end with back end.

# Status Code

  # 200 - Successful Request
  # 201 - Successful Insert / Successful Update
  # 401 - Unauthorized
  # 404 - Not found
  # 500 - Server Error

  # https://http.cat