import PropTypes from "prop-types";

const TermsOfUse = function ({ siteName }) {
	return (
		<section className="terms fb-col-wrapper">
			<h1 className="terms__heading">Terms of Use</h1>
			<p className="terms__paragraph">
				By using and browsing this website, you are agreeing to comply with and be bound by the
				following terms and conditions of use, which together with our privacy policy govern our
				relationship with you concerning this website. If you disagree with any part of these terms
				and conditions, please do not use our website.
			</p>
			<h2>Parties</h2>
			<p className="terms__paragraph">
				The term &quot;{siteName}&quot; or &quot;us&quot; or &quot;we&quot; refers to the owner of
				the website whose registered office is 20 Wiston Avenue, Chichester, PO19 8RJ. The term
				&quot;you&quot; refers to the user or viewer of our website. The use of this website is
				subject to the following terms of use:
			</p>
			<h2>Site content</h2>
			<p className="terms__paragraph">
				The content of the pages of this website is for your general information and use only. It is
				subject to change without notice.
			</p>
			<p className="terms__paragraph">
				Your use of any information or materials on this website is entirely at your own risk, for
				which we shall not be liable. It shall be your own responsibility to ensure that any
				products, services or information available through this website meet your specific
				requirements.
			</p>
			<p className="terms__paragraph">
				Neither we nor any third parties provide any warranty or guarantee as to the accuracy,
				timeliness, performance, completeness or suitability of the information and materials found
				or offered on this website for any particular purpose. You acknowledge that such information
				and materials may contain inaccuracies or errors and we expressly exclude liability for any
				such inaccuracies or errors to the fullest extent permitted by law.
			</p>
			<h2>External resources</h2>
			<p className="terms__paragraph">
				This website may also include links to other websites. These links are provided for your
				convenience to provide further information. They do not signify that we endorse the
				website(s). We have no responsibility for the content of the linked website(s).
			</p>
			<h2>Licensing</h2>
			<p className="terms__paragraph">
				This website contains material which is owned by or licensed to us. This material includes,
				but is not limited to, the design, layout, look, appearance and graphics. Reproduction is
				prohibited other than in accordance with the copyright notice, which forms part of these
				terms and conditions.
			</p>
			<p className="terms__paragraph">
				All trade marks reproduced in this website which are not the property of, or licensed to,
				the operator are acknowledged on the website.
			</p>
			<h2>Fair use</h2>
			<p className="terms__paragraph">
				Unauthorised use of this website may give rise to a claim for damages and/or be a criminal
				offence.
			</p>
			<p className="terms__paragraph">
				Your use of this website and any dispute arising out of such use of the website is subject
				to the laws of England, Northern Ireland, Scotland and Wales.
			</p>
		</section>
	);
};

TermsOfUse.propTypes = {
	siteName: PropTypes.string.isRequired,
};

export default TermsOfUse;
