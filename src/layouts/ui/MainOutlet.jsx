import { Outlet } from "react-router-dom";

const MainOutlet = ({ className }) => {
  return (
    <main className={`${className}`}>
      <Outlet />
    </main>
  )
}

export default MainOutlet