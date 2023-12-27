import { Link } from "react-router-dom";

const CharacterCard = ({
  name,
  url
}) => {
  const profileNum = url.split('/')[url.split('/').length - 2];
  return (
    <div className="relative inline-flex group">
      <div
          className="absolute transitiona-all duration-1000 opacity-10 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
      </div>
      <Link to={`/characters/${profileNum}?name=${name}`} key={name} className="w-[250px] bg-neutral rounded-sm relative">
        <img className=" rounded-t-sm" src={require(`../assets/img/characters/${profileNum}.jpg`)} alt={name} />
        <div className="text-dark py-3 px-3 font-mono font-medium">{name}</div>
      </Link>
    </div>
  )
}

export default CharacterCard;