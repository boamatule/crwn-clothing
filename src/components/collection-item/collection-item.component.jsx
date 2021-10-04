import React from "react";

import './collection-item.styles.scss';

const CollectionItem = ({ imageUrl }) => (
	<div className="collection-item">
		<div 
			className="image"
			style={{
				backgroundImage: `url(${imageUrl})`
			}}
			>
			<div className="collection-footer">
				<span className="name"></span>
				<span className="price"></span>
			</div>
		
		</div>
	</div>

);

export default CollectionItem;