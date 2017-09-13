import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import unboundActions from '../actions';
import store from '../reduxStore';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

let actions = bindActionCreators(unboundActions, store.dispatch);

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
class OutputStoreEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      initialValue: '',
      type: ''
    }
  }

  handleClose() {

  };

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleChangeInitialValue(event) {
    this.setState({initialValue: event.target.value});
  }

  handleChangeType(event, key, payload) {
    this.setState({type: payload});
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose.bind(this)}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose.bind(this)}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Edit Property"
          actions={actions}
          modal={false}
          open={this.props.outputStore.editing === null ? false : true}
          onRequestClose={this.handleClose.bind(this)}
        >
          <TextField floatingLabelText="Name" value={this.state.name} onChange={this.handleChangeName.bind(this)}/>
          <TextField floatingLabelText="Initial Value" value={this.state.initialValue} onChange={this.handleChangeInitialValue.bind(this)}/>
          <SelectField floatingLabelText="Type" value={this.state.type} onChange={this.handleChangeType.bind(this)}>
            <MenuItem value={'string'} primaryText="string" />
            <MenuItem value={'number'} primaryText="number" />
            <MenuItem value={'boolean'} primaryText="boolean" />
            <MenuItem value={'object'} primaryText="object" />
            <MenuItem value={'array'} primaryText="array" />
          </SelectField>
        </Dialog>
      </div>
    );
  }
}

OutputStoreEdit = connect(
  (state) => (
    {
      outputStore: state.outputStore
    }
  )
)(OutputStoreEdit);

export default OutputStoreEdit;