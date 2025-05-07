import { img8 } from "../assets";

const Head = () => {
    return (
        <header className="pt-17!">
            <div className="loading mx-[5%]!">
                <div className="container mx-auto! grid grid-cols-1 md:grid-cols-2">
                    <div className="flex justify-center h-full flex-col">
                        <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl mb-5!">We Help People to Get Appiontment In Online</h1>
                        <p className="w-[80%]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores minima eveniet ut necessitatibus veritatis natus, neque quia rem obcaecati nam temporibus accusamus voluptates commodi laborum, dolorum, voluptas recusandae quas facilis.</p>
                        <button className="mt-5! w-20 p-3! text-white cursor-pointer hover:scale-105 bg-[#9083D5] shadow-black shadow-2xl hover:bg-[#B7B7B7] transition duration-400 rounded-full">Tour</button>
                    </div>
                    <div className="flex justify-center">
                        <img src={img8} alt="Image-Error" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Head