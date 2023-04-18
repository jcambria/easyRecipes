import React from 'react';
import{FaGithubSquare, FaLinkedin} from 'react-icons/fa';
import{GiLightBulb} from 'react-icons/gi';
import{RiKnifeLine} from 'react-icons/ri';


function AboutTheDevs() {
return (

  <div class=" flex bg-cover bg-gradient-to-r from-gray-100 to-gray-500 image-grid-container">
    <div class="flex font-bold text-5xl pl-4 pb-10" ><br/>
    The Guys Behind<br/>  The Knives
    </div>

    <div class="about-devs-1 flex flex-col px-20 pt-2">
        <div class="font-bold text-lg pb-1">
          MarQuan McCarrel
        </div>
        <div class="flex hover:bg-gradient-to-r from gray-300">
          <a href="https://github.com/MarQuanMcCarrel"target="_blank"rel="noreferrer">
            <FaGithubSquare size={60} />GitHub
          </a>
        </div>
        <div class="flex hover:bg-gradient-to-r from gray-200 to-yellow-500">
          <a href="https://www.linkedin.com/in/marquan-mccarrel/"target="_blank"rel="noreferrer">
            <FaLinkedin size={60} />LinkedIn
          </a>
        </div>
        <div class="flex hover:bg-gradient-to-r from gray-200 to-yellow-500">
        <a href="https://marquanmccarrel.github.io/Porfolio-Resume-Site/"target="_blank"rel="noreferrer">
            <GiLightBulb size={60} />Portfolio
          </a>
        </div>

    </div>

    <div class="about-devs-2 flex flex-col px-20 pt-2">
        <div class="font-bold text-lg pb-1">
          Jimmy McCue
        </div>
        <div class="flex hover:bg-gradient-to-r from gray-200 to-yellow-500">
          <a href="https://github.com/jimmymccue"target="_blank"rel="noreferrer">
            <FaGithubSquare size={60} />GitHub
          </a>
        </div>
        <div class="flex hover:bg-gradient-to-r from gray-200 to-yellow-500">
          <a href="https://www.linkedin.com/in/jimmy-mccue/"target="_blank"rel="noreferrer">
            <FaLinkedin size={60} />LinkedIn
          </a>
        </div>
        <div class="flex hover:bg-gradient-to-r from gray-200 to-yellow-500">
        <a href="https://jimmymccue.github.io/"target="_blank"rel="noreferrer">
            <GiLightBulb size={60} />Portfolio
          </a>
        </div>

    </div>

    <div class="about-devs-3 flex flex-col px-20 pt-2">
        <div class="font-bold text-lg pb-1">
          Ayub Egal
        </div>
        <div class="flex hover:bg-gradient-to-r from gray-200 to-yellow-500">
          <a href="https://github.com/egalayub"target="_blank"rel="noreferrer">
            <FaGithubSquare size={60} />GitHub
          </a>
        </div>
        <div class="flex hover:bg-gradient-to-r from gray-200 to-yellow-500">
          <a href="https://www.linkedin.com/in/ayub-egal/"target="_blank"rel="noreferrer">
            <FaLinkedin size={60} />LinkedIn
          </a>
        </div>
        <div class="flex hover:bg-gradient-to-r from gray-200 to-yellow-500">
        <a href="https://egalayub.github.io/Professional-Portfolio/"target="_blank"rel="noreferrer">
            <GiLightBulb size={60} />Portfolio
          </a>
        </div>

    </div>

    <div class="about-devs-4 flex flex-col px-20 pt-2">
        <div class="font-bold text-lg pb-1">
          Justin Cambria
        </div>
        <div class="flex hover:bg-gradient-to-r from gray-200 to-yellow-500">
          <a href="https://github.com/jcambria"target="_blank"rel="noreferrer">
            <FaGithubSquare size={60} />GitHub
          </a>
        </div>
        <div class="flex hover:bg-gradient-to-r from gray-200 to-yellow-500">
          <a href="https://www.linkedin.com/in/justin-cambria/"target="_blank"rel="noreferrer">
            <FaLinkedin size={60} />LinkedIn
          </a>
        </div>
        <div class="flex hover:bg-gradient-to-r from gray-200 to-yellow-500">
        <a href="http://justincambria.com/"target="_blank"rel="noreferrer">
            <GiLightBulb size={60} />Portfolio
          </a>
        </div>

    </div>


    <div class="about-devs-5 flex flex-col px-20 pt-2">
        <div class="font-bold text-lg pb-1">
          Ryan Gernert
        </div>
        <div class="flex hover:bg-gradient-to-r from gray-200 to-yellow-500">
          <a href="https://github.com/RGern"target="_blank"rel="noreferrer">
            <FaGithubSquare size={60} />GitHub
          </a>
        </div>
        <div class="flex hover:bg-gradient-to-r from gray-200 to-yellow-500">
          <a href="https://www.linkedin.com/in/ryan-gernert/"target="_blank"rel="noreferrer">
            <FaLinkedin size={60} />LinkedIn
          </a>
        </div>
        <div class="flex hover:bg-gradient-to-r from gray-200 to-yellow-500">
        <a href="https://rgern.github.io/"target="_blank"rel="noreferrer">
            <GiLightBulb size={60} />Portfolio
          </a>
        </div>

    </div>

  </div>


 );
}
export default AboutTheDevs;