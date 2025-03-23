import React, {useRef} from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef(); 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
      }, (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
      });
  };

  const contact_info = [
    { logo: "mail", text: "maricely.villalobos21@gmail.com" },
    { logo: "call-outline", text: "+1 817-999-9999" },
    {
      logo: "location",
      text: "Keller, Texas, United States",
    },
  ];
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-blue-950 md:p-6 p-2 rounded-lg mx-auto"
        >
         <form ref={form} onSubmit={sendEmail} className="flex flex-col flex-1 gap-5" >
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email Address" required />
            <textarea name="message" placeholder="Your Message" rows={10} required></textarea>
            <button type="submit" className="btn-primary w-fit">Send Message</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
