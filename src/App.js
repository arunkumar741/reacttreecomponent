import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roottoggle: true
    }
  }
  toggleroot = () => {
    this.setState({
      roottoggle: !this.state.roottoggle
    });    
  }
  render() {
    const {roottoggle } = this.state;
    return (
      <div className="App">
       {
         data.children.map(item => {
           return (
              <div className="tree">
                  <ul>
                      <li>
                          <a href="#">{item.parentname}</a>
                          <div className="button1" onClick={this.toggleroot}> - </div>
                          <ul className={`node ${roottoggle ? 'block' : 'none'}`}>
                              <li>
                                  <a href="#">{item.child1name}</a>
                                  <ul>
                                      <li> <a href="#">{item.grandchild1}</a>
                                          <ul>
                                              <li><a href="#">{item.greatgrandchild1}</a></li>
                                          </ul>
                                      </li>
                                      <li><a href="#">{item.grandchild2}</a>
                                          <ul>
                                              <li><a href="#">{item.greatgrandchild2}</a></li>
                                          </ul>
                                      </li>
                                  </ul>
                      </li>
                              <li>
                                  <a href="#">{item.child2name}</a>
                                  <ul>
                                      <li>
                                          <a href="#">{item.grandchild3}</a>
                                          <ul>
                                              <li><a href="#">{item.greatgrandchild3}</a></li>
                                          </ul>
                                      </li>
                                  </ul>
                              </li>
                    </ul>
                  </li>
                </ul>
              </div >
           );
         })
       }
      </div>
    )
  }
}


export default App;

const data = {
  "parent": [
    {"empname" :'abc'}
  ],
  'children': [
    {
      'parentname': 'Employee Details',
      'child1name': 'John',
      'grandchild1': 'Employee',
      'grandchild2': 'Employee',
      'grandchild3': 'Employee',
      'child2name': 'Jerry',
      'greatgrandchild1': 'John emp001',
      'greatgrandchild2': 'John emp001',
      'greatgrandchild3': 'Jerry emp002'

    }
  ]
}