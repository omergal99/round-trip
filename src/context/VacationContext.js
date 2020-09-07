import React from "react";
import { getVacations, getInitQuery } from '../services/VacationService';

export const VacationContext = React.createContext(null);
const { Provider } = VacationContext;

export const VacationProvider = ({ children }) => {

  const [vacations, setVacations] = React.useState(null);
  const [query, setQuery] = React.useState(getInitQuery());
  const [isLoading, setIsLoading] = React.useState(false);

  const customSetQuery = (key, value) => {
    const newQuery = { ...query, [key]: value };
    setQuery(newQuery);
    customSetVacations(newQuery);
  };

  const customSetVacations = async (newQuery = query) => {
    setIsLoading(true);
    const data = await getVacations(newQuery);
    setVacations(data);
    setIsLoading(false);
  };

  return (
    <Provider
      value={{
        vacations,
        setVacations: customSetVacations,
        query,
        setQuery: customSetQuery,
        isLoading,
      }}
    >
      {children}
    </Provider>
  );
}

export default VacationContext;