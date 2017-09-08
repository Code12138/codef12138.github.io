import React, {Component} from 'react'
import Add from '../Add/Add'
import List from '../List/List'
export default class App extends Component{
	constructor (props){
	  super(props)
    this.state ={
	    comments :[
        {name:'tom',content:'哈哈哈哈'},
        {name:'jack',content:'哈哈哈哈'}

      ]
    }
  }

  AddComment = (comment) =>{
	  const {comments} = this.state
    console.log('@@@'+comment)
    comments.unshift(comment) // 在首位添加一个元素
    this.setState({comments})

  }

  deleteCommont = (index)=> {
    const {comments} = this.state

    comments.splice(index,1) // 在首位添加一个元素
    this.setState({comments})
  }

  render(){
	  const {comments} = this.state
	  return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
        <Add AddComment={this.AddComment}/>
        <List comments = {comments} deleteCommont={this.deleteCommont}/>
        </div>
      </div>

		)

	}

}
