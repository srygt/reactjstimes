            // JSX - Javascript XML
            let root = document.getElementById('root');

            // React
            let template = <div>
                <h1 id="header">Silav Cîhan</h1>
                <div>Ev minak pir xweş çêbuye...</div>
                <ul>
                    <li>Erê</li>
                    <li>Na</li>
                    <li>Nizanim</li>
                </ul>
                </div>;

            let number = 0;
            let btnOneClassName = "btnRed";
            let btnMinusClassName = "btnGreen";
            let addOne=()=>{
                number++;
                console.log("add one");
                renderApp();
            }
            let minusOne = () =>{
                number--;
                console.log("minus one");
                renderApp();
            }

            function renderApp(){
                let template2 = (
                    <div>
                        <h1>Hejmar : {number}</h1>
                        <button id="btnOne" className={btnOneClassName} onClick={addOne}>+1</button>
                        <button id="btnTwo" className={btnMinusClassName} onClick={minusOne}>-1</button>
                    </div>
                );                
            // ReactDOM
            ReactDOM.render(template2, root);
            }

            function tick(){
                let element = (
                    <div>
                        <h2>
                            dem : {new Date().toLocaleTimeString()}
                        </h2>
                        <h3>dîrok : {new Date().toLocaleDateString()}</h3>
                    </div>
                );
                ReactDOM.render(element, root);
            }
            setInterval(tick, 1000);
            tick();
            //renderApp();    