const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('get post api sample ', req);
});

router.post('/', (req, res) => {
    console.log(req.body.contents);
    return res.json({
        success: true
    });
});

router.get('/:id', (req, res) => {
    console.log('reading post ', req.params.id);
    return res.json({
        index: req.params.id
    });
});

module.exports = router;
