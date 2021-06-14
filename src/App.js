import React, { Fragment, useState, useEffect } from "react";
import classes from "./App.module.css";
import EntryForm from "./compornets/EntryForm";

function App() {
	const [isSecondOn, setisSecondOn] = useState([]);
	const headers = ["Alpha", "Beta", "Gamma", "Zeeta"];
	const defaultData = [
		{
			id: 1,
			name1: "Lorem",
			name2: "ipsum",
			name4: "dolar",
			name3: "sit",
		},
		{
			id: 2,
			name1: "amit",
			name2: "consectetur",
			name4: "adipiscing",
			name3: "Praesent",
		},
	];

	const newrow = [
		{
			id: "new",
			name1: undefined,
			name2: undefined,
			name4: undefined,
			name3: undefined,
		},
	];

	// Populate previous data
	useEffect(() => {
		for (let x = 0; x < defaultData.length; x++) {
			setisSecondOn((pre) => {
				const anew = [...pre].concat([defaultData[x]]);
				return anew;
			});
		}
		// Adding new Emplty row
		setisSecondOn((pre) => {
			const anew = [...pre].concat(newrow[0]);
			return anew;
		});
	}, []);

	const formsubmitHandler = (e, name1, name2, name3, name4, valid) => {
		if (valid === "new") {
			setisSecondOn((pre) => {
				// remove last element
				const newarr = pre.slice(0, pre.length - 1);
				const anew = [...newarr].concat({
					id: Math.floor(Math.random() * 100) + 5,
					name1: name1,
					name2: name2,
					name3: name3,
					name4: name4,
				});
				const anew2 = [...anew].concat(newrow[0]);
				return anew2;
			});
		}

		if (valid !== "new") {
			for (let x = 0; x < isSecondOn.length - 1; x++) {
				if (isSecondOn[x].id === valid) {
					isSecondOn[x].name1 = name1;
					isSecondOn[x].name2 = name2;
					isSecondOn[x].name3 = name3;
					isSecondOn[x].name4 = name4;
					const newarr = [...isSecondOn];
					setisSecondOn(newarr);
				}
			}
		}
	};

	const formchangeHandler = (e, name1, name2, name3, name4, valid) => {
		if (valid !== "new") {
			for (let x = 0; x < isSecondOn.length - 1; x++) {
				if (isSecondOn[x].id === valid) {
					isSecondOn[x].name1 = name1;
					isSecondOn[x].name2 = name2;
					isSecondOn[x].name3 = name3;
					isSecondOn[x].name4 = name4;
					const newarr = [...isSecondOn];
					setisSecondOn(newarr);
				}
			}
		}
	};

	return (
		<Fragment>
			<div id="continer" className={classes.container}>
				<h1>Continuous Form</h1>{" "}
				<span> -Enter data in any cell - Add unlimited rows </span>
				{/* Show Headers */}
				<table>
					<thead>
						<tr>
							{headers.map((header) => {
								return <th key={header}>{header}</th>;
							})}
							<th>Functions</th>
						</tr>
					</thead>
				</table>
				{/* Here comes the part which will show entered data and new row */}
				<div className={classes.myMain}>
					{isSecondOn.map((element) => {
						return (
							<EntryForm
								key={element.id}
								myval={element.id}
								isSecondOn={isSecondOn}
								onSubmit={formsubmitHandler}
								onChange={formchangeHandler}
								default={{
									name1: element.name1,
									name2: element.name2,
									name3: element.name3,
									name4: element.name4,
								}}
							/>
						);
					})}
				</div>
				<div id="SavedData" className={classes.saveddata}>
					<h1>Saved Data</h1>
					<div>
						<table className={classes.mytable}>
							<thead className={classes.myhead}>
								<tr>
									{headers.map((header) => {
										if (header !== "Functions") {
											return (
												<th key={header}>{header}</th>
											);
										}
									})}
								</tr>
							</thead>
							<tbody>
								{isSecondOn.map((elem) => {
									if (elem.id !== "new") {
										return (
											<tr key={elem.id}>
												<td>{elem.name1}</td>
												<td>{elem.name2}</td>
												<td>{elem.name3}</td>
												<td>{elem.name4}</td>
											</tr>
										);
									}
								})}
							</tbody>
						</table>
					</div>
				</div>
				{/* <div className={classes.oneform}>
					<h1>One Form Data:</h1>
					<div>
						<label>
							Alpha <input type="text" name="lastname" />{" "}
						</label>
					</div>
				</div> */}
			</div>

			<div className={classes.myfooter}>
				<footer>
					<span>
						{" "}
						MS Access Style Continuous Form - Developed by @{" "}
						<a href="https://www.hamzarsaleemi.com" target="_blank">
							Hamza
						</a>
					</span>
				</footer>
			</div>
		</Fragment>
	);
}

export default App;
