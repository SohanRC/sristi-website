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
    img:"https://res.cloudinary.com/dzrleetiw/image/upload/v1739397998/images/bdfdqwbs7ly36y4h0r8q.jpg"
  },
  {
    name:"Shree Banerjee (ME)",
    role:"Chief Coordinator",
    img:"https://res.cloudinary.com/dzrleetiw/image/upload/v1739397998/images/ppbqe8c9oksj0hkff3v6.jpg"
  },
  {
     name:"Srinjay Mishra (CSE)",
    role:"Treasurer",
    img:"../public/assets/images/usericon.png"
  },
  {
    name:"Ayan Dolui (CE)",
    role:"Treasurer",
    img:"https://res.cloudinary.com/dzrleetiw/image/upload/v1739397996/images/twkosoajltoj6bl7gyex.jpg"
 },
  {
    name:"Sampurno Sarkar (CSE)",
    role:"Outreach Head",
    img:"../public/assets/images/usericon.png"
  },
  {
    name:"Urnisha Paul (CSE)",
    role:"sponsor team",
    img:"https://res.cloudinary.com/dzrleetiw/image/upload/v1739397999/images/tui8ckuey4twwq1rscdj.jpg"
  },
  {
    name:"Rangan Daw (ME)",
    role:"Production Head",
    img:"https://res.cloudinary.com/dzrleetiw/image/upload/v1739397996/images/nj23wzitktog4m3yx5re.jpg"
 },
 {
  name:"Aneek Karmokar (CE)",
  role:"design team",
  img:"https://res.cloudinary.com/dzrleetiw/image/upload/v1739397996/images/ybkut3uuxazdqsxvhzwy.jpg"
}, 
 {
  name:"Ayush Pandey (CSE)",
  role:"Website Design Head",
  img:"../public/assets/images/usericon.png"
 },
 {
   name:"Tania Banerjee (CSE)",
   role:"Core",
   img:"https://res.cloudinary.com/dzrleetiw/image/upload/v1739397999/images/wkmg8hcwtxer9jhyvtp4.jpg"
 },
 {
  name:"Mehedi Hasan (CSE)",
  role:"Web team",
  img:"../public/assets/images/usericon.png"
},
{
  name:"Siddhant Saiba (CSE)",
  role:"Web team",
  img:"../public/assets/images/usericon.png"
},
{
  name:"Sohan Roy Choudhury (CSE)",
  role:"Web team",
  img:"../public/assets/images/usericon.png"
},
 {
  name:"Arijit Nandi (EE)",
  role:"Core",
  img:"../public/assets/images/usericon.png"
},
{
  name:"Parag De (EE)",
  role:"Core",
  img:"../public/assets/images/usericon.png"
},
{
  name:"Soumya Samanta (IT)",
  role:"Core",
  img:"https://res.cloudinary.com/dzrleetiw/image/upload/v1739398000/images/dqerfpd7e4tz5loh82zu.jpg"
},
{
  name:"Faizan Ali Khan (IT)",
  role:"Core",
  img:"../public/assets/images/usericon.png"
},
{
  name:"Ayan Roy (CE)",
  role:"Sponsor Head",
  img:"../public/assets/images/usericon.png"
},
{
  name:"Sudiksha Basu Thakur (ME)",
  role:"Core",
  img:"https://res.cloudinary.com/dzrleetiw/image/upload/v1739397998/images/vrvbqbdy9koirh542gcw.jpg"
},
{
  name:"Siddhartha Patra (ECE)",
  role:"Core",
  img:"../public/assets/images/usericon.png"
},
{
  name:"Abir Ganguly(CE)",
  role:"Conference team",
  img:"https://res.cloudinary.com/dzrleetiw/image/upload/v1739397995/images/wqn87n0cgmk9ze3akjo7.jpg"
},
{
  name:"Toushali Saha Roy(CE)",
  role:"Conference team",
  img:"../public/assets/images/usericon.png"
},
{
  name:"Adrika Dutta(EE)",
  role:"Conference team",
  img:"../public/assets/images/usericon.png"
},
{
  name:"Soham Ahmed Molla (ECE)",
  role:"Design Head",
  img:"https://res.cloudinary.com/dzrleetiw/image/upload/v1739398006/images/egovi32di5gyzcbxs7yl.jpg"
}
 ]
const teachers=[
  {
    name:"Dr. Sudip Mandal",
    img:"https://res.cloudinary.com/dzrleetiw/image/upload/v1739400071/sdm_qsqebn.jpg"
  },
  {
    name :"Prof. Samit Das",
    img:"../public/assets/images/usericon.png"
  },
  {
    name:"Prof. Ujjal Dey",
    img:"https://res.cloudinary.com/dzrleetiw/image/upload/v1739397999/images/oawrbbqepnfpthfhlrdz.jpg"
  },
  {
    name:"Prof. Gopa Mandal",
    img:"https://res.cloudinary.com/dzrleetiw/image/upload/v1739400071/gopamam_mh8ncb.jpg"
  },
  {
    name:"Prof. Shobhraj Haldar",
    img:"https://res.cloudinary.com/dzrleetiw/image/upload/v1739397997/images/ezk5zsbjagdwo8wplaha.jpg"
  },
  {
    name:"Prof. Debjyoti Chaterjee",
    img:"../public/assets/images/usericon.png"
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
      opacity: 0, duration: 1,delay:0.5,stagger:0.2,scale:0
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