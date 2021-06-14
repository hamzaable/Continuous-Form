import React, { useRef } from "react";
import Classes from "./EntryForm.module.css";
const EntryForm = (props) => {
	const name1 = useRef();
	const name2 = useRef();
	const name3 = useRef();
	const name4 = useRef();
	const mybutton = useRef();

	const classFinder = () => {
		if (props.myval !== "new") {
			return Classes.isUpdate;
		} else {
			return Classes.isNew;
		}
	};

	const submitHandler = (e) => {
		e.preventDefault();

		props.onSubmit(
			e,
			name1.current.value,
			name2.current.value,
			name3.current.value,
			name4.current.value,
			props.myval
		);
		if (props.myval === "new") {
			name1.current.value = null;
			name2.current.value = null;
			name3.current.value = null;
			name4.current.value = null;
		}
	};

    const changeHandler = (e) => {
		e.preventDefault();

		props.onChange(
			e,
			name1.current.value,
			name2.current.value,
			name3.current.value,
			name4.current.value,
			props.myval
		);
		
	};

  
	return (
		<form
			className={"" + classFinder()}
			onSubmit={(e) => {
				submitHandler(e);
			}}
            onChange={(e) => {
				changeHandler(e);
			}}
            // onFocus={(e)=>{console.log(name1.current.value,)}}
           
		>
			<input
				type="text"
				name="name1"
				ref={name1}
				defaultValue={props.default.name1}
			/>
			<input
				type="text"
				name="name2"
				ref={name2}
				defaultValue={props.default.name2}
			/>
			<input
				type="text"
				name="name3"
				ref={name3}
				defaultValue={props.default.name3}
			/>
			<input
				type="text"
				name="name4"
				ref={name4}
				defaultValue={props.default.name4}
			/>
			{props.myval != "new" ? (
				<input type="submit" value="Update" ref={mybutton} />
			) : (
				<input type="submit" value="Submit" ref={mybutton} />
			)}
		</form>
	);
};
export default EntryForm;
