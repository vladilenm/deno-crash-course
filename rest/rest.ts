import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import {router} from './router.ts'

const port = 5000

const app = new Application()

app.use(router.routes())

console.log(`App has been started on port ${port}...`)
await app.listen({ port })
