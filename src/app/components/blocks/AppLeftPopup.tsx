import React from "react";
import LogoPng from "app/images/login/logo.svg";
import profileOne from "app/images/login/profile1.jpg";
import checkImg from "app/images/login/check-read.svg";
import lockedLogin from "app/images/login/lockedIcon.svg";
import heart from "app/images/login/heart.svg";
import headphonesImg from "app/images/login/auriculares.png";
import womenImg from "app/images/login/mujerBlanca.jpg";
import lockedLoginTwo from "app/images/login/lockedIconTwo.svg";

import "app/styles/createAccount.css";

const AppLeftPopup = () => (
  <div className="flex justify-center items-start min-h-screen p-4 appLeftPopupContainer">
    <div className="w-full max-w-md rounded-lg shadow-lg p-4 pt-0">
      <div className="text-center mb-2">
        <a href="/" className="block mb-2">
          <img src={LogoPng} alt="Logo" className="mx-auto loginLogo" />
          <h1 className="text-3xl font-bold textLogo">Hi-G</h1>
        </a>
      </div>

      <div>
        <div className="msgBoxesContainer">
          <div className="msgBox msgBoxOne bg-gray-50 p-4 rounded-lg mb-4 shadow-md">
            <div className="profileImgMsg">
              <img src={profileOne} alt="Profile" className="rounded-full" />
              <div className="onlineStatusIcon"></div>
            </div>
            <div className="textMsg">
              <h3 className="text-lg font-semibold">Robert Mitch</h3>
              <p className="text-gray-600">Let’s go!</p>
            </div>
            <div className="otherMsg">
              <img src={checkImg} alt="Check" className="w-6 h-6 checkRead" />
              <span className="numberHidden">$90.00</span>
              <div className="lockedMsgHidden">
                <img
                  src={lockedLogin}
                  alt="Locked"
                  className="w-6 h-6 lockedLogin"
                />
              </div>
            </div>
            <div className="likeMsg">
              <img src={heart} alt="Heart" className="w-6 h-6" />3
            </div>
          </div>

          <div className="msgBox msgBoxTwo bg-gray-50 p-4 rounded-lg mb-4 shadow-md">
            <div className="profileImgMsg">
              <img
                src={headphonesImg}
                alt="Headphones"
                className="rounded-full"
              />
              <div className="onlineStatusIcon"></div>
            </div>
            <div className="textMsg">
              <h3 className="text-lg font-semibold">Anna Talenter</h3>
              <p className="text-gray-600">Line new</p>
            </div>
            <div className="otherMsg">
              <img src={checkImg} alt="Check" className="w-6 h-6 checkRead" />
              $90.00
              <div className="lockedMsg">
                <img
                  src={lockedLogin}
                  alt="Locked"
                  className="w-6 h-6 lockedLogin"
                />
              </div>
            </div>
          </div>

          <div className="msgBox msgBoxThree bg-gray-50 p-4 rounded-lg mb-4 shadow-md">
            <div className="profileImgMsg">
              <img src={womenImg} alt="Women" className="rounded-full" />
              <div className="onlineStatusIcon"></div>
            </div>
            <div className="textMsg">
              <h3 className="text-lg font-semibold">Lana Solomon</h3>
              <p className="text-gray-600">Just for you...</p>
            </div>
            <div className="otherMsg">
              <img src={checkImg} alt="Check" className="w-6 h-6 checkRead" />
              $10.00
              <div className="lockedMsg">
                <img
                  src={lockedLoginTwo}
                  alt="Locked"
                  className="w-6 h-6 lockedLogin"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-4 introText">
          <h2 className="text-2xl font-bold">
            Connect,
            <br /> Exchange,
            <br /> Thrive!
          </h2>
        </div>
      </div>
    </div>
  </div>
);

export default AppLeftPopup;
