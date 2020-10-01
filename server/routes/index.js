import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(process.cwd() + '/views/index');
});

export default router;
