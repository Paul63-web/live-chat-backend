const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const cors = require('cors');

app.use(cors({origin: "http://localhost:5430"}));

const { newUser } = require('./controllers/register');

const { login } = require('./controllers/login');

const { validateUser } = require('./middleware/middleware');

const { getUserDetails } = require('./controllers/user-details');

const { userProfile } = require('./controllers/userProfile');

const { getAllUsers } = require('./controllers/allUsers');

const { userFriends } = require('./controllers/usersFriends');

const { sendRequest } = require('./controllers/send-request');

const { editProfile } = require('./controllers/edit-profile');

app.use("/api/user/", validateUser);

app.use(express.urlencoded({extended:true}));

app.use(express.json());

const PORT = process.env.PORT || 5034;

app.post("/api/account/register", newUser);

app.post("/api/account/login", login);

app.get("/api/user/getUser", getUserDetails);

app.get("/api/user/profile", userProfile);

app.get("/api/user/get-all-users", getAllUsers);

app.get("/api/user/users-friends", userFriends);

app.post("/api/user/send-request", sendRequest);

app.post("/api/user/edit-profile", editProfile)

app.listen(PORT, ()=> {
    console.log("App is now running on port " + PORT);
})