import React from 'react';
import './MenuItem.scss';
import { withRouter } from 'react-router-dom';

export const MenuItem = props => {
	return (
		<div
			style={{
				backgroundImage: `url(${props.imageUrl})`
			}}
			className={`${props.size} menu-item`}
			onClick={() => props.history.push(`${props.match.url}${props.linkUrl}`)}
		>
			<div className="content">
				<div className="title">{props.title}</div>
				<div className="subtitle">SHOP NOW</div>
			</div>
		</div>
	);
};

export default withRouter(MenuItem);
