import React from 'react'
class  Counter extends React.Component {
    state = {
        count: 0
    }
    tambah = () => {
        this.setState(({ count }) => ({
            count: count + 1
        })) 
    }
    kurang = () => {
    if (this.state.count !==0)  
    {this.setState(({ count }) => ({
            count: count - 1
        }))}
        else 
        alert ("wow")
        
    }
    
   
    render() {
        return (<div>
            <button onClick={this.tambah}>+</button>
            <p>{this.state.count}</p>
            <button onClick={this.kurang}>-</button>
            
            </div>)

    }
}
export default Counter