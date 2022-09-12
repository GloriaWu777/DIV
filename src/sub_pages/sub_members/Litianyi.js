import React from "react";
import {Children, useEffect} from 'react'
import { Link } from "react-router-dom";
import Rarrow from '../../assets/images/right_arrow.svg'

import Pic from '../../assets/images/members/litianyi2.png'
import Picp1 from '../../assets/images/project_healthgaming/subpic1-2.png'

export default function Litianyi() {
	useEffect(() => {
		window.scrollTo(0, 0);
	},[]);
	return(
        <section className="member_section">
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
						<Link to="/members/litianyi">Tianyi Li</Link>
					</div>
				</div>

				<div className="banner_frame_style">
					<div className="banner_pic">
						<img src={Pic} alt="" className="" />
					</div>
					<div className="banner_text">
						<h1>
							李天翊 <span className="w-px inline-block"></span>Tianyi Li
						</h1>
						<h2>研究生</h2>
						<h2>游戏设计 | 功能游戏 </h2>
						<h2>964247697@qq.com</h2>
					</div>
				</div>
			</div>

            {/*  白底部分 */}
			<div className="description_frame_style">
				{/* 中间 左边部分 获奖情况 */}
				<div className="space-y-8">
					<div className="">
						<h3>个人简介：</h3>
						<p className="w-[90%]">
                        北京理工大学设计与艺术学院21级工业设计系研究生，
                        从事功能游戏及游戏设计相关研究学习
						</p>
					</div>
					
				</div>
				{/* 中间 右边部分：教育背景和论文发表 */}
				<div className="education_wrap">
					<div className="pt-12 lg:pt-0">
						<h3>教育背景：</h3>
						<div className="education_content_wrap">
							<h4>2021 – 2024</h4>
							<p className="col-span-2">北京理工大学 设计与艺术学院</p>
							<p>工业设计 硕士</p>

							<h4>2017 – 2021 </h4>
							<p className="col-span-2">中国矿业大学 </p>
							<p>学士</p>
						</div>
					</div>
					<div className="split_line"></div>
					<div className="space-y-2">
						<h3>获奖情况：</h3>
						<div className="grid grid-cols-1 gap-4">
							<p> 莉莉丝游戏设计S3联赛 铜奖</p>

							<p>第十二届“挑战杯”中国大学生创业计划竞赛 铜奖</p>

							<p> 2020年第五届工业设计大赛 三等奖</p>

							<p> 第一届凌诚·至舍杯家居设计年度奖 铜奖</p>

							<p>太湖稻城杯第三届大学生设计大赛 优秀奖</p>
						</div>
					</div>
					<div className="split_line "></div>
				</div>
				{/* 下面部分 */}
				<div className="projects_wrap lg:pt-24 pt-8">
                    <h3>参与项目：</h3>
                    <div className="projects_content_wrap">
                        <div className="single_project">
                            <header>抗议战线</header>
                            <h5 className="underline">
								<a href="/projects/6666">
									Go To The Detailed Page
								</a>
							</h5>
                            <p>
                            《抗疫战线》是一款致力于分享新冠肺炎相关知识的科普游戏，项目特色在于将游戏玩法与科普内容相融合，兼具游戏性与教育性。探索游戏在提高玩家记忆效率和改变个人行为方面的巨大潜力。
                            <br></br>
                            新冠疫情防控仍然是不可忽视的问题。为积极响应国家疫情防控相关政策，充分发挥游戏在提高玩家记忆效率和改变个人行为方面的巨大潜力，本项目基于对现有防疫科普类产品与用户痛点的分析，提出了一种将科普游戏的教育性与游戏性融合的新模式。旨在满足大众休闲娱乐需求的同时，向大众科普防疫知识，弘扬防疫抗疫精神，探讨科普游戏在社会与市场层面的潜在价值，为疫情防控贡献一份力量。</p>
                        </div>
                        <div className="">
							<img src={Picp1} alt="" />
						</div>
                    </div>
                </div>
			</div>
        </section>
    )
}
