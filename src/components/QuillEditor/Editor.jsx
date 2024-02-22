import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Editor.css"; // Import CSS file for custom styles

const Editor = () => {
	const [content, setContent] = useState("");

	const handleContentChange = (value) => {
		setContent(value);
	};

	return (
		<div className="editor-container">
			<ReactQuill
				className="editor"
				theme="snow"
				value={content}
				onChange={handleContentChange}
			/>
			<button onClick={console.log(content)}>Save</button>
		</div>
	);
};

export default Editor;
