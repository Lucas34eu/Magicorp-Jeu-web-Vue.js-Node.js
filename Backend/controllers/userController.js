const db = require("../models");

// model
const User = db.user;

//function


// get all user
const getAllUser = async(req, res) => {
    const users = await User.findAll();
    if (users.length === 0) {
        res.status(400).send("Aucun users a afficher");

    } else {
        res.status(200).send(users);
    }

};
//deleteuser

const deleteUser = async(req, res) => {
    let id = req.params.id;
    let user = await User.findOne({ where: { id: id } });

    if (user) {
        await User.destroy({ where: { id: id } });
        res.status(200).send("user deleted GG");
    } else {
        res.status(400).send(`Aucun user trouvé. Suppresion annulé`);
    }
};

const PutUser = async(req, res) => {

    let id = req.params.id;
    let user = await User.findOne({ where: { id: id } });

    if (user) {
        const users = await User.update({ email: req.body.email }, { pseudo: req.body.pseudo }, { password: req.body.password }, { where: { id: id } });
        res.status(200).send(users);
    } else {
        res.status(400).send(`Aucun user a modif pour ${id}`);
    }
};

const ChangeMoneyfor1User = async(req, res) => {

    let id = req.params.id;
    let user = await User.findOne({ where: { id: id } });

    if (user) {
        const users = await User.update({ money: req.body.money }, { where: { id: id } });
        res.status(200).send(users);
    } else {
        res.status(400).send(`Aucun user a modif pour ${id}`);
    }
};


module.exports = {
    getAllUser,
    deleteUser,
    PutUser,
    ChangeMoneyfor1User
};