import React, {ComponentType} from "react";

interface IBaseComponent {
	inputComponent: ComponentType;
}

function HOC(props: IBaseComponent) {
	function modifier(){
		
	}
	return props.inputComponent;
}

export default HOC;
