import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook, BsGithub, BsLinkedin, BsKeyFill } from 'react-icons/bs'
import { BiLogInCircle } from 'react-icons/bi'
import { IoCreateOutline } from 'react-icons/io5'
import { RiAccountCircleFill, RiText } from 'react-icons/ri'
import { HiMail } from 'react-icons/hi'
import { useSession, signIn, signOut } from 'next-auth/react'
import ForbiddenAccess from '../layouts/ForbiddenAccess'
import swal from 'sweetalert'

const signup = () => {
	const [signupData, setSignupData] = useState({
		username: '', email: '', password: '', confirmPassword: ''
	})

	const userSignUpHandler = async () => {
		const response = await fetch('http://localhost:3000/api/userSignup', {
			method: 'POST',
			body: JSON.stringify(signupData),
			headers: {
				'Content-Type': 'application/json'
			}
		})

		const parsedRes = await response.json()
		console.log(parsedRes)
	}

	const signInHandler = async (provider) => {
		try {
			await signIn(provider, { callbackUrl: 'http://localhost:3000' })
		} catch (error) {
			console.log(error)
			router.push('/signin')
		}
	}

	// google login session
	const { data: session } = useSession()

	const onChange = (e) => {
		setSignupData({ ...signupData, [e.target.name]: e.target.value })
	}

	if (session)
		return (
			<>
				<ForbiddenAccess />
			</>
		)

	return (
		<>
			<Head>
				<title>spryDex - SignUp</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon-white.png" />
			</Head>

			<div className="container mx-auto my-5 p-5">
				<div className="form bg-white shadow-xl rounded-lg mx-auto md:w-1/2">
					<div className="head w-full bg-indigo-500 flex justify-center items-center space-x-5 rounded-t-lg px-5 py-2">
						<Image src={ '/spryDEX-sym-white.png' } height={ '50' } width={ '50' } alt='spryDEX' />
						<h1 className='text-white text-3xl font-semibold'>spryDEX</h1>
					</div>

					<div className="body px-5 py-10 lg:w-1/2 mx-auto space-y-5">
						<div className="flex justify-center items-center space-x-2 text-3xl text-indigo-500 text-center font-medium">
							<RiAccountCircleFill />
							<h1 className='text-center text-indigo-500 text-3xl font-medium'>SIGN UP</h1>
						</div>

						<div className="input-group flex items-center space-x-5 border border-gray-300 rounded text-lg bg-white px-2 py-1 focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 duration-200 ease-in-out">
							<label htmlFor="username" className="input-label">
								<RiText className='text-lg' />
							</label>
							<input type="text" id='username' name='username' className='outline-none' placeholder='Name' onChange={ onChange } />
						</div>

						<div className="input-group flex items-center space-x-5 border border-gray-300 rounded text-lg bg-white px-2 py-1 focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 duration-200 ease-in-out">
							<label htmlFor="email" className="input-label">
								<HiMail className='text-lg' />
							</label>
							<input type="email" id='email' name='email' className='outline-none' placeholder='Email' onChange={ onChange } />
						</div>

						<div className="input-group flex items-center space-x-5 border border-gray-300 rounded text-lg bg-white px-2 py-1 focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 duration-200 ease-in-out">
							<label htmlFor="password" className="input-label">
								<BsKeyFill className='text-lg' />
							</label>
							<input type="password" id='password' name='password' className='outline-none' placeholder='Password' onChange={ onChange } />
						</div>

						<div className="input-group flex items-center space-x-5 border border-gray-300 rounded text-lg bg-white px-2 py-1 focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 duration-200 ease-in-out">
							<label htmlFor="confirmPassword" className="input-label">
								<BsKeyFill className='text-lg' />
							</label>
							<input type="password" id='confirmPassword' name='confirmPassword' className='outline-none' placeholder='Confirm Password' onChange={ onChange } />
						</div>

						<button className='flex items-center space-x-3 mx-auto text-white bg-indigo-500 border-0 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg my-4' onClick={ userSignUpHandler }>
							<span>Sign Up</span>
							<span><IoCreateOutline /></span>
						</button>

						<div className='text-center'>
							<span className='text-center text-gray-500'>or</span>
						</div>

						<div className='text-center'>
							<span>Sign In With</span>

							<div className='flex space-x-5 justify-center text-4xl mt-1'>
								<button className='hover:bg-slate-100 rounded-full p-2 duration-100' onClick={ () => { signInHandler('google') } }>
									<FcGoogle className='cursor-pointer' />
								</button>
								<button className='hover:bg-slate-100 rounded-full p-2 duration-100' onClick={ () => { signInHandler('facebook') } }>
									<BsFacebook className='cursor-pointer text-facebook' />
								</button>
								<button className='hover:bg-slate-100 rounded-full p-2 duration-100' onClick={ () => { signInHandler('github') } }>
									<BsGithub className='cursor-pointer' />
								</button>
								<button className='hover:bg-slate-100 rounded-full p-2 duration-100' onClick={ () => { signInHandler('linkedin') } }>
									<BsLinkedin className='cursor-pointer text-linkedin' />
								</button>
							</div>
						</div>

						<hr />

						<div className="text-center">
							<span>Already Have an Account?</span>
						</div>

						<Link href={ '/signin' }>
							<button className='flex items-center space-x-3 mx-auto text-white bg-indigo-500 border-0 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg my-4'>
								<span>Sign In</span>
								<span><BiLogInCircle /></span>
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default signup