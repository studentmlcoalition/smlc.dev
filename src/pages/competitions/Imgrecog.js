import imgrecog from "../../images/competition-pics/imgrecog-front.jpeg";
import ReactRoundedImage from "react-rounded-image";


export default function Imgrecog() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-transparent dark:border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-5 md:pb-10">
            <h2 className="h2 font-red-hat-display mb-4">
              TensorFlow Image Recognition
            </h2>
            <p className="text-xl leading-relaxed text-gray-500 uppercase font-medium mb-5">
              Completed by Samuel Perrott
            </p> 
            <div className="relative inline-flex w-50 h-50 rounded-full overflow-hidden relative shadow-md transition hover:shadow-lg">
              <a href="https://www.kaggle.com/c/titanic">
                <ReactRoundedImage
                  image={imgrecog}
                  imageWidth="150"
                  imageHeight="150"
                  roundedSize="13"
                />
              </a>
            </div>   
            <h3 className="h4 mb-2"><u>Summary</u></h3>
            <h4 className="text-lg mb-8">
            A convolutional neural network, or CNN, was built to categorize
            images in the MNIST dataset. 
            </h4>
            <a href="https://drive.google.com/file/d/1psd1P2VjoNN8xlCdJv2iAC84EVbmwZjL/view?usp=sharing" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View the code
            </a>


          </div>
        </div>
      </div>
    </section>
  );
}
