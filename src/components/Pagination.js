import React, { Component } from 'react';

class Pagination extends Component {
    
    render() {
        return (
            <div className="nav">
                <button class="btn" onClick={() => this.props.prevPage()}>Prev</button>
                <div class="number-of-pages"> 
                    <span> {this.props.page} </span> of 13
                </div>
                <button class="btn" onClick={() => this.props.nextPage()}>Next</button>
            </div>
        )
    }
}

export default Pagination;