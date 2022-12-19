import { createContext, useContext, useState } from "react";

const ToastOptionsContext = createContext()

const ToastOptionsState = (props) => {

	const [toastOptions, setToastOptions] = useState({
		light: {
			style: {
				backgroundColor: '#fff',
				color: '#000'
			},
			iconTheme: {
				primary: '#6366f1', secondary: '#fff'
			}
		},
		dark: {
			style: {
				backgroundColor: '#000',
				color: '#fff'
			},
			iconTheme: {
				primary: '#6366f1', secondary: '#fff'
			}
		}
	})

	return (
		<ToastOptionsContext.Provider value={ { toastOptions } }>
			{ props.children }
		</ToastOptionsContext.Provider>
	)
}

export {
	ToastOptionsContext,
	ToastOptionsState
}