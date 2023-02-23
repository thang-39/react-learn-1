import ExpenseItem from "./components/ExpenseItem";

function App() {

  const expense = [
    {id: 'e1', title: 'Car Insurance', amount: 294.67, date: new Date(2021,2,28)},
    {id: 'e2', title: 'New TV', amount: 294.67, date: new Date(2021,2,28)},
    {id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021,2,28)},
    {id: 'e4', title: 'Car Insurance', amount: 294.67, date: new Date(2021,2,28)},
  ]


  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      />
      
    </div>
  );
}

export default App;
