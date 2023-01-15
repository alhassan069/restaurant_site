import React from "react";
import "./Varieties.css";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";

const Varieties = () => {
  return (
    <>
      <div className="headerCont">
        <h4 className="vHeader">V A R I E T I E S</h4>
      </div>
      <div className="varieties">
        <div className="cont0">
          <div className="bigdiv">
            <div className="bigdivCont">
              <h2 className="cardHeader1">
                Pizza is a savory dish of Italian origin
              </h2>
              <p className="cardInfo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus, animi.
              </p>

              <div className="btnCont">
                <button className="btn exploreBtn1">
                  Explore
                  <ArrowForwardIosRoundedIcon fontSize="inherit" />
                </button>
                <button className="btn ratedBtn1">
                  <StarOutlineRoundedIcon fontSize="inherit" />
                  {"   Rated"}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="cont1">
          <div className="smalldiv smalldiv1 ">
            <div className="smalldivCont">
              <h5 className="cardHeader">Crispy French Fries</h5>
              <p className="cardInfo2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>

              <div className="btnCont">
                <button className="btn exploreBtn">
                  Explore
                  <ArrowForwardIosRoundedIcon fontSize="inherit" />
                </button>
                <button className="btn ratedBtn">
                  <StarOutlineRoundedIcon fontSize="inherit" />
                  {"   Rated"}
                </button>
              </div>
            </div>
          </div>
          <div className="smalldiv smalldiv2">
            <div className="smalldivCont">
              <h5 className="cardHeader">Paneer Tikka</h5>
              <p className="cardInfo2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>

              <div className="btnCont">
                <button className="btn exploreBtn">
                  Explore
                  <ArrowForwardIosRoundedIcon fontSize="inherit" />
                </button>
                <button className="btn ratedBtn">
                  <StarOutlineRoundedIcon fontSize="inherit" />
                  {"   Rated"}
                </button>
              </div>
            </div>
          </div>
          <div className="smalldiv smalldiv3">
            <div className="smalldivCont">
              <h5 className="cardHeader">Macaroon</h5>
              <p className="cardInfo2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>

              <div className="btnCont">
                <button className="btn exploreBtn">
                  Explore
                  <ArrowForwardIosRoundedIcon fontSize="inherit" />
                </button>
                <button className="btn ratedBtn">
                  <StarOutlineRoundedIcon fontSize="inherit" />
                  {"   Rated"}
                </button>
              </div>
            </div>
          </div>
          <div className="smalldiv smalldiv4">
            <div className="smalldivCont">
              <h5 className="cardHeader">Doughnut</h5>
              <p className="cardInfo2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>

              <div className="btnCont">
                <button className="btn exploreBtn">
                  Explore
                  <ArrowForwardIosRoundedIcon fontSize="inherit" />
                </button>
                <button className="btn ratedBtn">
                  <StarOutlineRoundedIcon fontSize="inherit" />
                  {"   Rated"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cuisinesCont">
        <div className="cuisine">
          <h3 className="cuisineHeader">Indian Cuisine</h3>
          <p className="cuisineDesc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <div className="cuisine">
          <h3 className="cuisineHeader">American Cuisine</h3>
          <p className="cuisineDesc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard.
          </p>
        </div>
        <div className="cuisine">
          <h3 className="cuisineHeader">Chinese Cuisine</h3>
          <p className="cuisineDesc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
      </div>
    </>
  );
};

export default Varieties;
