import './EmptyTodo.css';
function EmptyTodo(){
    return (
        <div className="container_empty">
        <div className="container_terminal_empty"></div>
        <div className="terminal_toolbar_empty">
            <div className="butt_empty">
                <button className="btn_empty btn-color_empty"></button>
                <button className="btn_empty"></button>
                <button className="btn_empty"></button>
            </div>
            <p className="user_empty">superuser: ~</p>
        </div>
        <div className="terminal_body_empty">
            <div className="terminal_promt_empty">
                <span className="terminal_user_empty">superuser:</span>
                <span className="terminal_location_empty">~</span>
                <span className="terminal_bling_empty">$ Add your first TODO using the button</span>
                <span className="terminal_cursor_empty"></span>
            </div>
        </div>
    </div>
    );
}

export {EmptyTodo};