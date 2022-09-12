import React from "react";

import Navbar from "./components/Navbar.js";
import Homepage from "./pages/Homepage.js";
import News from "./pages/News.js";
import Projects from "./pages/Projects.js";
import Publications from "./pages/Publications.js";
import Courses from "./pages/Courses.js";
import Members from "./pages/Members.js";
import Footer from "./components/Footer.js";

import NewsMinus0y from "./components/NewsMinus0y.js";

// 导入今年的新闻组件
import News1to1 from "./sub_pages/sub_news/News1to1.js";
import News1to2 from "./sub_pages/sub_news/News1to2.js";
import News1to3 from "./sub_pages/sub_news/News1to3.js";
import News1to4 from "./sub_pages/sub_news/News1to4.js";
import News1to5 from "./sub_pages/sub_news/News1to5.js";
// 导入去年的新闻组件
import News2to1 from "./sub_pages/sub_news/News2to1.js";
import News2to2 from "./sub_pages/sub_news/News2to2.js";
import News2to3 from "./sub_pages/sub_news/News2to3.js";
import News2to4 from "./sub_pages/sub_news/News2to4.js";
import News2to5 from "./sub_pages/sub_news/News2to5.js";

//导入项目组件
import Project1 from "./sub_pages/sub_projects/Project1.js";
import Project2 from "./sub_pages/sub_projects/Project2.js";
import Project3 from "./sub_pages/sub_projects/Project3.js";
import Project4 from "./sub_pages/sub_projects/Project4.js";
import Project5 from "./sub_pages/sub_projects/Project5.js";
import Project6 from "./sub_pages/sub_projects/Project6.js";

// 导入成员组件
import Renxipei from "./sub_pages/sub_members/Renxipei.js";
import Yubin from "./sub_pages/sub_members/Yubin.js";
import Lizhuying from "./sub_pages/sub_members/Lizhuying.js";
import Pansibo from "./sub_pages/sub_members/Pansibo.js";
import Handongjun from "./sub_pages/sub_members/Handongjun.js";
import Wuxiaoyi from "./sub_pages/sub_members/Wuxiaoyi.js";
import Liuxinyue from "./sub_pages/sub_members/Liuxinyue.js";
import Zourenyao from "./sub_pages/sub_members/Zourenyao.js";
import Litianyi from "./sub_pages/sub_members/Litianyi.js";
import Zhangxiaoyu from "./sub_pages/sub_members/Zhangxiaoyu.js";
import Zhenyaqi from "./sub_pages/sub_members/Zhenyaqi.js";
import Lianchengbo from "./sub_pages/sub_members/Lianchengbo.js";
import Hanwutong from "./sub_pages/sub_members/Hanwutong.js";
import Heyuqi from "./sub_pages/sub_members/Heyuqi.js";
import Caiwei from "./sub_pages/sub_members/Caiwei.js";
import Guozhifan from "./sub_pages/sub_members/Guozhifan.js";
import Sunxiaoqing from "./sub_pages/sub_members/Sunxiaoqing.js";
import Liuzhao from "./sub_pages/sub_members/Liuzhao.js";
import Cuiwenting from "./sub_pages/sub_members/Cuiwenting.js";
import Zhuyujia from "./sub_pages/sub_members/Zhuyujia.js";
import Limuyang from "./sub_pages/sub_members/Limuyang.js";
import Baixinhui from "./sub_pages/sub_members/Baixinhui.js";
import Zhaoronghui from "./sub_pages/sub_members/Zhaoronghui.js";
import Qiuchunman from "./sub_pages/sub_members/Qiuchunman.js";
import Yanran from "./sub_pages/sub_members/Yanran.js";
import Mayurui from "./sub_pages/sub_members/Mayurui.js";

import { Routes, Route } from "react-router-dom";
import NewsMinus1y from "./components/NewsMinus1y.js";

function App() {
	return (
		<div className="">
			<Navbar />
			{/* <div className="page_part"> */}
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/homepage" element={<Homepage />} />
				<Route path="/news" element={<News />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/courses" element={<Courses />} />
				<Route path="/publications" element={<Publications />} />
				<Route path="/members" element={<Members />} />
				<Route path="/news/news1to1" element={<News1to1 />} />
				<Route path="/news/news1to2" element={<News1to2 />} />
				<Route path="/news/news1to3" element={<News1to3 />} />
				<Route path="/news/news1to4" element={<News1to4 />} />
				<Route path="/news/news1to5" element={<News1to5 />} />

				<Route path="/news/news2to1" element={<News2to1 />} />
				<Route path="/news/news2to2" element={<News2to2 />} />
				<Route path="/news/news2to3" element={<News2to3 />} />
				<Route path="/news/news2to4" element={<News2to4 />} />
				<Route path="/news/news2to5" element={<News2to5 />} />

				<Route path="/news/2022" element={<News />} />
				<Route path="/news/2021" element={<NewsMinus1y />} />

				<Route path="/projects/1111" element={<Project1 />} />
				<Route path="/projects/2222" element={<Project2 />} />
				<Route path="/projects/3333" element={<Project3 />} />
				<Route path="/projects/4444" element={<Project4 />} />
				<Route path="/projects/5555" element={<Project5 />} />
				<Route path="/projects/6666" element={<Project6 />} />

				<Route path="/members/renxipei" element={<Renxipei />} />
				<Route path="/members/yubin" element={<Yubin />} />
				<Route path="/members/lizhuying" element={<Lizhuying />} />
				<Route path="/members/pansibo" element={<Pansibo />} />
				<Route path="/members/handongjun" element={<Handongjun />} />
				<Route path="/members/wuxiaoyi" element={<Wuxiaoyi />} />
				<Route path="/members/liuxinyue" element={<Liuxinyue />} />
				<Route path="/members/zourenyao" element={<Zourenyao />} />
				<Route path="/members/litianyi" element={<Litianyi />} />
				<Route path="/members/zhangxiaoyu" element={<Zhangxiaoyu />} />
				<Route path="/members/zhenyaqi" element={<Zhenyaqi />} />
				<Route path="/members/lianchengbo" element={<Lianchengbo />} />
				<Route path="/members/hanwutong" element={<Hanwutong />} />
				<Route path="/members/heyuqi" element={<Heyuqi />} />
				<Route path="/members/caiwei" element={<Caiwei />} />
				<Route path="/members/guozhifan" element={<Guozhifan />} />
				<Route path="/members/sunxiaoqing" element={<Sunxiaoqing />} />
				<Route path="/members/liuzhao" element={<Liuzhao />} />
				<Route path="/members/cuiwenting" element={<Cuiwenting />} />
				<Route path="/members/zhuyujia" element={<Zhuyujia />} />
				<Route path="/members/limuyang" element={<Limuyang />} />
				<Route path="/members/baixinhui" element={<Baixinhui />} />
				<Route path="/members/zhaoronghui" element={<Zhaoronghui />} />
				<Route path="/members/qiuchunman" element={<Qiuchunman />} />
				<Route path="/members/yanran" element={<Yanran />} />
				<Route path="/members/mayurui" element={<Mayurui />} />
				
			</Routes>
			{/* </div> */}
			<Footer />
		</div>
	);
}

export default App;
