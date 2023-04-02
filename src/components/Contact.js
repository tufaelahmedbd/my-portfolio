import { useRef } from "react";
import SectionTitle from "./SectionTitle";
import { useInputRefReveal } from "../hooks/gsap";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const inputRef = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);

  const formRef = useRef(null);
  const inputRefs = [inputRef, input2Ref, input3Ref, input4Ref];
  useInputRefReveal(inputRefs);
  const sendEmail = (e) => {
    e.preventDefault();
    //--emailjs integration
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_PUBLIC_ID
      )
      .then(
        () => {
          console.log("Message sent");
        },
        () => {
          console.log("Message not sent");
        }
      );

    //--reset--
    e.target.querySelector(".fullname").value = "";
    e.target.querySelector(".email").value = "";
    e.target.querySelector(".message").value = "";
  };
  return (
    <div className="contact container mx-auto mt-40" id="contact">
      <SectionTitle title="Contact" />
      <form
        onSubmit={sendEmail}
        className=" mt-40 grid grid-cols-1 lg:grid-cols-2 gap-20"
        ref={formRef}
      >
        <div className="form-control overflow-hidden">
          <input
            type="text"
            placeholder="Write your name"
            name="fullname"
            required
            className="fullname bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full"
            ref={inputRef}
          />
        </div>
        <div className="form-control overflow-hidden">
          <input
            type="email"
            placeholder="Write your email"
            name="email"
            required
            className="email bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full"
            ref={input2Ref}
          />
        </div>
        <div className="form-control overflow-hidden">
          <textarea
            placeholder="Write your message"
            name="message"
            required
            rows="1"
            cols="30"
            className="message bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full resize-none"
            ref={input3Ref}
          />
        </div>
        <div className="form-control overflow-hidden">
          <input
            type="submit"
            value="Send message"
            name="email"
            required
            className=" uppercase bg-transparent border py-16 px-28 rounded-full border-white/20  hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500 w-full"
            ref={input4Ref}
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
