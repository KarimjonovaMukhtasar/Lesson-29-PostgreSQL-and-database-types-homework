import express from "express"
import ExpenseRouter from "./routes/expenses.router.js"

const app = express()

app.use(express.json())
app.use("/expenses", ExpenseRouter)
app.listen(3000, ()=>{
    console.log("The server is running successfully!")
})
