import React from "react";

const Contact = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="innerContainer my-[80px]  p-[10px] formcontainer  max-w-[800px] border w-full">
            <div className="googlemap-container ">
              <div className="map-inner-container">

              </div>
            </div>
            <h2 className="text-center mb-[30px] text-[42px] font-bold">
              Contact Us
            </h2>

            <div className="inputsFiels border  flex flex-col px-[10px] mb-[60px]">
              <label htmlFor="userinput" className=" text-[20px]">
                Name *
              </label>
              <input
                className="px-[10px] py-[10px] outline-none text-[20px] font-normal"
                id="userinput"
                name="username"
                type="text"
                placeholder="Enter your Name"
              />
            </div>
            <div className="inputsFiels border  flex flex-col px-[10px] mb-[60px]">
              <label htmlFor="emailinput" className=" text-[20px]">
                Email *
              </label>
              <input
                className="px-[10px] py-[10px] outline-none text-[20px] font-normal"
                id="emailinput"
                name="email"
                type="password"
                placeholder="Enter your Email"
              />
            </div>
            <div className="inputsFiels border  flex flex-col px-[10px] mb-[60px]">
              <label htmlFor="msginput" className=" text-[20px]">
                Messages *
              </label>
              <textarea
                className="px-[10px] py-[10px] outline-none text-[20px]
                font-normal"
                id="msginput"
                name="meassage"
                type="text"
                placeholder="Enter your Name"
                rows={"6"}
              ></textarea>
            </div>
            <button className="border w-full py-[20px] font-bold text-2xl bg-[var(--primary-color)] text-white">
              Submit
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
