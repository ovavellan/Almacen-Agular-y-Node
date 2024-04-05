const express = require('express');
const router = express.Router();
var getConnection = require('../conexion')

//Consultar electrodomestico por código
router.get('/electrodomestico/:codigo', (req, res) => {
    getConnection(function(err, conn) {
        if (err) {
            return res.sendStatus(400);
        } else {
            const { codigo } = req.params;
            conn.query('SELECT * FROM electrodomestico WHERE codigo = ?',
                [codigo], function(err, rows) {
                    if (err) {
                        conn.release();
                        return res.json().status(400).send('No se puede conectar a la base de datos');
                    } else {
                        res.send(rows);
                        conn.release();
                    }
                });
        }
    });
});

//Consultar electrodomestico por id
router.get('/electrodomestico/getById/:id', (req, res) => {
    getConnection(function(err, conn) {
        if (err) {
            return res.sendStatus(400);
        } else {
            const { id } = req.params;
            conn.query('SELECT * FROM electrodomestico WHERE id = ?',
                [id], function(err, rows) {
                    if (err) {
                        conn.release();
                        return res.json().status(400).send('No se puede conectar a la base de datos');
                    } else {
                        res.send(rows);
                        conn.release();
                    }
                });
        }
    });
});

//consultar todos los datos del elestrodoméstico con menos de 10 unidades en stock
router.get('/electrodomesticosMenosDiez', (req, res) => {
    getConnection(function(err, conn) {
        if (err) {
            console.log("No se puede conectar a la Base de Datos")
        } else {
            conn.query('SELECT * FROM electrodomestico Where cantidad_unidades < 10 and cantidad_unidades !=0', function(err, rows){
                if (err) {
                    conn.release();
                    console.log(err);
                } else {
                    res.send(rows);
                    conn.release();
                }

            });
        }
    });
});

//consultar todos los datos del elestrodoméstico con 0 unidades en stock
router.get('/electrodomesticosCero', (req, res) => {
    getConnection(function(err, conn) {
        if (err) {
            console.log("No se puede conectar a la Base de Datos")
        } else {
            conn.query('SELECT * FROM electrodomestico Where cantidad_unidades = 0', function(err, rows){
                if (err) {
                    conn.release();
                    console.log(err);
                } else {
                    res.send(rows);
                    conn.release();
                }

            });
        }
    });
});

// Actualizar un electrdoméstico por ID
router.put('/electrodomestico/update/:id', (req, res) => {
    const { id } = req.params;
    const data = {
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        marca: req.body.marca,
        modelo: req.body.modelo,
        fecha_elaboracion: req.body.fecha_elaboracion,
        cantidad_unidades: req.body.cantidad_unidades
    };
    const query = `UPDATE electrodomestico SET codigo = ?, nombre = ?, marca = ?,
            modelo = ?, fecha_elaboracion = ?, cantidad_unidades = ? WHERE id = ?`;
    getConnection(function(err, conn) {
        if (err) {
            console.log("No se puede conectar a la Base de Datos");
            res.status(500).json({ error: 'Error de conexión a la base de datos' });
        } else {
            conn.query(query, [data.codigo, data.nombre, data.marca,
                    data.modelo, data.fecha_elaboracion, data.cantidad_unidades, id],
                function(err, result) {
                    if (err) {
                        conn.release();
                        console.log(err);
                        res.status(500).json({ error: 'Error al actualizar el electrodoméstico' });
                    } else {
                        if (result.affectedRows > 0) {
                            res.json({ status: 'Electrodoméstico actualizado exitosamente' });
                        } else {
                            res.status(404).json({ error: 'Electrodoméstico no encontrado' });
                        }
                        conn.release();
                    }
                });
        }
    });
});


module.exports = router;
