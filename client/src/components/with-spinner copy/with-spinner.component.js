import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

function WithSpinner() {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
}

export default React.memo(WithSpinner);