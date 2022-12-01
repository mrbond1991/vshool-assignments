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

# Intro to Mongoose
  # npm install mongoose

  # Purpose
    * Create models
    * Query data

  # Connect

# Mongoose Schemas
  * Blueprints for our data

# Mongoose Models
  * Models have a Name, and a Blueprint (Schema)
  * Models are used to perform the CRUD operations on data created with the Model

# Git Collaboration

  git branch
  git checkout - creates branch
  git merge - merges two versions of code

# Start the Repo, clone master

  1. Create git repository on github
    -One person creates
  2. Connet/clone locally
  3. Set up the code base
    - git add -A
    - git commit -m "initial commit"
    - git push
  --
  4. Clone the repository
    - git clone <pasted command github> (NEVER CODE ON MASTER, ALWAYS CODE ON BRANCH)
  5. Create a feature branch
    - git branch <branchName>
    - Example: git branch server-setup
  6. Checkout to that branch
    - git checkout <branchName>
    - Example: git checkout server-setup
  7. Commit and push branch to github
    - git add -A
    - git commit -m "initial commit"
    - git push
      - git will sent a message in console that says we need to create a Remote Branch. Copy and past the command given to move forward
  8. git checkout master
  9. Pull down remote master
    - git pull
  10. checkout back to local branch
    - git checkout <branchName>
    - Example: git checkout server-setup
  11. Merge local master into local branch
    - git merge --no-ff master
    - if goes well
      - shift + ZZ
    - if it goes badly
      - Resolve conflicts locally
  12. push branch to github
    - git add -A
    - git commit -m "initial commit"
    - git push
  13. Create Pull Request on github
  14. Git checkout to master & git pull