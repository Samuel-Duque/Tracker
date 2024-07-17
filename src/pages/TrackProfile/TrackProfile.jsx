import React from "react";
import "./TrackProfile.module.css";

export const TrackProfile = () => {
  return (
    <div className="frame">
      <div className="div">
        <div className="card-tracks">
          <div className="ri-music-fill-wrapper">
            <img
              className="ri-music-fill"
              alt="Ri music fill"
              src="ri-music-fill.svg"
            />
          </div>
        </div>
        <div className="div-2">
          <div className="div-3">
            <div className="frame-wrapper">
              <div className="div-4">
                <div className="text-wrapper">Espresso</div>
              </div>
            </div>
            <div className="div-5">
              <div className="div-wrapper">
                <div className="div-wrapper">
                  <div className="text-wrapper-2">Sabrina Carpenter</div>
                </div>
              </div>
              <div className="div-wrapper">
                <div className="div-4">
                  <div className="text-wrapper-2">Single</div>
                </div>
              </div>
            </div>
          </div>
          <div className="div-6">
            <div className="div-7">
              <img
                className="ph-arrow-up-bold"
                alt="Ph arrow up bold"
                src="ph-arrow-up-bold.svg"
              />
              <div className="text-wrapper-3">Top 4</div>
            </div>
            <div className="div-7">
              <img
                className="ph-arrow-up-bold"
                alt="Ph arrow up bold"
                src="image.svg"
              />
              <div className="text-wrapper-4">Pop 3</div>
            </div>
          </div>
        </div>
      </div>
      <div className="trending-card">
        <div className="div-8">
          <p className="p">
            <span className="span">#</span>
            <span className="text-wrapper-5">4 Global Trending</span>
          </p>
          <img
            className="img"
            alt="Ph arrow up bold"
            src="ph-arrow-up-bold-2.svg"
          />
        </div>
        <div className="div-9">
          <div className="div-10">
            <div className="text-wrapper-6">1</div>
            <div className="text-wrapper-2">BIRDS OF A FEATHER</div>
          </div>
          <div className="div-10">
            <div className="text-wrapper-7">2</div>
            <div className="text-wrapper-8">Please Please Please</div>
          </div>
          <div className="div-10">
            <div className="text-wrapper-6">3</div>
            <div className="text-wrapper-2">MILLION DOLLAR BABY</div>
          </div>
          <div className="div-10">
            <div className="text-wrapper-7">4</div>
            <div className="text-wrapper-9">Expresso</div>
          </div>
          <div className="div-10">
            <div className="text-wrapper-7">5</div>
            <div className="text-wrapper-2">Not Like Us</div>
          </div>
        </div>
      </div>
      <div className="trending-card">
        <div className="div-8">
          <p className="p">
            <span className="span">#</span>
            <span className="text-wrapper-5">3 Pop</span>
          </p>
          <img
            className="img"
            alt="Ph arrow up bold"
            src="ph-arrow-up-bold-3.svg"
          />
        </div>
        <div className="div-9">
          <div className="div-10">
            <div className="text-wrapper-6">1</div>
            <div className="text-wrapper-8">Please Please Please</div>
          </div>
          <div className="div-10">
            <div className="text-wrapper-7">2</div>
            <div className="text-wrapper-2">BIRDS OF A FEATHER</div>
          </div>
          <div className="div-10">
            <div className="text-wrapper-6">3</div>
            <div className="text-wrapper-9">Expresso</div>
          </div>
          <div className="div-10">
            <div className="text-wrapper-7">4</div>
            <div className="text-wrapper-2">MILLION DOLLAR BABY</div>
          </div>
          <div className="div-10">
            <div className="text-wrapper-7">5</div>
            <div className="text-wrapper-2">Not Like Us</div>
          </div>
        </div>
      </div>
      <div className="div-11">
        <div className="div-12">
          <div className="div-wrapper-2">
            <div className="text-wrapper-10">193K Reviews</div>
          </div>
          <img className="img-2" alt="TrackProfile" src="frame-145.svg" />
        </div>
        <div className="level">
          <div className="level-2">
            <div className="text-wrapper-11">Trending</div>
            <div className="div-wrapper-3">
              <div className="text-wrapper-11">#4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackProfile;
