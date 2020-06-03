import React from 'react'
import Header from './Header'
import Paragraph1 from './Paragraph1'
import Articles from './Articles'
import Shopping from './Shopping'
import Counselling from './Counselling'
import Footer from './Footer'

class Home extends React.Component {
    constructor(props){
        super();
    }

    render(){
        return(
            <section>
                <Header />
                <Paragraph1 />
                <Articles />
                <Shopping />
                <Counselling />
                <Footer />
            </section>
            

        )
    }
}

export default Home;