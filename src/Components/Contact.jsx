import { Vortex } from "../ui/vortex.jsx";

export default function Contact() {
  return (
    (<div
        id="contact"
        className="w-full mx-auto rounded-md  min-h-screen overflow-hidden">
    <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center w-screen h-screen">

        <div className="text-white text-center">

        <h2 className="">
        Want to Hire?
        </h2>

        <a
        href='mailto:jeevithajeevi6234@gmail.com'
        className="">
            Jeevithajeevi6234@gmail.com
        </a>

        </div>

    </Vortex>
    </div>)
  );
}
