import React from "react";

function ResourcesBlock() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-transparent dark:border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-red-hat-display mb-4">
              Meet Our Leadership!
            </h2>
          </div>


          <div className="text-center pb-12">
              <div className="relative inline-flex flex-col mb-4">
                <img
                  class="h-48 w-48 object-cover"
                  src={require("../images/photo-aadi.jpg").default}
                  alt="Aadi Chauhan"
                />
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                Aadi Chauhan
              </blockquote>
              <blockquote className="text-xl text-blue-600 dark:text-gray-400">
                President
              </blockquote>
            </div>

          {/* People */}
          <div className="max-w-sm mx-auto grid gap-x-8 gap-y-12 sm:grid-cols-3 lg:gap-12 items-start sm:max-w-none md:max-w-2xl lg:max-w-none">
            

            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <img
                  class="h-48 w-48 object-cover"
                  src={require("../images/photo-ayush.jpeg").default}
                  alt="Ayush Ghosh"
                />
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                Ayush Ghosh
              </blockquote>
              <blockquote className="text-xl text-blue-600 dark:text-gray-400">
                Curriculum Director
              </blockquote>
            </div>

            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <img
                  class="h-48 w-48 object-cover"
                  src={require("../images/photo-ayaan.jpeg").default}
                  alt="Ayaan Vaswani"
                />
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                Ayaan Vaswani
              </blockquote>
              <blockquote className="text-xl text-blue-600 dark:text-gray-400">
                Outreach Co-Director
              </blockquote>
            </div>

            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <img
                  class="h-48 w-48 object-cover"
                  src={require("../images/photo-rudransh.jpeg").default}
                  alt="Rudransh Singh"
                />
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                Rudransh Singh
              </blockquote>
              <blockquote className="text-xl text-blue-600 dark:text-gray-400">
                Resource Co-Director
              </blockquote>
            </div>

            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <img
                  class="h-48 w-48 object-cover"
                  src={require("../images/photo-kevin.jpeg").default}
                  alt="Kevin Lu"
                />
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                Kevin Lu
              </blockquote>
              <blockquote className="text-xl text-blue-600 dark:text-gray-400">
                Resource Co-Director
              </blockquote>
            </div>

            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <img
                  class="h-48 w-48 object-cover"
                  src={require("../images/photo-aarush.jpeg").default}
                  alt="Aarush Gupta"
                />
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                Aarush Gupta
              </blockquote>
              <blockquote className="text-xl text-blue-600 dark:text-gray-400">
                Resource Co-Director
              </blockquote>
            </div>

            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <img
                  class="h-48 w-48 object-cover"
                  src={require("../images/photo-vedant.jpeg").default}
                  alt="Vedant Hathalia"
                />
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                Vedant Hathalia
              </blockquote>
              <blockquote className="text-xl text-blue-600 dark:text-gray-400">
                Resource Co-Director
              </blockquote>
            </div>

            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <img
                  class="h-48 w-48 object-cover"
                  src={require("../images/photo-zachary.jpeg").default}
                  alt="Chatanya Sarin"
                />
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                Zachary Li
              </blockquote>
              <blockquote className="text-xl text-blue-600 dark:text-gray-400">
                Outreach Co-Director
              </blockquote>
            </div>

            {/* <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <img
                  class="h-48 w-48 object-cover"
                  src={require("../images/photo-zane.jpeg").default}
                  alt="Zane Hensley"
                />
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                Zane Hensley
              </blockquote>
              <blockquote className="text-xl text-blue-600 dark:text-gray-400">
                Resource Co-Director
              </blockquote>
            </div> */}
            {/* <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <img
                  class="h-48 w-48 object-cover"
                  src={require("../images/photo-isaac.jpeg").default}
                  alt="Isaac Contreras"
                />
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                Isaac Contreras
              </blockquote>
              <blockquote className="text-xl text-blue-600 dark:text-gray-400">
                Outreach Director
              </blockquote>
            </div> */}
          </div>

          
        
          {/* Alumni */}
          <div className="max-w-3xl mx-auto text-center pb-12 pt-10 md:pb-20">
            <h3 className="h3 font-red-hat-display mb-4 text-gray-400">
              Alumni Leadership
            </h3>
          </div>
          <div className="max-w-sm mx-auto grid gap-x-8 gap-y-12 sm:grid-cols-3 lg:gap-12 items-start sm:max-w-none md:max-w-2xl lg:max-w-none">
            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <img
                  class="h-48 w-48 object-cover"
                  src={require("../images/photo-michael.jpg").default}
                  alt="Michael Lutz"
                />
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                Michael Lutz
              </blockquote>
              <blockquote className="text-xl text-blue-600 dark:text-gray-400">
                
              </blockquote>
            </div>

            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <img
                  class="h-48 w-48 object-cover"
                  src={require("../images/photo-joseph.jpeg").default}
                  alt="Joseph Thomas"
                />
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                Joseph Thomas
              </blockquote>
              <blockquote className="text-xl text-blue-600 dark:text-gray-400">
              </blockquote>
            </div>

            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <img
                  class="h-48 w-48 object-cover"
                  src={require("../images/photo-aswin.jpeg").default}
                  alt="Aswin Surya"
                />
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                Aswin Surya
              </blockquote>
              <blockquote className="text-xl text-blue-600 dark:text-gray-400">
              </blockquote>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResourcesBlock;
