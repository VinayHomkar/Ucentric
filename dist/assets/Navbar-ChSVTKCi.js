import{r as s,j as e,m as d,a as r}from"./index-DxbjjCF5.js";const x=()=>{const[o,t]=s.useState(!1),[n,l]=s.useState(!1);s.useEffect(()=>{const a=()=>l(window.scrollY>10);return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]);const i=n?"bg-transparent backdrop-blur-none shadow-none":"bg-black shadow-md";return e.jsxs(d.div,{initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.6,ease:"easeOut"},className:`
        fixed top-0 left-0 w-full z-50
        flex justify-between items-center
        px-6 sm:px-10 lg:px-16 py-4
        font-medium text-white
        transition-all duration-700
        overflow-x-hidden
        ${i}
      `,children:[e.jsx("img",{src:r.logo,alt:"logo",style:{width:"90px",height:"auto"}}),e.jsxs("div",{className:`
          flex transition-all

          /* Mobile Sidebar */
          max-sm:fixed max-sm:top-0 max-sm:bottom-0 max-sm:right-0
          max-sm:flex-col max-sm:bg-[#000]/95 max-sm:text-white max-sm:pt-20
          max-sm:overflow-x-hidden
          max-sm:overflow-y-auto
          max-sm:gap-4             /* <-- Added space between mobile nav links */

          ${o?"max-sm:w-56 max-sm:pl-8":"max-sm:w-0 max-sm:h-0 overflow-hidden"}

          /* Desktop */
          sm:items-center sm:gap-5
        `,children:[e.jsx("img",{src:r.close_icon,alt:"close",className:"w-5 absolute right-4 top-4 sm:hidden cursor-pointer",onClick:()=>t(!1)}),[{label:"Home",href:"/"},{label:"About Us",href:"/About"},{label:"Services",href:"/Service"},{label:"Contact Us",href:"/Contact"}].map((a,m)=>e.jsxs("a",{href:a.href,onClick:()=>t(!1),className:"relative pb-1 group transition-all duration-300 text-white",children:[a.label,e.jsx("span",{className:`\r
                absolute left-0 bottom-0 w-full h-[3px]\r
                bg-[linear-gradient(90deg,#38b6ff,#000433,#000433)]\r
                bg-[length:200%_100%] opacity-0 scale-x-0\r
                group-hover:opacity-100 group-hover:scale-x-100\r
                transition-all duration-700 ease-out rounded-full\r
              `})]},m))]}),e.jsxs("div",{onClick:()=>t(!0),className:`\r
          w-10 h-8 sm:hidden flex flex-col items-end justify-start \r
          gap-1.5 cursor-pointer overflow-hidden\r
        `,children:[e.jsx("div",{className:"h-[2.5px] w-6 rounded-full bg-gradient-to-r from-[#38b6ff] to-[#000433] animate-gradient"}),e.jsx("div",{className:"h-[2.5px] w-full rounded-full bg-gradient-to-r from-[#38b6ff] to-[#000433] animate-gradient"}),e.jsx("div",{className:"h-[2.5px] w-6 rounded-full bg-gradient-to-r from-[#38b6ff] to-[#000433] animate-gradient"})]}),e.jsxs("a",{href:"/Contact",className:`\r
          text-sm flex items-center gap-2\r
          bg-gradient-to-r from-[#38b6ff] to-[#000433] animate-gradient\r
          text-white px-6 py-2 rounded-full\r
          cursor-pointer hover:scale-105 transition-all\r
          max-sm:hidden\r
        `,children:["Connect",e.jsx("img",{src:r.arrow_icon,width:14,alt:"arrow"})]})]})};export{x as N};
