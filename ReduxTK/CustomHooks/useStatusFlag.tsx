import {useEffect, useState} from "react";
import React from "react";

function useStatusFlag() {
	const [flag, setFlag] = useState<boolean>(false);

	setTimeout(() => {
		setFlag(true);
	}, 2000);

	return [flag, setFlag];
}

export default useStatusFlag;
