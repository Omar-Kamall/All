import { img7 } from "../assets"

const Aboutus = () => {
    return (
        <section className="h-full">
            <div className="loading mx-[5%]! py-15!">
                <div className="container mx-auto! grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="w-full">
                        <img className="h-[90%] w-full" src={img7} alt="Image-Error"/>
                    </div>
                    <div className="flex flex-col justify-center gap-4">
                        <h6 className="text-2xl">Biography</h6>
                        <h3 className="text-4xl font-bold">Who We Are</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, unde culpa modi, a libero sit dolorum animi molestiae, velit aliquid laudantium! Voluptatibus totam maiores explicabo obcaecati non quibusdam molestiae illum Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad alias obcaecati laudantium dignissimos minima quisquam. Distinctio quibusdam laudantium vero veniam, tenetur praesentium consequatur minima perferendis provident corrupti officiis magnam temporibus!</p>
                        <p>Itis 2025 : time to sink or swim</p>
                        <p>We are your Social Media Markting Agency</p>
                        <button className="w-25 bg-[#9083D5] text-white shadow-black shadow-2xl p-2! rounded-full cursor-pointer hover:scale-105 hover:bg-[#B7B7B7] transition duration-400">
                            See More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aboutus