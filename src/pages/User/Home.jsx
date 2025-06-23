import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar";


const Home = () => {
  return (
    <div>
      {/* <NavBar/> */}
       <section class="relative h-screen w-full">
  <img
    src="https://cdn.pixabay.com/photo/2022/06/17/03/26/purple-wallpaper-7267076_1280.jpg"
    alt="Hero"
    class="w-full h-full object-cover"
  />
  {/* <div class="absolute flex flex-col justify-center items-center text-white">
    <h1 class="text-4xl font-bold mb-4">Welcome to Our Website</h1>
    <p class="text-lg mb-6">Discover amazing products and stories.</p>
    <button class="bg-blue-600 px-6 py-2 rounded hover:bg-blue-800 transition">
      Learn More
    </button>
  </div> */}
</section>



      <Footer/>
      
    </div>

    
  );
}

export default Home