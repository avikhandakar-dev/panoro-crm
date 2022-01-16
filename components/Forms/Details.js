import {
  MdStoreMallDirectory,
  MdPeopleOutline,
  MdWifiCalling3,
  MdKeyboardArrowDown,
  MdErrorOutline,
} from "react-icons/md";

const DetailsForm = () => {
  return (
    <>
      <div className="w-full sm:max-w-sm">
        <div className="flex flex-col items-center">
          <form className="w-full max-w-sm mt-8">
            <div className="sm:mt-14">
              <label className="block relative">
                <span class="text-gray-700">Nume companie</span>
                <input
                  type="text"
                  className="mt-0 pr-8 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                  name="text"
                  autoComplete="off"
                  placeholder="LeDrozd Design Studio"
                />
                <span className="absolute right-0 top-1/2 translate-y-1/2">
                  <MdStoreMallDirectory />
                </span>
              </label>
            </div>

            <div className="mt-10">
              <label className="block relative">
                <span class="text-gray-700">Nume companie</span>
                <input
                  type="text"
                  className="mt-0 pr-8 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                  name="text"
                  autoComplete="off"
                  placeholder="LeDrozd Design Studio"
                />
                <span className="absolute right-0 top-1/2 translate-y-1/2">
                  <MdPeopleOutline />
                </span>
              </label>
            </div>
            <div className="mt-10">
              <label className="block relative">
                <span class="text-gray-700">Nume companie</span>
                <input
                  type="text"
                  className="mt-0 pr-8 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                  name="text"
                  autoComplete="off"
                  placeholder="LeDrozd Design Studio"
                />
                <span className="absolute right-0 top-1/2 translate-y-1/2">
                  <MdKeyboardArrowDown />
                </span>
              </label>
            </div>
            <div className="mt-10 text-[#FF808B]">
              <label className="block relative">
                <span class="text-gray-700">Nume companie</span>
                <input
                  type="text"
                  className="mt-0 pr-8 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                  name="text"
                  autoComplete="off"
                  placeholder="0700 000 00"
                />
                <span className="absolute right-0 top-1/2 translate-y-1/2">
                  <MdWifiCalling3 />
                </span>
              </label>
            </div>
            <div className="text-[0.75rem] flex space-x-2 text-[#FF808B] mb-[1.875rem] mt-[0.625rem]">
              <span className="">
                <MdErrorOutline />
              </span>
              <span className="">
                Nr. de telefon nu este corect. Te rugam sa corectezi
              </span>
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

export default DetailsForm;
