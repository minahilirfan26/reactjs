import './index.scss'

function TextArea({onChange}){
return(
    <textarea className='input-box' onChange={onChange} placeholder="Type something..."></textarea>
)
}

export default TextArea