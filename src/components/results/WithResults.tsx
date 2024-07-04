import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import calculate from "../../services/calculate";

function WithResults() {
  const { formValues } = useContext(AppContext);
  const { amount, money, term, interest, repayment, time } = formValues;
  const { formatRepay, formatpaymentMonth, formatpaymentYear } = calculate(amount, interest, term,time);
  return (
    <div className="text-white flex flex-col justify-center items-center">
      <h2 className="text-2xl">Your Results</h2>
      <p className="text-white/50 text-center">Your result are shown below based on the information you provided. To adjust the results, edit the form and click "Calculate payment" again.</p>
      <section className="my-10 bg-[#0e2431] rounded-lg border-t-[3px] border-lime flex flex-col justify-around items-start gap-3 p-10">
        <div>
        <p>Your monthly repayments</p>
        <p className="text-4xl text-lime font-bold">{money} {formatpaymentMonth}</p>
        </div>
        <span className="bg-white/20 w-full h-[1px] rounded-full"></span>
          
          <div className="w-full">
          <p>Total you'll repay over the tern</p>
          { repayment ?
            <p className="text-2xl ">{money} {formatRepay}</p>
             :
            <p className="text-2xl ">{money} {formatpaymentYear}</p>
          }
        </div> 
      </section>
    </div>
  );
}

export default WithResults;