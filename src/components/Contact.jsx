import React from "react";
const contact = ()=> {
  return (
    <div name="contact" className="pt-10 w-full bg-[#0a192f] ">
      <footer class="relative  pt-8 pb-6">
  <div class="mx-auto px-4">
    <div class="flex flex-wrap text-left lg:text-left ">
      <div class="w-full lg:w-6/12 px-4">
        <h4 class="text-3xl fonat-semibold text-white">Let's keep in touch!</h4>
        <h5 class="text-lg mt-0 mb-2 text-white">
            {/* text-blueGray-600 */}
          Find me on any of these platforms, I respond within 1-2 business days.
        </h5>
        <h5 class="text-lg mt-0 mb-2  text-indigo-300">
        <i class="fa fa-envelope" aria-hidden="true"> ludbeankita2002@gmail.com</i>
        </h5>
        <div class="mt-6 lg:mb-0 mb-6">
            <button class="bg-white text-black-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <a class="fab fa-medium" href="https://medium.com/@ankita-ludbe"></a></button>
            <button class="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <a class="fab fa-linkedin" href="https://www.linkedin.com/in/ankita-ludbe/"></a></button>
            <button class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            {/* <a class="fa fa-linkedin" href="https://www.linkedin.com/in/gursimarsm/"></a> */}
            <a class="fab fa-github" href="https://github.com/ankitaludbe"></a>
          </button>
        </div>
        
      </div>
      
      
    </div>
    <hr class="my-6 border-blueGray-300"/>
    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full md:w-4/12 px-4 mx-auto text-center">
        <div class="text-sm text-blueGray-500 font-semibold py-1">
          Copyright © <span id="get-current-year">2023</span>
          <a href="https://www.creative-tim.com/product/notus-js" class="text-blueGray-500 hover:text-gray-800" target="_blank"/> by
          <a href="https://www.creative-tim.com?ref=njs-profile" class="text-blueGray-500 hover:text-blueGray-800"> Ankita Ludbe</a>.
        </div>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
}
export default contact;

// https://www.linkedin.com/in/gursimarsm/