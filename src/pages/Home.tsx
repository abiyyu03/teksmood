import { Link } from "react-router";

const Home = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-[#EFEFEF]">
            <div className="w-3/6">
                <div className="text-center">
                    <h1 className="text-accent text-6xl italiana-regular ">Teks <br />Mood</h1>
                </div>
                <div className="text-center mt-8">
                    <Link to="/fill" className="bg-accent p-3 text-white rounded-lg">Mulai</Link>
                </div>
            </div>
        </div>
    )
}

export default Home;