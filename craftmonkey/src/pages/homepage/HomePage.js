import React from 'react';
import './HomePage.scss';

import DirectoryMenu from '../../components/directory/DirectoryMenu';
import { HomePageContainer } from './HomepageStyledComponent';

const HomePage = () => {
	return (
		<HomePageContainer>
			<DirectoryMenu />
		</HomePageContainer>
	);
};

export default HomePage;
