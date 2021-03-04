const log = console.log;
import TestService from '../services/TestService.js'

class TestController{
    async getAll(req, res){
        try {
            res.json(await TestService.getAll())
        } catch (error) {
            res.status(500).json(error.message)
        }        
    }

    async getId(req, res){
        try {
            const result = await TestService.getId(req.params.id);
            res.json(result)
        } catch (error) {
            res.status(500).json(error.message)
        }        
    }
    async create(req, res){
        try {
            const result = await TestService.create(req.body);
            res.json(result)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    async update(req, res){
        try {
            const result = await TestService.update(req.params.id);
            res.json(result)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    async delete(req, res){
        try {
            const result = await TestService.getId(req.params.id);
            res.json(result)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}

export default new TestController();