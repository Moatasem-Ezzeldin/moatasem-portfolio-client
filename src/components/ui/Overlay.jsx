
const Overlay = ({ open, onClick }) => {
  return (
    <div onClick={onClick} 
        className={`fixed inset-0 bg-black/5 backdrop-blur-xs z-40 
        transition-opacity duration-300 md:hidden 
        ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none hidden"}`} 
    />
  )
}

export default Overlay;