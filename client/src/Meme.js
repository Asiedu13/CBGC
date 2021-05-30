import React from 'react';
import MemeHead from './components/MemeHeader'
import MemeGen from './components/MemeGen'

class Meme extends React.Component{

    render(){
        return(
            <section>
                <MemeHead />
                <MemeGen />
            </section>
        )
    }
}
export default Meme;