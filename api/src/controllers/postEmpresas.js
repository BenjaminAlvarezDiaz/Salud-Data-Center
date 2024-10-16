const { Company } = require ("../db.js");

//Crear projecto

async function createCompany (req, res) {
    const {name, nombreusuario, contrasena, contact, logo, url} = req.body

try {

    const newCompany = await Company.create({
        name,
        nombreusuario,
        contrasena,
        contact,
        logo,
        url,

    })

res.json(newCompany)

} catch (error) {
    
    return res.status(500).json({message: error.message})

}

}

module.exports = {createCompany}