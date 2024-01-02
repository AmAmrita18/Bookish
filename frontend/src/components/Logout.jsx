import { useContext } from "react"
import { AuthContext } from "../contects/AuthProvider"

const Logout = () => {
    const {Logout} = useContext(AuthContext);
    const handleLogout = () => {

    }
  return (
    <div className="h-screen bg-yellow flex items-center justify-center">
        <button className="bg-blue px-8 py-2 text-off-white rounded" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout