import React from 'react'

// this section highlights the key features of the Manage software
function CTASection() {
  return (
    <section className="flex flex-col sm:flex-row sm:justify-between mb-[10vh]">
        {/* left side */}
        <article className="text-center sm:text-left sm:w-[35%] h-auto mb-12">
            <h1 className="text-2xl text-primary-blue font-bold mb-4-">What's different about Manage?</h1>
            <p>Manage provides all the functionality your team needs, without the complexity.
               Our software is tailor-made for modern digital product teams.
            </p>
        </article>
        {/* right side */}
        <article className="sm:w-[40%]">
            <div className="flex flex-col mb-8">
                <div className="bg-[cornsilk] sm:bg-transparent flex items-center rounded-l-full mb-2 sm:mb-4">
                    <span className="bg-primary-red text-white px-6 py-4 inline-flex items-center justify-center rounded-full mr-4">01</span>
                    <h1 className=" text-primary-blue font-bold sm:bg-transparent"> Track company-wide progress</h1>
                </div>
                <p className="sm:ml-24">See how your day-to-day tasks fit into the wider vision.
                    Go from tracking progress at the milestone level all the way done 
                    to the smallest of details. Never lose sight of the 
                    bigger picture again.
                </p>
            </div>
            <div className="flex flex-col mb-8">
                <div className="bg-[cornsilk] sm:bg-transparent flex sm: items-center rounded-l-full mb-2 sm:mb-4">
                    <span className="bg-primary-red text-white px-6 py-4 inline-flex items-center justify-center rounded-full mr-4">02</span>
                    <h1 className="text-primary-blue font-bold sm:bg-transparent"> Advanced built-in reports</h1>
                </div>
                <p className="sm:ml-24">Set internal delivery estimates and track progress toward company goals. Our customisable
                    dashboard helps you build out the reports you need to keep key stakeholders informed.
                </p>
            </div>
            <div className="flex flex-col mb-8">
                <div className="bg-[cornsilk] sm:bg-transparent flex sm: items-center rounded-l-full mb-2 sm:mb-4">
                    <span className="bg-primary-red text-white px-6 py-4 inline-flex items-center justify-center rounded-full mr-4">03</span>
                    <h1 className="text-primary-blue font-bold sm:bg-transparent">Everything you need in one place</h1>
                </div>
                <p className="sm:ml-24">Stop jumping from one service to another to communicate, store files, and share documents.
                    Manage offers an all-in-one team productivity solution.
                </p>
            </div>
        </article>
    </section>
  )
}

export default CTASection