const {User} = require('../DB_connection');

const postUser = async(req,res) => {
    const {name, lastname, email, password} = req.body;
 try {
    if(!name || !lastname || !email || !password) return res.status(400).send('missing data')
    const [user, isCreated]= await User.findOrCreate({
        where: {
            name: name,
            lastname: lastname,
            email: email,
            password: password,
        }
    })
    res.status(201).send({user, created: isCreated});
 } catch (error) {
    res.status(500).json({error: error.message})
 }
}

module.exports= postUser;
