import React from "react";
import "./Chefs.css";
const Chefs = () => {
  return (
    <>
      <div className="headerCont mt-10">
        <h4 className="vHeader">T O P &nbsp;C H E F S</h4>
      </div>

      <div className="chefsCont">
        <div className="chefCardCont">
          <div className="chefCard">
            <img src="./assets/eillen.png" alt="chef" className="chefImg" />
            <h5 className="chefName">Eillen Johnson</h5>
            <p className="chefDesc">Executive Chef, USA</p>
          </div>
          <div className="chefCard">
            <img src="./assets/robert.png" alt="chef" className="chefImg" />
            <h5 className="chefName">Robert Downey Jr</h5>
            <p className="chefDesc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="chefCard">
            <img src="./assets/amanda.png" alt="chef" className="chefImg" />
            <h5 className="chefName">Amanda Dority</h5>
            <p className="chefDesc">Sous Chef, India</p>
          </div>
        </div>
      </div>
      <div className="foodGuideCont">
        <div className="headerCont mb-0">
          <h4 className="vHeader">FOOD GUIDE</h4>
        </div>
        <div className="foodGuideFlex">
          <div className="foodGuideCard">
            {" "}
            <div className="imageCont">
              <img
                src="./assets/carrot.png"
                alt="carrot"
                className="foodGuideImg"
              />
            </div>
            <h5 className="foodGuideName">VEGETABLES</h5>
            <p className="foodGuideDesc">
              Lorem Ipsum is simply dummy text of the printing and typesetting.
            </p>
          </div>
          <div className="foodGuideCard">
            <div className="imageCont">
              <img
                src="./assets/wheat.png"
                alt="chef"
                className="foodGuideImg"
              />
            </div>
            <h5 className="foodGuideName">WHOLE GRAINS</h5>
            <p className="foodGuideDesc">
              Lorem Ipsum is simply dummy text of the printing and typesetting.
            </p>
          </div>
        </div>
        <div className="foodGuideFlex">
          <div className="foodGuideCard">
            <div className="imageCont">
              {" "}
              <img
                src="./assets/apple.png"
                alt="chef"
                className="foodGuideImg"
              />
            </div>
            <h5 className="foodGuideName">FRUITS</h5>
            <p className="foodGuideDesc">
              Lorem Ipsum is simply dummy text of the printing and typesetting.
            </p>
          </div>
          <div className="foodGuideCard">
            <div className="imageCont">
              <img
                src="./assets/meat.png"
                alt="meat"
                className="foodGuideImg"
              />
            </div>
            <h5 className="foodGuideName">HEALTHY PROTEIN</h5>
            <p className="foodGuideDesc">
              Lorem Ipsum is simply dummy text of the printing and typesetting.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chefs;
