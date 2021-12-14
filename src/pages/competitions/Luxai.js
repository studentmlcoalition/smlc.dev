import lux from "../../images/competition-pics/lux-front.png";
import ReactRoundedImage from "react-rounded-image";


export default function Luxai() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-transparent dark:border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-5 md:pb-10">
            <h2 className="h2 font-red-hat-display mb-4">
              Lux AI
            </h2>
            <p className="text-xl leading-relaxed text-gray-500 uppercase font-medium mb-5">
              1,186 teams
            </p>  
            <div className="relative inline-flex w-50 h-50 rounded-full overflow-hidden relative shadow-md transition hover:shadow-lg"> 
              <a href="https://www.kaggle.com/c/lux-ai-2021/overview">
                <ReactRoundedImage
                  image={lux}
                  imageWidth="150"
                  imageHeight="150"
                  roundedSize="13"
                />
              </a>
            </div>    
            <h3 className="h4 mb-2"><u>Task</u></h3>
            <h4 className="text-lg mb-8">Design agents to solve a multi-variable and resource gathering problem in 1v1 situations against other competitors</h4>
            <h3 className="h4 mb-2"><u>Current Results</u></h3>
            <ol className="text-lg mb-8">
              <li>Rank: 614</li>
              <li>Score: 785.7</li>
              <li>Top 52%</li>
            </ol>


          </div>
        </div>
      </div>
    </section>
  );
}
