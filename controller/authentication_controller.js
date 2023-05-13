const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config();
const router = express.Router()
const pool = require('../config/queries')

// auth/register/
router.post('/register', async (req, res) => {
    const {
        id,
        email,
        gender,
        password,
        role,
    } = req.body

    let hashedPassword = await bcrypt.hash(password, 10)

    pool.query('INSERT INTO users (id, email, gender, password, role) VALUES ($1, $2, $3, $4, $5)', [id, email, gender, hashedPassword, role])
    return res.status(200).json({
        message: 'User Registered!',
        data: {
            id: id,
            email: email,
            gender: gender,
            password: hashedPassword,
            role: role,
        }
    })
})

// auth/login/
router.post('/login', async (req, res) => {
    const {
        email,
        password
    } = req.body


    const result = await pool.query(`SELECT * FROM users WHERE email = $1`, [email])
    const user = result.rows[0]
    const validatePassword = await bcrypt.compare(password, user.password)

    if (!user) {
        return res.status(401).json({
            message: 'Unauthenticated user or not registered'
        })
    }

    if (!email) {
        return res.status(401).json({
            message: 'Invalid Email'
        })
    }

    if (!validatePassword) {
        return res.status(401).json({
            message: 'Invalid Password'
        })
    }

    // Create Token
    const token = jwt.sign({
        email: user.email,
        role: user.role
    }, process.env.SECRET_KEY, {
        expiresIn: '12h',
    })

    return res.status(200).json({
        data: {
            id: user.id,
            token,
            email: user.email,
            role: user.role,
        }
    })
})


// export this router to use in our index.js
module.exports = router