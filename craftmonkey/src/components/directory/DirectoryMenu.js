import React from 'react';
import './DirectoryMenu.scss';
import MenuItem from '../menu-item/MenuItem';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectoryItem } from '../../redux/directory/directorySelector';

const DirectoryMenu = ({ items }) => {
	return (
		<div className="directory-menu">
			{items.map(item => (
				<MenuItem
					key={item.id}
					title={item.title}
					imageUrl={item.imageUrl}
					size={item.size}
					linkUrl={item.linkUrl}
				/>
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	items: selectDirectoryItem
});

export default connect(mapStateToProps, null)(DirectoryMenu);
