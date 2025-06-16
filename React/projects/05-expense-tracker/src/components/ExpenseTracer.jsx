import { useState, useEffect } from 'react'
import './ExpenseTracker.css'

function ExpenseTracker () {
    //Estados para los campos del formulario
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('comida');

    // Estado para la lista de gastos
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        console.log("El componente ExpenseTracker se ha renderizado");

        const savedExpenses = localStorage.getItem('expenses')

        if(savedExpenses) {
            try {
                const parsedExpenses = JSON.parse(savedExpenses)

                setExpenses(parsedExpenses);

                console.log("Gastos cargados:", parsedExpenses);

            } catch (error) {
                console.error("Error al cargar los gastos", error);
            }
        }

    }, []) // Array vacío = solo se ejecuta una vez 
    // (si estuviera el componente en un componente padre y ese se modifica esto se volvería a ejecutar)

    useEffect(() => {
        console.log("Los gastos han cambiado: ", expenses);

        if (expenses.length > 0) {
            console.log("Guardando gastos en localStorage...")

            const expensesJSON = JSON.stringify(expenses);
            localStorage.setItem('expenses', expensesJSON);
        }
    }, [expenses]);
    // Se ejecuta cada vez que expenses cambia

    const handleChangeDescription = (event) => {
        const valor = event?.target?.value || '';

        if(valor === '') return

        setDescription(valor);
    }

    const handleChangeAmount = (event) => {
        const valor = event?.target?.value || '';

        if(valor === '') return

        setAmount(valor);
    }

    const handleChangeCategory = (event) => {
        const valor = event?.target?.value || '';

        if(valor === '') return

        setCategory(valor);
    }

    const handleSubmit = (event) => {
        // Parar la ejecución del submit
        event.preventDefault();

        if (!description.trim()) {
            alert('Por favor, añade una descripción')
            return;
        }

        
        if (!amount || amount <= 0) {
            alert('Por favor, añade una cantidad válida')
            return;
        }

        // Crear un nuevo gasto
        const newExpense ={
            id: Date.now(),
            description: description.trim(),
            amount: parseFloat(amount),
            category: category, /* O simplemente category, */
            date: new Date().toLocaleDateString('es-ES'),
            time: new Date().toLocaleTimeString('es-ES', {hour: '2-digit', minute: '2-digit'})
        }

        setExpenses(prevExpenses => [newExpense, ...prevExpenses])

        console.log('Nuevo gasto añadido', newExpense);
    }

    const cleanForm = () => {
        setDescription('');
        setAmount('');
        setCategory('');
    }

    return (
        <div className="expense-tracker">
            <header className="header">
                <h1>Control de Gastos</h1>
            </header>
            
            <main className="et-main-content">
                <section className="et-form-section">
                    <h2>Añadir gasto</h2>

                    <form className='et-expense-form' onSubmit={handleSubmit}>
                        <div className='et-form-group'>
                            <label htmlFor='description'> Descripción:</label>
                            <input
                                id='description'
                                className='et-form-input'
                                type='text'
                                placeholder='¿En qué has gastado?'
                                value={description}
                                onChange={(event) => handleChangeDescription(event)}
                            />
                        </div>
                        <div className='et-form-group'>
                            <label htmlFor='amount'> Cantidad (€):</label>
                            <input
                                id='amount'
                                className='et-form-input'
                                type='number'
                                step='0.01'
                                placeholder='0.00'
                                value={amount}
                                onChange={(event) => handleChangeAmount(event)}
                            />
                        </div>
                        <div className='et-form-group'>
                            <label htmlFor='category'> Categoría:</label>
                            <select
                                id='category'
                                className='et-form-select'
                                value={category}
                                onChange={(event) => handleChangeCategory(event)}
                            >
                                <option value='comida'>Comida</option>
                                <option value='transporte'>Transporte</option>
                                <option value='entretenimiento'>Entretenimiento</option>
                                <option value='salud'>Salud</option>
                                <option value='otros'>Otros</option>
                            </select>
                        </div>

                        <button tyoe='submit' className='et-submit-btn'>Añadir Gasto</button>
                    </form>
                </section>

                <section className="et-list-section">
                    <h2>Lista Gastos</h2>

                    {
                        expenses.length === 0 ? (
                            <div className='et-no-expenses'>
                                <p>No hay gastos registrados</p>
                                <p>Usa el formulario de arriba para empezar</p>
                            </div>
                        )
                        :
                        (
                            <div className='et-expenses-list'>
                                {
                                    expenses.map(expense => (
                                        <div key={expense.id} className='et-expense-item'>
                                            <div className='et-expense-info'>
                                                <div className='et-expense-category'>
                                                    {expense.category === 'comida' && '🍕'}
                                                    {expense.category === 'transporte' && '🚌'}
                                                    {expense.category === 'entretenimiento' && '🍕'}
                                                    {expense.category === 'salud' && '🍕'}
                                                    {expense.category === 'otros' && '🍕'}
                                                </div>
                                                <div className='et-expense-details'>
                                                    <h3 className='et-expense-description'>{expense.description}</h3>
                                                    <p className='et-expense-datetime'>{expense.date} a las {expense.time}</p>
                                                </div>
                                            </div>
                                            <div className='et-expense-amount'>
                                                €{expense.amount.toFixed(2)}
                                            </div> 
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    }

                    <p>Total de gastos: {expenses.length}</p>
                </section>
            </main>
        </div>
    )
}

export default ExpenseTracker