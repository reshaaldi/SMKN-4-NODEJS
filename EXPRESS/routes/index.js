const express = require ('express');
const router = express.Router();

const { getAll, create } = require ('../controllers/index') 

router.get('/', (req, res) => {
    res.send('hallo bang!');
});

router.get('/getAll', getAll);
router.post('/create', create);

module.exports = router;