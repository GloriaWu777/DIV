import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Rarrow from "../assets/images/right_arrow.svg";

import Cpic1 from "../assets/images/courses/1.png";
import Cpic2 from "../assets/images/courses/2.png";
import Cpic3 from "../assets/images/courses/3.png";
import Cpic4 from "../assets/images/courses/4.png";
import Cpic5 from "../assets/images/courses/5.png";

const Courses = () => {
	// TODO: 此处修改课程详情
	// 后期在app中为每个课程添加route
	const c1_header1 = "智能硬件";
	const c1_header2 = "年级：本科生";
	const c1_parag = "这个课很心累，请大家谨慎入坑。坑里一分钟，人间24小时。";

	const c2_header1 = "文化探针";
	const c2_header2 = "年级：本科生";
	const c2_parag =
		"如果你喜欢探索人性和道德，文化探针将成为你的最佳选择。在这里，你将觉得“哇，原来用户调研可以产生这么多洞察！”";

	const c3_header1 = "劝导技术";
	const c3_header2 = "年级：本科生、研究生";
	const c3_parag =
		"在这个自控力不足的年代，你或许需要利用机器来让自己变得更好，通过设计师们掉下来的头发，冰冷的机器也许可以令你快乐，同时变得健康，你想不想试试？";

	const c4_header1 = "智能材料";
	const c4_header2 = "年级：本科生";
	const c4_parag = "这是一门好课，甚至是一门必修课。感觉很日系。";

	const c5_header1 = "科技探针";
	const c5_header2 = "年级：本科生、研究生";
	const c5_parag =
		"了解何为探针，从技术的角度出发去思考设计，实践设计，获得全新的设计视角，用户调研阶段通过科技探针则可收获与众不同的用户洞察。";

	useEffect(() => {
		window.scrollTo(0, 0);
		return () => {
			window.scrollTo(0, 0);
		};
	}, []);

	return (
		<section className="bg-darkest text-white leading-relaxed pb-48">
			{/* 面包屑 */}
			<div className="bread_wrap">
				<Link to="/homepage" className="underline">
					DIV
				</Link>
				<img src={Rarrow} alt="" className="w-[9px]" />
				<Link to="/projects">课程</Link>
			</div>
			<div className="projects_frame_style grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
				{/* course 1 */}
				<Course
					to="/courses/course1"
					src={Cpic1}
					header1={c1_header1}
					header2={c1_header2}
					parag={c1_parag}
				></Course>

				{/* course 2 */}
				<Course
					to="/courses/course2"
					src={Cpic2}
					header1={c2_header1}
					header2={c2_header2}
					parag={c2_parag}
				></Course>
				{/* course 3 */}
				<Course
					to="/courses/course3"
					src={Cpic3}
					header1={c3_header1}
					header2={c3_header2}
					parag={c3_parag}
				></Course>
				{/* course 4 */}
				<Course
					to="/courses/course4"
					src={Cpic4}
					header1={c4_header1}
					header2={c4_header2}
					parag={c4_parag}
				></Course>
				{/* course 5 */}
				<Course
					to="/courses/course5"
					src={Cpic5}
					header1={c5_header1}
					header2={c5_header2}
					parag={c5_parag}
				></Course>
			</div>
		</section>
	);
};

export default Courses;

function Course({ to, src, header1, header2, parag, ...props }) {
	return (
		<Link
			to={to}
			{...props}
			className="transition duration-300 ease-in-out hover:scale-105"
		>
			<div className="">
				<img src={src} alt="" className="w-full pb-6 " />
			</div>
			<div>
				<h1>{header1}</h1>
				<h3>{header2}</h3>
				<p>{parag}</p>
			</div>
		</Link>
	);
}
