import React from 'react';
import './style.css';
import Card from '../UI/Card';

/**
* @author
* @function SideBar
**/

const SideBar = (props) => {
  return(
    <div className="sidebarContainer">
      <Card style={{marginBottom: '20px',padding: '20px',boxSizing:'border-box'}}>
        <div className="cardHeader">
          <span>About</span>
          <div className="profileImageContainer">
            <img src={require('../../BlogPImages/SX-70Me.JPG')} alt="Profile Image"/>
          </div>
          <div className="cardBody">
            <p className="personalBio">My name is Christian Jay Baiza. I'm a self proclaimed photographer. xD.</p>
          </div>
        </div>
      </Card>

      <Card style={{marginBottom: '20px',padding: '20px',boxSizing:'border-box'}}>
        <div className="cardHeader">
          <span>Social Media</span>
        </div>
      </Card>

      <Card style={{marginBottom: '20px',padding: '20px',boxSizing:'border-box'}}>
        <div className="cardHeader">
          <span>Recents</span>
        </div>

        <div className="recentPosts">
          <div className="recentPost">
            <h3>Post Title</h3>
            <span>April 20, 2020</span>
          </div>

          <div className="recentPost">
            <h3>Post Title</h3>
            <span>April 20, 2020</span>
          </div>
        </div>
      </Card>
    </div>
   )

 }

export default SideBar