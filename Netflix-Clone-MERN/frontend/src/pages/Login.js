import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { loginSuccess } from "../redux/userSlice";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleLogin = async () => {
        try {
            const res = await axios.post("/api/auth/login", { email, password });
            dispatch(loginSuccess(res.data));
        } catch (err) {
            console.error("Login Failed");
        }
    };

    return (
        <div>
            <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
