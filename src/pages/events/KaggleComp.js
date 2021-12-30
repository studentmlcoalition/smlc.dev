import Youtube from "../../partials/Youtube";

export default function KaggleComp() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-transparent dark:border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-5 md:pb-10">
            <h2 className="h2 font-red-hat-display mb-4">
              Walkthrough of Submitting to a Kaggle Machine Learning and Data Science Competition
            </h2>
            <p className="text-xl leading-relaxed text-gray-500 uppercase font-medium mb-5">
              December 12, 2021
            </p>
            <h3 className="h3 mb-2">Agenda</h3>
            <ol className="text-lg mb-8">
              <li>1. Covered fundamental concepts of the types of machine learning (supervised and unsupervised learning) and the logistic regression model. </li>
              <li>2. Went through a full implementation walk through of the logistic regression model (with Scikit-Learn) on the Titanic Kaggle Competition's dataset.  </li>
              <li>3. Explained how submitting to a Kaggle competition works and best tips and practices for competitions</li>
              <li>4. All attendees were able to submit to their first Kaggle competition and achieve a good score!</li>
            </ol>
            <div className={"w-full max-w-2xl mx-auto h-96"}>
              <Youtube id="ew7uFPC5bgM" />
              <Youtube id="eeQDZaCZ60g" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
