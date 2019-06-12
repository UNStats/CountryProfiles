import styled from 'styled-components';
import { FormControl } from 'calcite-react/Form';

const StyledCountrySelector = styled.div`
  height: calc(100% - 120px);
`;

const StyledFormControl = styled(FormControl)`
  width: 100%;
  margin: 0 0 1rem;
`;

export { StyledCountrySelector, StyledFormControl };
