// set up dependencies

const express = require("express");
const path = require("path");

// set up express app

const app = express();
const PORT = process.env.PORT || 3000;

// array to hold reservation data

const reservationsArray = [
  // sample reservation
  {
    name: "Stephen",
    phone: "000-000-0000",
    email: "email@email.com",
    uniqueid: "1001",
  },
];

// route to send user to the home page

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "home.html")));

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));

// displays all reservations

app.get("/api/reservations", (req, res) => res.json(reservationsArray));

// create new reservation - takes in JSON input

app.post('/api/reservations', (req, res) => {

    const newReservation = req.body;
    console.log(newReservation);

})

// starts the server to being listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
