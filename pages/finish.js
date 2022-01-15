import Button from "@components/Button";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { MdCheck } from "react-icons/md";

const FinishPage = () => {
  return (
    <>
      <div className="flex flex-col bg-primary-500 min-h-screen">
        <div className="flex-1 sm:hidden relative">
          <span className="w-1/2 aspect-square blur-3xl bg-white/30 absolute rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="w-full z-10 h-full absolute justify-center items-center flex">
            <div className="text-center text-[10rem] flex flex-col items-center">
              <MdCheck className="text-green-500" />
              <p className="text-[1rem] mt-4 text-white">
                Contul tau a fost creeat cu succes!
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-6 bg-primary-500 overflow-hidden">
          <div className="bg-white sm:min-h-screen col-span-6 sm:col-span-5 rounded-t-lg sm:rounded-l-none sm:rounded-r-lg">
            <div className="w-full mt-6 sm:py-28 px-4 sm:px-8 lg:px-16 xl:px-40">
              <Button name="Spre Dashboard" />
              <div className="hidden sm:flex justify-between items-center space-x-[0.563rem] w-[22.5rem] my-[7.188rem]">
                <p className="w-2/3 text-[0.875rem] text-[#8181A5] py-3">
                  Conecteaza-te cu:
                </p>
                <div className="w-full flex space-x-[0.375rem] overflow-hidden">
                  <div className="w-8 h-8 rounded flex justify-center items-center border text-gray-500">
                    <AiOutlineGoogle />
                  </div>
                  <div className="w-8 h-8 rounded flex justify-center items-center border text-gray-500">
                    <FaFacebookF />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinishPage;
