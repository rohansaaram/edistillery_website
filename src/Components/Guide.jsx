import React, { Component } from "react";
import Axios from "axios";

class Guide extends Component {
	constructor(props) {
		super(props);
		this.state = {
			indexes: [],
			loading: true,
			error: false,
			errorMessage: null,

			dir: null,
		};

		this.fetchTree();
	}

	render() {
		var html = (
			<div className="m-5 p-5">
				<h1 className="mb-5">Application Guide</h1>
				{this.state.loading ? (
					<div className="row w-100 h-100 d-flex justify-content-center align-items-center">
						<div className="text-center">
							<div className="spinner-border" role="status">
								<span className="sr-only">Loading...</span>
							</div>
						</div>
					</div>
				) : this.state.dir !== null ? (
					this.renderSection()
				) : (
					this.getTree()
				)}
			</div>
		);

		return html;
	}

	getTree = () => {
		var tree = this.state.dir
			? this.state.dir.children
			: this.state.indexes.data;

		return (
			<div className="col ml-5">
				<ul>
					{tree.map((val, i) => {
						{
							return (
								<li>
									<a
										href="javascript:void(0)"
										onClick={() => this.fetchUrl(val)}
									>
										{val.heading}
									</a>
									{val.children ? (
										<ul>
											{val.children.map((val1, i1) => (
												<li>
													<a
														href="javascript:void(0)"
														onClick={() => this.fetchUrl(val1)}
													>
														{val1.heading}
													</a>
													{val1.children ? (
														<ul>
															{val1.children.map((val2, i1) => (
																<li>
																	<a
																		href="javascript:void(0)"
																		onClick={() => this.fetchUrl(val2)}
																	>
																		{val2.heading}
																	</a>
																	{val2.children ? (
																		<ul>
																			{val2.children.map((val3, i1) => (
																				<li>
																					<a
																						href="javascript:void(0)"
																						onClick={() => this.fetchUrl(val3)}
																					>
																						{val3.heading}
																					</a>
																					{val3.children ? (
																						<ul>
																							{val3.children.map((val4, i1) => {
																								<li>
																									<a
																										href="javascript:void(0)"
																										onClick={() =>
																											this.fetchUrl(val4)
																										}
																									>
																										{val4.heading}
																									</a>
																								</li>;
																							})}
																						</ul>
																					) : (
																						""
																					)}
																				</li>
																			))}
																		</ul>
																	) : (
																		""
																	)}
																</li>
															))}
														</ul>
													) : (
														""
													)}
												</li>
											))}
										</ul>
									) : (
										""
									)}
								</li>
							);
						}
					})}
				</ul>
			</div>
		);
	};

	fetchTree = () => {
		const comp = this;

		Axios.get("https://app.edistillery.net/guide/menu")
			.then(function (response) {
				if (response.error)
					comp.setState({
						loading: true,
						error: true,
						errorMessage: null,
					});
				else {
					comp.setState({
						loading: false,
						error: false,
						indexes: response.data,
					});
				}
			})
			.catch(function (err) {
				comp.setState({
					isReloading: false,
					error: true,
					errorMessage: null,
				});
			});
	};

	fetchUrl = (dir) => {
		const comp = this;

		comp.setState({
			loading: true,
			error: false,
		});

		setTimeout(function () {
			comp.setState({
				loading: false,
				error: false,
				dir: dir,
			});
		}, 1000);
	};

	renderSection = () => {
		return (
			<div>
				<small className="float-right">
					<a href="javascript:void(0)" onClick={this.handleBack}>
						{" "}
						{"<< Back"}{" "}
					</a>
				</small>
				<div className="pl-3">
					<h2>{this.state.dir.heading}</h2>
				</div>
				<br />
				<div className="section pl-3">
					{this.state.dir.details.map((para, i) => {
						var html = (
							<div>
								{para.heading ? <h4>{para.heading}</h4> : ""}
								<p>{para.text}</p>
								{para.list ? (
									<ul>
										{para.list.map((item) => {
											return <li>{item}</li>;
										})}
									</ul>
								) : (
									""
								)}
							</div>
						);
						return html;
					})}

					<br />

					{this.state.dir.children ? (
						<div>
							<h5 className="ml-5"> Sections : </h5>
							<div>{this.getTree()}</div>
						</div>
					) : (
						""
					)}
				</div>
			</div>
		);
	};

	handleBack = () => {
		this.setState({
			loading: false,
			error: false,
			dir: null,
		});
	};
}

export default Guide;
