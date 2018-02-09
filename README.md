Getting things up
-
1. Install docker on host machine
2. Clone the project
3. `docker-compose up`
4. Creating admin user for api-user
    1. Login to container : `docker-compose exec api-user bash`
    2. Run init script : `npm run first-time-setup`
    
    
Components
-

1. api-user (host port 8001)
    1. This is the back end api for user management. Based on [jedireza/frame](https://github.com/jedireza/frame)
    2. proxy url `/api/user/`.
2. frontend-dashboard (host port 8002)
    1. [CoreUI Admin](https://github.com/mrholek/CoreUI-React) based React frontend
    2. proxy url `/`
    
Contributing
-

1. All web containers run on 8080.
2. Master branch should not be used for development.
3. Every feature MUST be implemented in a separate branch. They should be merged to master using PRs.