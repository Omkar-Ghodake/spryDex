import { createContext, useState } from "react"

const ThemeContext = createContext()

const ThemeState = (props) => {
	const [theme, setTheme] = useState(
		// typeof window !== 'undefined' && localStorage.getItem('theme')
		// 	? localStorage.getItem('theme')
		// 	: 
		'light'
	)

	const toggleTheme = () => {
		if (theme === 'light') {
			setTheme('dark')
			// localStorage.setItem('theme', 'dark')
			document.body.classList.add('dark-theme')
		} else {
			setTheme('light')
			// localStorage.setItem('theme', 'light')
			document.body.classList.remove('dark-theme')
		}
	}

	const updateTheme = (newTheme) => {
		setTheme(newTheme)
		toggleTheme()
	}

	return (
		<ThemeContext.Provider value={ { theme, updateTheme } }>
			{ props.children }
		</ThemeContext.Provider>
	)
}

export {
	ThemeContext, ThemeState
}