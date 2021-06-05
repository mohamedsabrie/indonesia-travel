const {ChevronRightIcon } = require("@heroicons/react/outline");

function Landing() {
    return (
        <div className="flex items-center justify-center w-screen h-screen text-white bg-cover bg-center" style={{backgroundImage: 'url("https://www.indonesia.travel/content/dam/indtravelrevamp/bali-re-opening/homepage-sanur.jpg")'}}>
               <div className="flex flex-col items-center text-center">
                   <p className="text-4xl md:text-6xl font-medium mb-10" style={{textShadow: '1px 1px 4px #000000'}}> The Beaches In Bali Long For Your Presence </p>
                   <button className="flex items-center space-x-2 bg-green-400 rounded-lg px-5 py-3">
                       <span>Discover More</span> 
                        <ChevronRightIcon className="h-5 font-bold" />
                    </button>
               </div>
               
        </div>
    )
}

export default Landing
