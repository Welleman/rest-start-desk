import Router from 'express';
const router = new Router();

router.get('/', (req, res)=>{
    res.json({"message":"main page api"})
})

router.get('/help', (req, res)=>{
    res.json({"message":"main page help api"})
})

export default router;