
import React, { Component} from 'react';
import { AddPost } from '../popups/AddPost';
import { EditPost } from '../popups/EditPost';
import {Button, ButtonToolbar, Table} from 'react-bootstrap';
import { Navigation } from '../components/Navigation';

 class Posts extends Component {
    constructor(props){
        super(props);
        this.state={post:[], addModalShow: false, editModalShow: false, UtilisateurUsername: false};
    }
    
 
   refreshList(){

    
       fetch(process.env.REACT_APP_API+'posts')
           .then(response => {
               console.log(response);
               if(response.status === 200){
                  return response.json()
               }
               console.log(response.status);
               throw response;
           }    )
           .then(data => {
               console.log(data);
               this.setState({post:data.reverse()});
           })
           .catch(error => {
               console.error(error.message)
           }); 
   }

   componentDidMount(){
       this.refreshList();
   } 

   componentDidUpdate(){
       this.refreshList();
   }

   deletePost(postid){
       if(window.confirm('Êtes vous sûr de vouloir supprimer ?')){
           fetch(process.env.REACT_APP_API + 'posts/' + postid, {
               method: 'DELETE',
               header: {
                   'Accept': 'application/json',
                   'Content-Type': 'application/json'
               }
           })
           .then(response => response.json())
           .then(result => {
               alert(result);
           })
       }
   }

   
   render(){
            const { post, postid, postname, postcategory, postarticleuploaddate, postdescription, postyoutubehref, postimagefilename} = this.state;
            let addModalClose = () => this.setState({addModalShow:false});
            let editModalClose = () => this.setState({editModalShow:false});

            return(
             <div>
                 <nav id="nav-wrap">
          
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>
                
        <Navigation />
                 </nav>  <div style={{marginTop:60,justifyContent: 'center'}}>

                        <h3>This is Posts page</h3>
                        <div className="mt-5 d-flex justify-content-right">
                        <ButtonToolbar>
                            <Button 
                                variant='primary'
                                onClick={() => this.setState({addModalShow:true})}>
                                    Ajouter un post
                                </Button>
                                <AddPost show={this.state.addModalShow}
                                    onHide={addModalClose} />
                        </ButtonToolbar>
                        </div>
                        <div className="mt-5 d-flex justify-content-left">
                        <Table className="mt-4" striped bordered hover size="sm">
                            <thead>
                                <tr className='m-2'>
                                    <th>Post Id</th>
                                    <th>Post Name</th>
                                    <th>Category</th>
                                    <th>Article upload date</th>
                                    <th>Post Description</th>
                                    <th>Post Youtube Href</th>
                                </tr>
                            </thead>
                            <tbody>
                                {post.map(post=>
                                    <tr key={post.PostId}>
                                    <td>{post.PostId}</td>
                                    <td>{post.PostName}</td>
                                    <td>{post.Category}</td>
                                    <td>{post.ArticleUploadDate}</td>
                                    <td>{post.PostDescription}</td>
                                    <td>{post.PostYoutubeHref}</td>
                                    <td>{post.ImageFileName}</td>
                                    <td>
                                        <ButtonToolbar>
                                            <Button 
                                                className="mr-2" 
                                                variant="info"
                                                onClick={() => this.setState({
                                                    editModalShow:true, postid: post.PostId, postname:post.PostName,
                                                    postcategory: post.Category, postarticleuploaddate: post.ArticleUploadDate,
                                                     postdescription: post.PostDescription,
                                                    postyoutubehref: post.PostYoutubeHref, postimagefilename: post.ImageFileName
                                                })}>Modifier
                                            </Button>

                                            <Button 
                                                className="mr-2" 
                                                variant="danger"
                                                onClick={() => 
                                                this.deletePost(post.PostId)
                                                }>Supprimer
                                            </Button>

                                            <EditPost
                                                show={this.state.editModalShow}
                                                onHide={editModalClose}
                                                postid={postid}
                                                postname={postname}
                                                postcategory={postcategory}
                                                postarticleuploaddate={postarticleuploaddate}
                                                postdescription={postdescription}
                                                postyoutubehref={postyoutubehref}
                                                postimagefilename={postimagefilename}
                                            />
                                        </ButtonToolbar>
                                    </td>
                                    </tr>)}
                            </tbody>
                        </Table>
    
                        
                    </div>
                 </div>
                </div>   )
        }

    }

    export default Posts;