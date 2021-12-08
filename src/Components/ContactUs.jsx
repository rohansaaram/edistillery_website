import React, { Component } from "react";
import Axios from "axios";

import { animated, Spring } from 'react-spring'
import VisibilitySensor from "react-visibility-sensor";

import Select from 'react-select'
import ReCAPTCHA from "react-google-recaptcha";

const grecaptchaObject = window.grecaptcha;

const country_list = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];

var options = [];
country_list.forEach(element => {
	options.push({ value: element, label: element })
});



const customStyles = {
	option: (provided, state) => ({
		...provided,
		color: "#000",
		fontFamily: "'Times New Roman', Times, serif"
	}),
	control: (provided, state) => ({
		...provided,
		backgroundColor: "transparent !important",
		color: "#fff !important",
	}),
	singleValue: (provided, state) => ({
		...provided,
		backgroundColor: "transparent !important",
		color: "#fff !important",
	})

}




class ContactUs extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			business_name: "",
			country: "",
			subject: "",
			message: "",

			captchaValue: null,

			submitting: false,
			submitted: false,
		};



	}



	render() {
		return (
			<div className="row pt-5 pb-5 d-flex contact-us-div justify-content-center align-items-center">
				<div className="col-sm-12 pt-5 d-flex justify-content-center align-items-center">
					<VisibilitySensor >
						{({ isVisible }) => (
							<animated.div >
								<Spring
									from={{ opacity: isVisible ? 0 : 1 }}
									to={{ opacity: isVisible ? 1 : 1 }}
									config={{ duration: 0 }}
									delay={0}
								>

									{props => {
										return (
											<animated.div style={props}>

												<h1 className="h1Class" style={{ fontSize: "60px", color: "#fff" }}>
													{window.locale.translate('Contact Us')}
												</h1>

											</animated.div>
										)
									}}
								</Spring>
							</animated.div>
						)}
					</VisibilitySensor >
				</div>
				<div className="col-sm-12">
					<div className="row justify-content-center">
						<div className="col-10 mt-5">
							{this.state.submitted ? (
								<div className="justify-content-center text-center">
									<h2>Thank you for contacting us.</h2>
									<h4>We will get back to you within 24 hours on your email.</h4>
									<h5>Wish you a good day ahead !</h5>
								</div>
							) : (
									<form>
										<div className="form-group">
											<input
												type="text"
												className="form-control"
												name="name"
												placeholder="Full Name"
												onChange={this.ChangeHandler}
											/>
										</div>

										<div className="form-group">
											<input
												type="email"
												name="email"
												className="form-control"
												placeholder="Email Address"
												onChange={this.ChangeHandler}
											/>
										</div>
										<div className="form-group">
											<input
												type="text"
												name="business_name"
												className="form-control"
												placeholder="Company Name"
												onChange={this.ChangeHandler}
											/>
										</div>
										<div className="form-group">
											<Select options={options}
												placeholder="Country"
												styles={customStyles}
												name="country"
												onChange={this.CountryChangeHandler}
											/>
										</div>
										<div className="form-group">
											<input
												type="text"
												className="form-control"
												name="subject"
												placeholder="Subject"
												onChange={this.ChangeHandler}
											/>
										</div>


										<div className="form-group">
											<textarea
												className="form-control"
												name="message"
												rows="10"
												onChange={this.ChangeHandler}
											></textarea>
										</div>


										<div className="form-group text-center justify-content-center">
											<ReCAPTCHA
												sitekey="6LcbHoMcAAAAAP5jNGLaalHfTUbqPZY-OUGfzs9m"
												//grecaptcha={grecaptchaObject}
												onChange={this.onChangeCaptcha}
											/>
										</div>


										<div className="form-group justify-content-center">
											{this.state.submitting ? (
												<div class="spinner-border" role="status">
													<span class="sr-only">Loading...</span>
												</div>
											) : (
													<button
														style={{ width: "20%" }}
														type="button"
														className=" btn contact-us-submit-button w-100"
														onClick={this.submitForm}
													>
														Submit
													</button>
												)}
										</div>
									</form>
								)}
						</div>
					</div>
				</div >

				{/*}
				<div className="col-sm-5 text-left text-center" >
					<VisibilitySensor >
						{({ isVisible }) => (
							<animated.div >
								<Spring
									from={{ opacity: isVisible ? 0 : 1 }}
									to={{ opacity: isVisible ? 1 : 0 }}
									config={{ duration: 3000 }}
								>

									{props => {
										return (
											<animated.div style={props}>

												<h4 style={{ fontSize: "25px", color: "darkgrey" }}>Or <br />Email us at</h4>
												<a href="mailto:contact@edistillery.net">
													<h6 className="contact-us-email-address" style={{ fontSize: "20px" }}>contact@edistillery.net</h6>
												</a>

											</animated.div>
										)
									}}
								</Spring>
							</animated.div>
						)}
					</VisibilitySensor >
				</div>
				*/}

			</div>
		);
	}

	ChangeHandler = (event) => {
		let nam = event.target.name ?? event.label;
		let val = event.target.value ?? event.value;
		this.setState({ [nam]: val });
	};

	CountryChangeHandler = (event) => {
		this.setState({ country: event.value });
	};



	onChangeCaptcha = (value) => {
		this.setState({ captchaValue: value });
	}

	validateEmail = () => {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(this.state.email).toLowerCase());
	};

	submitForm = () => {
		/*****validation *******/
		if (this.state.name == "") {
			alert("Name cannot be empty");
			return;
		}
		if (this.state.email == "") {
			alert("Email cannot be empty");
			return;
		}
		if (this.state.business_name == "") {
			alert("Company name cannot be empty");
			return;
		}
		if (this.state.country == "") {
			alert("Please select your country");
			return;
		}
		if (this.state.subject == "") {
			alert("Subject cannot be empty");
			return;
		}
		if (this.state.message == "") {
			alert("Message cannot be empty");
			return;
		}

		if (!this.state.captchaValue) {
			alert("Please verify that you are not a bot");
			return;
		}


		if (!this.validateEmail()) {
			alert("Invalid email address");
			return;
		}
		/*****validation *******/

		this.setState({
			submitting: true,
		});

		const comp = this;

		Axios.get("https://app.edistillery.net/web/contactus", {
			params: {
				name: comp.state.name,
				email: comp.state.email,
				business_name: comp.state.business_name,
				country: comp.state.country,
				subject: comp.state.subject,
				message: comp.state.message,
			},
		})
			.then(function (response) {
				comp.setState({
					submitting: false,
					submitted: true,
				});
			})
			.catch(function (err) {
				comp.setState({
					submitting: false,
					submitted: false,
				});
				alert(
					"Error sending ! Please check your internet connection or try again later"
				);
			});
	};
}

export default ContactUs;
