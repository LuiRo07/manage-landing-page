import React from 'react'

function CTASection() {
  return (
    <section className="w-auto h-screen flex justify-center gap-2 mb-4">
        <article>
            <h1 className="text-2xl text-primary-blue font-bold mb-4-">What's different about Manage?</h1>
            <p>Manage provides all the functionality your team needs, without the complexity.
               Our software is tailor-made for modern digital product teams.
            </p>
        </article>
        <article>
            <div>
                <div className="mx-4">
                        <span>1</span>
                        <h1 className="text-lg text-primary-blue mb-2">Track company-wide progress</h1>
                        <p>See how your day-to-day tasks fit into the wider vision.
                            Go from tracking progress ot the milestone level all the way done 
                            to the smallest of details. Never lose sight of the 
                            bigger picture again.
                        </p>
                        <span>2</span>
                        <h1 className="text-lg text-primary-blue mb-2">Advanced built-in reports</h1>
                        <p>Set internal delivery estimates and track progress toward company goals. Our customisable
                            dashboard helps you build out the reports you need to keep key stakeholders informed.
                        </p>
                        <span>3</span>
                        <h1 className="text-lg text-primary-blue mb-2">Everything you need in one place</h1>
                        <p>Stop jumping from one service to another to communicate, store files, and share documents.
                            Manage offers an all-in-one team productivity solution.
                        </p>
                </div>
            </div>
        </article>
    </section>
  )
}

export default CTASection