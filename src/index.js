import React from 'react';
import ReactDOM from 'react-dom';
import {observer} from 'mobx-react';
import appState from './Observables/appState';

@observer
class TimerView extends React.Component {
  componentWillReceiveProps(){
    console.log(11);
  }

    render() {
        return (<button onClick={this.onReset}>
                Seconds passed: {this.props.appState.timer}
            </button>);
    }

    onReset = () => {
        this.props.appState.resetTimer();
    }
};

ReactDOM.render(<TimerView appState={appState} />, document.getElementById('app'));