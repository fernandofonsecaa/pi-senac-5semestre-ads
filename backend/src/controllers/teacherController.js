const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
		async index (request, response) {
				const teachers = await connection('teachers').select('*');
		
				return response.json(teachers);
		
		},
		
    async create (request, response) {
        const {name, email, whatsapp, city, uf} = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('teachers').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf 
    })

    return response.json({ id });
  }
}