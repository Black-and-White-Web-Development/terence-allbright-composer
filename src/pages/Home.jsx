import Hero from "/src/components/Hero/Hero";
import Headline from "/src/components/Headline/Headline";
import List from "/src/components/List/List";
import Contact from "/src/components/Contact/Contact";

const Home = function () {
	return (
		<>
			<Hero heading="Cluny House Consulting" description="Helping you to be the best you can be" />
			<section className="u-fb-col-wrapper">
				<Headline heading="About">
					<p>How many times have you thought &quot;I need help!&quot;</p>
					<p>
						We are here to help. We help people to understand themselves, their work colleagues and
						their business. We do this by listening to you, and drawing from you your ideas to help
						yourself.
					</p>
					<p>
						Real progress comes from within. Getting through the stress, the fog, or the noise is
						always the barrier to finding your own solution, and that&apos;s what we do, help you
						get through all the noise, think clearly and work out how to execute.
					</p>
					<List
						listHeading="We do this by"
						listItems={[
							"Giving you time to talk about what is important to you.",
							"Listen to what you say, and how you say it. We consider the tone of your voice and the body language to spot congruence and incongruence.",
							"Help you articulate the issue to be dealt with.",
							"Draw out your ideas.",
							"Build out a road map so that the actions and objectives are clear to you.",
						]}
					/>
				</Headline>
				<Contact heading="Want to find out more?">
					<p>Get in touch using the contact form, email at xxx@xxx or by calling 079xxxxxxxx.</p>
				</Contact>
			</section>
		</>
	);
};

export default Home;
