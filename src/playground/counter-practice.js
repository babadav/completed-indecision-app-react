
class Counter extends React.Component {
    constructor(props){
        super(props)

        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne= this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)

        this.state = {
            count: 0

        }

    }

    componentDidMount() {
      

        
            const stringCount = localStorage.getItem('count')
            const count = parseInt(stringCount,10)
     
            
     
            if (!isNaN(count)){
             this.setState( () => ({count}) )
            }
                
            
     }
 
     componentDidUpdate(prevProp, prevState) {
        const json = JSON.stringify(this.state.count)

        if(prevState.count !== this.state.count){
            console.log('saved')
            localStorage.setItem('count' , json)
        }

 
         
 
 
     }
 

    handleAddOne() {
        console.log('plus')
        console.log(this)

        this.setState( (prevState) =>{
            return {
                count: prevState.count + 1
            }
        })
            
        }
    handleMinusOne() {
        console.log('minus')
        console.log(this)
            
        this.setState( (prevState) => {
            return{
                count: prevState.count - 1
 
            }
        })
    }
    handleReset() {
        console.log('reset')
        console.log(this)

        
        this.setState( (prevState) => {
            return{
                count:  0
            }
            
        })
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}  </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}> -1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}













ReactDOM.render(<Counter />, document.getElementById('app'))



// const user = {
//     name: 'Andrew',
//     age: 61,
//     location: 'New York'
// }

// function getLocation(location){
//     if (location) {
//         return <p>Location: {location}</p>
//     } else {
//         return undefined
//     } 
// }




// let count = 0;
// const addOne = () =>{
//     count ++
//     renderCounterApp();
// }
// const minusOne = () =>{
//     count --;
//     console.log('- 1')
//     renderCounterApp();


// }
// const reset = () =>{
//     count = 0
//     console.log('-reset')
//     renderCounterApp();
// }







// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count:  {count}</h1>
//             <button onClick={addOne} >+ 1</button>
//             <button onClick={minusOne} >- 1</button>
//             <button onClick={reset} >Reset</button>
//         </div>
//     )

//     ReactDOM.render(templateTwo, appRoot)
// }

// renderCounterApp();


