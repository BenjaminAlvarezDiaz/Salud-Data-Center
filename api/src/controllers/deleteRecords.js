const { Record } = require("../db.js");

async function deleteRecords (){
    try {
        
    } catch (error) {
        console.error("Error al eliminar el pedido:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
}