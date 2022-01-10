import covid from "../../images/competition-pics/cov-front.jpg";
import ReactRoundedImage from "react-rounded-image";


export default function Covid() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-transparent dark:border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-5 md:pb-10">
            <h2 className="h2 font-red-hat-display mb-4">
              SIIM-FISABIO-RSNA COVID-19 Detection
            </h2>
            <p className="text-xl leading-relaxed text-gray-500 uppercase font-medium mb-5">
              1,305 teams
            </p> 
            <div className="relative inline-flex w-50 h-50 rounded-full overflow-hidden relative shadow-md transition hover:shadow-lg">
              <a href="https://www.kaggle.com/c/siim-covid19-detection">
                <ReactRoundedImage
                  image={covid}
                  imageWidth="150"
                  imageHeight="150"
                  roundedSize="13"
                />
              </a>
            </div>   
            <h3 className="h4 mb-2"><u>Task</u></h3>
            <h4 className="text-lg mb-8">Create a model that correctly identifies and localizes COVID-19 abnormalities on chest radiographs, categorizing them as negative or atypical for COVID-19. This was conducted as part of an online Kaggle Competition.</h4>
            <h3 className="h4 mb-2"><u>Current Results</u></h3>
            <ol className="text-lg mb-8">
              <li className="mb-8">The goal of this project was to create 2 models for the diagnosis of pneumonia in the lungs and Covid-19 infection. Given x-ray images of patients’ lungs, one model classified the types of infection, while the other highlighted locations in the image (“bounding boxes”) where infection was found. In individual teams, we used state-of-the-art models such as VGG16 and YOLO for image classification and bounding box definition.</li>
              <a href="https://www.kaggle.com/nathankang/covid-competition-submission" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  To learn more, check out our notebook!
              </a>
            </ol>


          </div>
        </div>
      </div>
    </section>
  );
}
