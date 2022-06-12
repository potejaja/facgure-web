import React, { useEffect, useState } from "react";
import apiContact from "../../api/apiContact";
import apiCompany from "../../api/apiCompany";
import apiBlog from "../../api/apiBlog";
import apiOurSolution from "../../api/apiOurSolution";
const Footer = () => {
  const [company, setCompany] = useState([]);
  const [blog, setBlog] = useState([]);
  const [contact, setContact] = useState([]);
  const [our_solution, setOur_solution] = useState([]);
  useEffect(() => {
    return () => {
      func_loadContact();
      func_loadCompany();
      func_loadBlog();
      func_loadOutSolution();
    };
  }, []);

  const func_loadContact = async () => {
    const res = await apiContact.getData();
    if (res.status) {
      const { data } = res.response;

      setContact(data.data);
    }
  };

  const func_loadCompany = async () => {
    const res = await apiCompany.getData();
    if (res.status) {
      const { data } = res.response;
      setCompany(data.data);
    }
  };

  const func_loadBlog = async () => {
    const res = await apiBlog.getData();
    if (res.status) {
      const { data } = res.response;
      setBlog(data.data);
    }
  };

  const func_loadOutSolution = async () => {
    const res = await apiOurSolution.getData();
    if (res.status) {
      const { data } = res.response;
      setOur_solution(data.data);
    }
  };

  return (
    <div className="mb-10">
      <div className="footer-color minWidth">
        <div className="ml-auto mr-auto p-4 mt-1 minWidth flex-content-center text-left">
          <div className="pr-20" style={{ maxWidth: "400px" }}>
            <div>Contact Us</div>
            {contact &&
              contact.map((item, index) => (
                <div className="mt-4" key={index}>
                  {item.description}
                </div>
              ))}
          </div>
          <div className="pr-20" style={{ maxWidth: "400px" }}>
            <div>Company</div>
            {company &&
              company.map((item, index) => (
                <div className="mt-4" key={index}>
                  {item.description}
                </div>
              ))}
          </div>
          <div className="pr-20" style={{ maxWidth: "400px" }}>
            <div>Blog</div>
            {blog &&
              blog.map((item, index) => (
                <div className="mt-4" key={index}>
                  {item.description}
                </div>
              ))}
          </div>
          <div style={{ maxWidth: "400px" }}>
            <div>Our solution</div>
            {our_solution &&
              our_solution.map((item, index) => (
                <div className="mt-4" key={index}>
                  {item.description}
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="ml-auto mr-auto mt-9 xl:w-9/12 minWidth">
        <div className="flex-content-center">
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

        <div className="flex-content-center mt-3">
          <div>
            สิ่งสำคัญที่เราจะมอบให้กับลูกค้าไม่ใช่แค่เพียงการส่งมอบงาน
            แต่ต้องเป็นงานที่มีประสิทธิภาพ
          </div>
        </div>

        <div className="flex-content-center mt-3">
          <div>
            <img
              className="w-8"
              src="https://static.wixstatic.com/media/4057345bcf57474b96976284050c00df.png/v1/fill/w_31,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4057345bcf57474b96976284050c00df.png"
            />
          </div>
          <div className="ml-3">
            <img
              className="w-8"
              src="https://static.wixstatic.com/media/45bce1d726f64f1999c49feae57f6298.png/v1/fill/w_31,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/45bce1d726f64f1999c49feae57f6298.png"
            />
          </div>
          <div className="ml-3">
            <img
              className="w-8"
              src="https://static.wixstatic.com/media/aa0402eb9ba2430d9d0620b59556efca.png/v1/fill/w_31,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/aa0402eb9ba2430d9d0620b59556efca.png"
            />
          </div>
        </div>

        <div className="flex-content-center mt-3">
          <div>© 2021 | บริษัทแฟคเกอร์ จำกัด</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
