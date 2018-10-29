
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (e) =>{
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        
        e.target.elements.option.value = '';
        renderArray();
    }
}

const handleRemoveAll = () => {
    app.options = [];
    renderArray();
     
}

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const onMakeDecision = () => {

    const randomNum = Math.floor( Math.random() * app.options.length);
    const option = app.options[randomNum]
    alert(option)
}

const renderArray = () => {
    
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>
                {app.options.length > 0 ? <p>You Have Options</p> : <p>No options</p>}
            </p>
            <button disabled={app.options.length ===0} onClick={onMakeDecision}>What should i do?</button>
            <button onClick={handleRemoveAll}>Remove ALL</button>
            <ol>
                {app.options.map( (option) => <li key={option}> {option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>  
        </div> 
    );

    ReactDOM.render(template , appRoot);
}

renderArray();




