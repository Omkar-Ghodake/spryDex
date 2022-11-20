import { createContext, useState } from "react";

const NewsContext = createContext()

const NewsState = (props) => {
	const [news, setNews] = useState([])

	const getNews = async (pageSize) => {
		const url = `https://newsapi.org/v2/everything?q=crypto&pageSize=${pageSize}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`;

		let data = await fetch(url);
		let parsedData = await data.json();
		setNews(parsedData.articles)
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