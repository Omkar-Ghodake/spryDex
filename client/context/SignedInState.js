import { createContext, useState } from "react";

const SignedInContext = createContext()

const SignedInState = (props) => {
	const [signedIn, setSignedIn] = useState(false)

	return (
		<SignedInContext.Provider value={ { signedIn, setSignedIn } }>
			{ props.children }
		</SignedInContext.Provider>
	)
}

export {
	SignedInContext,
	SignedInState
}