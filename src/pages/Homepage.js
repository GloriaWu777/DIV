import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Jarrow from "../assets/images/joinus_arrow.svg";
import Larrow from "../assets/images/prev_stroke_arrow.svg";
import Rarrow from "../assets/images/next_stroke_arrow.svg";

import Larrow_grey from "../assets/images/prev_stroke_grey_arrow.svg";
import Rarrow_grey from "../assets/images/next_stroke_grey_arrow.svg";
import Morearrow from "../assets/images/more_arrow.svg";

import Nextarrow from "../assets/images/next_arrow.svg";
import Prearrow from "../assets/images/pre_arrow.svg";

// TODO: 修改新闻图片
import Picn1 from "../assets/images/news_cover.png";
import Picn2 from "../assets/images/news_cover2.png";
import Picn3 from "../assets/images/news_cover.png";
import Picn4 from "../assets/images/news_cover2.png";
import Picn5 from "../assets/images/news_cover.png";
import Picn6 from "../assets/images/news_cover2.png";
import slider from "react-slick/lib/slider";

const Homepage = () => {
	// banner箭头样式改变 src
	const [next, setNext] = useState(true);
	const [prev, setPrev] = useState(false);

	// banner的背景集合
	const bg_banners = [
		"bg-homepage_banner",
		"bg-homepage_banner2",
		"bg-homepage_banner3",
	];
	// banner轮播图数量
	const BANNER_NUM = 3;

	// 点击左右箭头 切换banner
	const [count, setCount] = useState(0);
	function handleClickPlus() {
		setCount(count + 1);

		if (count + 1 < BANNER_NUM) {
			const homepage_banner = document.getElementById("homepage_banner");

			homepage_banner.classList.remove(bg_banners[count]);

			homepage_banner.classList.add(bg_banners[(count + 1) % BANNER_NUM]);

			setPrev(true);
			if (count + 1 == BANNER_NUM - 1) {
				setNext(false);
			}
		} else {
			console.log("plus end");
			setCount(BANNER_NUM - 1);

			setNext(false);
			return;
		}
	}

	function handleClickMinus() {
		// console.log("clickminus");

		setCount(count - 1);

		if (count - 1 >= 0) {
			const homepage_banner = document.getElementById("homepage_banner");

			homepage_banner.classList.remove(bg_banners[count]);
			homepage_banner.classList.add(bg_banners[(count + 2) % BANNER_NUM]);
			setPrev(true);
			setNext(true);
			if (count - 1 == 0) {
				setPrev(false);
			}
		} else {
			console.log("minus end");
			setCount(0);
			setNext(true);
			setPrev(false);
			return;
		}
	}

	// TODO: ”加入我们“点击之后的效果待定
	const joinUs = () => {
		console.log("contact us");
		var link =
			"mailto:13261651577@163.com" +
			"?cc=3120211887@bit.edu.cn" +
			"&subject=" +
			encodeURIComponent("我想要加入HXD实验室") +
			"&body=" +
			encodeURIComponent(document.getElementById("lab_name").value);
		window.location.href = link;
	};

	const [activeSlide, setActiveSlide] = useState(0);

//新闻 EFFECT: 轮播左侧玻璃遮罩效果
	useEffect(() => {
		// 清除含有玻璃遮罩的类名
		const xxx = document.getElementsByClassName("glass_cover")[0];
		if (xxx) {
			xxx.classList.remove("glass_cover");
			console.log("clear");
		} else {
			console.log("changed");
		}

		// 当前活跃slide
		const active_slide = document.getElementsByClassName("slick-active")[0];
		// 需要加玻璃遮罩的元素
		const slick_glass = active_slide.previousSibling;
		// slick_glass.classList.add('glass_cover')
		// 添加遮罩
		slick_glass.classList.add("glass_cover");

		console.log(document.getElementsByClassName("news_grid")[0]);

		// slick-current slick-active slick-slide
	}, [activeSlide]);

//新闻 slider 设置
	const settings = {
		className: "news_grid",
		dots: true,

		infinite: true,
		speed: 100,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		paseOnHover: true,
		centerMode: true,
		centerPadding: "40px",
		adaptiveHeight: true,
		lazyLoad: true,
		arrow: true,
		

		// FIXME:
		beforeChange: (current, next) => {
			setActiveSlide(next);
		},
		afterChange: (current) => {
			setActiveSlide(current);
		},

		responsive: [
			{
				breakpoint: 2000,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 1440,
				settings: {
					slidesToShow: 3,
				},
			},

			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
				},
			},

			{
				breakpoint: 750,
				settings: {
					slidesToShow: 1,
					centerPadding: "18px",
				},
			},
		],
	};

	const sliderRef = useRef();
//新闻 前后箭头 preArrow & nextArrow
	function handleNextArrow() {
		sliderRef.current.slickNext()
		console.log("click next");
	}

	function handlePrevArrow() {
		sliderRef.current.slickPrev()
		console.log('click prev')
	}

	return (
		<section className="homepage_section">
			<div id="homepage_banner" className="bg-homepage_banner homepage_banner">
				<div className="banner_text_container">
					<div className="about_us_container">
						<h1>About Us</h1>
						<p>
							我们是个很不错的工作室，我们是个很不错的工作室，我们是个很不错的工作室，我们是个很不错的工作室，我们是个很不错的工作室。
						</p>
					</div>

					<div className="right_container">
						<div onClick={joinUs} className="join_us_container group">
							<header className="join_us_text">加入我们</header>
							<div className="join_us_icon">
								<img src={Jarrow} alt="" className="w-auto" />
							</div>
						</div>
						<div className="click_icon_container">
							<div className="click_icon_wrap">
								<div onClick={handleClickMinus} className="prev_wrap">
									<img
										src={prev ? Larrow : Larrow_grey}
										alt=""
										className="prev_icon"
										id="prev_icon"
									/>
								</div>
								<div onClick={handleClickPlus} className="next_wrap">
									<img
										src={next ? Rarrow : Rarrow_grey}
										alt=""
										className="next_icon"
										id="next_icon"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

{/* 项目画廊 */}
			<div className="projects_gallery">
				<div className="projects_entry">
					<h2>项目画廊</h2>
					<h3>Projects Gallery</h3>
				</div>
				<div className="projects_grid ">
					{/* 1 */}
					<SingleProject
						to="/projects/2222"
						num="01"
						name="某个项目的名称"
						keywords="关键词关键词关键词"
						date="2021/10/23"
						desc="某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介"
					></SingleProject>
					{/* 2 */}
					<SingleProject
						to="/projects/2222"
						num="01"
						name="某个项目的名称"
						keywords="关键词关键词关键词"
						date="2021/10/23"
						desc="某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介"
					></SingleProject>
					{/* 3 */}
					<SingleProject
						to="/projects/3333"
						num="01"
						name="某个项目的名称"
						keywords="关键词关键词关键词"
						date="2021/10/23"
						desc="某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介"
					></SingleProject>

					{/* 4 */}
					<SingleProject
						to="/projects/3333"
						num="01"
						name="某个项目的名称"
						keywords="关键词关键词关键词"
						date="2021/10/23"
						desc="某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介"
					></SingleProject>

					{/* 5 */}
					<SingleProject
						to="/projects/5555"
						num="01"
						name="某个项目的名称"
						keywords="关键词关键词关键词"
						date="2021/10/23"
						desc="某个项目的一些简介某个项目的一些简介某个项目的一 些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介"
					></SingleProject>

					{/* 6 */}
					<SingleProject
						to="/projects/5555"
						num="01"
						name="某个项目的名称"
						keywords="关键词关键词关键词"
						date="2021/10/23"
						desc="某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介"
					></SingleProject>

					{/* 7 */}
					<SingleProject
						to="/projects/6666"
						num="01"
						name="某个项目的名称"
						keywords="关键词关键词关键词"
						date="2021/10/23"
						desc="某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介"
					></SingleProject>

					{/* 8 */}
					<SingleProject
						to="/projects/6666"
						num="01"
						name="某个项目的名称"
						keywords="关键词关键词关键词"
						date="2021/10/23"
						desc="某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介"
					></SingleProject>

					{/* 9 */}
					<SingleProject
						to="/projects/2222"
						num="01"
						name="某个项目的名称"
						keywords="关键词关键词关键词"
						date="2021/10/23"
						desc="某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介某个项目的一些简介"
					></SingleProject>
				</div>

				<Link to="/projects">
					<div className="more_projects_container group ">
						<div className="more_icon_wrap">
							<img src={Morearrow} alt="" />
						</div>
						<div className="more_text_wrap">
							<header>更多项目</header>
						</div>
					</div>
				</Link>
			</div>

{/* 新闻轮播 */}
			<div className="news_carousel group">
				<div className="news_entry">
					<h2>设计新闻</h2>
					<h3>News Reports</h3>
					{/* <h1>{activeSlide}</h1> */}
				</div>

				<button onClick={handlePrevArrow} className="prev_btn">
					<img src={Prearrow} alt="" />
				</button>
				<button onClick={handleNextArrow} className="next_btn">
					<img src={Nextarrow} alt="" />
				</button>
				<Slider ref={sliderRef} className="news_grid" {...settings}>
					
					<SingleSlide
						// TODO: 后期修改新闻路径，时间， 名称
						to="/news/news2to1"
						src={Picn1}
						news_time="2021/10/23"
						news_title="某个新闻的名称111"
					></SingleSlide>

					<SingleSlide
						// TODO: 后期修改新闻路径，时间， 名称
						to="/news/news1to1"
						src={Picn2}
						news_time="2021/10/23"
						news_title="某个新闻的名称222"
					></SingleSlide>

					<SingleSlide
						// TODO: 后期修改新闻路径，时间， 名称
						to="/news/news1to2"
						src={Picn3}
						news_time="2021/10/23"
						news_title="某个新闻的名称333"
					></SingleSlide>

					<SingleSlide
						// TODO: 后期修改新闻路径，时间， 名称
						to="/news/news1to3"
						src={Picn4}
						news_time="2021/10/23"
						news_title="某个新闻的名称444"
					></SingleSlide>

					<SingleSlide
						// TODO: 后期修改新闻路径，时间， 名称
						to="/news/news1to4"
						src={Picn5}
						news_time="2021/10/23"
						news_title="某个新闻的名称555"
					></SingleSlide>

					<SingleSlide
						// TODO: 后期修改新闻路径，时间， 名称
						to="/news/news1to5"
						src={Picn6}
						news_time="2021/10/23"
						news_title="某个新闻的名称666"
					></SingleSlide>
				</Slider>
			</div>
		</section>
	);
};

export default Homepage;

// 单个项目cover
function SingleProject({ to, num, name, keywords, date, desc }) {
	return (
		<Link to={to}>
			<div className="bg_hover_effect ">
				<div className="bg_gradient group">
					<div className="grid-text-wrap ">
						<h5>{num}</h5>
						<h2>{name}</h2>
						<h4>{keywords}</h4>
						<p className="pt-6">{date}</p>
					</div>
					<div className="hover_appear_text">
						<h2>{name}</h2>
						<h4>{desc}</h4>
					</div>
				</div>
			</div>
		</Link>
	);
}

// 单个新闻cover
function SingleSlide({ to, src, news_time, news_title, ...props }) {
	return (
		<div  className="slide" {...props}>
			<div className="">
				<img src={src} alt="" className="" />
			</div>
			<div  className="news_text_wrap">
				
					<Link to={to} >
						<h6>{news_time}</h6>
						<h5>{news_title}</h5>
					</Link>
				
			</div>
		</div>
	);
}