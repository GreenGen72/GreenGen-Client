interface AvatarProps {
  foto?: string;
  size?: "small" | "big" | "extrabig" | "biggest";
  bordercolour?: "black" | "white" | "primary"
}

const Avatar = ({ foto, size, bordercolour }: AvatarProps) => {
  const defaultImage =
    "https://www.digitary.net/wp-content/uploads/2021/07/Generic-Profile-Image.png";

  let sizeClass = ""; 
  let colourBorder = ""; 

  
  if (size === "small") {
    sizeClass = "h-9 w-9 ";
  } else if (size === "big") {
    sizeClass =
      "h-20 w-20 transition-all duration-300 hover:scale-110 hover:h-25 hover:w-25 hover:mb-1"; 
  } else if (size === "extrabig") {
    sizeClass = "h-60 w-60";
  } else if (size === "biggest") {
    sizeClass = "h-80 w-80";
  }
  else {
    sizeClass = "h-11 w-11 ";
  }

  if (bordercolour === "black") {
    colourBorder = "black";
  } else if (bordercolour === "white") {
    colourBorder = "white";
   } else if (bordercolour === "primary") {
      colourBorder = "#316127";
  } else {
    colourBorder = "";
  }

  const fotoDoUsuario = foto?.length ? foto : defaultImage;
  return (
    <img
      src={fotoDoUsuario}
      alt="Usuário"
      className={`rounded-full border-white ${sizeClass}`}
      style={{
        border: `3px solid ${colourBorder}`,
        borderRadius: "50%",
      }}
    />
  );
};

export default Avatar;
