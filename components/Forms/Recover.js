import Button from "@components/Button";
import { MdCheckCircleOutline } from "react-icons/md";

const RecoverForm = () => {
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
                  <MdCheckCircleOutline />
                </span>
              </label>
            </div>

            <Button name="Recupereaza parola" />
          </form>
        </div>
      </div>
    </>
  );
};

export default RecoverForm;
