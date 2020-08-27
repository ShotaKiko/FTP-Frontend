import React from "react";
import "./AdditionalInfo.scss";
import { Card, CardTitle, CardText, CardGroup, CardBody } from "reactstrap";

import Plan from "../../../../icons/infoIcons/plan.svg";
import Map from "../../../../icons/infoIcons/map.svg";
import Search from "../../../../icons/infoIcons/search.svg";

function AdditionalInfo() {
  return (
    <div className="additionalInfo-container">
      <div className="purposeMessageDiv">
        <h4>
          FTP connects teachers, parents, students and bus drivers to simplify
          coordination across every step of the field trip planning and
          execution process
        </h4>
      </div>

      <div className="cardGroup">
        <CardGroup>
          <Card>
            <CardTitle>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <img
                  style={{
                    width: "50px",
                    height: "50px",
                    marginTop: "10px",
                  }}
                  src={Plan}
                />
              </div>
            </CardTitle>
            <CardBody>
              <CardText>
                FTP helps teachers, parents, students and bus driver coordinate
                and stick to the game plan!
              </CardText>
            </CardBody>
          </Card>

          <Card>
            <CardTitle>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <img
                  style={{
                    width: "50px",
                    height: "50px",
                    marginTop: "10px",
                  }}
                  src={Map}
                />
              </div>
            </CardTitle>
            <CardBody>
              <CardText>
                FTP uses Google Maps to display field trip relevant maps and
                directions!
              </CardText>
            </CardBody>
          </Card>

          <Card>
            <CardTitle>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <img
                  style={{
                    width: "50px",
                    height: "50px",
                    marginTop: "10px",
                  }}
                  src={Search}
                />
              </div>
            </CardTitle>
            <CardBody>
              <CardText>
                FTP's csv reader allows teacher to upload and update field trip
                participants with ease!
              </CardText>
            </CardBody>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}

export default AdditionalInfo;
