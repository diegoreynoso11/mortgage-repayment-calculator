import Format from "./format"

  export default function calculate(amount : string, interest : string, tern : string, time : string) {
    let repay = Number(amount)
    const month = parseFloat(interest) / 12
    
    const paymentPerMonth = Number(amount) * month / 100
    const paymentPerYear = ((Number(amount) * parseFloat(interest) / 100) * Number(tern)) + Number(amount)
    if (time === 'years') {
      for (let i = 0; i < Number(tern); i++) {
        const paymentRepayment = repay * parseFloat(interest) / 100
        repay =+ repay + paymentRepayment
      }
      
    } else {
      for (let i = 0; i < Number(tern); i++) {
        const paymentRepayment = repay * (parseFloat(interest) / 12) / 100
        repay =+ repay + paymentRepayment
      }
    }
    const formatpaymentMonth = Format(paymentPerMonth)
    const formatpaymentYear = Format(paymentPerYear)
    const formatRepay = Format(repay)
      return {formatRepay,formatpaymentYear,formatpaymentMonth}
    }

