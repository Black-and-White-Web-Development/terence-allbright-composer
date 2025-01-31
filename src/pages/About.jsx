import Hero from "/src/components/Hero/Hero";
import Headline from "/src/components/Headline/Headline";
import List from "/src/components/List/List";

const About = function () {
	return (
		<>
			<Hero heading="Business Coaching" description="An independent view to help you grow" />
			<section className="fb-col-wrapper">
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
			</section>
		</>
	);
};

export default About;
