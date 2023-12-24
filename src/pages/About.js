import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="container px-32 mt-10 mb-20">
      <div class="relative inline-flex group">
        <div
            class="absolute transitiona-all duration-1000 opacity-50 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-80 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
        </div>
        <button onClick={() => navigate(-1)} className="text-dark bg-neutral font-mono relative w-[150px] h-10 rounded-full">&larr; Back</button>
      </div>

      <div className="mt-10 font-mono text-lg">
        This is a demo website to illustrate how to setup basic routes in an application using 
        <Link to="https://reactrouter.com/en/main/start/overview" target="_blank"><strong className="text-primary"> react-router-dom</strong></Link> we also use the 
        <Link to="https://swapi.dev/documentation#intro" target="_blank"><strong className="text-primary"> SWAPI (Stars Wars API) </strong></Link> to fetch data and play with.
      </div>
    </div>
  )
}

export default About;