import Hero from "/src/components/Hero/Hero";
import Headline from "/src/components/Headline/Headline";
import List from "/src/components/List/List";
import ProcessOverview from "/src/components/ProcessOverview/ProcessOverview";
import Contact from "/src/components/Contact/Contact";

import briefcase from "/src/assets/briefcase.svg";

const CareerCoaching = function () {
	return (
		<>
			<Hero heading="Career Coaching" description="Achieve and Grow" icon={briefcase} />
			<section className="u-fb-col-wrapper">
				<Headline heading="Unleash the potential of you">
					<p>Career coaching helps you plan the steps to achieve your life goals.</p>
					<p>
						Those that know what they are trying to achieve can align their personal development and
						role choices to meet the path laid out.
					</p>
					<List
						listHeading="Career coaching will help you to"
						listItems={[
							"Analyse where you are, and where you want to be.",
							"Set goals for your personal life, family life and business life.",
							"Confront limiting beliefs and other constraints.",
							"Build out the steps to take to achieve your goals",
						]}
					/>
				</Headline>
				<p>Career coaching comes in three primary stages;</p>
				<Headline heading="Aspiring">
					<p>
						For young people who are probably in their first role, and have reached the stage where
						they are trying to decide what comes next.
					</p>
					<List
						listHeading=" Typical questions Aspiring people ask themselves include"
						listItems={[
							"Do I stay where I am and seek promotion, or move on?",
							"Have I made the right choice of career, or do I want to change?",
							"Do I want to enter People Management, or develop as an Expertise Leader?",
							"What self-development should I be doing and how can I easily access quality materials?",
							"How do my personal goals fit with my career goals?",
						]}
					/>
					<p>
						Getting the career foundations settled facilitates strong decision making, and also
						helps employers see the plan you have made and the achievements along that path.
					</p>
				</Headline>
				<Headline heading="Strengthening">
					<p>
						For people established in their career, looking to grow and get more senior roles, or
						maybe thinking of a change and starting a new path.
					</p>
					<List
						listHeading="Typical questions Strengthening people ask themselves include"
						listItems={[
							"Am I on the right path, or is it time to change and go in another direction?",
							"I have been employed for some time, I know what I am doing, so is it time to strike out on my own?",
							"What post-graduate qualifications do I aim to complete?",
							"How do I get to the next stage in the career hierarchy?",
						]}
					/>
					<p>
						For some this is a time to kick on and capitalise on experience gained, and for others,
						it is a time to challenge themselves and create a new path. Wherever you sit, we can
						help you gain direction, focus and a plan to succeed.
					</p>
				</Headline>
				<Headline heading="Strategic">
					<p>
						For people in more senior roles, who have enjoyed success in their career often face
						challenging decisions on entering the latter stages of a career, and are planning longer
						term and into retirement.
					</p>
					<List
						listHeading="Typical questions Strategic people ask themselves include"
						listItems={[
							"How do I plan for retirement?",
							"What will I need to have the life I want for myself and my family?",
							"How do I balance life and work?",
							"What options do I have in my career?",
							"Is it time to go and do something more for me?",
						]}
					/>
					<p>
						The Strategic stage of your career is not about age. It reflects growing
						responsibilities, higher demands on income, and the need to plan for the future to meet
						your personal, family and business needs.
					</p>
				</Headline>
				<ProcessOverview
					steps={[
						{
							heading: "Diagnose",
							icon: "./src/assets/stethoscope.svg",
							body: "This is an investigation of your situation. It involves you describing what is happening and what is not happening, and you coach seeking clarification. At the end we understand what your goals are and you can set your objectives.",
						},
						{
							heading: "Ideate",
							icon: "./src/assets/bulb.svg",
							body: "Now you understand what it is you are trying to do, the next part of the process is to create ideas on potential actions. We explore what could be done, any development you need and identify support structures.",
						},
						{
							heading: "Propose",
							icon: "./src/assets/message.svg",
							body: "You now move the ideas into actions with a plan that accounts for the actions, tasks, development and support needed. You will also work on the change and communication plan, making sure that you can bring all stakeholders along with you..",
						},
						{
							heading: "Execute",
							icon: "./src/assets/bolt.svg",
							body: "You take the proposal and implement it, evaluating using the measures and objectives we formed earlier.",
						},
						{
							heading: "Review",
							icon: "./src/assets/clipboard-data.svg",
							body: "The final stage is for you to review your progress and look again to the future, knowing what has worked and what still requires work.",
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

export default CareerCoaching;
