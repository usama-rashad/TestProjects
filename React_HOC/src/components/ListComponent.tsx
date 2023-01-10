import React from "react";

interface IListComponent {
	names: string[];
    
}

function ListComponent(props: IListComponent) {
	return (
		<div className="listComponent">
			{props.names.map((name) => {
				return <h3>{name}</h3>;
			})}
		</div>
	);
}

export default ListComponent;
