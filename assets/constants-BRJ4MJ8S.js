const t=e=>{try{const i=new URL(e);return i.protocol!=="https:"?"#":i.href}catch{return"#"}},a=[{title:"Super Fit",description:"A fitness app that helps you track your workouts, improvements and stay motivated.",shortDescription:"Track your Workouts Like a Pro",image:{src:"/public/Media/superfit-preview.jpeg"},tech:["React","Tailwind CSS"],link:t("https://super-fit.vercel.app/")},{title:"Jeevizon",description:"An interactive E-commerce platform where you can sign up and view products",shortDescription:"Interactive E-commerce platform",image:{src:"/public/Media/amazon.jpeg"},tech:["HTML","CSS","JavaScript"],link:t("https://jeevizon.vercel.app")},{title:"Spicy Hut",description:"A restaurant website that displays the menu and contact information.",shortDescription:"Simple Restaurant website with Menu",image:{src:"/public/Media/Spicyhut.jpeg"},tech:["HTML","CSS","JavaScript"],link:t("https://github.com/Jeevintha/spicy-hut")},{title:"Task Management",description:"A task management app that helps you track your tasks and their status.",shortDescription:"Task Management App",image:{src:"/public/Media/task.jpeg"},tech:["JavaScript","HTML","CSS"],link:t("https://github.com/Jeevintha/task-management")}].map(e=>({...e,link:t(e.link)}));export{a as p};
