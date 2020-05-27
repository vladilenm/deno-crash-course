import { Router } from "https://deno.land/x/oak/mod.ts";
import {getUsers, getUser, createUser, updateUser, removeUser} from './controller.ts'

const router = new Router()

router
  .get('/api/users', getUsers)
  .get('/api/users/:id', getUser)
  .post('/api/users', createUser)
  .put('/api/users/:id', updateUser)
  .delete('/api/users/:id', removeUser)

export {router}