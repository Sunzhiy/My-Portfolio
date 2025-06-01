import { useDispatch, useSelector } from "react-redux";
import { GetContext } from "./Hero";
import { setIdFilter } from "./createSlice";

const Project = () => {
  const { projects } = GetContext();

  const dispatch = useDispatch();
  const idFilter = useSelector((state) => state.filter.id);

  const handleChange = (e) => {
    dispatch(setIdFilter(e.target.value));
  };

  const filteredProjects = projects.filter(
    (project) => project.id === idFilter
  );

  return (
    <div>
      <div className="text-center mt-10">
        <p className="font-serif mb-5 text-emerald-600 text-4xl">My Projects</p>
        <span>Good or Normal :</span>
        <select
          value={idFilter}
          onChange={handleChange}
          className="bg-gray-50 rounded-xl h-7 w-20 text-center text-black border-2 border-blue-600"
        >
          <option value="good">good</option>
          <option value="normal">normal</option>
        </select>
      </div>
      <br />
      <div className="ml-auto mr-auto text-center  grid place-items-center space-y-2">
        {filteredProjects.map((project) => (
          <div className="w-3/4 rounded-2xl     bg-gradient-to-t from-red-300 to-yellow-300">
            <a href={project.website} target="_blank">
              <img
                src={project.img}
                alt={project.name}
                className="w-5/6 rounded-2xl mx-auto mt-3"
              />

              <h1>{project.name}</h1>
              <p className="border-2 m-3 rounded-2xl bg-amber-50 text-black">
                {project.description}
              </p>
            </a>
          </div>
        ))}
      </div>
      <br />
      <br />
    </div>
  );
};
export default Project;
