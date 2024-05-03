const express = require('express')
const cors = require('cors')
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
require('dotenv').config();
const db = require("./models");
const User = db.user;

const app = express()

var corOption = {
    origin: '*'
}

//middlewar
app.use(cors(corOption))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//routers


const routerPokemon = require('./routes/pokemonRouter')
const routerUser = require('./routes/userRouter')
const routerInventaire = require('./routes/inventaireRouter')
app.use('/api/pokemon', routerPokemon)
app.use('/api/user', routerUser)
app.use('/api/inventaire', routerInventaire)


// Register
app.post("/api/register", async(req, res) => {

    // Our register logic starts here
    try {
        // Validate user input
        if (!(req.body.email && req.body.password && req.body.pseudo)) {
            res.status(400).send("All input is required");
        }

        // check if user already exist
        // Validate if user exist in our database
        emailer = req.body.email
        const oldUser = await User.findOne({ where: { email: req.body.email } });

        if (oldUser) {

            return res.status(409).send("User Already Exist. Please Login");
        }

        //Encrypt user password
        encryptedUserPassword = await bcrypt.hash(req.body.password, 10);

        // Create user in our database
        let info = {
            email: req.body.email.toLowerCase(),
            pseudo: req.body.pseudo,
            password: encryptedUserPassword,

        };

        const user = await User.create(info);

        // Create token
        const token = jwt.sign({ user_id: user._id, emailer },
            process.env.TOKEN_KEY, {
                expiresIn: "12h",
            }
        );
        // save user token
        user.token = token;

        // return new user
        res.status(201).json(token);
    } catch (err) {
        console.log(err);
    }
    // Our register logic ends here
});

// Login
app.post("/api/login", async(req, res) => {

    // Our login logic starts here
    try {
        emailer = req.body.email
        password = req.body.password

        // Validate user input
        if (!(req.body.email && req.body.password)) {
            return res.status(401).send("All input is required");
        }

        // Validate if user exist in our database
        const users = await User.findOne({ where: { email: emailer } });








        if (bcrypt.compareSync(password, users.password)) {
            // Create token
            const token = jwt.sign({ user_id: users._id, emailer },
                process.env.TOKEN_KEY, {
                    expiresIn: "5h",
                }
            );

            return res.status(200).json(token);
        } else {
            return res.status(401).send("mauvais identifiants")
        }


        // Our login logic ends here
    } catch (err) {
        return res.status(401).send(err);
    }
});


//testing api

app.get('/', (req, res) => {
    res.json({ message: 'hello from api' })
})

//port
const PORT = process.env.PORT || 8081

//server
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT} GG`)
})