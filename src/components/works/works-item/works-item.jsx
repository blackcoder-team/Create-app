import "../works.css";

const WorksItem = ({title, des, url}) => {

    return (
        <div className="col-3 m-3">
            <a href="" style={{backgroundImage: `url(${url})`}}>
                <div className="text align-middle">
                    <h2>{title}</h2>
                    <h4>{des}</h4>
                </div>
            </a>
        </div>
    )
}

export default WorksItem