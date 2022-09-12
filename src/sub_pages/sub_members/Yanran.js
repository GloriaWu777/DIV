import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Rarrow from "../../assets/images/right_arrow.svg";

import Pic from "../../assets/images/members/yanran2.png";

export default function Yanran() {
	useEffect(() => {
		window.scrollTo(0, 0);
	},[]);
	return (
		<section className="member_section">
			{/* banner部分 */}
			<div className="bg-darkest relative text-white">
				<div className="h-[300px]">
					<div className="bread_wrap ">
						<Link to="/homepage" className="border-b leading-none">
							DIV
						</Link>
						<img src={Rarrow} alt="" className="w-[9px]" />
						<Link to="/members" className="border-b leading-none">
							团队
						</Link>
						<img src={Rarrow} alt="" className="w-[9px]" />
						<Link to="/members/yanran">Ran Yan</Link>
					</div>
				</div>

				<div className="banner_frame_style">
					<div className="banner_pic">
						<img src={Pic} alt="" className="" />
					</div>
					<div className="banner_text">
						<h1>
							闫冉 <span className="w-px inline-block"></span>Ran Yan
						</h1>
						<h2>研究生</h2>
						<h2>人机交互与用户体验 ｜ 智慧交通设计</h2>
						<h2>yan.id@qq.com</h2>
					</div>
				</div>
			</div>

			{/*  白底部分 */}
			<div className="description_frame_style">
				{/* 中间 左边部分 获奖情况 */}
				<div className="space-y-8">
					<div className="">
						<h3>个人简介：</h3>
						<p>
							闫冉，本科毕业于中国海洋大学工业设计专业。本科就读期间多次获得奖学金及专业竞赛奖项，带领团队完成省级大创项目及相关论文发表，擅长设计心理学研究与产品原型制作。
						</p>
					</div>

					<div className="space-y-2">
						<h3>论文发表：</h3>
						<ul className="list-disc pl-4 space-y-2">
							<li>
								<p>
									Guo X, Qiao J, Yan R, Wang Z, Chu J. The smaller the better? A
									study on acceptance of 3D display of exhibits of museum’s
									mobile media. HCI International, 2021.
								</p>
							</li>
						</ul>
					</div>
				</div>
				{/* 中间 右边部分：教育背景和论文发表 */}
				<div className="education_wrap">
					<div className="pt-12 lg:pt-0">
						<h3>教育背景：</h3>
						<div className="education_content_wrap">
							<h4>2022 – 2025</h4>
							<p className="col-span-2">北京理工大学 </p>
							<p>设计学工业设计及理论方向 硕士学位</p>

							<h4>2018 – 2022</h4>
							<p className="col-span-2">中国海洋大学</p>
							<p>工业设计 学士学位</p>
						</div>
					</div>
					<div className="split_line"></div>

					<div className="space-y-2">
						<h3>获奖情况：</h3>
						<div className="grid grid-cols-1 gap-4">
							<p>2020年6月获中国海洋大学 优秀学士学位论文</p>

							<p>2021年11月获“2021年山东省大学生工业设计大赛” 二等奖</p>
							<p>2021年9月获“2021市长杯青岛工业设计大赛”设计师“未来之星”</p>
							<p>2020年12月获“2020年（第五届）全国大学生工业设计大赛” 入围奖</p>
							<p>2020年11月获“2020年山东省工业设计大赛” 三等奖</p>
							<p>2019年8月获“2020年全国大学生工业设计大赛”山东赛区 一等奖</p>
						</div>
					</div>

					<div className="split_line"></div>
				</div>
				{/* project部分 */}
				{/*  */}
			</div>
		</section>
	);
}
