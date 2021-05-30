import React, {Component} from 'react';
import Navigation from './AdminPageComp/Navigation'
import Display from './AdminPageComp/Display';
import Posts from './AdminPageComp/DisplayComp/Posts'
import Users from './AdminPageComp/DisplayComp/Users'
import Creator from './AdminPageComp/DisplayComp/Creator';
import ServerResp from './AdminPageComp/DisplayComp/ServerResp'
export default class AdminPage extends Component {
  render(){
    return (
      <section className="adminPage">
        {/* Nav Section */}
          <Navigation onModDisplay={this.props.onModDisplay}/>
        {/* Display Section */}
        <Display>
          {this.props.comp === "Posts" ? 
          <Posts deletePost = {(id) => this.props.deletePost(id)} onModDisplay={this.props.onModDisplay} articles={this.props.articles} /> : this.props.comp === "Users" ? <Users /> : this.props.comp === "Creator" ? <Creator postArticle={(draft)=>this.props.onPostArticle(draft)}  /> : this.props.comp === "success" ?  <ServerResp msg={this.props.msg} /> : ''
          
        }
        </Display>
      </section>
    )
  }
}