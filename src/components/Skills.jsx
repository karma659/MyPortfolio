import React from "react";

const Skills = () => {
  return (
    <div name="skills" className=" px-20 py-20 w-full h-full md:h-screen justify-center items-center ">
      <div data-aos="slide-down" data-aos-duration="1000" className=" flex  items-center justify-center py-2 ">
        <h1 className="font-[Nunito]  py-2  text-3xl sm:text-7xl text- text-yellow-600">
          Skills
        </h1>
      </div>

      <div className="   w-full font-[Roboto]  md:text-[70%] text-[60%]    container md:flex  gap-10 items-center   justify-center" >
          {/**left */}
        <div   className="   flex-col  gap-3 my-1 ">

          <div data-aos="slide-down" 
               data-aos-duration=""  class="py-2 w-full md:truncate  shadow-md my-4 rounded-sm  border-b-blue-600  border-b-2">
            <h2 className="px-2   md:text-2xl">Data Structures and Algorithms</h2> 
          </div>
          <div   data-aos="fade-in"
               data-aos-duration="" class=" py-2 w-full md:truncate    shadow-md my-4 rounded-sm  border-b-blue-600  border-b-2 ">
            <h2 className="px-2  md:text-2xl">Object Oriented Programming & Design Patterns</h2>
          </div>
          <div   data-aos="slide-up"
               data-aos-duration="" class="py-2 w-full md:truncate  shadow-md my-4 rounded-sm border-b-2 border-b-blue-600  ">
            <h2 className="px-2  md:text-2xl">C/C++, Java, JavaScript, HTML, CSS</h2>
          </div>
        </div>
        {/**right  */}
        <div  className=" flex-col gap-3 my-1 " >
          <div    data-aos="slide-down"
               data-aos-duration="" class="py-2 w-full md:truncate  shadow-md my-4 rounded-sm border-b-blue-600 border-b-2  ">
            <h2 className="px-2  md:text-2xl" > Node.js, React.js, Express , Socket.IO </h2>
          </div>

          <div   data-aos="fade-in"
               data-aos-duration="" class=" py-2 w-full md:truncate shadow-md  my-4 rounded-sm border-b-2 border-b-blue-600  ">
            <h2 className="px-2  md:text-2xl">MongoDB, MySQL, Mssql Server</h2>          </div>
          <div   data-aos="slide-up"
               data-aos-duration=""  class=" py-2 w-full md:truncate shadow-md my-4  rounded-sm border-b-2 border-b-blue-600  ">
            <h2 className="px-2  md:text-2xl">VS Code, Git and Github, Postman</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
