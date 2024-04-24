import { useState } from "react";
import { skillsarray } from "./skillsarray";

function Skills() {
  const [skills, setSkills] = useState(skillsarray);
  return (
    <div className="container flex2">
      <div className="upper2">
        <h2>Skills</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
          possimus maiores cum. Porro, qui. Possimus quia ipsa cumque ab cum
          illo, ad corporis quibusdam quae earum, nihil aliquid iure deserunt!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, minima
          molestias aliquid esse provident qui maiores officia nemo iste ex
          fugit distinctio laborum laudantium perspiciatis tempora temporibus.
          At, debitis a. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Aliquam possimus maiores cum. Porro, qui. Possimus quia ipsa
          cumque ab cum illo, ad corporis quibusdam quae earum, nihil aliquid
          iure deserunt!
        </p>
      </div>
      <div className="lower2">
        <div className="left2">
          <h3>MY FOCUS</h3>
          <ul>
            <li>UI/UX Design</li>
            <li>Responsive Design</li>
            <li>Web Design</li>
            <li>Mobile App Design</li>
          </ul>
        </div>
        <div className="right2">
          {skills.map((skill) => {
            return (
              <div
                className="progress-stacked mb-4"
                style={{ height: "4rem" }}
                key={skill.name}
              >
                <div
                  className="progress rounded-0"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow={10}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{
                    width: "30%",
                    height: "100%",
                    backgroundColor: "rgb(126, 126, 126)",
                  }}
                >
                  <div
                    className="progress-bar overflow-visible text-dark "
                    style={{ width: "0%" }}
                  >
                    <span
                      style={{
                        fontSize: "2rem",
                        color: "#eee",
                        paddingLeft: skill.paddingleft,
                      }}
                    >
                      {skill.name}
                    </span>
                  </div>
                </div>
                <div
                  className="progress "
                  role="progressbar"
                  aria-label="Segment two"
                  aria-valuenow={30}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: skill.width, height: "100%" }}
                >
                  <div
                    className="progress-bar"
                    style={{
                      backgroundColor: "rgb(202, 200, 200)",
                    }}
                  />
                </div>
              </div>
            );
          })}
          {/* <div className="progress-stacked mb-4" style={{ height: "4rem" }}>
            <div
              className="progress rounded-0"
              role="progressbar"
              aria-label="Example with label"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{
                width: "30%",
                height: "100%",
                backgroundColor: "rgb(126, 126, 126)",
              }}
            >
              <div
                className="progress-bar overflow-visible text-dark "
                style={{ width: "0%" }}
              >
                <span
                  style={{
                    fontSize: "2rem",
                    color: "#eee",
                    paddingLeft: "4rem",
                  }}
                >
                  HTML
                </span>
              </div>
            </div>
            <div
              className="progress "
              role="progressbar"
              aria-label="Segment two"
              aria-valuenow={30}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{ width: "67%", height: "100%" }}
            >
              <div
                className="progress-bar"
                style={{
                  backgroundColor: "rgb(202, 200, 200)",
                }}
              />
            </div>
          </div>
          
          <div className="progress-stacked mb-4" style={{ height: "4rem" }}>
            <div
              className="progress rounded-0"
              role="progressbar"
              aria-label="Example with label"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{
                width: "30%",
                height: "100%",
                backgroundColor: "rgb(126, 126, 126)",
              }}
            >
              <div
                className="progress-bar overflow-visible text-dark "
                style={{ width: "0%" }}
              >
                <span
                  style={{
                    fontSize: "2rem",
                    color: "#eee",
                    paddingLeft: "3rem",
                  }}
                >
                  JavaScript
                </span>
              </div>
            </div>
            <div
              className="progress "
              role="progressbar"
              aria-label="Segment two"
              aria-valuenow={30}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{ width: "55%", height: "100%" }}
            >
              <div
                className="progress-bar"
                style={{
                  backgroundColor: "rgb(202, 200, 200)",
                }}
              />
            </div>
          </div>
         
          <div className="progress-stacked mb-4" style={{ height: "4rem" }}>
            <div
              className="progress rounded-0"
              role="progressbar"
              aria-label="Example with label"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{
                width: "30%",
                height: "100%",
                backgroundColor: "rgb(126, 126, 126)",
              }}
            >
              <div
                className="progress-bar overflow-visible text-dark "
                style={{ width: "0%" }}
              >
                <span
                  style={{
                    fontSize: "2rem",
                    color: "#eee",
                    paddingLeft: "5rem",
                  }}
                >
                  React
                </span>
              </div>
            </div>
            <div
              className="progress "
              role="progressbar"
              aria-label="Segment two"
              aria-valuenow={30}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{ width: "40%", height: "100%" }}
            >
              <div
                className="progress-bar"
                style={{
                  backgroundColor: "rgb(202, 200, 200)",
                }}
              />
            </div>
          </div>
         
          <div className="progress-stacked mb-4" style={{ height: "4rem" }}>
            <div
              className="progress rounded-0"
              role="progressbar"
              aria-label="Example with label"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{
                width: "30%",
                height: "100%",
                backgroundColor: "rgb(126, 126, 126)",
              }}
            >
              <div
                className="progress-bar overflow-visible text-dark "
                style={{ width: "0%" }}
              >
                <span
                  style={{
                    fontSize: "2rem",
                    color: "#eee",
                    paddingLeft: "1.5rem",
                  }}
                >
                  PhotoShop
                </span>
              </div>
            </div>
            <div
              className="progress "
              role="progressbar"
              aria-label="Segment two"
              aria-valuenow={30}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{ width: "50%", height: "100%" }}
            >
              <div
                className="progress-bar"
                style={{
                  backgroundColor: "rgb(202, 200, 200)",
                }}
              />
            </div>
          </div>
          
          <div className="progress-stacked" style={{ height: "4rem" }}>
            <div
              className="progress rounded-0"
              role="progressbar"
              aria-label="Example with label"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{
                width: "30%",
                height: "100%",
                backgroundColor: "rgb(126, 126, 126)",
              }}
            >
              <div
                className="progress-bar overflow-visible text-dark "
                style={{ width: "0%" }}
              >
                <span
                  style={{
                    fontSize: "2rem",
                    color: "#eee",
                    paddingLeft: "1.5rem",
                  }}
                >
                  WordPress
                </span>
              </div>
            </div>
            <div
              className="progress "
              role="progressbar"
              aria-label="Segment two"
              aria-valuenow={30}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{ width: "40%", height: "100%" }}
            >
              <div
                className="progress-bar"
                style={{
                  backgroundColor: "rgb(202, 200, 200)",
                }}
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default Skills;
