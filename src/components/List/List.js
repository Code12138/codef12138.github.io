import React, {Component,PropTypes} from 'react'
import './list.css'
import Item from '../Item/Item'
export default class List extends Component{

  static propTypes = {
    comments:PropTypes.array.isRequired,
    deleteCommont:PropTypes.func.isRequired
  }

  render (){
     const {comments,deleteCommont} = this.props
     const display = comments.length ===0? 'block' : 'none'
	  return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display}} >暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {
            comments.map((comment,index)=>(
              <Item key={index} comment={comment} deleteCommont={deleteCommont} index={index} ></Item>))

          }

        </ul>
      </div>

		)

	}

}
