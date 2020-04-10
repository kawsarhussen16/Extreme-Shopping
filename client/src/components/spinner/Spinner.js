import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./Spinner.style";

const Spinner = () => (
    <SpinnerOverlay>
        <SpinnerContainer />
    </SpinnerOverlay>
);

export const WithSpinner = WrapppedComponent => ({ isLoading, ...props }) => {
    return isLoading ? <Spinner /> : <WrapppedComponent {...props} />
}

export default Spinner;
