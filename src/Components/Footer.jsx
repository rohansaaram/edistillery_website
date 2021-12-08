

import logo from "./../images/logo1.png";


function Footer() {
	return (
		<div>
			<div className="row">
				<div className="col-sm-12">

				</div>

			</div>

			<div
				className="row pl-5 pr-5 pb-5"
				style={{ backgroundColor: "#", color: "#" }}
			>

				<div className="col-sm-3">
					<div className="row">
						<div className="col-sm-12 pt-5 ">
							<img src={logo} alt="" style={{ height:"125px", width:"700px" }}  />
						</div>
						<div className="col-sm-12 ">{/*links*/}</div>
					</div>
				</div>
				<div className="col-sm-9">
					<div
						className="row pt-5"
						style={{
							fontFamily: "Poppins,sans-serif",
							fontWeight: "bold",
							fontSize: "12px",
							paddingTop: "25px",
							lineHeight: "10px",
						}}
					>
						<div className="col-sm-12">
							<h5 className="h1Class" style={{ color: "rgb(139, 129, 129)" }}> Why eDistillery?</h5>
							<h6 style={{ color: "rgb(139, 129, 129)", fontSize: "15px" }} >
								Alcohol as an excisable product should be accounted properly and
								is liable to be reported intevally to excisable authorties in every
								country.
								Therefore, eDistillery is designed to take hold of all the alcohol
								moving inside a warehouse and maintains all records the government
								may demand at any time. It also helps in accounting the payable
								excise amount and stock-taking that a distillery needs to submit
								monthly or intervally.

							</h6>
						</div>

					</div>
				</div>

			</div>
		</div>
	);
}

export default Footer;
