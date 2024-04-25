import { createContext, useContext } from 'react';

export const RefContext = createContext();

export function useReference() {
	return useContext(RefContext);
}