const { Product, Type, Category } = require ("../db.js"); // Ajusta la ubicación de tus modelos

// Controlador para obtener todos los usuarios
async function getProducts(req, res) {
  try {
    const productos = await Product.findAll();
    res.status(200).json(productos);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).send('Error al obtener productos');
  }
}

// Controlador para obtener todos los posts
async function getType (req, res) {
  // ????name   localhost:4000/empresas?name=gustavo
  if (req.query.id) {
      console.log(req.query.id);  //id = 6
      const data = await getTypeById(req.query.id);   //empresa o un false
      if (data) {
          return res.json(data)
              }else {
                  return res.status(404).json({message: 'El id no existe en db'})
              }
  }

 

  try 
  { 
      
   const tipo = await Type.findAll();
   res.json(tipo)

  } catch (error) {
   return res.status(500).json({message: error.message})
  }
}


async function getTypeById (id) {
   
        
  const tipo = await Type.findAll({
      where: {
          id,
      }
  })
  return tipo.length?tipo:false   

} 


// Controlador para obtener todas las categorías
async function getCategory(req, res) {
  try {
    const categorias = await Category.findAll();
    res.status(200).json(categorias);
  } catch (error) {
    console.error('Error al obtener categorías:', error);
    res.status(500).send('Error al obtener categorías');
  }
}

module.exports = { getProducts, getType, getCategory, getTypeById };
