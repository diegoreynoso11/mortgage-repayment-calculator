export default function DeleteParams({ params } : {params : URLSearchParams}) {
  params.delete('amount')
  params.delete('money')
  params.delete('term')
  params.delete('time')
  params.delete('interest')
  params.delete('repayment')
  const newUrl = `${window.location.pathname}?${params.toString()}`
  window.history.replaceState({}, '', newUrl)
}
