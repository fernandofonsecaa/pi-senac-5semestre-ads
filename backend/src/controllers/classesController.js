const connection = require('../database/connection');
module.exports = {
    async index (request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection('classes').count()

        const classes = await connection('classes')
        .join('teachers', 'teachers.id', '=', 'classes.teacher_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select([
            'classes.*', 
            'teachers.name', 
            'teachers.email', 
            'teachers.whatsapp', 
            'teachers.city', 
            'teachers.uf'
        ]);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(classes);

},
    async create(request,response){
        const { title, description, value } = request.body;
        const teacher_id = request.headers.authorization;

        const [id] = await connection('classes').insert({
            title,
            description,
            value,
            teacher_id
        });
        return response.json({ id })
    },

    async delete (request, response) {
        const { id } = request.params;
        const teacher_id = request.headers.authorization;

        const classes = await connection('classes')
        .where('id', id)
        .select('teacher_id')
        .first();

        if (classes.teacher_id !== teacher_id){
            response.status(401).json({error : 'Operation not allowed.'});
        }

        await connection('classes').where('id', id).delete();
        return response.status(204).send();
    }
};