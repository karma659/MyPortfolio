import React from "react";

const Skills = () => {
  return (
    <div name="skills" className=" px-20 py-20 w-full h-full md:h-screen justify-center items-center ">
      <div data-aos="slide-down" data-aos-duration="1000" className=" flex  items-center justify-center py-2 ">
        <h1 className="font-[Nunito] hover:font-[Roboto] py-2  text-3xl sm:text-7xl text-blue-600 ">
          Skills
        </h1>
      </div>

      <div className="  px-20 w-full font-[Roboto]  md:text-[70%] text-[60%]    container md:flex  gap-10 items-center   justify-center" >
          {/**left */}
        <div   className="   flex-col  gap-3 my-1 ">

          <div data-aos="fade-down" 
               data-aos-duration="1200"  class="py-2 w-full md:truncate  shadow-md my-4 rounded-sm  border-b-blue-600  border-b-2">
            <h2 className="px-2   md:text-2xl">Data Structures and Algorithms</h2> 
          </div>
          <div   data-aos="slide-right"
               data-aos-duration="1400" class=" py-2 w-full md:truncate    shadow-md my-4 rounded-sm  border-b-blue-600  border-b-2 ">
            <h2 className="px-2  md:text-2xl">Object Oriented Programming & Design Patterns</h2>
          </div>
          <div   data-aos="fade-up"
               data-aos-duration="1600" class="py-2 w-full md:truncate  shadow-md my-4 rounded-sm border-b-2 border-b-blue-600  ">
            <h2 className="px-2  md:text-2xl">C/C++, Java, JavaScript, HTML, CSS</h2>
          </div>
        </div>
        {/**right  */}
        <div  className=" flex-col gap-3 my-1 " >
          <div    data-aos="fade-down"
               data-aos-duration="1200" class="py-2 w-full md:truncate  shadow-md my-4 rounded-sm border-b-blue-600 border-b-2  ">
            <h2 className="px-2  md:text-2xl" >Spring, Hibernate, Node.js, React.js, Redux, Socket.IO</h2>
          </div>

          <div   data-aos="slide-left"
               data-aos-duration="1400" class=" py-2 w-full md:truncate shadow-md  my-4 rounded-sm border-b-2 border-b-blue-600  ">
            <h2 className="px-2  md:text-2xl">MongoDB, MySQL</h2>          </div>
          <div   data-aos="fade-up"
               data-aos-duration="1600"  class=" py-2 w-full md:truncate shadow-md my-4  rounded-sm border-b-2 border-b-blue-600  ">
            <h2 className="px-2  md:text-2xl">VS Code, Git and Github, Postman, Linux</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
