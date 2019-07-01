import styled from 'styled-components';
import { CalciteH2, CalciteP } from 'calcite-react/Elements';
import Panel from 'calcite-react/Panel';
import { ModalActions } from 'calcite-react/Modal';
import { FormControl } from 'calcite-react/Form';

import { unitCalc } from 'calcite-react/utils/helpers';

const StyledDimensionsContainer = styled.div`
  display: flex;
`;

const StyledModalHeader = styled(CalciteH2)`
  margin-bottom: 0.5rem;
`;

const StyledSubheader = styled(CalciteP)`
  color: ${props => props.theme.palette.darkerGray};
  margin-bottom: ${props => unitCalc(props.theme.baseline, 2, '/')};
`;

const StyledPanel = styled(Panel)`
  margin-top: 1.55rem;
`;

const StyledModalActions = styled(ModalActions)`
  margin-top: 1.55rem;
`;

const StyledSmallFormControl = styled(FormControl)`
  margin: 0;
  margin-right: ${props => unitCalc(props.theme.baseline, 2, '/')};
`;

export {
  StyledDimensionsContainer,
  StyledModalHeader,
  StyledSubheader,
  StyledPanel,
  StyledModalActions,
  StyledSmallFormControl
};
