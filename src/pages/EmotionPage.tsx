import { Link, useLocation } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import smileEmoji from "../../public/emojis/smile.png";
import sobEmoji from "../../public/emojis/sob.png";
import rageEmoji from "../../public/emojis/rage.png";
import wearyEmoji from "../../public/emojis/weary.png";

const EmotionPage = () => {
    const location = useLocation();
    const responseData = location.state || {};

    const emoticonSelector = (label: string) => {
        switch (label) {
            case 'bahagia':
                return smileEmoji;
            case 'sedih':
                return sobEmoji;
            case 'marah':
                return rageEmoji;
            case 'kecewa':
                return wearyEmoji;
            default:
                return "#";
        }
    }

    const bgSelector = () => {
        switch (responseData.emosi_dominan.label) {
            case 'bahagia':
                return "bg-happy";
            case 'sedih':
                return "bg-sad";
            case 'marah':
                return "bg-rage";
            case 'kecewa':
                return "bg-weary";
        }
    }

    const taglineSelector = () => {
        switch (responseData.emosi_dominan.label) {
            case 'bahagia':
                return "Cie cie cie";
            case 'sedih':
                return "huhu aku ikut sedih :(";
            case 'marah':
                return "ih takutnyo";
            case 'kecewa':
                return "kamu kecewa yaa :(";
        }
    }

    return (
        <div className={bgSelector()}>
            <div className="absolute top-4 left-5">
                <Link to="/fill"><FontAwesomeIcon icon={faArrowLeft} className="text-3xl text-white" /></Link>
            </div>
            <div className="absolute top-4 right-5">
                {/* <FontAwesomeIcon icon={faCamera} className="text-3xl text-white" /> */}
            </div>

            <div className="flex flex-col justify-center h-screen space-y-6">
                <div className="text-center">
                    <img src={emoticonSelector(responseData.emosi_dominan.label)} className="mx-auto" alt="emoji" />
                    <h2 className="text-white text-7xl font-bold">{responseData.emosi_dominan.persentase}%</h2>
                    <h3 className="text-white text-5xl font-medium">{responseData.emosi_dominan.label}</h3>
                    <h3 className="text-white text-xl mt-1">{taglineSelector()}</h3>
                </div>
                <div className="mx-auto w-11/12">
                    <h3 className="text-center text-xl font-bold text-red-200 italic">"{responseData.teks}"</h3>
                </div>
                <div className="">
                    {/* <h3 className="text-sm text-white text-center">Emosi Terkait</h3> */}
                    <div className="flex justify-center">
                        {Object.entries(responseData.emosi_lainnya).map(([key, value]) => (
                            <div className="flex flex-col text-center justify-center" key={key}>
                                <h3 className="text-white font-medium">{key}</h3>
                                <img src={emoticonSelector(key)} className="w-2/6 mx-auto grayscale" alt="emoji" />
                                <h3 className="text-white font-bold">{(value as number).toFixed(2)}%</h3>
                            </div>
                        ))}
                    </div>
                    {/* <Link to="/fill" className="bg-white p-2 rounded-lg w-4/12 text-center text-[#00A6A6] bottom-4 absolute">Kembali</Link> */}
                </div>
            </div>
        </div>
    )
}

export default EmotionPage;