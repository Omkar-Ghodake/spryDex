import { defineArrayMember, defineField, defineType } from "sanity";

export const userSchema = defineType({
	title: 'Users',
	name: 'users',
	type: 'document',
	fields: [
		defineField({
			title: 'Address',
			name: 'address',
			type: 'string'
		}),
		defineField({
			title: 'User Name',
			name: 'userName',
			type: 'string'
		}),
		defineField({
			title: 'Transactions',
			name: 'transactions',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'reference',
					to: [
						{
							type: 'transactions'
						}
					]
				})
			]
		}),
	]
})