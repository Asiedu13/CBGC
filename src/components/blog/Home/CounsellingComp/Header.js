import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends React.Component{
    constructor(props){
        super();

        this.state = {
            feelings : ['Depressed', 'Anxious', 'heart-broken', 'nervous'],
            value: 0,
        }
    }

    componentDidMount(){
        let value = Math.floor(Math.random() * this.state.feelings.length);
        console.log(value);
        this.setState({value: value})
    }

    render(){
        let icon;
        switch(this.state.value){
            case 0:
                 icon = 'sad-cry'
                break;
            
            case 1:
                icon = 'sad-tear'
                break;
            case 2: 
                icon = 'heart-broken'
            break;

            case 3:
                icon = 'low-vision'
                break;
                
            default:
                icon=""

        }
        return(
            
            <section  className="counselling__header">
                <div className="counselling__header__name">
                    <h1>Feeling  <b>{`${this.state.feelings[0 || this.state.value]}`}  </b> 
                        <FontAwesomeIcon icon={icon} color="yellow" size="2x" />
                     </h1>
                     <h2>You are not alone</h2>
                </div>
            </section>
        )
    }
}
export default Header;