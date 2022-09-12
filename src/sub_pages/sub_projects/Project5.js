import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Rarrow from "../../assets/images/right_arrow.svg";

import Pic11 from "../../assets/images/project_bodymovement/pic1-1.png";
import Pic12 from "../../assets/images/project_bodymovement/pic1-2.png";
import Pic13 from "../../assets/images/project_bodymovement/pic1-3.png";
import Pic14 from "../../assets/images/project_bodymovement/pic1-4.png";
import Pic15 from "../../assets/images/project_bodymovement/pic1-5.png";

export default function Project5() {
	useEffect(()=>{
		window.scrollTo(0,0)
	})
	return (
		<section>
			<div className="h-[300px] bg-no-repeat bg-cover w-[100%] bg-top bg-project5_banner">
				<div className="bg-darkest/30 h-full">
					<div className=" bread_wrap ">
						<Link to="/homepage" className="border-b leading-none">
							HXD
						</Link>
						<img src={Rarrow} alt="" className="w-[9px]" />
						<Link to="/projects" className="border-b leading-none">
							项目
						</Link>
						<img src={Rarrow} alt="" className="w-[9px]" />
						<Link to="/projects/5555">身体活动的游戏化体验研究</Link>
					</div>
				</div>
			</div>

			{/* 项目总介绍 */}
			<Description
				p_name="身体活动的游戏化体验研究"
				p_duration="2019-2022"
				p_abstract="针对目前儿童运动量不足的问题，从学龄期儿童的游戏行为出发，尝试将运动健身活动转化成儿童可以进行设计和创造的策略型身体游戏。初步测试与访谈发现，儿童能够使用这些工具丰富自己的游戏体验，提升对运动的参与热情"
				grants="某资助项目"
			>
				<Conference
					conference_name="某个会议名称"
					concise_info="Xiaoyi Wu, Xinyueliu, Xipei Ren. 某个会议, 2021, 迪拜.好兄弟出版社,
					2021(第五版)."
				></Conference>

				<Conference
					conference_name="某个会议名称"
					concise_info="Xiaoyi Wu, Xinyueliu, Xipei Ren. 某个会议, 2021, 迪拜.好兄弟出版社,
					2021(第五版)."
				></Conference>
			</Description>

			{/* 项目总container */}
			<div className="projects_frame_style space-y-24 flex flex-col">
				{/* 第一个项目 */}
				<ProjectExample
					project_number="- project 1 -"
					project_title="运动激励"
					p={Pic15}
				>
					{/* children */}
					<p>
						近年来，儿童参与户外运动的情况不容乐观。与能够提供大量感官和认知上刺激的电子游戏相比，传统的运动类玩具缺少足够的吸引力。
						针对这一问题，有研究者提出将电子游戏元素与健身活动相结合，以丰富运动体验；也有研究者提出通过编程的方式支持儿童设计自己的运动游戏，
						<span className="underline italic">
							Unruly Splats、ScratchNodes
						</span>{" "}
						和 <span className="underline italic">CodeAttach</span>{" "}
						都是这一应用的典型案例，但其更侧重于计算思维的培养，编程难度较大且运动形式相对单一。
						通过访谈发现，处于学龄期的儿童对规则型游戏有着十分浓厚的兴趣，设计游戏能够让他们将自己的想象转化为现实，是一种极具吸引力的活动方式，而家长也普遍认为这有利于提升儿童的创造力。参与访谈的儿童分享了自己设计的游戏机制，其规则可以抽象为以下的形式：
						{/* 插入图片  mx让图片横向扩充*/}
						<div className="-mx-12 lg:-mx-24 grid grid-cols-2 py-8 gap-8">
							<div className="col-span-2">
								<img src={Pic11} alt="" className="w-full" />
							</div>
							<div className="col-span-1">
								<img src={Pic12} alt="" className="w-full" />
							</div>
							<div className="col-span-1">
								<img src={Pic13} alt="" className="w-full" />
							</div>
						</div>
						产品硬件部分包含小球、按钮以及带有电子标签的卡片。使用小球和按钮识别卡片可以获取丰富的游戏道具（例如拍下可以发出爆炸声音并减分的“捣蛋”炸弹），除此之外，使用者也可以使用线上程序扫描卡片来获取道具的运行逻辑，对参数进行修改、组合或创建新的规则。
						<br></br>
						<br></br>
						通过初步的访谈和测试发现，使用者更倾向于将小球用作团队道具，对其执行摇晃、抛投和传递等动作，这能够促使参与者发生更多的互动。对于按钮模块，使用者更愿意将其作为可穿戴装备，以此代表自己的队伍、属性和技能等。被试者能够通过这种方式为一些经典的游戏增加道具（如“捉迷藏”和“抓人”游戏等）或是设计出全新的游戏，以此来丰富自己的运动体验。
						<div className="-mx-12 lg:-mx-24 grid grid-cols-2 pt-8 gap-8">
							<div className="col-span-2">
								<img src={Pic14} alt="" className="w-full" />
							</div>
							<div className="col-span-2">
								<img src={Pic15} alt="" className="w-full" />
							</div>
						</div>
					</p>
				</ProjectExample>
				{/* 全部项目结束后的分割线 */}
				<div className="split_line bg-split h-px w-[70%] self-center  text-center"></div>
			</div>

      <SupplementContent
      participants="xxx"
      acknowledgement="这是关于项目的致谢：MAIN IDEA MAIN IDEA MAIN IDEA MAIN IDEAMAIN IDEA MAIN IDEAMAIN IDEA MAIN IDEAMAIN IDEA MAIN IDEAMAIN IDEA MAIN IDEAMAIN IDEA MAIN IDEAMAIN IDEA MAIN IDEAMAIN IDEA MAIN IDEAMAIN
      IDEA MAIN IDEAMAIN IDEA MAIN IDEAMAIN IDEA MAIN IDEAMAIN IDEA MAIN
      IDEAMAIN IDEA MAIN IDEA。"
      >
        <Publication
        href=""
        publication="this is a publication from xxxxxxxxxx xxx xxxxxxxx"
        ></Publication>
      </SupplementContent>
		</section>
	);
}

// 定义部分
// 白底上方总描述部分，会议自自定义部分
function Description({
	p_name,
	p_duration,
	p_abstract,
	href,
	grants,
	children,
	...props
}) {
	return (
		<div className="text-black content_frame_style flex flex-col space-y-14 md:flex-row md:space-x-20 md:space-y-0 lg:space-x-48 px-12 md:px-24 py-24">
			{/* 左侧 */}
			<div className="flex-1 space-y-2">
				<h1 className="text-xl font-medium">{p_name}</h1>
				<p className="text-lg font-light">{p_duration}</p>
				{/* TODO: 项目概述索要修改 */}
				<p className="text-tiny font-normal pt-6 pb-3 ">{p_abstract}</p>

				<button className="border-darkest border px-8 py-4 text-base font-medium  hover:cursor-download hover:bg-darkest group">
					<a
						href={href}
						download
						className="group-hover:cursor-download group-hover:bg-darkest group-hover:text-white"
					>
						Project Package
					</a>
				</button>
			</div>
			{/* 右侧 */}
			{/* TODO: 会议名称 论文索引修改*/}
			<div className="flex-1 space-y-8">
				{/* 会议部分简介 children */}
				{children}
				<div className="w-full h-px bg-darkest"></div>
				{/* TODO:*/}
				<div className="text-base font-medium">
					Grants <span> {grants}</span>
				</div>
			</div>
		</div>
	);
}

// 页面右上角：项目相关会议，简要信息的展示
function Conference({ conference_name, concise_info }) {
	return (
		<div className="single_conference_ref space-y-2">
			<h1 className="text-base font-medium">{conference_name}</h1>
			<p className="text-tiny font-normal">{concise_info}</p>
		</div>
	);
}

// 页面中部项目具体内容（多张照片插入在文本中间的情况，直接将文本模块设为children，在html标签中灵活插入需要的图片）
function ProjectExample({ project_number, project_title, children }) {
	return (
		// example 1
		<div className="space-y-12">
			{/* 正文 */}
			<div className="px-12 lg:px-24 space-y-4 leading-normal">
				<p className="text-center">{project_number}</p>
				<h1 className="text-center leading-loose">
					{/*  还没有发表论文，添加”暂无fa文“icon */}
					<a className="transition duration-300 ease-out hover:cursor-nolink hover:border-b-[2px] hover:border-bg-darkest">
						{project_title}
					</a>
				</h1>

				{children}
			</div>
		</div>
	);
}


// 项目下方补充内容函数
function SupplementContent({
	participants,
	acknowledgement,
	children,
	...props
}) {
	return (
		<div
			className="projects_frame_style pt-24 grid grid-cols-2 gap-12 pb-60"
			{...props}
		>
			{/* 主要研究人员 */}
			<div className="col-span-2 order-1 lg:col-span-1">
				<h1 className="">主要研究成员：</h1>
				{/* TODO: 修改主要成员信息*/}
				<p className="">{participants}</p>
			</div>
			{/* 鸣谢 */}
			<div className="order-3 col-span-2 lg:col-span-1 lg:order-2 ">
				<h1>Acknowledgement:</h1>
				<p>{acknowledgement}</p>
			</div>
			{/* 已发表论文 */}
			<div className="order-2 lg:order-3 col-span-2 leading-loose space-y-4">
				<h1 className="">已发表论文：</h1>
				<ul className="list-disc pl-4 text-tiny font-light space-y-4">
					{children}
				</ul>
			</div>
		</div>
	);
}

function Publication({ href, publication, ...props }) {
	return (
		<li className="leading-relaxed" {...props}>
			<a
				href={href}
				target="_blank"
        rel= "noreferrer"
				className="hover:underline hover:cursor-pointer"
			>
				{publication}
			</a>
		</li>
	);
}