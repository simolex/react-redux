import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addCustomerAction, removeCustomerAction } from "./store/customerReducer";
import { fetchCustomers } from "./asyncActions/customers";

function App() {
    const dispatch = useDispatch();
    const cash = useSelector((state) => state.cash.cash);
    const customers = useSelector((state) => state.customers.customers);

    const addCash = (cash) => {
        dispatch({ type: "ADD_CASH", payload: cash });
    };

    const getCash = (cash) => {
        dispatch({ type: "GET_CASH", payload: cash });
    };

    const addCustomer = (name) => {
        const customer = { id: Date.now(), name };
        dispatch(addCustomerAction(customer));
    };

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id));
    };

    return (
        <div
            className='App'
            style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
            <div style={{ fontSize: "3rem" }}>{cash}</div>
            <div style={{ display: "flex" }}>
                <button onClick={() => getCash(+prompt())}>Снять со счета</button>
                <button onClick={() => addCash(+prompt())}>Пополнить счет</button>
                <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
                <button onClick={() => dispatch(fetchCustomers())}>Загрузить клиентов из БД</button>
            </div>
            {customers.length > 0 ? (
                <div>
                    {customers.map((customer) => (
                        <div
                            key={customer.id}
                            onClick={() => removeCustomer(customer)}
                            style={{
                                fontSize: "2rem",
                                border: "1px solid black",
                                padding: "10px",
                                margin: "5px",
                            }}
                        >
                            {customer.name}
                        </div>
                    ))}
                </div>
            ) : (
                <div style={{ fontSize: "2rem" }}>Клиенты отсутствуют</div>
            )}
        </div>
    );
}

export default App;
