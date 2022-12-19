import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import GitHubProvider from 'next-auth/providers/github'
import LinkedInProvider from 'next-auth/providers/linkedin'

export const authOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET
		}),
		FacebookProvider({
			clientId: process.env.FB_CLIENT_ID,
			clientSecret: process.env.FB_CLIENT_SECRET
		}),
		GitHubProvider({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET
		}),
		LinkedInProvider({
			clientId: process.env.LINKEDIN_CLIENT_ID,
			clientSecret: process.env.LINKEDIN_CLIENT_SECRET
		})
	]
}

export default NextAuth(authOptions)