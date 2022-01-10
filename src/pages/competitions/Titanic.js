import titanic from "../../images/competition-pics/titanic-front.jpg";
import ReactRoundedImage from "react-rounded-image";


export default function Titanic() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-transparent dark:border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-5 md:pb-10">
            <h2 className="h2 font-red-hat-display mb-4">
              Titanic
            </h2>
            <p className="text-xl leading-relaxed text-gray-500 uppercase font-medium mb-5">
              14,640 teams
            </p> 
            <div className="relative inline-flex w-50 h-50 rounded-full overflow-hidden relative shadow-md transition hover:shadow-lg">
              <a href="https://www.kaggle.com/c/titanic">
                <ReactRoundedImage
                  image={titanic}
                  imageWidth="150"
                  imageHeight="150"
                  roundedSize="13"
                />
              </a>
            </div>   
            <h3 className="h4 mb-2"><u>Task</u></h3>
            <h4 className="text-lg mb-8">Create a model that predicts whether passengers survived the Titanic shipwreck</h4>
            <h3 className="h4 mb-2"><u>Current Results</u></h3>
            <ol className="text-lg mb-8">
              <li className="mb-10"> The goal of the project was to create a machine learning model that can predict the survival of any given person aboard the Titanic. The competition hosts provided a training set of roughly two-thirds of the total size of the Titanic’s passenger base. Columns included: name, boarding location, class, number of siblings, age, and sex. For this competition, we split up into three teams of 5-7 students, and each team collaborated with each other to compile the best ideas for feature generation, model creation, and ensembling.</li>
              <a href="https://www.kaggle.com/nathankang/titanic-dataset-demo" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Notebook on Exploratory Data Analysis
              </a>
              <li className="mt-10 mb-10">In terms of feature generation, we extracted titles from names, encoded categorical features, and imputed missing data. </li>
              <a href="https://medium.com/analytics-vidhya/feature-engineering-for-machine-learning-stem-to-shtem-submission-76903112e437" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Michael's blog on feature engineering
              </a>
              <li className="mt-10 mb-10" >As for model creation, we tested out LightGBM, XGBoost, Linear Regression, Logistic Regression, K-Nearest Neighbors, and Neural Networks. Surprisingly, a well-tuned KNN model performed highest! We decided to take our efforts a step further and try our hands at ensembling, which aims to aggregate multiple models to achieve higher accuracy. We performed bootstrap aggregation, or bagging, as well as linear regression-based stacking to leverage the power of multiple models.</li>
              <a href="https://www.kaggle.com/michaellutz/titanic-notebook-eda-feature-engineering" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Our ultimate feature engineering notebook
              </a>
              <li className="mt-10 mb-10">Despite varying ensembling techniques, a single KNN achieved the highest score. Our highest performer achieved ~79% accuracy. At one point in time, this meant that we were ranked in the top 1% of all competitors when there were 50,000 total competitors.</li>
              <a href="https://www.kaggle.com/shaunakw/bell-ml-3-titanic" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Our Notebook with KNN and other models
              </a>
            </ol>


          </div>
        </div>
      </div>
    </section>
  );
}
