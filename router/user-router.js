const express = require('express');
const userController = require('../controllers/user-controller');
const { auth } = require('../middlewares/auth');

const userRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Operations related to users
 */

/**
 * @swagger
 * /users/registration:
 *   post:
 *     summary: User registration
 *     tags: [Users]
 *     description: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User successfully registered
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *                   description: Access token received from the server
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IndvdF9rb25vdG9wQHVrci5uZXQiLCJpZCI6IjY2MzYzMzYxYWQ3MzA1MzZhMTg1NWI1MSIsImlzQWN0aXZhdGVkIjpmYWxzZSwiaWF0IjoxNzE0ODI4MTMyLCJleHAiOjE3MTQ4MjgxNDd9.mUtKjXXvm5A3xMCu6sPs5DyWbJXm520UxFIux3uzWE8",
 *                 refreshToken:
 *                   type: string
 *                   description: Refresh token received from the server
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IndvdF9rb25vdG9wQHVrci5uZXQiLCJpZCI6IjY2MzYzMzYxYWQ3MzA1MzZhMTg1NWI1MSIsImlzQWN0aXZhdGVkIjpmYWxzZSwiaWF0IjoxNzE0ODI4MTMyLCJleHAiOjE3MTc0MjAxMzJ9.9CUrUXyFo6jkEfsXW9nnwJ7vrqNs0CQE79QrZlNr_sk
 *                 user:
 *                   type: object
 *                   properties:
 *                     email:
 *                       type: string
 *                       format: email
 *                       description: The email address of the user
 *                       example: test@test.com
 *                     _id:
 *                       type: string
 *                       description: Identifier received from the server
 *                       example: 663a132951c79c45833675fa
 *                     isActivated:
 *                       type: boolean
 *                       description: current activation status of the user
 *                       example: false
 *       400:
 *         description: Bad Request. User is already exist
 *       5XX:
 *         description: Unexpected error
 *
 */

/**
 * @swagger
 * /users/activation/{link}:
 *   get:
 *     summary: User activation
 *     tags: [Users]
 *     description: Activate a user account using the provided activation link.
 *     parameters:
 *       - in: path
 *         name: link
 *         schema:
 *           type: string
 *         required: true
 *         description: The activation link for the user.
 *     responses:
 *       200:
 *         description: User account activated successfully. As a response server redirect the user to the client page and set isActivated field as true
 *       400:
 *         description: Bad Request. Wrong activation link
 *       5XX:
 *         description: Unexpected error
 */

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: User login
 *     tags: [Users]
 *     description: Authenticate a user using email and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The email address of the user
 *                 example: test@test.com
 *               password:
 *                 type: string
 *                 description: The password of the user.
 *                 example: Smith@123
 *     responses:
 *       200:
 *         description: User logged in successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *                   description: Access token received from the server
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IndvdF9rb25vdG9wQHVrci5uZXQiLCJpZCI6IjY2MzYzMzYxYWQ3MzA1MzZhMTg1NWI1MSIsImlzQWN0aXZhdGVkIjpmYWxzZSwiaWF0IjoxNzE0ODI4MTMyLCJleHAiOjE3MTQ4MjgxNDd9.mUtKjXXvm5A3xMCu6sPs5DyWbJXm520UxFIux3uzWE8",
 *                 refreshToken:
 *                   type: string
 *                   description: Refresh token received from the server
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IndvdF9rb25vdG9wQHVrci5uZXQiLCJpZCI6IjY2MzYzMzYxYWQ3MzA1MzZhMTg1NWI1MSIsImlzQWN0aXZhdGVkIjpmYWxzZSwiaWF0IjoxNzE0ODI4MTMyLCJleHAiOjE3MTc0MjAxMzJ9.9CUrUXyFo6jkEfsXW9nnwJ7vrqNs0CQE79QrZlNr_sk
 *                 user:
 *                   type: object
 *                   properties:
 *                     email:
 *                       type: string
 *                       format: email
 *                       description: The email address of the user
 *                       example: test@test.com
 *                     _id:
 *                       type: string
 *                       description: Identifier received from the server
 *                       example: 663a132951c79c45833675fa
 *                     isActivated:
 *                       type: boolean
 *                       description: current activation status of the user
 *                       example: false
 *       400:
 *         description: Bad Request. Wrong password or email
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message
 *                   example: The user with such email was not found OR Invalid Password
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: string
 *       5XX:
 *         description: Unexpected error
 */

/**
 * @swagger
 * /users/logout:
 *   post:
 *     summary: User logout
 *     tags: [Users]
 *     description: Log out the current user from the system.
 *     responses:
 *       200:
 *         description: User logged out successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 acknowledged:
 *                   type: boolean
 *                   description: A boolean value indicating whether the operation was successfully acknowledged by the server.
 *                   example: true
 *                 deletedCount:
 *                   type: number
 *                   description: The number of documents deleted from the database as a result of the operation (typically 0 or 1).
 *                   example: 1
 *       5XX:
 *         description: Unexpected error
 */

/**
 * @swagger
 * /users/refresh:
 *   get:
 *     summary: Refresh access token
 *     tags: [Users]
 *     description: Refresh the access token for the current user.
 *     responses:
 *       200:
 *         description: Access token refreshed successfully.
 */

/**
 * @swagger
 * /users/check-email:
 *   post:
 *     summary: Check if email already exists in the system.
 *     tags: [Users]
 *     description: Check if email already exists in the system.
 *     responses:
 *       200:
 *         description: Information about the existence of email in the system.
 *       5XX:
 *         description: Unexpected error
 */

/**
 * @swagger
 * /users/{userID}:
 *   patch:
 *     summary: Partial user data update.
 *     tags: [Users]
 *     description: Partial user data update.
 *     parameters:
 *       - in: path
 *         name: userID
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID.
 *     responses:
 *       200:
 *         description: Updated user data.
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       5XX:
 *         description: Unexpected error
 */

/**
 * @swagger
 * /users/{userID}/addresses/{type}:
 *   post:
 *     summary: Add address.
 *     tags: [Users]
 *     description: Add address.
 *     parameters:
 *       - in: path
 *         name: userID
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID.
 *       - in: path
 *         name: type
 *         schema:
 *           type: string
 *         required: true
 *         description: Address type (eg. shipping, billing).
 *     responses:
 *       200:
 *         description: Added address.
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       5XX:
 *         description: Unexpected error
 */

/**
 * @swagger
 * /users/{userID}/addresses/{type}/{id}:
 *   delete:
 *     summary: Delete address.
 *     tags: [Users]
 *     description: Delete address.
 *     parameters:
 *       - in: path
 *         name: userID
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID.
 *       - in: path
 *         name: type
 *         schema:
 *           type: string
 *         required: true
 *         description: Address type (eg. shipping, billing).
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Address ID.
 *     responses:
 *       204:
 *         description: No content.
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       5XX:
 *         description: Unexpected error
 */

/**
 * @swagger
 * /users/{userID}/addresses/{type}/{id}:
 *   put:
 *     summary: Update address.
 *     tags: [Users]
 *     description: Update address.
 *     parameters:
 *       - in: path
 *         name: userID
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID.
 *       - in: path
 *         name: type
 *         schema:
 *           type: string
 *         required: true
 *         description: Address type (eg. shipping, billing).
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Address ID.
 *     responses:
 *       200:
 *         description: Updated address.
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       5XX:
 *         description: Unexpected error
 */

userRouter.route('/registration').post(userController.registration);
userRouter.route('/activation/:link').get(userController.activation);
userRouter.route('/login').post(userController.login);
userRouter.route('/logout').post(userController.logout);
userRouter.route('/refresh').get(userController.refresh);
userRouter.route('/check-email').post(userController.checkEmail);
userRouter.route('/:userID').patch(auth, userController.update);
userRouter.route('/:userID/addresses/:type').post(auth, userController.addAddress);
userRouter.route('/:userID/addresses/:type/:id').delete(auth, userController.deleteAddress);
userRouter.route('/:userID/addresses/:type/:id').put(auth, userController.updateAddress);

module.exports = userRouter;
