import { Router } from 'express' // Importing the Router from Express framework
import postRoutes from './post.routes' // Importing the post routes
import userRoutes from './user.routes' // Importing the user routes

const router = Router() // Creating an instance of the Express Router

// Use the post routes
router.use('/users', userRoutes) // Mounting the user routes under the '/users' path
router.use('/posts', postRoutes) // Mounting the post routes under the '/posts' path

export default router // Exporting the configured router for use in other modules
