import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const handleClick = () => {
    const email = "sunzhiyuan6666@hotmail.com";
    const subject = "Subject of the email";
    const body = "Body of the email";

    // 使用 mailto 链接
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="grid place-items-center">
      <button
        onClick={handleClick}
        className="w-1/2 h-1/2 rounded-2xl cursor-pointer"
      >
        <MdEmail className="w-full h-full bg-gradient-to-t from-green-300 to-blue-300 rounded-2xl text-blue-50" />
      </button>

      <a
        href="https://www.linkedin.com/in/zhiyuan-sun-401167214/"
        target="_blank"
        className="w-1/2 h-1/2 rounded-2xl"
      >
        <FaLinkedin className="w-full h-full bg-gradient-to-t from-yellow-300 to-red-300 rounded-2xl text-blue-50" />
      </a>
      <a
        href="https://github.com/Sunzhiy"
        target="_blank"
        className="w-1/2 h-1/2 rounded-2xl"
      >
        <FaGithub className="w-full h-full bg-gradient-to-t from-purple-300 to-red-300 rounded-2xl text-blue-50" />
      </a>

      <div className="w-1/2 h-1/2 rounded-2xl relative">
        <FaPhoneAlt className="w-full h-full bg-gradient-to-t from-orange-300 to-cyan-300 rounded-2xl text-blue-50" />
        <p className="absolute top-12 left-16">(713)628-5128</p>
      </div>
    </div>
  );
};
export default Contact;
