import EmptyResults from "../../icons/EmptyResults"

function NoResults() {
  return (
    <>
    <EmptyResults />
        <h2 className='text-white text-2xl font-bold'>Results shown here!</h2>
        <p className='text-white text-center'>
          Complete the form and click "Calculate payments" to see what your
          monthly repayments would we
        </p>
    </>
  )
}

export default NoResults