import React, { Component } from 'react';

import Button from 'calcite-react/Button';
import CopyToClipboard from 'calcite-react/CopyToClipboard';
import Panel from 'calcite-react/Panel/Panel';
import Modal from 'calcite-react/Modal';
import TextField from 'calcite-react/TextField';
import Checkbox from 'calcite-react/Checkbox';
import { CalciteP } from 'calcite-react/Elements';
import {
  FormControl,
  Fieldset,
  Legend,
  FormControlLabel
} from 'calcite-react/Form';

import {
  StyledDimensionsContainer,
  StyledModalHeader,
  StyledPanel,
  StyledModalActions
} from './EmbedHelper-styled';

export class EmbedHelper extends Component {
  state = {
    allSeries: [],
    includedSeries: [],
    width: 800,
    height: 600,
    showHeader: true
  };

  componentDidMount() {
    const allSeries = this.getSeries(this.props.goal.targets);
    this.setState({
      allSeries,
      includedSeries: allSeries.map(s => s.seriesCode)
    });
  }

  closeModal = () => {
    this.props.onClose();
  };

  getEmbedString = () => {
    const { height, width, showHeader, includedSeries } = this.state;

    const staticAttrs = 'frameborder="0" marginheight="0" marginwidth="0"';

    return `<iframe width="${width}" height="${height}" title="${
      this.props.goalInfo.short
    }" src="${this.getEmbedUrl(
      includedSeries,
      showHeader
    )}" ${staticAttrs}></iframe>`;
  };

  getEmbedUrl = (includedSeries, showHeader) => {
    let seriesPart = '';
    let headerPart = '';

    if (includedSeries && includedSeries.length) {
      seriesPart = `&series=${includedSeries.join(',')}`;
    }

    if (!showHeader) {
      headerPart = '&hideGoalHeader=true';
    }

    return `${window.location.origin}${window.location.pathname}?goal=${
      this.props.goal.goalCode
    }${seriesPart}${headerPart}`;
  };

  getSeries(targets) {
    const seriesList = [];
    targets.forEach(target => {
      target.indicators.forEach(indicator => {
        indicator.facts.forEach(series => {
          seriesList.push(series);
        });
      });
    });

    return seriesList;
  }

  getSeriesCheckboxList(series) {
    return series.map(s => (
      <Checkbox
        key={s.seriesCode}
        value={s.seriesCode}
        checked={this.state.includedSeries.indexOf(s.seriesCode) !== -1}
        onChange={e =>
          this.onIncludedSeriesChanged(s.seriesCode, e.target.checked)
        }
      >
        {s.seriesTitle}
      </Checkbox>
    ));
  }

  onHeightChanged = e => {
    this.setState({ height: e.target.valueAsNumber });
  };

  onWidthChanged = e => {
    this.setState({ width: e.target.valueAsNumber });
  };

  onShowHeaderChanged = e => {
    this.setState({ showHeader: e.target.checked });
  };

  onIncludedSeriesChanged = (id, checked) => {
    console.log(id, checked);

    if (!checked) {
      this.setState({
        includedSeries: this.state.includedSeries.filter(s => s !== id)
      });
    }

    if (checked) {
      this.setState({ includedSeries: [...this.state.includedSeries, id] });
    }
  };

  render() {
    return (
      <Modal
        open={true}
        onRequestClose={this.closeModal}
        appElement={document.body}
      >
        <StyledModalHeader>Embed in a Website</StyledModalHeader>
        <CalciteP>
          Choose how you would would like to display this goal on your website.
        </CalciteP>
        <CopyToClipboard>{this.getEmbedString()}</CopyToClipboard>
        <StyledPanel>
          <CalciteP>Choose the size of your iFrame</CalciteP>
          <StyledDimensionsContainer>
            <FormControl noValidation>
              <FormControlLabel>Width</FormControlLabel>
              <TextField
                value={this.state.width}
                type="number"
                onChange={this.onWidthChanged}
              />
            </FormControl>
            <FormControl noValidation>
              <FormControlLabel>Height</FormControlLabel>
              <TextField
                value={this.state.height}
                type="number"
                onChange={this.onHeightChanged}
              />
            </FormControl>
          </StyledDimensionsContainer>
        </StyledPanel>
        <Panel>
          <FormControl noValidation>
            <Checkbox
              checked={this.state.showHeader}
              onChange={this.onShowHeaderChanged}
            >
              Show goal header
            </Checkbox>
          </FormControl>
        </Panel>
        <Panel>
          <FormControl>
            <Fieldset name="seriesToShow">
              <Legend>Series to show:</Legend>
              {this.getSeriesCheckboxList(this.state.allSeries)}
            </Fieldset>
          </FormControl>
        </Panel>
        <StyledModalActions>
          <Button onClick={this.closeModal}>Done</Button>
        </StyledModalActions>
      </Modal>
    );
  }
}

export default EmbedHelper;
