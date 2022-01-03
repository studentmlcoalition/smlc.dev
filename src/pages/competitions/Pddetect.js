import pd from "../../images/competition-pics/pd-front.jpeg";
import ReactRoundedImage from "react-rounded-image";


export default function Pddetect() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-transparent dark:border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-5 md:pb-10">
            <h2 className="h2 font-red-hat-display mb-4">
              Diagnosing Parkinson's Disease Earlier with Machine Learning
            </h2>
            <p className="text-xl leading-relaxed text-gray-500 uppercase font-medium mb-5">
              Completed by Joseph Thomas
            </p> 
            <div className="relative inline-flex w-50 h-50 rounded-full overflow-hidden relative shadow-md transition hover:shadow-lg">
              <a href="https://www.kaggle.com/c/titanic">
                <ReactRoundedImage
                  image={pd}
                  imageWidth="150"
                  imageHeight="150"
                  roundedSize="13"
                />
              </a>
            </div>   
            <h3 className="h4 mb-2"><u>Summary</u></h3>
            <h4 className="text-lg mb-8">
            The objective of the project was to use machine learning to detect Parkinson's Disease (PD) at an earlier stage. Since PD affects muscle rigidity
            and speech, datasets with analyzed voice recordings and drawings of spirals and waves, respectively, were retrieved. Separate tests were performed on each
            dataset with the random forest classifier. In a realistic situation, a weighted average with the weights being the accuracies of the models would be used to combine the predictions
            based on speech and the drawings. 
            </h4>
            <a href="https://docs.google.com/document/d/1WcxZF4gK0IPdxFObQJLrHIMT3OMsGssb/edit?usp=sharing&ouid=109680047257647360257&rtpof=true&sd=true" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Detailed explanation of the project
            </a>



          </div>
        </div>
      </div>
    </section>
  );
}
