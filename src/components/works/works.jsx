import './works.css'
import WorksItem from "./works-item/works-item";

const Works = ({ works1, works2 }) => {
  return (
    <div id="works">
      <div className="container">
        <div className="row justify-content-center mb-5">

          <div className="col-8 text-center">
            <h1>Our Works</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
              itaque neque, delectus odio iure explicabo. </p>
          </div>
        </div>
      </div>
      <div className="box">
        <div className='row justify-content-center'>
          {
            works1.map(item => (
              <WorksItem title={item.title} des={item.des} url={item.url} />
            ))
          }
        </div>
        <div className="row justify-content-center">
          {
            works2.map(item => (
              <WorksItem title={item.title} des={item.des} url={item.url} />
            ))
          }
        </div>
      </div>

    </div >
  )
}

export default Works