const express = require ('express');
const router = express.Router();

const { getAll, create, getId, update, hapus } = require ('../controllers/index') 

router.get('/', (req, res) => {
    res.send('hallo bang!');
});

router.get('/getAll', getAll);
router.post('/create', create);
router.get('/getid/:id', getId);
router.put('/update/:id', update);
router.delete('/hapus/:id', hapus);

module.exports = router;