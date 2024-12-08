import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

const FormPage = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        teks: "",
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;

        setFormData({
            ...formData, [name]: value
        });
    };

    const processForm = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        await axios.post('https://0d2f-114-124-213-11.ngrok-free.app/emotion/classify', {
            teks: formData.teks,
        }).then(function (response) {
            navigate("/emotion", { state: response.data })
        }).catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div className="bg-[#EFEFEF]">
            {/* <h1 className="text-accent text-6xl text-center italiana-regular" >Teks <br />Mood</h1> */}
            <div className="flex items-center h-screen w-3/8 ">
                <div className="mx-auto">
                    <form onSubmit={processForm} method="post">
                        <div className="text-center">
                            <textarea placeholder="apa ungkapan emosi kamu ?" name="teks" onChange={handleChange} className="p-3 text-accent text-xl border-2 border-accent rounded-lg w-11/12 h-56"></textarea>
                            <button className="bg-accent p-3 text-white rounded-lg mt-4 w-11/12 hover:bg-accent">Periksa</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormPage;