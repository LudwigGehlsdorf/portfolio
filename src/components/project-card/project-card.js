const ProjectCard = (props) => {
    return (
        <div>
            <div>{props.title}</div>
            <img src={props.img}/>
            <div>{props.description}</div>
        </div>
    )
}