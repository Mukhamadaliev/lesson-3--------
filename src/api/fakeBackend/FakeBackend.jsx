import React from 'react'
import Hero from "../../components/hero/Hero"
import Header from '../../components/header/Header'
import bmwImg from "./assets/BMW.jpg";
import About from '../../components/about/About';
import { MdOutlineDesignServices } from "react-icons/md";
import { IoMdApps } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { MdEditCalendar } from "react-icons/md";
import Footer from '../../components/footer/Footer';
import { FiMonitor } from "react-icons/fi";
import { FiBarChart2 } from "react-icons/fi";
import { TfiUser } from "react-icons/tfi";
import { FiUsers } from "react-icons/fi";


const FakeBackend = () => {
  const header = [
    {
      title: "HYKROX",
      body: ["Home", "Designs", "Services", "About", "Contact"],
      id: 1
    },
    {
      title: "Creative Design",
      body: "We are creative designers",
      lorem: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde a commodi fugiat architecto itaque ipsam eum consequatur, nulla praesentium dolores. Ea soluta nesciunt cum quam vitae nihil consequatur rem asperiores?",
      img: bmwImg,
      id: 2
    }
  ]

  const services = [
    {
      icon: <MdOutlineDesignServices />,
      "title": "Website Design",
      "body": "We can design for you a website and we can upload them.",
      "id": 1
    },
    {
      icon: <IoMdApps />,
      "title": "Mobile & Desktop App",
      "body": "We can creat for you mobile and desktop app.",
      "id": 2
    },
    {
      icon: <MdDashboard />,
      "title": "UI & UX Design",
      "body": "We can creat for you mobile and desktop app.",
      "id": 3
    },
    {
      icon: <MdEditCalendar />,
      "title": "Editing Photo",
      "body": "We can design for you a website and we can upload them.",
      "id": 4
    }
  ]
  const footer = [
    {
      icon: <FiMonitor />,
      title: "PROJECT",
      body: "300+",
      id: 1
    },
    {
      icon: <FiBarChart2 />,
      title: "PLEASURE",
      body: "8,9",
      id: 2
    },
    {
      icon: <TfiUser />,
      title: "CUSTOMER",
      body: "3000+",
      id: 3
    },
    {
      icon: <FiUsers />,
      title: "TEAM MEMBERS",
      body: "23",
      id: 4
    }
  ]

  return (
    <div>
      <div className="background-header">
        <div className="max-width">
          <Header data={header} id={1} />
          <Hero data={header} id={2} />
          <About data={services} />
          <Footer data={footer} />
        </div>
      </div>
    </div>  
  )
}

export default FakeBackend
