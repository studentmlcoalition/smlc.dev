import snakeai from "../../images/competition-pics/snakeai-front.png";
import ReactRoundedImage from "react-rounded-image";


export default function Snakeai() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-transparent dark:border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-5 md:pb-10">
            <h2 className="h2 font-red-hat-display mb-4">
              Snake AI
            </h2>
            <p className="text-xl leading-relaxed text-gray-500 uppercase font-medium mb-5">
              Completed by Nathan Kang
            </p> 
            <div className="relative inline-flex w-50 h-50 rounded-full overflow-hidden relative shadow-md transition hover:shadow-lg">
              <ReactRoundedImage
                image={snakeai}
                imageWidth="150"
                imageHeight="150"
                roundedSize="13"
              />
            </div>   
            <h3 className="h4 mb-2"><u>Summary</u></h3>
            <h4 className="text-lg mb-8">
            Small neural networks with about 40 nodes were trained to play
            the game snake in 1 player and 1v1 formats. The genetic reinforcement
            learning model was used by finding the best "brains" and mutating
            them to make improvements. 
            </h4>
            <a href="https://github.com/nathankang413/AISnakes" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View the code
            </a>



          </div>
        </div>
      </div>
    </section>
  );
}
