import React, { Children, useEffect, useState } from "react";
import Logoimg from "../assets/images/lab_logo.svg";
import "../index.css";
import { Link, useResolvedPath, useMatch } from "react-router-dom";

const Navbar = () => {
  // 首次访问，高亮首页
  // 只有在每次刷新才会渲染一次
  useEffect(() => {
    //一旦挂载直到生命周期结束后退出
    console.log("Set homepage highlighted");
    const hhh = document.getElementById("homepage");
    if (window.location.pathname === "/") {
      hhh.classList.add("active");
    }

    // 卸载时退出标志
    return () => {
      console.log("Unmounted");
    };
  }, []);

  // screen size detection
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
      const nav_right = document.getElementById("navitems_wrap");
      if (windowSize.innerWidth > 1024) {
        if (nav_right.classList.contains("show_col_ham")) {
          nav_right.classList.remove("show_col_ham");
        }
      }
    }
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  // 汉堡菜单切换
  const toggleNav = () => {
    const bar1 = document.getElementById("toggle_bar1");
    const bar2 = document.getElementById("toggle_bar2");
    const bar3 = document.getElementById("toggle_bar3");
    if (bar1.classList.contains("bar1_rotate") === true) {
      bar1.classList.remove("bar1_rotate");
    } else {
      bar1.classList.add("bar1_rotate");
    }

    console.log(bar1.classList);
    if (bar2.classList.contains("bar2_rotate") === true) {
      bar2.classList.remove("bar2_rotate");
    } else {
      bar2.classList.add("bar2_rotate");
    }

    if (bar3.classList.contains("bar3_rotate") === true) {
      bar3.classList.remove("bar3_rotate");
    } else {
      bar3.classList.add("bar3_rotate");
    }

    const navitems = document.getElementById("navitems_wrap");
    const isContain = navitems.classList.contains("show_col_ham");
    if (isContain === true) {
      navitems.classList.remove("show_col_ham");
      navitems.classList.add("hide_col_ham");
    } else {
      navitems.classList.remove("hide_col_ham");
      navitems.classList.add("show_col_ham");
    }
  };

// 顶部菜单栏切换
  const [shrink, setShrink] = useState(false);
  
  useEffect(() => {
   const changeHeight = ()=> {
      console.log("gundongle" + window.scrollY)
      if (window.scrollY >= 480) {
        setShrink(true);
        console.log(shrink)
        // window.scrollTo(0, 40);
        console.log(">=40 shrink value:" + shrink)
        console.log(document.getElementById('navbar_section').classList);
        
      } else {
        setShrink(false);
        console.log("<40 shrink value:" + shrink)
        }
      }
    
    window.addEventListener("scroll", changeHeight);

    return () => {
      window.removeEventListener('scroll',changeHeight);
    }
  }, []);

  return (
    <section id="navbar_section" className={shrink ? "navbar bb" : "navbar"}>
      <div id = "navbar" className="">
        <div className="navbar_container">
          <Link to="/homepage" className="logo_wrap">
            <div className="logo w-10 h-auto">
              <img src={Logoimg} alt="" />
            </div>
            <div className="logo_text">
              <div className="text-xl font-semibold">智能与健康设计研究组</div>
              <span className="text-base font-bold text-gray ">
              Lab of Design Intelligence for Vitality 
              </span>
            </div>
          </Link>

          <div id="nav_right" className="">
            <div
              onClick={toggleNav}
              id="toggle_icon"
              className="group hamburger relative"
            >
              <div
                id="toggle_bar1"
                className="transition duration-300 ease-in-out group-hover:translate-x-1"
              ></div>
              <div
                id="toggle_bar2"
                className="transition duration-300 ease-in-out group-hover:translate-x-1"
              ></div>
              <div
                id="toggle_bar3"
                className="transition duration-300 ease-in-out group-hover:translate-x-1"
              ></div>
            </div>
            <ul id="navitems_wrap" className="hide_col_ham lg:nav_spread_row">
              {/* homepage */}

              <CustomLink to="/homepage" id="homepage" className="homepage">
                <span className="chi_item">首页</span>
                <span className="eng_item ">Home</span>
              </CustomLink>
              {/* news */}
              <CustomLink to="/news">
                <span className="chi_item">新闻</span>
                <span className="eng_item">News</span>
              </CustomLink>
              {/* projects */}
              <CustomLink to="/projects">
                <span className="chi_item">项目</span>
                <span className="eng_item">Projects</span>
              </CustomLink>
              {/* courses */}
              <CustomLink to="/courses">
                <span className="chi_item">课程</span>
                <span className="eng_item">Courses</span>
              </CustomLink>
              {/* publications */}
              <CustomLink to="/publications">
                <span className="chi_item">论文</span>
                <span className="eng_item">Publications</span>
              </CustomLink>
              {/* members */}
              <CustomLink to="/members">
                <span className="chi_item">团队</span>
                <span className="eng_item">Members</span>
              </CustomLink>
            </ul>
          </div>
        </div>
      </div>
      {/* 屏幕尺寸检测仪 */}
      {/* <div className="bg-yellow-400">
            <h1>width:{windowSize.innerWidth}</h1>

            <h1>height:{windowSize.innerHeight}</h1>
          </div> */}
    </section>
  );
};

export default Navbar;

function CustomLink({ to, children, ...props }) {
  //将相对路径改为完整路径
  const resolvedPath = useResolvedPath(to);
  // 判断当前路径是否与当前的location
  const isActive = useMatch({ path: resolvedPath.pathname, end: false });
  let active = isActive ? "active" : "no-active";

  // console.log(window.location.pathname)

  let class_name = active + " " + "navbar_item group";

  useEffect(() => {
    //只要当前路径不在/和/homepage，并且homepage有active的，就把homepage的classlist中的active去掉
    if (
      window.location.pathname !== "/" &&
      window.location.pathname !== "/homepage"
    ) {
      if (document.getElementById("homepage").classList.contains("active")) {
        document.getElementById("homepage").classList.remove("active");
      }
    }

  })
  return (
    <li>
      <Link to={to} {...props} className={class_name}>
        {children}
      </Link>
    </li>
  );
}

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}


