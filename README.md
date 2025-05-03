# DevTinder

- Created a vite+react project
- Remove unecessary code and create a hellow world app
- Install Tailwind Css
- Install Daisy UI
- Add NavBar component to App.jsx
- Create a NavBar.jsx separate Component file
- Installed React-Router-Dom
- Create BrowserRouter > Routes > Route=/ Body > RouteChildren
- Create an Outlet in your Body Component
- Created a footer
- Created a Login page
- Installed axios
- CORS - install cors in backend => add middleware to with configurations: origin, credentials:true
- Whenever you are making an API call please pass , axios => {withCredentials:true} (at Front-end code)
- Installed Redux-toolkit
- Read the Redux-toolkit Doc
- Install react-redux + @reduxjs/toolkit => configureStore => Provider => createSlice => add reducer to store
- Add redux devtools in chrome
- Login and see if your data coming properly in the store
- NavBar should update as soon as user logs in
- Refactor code and add constants file + create a components folder
- You should not be access other routes without login
- If token is not present, redirect user to login page
- Logout
- Get the feed and add the feed in the store
- Build userCard on feed
- Edit Profile feature
- Show Toast Message on save of profile
- New Page - See all my connections
- New Page - See all my Connectons Requests
- Feat. - Accept/Reject Connection Request
- Send/Ignore the user card from feed
- Modify the BASE_URL in frontend project to "/api"

## Deployment

- Signup on AWS
- Launch instance
- chmod 400 <secret key>
- ssh -i "devTinder-secret.pem" ubuntu@ec2-18-191-107-217.us-east-2.compute.amazonaws.com
- Install Node version 18.4.0
- Git Clone of the Front/Back-end
- went to front end folder
- Front-end
  - installed the dependecies npm i
  - npm run build
  - sudo apt update - to update the system
  - sudo apt install nginx
  - sudo systemctl start nginx
  - sudo systemctl enable nginx
  - Copy code from dist(build files) to /var/www/html/
  - sudo scp -r dist/\* /var/www/html/
  - Enable port: 80 on your instance
- Back-end

  - Fixed local ip for mongo compass
  - Allowed ec2 instance public IP on mongodb server
  - npm install pm2 -g
  - pm2 start npm --name "customNameOfTheProject" -- start
  - pm2 logs -> when you run into problems then run this command
  - pm2 flush <name of the process> ->
  - pm2 list
  - pm2 stop <name of the process>
  - pm2 delete <name of the process>
  - config nginx - /etc/nginx/sites-available/default
  - restart nginx => sudo systemctl restart nginx
  -

  -

## Remaining:

    Front-End = domainaddress/
    Back-End = domainaddress:7777/

    Domain name = devtinder.com => domainaddress

    Frontend = devTinder.com
    BackEnd = devTinder.com:7777 => devTinder.com/api


    nginx config:

    server_name 18.191.107.217;

    location /api/ {
        proxy_pass http://localhost:7777/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
