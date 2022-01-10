import nba from "../../images/competition-pics/nba-front.jpeg";
import ReactRoundedImage from "react-rounded-image";


export default function Nbarook() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-transparent dark:border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-5 md:pb-10">
            <h2 className="h2 font-red-hat-display mb-4">
              Predicting NBA Rookie Potential
            </h2>
            {/*}p className="text-xl leading-relaxed text-gray-500 uppercase font-medium mb-5">
              Completed by Joseph Thomas
            </p> */}
            <div className="relative inline-flex w-50 h-50 rounded-full overflow-hidden relative shadow-md transition hover:shadow-lg">
              <a href="https://www.kaggle.com/c/titanic">
                <ReactRoundedImage
                  image={nba}
                  imageWidth="150"
                  imageHeight="150"
                  roundedSize="13"
                />
              </a>
            </div>   
            <h3 className="h4 mb-2"><u>Summary</u></h3>
            <h4 className="text-lg mb-8">
            The objective of the project was to apply machine learning algorithms to predict whether an NBA rookie would become an all-star based on his
            first-year statistics. The Guassian Naive Bayes classifier performed the best compared to a decision tree and random forest. The 82% accuracy of the model
            was achieved by solving class imbalance and removing incomplete data. 
            </h4>
            <a href="https://docs.google.com/presentation/d/15scG-PRtBfAOS4HZmSDYaUea0mOncbMkYBKj6YWf84w/edit?usp=sharing" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Detailed explanation of the project
            </a>


          </div>
        </div>
      </div>
    </section>
  );
}
