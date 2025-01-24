import Hero from "/src/components/Hero/Hero";
import Headline from "/src/components/Headline/Headline";
import List from "/src/components/List/List";
import ProcessOverview from "/src/components/ProcessOverview/ProcessOverview";
import Contact from "/src/components/Contact/Contact";

import chartUp from "/src/assets/chart-up.svg";

const BusinessCoaching = function () {
	return (
		<>
			<Hero
				heading="Business Coaching"
				description="An independent view to help you grow"
				icon={chartUp}
			/>
			<section className="u-fb-col-wrapper">
				<Headline heading="Unleash the potential of your business">
					<p>
						Running a business takes knowledge, energy, communication and imagination. It also takes
						up all of your time.
					</p>
					<p>
						Large organisations have support structures where you can get help, but when you run a
						small business it can feel like you have to solve every problem yourself, and it can be
						a lonely place.
					</p>
					<p>
						This is where business coaching comes in. Business coaching is not about telling you how
						to run your business, it is about drawing from you a way forward and a plan to succeed.
					</p>
					<List
						listHeading="Business coaching can help you with"
						listItems={[
							"Overcoming barriers to growth",
							"Strategic planning",
							"Change management",
							"Project management",
							"Cashflow management",
							"Finding great people to employ",
							"Selling and marketing",
						]}
					/>
				</Headline>
				<ProcessOverview
					steps={[
						{
							heading: "Diagnose",
							icon: "./src/assets/stethoscope.svg",
							body: "This is an investigation of your situation. It involves you describing what is happeningand what is not happening, and you coach seeking clarification. At the end we understand what the issues are, and what the causes are. At the end of this process, we set objectives and outcomes.",
						},
						{
							heading: "Ideate",
							icon: "./src/assets/bulb.svg",
							body: "Now we understand what it is we are trying to do, the next part of the process is to create ideas on potential actions. We explore what could be done, who needs to be involved and what constraints we have.",
						},
						{
							heading: "Propose",
							icon: "./src/assets/message.svg",
							body: "We now move the ideas into actions with a plan that accounts for the actions, tasks, people and measurements. We also work on the change and communication plan, making sure that you can bring all stakeholders along with you.",
						},
						{
							heading: "Execute",
							icon: "./src/assets/bolt.svg",
							body: "You take the proposal and implement it, evaluating using the measures and objectives we formed earlier.",
						},
						{
							heading: "Review",
							icon: "./src/assets/clipboard-data.svg",
							body: "The final stage is part of the evaluation, and you will understand the ROI of your actions and form the next steps. Business never stands still, but armed with this process you are in a position to use the steps to solve the next problem you face.",
						},
					]}
				/>
				<Contact heading="Want to find out more?">
					<p>
						Before we get into the formal process, we start with an informal chat to establish if we
						are a good fit to collaborate. In this meeting we will agree what happens next and the
						fee structure and payment process.
					</p>
					<p>To get in touch, please use the contact form, or email at xxx@xxx</p>
				</Contact>
			</section>
		</>
	);
};

export default BusinessCoaching;
