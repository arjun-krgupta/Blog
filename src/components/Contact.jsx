import React from "react";

function Contact(props) {
    const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5128f8b1-bae7-4002-871d-d26459dc2564");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert("Email sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div className="mt-10">
        <h1 className="text-center text-5xl font-semibold mb-10">
          Get In <span className="text-[#0ef]">Touch</span>
        </h1>
        <div className="flex flex-col gap-4 items-center px-5 w-full mt-5 md:flex-row md:justify-center md:gap-5 lg:px-32 lg:gap-16 md:mt-20">
          <div className="flex flex-col gap-3 w-full md:w-[50%] lg:w-[45%]">
            <h1 className="text-4xl text-[#0ef] font-semibold">Let's Talk</h1>
            <p className="text-lg text-justify md:text-left w-full md:w-[85%]">
              I'm currently avaliable to take on new projects, so feel free to
              send me a message about anything that you want me to work on. You
              can contact anytime.
            </p>
            <div className="flex gap-3 items-center">
              <i className="fa-solid fa-envelope text-3xl"></i>
              <span className="text-base">akarjun1050@gmail.com</span>
            </div>
            <div className="flex gap-3 items-center">
              <i className="fa-solid fa-phone-volume text-3xl"></i>
              <span className="text-base">+91 9318348275</span>
            </div>
            <div className="flex gap-3 items-center">
              <i className="fa-solid fa-location-dot text-3xl"></i>
              <span className="text-base">New Ashok Nagar , New Delhi</span>
            </div>
          </div>
          <form className="w-full flex flex-col gap-3 md:w-[40%] md:gap-6" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="ps-4 text-base md:text-lg outline-none border-0 text-black rounded h-9"
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              className="ps-4 text-base md:text-lg outline-none border-0 text-black rounded h-9"
            />
            <textarea
              placeholder="Your Message..."
              name="Message"
              className="ps-4 pt-1 text-base md:text-lg outline-none border-0 text-black rounded h-24"
            ></textarea>
            <button type="submit" className="bg-[#0ef] text-black w-28 h-10 text-lg md:text-xl font-semibold rounded hover:border hover:border-white">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;