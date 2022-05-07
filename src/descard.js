
import React, {Component} from 'react'

class Descard extends Component {
    render(){
        return(
            this.props.title == null ?(
                <div class="row">
                    <div class="col s12 m6">
                        <div class="card blue darken-1">
                            <div class="card-content white-text">
                            <span class="card-title">Not choose TODO yet</span>
                            <p>Please choose a todo to show the description.</p>
                            </div>
                        </div>
                    </div>
                    </div>
            ):
            (
                <div class="row">
                    <div class="col s12 m6">
                        <div class="card blue darken-1">
                            <div class="card-content white-text">
                            <span class="card-title">{this.props.title}</span>
                            <p>{this.props.infor}</p>
                            </div>
                        </div>
                    </div>
                    </div>
            )
        );
    }
}

export default Descard;