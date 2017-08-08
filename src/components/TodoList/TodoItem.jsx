import React, {Component} from 'react'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state ={
      checked: false
    }
    this.removeTodo = this.removeTodo.bind(this)
  }

  removeTodo() {
    this.setState({checked: !this.state.checked})
  }


  render() {
    const divStyle = {
      listStyle: 'none',
    };
    if (this.state.checked == true) {
      return (
        <div></div>
      )
    } else {
      return (
        <li style={divStyle}>
        <button onClick={this.removeTodo}> Remove  </button>

        {this.props.item}
        </li>

      )
    }

  }
}


export default TodoItem
