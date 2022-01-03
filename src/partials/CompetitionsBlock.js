import React from "react";
import competitionSections from "../utils/CompetitionsData";

function CompetitionsBlock() {
    return (
        <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20 border-t border-transparent dark:border-gray-800">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-5 md:pb-10">
                <h2 className="h2 font-red-hat-display mb-4">Projects</h2>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                SMLC chapters compete in Kaggle competitions and present data science projects to gain experience in machine learning applications. Many of the competitions
                create tangible benefits for research and industry, as well. Members work on independent or collaborative projects for other competitions or to help non-profits. The objectives of such projects are to solve real-world problems
                through utilizing machine learning. 
                </p>
            </div>

            {/* Events */}
            <div>
                {competitionSections.map(
                (section) =>
                    section.competitions.length !== 0 && (
                    <div key={section.id}>

                        <h1 className="h3 font-red-hat-display mb-8 text-center">
                        {section.title}
                        </h1>
                        <div className="max-w-sm mx-auto grid gap-x-8 gap-y-12 auto-rows-fr sm:grid-cols-1 lg:grid-cols-2 lg:gap-8 items-start sm:max-w-none md:max-w-2xl lg:max-w-none pb-12">
                        {section.competitions.map((competition) => (
                            <a className="flex h-full" href={"competitions/" + competition.url}>
                            
                            <div className="flex-grow rounded overflow-hidden transition bg-gray-50 shadow-md hover:shadow-lg">
                                <div className="block flex-shrink-0 overflow-hidden relative lg:w-full max-h-80 flex justify-center">
                                <img
                                    layout="fill"
                                    style={{height: 300, objectFit: "cover"}}
                                    src={competition.photo}
                                    alt={competition.title}
                                />
                                </div>
                                <div className="px-6 py-4 align-base">
                                <div className="font-bold text-xl">
                                    {competition.title}
                                </div>
                                {/* <p className="text-gray-500 text-base font-medium mb-2">
                                    {competition.date.toLocaleDateString("en-US", {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                    })}
                                </p> */}
                                <p className="text-gray-500 text-base">
                                    {competition.description}
                                </p>
                                </div>
                            </div>
                            </a>
                        ))}
                        </div>
                    </div>
                    )
                )}
            </div>
            </div>
        </div>
        </section>
    );
}

export default CompetitionsBlock;
