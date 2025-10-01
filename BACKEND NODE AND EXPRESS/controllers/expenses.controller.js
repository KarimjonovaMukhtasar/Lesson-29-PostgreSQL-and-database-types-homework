// import {getAll, getOne, createOne, updateOne, deleteOne, filterAll} from "./controllers/expenses.controller.js"
import pkg from "pg"
const { Pool } = pkg
const client = new Pool({
    user: "postgres",
    password: "root",
    host: "localhost",
    database: "expenses",
    port: 5432

})
const createOne = async (req, res) => {
    try {
        const { category, amount, description } = req.body
        if (category && amount && description) {
            const newExpense = await client.query(
                "INSERT INTO expenses (category, amount, description) VALUES($1, $2, $3) RETURNING *", [category, amount, description]
            )
            console.log(newExpense.rows[0]);
            res.status(201).json({
                message: `Successfully added a new expense!`,
                expense: newExpense.rows[0]
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error" });
    }
}
const getAll = async (req, res) => {
    try {
        const allExpenses = await client.query(
            'Select * from expenses;'
        )
        console.log(allExpenses.rows);
        res.status(200).json({
            message: `Successfully retrieved all expenses`,
            expenses: allExpenses.rows
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error" });
    }
}
const getOne = async (req, res) => {
    try {
        const { id } = req.params
        const query = `Select * from expenses where id = $1`
        const searchedId = await client.query(query, [id])
        if (searchedId.rows.length === 0) {
            res.status(404).json({ message: `Not found such an id of an expense ${id}` })
        }
        res.status(200).json({
            message: `Successfully delivered an expense`,
            expense: searchedId.rows[0]
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: "Server error" });
    }
}
const updateOne = async (req, res) => {
    try {
        const { id } = req.params
        const { category, amount, description } = req.body
        const fields = []
        const values = []

        if (category) {
            fields.push(`category = $${fields.length + 1}`)
            values.push(category)
        }
        if (amount) {
            fields.push(`amount= $${fields.length + 1}`)
            values.push(amount)
        }
        if (description) {
            fields.push(`description= $${fields.length + 1}`)
            values.push(description)
        }
        if (fields.length === 0) {
            res.status(401).json({ message: "Bad request please enter what you want to change!" })
        }
        values.push(id)
        const query = `Update expenses Set ${fields.join(", ")} where id = $${values.length} RETURNING *`
        const updatedId = await client.query(query, values)
        if (updatedId.rows.length === 0) {
            res.status(404).json({ message: `Not found such an id of an expense ${id}` })
        }
        res.status(200).json({
            message: `Successfully updated an expense`,
            expense: updatedId.rows[0]
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: "Server error" });
    }
}
const deleteOne = async (req, res) => {
    try {
        const { id } = req.params
        const query = `delete from expenses where id = $1 returning *`
        const searchedId = await client.query(query, [id])
        if (searchedId.rows.length === 0) {
            res.status(404).json({ message: `Not found such an id of an expense ${id}` })
        }
        res.status(200).json({ message: `Successfully deleted an expense!` })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: "Server error" });
    }
}
const filterAll = async (req, res) => {
    try {
        const { page = 1, limit = 10, filter = "" } = req.query
        console.log(filter)
        if (filter) {
            const offset = (page - 1) * limit
            const values = [`%${filter}%`, offset, limit];
            const query = `Select * from expenses where category ilike $1 or description ilike $1 offset $2 limit $3`
            const allExpenses = await client.query(query, values)
            console.log(allExpenses.rows);
            if (allExpenses.rows.length === 0) {
                res.status(404).json({
                    message: `Not found such a filtered expense!`,
                    filter: filter
                })
            }
            res.status(200).json({
                page: Number(page),
                limit: Number(limit),
                total: allExpenses.rows.length,
                expenses: allExpenses.rows
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error" });
    }
}

export { getAll, createOne, getOne, updateOne, deleteOne, filterAll }


