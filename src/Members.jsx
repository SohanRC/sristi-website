import React from 'react'
import Navbar from './components/Navbar'
import './members.css'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import phat from '../public/assets/images/pirate hat.png'
import scroll from '../public/assets/images/scroll.png'
const members=[
  {
    name:"Sujay Kumar Sarkar (IT)",
    role:"Chief Coordinator",
    img:"../public/assets/images/sujoy.jpg"
  },
  {
    name:"Shree Banerjee (ME)",
    role:"Chief Coordinator",
    img:"../public/assets/images/shree.jpg"
  },
  {
     name:"Srinjay Mishra (CSE)",
    role:"Treasurer",
    img:"../public/assets/images/srinjay.jpg"
  },
  {
    name:"Ayan Dolui (CE)",
    role:"Treasurer",
    img:"../public/assets/images/Ayan.jpg"
 },
  {
    name:"Sampurno Sarkar (CSE)",
    role:"Outreach Head",
    img:"../public/assets/images/sampurno.jpg"
  },
  {
    name:"Urnisha Paul (CSE)",
    role:"sponsor team",
    img:"../public/assets/images/urnisha.jpg"
  },
  {
    name:"Rangan Daw (ME)",
    role:"Production Head",
    img:"../public/assets/images/rangan.jpg"
 },
 {
  name:"Aneek Karmokar (CE)",
  role:"design team",
  img:"../public/assets/images/aneek.jpg"
}, 
 {
  name:"Ayush Pandey (CSE)",
  role:"Website Design Head",
  img:"../public/assets/images/ayush.jpg"
 },
 {
   name:"Tania Banerjee (CSE)",
   role:"Core",
   img:"../public/assets/images/taniaban.jpg"
 },
 {
  name:"Mehedi Hasan (CSE)",
  role:"Web team",
  img:"../public/assets/images/mehdi.jpg"
},
{
  name:"Siddhant Saiba (CSE)",
  role:"Web team",
  img:"../public/assets/images/saiba.jpg"
},
{
  name:"Sohan Roy Choudhury (CSE)",
  role:"Web team",
  img:"../public/assets/images/src.jpg"
},
 {
  name:"Arijit Nandi (EE)",
  role:"Core",
  img:"../public/assets/images/arijit.jpg"
},
{
  name:"Parag De (EE)",
  role:"Core",
  img:"../public/assets/images/parag.jpg"
},
{
  name:"Soumya Samanta (IT)",
  role:"Core",
  img:"../public/assets/images/saumya.jpg"
},
{
  name:"Faizan Ali Khan (IT)",
  role:"Core",
  img:"../public/assets/images/faizan.jpg"
},
{
  name:"Ayan Roy (CE)",
  role:"Sponsor Head",
  img:"../public/assets/images/ayanroy.jpg"
},
{
  name:"Sudiksha Basu Thakur (ME)",
  role:"Core",
  img:"../public/assets/images/sudiksha.jpg"
},
{
  name:"Siddhartha Patra (ECE)",
  role:"Core",
  img:"../public/assets/images/siddhartha.jpg"
},
{
  name:"Abir Ganguly(CE)",
  role:"Conference team",
  img:"../public/assets/images/abir.jpg"
},
{
  name:"Toushali Saha Roy(CE)",
  role:"Conference team",
  img:"../public/assets/images/toushali.jpg"
},
{
  name:"Adrika Dutta(EE)",
  role:"Conference team",
  img:"../public/assets/images/adrika.jpg"
},
{
  name:"Soham Ahmed Molla (ECE)",
  role:"Design Head",
  img:"../public/assets/images/soham.jpg"
}
 ]
const teachers=[
  {
    name:"Dr. Sudip Mandal",
    img:"../public/assets/images/sdm.jpg"
  },
  {
    name :"Prof. Samit Das",
    img:"../public/assets/images/sobrajsir.jpeg"
  },
  {
    name:"Prof. Ujjal Dey",
    img:"../public/assets/images/ud.jpg"
  },
  {
    name:"Prof. Gopa Mandal",
    img:"../public/assets/images/gopamam.jpeg"
  },
  {
    name:"Prof. Shobhraj Haldar",
    img:"../public/assets/images/sobrajsir.jpeg"
  },
  {
    name:"Prof. Debjyoti Chaterjee",
    img:"../public/assets/images/sobrajsir.jpeg"
  }
]
const Members = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from('.heading2,.ph1',{
      opacity:0,
      duration:0.8,x:100,delay:1.5
    })
    tl.from('.ph2',{rotation:45,x:-100,opacity:0,duration:0.5})
    tl.to('.ph2',{rotation:25,delay:0.2})
    tl.to('.ph2',{rotation:10,delay:0.2})
    tl.from('.bigcard', {
      opacity: 0, duration: 1,delay:1,stagger:0.2,scale:0
    },1);
    
    const t2 = gsap.timeline({
      scrollTrigger:{
        trigger:'heading3',
        start: '100% center',
        end:'100% center',
        scrub:false,
      }
    });
    t2.from('.heading3,.ph3',{
      opacity:0,
      duration:0.8,x:100
    })
    t2.from('.ph4',{rotation:45,x:-100,opacity:0,duration:0.5})
    t2.to('.ph4',{rotation:25,delay:0.2})
    t2.to('.ph4',{rotation:10,delay:0.2})
    t2.from('.bigcard2', {
      opacity: 0, duration: 1,delay:1,stagger:0.2,scale:0
    },1)
    
  }, [])
  return (
    <div className='page'>
        <Navbar/>
        <div className="core font-pirata">
          <div className='heading2 font-pirata tracking-wider text-5xl'>
            <div className="ph1"><img src={scroll} className='ss'></img></div>
            <div className="ph2"><img src={phat} className='iii'></img></div><div className='hh'>TEACHERS TEAM</div></div>
        <div className="cards">
           {
              teachers.map((it)=>
                (<div className="bigcard"><div className="card font-pirata" id={it.name}><img className="fimg" src={it.img}></img></div>
                {it.name}
                </div>)
              )
           }          
        </div>
        </div>
        <div className="core font-pirata">
          <div className='heading3 font-pirata tracking-wider text-5xl'>
            <div className='ph3'>
            <img src={scroll} className='ss'></img></div>
            <div className="ph4"><img src={phat} className='iii'></img></div><div className='hh'>STUDENTS TEAM</div>
        </div>
        <div className="cards">
           {
              members.map((it)=>
                (<div className="bigcard2"><div className="card font-pirata" id={it.name}><img className="fimg" src={it.img}></img></div>
                {it.name} <div className="role">{it.role}</div>
                </div>)
              )
           }          
        </div>
        </div>
    </div>
  )
}

export default Members