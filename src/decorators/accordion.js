import React, {Component} from 'react';

export default class Accordion extends Component {
    state = {
        openId: null,
    };

    toggleAccordion = openId =>
        openId === this.state.openId ?
            this.setState({openId: null}) :
            this.setState({openId});
}
