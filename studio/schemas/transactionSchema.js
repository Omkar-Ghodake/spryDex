import { defineField, defineType } from 'sanity'

export const transactionSchema = defineType({
	title: 'Transactions',
	name: 'transactions',
	type: 'document',
	fields: [
		defineField({
			title: 'Transaction Hash',
			name: 'txnHash',
			type: 'string'
		}),
		defineField({
			title: 'From (Wallet Address)',
			name: 'fromAddress',
			type: 'string'
		}),
		defineField({
			title: 'To (Wallet Address)',
			name: 'toAddress',
			type: 'string'
		}),
		defineField({
			title: 'Amount',
			name: 'amount',
			type: 'number'
		}),
		defineField({
			title: 'Timestamp',
			name: 'timestamp',
			type: 'datetime'
		}),
	]
})