
import React,{Component} from "react";



export default class ExampleEvent extends Component {
    isLogin = true;


    renderHTML() {
        if (this.isLogin) {
            return (
                <div>

                <h3>heloo</h3>
                <button className="btn btn-success">Logout</button>
            </div>
            )
            
        } else {
            return <div>
                <h3>vui long login</h3>
                <button className="btn btn-success">login</button>
            </div>
            
        }



        
    }


    render() {
        return (
            <div>
                <h3>
                    ExampleEvent
                </h3>
                {this.renderHTML()}
            </div>
        )
    }

}