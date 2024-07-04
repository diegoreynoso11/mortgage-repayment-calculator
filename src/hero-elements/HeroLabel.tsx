import { ReactNode } from 'react'
import Percent from '../icons/Percent'

function HeroLabel({
  children,
  defaultValue,
  hfull,
  type,
  id
}: {
  children: ReactNode
  defaultValue?: string
  hfull?: boolean
  type?: string
  id? : string
}) {
  function determinateType() {
    if (type === 'time') {
      return (
        <>
          <option className='bg-white' value='years'>Years</option>
          <option className='bg-white' value='months'>Months</option>
        </>
      )
    }
    if (type === 'money') {
      return (
        <>
          <option className='bg-white' value='£'>£</option>
          <option className='bg-white' value='$'>$</option>
        </>
      )
    }
  }
  return (
    <label htmlFor='' className={`flex flex-col ${hfull && 'w-full'}`}>
      <span className='text-slate-800/70'>{children}</span>
      <div className='border flex rounded-lg group'>
        <input
          defaultValue={defaultValue}
          className='py-2 rounded-sm font-bold px-3 border-none focus:ring-lime focus:ring-1 border-slate-600 '
          type='number'
          step='0.01'
          name=''
          id={id}
          required
        />
        {!type ? (
          <span className={`bg-[#e3f4fc] h-full w-full text-center p-2 group-hover:bg-lime transition-all`}><Percent></Percent></span>
        ) : (
          <select className='bg-[#e3f4fc] px-2 group-hover:bg-lime transition-all'>
            {determinateType()}
          </select>
        )}
      </div>
    </label>
  )
}

export default HeroLabel
