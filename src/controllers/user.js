import User from '../models/User';
import CryptoJs from 'crypto-js';

export const SignUp = async (req, res) => {
    try {

        req.body.password = CryptoJs.AES.encrypt(req.body.password, 'secret key 123').toString();
        const user = await new User(req.body).save();
        res.json(user);
    } catch (error) {
        res.status(400).json({
            message: "Không đăng ký được!"
        })
    }

}

export const SignIn = async (req, res) => {
    try {

        const user = await User.findOne({
            email: req.body.email,
        }).then((user) => {
            if (!user) {
                res.status(400).json({
                    message: "Không co user"
                })
            } else {
                const password = CryptoJs.AES.decrypt(user.password, '123');
                const originalPassword = password.toString(CryptoJs.enc.Utf8);
                if (originalPassword == req.body.password) {
                    res.json({
                        message: "Dang nhap thanh cog",
                        user: user
                    })
                } else {
                    res.status(400).json({
                        message: "Mat khau khong khop"
                    })
                }
            }
        })

    } catch (error) {
        res.status(400).json({
            message: "Không đăng nhập được"
        })
    }
}
export const List = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users)
    } catch (error) {
        res.status(400).json({
            message: "Không đăng ký được"
        })
    }
}