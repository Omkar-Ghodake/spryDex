import connectToMongo from "../../middlewares/connectDB";

export default function handler(req, res) {
  connectToMongo()
  res.status(200).json({ name: 'John Doe' })
}
