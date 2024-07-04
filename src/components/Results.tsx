import { useContext } from 'react'
import NoResults from './results/NoResults'
import WithResults from './results/WithResults'
import { AppContext } from '../context/AppContext'

function Results() {
  const { formValues } = useContext(AppContext)
  return (
    
    <section className='min-w-[500px] h-[600px] flex flex-col justify-around items-center border lg:rounded-xl  lg:rounded-l-none w-screen p-10 bg-[#133040] border-[#133040] shadow-lg'>
      {
        formValues.amount === '' ? <>
        <NoResults></NoResults>
      </> : <WithResults></WithResults>
      }
    </section>
  )
}

export default Results
