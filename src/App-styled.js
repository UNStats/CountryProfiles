import styled from 'styled-components';

import Loader from 'calcite-react/Loader';

const CenteredLoader = styled(Loader)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
`;

export { CenteredLoader };
