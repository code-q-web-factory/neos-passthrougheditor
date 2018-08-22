import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class PassthroughEditor extends Component {
    static propTypes = {
        value: PropTypes.any,
        commit: PropTypes.func.isRequired,
        options: PropTypes.object
    };

    render() {
        const {value, commit, options} = this.props;

        if (value !== options.value) {
            commit(options.value);
        }
        return null;
    }
}
