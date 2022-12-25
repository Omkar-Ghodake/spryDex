import React, { createContext, useState } from 'react'

const UserContext = createContext()

const UserState = (props) => {
	const [user, setUser] = useState({})

	const getUser = async () => {

	}

	return (
		<UserContext.Provider value={ { user, getUser } }>
			{ props.children }
		</UserContext.Provider>
	)
}

export {
	UserContext,
	UserState
}