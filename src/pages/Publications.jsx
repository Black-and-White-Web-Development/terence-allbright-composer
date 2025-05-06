import { useState, useRef, useEffect } from "react";
import Publication from "../components/Publication/Publication";
import pubsData from "/src/data/publications.json";
import "./Publications.scss";

const Publications = function () {
	const [sortType, setSortType] = useState("year-desc");
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const dropdownRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = e => {
			if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
				setDropdownOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const extractYear = yearStr => {
		const matches = yearStr.match(/\d{4}/g);
		return matches ? parseInt(matches[matches.length - 1], 10) : 0;
	};

	const sortStrategies = {
		"year-asc": (a, b) => extractYear(a.year) - extractYear(b.year),
		"year-desc": (a, b) => extractYear(b.year) - extractYear(a.year),
		"title-asc": (a, b) => a.title.localeCompare(b.title),
		"title-desc": (a, b) => b.title.localeCompare(a.title),
	};

	const sortedPubs = [...pubsData].sort(sortStrategies[sortType] || (() => 0));

	const options = [
		{ name: "Chronological", func: "year-asc" },
		{ name: "Reverse chronological", func: "year-desc" },
		{ name: "Alphabetical", func: "title-asc" },
		{ name: "Reverse alphabetical", func: "title-desc" },
	];

	const pubsElements = sortedPubs.map(pub => (
		<Publication
			key={pub.id}
			title={pub.title}
			year={pub.year}
			instruments={pub.instruments}
			description={pub.description}
			link={pub.link}
		/>
	));

	return (
		<section className="publications fb-col-wrapper">
			<h1 className="publications__heading">Publications</h1>
			<div className="publications__filters" ref={dropdownRef}>
				<div className="publications__filter dropdown">
					<span className="publications__filter-label">Sort by:</span>
					<div className="dropdown__wrapper">
						<button className="dropdown__button" onClick={() => setDropdownOpen(isOpen => !isOpen)}>
							{options.find(opt => opt.func === sortType)?.name}
						</button>
						{dropdownOpen && (
							<ul className="dropdown__options">
								{options.map(option => (
									<li
										key={option.func}
										className={`dropdown__option ${sortType === option.func ? "selected" : ""}`}
										onClick={() => {
											setSortType(option.func);
											setDropdownOpen(false);
										}}
									>
										{option.name}
									</li>
								))}
							</ul>
						)}
					</div>
				</div>
			</div>
			<div className="publications__publications">{pubsElements}</div>
		</section>
	);
};

export default Publications;
