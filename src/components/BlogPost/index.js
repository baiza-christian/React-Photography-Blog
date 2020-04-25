import React from 'react';
import './style.css';
import Card from '../UI/Card';

/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {
  return(
        <div className="blogPostContainer">
            <Card style={{width: '100%'}}>
                <div className="blogHeader">
                    <span className="blogCategory">Featured</span>
                    <h1 className="postTitle">FBGM</h1>
                    <span className="postedBy">posted on April 20, 2020 by photomand</span>
                </div>

                <div className="postImageContainer">
                    <img src={require('../../BlogPImages/Portra400Mamiya10.JPG')} alt="Post Image"/>

                </div>
            </Card>
        </div>
   )

 }

export default BlogPost