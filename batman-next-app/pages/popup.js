import { useEffect, useState } from "react";


export default function Example() {

   const [tabID, setTabID] = useState("")

   useEffect(() => {
     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      
       setTabID(tabs[0].id);
       
     });
   });
  
  function closePopup()
  {
     chrome.runtime.sendMessage(
       { type: "closePopup", tabId: tabID }
     );
  }

  return (
    <>
      <div className="h-screen">
        <div className="pt-2 fixed top-0 w-full bg-white">
          <input
            type="email"
            name="email"
            id="email"
            className="border-b-slate-400 border-t-transparent border-r-transparent focus:border-l-transparent focus:border-t-transparent focus:border-r-transparent border-l-transparent  focus:border-current focus:ring-0 block w-full  "
            placeholder="Search criminals in Gotham City"
          />
        </div>

        <ul
          className="mt-2 max-h-screen mb-32 scroll-py-2 divide-y divide-gray-100 overflow-y-auto"
          role="listbox"
          id="headlessui-combobox-options-7"
        >
          <li className="p-2" role="none">
            <h2 className="sr-only" role="none">
              Quick actions
            </h2>
            <ul className="text-sm text-gray-700 mt-10" role="none">
              <li
                className="flex cursor-default select-none items-center rounded-md px-3 py-2"
                id="headlessui-combobox-option-10"
                role="option"
                tabIndex="-1"
              >
                <img
                  src="https://www.svgrepo.com/show/152683/villian.svg"
                  className=" w-8 h-8"
                />
                <span className="ml-3 flex-auto truncate text-lg font-medium">
                  Bane
                </span>
              </li>

              <li
                className="flex cursor-default select-none items-center rounded-md px-3 py-2"
                id="headlessui-combobox-option-10"
                role="option"
                tabIndex="-1"
              >
                <img
                  src="https://www.svgrepo.com/show/152683/villian.svg"
                  className="w-8 h-8"
                />
                <span className="ml-3 flex-auto truncate text-lg font-medium">
                  Joker
                </span>
              </li>

              <li
                className="flex cursor-default select-none items-center rounded-md px-3 py-2"
                id="headlessui-combobox-option-10"
                role="option"
                tabIndex="-1"
              >
                <img
                  src="https://www.svgrepo.com/show/152683/villian.svg"
                  className="w-8 h-8"
                />
                <span className="ml-3 flex-auto truncate text-lg font-medium">
                  Riddler
                </span>
              </li>

              <li
                className="flex cursor-default select-none items-center rounded-md px-3 py-2"
                id="headlessui-combobox-option-10"
                role="option"
                tabIndex="-1"
              >
                <img
                  src="https://www.svgrepo.com/show/152683/villian.svg"
                  className="w-8 h-8"
                />
                <span className="ml-3 flex-auto truncate text-lg font-medium">
                  Two-Face
                </span>
              </li>

              <li
                className="flex cursor-default select-none items-center rounded-md px-3 py-2"
                id="headlessui-combobox-option-10"
                role="option"
                tabIndex="-1"
              >
                <img
                  src="https://www.svgrepo.com/show/152683/villian.svg"
                  className="w-8 h-8"
                />
                <span className="ml-3 flex-auto truncate text-lg font-medium">
                  Firefly
                </span>
              </li>

              <li
                className="flex cursor-default select-none items-center rounded-md px-3 py-2"
                id="headlessui-combobox-option-10"
                role="option"
                tabIndex="-1"
              >
                <img
                  src="https://www.svgrepo.com/show/152683/villian.svg"
                  className="w-8 h-8"
                />
                <span className="ml-3 flex-auto truncate text-lg font-medium">
                  Deadshot
                </span>
              </li>
            </ul>
          </li>
        </ul>

        <footer className="flex fixed bottom-0 w-full items-center bg-gray-100 py-2.5 px-4 text-xs text-gray-700">
          Click{" "}
          <kbd
            onClick={closePopup}
            className="mx-1 flex h-5 w-10 items-center justify-center rounded border bg-white font-semibold sm:mx-2 border-indigo-600 text-indigo-600"
          >
            here
          </kbd>{" "}
          <span className="hidden sm:inline">to close the popup</span>
        </footer>
      </div>
    </>
  );
}
