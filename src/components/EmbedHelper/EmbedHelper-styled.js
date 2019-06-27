import styled from 'styled-components';
import { CalciteH2 } from 'calcite-react/Elements';
import Panel from 'calcite-react/Panel';
import { ModalActions } from 'calcite-react/Modal';

const StyledDimensionsContainer = styled.div`
  display: flex;
`;

const StyledModalHeader = styled(CalciteH2)`
  margin-bottom: 0.5rem;
`;

const StyledPanel = styled(Panel)`
  margin-top: 1.55rem;
`;

const StyledModalActions = styled(ModalActions)`
  margin-top: 1.55rem;
`;

export {
  StyledDimensionsContainer,
  StyledModalHeader,
  StyledPanel,
  StyledModalActions
};
