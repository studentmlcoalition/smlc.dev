import Youtube from "../../partials/Youtube";

export default function IntroML() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-transparent dark:border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-5 md:pb-10">
            <h2 className="h2 font-red-hat-display mb-4">
              Introduction to Python and Machine Learning Workshop
            </h2>
            <p className="text-xl leading-relaxed text-gray-500 uppercase font-medium mb-5">
              August 29, 2021
            </p>
            <h3 className="h3 mb-2">Agenda</h3>
            <ol className="text-lg mb-8">
              <li>1. Covered the basics of ML (real-world applications, supervised vs. unsupervised learning, classification vs. regression, etc.), Google Colab, Python, and visualizations involved in exploratory data analysis. </li>
              <li>2. Went through a full implementation walk through on using various visualization libraries such as Matplotlib and Seaborn to visualize and analyze a real breast cancer dataset. </li>
            </ol>
            <div className={"w-full max-w-2xl mx-auto h-96"}>
              <Youtube id="VJ9ABFUXOME" />
              {/* REUPLOAD DRIVE ONTO YOUTUBE */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
