import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Rarrow from "../../assets/images/right_arrow.svg";

import Pic from "../../assets/images/members/liuxinyue2.png";
// TODO: 导入项目图片
import Picp1 from "../../assets/images/project_dietpersuasion/subpic1-2.png";
import Picp2 from "../../assets/images/project_dietpersuasion/mainpic1-1.jpg";
import Picp3 from "../../assets/images/project_dietpersuasion/subpic2-2.png";

export default function Liuxinyue() {
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
						<Link to="/members/liuxinyue">Xinyue Liu</Link>
					</div>
				</div>

				<div className="banner_frame_style">
					<div className="banner_pic">
						<img src={Pic} alt="" className="" />
					</div>
					<div className="banner_text">
						<h1>
							刘鑫月 <span className="w-px inline-block"></span> Liu Xinyue
						</h1>
						<h2>研一 Graduate Student</h2>
						<h2>Healthy & Sustainable Eating | Persuasive Design</h2>
						<h2>liuxinyue128@gmail.com</h2>
					</div>
				</div>
			</div>

			{/*  白底部分 */}
			<div className="description_frame_style">
				{/* 中间 左边部分：个人简历 */}
				<div className="space-y-2">
					<h3>个人简历：</h3>
					<h4>
						<a
							href="https://ivysuperman.github.io/ivysuperman/"
							className="underline"
						>
							https://ivysuperman.github.io/ivysuperman/
						</a>
					</h4>
					<p>如果愿意可以给自己写一段话，例如：施主，你也喜欢看动漫吗。</p>
				</div>
				{/* 中间 右边部分：教育背景和论文发表 */}
				<div className="education_wrap">
					<div className="pt-12 lg:pt-0">
						<h3>教育背景：</h3>
						<div className="education_content_wrap">
							<h4>2021-2024</h4>
							<p className="col-span-2">北京理工大学 设计与艺术学院</p>
							<p>研究生</p>

							<h4>2017-2021</h4>
							<p className="col-span-2">北京科技大学 工业设计系</p>
							<p>工学学士</p>

							<h4>2019</h4>
							<p className="col-span-2">湖南大学 设计艺术学院</p>
							<p>交流生</p>
						</div>
					</div>
					<div className="split_line"></div>
					<div className="pt-4">
						<h3>论文发表：</h3>
						<ul className="list-disc pl-4 space-y-2">
							<li>
								<p>
									Xinyue Liu, Xipei Ren, Xiaoqing Sun. Hicclip: A Smart Sealing
									Rack Using Interactive Sounds to Intervene Snack Addictions.
									In CHI 2022 Interactivity. (CCF-A, EI)
								</p>
							</li>
							<li>
								<p>
									Xinyue Liu, Xipei Ren, Sibo Pan. Persuasive Design for Healthy
									Eating: A Scoping Review. In HCII 2022. (EI)
								</p>
							</li>
						</ul>
					</div>
					<div className="split_line "></div>
				</div>
				{/* 下面部分 */}
				<div className="projects_wrap">
					<h3>参与项目：</h3>
					{/* 1 */}
					<div className="projects_content_wrap">
						<div className="single_project">
							<header className="">
								Persuasive Design for Healthy Eating: A Scoping Review
							</header>
							<h5 className="underline">
								<a href="https://link.springer.com/chapter/10.1007/978-3-031-05431-0_20">
									Go To The Publication Site
								</a>
							</h5>
							<p>
								本文献综述旨在总结和分析针对健康饮食行为的劝导设计的最新研究进展，以探索未来的设计机会。本文首先通过检索，在计算机协会(ACM)数字图书馆、IEEEXplore和SpringerLink三个数据库中，收集了2011年至2021年的1231篇论文，后经过人工条件筛选将28篇论文纳入分析对象。本文从研究规范、方法和设计原理三个维度进行了分析，数据结果显示，现有文献主要利用劝导技术来进行饮食行为监测、记录和健康饮食建议，覆盖的设计类型包括移动应用、劝导信息、智能产品和系统、可穿戴设备、虚拟助手和公共装置。本文得出的结论是：目前的研究文献大多将劝导式设计作为一种促进健康饮食的通用方法，缺乏针对特定用户群体，如办公室职员和青少年的个性化解决方案的研究调查。希望未来的研究者们可以通过用户体验的研究方法，检验劝导式设计促进不同背景下各群体的健康饮食行为的有效性。
							</p>
						</div>
						{/*  TODO: 改图片*/}
						<div className="">
							<img src={Picp1} alt="" />
						</div>
						{/* 2 */}
						<div className="single_project">
							<header className="">
								Hicclip: A Smart Sealing Rack Using Interactive Sounds to
								Intervene Snack Addictions{" "}
							</header>
							<h5 className="underline">
								<a href="https://dl.acm.org/doi/10.1145/3491101.3519886">
									Go To The Publication Site
								</a>
							</h5>
							<p>
								适当的零食摄入情况是组成健康饮食习惯的一部分，而许多现代人正在面临过量摄取高热量零食的问题。本文描述了一项智能零食密封夹装置设计，该交互装置可以在用户吃零食的过程中与之互动，输出饮食行为相关声音的反馈，目的在于探索该声音交互是否能对用户的零食摄取形成有效的干预，从而防止用户过量地摄入高热量零食。为了现阶段设计原型的进一步迭代，本文提出了在CHI2022中的直播会议和互动视频的在线演示方案，希望得到体验者反馈。
							</p>
						</div>
						<div className="">
							<img src={Picp2} alt="" />
						</div>
						{/* 3 */}
						<div className="single_project">
							<header>Sustainable Eating and Coral Coloring</header>
							<h5 className="underline">
								<a href="/projects/2222/">Go To The Publication Site</a>
							</h5>
							<p>
								将游戏化运用到学生食堂的食物选择过程中。个人与集体的食物消费情况将被可视化为一个暗喻的虚拟形象，例如白化珊瑚的点亮过程。健康和可持续的饮食，将转化为良好的数字形象。
								面向学生集体场景，以公共屏幕中的互动海报为载体，通过设定集体目标、共同完成任务的方式，推动可持续健康饮食在学生群体间的推广，和饮食行为的相互监督。
							</p>
						</div>
						{/* TODO: 改图片*/}
						<div className="">
							<img src={Picp3} alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
