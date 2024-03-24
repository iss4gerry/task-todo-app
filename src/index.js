const app = require('./app')
const prisma = require('../prisma/client')

const port = 8000

if(prisma){
    console.log('Connected to Databases')
    app.listen(port, () => {
        console.log(`Running on http://localhost:${port}`)
    })
}
