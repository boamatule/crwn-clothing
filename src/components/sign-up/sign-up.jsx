import React from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";


const SignUp = () => {
	return (
		<div className="sign-up">
				<h2>I don't have an account</h2>
				<span>Sign in with email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email" 
						type="email"
						value={this.state.email}
						label="email"
						handleChange={this.handleChange}
						required />
						
					<FormInput
						name="password" 
						type="password"
						value={this.state.password}
						label="password"
						handleChange={this.handleChange}
						required 
					/>
						<FormInput
						name="password" 
						type="password"
						value={this.state.password}
						label="password"
						handleChange={this.handleChange}
						required 
					/>
					<input type="submit" value="Submit Form" />
				</form>
			</div>
	);
}

export default SignUp;