import React, {useState, useEffect} from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';
import {NavLink} from 'react-router-dom';

/**
* @author
* @function SideBar
**/

const SideBar = (props) => {

  const [posts,setPosts] = useState([]);

    useEffect(() =>{
        const posts = blogPost.data;
        setPosts(posts)
    },posts);

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

          {
            posts.map(post => {
              return (
                <NavLink to={`/post/${post.id}`}>
                  <div className="recentPost">
                    <h3>{post.blogTitle}</h3>
                    <span>{post.postedOn}</span>
                  </div>
                </NavLink>
              );
            })
          }
        </div>
      </Card>
    </div>
   )

 }

export default SideBar