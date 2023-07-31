const connection = require('../database/connection');
module.exports = { 
    async create(request, response) {
        const { id } = request.body;

        const teacher = await connection('teachers')
        .where('id', id)
        .select('name')
        .first();

        if (!teacher){
            return response.status(400).json({ error: 'No teacher found with this ID' });
        }

        return response.json(teacher);
    }
}