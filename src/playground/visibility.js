

class VisibilityToggle extends React.Component {
    constructor(props){
        super(props)

        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

        this.state = {
            visibility: false
        }
    }
    // const title = 'Visibility'


   handleToggleVisibility() {

        this.setState ( (prevState) => {
            return {
                visibility: !prevState.visibility
            }
            
        } ) 
      
    }

    handleButton() {

  
      
    }

   

    render() {
        return (
            <div>
                 <h1>Visibility</h1>
                 <button onClick={this.handleToggleVisibility}> {this.state.visibility ? 'Hide details' : 'Show details' } </button>
                 <p>{ this.state.visibility ? 'These are details' : ' '}</p>
            </div>
        )
    }
}




const appRoot = document.getElementById('app');
ReactDOM.render(<VisibilityToggle />, appRoot)









// const title = 'Visibility Toggle';
// let visibility = false;



// const handleButton = () => {

//     console.log('hit')

//     visibility = !visibility; 
    
//     render();
// }

// const appRoot = document.getElementById('app');

// const render = () => {
 
//     const template = (
//         <div>
//             <h1>{title}</h1>
//             <button onClick={handleButton}> {visibility ? 'Hide details' : 'Show details' } </button>
//             <p>{ visibility ? 'These are details' : ' '}</p>
//         </div>
//     );
    
// }
// render();





