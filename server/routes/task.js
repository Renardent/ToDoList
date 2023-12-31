const Router = require('express');
const TaskController = require('../controllers/task.controller');
const taskRouter = Router();
const {checkToken} = require('../middlewares/checkToken');

taskRouter.post('/', TaskController.createUserTask); 
taskRouter.get('/:userId', TaskController.getAllUserTasks); 
taskRouter.post('/', checkToken, TaskController.createUserTask); 
taskRouter.get('/', checkToken, TaskController.getAllUserTasks); 


module.exports = taskRouter;