import {Router} from "express"
const ExpenseRouter = Router()
import {getAll, getOne, createOne, updateOne, deleteOne, filterAll} from "../controllers/expenses.controller.js"
ExpenseRouter.get("/search", filterAll)
ExpenseRouter.get("/", getAll)
ExpenseRouter.get("/:id", getOne)
ExpenseRouter.post("/",createOne)
ExpenseRouter.put("/:id", updateOne)
ExpenseRouter.delete("/:id", deleteOne)


export default ExpenseRouter
