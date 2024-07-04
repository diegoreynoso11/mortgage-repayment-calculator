import { useEffect, useState } from 'react';
import './App.css'
import MortageCalculator from './components/MortageCalculator'
import Results from './components/Results'
import Query from './types/Query';
import { AppContext } from './context/AppContext';

function App() {
  const [formValues, setFormValues] = useState<Query>({
    amount: "",
    money: "",
    term: "",
    time: "",
    interest: "",
    repayment: false
   })
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setFormValues(prevValues => ({
      ...prevValues,
      amount: params.get('amount') || '',
      money: params.get('money') || '',
      term: params.get('term') || '',
      time: params.get('time') || '',
      interest: params.get('interest') || '',
      repayment: params.get('repayment') === 'true'
    }));
  }, []);
  return (
    <AppContext.Provider value={{ formValues, setFormValues }}>
    <main className='flex flex-col lg:flex-row justify-center items-center w-screen px-56 '>
      <MortageCalculator></MortageCalculator>
      <Results ></Results>
    </main>
    </AppContext.Provider>
  )
}

export default App
