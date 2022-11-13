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