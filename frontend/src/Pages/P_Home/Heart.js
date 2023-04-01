import Navbar from "./Navbar";
import Labform from "./Labform";

export default function Diabetes() {
    const handleSubmit = async (e) => {
        // e.preventDefault(); 
        // try {
        //     const response = await axios.post(`${url}`, {
        //         value1,
        //         value2,
        //         value3,
        //         value4
        //     });
        //     console.log(response.data);
        //     alert("You may be suffering from "+response.data)
        // } catch (error) {
        //     console.log(error.response);
        //     setValue1("");
        //     setValue2("");
        //     setValue3("");
        //     setValue4("");
        //     alert("Error occured while logging in");
            
        // }
    }

    return(

        <div>
            <Navbar />
            <div className="flex">
                {/* <Sidebar /> */}
                <Labform />

                <div className="container mx-auto mt-12">
                            <form className="grid grid-cols-1 gap-6 mb-6 mx-3" onSubmit={handleSubmit}>

                            </form>
                </div>
            </div>
        </div>

    );
}