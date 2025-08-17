function Input(props){
    return (
        <input 
        type={props.type} 
        placeholder={props.placeholder}
        className="text-slate-400 outline-slate-400 bg-white rounded-md p-2 text-left"
        value={props.value}
        onChange={props.onChange}
        />
    );
}

export default Input    