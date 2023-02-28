import './transition.css'

const Transition = (props) => {
    return (
        <div className="fade-container">
            <div className='circular-fade-out'>
                {props.children}
            </div>
        </div>
    )
}

export default Transition