import './TodoError.css';

function TodoError(){
    return(
        <div className="container">
            <div className="container_terminal"></div>
            <div className="terminal_toolbar">
                <div className="butt">
                    <button className="btn btn-color"></button>
                    <button className="btn"></button>
                    <button className="btn"></button>
                </div>
                <p className="user">superuser: ~</p>
            </div>
            <div className="terminal_body">
                <div className="terminal_promt">
                    <span className="terminal_user">superuser:</span>
                    <span className="terminal_location">~</span>
                    <span className="terminal_bling">$ Unexpected error</span>
                    <span className="terminal_cursor"></span>
                </div>
            </div>
        </div>
    );
}
export {TodoError};

