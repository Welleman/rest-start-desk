import TestModel from '../models/index.js'
import { Op } from 'sequelize'

const log = console.log;
class TestService{
    async getAll(){
        let message = await TestModel.findAll();
        return JSON.stringify(message);
    }
    async getId(id){
        if(!id) throw new Error("Id не указан")
        let message = await TestModel.findOne({where: {id: id}});
        return JSON.stringify(message);
    }
    async create(test){        
        let message = {"message":`${JSON.stringify(test)} created`};
        return JSON.stringify(message);
    }
    async update(id){
        log(id)
        if(!id) throw new Error("Id не указан")
        let message = {"message":`test updated`};
        return JSON.stringify(message);
    }
    async delete(id){
        if(!id) throw new Error("Id не указан")
        let message = {"message":`test remove`};
        return JSON.stringify(message);
    }
}

export default new TestService();