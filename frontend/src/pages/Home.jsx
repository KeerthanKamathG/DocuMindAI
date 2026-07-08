import { useState } from "react";
import axios from "axios";

export default function Home() {

    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");

    const handleUpload = async () => {

        if (!file) {
            alert("Choose a PDF first");
            return;
        }

        const formData = new FormData();

        formData.append("file", file);

        try {

            const response = await axios.post(
                "http://127.0.0.1:8000/upload",
                formData
            );

            setMessage(response.data.message);

        } catch (error) {

            setMessage("Upload Failed");

        }
    };

    return (

        <div className="min-h-screen flex flex-col justify-center items-center gap-5">

            <h1 className="text-4xl font-bold">
                DocuMind AI
            </h1>

            <input

                type="file"

                accept=".pdf"

                onChange={(e) => setFile(e.target.files[0])}

            />

            <button

                className="bg-blue-500 text-white px-6 py-2 rounded"

                onClick={handleUpload}

            >

                Upload PDF

            </button>

            <h2>{message}</h2>

        </div>

    );

}