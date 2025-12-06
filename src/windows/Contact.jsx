import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import { useState } from "react";
import { Send } from "lucide-react";
import { socials } from "#constants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    console.log("Form submitted:", formData);
    alert("Message sent! (Simulation)");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>
      <div className="p-5 space-y-5">
        <img src="/images/adrian.jpg" alt="My image" className="w-20 rounded-full" />
        <h3 className="text-xl font-bold text-gray-800 mb-2">Let's Connect</h3>
        <p className="text-gray-500 mb-6 text-sm">
          Have a project in mind or just want to say hello? Reach out to me.
        </p>
        
        <ul>
          {socials.map(({id,bg,link,icon,text}) => (
            <li key={id} style={{backgroundColor:bg}} className="flex items-center gap-2 p-2 rounded-lg text-white mb-2">
              <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 w-full">
                <img src={icon} alt={text} className="size-5"/>
                <p className="font-medium">{text}</p>
              </a>
            </li>
          ))}
        </ul>        
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;
