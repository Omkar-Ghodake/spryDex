import { createContext, useState } from "react";

const NewsContext = createContext()

const NewsState = (props) => {
	const { setLoadingProgress } = props

	const [news, setNews] = useState([])

	const getNews = async (pageSize) => {
		setLoadingProgress(20)

		const url = `https://newsapi.org/v2/everything?q=crypto&pageSize=${pageSize}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`;

		setLoadingProgress(40)

		let data = await fetch(url);

		setLoadingProgress(60)

		let parsedData = await data.json();

		setLoadingProgress(80)

		setNews(parsedData.articles)

		setLoadingProgress(100)
	}

	return (
		<NewsContext.Provider value={ { news, getNews } }>
			{ props.children }
		</NewsContext.Provider>
	)
}

export {
	NewsContext, NewsState
}