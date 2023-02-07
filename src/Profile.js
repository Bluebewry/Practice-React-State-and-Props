import React, { Component } from 'react'

export default class Profile extends Component {
    constructor(){
        super()
        this.state = {
            'fav color': 'green',
            'fav number': '9'
        }
    }


  render() {
    return (
        <div>
            <h3 className='text-center' >About this Person Page</h3>
            <p>
                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#collapseWidthExample" aria-expanded="false" 
                    aria-controls="collapseWidthExample">
                    Click to reveal favorites
                </button>
            </p>
            <div>
                <div className="collapse collapse-horizontal" id="collapseWidthExample">
                    <div className="card card-body">
                        Their favorite color is {this.state['fav color']}, and their favorite number is {this.state['fav number']}!

                    </div>
                </div>
            </div>
        </div>
    )
  }
}


