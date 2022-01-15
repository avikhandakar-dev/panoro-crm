import { BiEnvelopeOpen } from "react-icons/bi";
import { VscLock } from "react-icons/vsc";

const LoginForm = () => {
  return (
    <>
      <div className="w-full sm:max-w-sm overflow-hidden sm:mt-[5.125rem]">
        <div className="flex flex-col items-center">
          <form className="w-full max-w-sm">
            <div className="sm:mt-14">
              <label className="block relative">
                <span class="text-gray-700">Email</span>
                <input
                  type="email"
                  className="mt-0 pr-8 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                  name="email"
                  autoComplete="off"
                  placeholder="lellydrozd@panoro.ro"
                />
                <span className="absolute right-0 top-1/2 translate-y-1/2">
                  <BiEnvelopeOpen />
                </span>
              </label>
            </div>
            <div className="mt-14">
              <label className="block relative">
                <span class="text-gray-700">Password</span>
                <input
                  type="password"
                  className="mt-0 pr-8 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                  name="password"
                  autoComplete="off"
                  placeholder="***********"
                />
                <span className="absolute right-0 top-1/2 translate-y-1/2">
                  <VscLock />
                </span>
              </label>
            </div>

            <div className="hidden sm:flex justify-between items-center w-full py-10">
              <div className="">
                <label class="cursor-pointer label flex space-x-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm checkbox-primary rounded-full"
                  />
                  <span class="label-text">Nu ma deconecta!</span>
                </label>
              </div>
              <div className="">
                <span className="text-[#0475E6] font-bold text-[0.875rem]">
                  <a href="/">Reseteaza parola</a>
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row w-max mx-auto sm:mx-0 space-x-[0.563rem] pb-6 sm:pb-0 mt-6 sm:mt-0">
              <button className="btn px-8 btn-primary">
                <span className="hidden sm:block">Conecteaza-te</span>
                <span className="sm:hidden">Sign In</span>
              </button>
              <button className="btn px-8 hidden sm:block">Creeaza cont</button>
              <a className="sm:hidden text-gray-500 text-center text-xs mt-2">
                Nu ai cont? Creeaza cont!
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
