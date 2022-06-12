import React from "react";
const Header = () => {
  return (
    <div className="header-container">
      <div className="ml-auto mr-auto p-4 mt-1 minWidth container mx-auto">
        <div className="flex">
          <div className="flex">
            <div>
              <img
                className="w-8"
                src="https://static.wixstatic.com/media/b5bf4b_e19ff48601204d579ce14bd904bb8763~mv2.gif"
              />
            </div>
            <div className="mt-2 ml-3">
              <img
                className="w-28"
                src="https://static.wixstatic.com/media/b5bf4b_ff8a56df349c48e4946f8d67f8b0cc72~mv2.png/v1/fill/w_112,h_28,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b5bf4b_ff8a56df349c48e4946f8d67f8b0cc72~mv2.png"
              />
            </div>
          </div>
          <div className="ml-auto mt-2">
            <div className="flex">
              <div>
                <div className="cursor-pointer">Home</div>
              </div>
              <div className="ml-10">
                <div className="cursor-pointer">Solution</div>
              </div>
              <div className="ml-10">
                <div className="cursor-pointer text-orange-default">
                  Products
                </div>
              </div>
              <div className="ml-10">
                <div className="cursor-pointer">Embedded Analytics</div>
              </div>
              <div className="ml-10">
                <div className="cursor-pointer">All Service</div>
              </div>
              <div className="ml-10">
                <div className="cursor-pointer">More</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
