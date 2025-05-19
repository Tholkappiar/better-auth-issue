import { useState, type ChangeEvent } from "react";
import { authClient } from "../lib/auth-client";

type userRequest = {
    email: string;
    password: string;
    name?: string;
};

const Temp = () => {
    const [user, setUser] = useState<userRequest>({
        email: "",
        password: "",
        name: "",
    });

    const { useSession, signIn, signUp } = authClient;

    function onChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setUser((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const session = useSession();
    console.log("using use session : ", session);

    async function onSignIn() {
        const signInResponse = await signIn.email({
            email: user.email,
            password: user.password,
        });
        console.log("sign in response : ", signInResponse.data);
    }

    async function onSignUp() {
        if (!user.name) return;
        const signInResponse = await signUp.email({
            email: user.email,
            password: user.password,
            name: user.name,
        });
        console.log(signInResponse.data);
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4">
            <div>
                <p className="text-center font-bold">Details :</p>
                <p>user email : {session.data?.user.email}</p>
                <p>session id : {session.data?.session.id}</p>
            </div>
            <div className="flex flex-col gap-4 w-1/2">
                <input
                    type="text"
                    name="name"
                    onChange={onChange}
                    value={user.name}
                    placeholder="Name"
                    className="p-2 border border-black rounded-xl"
                />
                <input
                    type="text"
                    name="email"
                    onChange={onChange}
                    value={user.email}
                    placeholder="Email"
                    className="p-2 border border-black rounded-xl"
                />
                <input
                    type="text"
                    placeholder="Password"
                    name="password"
                    onChange={onChange}
                    value={user.password}
                    className="p-2 border border-black rounded-xl"
                />
            </div>
            <button
                onClick={onSignIn}
                className="p-2 border-none bg-green-500 text-white font-semibold rounded-xl shadow-sm"
            >
                Sign in
            </button>
            <button
                onClick={onSignUp}
                className="p-2 border-none bg-blue-500 text-white font-semibold rounded-xl shadow-sm"
            >
                Sign up
            </button>
        </div>
    );
};

export default Temp;
