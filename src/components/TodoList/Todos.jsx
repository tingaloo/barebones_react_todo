import React, {Component} from 'react'
import TodoItem from './TodoItem'

class Todos extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const divStyle = {
      paddingLeft: 0
    };
    const items = this.props.todos.map(function(item, idx){
      return <TodoItem key={idx} item={item}/>
    })
    if (items.length == 0) {
      return <div>Keep yourself busy, add some Todos!</div>
    } else {
      return (
        <ul style={divStyle}>{items}</ul>
      )
    }
  }
}

export default Todos
