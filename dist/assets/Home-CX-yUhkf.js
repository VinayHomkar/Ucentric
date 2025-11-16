import{j as e,m as l,r,L as u,a as m}from"./index-BaVkGjGE.js";import{N as g}from"./Navbar-BkGX9P1s.js";import{C as f}from"./ContactUsPage-D7gojXj4.js";import"./index-DWCbIgdf.js";const h="/assets/bg_video-B5u2bx5p.mp4";if(typeof document<"u"&&!document.getElementById("ucentric-global-styles")){const t=document.createElement("style");t.id="ucentric-global-styles",t.innerHTML=`
        @keyframes gradientShift { 
            0% { background-position: 0% 50%; } 
            50% { background-position: 100% 50%; } 
            100% { background-position: 0% 50%; } 
        }
        .animate-gradient {
            background-size: 200% 200%;
            animation: gradientShift 4s ease infinite;
        }
      `,document.head.appendChild(t)}const b=()=>e.jsxs("div",{id:"hero",className:`relative min-h-screen flex flex-col items-center justify-center \r
                   overflow-x-hidden\r
                   text-gray-700 dark:text-white`,children:[e.jsxs("video",{className:"absolute top-0 left-0 w-full h-full object-cover z-0 opacity-100 dark:opacity-70",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:[e.jsx("source",{src:h,type:"video/mp4"}),"Your browser does not support the video tag."]}),e.jsxs("div",{className:`relative z-10 flex flex-col items-center gap-6 \r
                       px-6 sm:px-10 lg:px-16 \r
                       text-center w-full max-w-[1200px] mx-auto`,children:[e.jsx(l.h1,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.8},viewport:{once:!0},className:`\r
                    text-5xl sm:text-6xl lg:text-7xl xl:text-8xl \r
                    font-medium leading-tight \r
                    bg-gradient-to-r from-[#000433] to-[#38b6ff] \r
                    bg-clip-text text-transparent \r
                    animate-gradient\r
                    w-full max-w-[90%] mx-auto\r
                `,children:"Shaping imagination into digital success."}),e.jsx(l.p,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:1},viewport:{once:!0},className:`text-sm sm:text-lg font-medium \r
                           text-gray-500 dark:text-white/75 \r
                           max-w-[600px] mx-auto pb-3`,children:"Empowering digital growth and transforming imagination into meaningful interactive experiences."})]})]}),v=l(u),y=({service:t,index:s})=>{const[i,n]=r.useState({x:0,y:0}),[o,a]=r.useState(!1),c=r.useRef(null),p=d=>{const x=c.current.getBoundingClientRect();n({x:d.clientX-x.left,y:d.clientY-x.top})};return e.jsxs(v,{to:t.link,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:s*.2},viewport:{once:!0},ref:c,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),onMouseMove:p,className:`relative overflow-hidden m-4 rounded-2xl border border-[#38b6ff40]\r
      shadow-[0_0_20px_#00043320] hover:shadow-[0_0_35px_#38b6ff80]\r
      transition-all duration-500 group bg-white/5 dark:bg-[#000433]/80 backdrop-blur-md`,children:[e.jsx("div",{className:`pointer-events-none blur-3xl rounded-full 
        bg-gradient-to-r from-[#38b6ff] via-[#1a4aff] to-[#000433] 
        w-[250px] h-[250px] absolute z-0 transition-opacity duration-500 mix-blend-screen 
        ${o?"opacity-60":"opacity-0"}`,style:{top:i.y-125,left:i.x-125}}),e.jsxs("div",{className:"relative z-10 flex items-center gap-6 p-8 transition-all duration-300 group-hover:scale-[1.02]",children:[e.jsx("div",{className:"relative bg-gradient-to-br from-[#38b6ff] to-[#000433] p-[2px] rounded-full",children:e.jsxs("div",{className:"bg-white dark:bg-[#000433] rounded-full p-4 w-[72px] h-[72px] flex justify-center items-center",children:[" ",e.jsx("span",{className:"text-4xl transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110",children:t.icon})]})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"font-bold text-lg text-[#38b6ff]",children:t.title}),e.jsx("p",{className:"text-sm mt-2 text-gray-700 dark:text-gray-300 leading-relaxed",children:t.description})]})]})]})},w=({align:t="center"})=>{const[s,i]=r.useState(!1),n=r.useRef(null);return r.useEffect(()=>{const o=new IntersectionObserver(([a])=>{a.isIntersecting&&(i(!0),o.disconnect())},{threshold:.5});return n.current&&o.observe(n.current),()=>{n.current&&o.unobserve(n.current)}},[]),e.jsx("div",{ref:n,style:{width:s?"100px":"0px",height:"4px",backgroundColor:"#38b6ff",margin:t==="center"?"20px auto 30px auto":"20px 0 30px 0",transition:"width 0.6s ease-out",borderRadius:"2px"}})},j=()=>{const t=[{icon:"💻",title:"Website Design",description:"Top-quality web design with user-friendly interfaces and brand-focused aesthetics.",link:"/Websitedesign"},{icon:"🛒",title:"E-Commerce Development",description:"Data-driven strategies to handle diverse eCommerce challenges.",link:"/Ecommerce"},{icon:"📱",title:"Mobile App Development",description:"Engaging mobile apps using the latest technologies for seamless UX.",link:"/Mobileapp"},{icon:"📊",title:"Digital Marketing",description:"Effective digital strategies to boost your brand visibility and engagement.",link:"/Digitalmarketing"},{icon:"🔍",title:"Portfolio",description:"White-hat SEO techniques to rank higher and increase online visibility.",link:"/Portfolio"},{icon:"🎓",title:"College/Student Projects",description:"Guidance and support for students and colleges on practical technical projects.",link:"/StudentProjects"}];return e.jsxs(l.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{staggerChildren:.2},id:"services",className:`\r
        relative flex flex-col items-center gap-7 \r
        px-4 sm:px-12 lg:px-24 xl:px-40 \r
        pt-30 text-gray-700 dark:text-white\r
        overflow-hidden\r
      `,children:[e.jsx("img",{src:m.bgImage2,alt:"",className:"absolute -top-110 -left-70 -z-1 dark:hidden"}),e.jsx("h2",{className:`\r
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-center\r
        bg-gradient-to-r from-[#38b6ff] to-[#000433] bg-clip-text text-transparent animate-gradient\r
      `,children:"How can we help?"}),e.jsx(w,{}),e.jsx("p",{className:"text-center text-gray-400 max-w-xl mb-8",children:"From strategy to execution, we craft digital solutions that move your business forward."}),e.jsx("div",{className:"flex flex-col md:grid grid-cols-2 gap-6",children:t.map((s,i)=>e.jsx(y,{service:s,index:i},i))})]})},S=()=>e.jsxs("div",{children:[e.jsx(g,{}),e.jsx(b,{}),e.jsx(j,{}),e.jsx(f,{})]});export{S as default};
