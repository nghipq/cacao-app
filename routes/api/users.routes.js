const router = require('express').Router();

const {
    test,
    user,
    allUsers,
    userById,
    modifyUserById,
    deleteUserById
} = require('../../controller/users.controller');

const {    
    checkToken    
} = require('../../middleware/auth.middleware');
const {        
    protectedRoute
} = require('../../middleware/users.middleware');

// @route   GET /api/users/test
// @desc    Test route
// @access  Public
router.get('/test', test);

// @route   GET /api/users
// @desc    Get current user
// @access  Private
router.get(
    ''
    , checkToken 
    , user);

// @route   GET /api/users/all
// @desc    Get all users
// @access  Private
router.get(
    '/all'    
    , checkToken
    , allUsers);

// @route   GET /api/users/:id
// @desc    Get user by id
// @access  Public
router.get(
    '/:id'    
    , userById);

// @route   PATCH /api/users/:id
// @desc    Modify user by id
// @access  Private
router.patch(
    '/:id'
    , checkToken, protectedRoute
    , modifyUserById);

// @route   DELETE /api/users/:id
// @desc    Delete user by id
// @access  Private
router.delete(
    '/:id'
    , checkToken, protectedRoute
    , deleteUserById);

module.exports = router;