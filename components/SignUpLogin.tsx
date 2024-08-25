"use client";

import React, { useState } from "react";

interface SignUpLoginProps {
	onSuccess: () => void;
}

const SignUpLogin: React.FC<SignUpLoginProps> = ({ onSuccess }) => {
	const [isLogin, setIsLogin] = useState(true);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Here you would typically handle the sign-up or login logic
		// For now, we'll just simulate a successful login/signup
		onSuccess();
	};

	return (
		<div>
			<h2>{isLogin ? "Login" : "Sign Up"}</h2>
			<form onSubmit={handleSubmit}>
				<input type="email" placeholder="Email" required />
				<input type="password" placeholder="Password" required />
				<button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
			</form>
			<button onClick={() => setIsLogin(!isLogin)}>
				{isLogin
					? "Need an account? Sign Up"
					: "Already have an account? Login"}
			</button>
			{/* Add social login buttons here */}
		</div>
	);
};

export default SignUpLogin;
