import React, { useState } from 'react';
import './styles.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Input from '@material-ui/core/Input';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';

const MultipleImageComponent = () => {
	const [ selectedFiles, setSelectedFiles ] = useState([]);

	const handleImageChange = (e) => {
		// console.log(e.target.files[])
		if (e.target.files) {
			const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));

			// console.log("filesArray: ", filesArray);

			setSelectedFiles((prevImages) => prevImages.concat(filesArray));
			Array.from(e.target.files).map(
				(file) => URL.revokeObjectURL(file) // avoid memory leak
			);
		}
	};

	const renderPhotos = (source) => {
		console.log('source: ', source);
		return source.map((photo) => {
			return <img src={photo} alt="" key={photo} />;
		});
	};

	return (
		<div className="app">
			<div>
				<input type="file" id="file" multiple onChange={handleImageChange} />
				<div className="label1">
					<label htmlFor="file" className="image-upload">
						Add Image
					</label>
				</div>
				<div className="result">{renderPhotos(selectedFiles)}</div>
			</div>
		</div>
	);
};

export default MultipleImageComponent;