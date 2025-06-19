import React from 'react'

function CTASection() {
  return (
    <section className="w-full h-auto flex justify-center">
        <article>
            <h1>What's different about Manage?</h1>
            <p>Manage provides all the functionality your team needs, without the complexity.
               Our software is tailor-made for modern digital product teams.
            </p>
        </article>
        <article>
            <div>
                <ol className="list-decimal space-y-6 list-outside">
                    <li>
                        <h1>Track company-wide progress</h1>
                        <p>See how your day-to-day tasks fit into the wider vision.
                            Go from tracking progress ot the milestone level all the way done 
                            to the smallest of details. Never lose sight of the 
                            bigger picture again.
                        </p>
                    </li>
                    <li>
                        <h1>Advanced built-in reports</h1>
                        <p>Set internal delivery estimates and track progress toward company goals. Our customisable
                            dashboard helps you build out the reports you need to keep key stakeholders informed.
                        </p>
                    </li>
                    <li>
                        <h1>Everything you need in one place</h1>
                        <p>Stop jumpi9ng from one service to another to communicate, store files, and share documents.
                            Manage offers an all-in-one team productivity solution.
                        </p>
                    </li>
                </ol>
            </div>
        </article>
    </section>
  )
}

export default CTASection