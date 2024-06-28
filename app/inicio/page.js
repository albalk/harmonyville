import Main from "@/components/Main"
import Navbar from "@/components/Navbar"
import "../globals.css"

async function Inicio() {
  
    //const posts = await loadPosts()
  
    return (
        <div>
            <Navbar />
            <Main />
            
        </div>
    )
  
}
  
export default Inicio