import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'yegzuTM@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'yegzu TM1',
    email: 'yegzuTM1@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'yegzu TM2',
    email: 'yegzuTM2@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
