import Youtube from "../../partials/Youtube";

export default function LinReg() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-transparent dark:border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-5 md:pb-10">
            <h2 className="h2 font-red-hat-display mb-4">
              Basics of Machine Learning and Linear Regression
            </h2>
            <p className="text-xl leading-relaxed text-gray-500 uppercase font-medium mb-5">
              September 10, 2021
            </p>
            <h3 className="h3 mb-2">Agenda</h3>
            <ol className="text-lg mb-8">
              <li>1. Covered and reviewed fundamental concepts of machine learning (supervised vs. unsupervised), error metrics, and the linear regression ML model.  </li>
              <li>2. Went through a full implementation walk through of the linear regression model (with Scikit-Learn) on a real Boston house prices dataset.  </li>
            </ol>
            <div className={"w-full max-w-2xl mx-auto h-96"}>
              <Youtube id="VJ9ABFUXOME" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
