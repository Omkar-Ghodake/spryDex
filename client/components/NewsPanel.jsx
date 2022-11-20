import React, { useContext, useEffect } from 'react'
import Link from 'next/link'
import NewsBlog from '../layouts/NewsBlog'
import { NewsContext } from '../context/NewsState'

const NewsPanel = () => {
	const { news, getNews } = useContext(NewsContext)

	useEffect(() => {
		getNews(6)
	}, [])

	return (
		<>
			<section className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-col">
						<h1 className="text-gray-900 font-medium text-5xl mb-4  mx-auto">NEWS</h1>
					</div>

					<div className="flex flex-wrap">
						{ console.log(news) }
						{
							news && news.map((blog, index) => {
								return (
									<NewsBlog
										key={ index }
										title={ blog.title }
										desc={ blog.description }
										url={ blog.url }
										img={ blog.urlToImage }
									/>
								)
							})
						}
					</div>

					<Link href={ '/news' }>
						<button className='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg my-4'>See More News</button>
					</Link>
				</div>
			</section>
		</>
	)
}

export default NewsPanel