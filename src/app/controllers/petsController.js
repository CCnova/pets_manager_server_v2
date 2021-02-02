const database = require('../../database/db');

module.exports = {

  getPets: async (req, res) => {
    const queryResult = await database.query('SELECT * FROM pet');
    
    return res.status(200).send({
      Pets: queryResult.rows
    });
  },

  getPet: async (req, res) => {
    const queryResult = await database.query(`SELECT * FROM pet WHERE id IN (${req.params.petId})`);

    return res.status(200).send({
      Pet: queryResult.rows
    });
  },

  createPet: async (req, res) => {
    const queryResult = await database.query(
      `INSERT INTO pet (name, owner_id) VALUES ($1, $2) RETURNING *;`, [req.body.name, req.body.ownerId]
    );

    return res.status(200).send({
      Pet: queryResult.rows[0]
    });
  },

  updatePet: async (req, res) => {
    const query = {
      text: `UPDATE pet SET name = $1, owner_id = $2 WHERE id IN (${req.params.petId}) RETURNING *;`,
      values: [req.body.name, req.body.ownerId]
    };

    const queryResult = await database.query(query);

    return res.status(200).send({
      Pet: queryResult.rows[0]
    });
  }
};