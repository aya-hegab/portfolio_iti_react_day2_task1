import { useState } from "react";
import { portfolioarray } from "./portfolioarray";
function Portfolio() {
  const [portfolios, setPortfolios] = useState(portfolioarray);
  return (
    <div className="port">
      <div className="container">
        <h2>Portfolio</h2>
        <div className="d-flex flex-column flex-md-row justify-content-around  align-items-center  flex-wrap test">
          {portfolios.map((portfolio) => {
            return (
              <div
                className={portfolio.id % 2 === 0 ? "card dark" : "card light"}
                key={portfolio.name}
              >
                <div className="card-body">
                  <h3 className={portfolio.border}>{portfolio.name}</h3>
                </div>
              </div>
            );
          })}
          {/* <div className="card light">
            <div className="card-body">
              <h3 className="bord">Web Design</h3>
            </div>
          </div>
          <div className="card my-2 mx-md-2 dark">
            <div className="card-body ">
              <h3 className="bord">Mobile Design</h3>
            </div>
          </div>
          <div className="card light">
            <div className="card-body">
              <h3 className="bord">Logo Design</h3>
            </div>
          </div>

          <div className="card dark  ">
            <div className="card-body ">
              <h3>WEB APPLICATION DEVEOPMENT</h3>
            </div>
          </div>
          <div className="card my-2 mx-md-2 light ">
            <div className="card-body  ">
              <h3>MOBILE APPLICATION DEVEOPMENT</h3>
            </div>
          </div>
          <div className="card dark ">
            <div className="card-body ">
              <h3>PWA DEVEOPMENT</h3>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
