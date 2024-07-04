import { createContext, Dispatch, SetStateAction } from 'react';
import Query from '../types/Query';

interface AppContextProps {
  formValues: Query;
  setFormValues: Dispatch<SetStateAction<Query>>;
}
const defaultValues: AppContextProps = {
  formValues: {
    amount: '',
    money: '',
    term: '',
    time: '',
    interest: '',
    repayment: false,
  },
  setFormValues: () => {},
  
};

export const AppContext = createContext<AppContextProps>(defaultValues);