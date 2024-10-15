const { Product, Category } = require ("../db.js"); // Ajusta la ubicación de tus modelos


// Controlador para obtener todos los posts
async function getProducts (req, res) {
  // ????name   localhost:4000/empresas?name=gustavo
  if (req.query.id) {
      console.log(req.query.id);  //id = 6
      const data = await getProductsById(req.query.id);   //empresa o un false
      if (data) {
          return res.json(data)
              }else {
                  return res.status(404).json({message: 'El id no existe en db'})
              }
  }

 

  try 
  { 
      
   const products = await Product.findAll();
   res.status(200).json(products);

  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).send('Error al obtener productos');
  }
}


async function getProductsById (id) {
   
        
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

module.exports = { getProducts, getCategory, getProductsById };
