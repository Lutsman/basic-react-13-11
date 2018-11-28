import React, {Component} from 'react';

export default class Accordion extends Component {
    state = {
        openId: null,
    };

    toggleAccordion = article => {
        if (!this.memo.has(article)) {
            this.memo.set(article, openId => openId === this.state.openId ?
                this.setState({openId: null}) :
                this.setState({openId}));
        }

        return this.memo.get(article);
    }

    memo = new Map();
}
