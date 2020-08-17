import { createContext }    from "react"



const initTransactions = [

    {amount: 500, desc: "Cash"},
    {amount: -40, desc: "Book"},
    {amount: -2000, desc: "Camera"},
]


export const TransactionContext = createContext(initTransactions)






