import connect from "../../images/competition-pics/connect-front.png";
import ReactRoundedImage from "react-rounded-image";


export default function Connectx() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-transparent dark:border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-5 md:pb-10">
            <h2 className="h2 font-red-hat-display mb-4">
              Connect X
            </h2>
            <p className="text-xl leading-relaxed text-gray-500 uppercase font-medium mb-5">
              224 teams
            </p> 
            <div className="relative inline-flex w-50 h-50 rounded-full overflow-hidden relative shadow-md transition hover:shadow-lg">
              <a href="https://www.kaggle.com/c/connectx/overview">
                <ReactRoundedImage
                  image={connect}
                  imageWidth="150"
                  imageHeight="150"
                  roundedSize="13"
                />
              </a>
            </div>   
            <h3 className="h4 mb-2"><u>Task</u></h3>
            <h4 className="text-lg mb-8">Get a certain number of checkers in a row horizontally, vertically, or diagonally on the game board before the opponent</h4>
            <h3 className="h4 mb-2"><u>Current Results</u></h3>
            <ol className="text-lg mb-8">
              <li>Rank: _</li>
              <li>Score: _</li>
              <li>Top _%</li>
            </ol>


          </div>
        </div>
      </div>
    </section>
  );
}
