import React from 'react'

// this section highlights the key features of the Manage software
function CTASection() {
  return (
    <section className="flex justify-between mb-[10vh]">
        {/* left side */}
        <article className="w-[35%] h-auto">
            <h1 className="text-2xl text-primary-blue font-bold mb-4-">What's different about Manage?</h1>
            <p>Manage provides all the functionality your team needs, without the complexity.
               Our software is tailor-made for modern digital product teams.
            </p>
        </article>
        {/* right side */}
        <article className="w-[40%]">
            <div className="grid grid-cols-[auto_90%] gap-x-4 mb-4">
                <span className="bg-primary-red text-white px-6 py-2 rounded-full max-w-fit">01</span>
                <h1 className="text-lg text-primary-blue mb-2"> Track company-wide progress</h1>
                <p className="col-start-2 max-w-[70%]">See how your day-to-day tasks fit into the wider vision.
                    Go from tracking progress at the milestone level all the way done 
                    to the smallest of details. Never lose sight of the 
                    bigger picture again.
                </p>
            </div>
            <div className="grid grid-cols-[auto_90%] gap-x-4 mb-4">
                <span className="bg-primary-red text-white px-6 py-2 rounded-full max-w-fit">02</span>
                <h1 className="text-lg text-primary-blue mb-2"> Advanced built-in reports</h1>
                <p className="col-start-2 max-w-[70%]">Set internal delivery estimates and track progress toward company goals. Our customisable
                    dashboard helps you build out the reports you need to keep key stakeholders informed.
                </p>
            </div>
            <div className="grid grid-cols-[auto_90%] gap-x-4 mb-4">
                <span className="bg-primary-red text-white px-6 py-2 rounded-full max-w-fit">03</span>
                <h1 className="text-lg text-primary-blue mb-2">Everything you need in one place</h1>
                <p className="col-start-2 max-w-[70%]">Stop jumping from one service to another to communicate, store files, and share documents.
                    Manage offers an all-in-one team productivity solution.
                </p>
            </div>
        </article>
    </section>
  )
}

export default CTASection