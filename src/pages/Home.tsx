import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    return (
        <div className="bg-[#EFEFEF]">
            <div className="h-screen flex items-center justify-center ">
                <div className="w-3/6">
                    <div className="text-center">
                        <h1 className="text-accent text-6xl italiana-regular ">Teks <br />Mood</h1>
                    </div>
                    <div className="text-center mt-8">
                        <Link to="/fill" className="bg-accent p-3 text-white rounded-lg">Mulai</Link>
                    </div>
                </div>
            </div>
            <h4 className="text-center text-accent text-sm pb-6">Built with <FontAwesomeIcon icon={faHeart} className="text-red-300" /> by Abiyyu using <span className="font-bold">FastAPI & ReactTS</span></h4>
        </div>
    )
}

export default Home;