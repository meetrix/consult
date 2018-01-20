Getting things up
-
1. Install docker on host machine
2. Clone the project
3. `docker-compose up`
    
    
Component
-

1. api-user (host port 8001)
    1. This is the back end api for user management. Based on [jedireza/frame](https://github.com/jedireza/frame)
    2. proxy url `/api/user/`.
2. frontend-dashboard (host port 8002)
    1. [CoreUI Admin]() based React frontend
    2. proxy url `/`
    
Contributing
-

1. All web containers run on 8080.
2. Master branch should not be used for development.
3. Every feature MUST implement in a separate branch. They should be merged to master using PRs.