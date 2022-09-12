import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Rarrow from "../../assets/images/right_arrow.svg";

import Pic from "../../assets/images/members/sunxiaoqing2.png";

export default function Sunxiaoqing() {
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
						<Link to="/members/sunxiaoqing">Xiaoqing Sun</Link>
					</div>
				</div>

				<div className="banner_frame_style">
					<div className="banner_pic">
						<img src={Pic} alt="" className="" />
					</div>
					<div className="banner_text">
						<h1>
							孙小晴 <span className="w-px inline-block"></span>Xiaoqing Sun
						</h1>
						<h2>22级本科毕业生/研究生</h2>
						<h2>实体用户界面</h2>
						<h2>xiaoqingsun2000@gmail.com</h2>
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
							孙小晴，2022年毕业于北京理工大学工业设计专业，取得工学学士学位，同年免试推荐至北京理工大学工业设计及理论方向攻读硕士学位。目前参与可持续饮食、面向儿童的实体交互设计及创造力培养等项目的研究工作。
						</p>
					</div>
					<div className="space-y-2">
						<h3>获奖情况：</h3>
						<div className="grid grid-cols-2 gap-4">
							<p>北京市优秀毕业生</p>
                            <p></p>
							<p>北京理工大学优秀学生标兵</p>
                            <p></p>
							<p>第六届国际环保公益设计大赛铜奖</p>
						</div>
					</div>
				</div>
				{/* 中间 右边部分：教育背景和论文发表 */}
				<div className="education_wrap">
					<div className="pt-12 lg:pt-0">
						<h3>教育背景：</h3>
						<div className="education_content_wrap">
							<h4>2019.03-2022.06 </h4>
							<p className="col-span-2">北京理工大学 工业设计 </p>
							<p>学士学位</p>

							<h4>2018.09-2019.02</h4>
							<p className="col-span-2">北京理工大学 车辆工程</p>
							<p>本科</p>
						</div>
					</div>
					<div className="split_line"></div>
					<div className="pt-4">
						<h3>论文发表：</h3>
						<ul className="list-disc pl-4 space-y-2">
							<li>
								<p>
									Liu, X., Ren, X., and Sun, X.Hicclip: a smart sealing rack
									using interactive sounds to intervene snack addictions. In
									Extended Abstracts of the 2022 CHI Conference on Human Factors
									in Computing Systems, ACM, 2022.
								</p>
							</li>
						</ul>
					</div>
					<div className="split_line "></div>
				</div>
				{/* 下面部分 */}
				<div className="projects_wrap"></div>
			</div>
		</section>
	);
}
