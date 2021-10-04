import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

import './preview-collection.styles.scss';

const CollectionPreview = ({ title, items, id, otherItemProps, }) => {
	return (
		<div className="collection-preview">
			<h1 className="title">{title}</h1>
			<div className="preview">
				{
					items.filter((item, idx) => idx < 4).map((id, otherItemProps) => {
							return (
								<CollectionItem key={id} {...otherItemProps}
								/>	
							);
				})
			}
			</div>
		</div>
	);
}

export default CollectionPreview;