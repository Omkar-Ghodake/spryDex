import { createContext, useState } from "react";

const TopLoaderContext = createContext()


const TopLoaderState = (props) => {
	const [loadingProgress, setLoadingProgress] = useState(0)

	return (
		<TopLoaderContext.Provider value={ { loadingProgress, setLoadingProgress } }>
			{ props.children }
		</TopLoaderContext.Provider>
	)
}

export {
	TopLoaderContext,
	TopLoaderState
}