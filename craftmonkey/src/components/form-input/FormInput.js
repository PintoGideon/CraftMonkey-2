import React from 'react';
import './FormInput.scss';

export default function FormInput({ handleChange, label, ...formprops }) {
	return (
		<div className="group">
			<input className="form-input" onChange={handleChange} {...formprops} />
			{label ? (
				<label
					className={`${
						formprops.value.length ? 'shrink' : ''
					} form-input-label`}
				>
					{label}
				</label>
			) : null}
		</div>
	);
}
