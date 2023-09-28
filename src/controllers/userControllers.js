import { Usermodel } from '../models/users.js';
import { encryptPassword, isCorrectPass } from "../utils/bycript.js"
import { generateToken } from "../utils/jwt.js"




export const allUser = async (req, res) => {

  const getUsers = await Usermodel.find()

  if (!getUsers) {
    return res.status(400).json({ msg: "No hay usuarios" })
  } else {
    return res.status(201).json({ msg: "Usuarios", getUsers })
  }
}

export const registerUser = async (req, res) => {

  const { name, email, password } = req.body

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ msg: "both fields are required" })
    }

    const user = await Usermodel.findOne({ email })


    if (user) {
      return res.status(400).json({ msg: "user already exists", user })
    }

    // ─── Password Encriptada ──────────────────────────────────────
    const passHash = await encryptPassword(password)


    const newUser = await Usermodel.create({ name, email, password: passHash })

    if (newUser) {
      return res.status(201).json({ msg: "User created successfully", newUser })
    }
  } catch (error) {
    console.log(error)
  }
}


export const loginUser = async (req, res) => {

  const { email, password } = req.body

  try {
    const userExist = await Usermodel.findOne({ email })
    if (!userExist) {

      return res.status(401).json({ msg: "this account is not registered" })
    }

    const passwordHash = userExist.password



    // ─── Comparando Password ─────────────────────────────────────



    const isCorrect = await isCorrectPass(password, passwordHash)
    if (isCorrect) {

      const token = generateToken(userExist.email)

      const data = {
        token,
        user: userExist
      }



      return res.status(200).json({ msg: "Session and valid token", data })

    } else {
      return res.status(403).json({ msg: "Incorrect password" })
    }


  } catch (error) {
    console.log(error)
  }

}

export const deleteUser = async (req, res) => {

  const userId = req.params.id

  try {
    const Users = await Usermodel.findByIdAndDelete(userId)
    if (!Users) {
      return res.status(400).json({ msg: "El usuario no existe" })
    } else {
      return res.status(201).json({ msg: "Usuario eliminado", Users })
    }
  } catch (error) {
    console.log(error)
  }
}

export const updateUser = async (req, res) => {
  const userData = req.body 
  try {
    const user = await Usermodel.findByIdAndUpdate(req.params.id, userData)
    if (!user) {
      return res.json({ error: "El usuario no existe." })
    }
    return res.json({ msg: "Datos actualizados con éxito." })
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message })
    }
  }
}