import { connectToDatabase } from "./db/connection.js"
import app from "./app.js"

const PORT = process.env.PORT || 5000

connectToDatabase().then(() => {
  app.listen(PORT, () => console.log('Server listening on port 5000'))
}).catch(error => {
  console.log(error)
})


