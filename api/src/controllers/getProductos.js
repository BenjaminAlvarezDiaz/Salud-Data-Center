const { Productos, Tipo, Categoria } = require ("../db.js"); // Ajusta la ubicación de tus modelos

// Controlador para obtener todos los usuarios
async function getProductos(req, res) {
  try {
    const productos = await Productos.findAll();
    res.status(200).json(productos);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).send('Error al obtener productos');
  }
}

// Controlador para obtener todos los posts
const getTipo = async (req, res) => {
  // ????name   localhost:4000/empresas?name=gustavo
  //

  if (req.query.id) {
      console.log(req.query.id)  //id = 6
      const data = await getTipoID(req.query.id)   //empresa o un false
      if (data) {
          return res.json(data)
              }else {
                  return res.status(404).json({message: 'El id no existe en db'})
              }
  }

 

  try 
  { 
      
   const tipo = await Tipo.findAll()
   res.json(tipo)

  } catch (error) {
   return res.status(500).json({message: error.message})
  }
}


const getTipoID = async (id) => {
   
        
  const tipo = await Tipo.findAll({
      where: {
          id,
      }
  })
  return tipo.length?tipo:false   

} 


// Controlador para obtener todas las categorías
async function getCategoria(req, res) {
  try {
    const categorias = await Categoria.findAll();
    res.status(200).json(categorias);
  } catch (error) {
    console.error('Error al obtener categorías:', error);
    res.status(500).send('Error al obtener categorías');
  }
}

module.exports = { getProductos, getTipo, getCategoria, getTipoID };
