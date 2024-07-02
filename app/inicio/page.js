import Main from "@/components/Main"
import Navbar from "@/components/Navbar"
import "../globals.css"
import Footer from "@/components/Footer"

async function Inicio() {
  
    //const posts = await loadPosts()
  
    return (
        <div>
            <Navbar />
            <Main />
            <Footer />
            
        </div>
    )
  
}
  
export default Inicio