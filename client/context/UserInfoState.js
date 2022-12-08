import { createContext, useState } from "react";

const UserInfoContext = createContext()

const UserInfoState = (props) => {
	const [userInfo, setUserInfo] = useState({
		name: "", email: ""
	})

	return (
		<UserInfoContext.Provider value={ { userInfo, setUserInfo } }>
			{ props.children }
		</UserInfoContext.Provider>
	)
}

export {
	UserInfoState,
	UserInfoContext
}