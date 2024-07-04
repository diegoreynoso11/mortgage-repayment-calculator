import { useContext } from 'react'
import HeroLabel from '../hero-elements/HeroLabel'
import Calculator from '../icons/Calculator'
import DeleteParams from '../params/delete'
import SetParams from '../params/set'
import Query from '../types/Query'
import { AppContext } from '../context/AppContext'

function MortageCalculator() {
  const { formValues, setFormValues } = useContext(AppContext)
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const amount = (form.elements[0] as HTMLInputElement).value
    const money = (form.elements[1] as HTMLInputElement).value
    const term = (form.elements[2] as HTMLInputElement).value
    const time = (form.elements[3] as HTMLInputElement).value
    const interest = (form.elements[4] as HTMLInputElement).value
    const repayment = (form.elements[5] as HTMLInputElement).checked
    const newQuery = {
      amount,
      money,
      term,
      time,
      interest,
      repayment,
    }
    updateQueryParams(newQuery)
    setFormValues(newQuery)
  }
  function updateQueryParams(value: Query | null) {
    const params = new URLSearchParams(window.location.search)
    if (value) {
      SetParams({ params, value })
    } else {
      DeleteParams({ params })
    }
  }

  function handleClear() {
    setFormValues(prevValues => ({
      ...prevValues,
      amount: '',
      money: '',
      term: '',
      time: '',
      interest: '',
      repayment: false
    }));
    const params = new URLSearchParams(window.location.search)
    DeleteParams({ params })
  }
  return (
    <section className='flex flex-col justify-around h-[600px] border lg:rounded-xl lg:rounded-r-none w-screen p-10 bg-white shadow-lg'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Montgage Calculator</h1>
        <button
          onClick={() => handleClear()}
          className='underline underline-offset-2 bg-inherit'
        >
          Clear all
        </button>
      </div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        action=''
        className='flex flex-col gap-5 justify-between items-center'
      >
        <HeroLabel id="hero1" defaultValue={formValues.amount}  type='money'>
          Mortgage Amount
        </HeroLabel>
        <div className='flex flex-col lg:flex-row gap-6'>
          <HeroLabel id="hero2" defaultValue={formValues.term} type='time'>
            Mortgage term
          </HeroLabel>
          <HeroLabel id="hero3" defaultValue={formValues.interest}>
            Interest rate
          </HeroLabel>
        </div>
        <h2>
          Mortgage type
        </h2>
          <label className={`${formValues.repayment ? "border-lime" : "border-slate-700"} rounded-lg border w-full py-4 px-3`} htmlFor='repayment'>
            <input
              type='radio'
              className='mx-3 scale-[1.3] accent-lime outline-lime'
              id='repayment'
              name='drone'
              value='repayment'
              checked={formValues.repayment}
              onChange={() =>
                setFormValues({
                  ...formValues,
                  repayment: !formValues.repayment,
                })
              }
            />
              Repayment
              </label>
            <label className={`${!formValues.repayment ? "border-lime" : "border-slate-700"} rounded-lg border w-full py-4 px-3`}  htmlFor='interest-only'>
            <input
              className='mx-3 scale-[1.3] accent-lime outline-lime'
              type='radio'
              id='interest-only'
              name='drone'
              value='interest-only'
              checked={!formValues.repayment}
              onChange={() =>
                setFormValues({
                  ...formValues,
                  repayment: !formValues.repayment,
                })
              }
            />
            Interest only
              </label>
        <button className='bg-lime py-3 px-6 rounded-full flex gap-2 hover:bg-lime/50'>
          <Calculator /> Calculate payments
        </button>
      </form>
    </section>
  )
}

export default MortageCalculator
