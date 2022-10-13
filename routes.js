const contactController = require('./userController');
const router = require('express').Router();

// routes
router.get('/', (req, res) => {
    res.send("hello world");
});

//post routes
// router.post('/signup', (req, res) => {
//     res.send({ message: "this is the signup page!" });
// });

router.post('/signin', (req, res) => {
    res.json({ message: "this is the signin page!" });
});

// Contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);
router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);


module.exports = router