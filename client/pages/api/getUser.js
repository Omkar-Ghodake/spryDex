import fetchUser from "../../middlewares/verifyJWT"

const handler = async (req, res) => {
	res.send("okokok")
}

export default fetchUser(handler)