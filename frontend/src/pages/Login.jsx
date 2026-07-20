import Logo from "../assets/Logo.png";
import Form from "../components/Form/form.jsx";

const form_schema = [
    { name: "Username", label: "Username", type: "text" },
    { name: "Password", label: "Password", type: "Password" }
];

export default function Login() {


    return (
        <div className="w-full h-full flex justify-center items-center">
            <div id="Login_Card" className="w-[80%] sm:w-fit flex flex-col gap-2 sm:flex-row justify-start items-center">
                <div className="w-20 sm:w-100">
                    <img src={Logo} alt="Logo" />
                    {/* <p className="text-center">
                        Diabetic Retinopathy is a leading cause of preventable blindness worldwide. It is never too early to get a diagnosis.
                    </p> */}
                </div>

                <div className="w-full sm:w-100">
                    <Form fields={form_schema} onSubmit={null} OkText="Log in" />
                </div>

            </div>
        </div>
    )
}