import React, { Component,  Fragment } from 'react';

import '../css/LoadButton.css'
import { Spinner } from './Spinner';

class LoadButton extends Component {
    render() {
        return(
            <Fragment>
                {this.props.loading ? 
                    (
                        <Spinner />
                    ):
                    (
                        <div 
                            className="loadButton"
                            onClick={this.props.onButtonClick}
                        >
                            <h3 className="loadButon--text">VOIR PLUS</h3>
                        </div>
                    )
                }
            </Fragment>
            
        )
    }
}

export { LoadButton }