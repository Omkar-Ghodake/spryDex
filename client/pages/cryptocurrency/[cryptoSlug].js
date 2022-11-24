import React from 'react'
import { useRouter } from 'next/router'

const Slug = () => {
	const router = useRouter()

	const { cryptoSlug } = router.query

	return (
		<>
			<div>

			</div>
		</>
	)
}

export default Slug