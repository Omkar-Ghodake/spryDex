import initValidation from "../../middlewares/initValidation"
import User from "../../models/User"
import NextCors from "nextjs-cors"
const { body } = require('express-validator')
const CryptoJS = require("crypto-js")
const jwt = require('jsonwebtoken')
const cookie = require('cookie')

const validations = [
  body('email', 'Invalid Email ID!').isEmail(),
  body('password', 'Password should be at least 8 characters long!').isLength({ min: 8 })
]

const handler = async (req, res) => {
  await NextCors(req, res, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200
  })

  try {

    if (req.method !== 'POST') return res.status(400).json({ success: false, message: 'Only Post Requests are Allowed!' })

    const { email, password } = req.body

    var existingUser = await User.findOne({ email })

    if (!existingUser) return res.status(404).json({ success: false, message: 'Invalid Credentials!', loc: 'email' })

    const decryptedPassword = CryptoJS.AES.decrypt(existingUser.password, process.env.CRYPTOJS_ENCRYPTION_SECRET).toString(CryptoJS.enc.Utf8)

    if (password !== decryptedPassword) return res.status(401).json({ success: false, message: 'Invalid Credentials!', loc: 'password' })

    let payload = await User.findOne({ email }).select('-password').lean()
    // payload = await payload.toObject()
    const token = jwt.sign(payload, process.env.JWT_SECRET)

    return (
      res
        .setHeader('Set-Cookie', cookie.serialize('token', token, {
          // httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          sameSite: 'strict',
          path: '/'
        }))
        .status(200)
        .json({ success: true, message: 'Successfully Logged In!', payload })
    )
  } catch (error) {
    console.log('Following Error Occured in login\n', error)
    res.status(500).json({
      success: false, error, message: 'An Internal Server Error Occured!', loc: 'api'
    })
  }
}

export default initValidation(handler, validations)