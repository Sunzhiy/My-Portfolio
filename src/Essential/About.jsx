import { FaFaceSmileBeam } from "react-icons/fa6";

const About = () => {
  return (
    <div className="text-center m-auto w-4/5 mt-12">
      <p className="space-x-6 font-extrabold">
        <span className="text-4xl">About</span>
        <span className="bg-blue-500 text-center p-3 pl-6 pr-6 text-4xl rounded-3xl">
          Me
        </span>
      </p>
      <br />

      <FaFaceSmileBeam className="m-auto text-2xl text-amber-500 animate-text" />
      <br />
      <p className="animate-color font-mono text-xl">
        Hi, I'm Jason Sun, a Computer Science graduate from the University of
        Houston. I’m passionate about web development and love building dynamic,
        user-friendly apps using HTML, CSS, JavaScript, and React. One of my key
        projects involved creating a real-time data management app with React
        and Redux, which strengthened my problem-solving skills and love for
        impactful solutions. I thrive in collaborative environments and am
        excited to contribute to meaningful projects in the tech field.
      </p>
      <br />
      <br />
    </div>
  );
};
export default About;
