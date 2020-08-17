import { createContext, useReducer }    from "react"

import TransactionReducer from './transReducer';



const initTransactions = [

    {amount: 500, desc: "Cash"},
    {amount: -40, desc: "Book"},
    {amount: -2000, desc: "Camera"},
]


export const TransactionContext = createContext(initTransactions)



export const TransactionProvider = ({}) => {
    let [state, dispatch] = useReducer(TransactionReducer, initTransactions)
}


