const connection = require("../database/connection");

module.exports = {
    async index(request, response){
     const teacher_id = request.headers.authorization;

     const classes = await connection('classes')
     .where('teacher_id', teacher_id)
     .select('*');

     return response.json(classes);
    }
}