import React from "react";
import "./Contact.css";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "eaeebcb6-2724-4af2-9fbd-4724d8023f64");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a massage <img src="./img/msg-icon.png" alt="" /></h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In numquam
          odit minus. Magni, fugit nisi nam omnis aut distinctio, repudiandae
          magnam quibusdam ipsum explicabo fuga officia quas consectetur
          voluptas facere ducimus. Veniam quia sequi sint harum, dolorum,
          praesentium incidunt maxime quaerat quibusdam nisi impedit itaque!
        </p>
        <ul>
            <li><img src="./img/mail-icon.png" alt="" />draitclub@drait.edu.in</li>
            <li><img src="./img/phone-icon.png" alt="" />+19 123-456-7890</li>
            <li><img src="./img/location-icon.png" alt="" />Dr.Ait nagarbhavi bengaluru </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name="name" placeholder="Enter your name" required/>
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter your mobile number" required/>
            <label>Write your massage here</label>
            <textarea name="message" rows="6" placeholder="Enter Your Message" required></textarea>
            <button type="submit"className="btn dark-btn">Submit now <img src="./img/white-arrow.png" alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
