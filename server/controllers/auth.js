import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import users from '../models/auth.js'


export const signup = async (req, res) => {
    const { name, email, password, phone } = req.body;
    try{
        const existingUser = await users.findOne({ email });

        if(existingUser){
            return res
          .status(400)
          .json({ error: "Sorry a User with this email already exists" }); 
        }

        const hashedPassword = await bcrypt.hash(password, await bcrypt.genSalt(10));

        const newUser = await users.create({
            name,
            email,
            password: hashedPassword,
            phone
        });

        const token = jwt.sign({ email: newUser.email, phone: newUser.phone, id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ result: newUser, token })

    }
    catch(error){
        res.status(500).json("Internal Server Error")
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    try{

        const existingUser = await users.findOne({ email });

        if(!existingUser){
            return res
            .status(400)
            .json({ message: "Please Login with correct credentials"})
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordCorrect) {
            return res
              .status(400)
              .json({ error: "Please Login with correct credentials" });
        }

        
        const token = jwt.sign({email: existingUser.email, phone: existingUser.phone, id: existingUser._id}, process.env.JWT_SECRET, { expiresIn: '1h'});
        
        res.status(200).json({ result: existingUser, token })
    }
    catch(error){
        res.status(500).json("Internal Server Error")
    }
}


export const loginOTP = async (req, res) => {
    const { phone } = req.body;

    try{

        const existingUser = await users.findOne({ phone });

        if(!existingUser){
            return res
            .status(400)
            .json({ message: "Please Login with correct credentials"})
        }


        
        const token = jwt.sign({phone: existingUser.phone, id: existingUser._id}, process.env.JWT_SECRET, { expiresIn: '1h'});
        
        res.status(200).json({ result: existingUser, token })
    }
    catch(error){
        res.status(500).json("Internal Server Error")
    }
}

