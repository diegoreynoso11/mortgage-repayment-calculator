import Query from "../types/Query"


export default function SetParams({ params, value } : {params : URLSearchParams , value : Query}) {
  params.set('amount', value.amount)
  params.set('money', value.money)
  params.set('term', value.term)
  params.set('time', value.time)
  params.set('interest', value.interest)
  params.set('repayment', value.repayment ? 'true' : 'false')
  const newUrl = `${window.location.pathname}?${params.toString()}`
  window.history.replaceState({}, '', newUrl)
}
