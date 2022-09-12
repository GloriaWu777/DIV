import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// import P1 from "../assets/images/1111.png";
// import P2 from "../assets/images/2222.png";
// import P3 from "../assets/images/3333.png";
// import P4 from "../assets/images/4444.png";
// import P5 from "../assets/images/5555.png";
// import P6 from "../assets/images/6666.png";
import Rarrow from "../assets/images/right_arrow.svg";

const Projects = () => {
	const parag1 =
		"wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作";
	const parag2 =
		"wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。";
	const parag3 =
		"该项目设计了一组基于日常聊天软件的嵌入式个人健康管理远程医疗助手，系统由对话式小助手和问卷式小助手两部分组成，小助手可以为用户提供集健康状况监测、当地疫情动态信息反馈、健康问题管理为一体的健康管理服务";
	const parag4 =
		" 由于2019年末新冠疫情爆发并相继席卷全球，隔离、核酸检测等措施逐渐成为新常态化防疫不可或缺的一部分。该项目集合分别从不同维度，对常态化防疫给出了相应设计层面的解决方案，旨在提高防疫效率和改善防疫措施，提高个人及社会健康";
	const parag5 =
		"针对目前儿童运动量不足的问题，从学龄期儿童的游戏行为出发，尝试将运动健身活动转化成儿童可以进行设计和创造的策略型身体游戏。初步测试与访谈发现，儿童能够使用这些工具丰富自己的游戏体验，提升对运动的参与热情";
	const parag6 =
		"《抗疫战线》是一款致力于分享新冠肺炎相关知识的科普游戏，项目特色在于将游戏玩法与科普内容相融合，兼具游戏性与教育性。探索游戏在提高玩家记忆效率和改变个人行为方面的巨大潜力";

	const header1 = "智能健康办公系统设计研究";
	const header2 = "健康饮食行为劝导设计研究";
	const header3 = "数字医疗中的用户体验研究";
	const header4 = "新常态化健康监测技术研究";
	const header5 = "身体活动的游戏化体验研究";
	const header6 = "健康知识科普游戏设计研究";

	useEffect(() => {
		window.scrollTo(0, 0);
		return () => {
			window.scrollTo(0, 0);
		};
	}, []);

	return (
		<section>
			<div className="bg-darkest text-white pb-32">
				{/* 面包屑 */}
				<div className="bread_wrap">
					<Link to="/homepage" className="underline">
						DIV
					</Link>
					<img src={Rarrow} alt="" className="w-[9px]" />
					<Link to="/projects">项目</Link>
				</div>
				{/* 项目 */}
				<div className="grid grid-cols-2 gap-x-4 gap-y-24">
					<Project
						to="/projects/1111"
						src="bg-project1_banner"
						header={header1}
						parag={parag1}
						className="projects_frame_style "
					></Project>
					{/* 偶数项上左右padding归零 */}
					<Project
						to="/projects/2222"
						src="bg-project2_banner"
						header={header2}
						parag={parag2}
						className="projects_frame_style md:pl-0"
					></Project>

					<Project
						to="/projects/3333"
						src="bg-project3_banner"
						header={header3}
						parag={parag3}
						className="projects_frame_style"
					></Project>
					{/* 偶数项上左右padding归零 */}
					<Project
						to="/projects/4444"
						src="bg-project4_banner"
						header={header4}
						parag={parag4}
						className="projects_frame_style md:pl-0"
					></Project>
					<Project
						to="/projects/5555"
						src="bg-project5_banner"
						header={header5}
						parag={parag5}
						className="projects_frame_style"
					></Project>
					{/* 偶数项上左右padding归零 */}
					<Project
						to="/projects/6666"
						src="bg-project6_banner"
						header={header6}
						parag={parag6}
						className="projects_frame_style md:pl-0 "
					></Project>
				</div>
			</div>
		</section>
	);
};

export default Projects;

function Project({ to, src, header, parag, className, ...props }) {

	// 图像部分的className
	let ic = src + " " + "bg-cover w-full h-[calc(100vw*9/16)] md:h-[calc((100vw-1rem)*9/32)] "
	// 文字部分的className
	let ic2 = className 

	return (
		<Link to={to} {...props} className="group col-span-2 md:col-span-1">
			<div className={ic}>
				{/* TODO: 添加了鼠标悬停cover滑出效果和标题右移效果，后面讨论是否需要修改*/}
				<div className="bg-darkest/30 w-0 h-full group-transition duration-200 ease-out group-hover:w-full"></div>
			</div>
			<div className={ic2}>
				<h2 className="leading-loose relative before:-left-4 before:absolute before:top-9  before:content-[''] before:w-1 before:h-0  before:bg-white transition before:duration-400 ease-in-out group-hover:before:h-[50%] transform group-hover:translate-x-4">{header}</h2>
				<p>{parag}</p>
			</div>
		</Link>
	);
}
