Firing up the frontend
-
1. Clone the project
2. `cd frontend-dashboard`
3. `npm install && npm start`

Serverless backend
-
1. `cd serverless`
2. `npm install`
3. install dynamodb offline `serverless dynamodb install`
4. schema for local db `serverless dynamodb migrate`
5. start the service `serverless offline start`
6. follow the usual commands of serverless framework for deploy

API Documentation
-
Documentation is done with swagger-node

1. `npm install -g swagger`
2. `cd docs`
2. `npm install`
3. open swagger editor `swagger project edit`




1. `cd doc`
2. `npm install`
3. open swagger editor `swagger project edit`

    
    
Components
-

1. frontend-dashboard (host port 8080)
    1. [CoreUI Admin](https://github.com/mrholek/CoreUI-React) based React frontend
    2. proxy url `/`



Contributing
-

1. All web containers run on 8080.
2. Master branch should not be used for development.
3. Every feature MUST be implemented in a separate branch. They should be merged to master using PRs.
4. Use Hyphen(`-`) when adding class names to stylesheets ( avoid using Underscore `_`)
