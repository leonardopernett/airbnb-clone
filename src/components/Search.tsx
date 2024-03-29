'use client'

import { BiSearch } from 'react-icons/bi'

export default function Search() {
  return (
    <div className="
      border-[1px]
      w-full
      md:w-auto
      py-2
      rounded-full
      shadow-sm
      hover:shadow-md
      transition
      cursor-pointer
    ">
      <div className="
        flex
        flex-row
        items-center
        justify-center
      
      ">
        <div className="
          text-sm
          font-semibold
          px-6
        ">
           Anywhere
        </div>
         <div className="
           hidden
           sm:block
           text-sm
           font-semibold
           px-6
           border-x-[1px]
           flex-1
           text-center
         ">
            Any week
         </div>
         
            <div className="flex flex-row items-center justify-center gap-2 px-3">
               Add Guest

              <div className="
                bg-red-500
                rounded-full
                text-white
                p-2
              ">
                <BiSearch /> 
              </div>
            </div>


         </div>
      </div>

  )
}
