import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Rarrow from "../../assets/images/right_arrow.svg";

import Pic from "../../assets/images/members/baixinhui2.png";

export default function Baixinhui() {
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
						<Link to="/members/baixinhui">Xinhui Bai</Link>
					</div>
				</div>

				<div className="banner_frame_style">
					<div className="banner_pic">
						<img src={Pic} alt="" className="" />
					</div>
					<div className="banner_text">
						<h1>
							白昕卉 <span className="w-px inline-block"></span>Xinhui Bai
						</h1>
						<h2>研究生</h2>
						<h2>数据化主动健康 | 交互设计</h2>

						<h2> bxh617_g@163.com</h2>
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
							大家好，我叫白昕卉。目前就读于北京理工大学艺术与设计学院，是一名工业设计专业的艺术设计研究生。我毕业于天津大学自动化专业。是因为在大学期间，我对设计“以设计创造更好的生活环境”的主题产生兴趣，在深入了解之后，选择三跨考取工业设计专业将其作为我未来奋斗的目标。非常荣幸能够加入任老师的课题组，希望未来三年能够将我本专业所学与设计领域相结合，深入探讨智能时代下健康的生活方式。
						</p>
					</div>
				</div>
				{/* 中间 右边部分：教育背景和论文发表 */}
				<div className="education_wrap">
					<div className="pt-12 lg:pt-0">
						<h3>教育背景：</h3>
						<div className="education_content_wrap">
							<h4>2022 – 2025</h4>
							<p className="col-span-2">北京理工大学 </p>
							<p>工业设计 硕士学位</p>

							<h4>2018 – 2022</h4>
							<p className="col-span-2">天津大学</p>
							<p> 自动化 学士学位</p>
						</div>
					</div>
					<div className="split_line"></div>

					<div className="space-y-2">
						<h3>获奖情况：</h3>
						<div className="grid grid-cols-1 gap-4">
							<p>
								大学生创新创业训练市级项目“基于工业互联网的数字孪生平台搭建”
								天津大学优秀大学生创新训练项目
							</p>

							<p>
								天津大学“未来三十年” 颠覆性创新创想大赛项目 将新型智能防护服”
								自动化学院赛道 三等奖
							</p>
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
