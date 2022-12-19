import React from 'react'
import { ImSpinner10 } from 'react-icons/im'

const Spinner = () => {
	return (
		<>
			<div className='fixed top-0 left-0 blurBg w-[99vw] h-[100vh] m-0 flex justify-center items-center'>
				<ImSpinner10 className='text-7xl animate-spin' />
			</div>
		</>
	)
}

export default Spinner