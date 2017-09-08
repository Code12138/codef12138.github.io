import React, {Component,PropTypes} from 'react'
import './item.css'
export default class Item extends Component{

  static propTypes ={
    comment : PropTypes.object.isRequired,
    deleteCommont:PropTypes.func.isRequired,
    index:PropTypes.number.isRequired
  }
  deleteItem = ()=>{
    const {comment,deleteCommont,index} = this.props
    if(window.confirm('确定删除${commont.name}的评论吗？')){
      deleteCommont(index)
    }
  }


	render (){
    const {comment} = this.props
    console.log('...'+comment.name)
	  return (

      <li className="list-group-item">
        <div className="handle">
          <a href="javascript:;" onClick={this.deleteItem}>删除</a>
        </div>
        <p className="user"><span >{comment.name}</span><span>说:</span></p>
        <p className="centence">{comment.content}!</p>
      </li>

		)

	}

}
