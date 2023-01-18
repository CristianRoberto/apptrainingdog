const { Pool } = require('pg');

//creo clientePool y me conecto a la base de datos postgrets
const pool = new Pool({
    user: 'crgp',
    host: '127.0.0.1',
    database: 'bd_usuarios',
    password: 'gilcespanta1994',
    port: 5432,
    ssl: process.env.DATABASE_SSL === `true`
});

const defectoUsers = async (req, res) => {
        res.send('Este es el metodo get por defecto!');
     
};

const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM users ORDER BY id ASC');
    res.status(200).json(response.rows);
    console.log(response.rows);
};

const login = async (req, res) => {
    //console.log("login");
    const usuario= (req.query.usuario);
    const password=(req.query.password);
    console.log(usuario);
    console.log(password);
    const response = await pool.query('SELECT * FROM users WHERE correoelectronico = $1 and password = $2 ',[usuario, password]);
    res.status(200).json(response.rows);
    console.log(response.rows);

}

   
const getUserById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(response.rows);
};

//crear  nuevo Usuario
const createUser = async (req, res) => {
    const {cedula,correoelectronico, nombre, apellidos, direccion, telefono, password,foto } = req.body;
    const response = await pool.query('INSERT INTO users ( cedula, correoelectronico, nombre, apellidos, direccion, telefono, password, foto ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [cedula, correoelectronico, nombre, apellidos, direccion, telefono, password, foto]);
    //res.json(response.rows);
    //console.log(response);
   res.json({
       message: 'Se creo un nuevo usuario',
        body: {
          user: {cedula, correoelectronico, nombre, apellidos, direccion, telefono, password, foto}
        }
    })
    console.log("se creo el nuevo usuario en la base de datos");
};

//Actualizar Usuarios
const updateUser = async (req, res) => {
    const id = parseInt(req.params.id);
    const { cedula, correoelectronico, nombre, apellidos, direccion, telefono, password,foto } = req.body;
    const response =await pool.query('UPDATE users SET id = $1, cedula = $2,  correoelectronico = $3, nombre = $4, apellidos = $5, direccion = $6, telefono = $7, password = $8 , foto = $9 WHERE id = $1',
     [
        cedula,
        correoelectronico,
        nombre,
        apellidos,
        direccion,
        telefono,
        password,
        foto
        ]);
    res.json('Se actualizaron correctamente los datos');
};


//eliminar usuario por Id
const deleteUser = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM users where id = $1', [
        id
    ]);
    res.json(`Usuario ${id} eliminado Correctamente`);
};




//ControlerMascotas
const getMascotas = async (req, res) => {
    const response = await pool.query('SELECT * FROM mascotas ORDER BY id ASC');
    res.status(200).json(response.rows);
    console.log(response.rows);     
};

const getMascotasById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM mascotas WHERE id = $1', [id]);
    res.json(response.rows);
};

const createMascotas = async (req, res) => {
    const { foto, nombreraza, color, edad, estatura, vacunas, descripcion } = req.body;
    const response = await pool.query('INSERT INTO mascotas ( foto, nombreraza, color, edad, estatura, vacunas, descripcion ) VALUES ($1,$2,$3,$4,$5,$6,$7)', [  foto, nombreraza, color, edad, estatura, vacunas, descripcion  ]);
    //res.json(response.rows);
   res.json({
       message: 'Se registro mascota',
        body: {
          user: { foto, nombreraza, color, edad, estatura, vacunas, descripcion }
        }
    })
    console.log("se guardo la mascota");
};

const updateMascotas = async (req, res) => {
    const id = parseInt(req.params.id);
    const { foto, nombreraza, color, edad, estatura, vacunas, descripcion} = req.body;
    const response =await pool.query('UPDATE mascotas SET id = $1, foto = $2, nombreraza = $3, color = $4, edad = $5, estatura = $6 , vacunas = $7, descripcion = $8 WHERE id = $1', [
        id,
        foto,
        nombreraza,
        color,
        edad,
        estatura,
        vacunas,
        descripcion       
    ]);
    res.json('Se actualizaron correctamente los datos');
};

const deleteMascotas = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM mascotas where id = $1', [
        id
    ]);
    res.json(`Mascota ${id} eliminado Correctamente`);
};








//ControlersReportesAbandonoMascotas
const reportesMascotas = async (req, res) => {
    const { foto, ubicacion, descripcion, raza, telefono, pass} = req.body;
    const response = await pool.query('INSERT INTO reporteabandono (foto, ubicacion, descripcion, raza, telefono, pass) VALUES ($1, $2, $3, $4, $5, $6)', [ foto, ubicacion, descripcion, raza, telefono, pass  ]);
    //res.json(response.rows);

   res.json({
       message: 'Se registro Reporte de Abandono',
        body: {
          user: {foto, ubicacion, descripcion, raza, telefono, pass }
        }
    })
    console.log("se guardo la mascota");
};

module.exports = {
    defectoUsers,
    getUsers,
    getUserById,
    login,
    createUser,
    updateUser,
    deleteUser,
    getMascotas,
    getMascotasById,
    createMascotas,
    reportesMascotas,
    updateMascotas,
    deleteMascotas
};