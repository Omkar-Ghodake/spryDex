import { createContext, useContext, useState } from "react"
import { ThemeContext } from "./ThemeState"
import { ToastOptionsContext } from "./ToastOptionsState"
import toast from 'react-hot-toast'

const MakeToastContext = createContext()

const MakeToastState = (props) => {
	const { theme } = useContext(ThemeContext)
	const { toastOptions } = useContext(ToastOptionsContext)

	const makeToast = (msg) => {
		toast
			.success(
				msg,
				theme === 'dark' ? toastOptions.light : toastOptions.dark
			)
	}

	return (
		<MakeToastContext.Provider value={ { makeToast } }>
			{ props.children }
		</MakeToastContext.Provider>
	)
}

export {
	MakeToastContext,
	MakeToastState
}