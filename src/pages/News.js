import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Rarrow from "../assets/images/right_arrow.svg";

import "../css/news.css";

import NewsMinus0y from "../components/NewsMinus0y.js";

const News = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
		return () => {
			window.scrollTo(0, 0);
		};
	}, []);
	return (
		<section className="">
			<div className=" bg-darkest">
				<div className="bread_wrap">
					<Link to="/homepage" className="underline">
						DIV
					</Link>
					<img src={Rarrow} alt="" className="w-[9px]" />
					<Link to="/news">新闻</Link>
				</div>

				<div className="news_container">
					<div className="">
						<ul className="time_index_wrap">

							<Link to="/news/2022" className="time_index after:w-[55px]">
								<li>2022</li>
							</Link>

							<Link to="/news/2021" className="time_index">
								<li>2021</li>
							</Link>
						</ul>
					</div>
					<NewsMinus0y />
				</div>
			</div>
		</section>
	);
};

export default News;
