import React, { useEffect, useState } from "react";
import { Animated } from "react-animated-css";
import apiDataprive from "../../api/apiDataprive";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Dataprive = () => {
  SwiperCore.use([Navigation, Pagination]);
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState({});
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return () => {
      func_loadDataprive();
    };
  }, []);
  const func_loadDataprive = async () => {
    const res = await apiDataprive.getData();
    if (res.status) {
      const { data } = res.response;
      if (data.data.length > 0) {
        setData(data.data[0]);
      }
    }
  };

  const [animateFeaturesFade, setAnimateFeaturesFade] = useState(false);
  const [animateFeaturesFade2, setAnimateFeaturesFade2] = useState(false);
  const [animateFeaturesFade3, setAnimateFeaturesFade3] = useState(false);

  useEffect(() => {
    return () => {
      console.log(offset);
      if (offset > 220) {
        setAnimateFeaturesFade(true);
      }

      if (offset > 2300) {
        setAnimateFeaturesFade2(true);
      }

      if (offset > 1900) {
        setAnimateFeaturesFade3(true);
      }
    };
  }, [offset]);

  return (
    <>
      <div className="ml-auto mr-auto mt-16" style={{ width: "1100px" }}>
        <div className="flex">
          <div className="text-5xl font-r" style={{ width: "25%" }}>
            <Animated
              animationIn="fadeInLeft"
              animationInDuration={1000}
              isVisible={true}
              animationInDelay={1000}
            >
              Dataprive
            </Animated>
          </div>
          <div style={{ width: "75%" }}>
            <div className="mt-7 w-full flex-content-end  pr-14">
              <div className="line-animetion-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-linear-gradient" />

      <div
        className="flex-content-center mt-20 ml-auto mr-auto minWidth xl:w-9/12"
        style={{ height: "550px" }}
      >
        <div className="flex-content-end" style={{ width: "40%" }}>
          <div className="mt-auto mb-auto">
            <div className="flex-content-end">
              <div className="text-left" style={{ maxWidth: "380px" }}>
                <div className="text-5xl font-r text-blue">Dataprive</div>
                <div className="text-2xl mt-8">{data.box1Detail}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2" style={{ width: "60%" }}>
          <Animated
            animationIn="fadeInRight"
            animationInDuration={1000}
            animationInDelay={2000}
            isVisible={true}
          >
            <img
              style={{ width: "800px", minWidth: "800px" }}
              src="https://static.wixstatic.com/media/b5bf4b_7cf6bcf2ad9146c1a44a3e03fb122876~mv2.png/v1/crop/x_0,y_65,w_801,h_563,q_90,enc_auto/b5bf4b_7cf6bcf2ad9146c1a44a3e03fb122876~mv2.png"
            ></img>
          </Animated>
        </div>
      </div>

      <div className="flex-content-center ml-auto mr-auto mt-24 xl:w-9/12 minWidth">
        <div className="text-2xl mt-8 " style={{ maxWidth: "1000px" }}>
          {data.box1Detail}
        </div>
      </div>

      <div className="ml-auto mr-auto mt-24 xl:w-9/12 minWidth">
        <div className="text-5xl mt-8" style={{ height: "90px" }}>
          <div className="text-fade">
            {animateFeaturesFade && "Features"}
            <div className={animateFeaturesFade ? "fadingEffect" : ""}></div>
          </div>
        </div>
        <div className="ml-auto mr-auto mt-2" style={{ width: "100px" }}>
          <div
            className={animateFeaturesFade ? "line-animetion-full" : ""}
            style={{ width: "0px" }}
          />
        </div>
      </div>

      <div className="ml-auto mr-auto mt-24 xl:w-9/12 minWidth">
        <div className="flex-content-center">
          <div className="flex-content-center">
            <div className="flex-content-center feature-boxs mt-auto mb-auto">
              <div className="mt-14">
                <div className="circle-inbox m-auto">
                  <div>1</div>
                </div>
                <div className="mt-10" style={{ maxWidth: "200px" }}>
                  <div>{data.box4subbox1}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-content-center ml-14 mr-14">
            <div className="flex-content-center feature-boxs mt-auto mb-auto">
              <div className="mt-14">
                <div className="circle-inbox m-auto">
                  <div>2</div>
                </div>
                <div className="mt-10" style={{ maxWidth: "200px" }}>
                  <div>{data.box4subbox2}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-content-center">
            <div className="flex-content-center feature-boxs mt-auto mb-auto">
              <div className="mt-14">
                <div className="circle-inbox m-auto">
                  <div>3</div>
                </div>
                <div className="mt-10" style={{ maxWidth: "200px" }}>
                  <div>{data.box4subbox3}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-auto mr-auto mt-10 xl:w-9/12 minWidth">
        <div className="flex-content-center">
          <div className="flex-content-center">
            <div className="flex-content-center feature-boxs mt-auto mb-auto">
              <div className="mt-14">
                <div className="circle-inbox m-auto">
                  <div>4</div>
                </div>
                <div className="mt-10" style={{ maxWidth: "200px" }}>
                  <div>{data.box4subbox4}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-content-center ml-14">
            <div className="flex-content-center feature-boxs mt-auto mb-auto">
              <div className="mt-14">
                <div className="circle-inbox m-auto">
                  <div>5</div>
                </div>
                <div className="mt-10" style={{ maxWidth: "200px" }}>
                  <div>{data.box4subbox5}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-auto mr-auto mt-24 xl:w-9/12 minWidth">
        <div className="flex-content-center mt-8">
          <img src="https://static.wixstatic.com/media/b5bf4b_c96f68e416e348b3a5bca4cbc1a0aab7~mv2.png/v1/fill/w_89,h_89,al_c,lg_1,q_85,enc_auto/b5bf4b_c96f68e416e348b3a5bca4cbc1a0aab7~mv2.png" />
        </div>
      </div>

      <div className="ml-auto mr-auto mt-20 xl:w-9/12 minWidth">
        <div className="text-2xl mt-8">
          <div className="text-blue">Dataprive</div>
          <div>{data.box5Detail}</div>
        </div>
      </div>

      <div
        className="ml-auto mr-auto mt-20 xl:w-9/12 minWidth"
        style={{ height: "600px" }}
      >
        <Animated
          animationIn="fadeInUp"
          animationInDuration={1000}
          animationInDelay={1000}
          isVisible={animateFeaturesFade3}
        >
          <Swiper spaceBetween={50} slidesPerView={1} navigation>
            <SwiperSlide>
              <div className="flex-content-center w-full">
                <img src="https://static.wixstatic.com/media/b5bf4b_d5d6c43309b84cd1843488318667b961~mv2.png/v1/fill/w_1061,h_574,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/b5bf4b_d5d6c43309b84cd1843488318667b961~mv2.png"></img>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex-content-center w-full">
                <img src="https://static.wixstatic.com/media/b5bf4b_c16194975e9f45e38ce57c74cfe9b273~mv2.png/v1/fill/w_1061,h_574,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/b5bf4b_c16194975e9f45e38ce57c74cfe9b273~mv2.png"></img>
              </div>
            </SwiperSlide>
          </Swiper>
        </Animated>
      </div>

      <div className="ml-auto mr-auto mt-20 xl:w-9/12 minWidth">
        <div className="text-xl mt-8 goback">{"< กลับไปหน้าสิค้า"}</div>
      </div>

      <div className="ml-auto mr-auto mt-20 mb-20 flex-content-center minWidth xl:w-9/12">
        <img
          width={30}
          className="position-absolute-img minWidth"
          src="https://static.wixstatic.com/media/b5bf4b_df8965ea643e4b5fb1154025f54ae604~mv2.png/v1/crop/x_0,y_0,w_1218,h_265,q_85,enc_auto/b5bf4b_df8965ea643e4b5fb1154025f54ae604~mv2.png"
        />

        <div>
          <Animated
            animationIn="fadeInUp"
            animationInDuration={2000}
            animationInDelay={1000}
            isVisible={animateFeaturesFade2}
          >
            <div className="flex-content-center mt-4">
              <img src="https://static.wixstatic.com/media/b5bf4b_c96f68e416e348b3a5bca4cbc1a0aab7~mv2.png/v1/fill/w_89,h_89,al_c,lg_1,q_85,enc_auto/b5bf4b_c96f68e416e348b3a5bca4cbc1a0aab7~mv2.png" />
            </div>
            <div className="text-2xl mt-3 text-white">
              เยี่ยมชมเว็บไซต์ Dataprive.co
            </div>
            <div className="mt-3">
              <button className="btn-goto">ไปยังเว็บไซต์</button>
            </div>
          </Animated>
        </div>
      </div>
    </>
  );
};

export default Dataprive;
