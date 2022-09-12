import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Rarrow from "../assets/images/right_arrow.svg";
import "../css/members.css";

const Members = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
	return (
		<section className="">
			<div className="h-[300px] bg-no-repeat bg-cover w-[100%] bg-top bg-darkest">
				<div className=" bread_wrap content_frame_style ">
					<Link to="/homepage" className="border-b leading-none">
						DIV
					</Link>
					<img src={Rarrow} alt="" className="w-[9px]" />
					<Link to="/members" className="leading-none">
						成员
					</Link>
				</div>
			</div>
			<div className="members_frame_style">
				{/* 导师 行 */}
				<div className="">
					<div className="">
						<div className="">
							<h1>责任研究员</h1>
							<h2>Principle Investigator</h2>
						</div>
						<div className="each_members_row">
							<Member
								to="/members/renxipei"
								h3="任熹培"
								p="副教授、博士生导师  ｜智能交互设计 | 数字健康产品 | 医疗服务体验"
								bg="bg-renxipei"
							></Member>
						</div>
					</div>
				</div>
				{/* 访问研究员 行 */}
				<div className="">
					<div className="">
						<div className="">
							<h1>访问研究员</h1>
							<h2>Visiting Researcher</h2>
						</div>

						<div className="each_members_row">
							<Member
								to="/members/yubin"
								h3="于滨"
								p="奈尔洛德商业大学，助理教授"
								bg="bg-yubin"
							></Member>
							<Member
								to="/members/lizhuying"
								h3="李竹颖"
								p="东南大学计算机学院，副教授"
								bg="bg-lizhuyin"
							></Member>
							<Member
								to="/members/pansibo"
								h3="潘思博"
								p="中国美术学院讲师，埃因霍温理工大学博士候选人"
								bg="bg-pansibo"
							></Member>
						</div>
					</div>
				</div>

				{/* 研究组成员 */}
				<div className="">
					<div className="">
						<div className="">
							<h1>研究组成员</h1>
							<h2>Group Member</h2>
						</div>
					</div>
					<div className="each_members_row">
						{/* TODO: pick from here */}
						<Member
							to="/members/handongjun"
							h3="韩东君"
							p="22级博士候选人"
							bg="bg-handongjun"
						></Member>

						<Member
							to="/members/wuxiaoyi"
							h3="吴晓宜"
							p="21级研究生 | 智慧社区防疫 科技探针 人机交互 软硬件设计"
							bg="bg-wuxiaoyi"
						></Member>

						<Member
							to="/members/liuxinyue"
							h3="刘鑫月"
							p="21级研究生 | 健康饮食"
							bg="bg-liuxinyue"
						></Member>

						<Member
							to="/members/zourenyao"
							h3="邹仁耀"
							p="21级研究生 | 智能产品设计 人机交互 虚拟现实 远程医疗"
							bg="bg-zourenyao"
						></Member>

						<Member
							to="/members/litianyi"
							h3="李天翊"
							p="21级研究生 | 游戏设计 功能游戏 严肃游戏"
							bg="bg-litianyi"
						></Member>

						<Member
							to="/members/zhangxiaoyu"
							h3="张晓玉"
							p="21级研究生 | 交互设计 可视化 智慧健康"
							bg="bg-zhangxiaoyu"
						></Member>

						<Member
							to="/members/zhenyaqi"
							h3="郑雅琪"
							p="21级研究生 | 智能交互设计 交通工具设计"
							bg="bg-zhenyaqi"
						></Member>

						<Member
							to="/members/lianchengbo"
							h3="连成波"
							p="21级研究生 | 人机交互 劝导技术 劝导设计 协同式设计"
							bg="bg-lianchengbo"
						></Member>

						<Member
							to="/members/hanwutong"
							h3="韩吴桐"
							p="21级研究生 | 虚拟现实 触觉反馈 多通道反馈 人机交互 "
							bg="bg-hanwutong"
						></Member>

						<Member
							to="/members/heyuqi"
							h3="贺宇祺"
							p="21级研究生 | 智慧健康 用户研究 乳腺健康"
							bg="bg-heyuqi"
						></Member>

						<Member
							to="/members/caiwei"
							h3="蔡唯"
							p="21级研究生 | 健康医疗 交互设计"
							bg="bg-caiwei"
						></Member>
					</div>
{/* 研一 */}
					<div className="each_members_row mt-24">
					<Member
							to="/members/sunxiaoqing"
							h3="孙小晴"
							p="22本科毕业，现就读于北京理工大学"
							bg="bg-sunxiaoqing"
						></Member>
						<Member
							to="/members/liuzhao"
							h3="刘朝"
							p="22本科毕业，现就读于北京理工大学"
							bg="bg-liuzhao"
						></Member>
						<Member
							to="/members/cuiwenting"
							h3="崔文婷"
							p="22本科毕业，现就读于北京理工大学"
							bg="bg-cuiwenting"
						></Member>
						
						<Member
							to="/members/zhuyujia"
							h3="朱雨佳"
							p="22本科毕业，现就读于北京理工大学"
							bg="bg-zhuyujia"
						></Member>
						<Member
							to="/members/limuyang"
							h3="李沐阳"
							p="22本科毕业，现就读于北京理工大学"
							bg="bg-limuyang"
						></Member>
						<Member
							to="/members/baixinhui"
							h3="白昕卉"
							p="22本科毕业，现就读于北京理工大学"
							bg="bg-baixinhui"
						></Member>
						<Member
							to="/members/zhaoronghui"
							h3="赵容惠"
							p="22本科毕业，现就读于北京理工大学"
							bg="bg-zhaoronghui"
						></Member>
						<Member
							to="/members/qiuchunman"
							h3="邱春熳"
							p="22本科毕业，现就读于北京理工大学"
							bg="bg-qiuchunman"
						></Member>
						<Member
							to="/members/yanran"
							h3="闫冉"
							p="22本科毕业，现就读于北京理工大学"
							bg="bg-yanran"
						></Member>
						<Member
							to="/members/mayurui"
							h3="马玉蕊"
							p="22本科毕业，现就读于北京理工大学"
							bg="bg-mayurui"
						></Member>

					</div>
				</div>

				{/* 毕业生 */}
				<div className="">
					<div className="">
						<h1>毕业生</h1>
						<h2>Alumni</h2>
					</div>
					<div className="each_members_row">
						<Member
							to="/members/guozhifan"
							h3="郭芝帆"
							p="22本科毕业，现就读于乔治亚理工大学"
							bg="bg-guozhifan"
						></Member>
						
					</div>
				</div>
			</div>
		</section>
	);
};

export default Members;

function Member({ to, h3, p, bg, ...props }) {
	let bg_classname = bg + " " + "avatar bg-top bg-no-repeat bg-cover group";

	return (
		<Link to={to} className="each_member group" {...props}>
			<div className={bg_classname}>
                <div className="bg-darkest/30 w-0 h-full group-transition duration-200 ease-out group-hover:w-full"> </div>
            </div>
			<div className=" ">
				<h3 className="before:duration-300 group-transition duration-300 ease-in-out relative before:absolute before:-left-4 before:top-2 before:w-1 before:h-0 before:bg-white transform group-hover:translate-x-4 group-hover:before:h-6">{h3}</h3>
				<p>{p}</p>
			</div>  
		</Link>
	);
}
