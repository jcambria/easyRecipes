import React from 'react';
import{FaGithubSquare, FaLinkedin} from 'react-icons/fa';
import{GiLightBulb} from 'react-icons/gi';

<h1>The Developers Behind the Knives</h1>
function AboutTheDevs() {
return (

  <div class=" flex bg-gradient-to-r from-gray-100 to-yellow-500 sm:">

    <div class="about-devs-1 flex flex-col px-20">
        <div class="font-bold">
          MarQuan McCarrel
        </div>
        <div class="flex">
          <a href="https://github.com/MarQuanMcCarrel"target="_blank"rel="noreferrer">
            <FaGithubSquare size={60} />GitHub
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/marquan-mccarrel/"target="_blank"rel="noreferrer">
            <FaLinkedin size={60} />LinkedIn
          </a>
        </div>
        <div>
        <a href="https://marquanmccarrel.github.io/Porfolio-Resume-Site/"target="_blank"rel="noreferrer">
            <GiLightBulb size={60} />Portfolio
          </a>
        </div>

    </div>

    <div class="about-devs-2 flex flex-col px-20">
        <div class="font-bold">
          Jimmy McCue
        </div>
        <div class="flex">
          <a href="https://github.com/jimmymccue"target="_blank"rel="noreferrer">
            <FaGithubSquare size={60} />GitHub
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/jimmy-mccue/"target="_blank"rel="noreferrer">
            <FaLinkedin size={60} />LinkedIn
          </a>
        </div>
        <div>
        <a href="https://jimmymccue.github.io/"target="_blank"rel="noreferrer">
            <GiLightBulb size={60} />Portfolio
          </a>
        </div>

    </div>

    <div class="about-devs-3 flex flex-col px-20">
        <div class="font-bold">
          Ayub Egal
        </div>
        <div class="flex">
          <a href="https://github.com/egalayub"target="_blank"rel="noreferrer">
            <FaGithubSquare size={60} />GitHub
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/ayub-egal/"target="_blank"rel="noreferrer">
            <FaLinkedin size={60} />LinkedIn
          </a>
        </div>
        <div>
        <a href="https://egalayub.github.io/Professional-Portfolio/"target="_blank"rel="noreferrer">
            <GiLightBulb size={60} />Portfolio
          </a>
        </div>

    </div>

    <div class="about-devs-4 flex flex-col px-20">
        <div class="font-bold">
          Justin Cambria
        </div>
        <div class="flex">
          <a href="https://github.com/jcambria"target="_blank"rel="noreferrer">
            <FaGithubSquare size={60} />GitHub
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/justin-cambria/"target="_blank"rel="noreferrer">
            <FaLinkedin size={60} />LinkedIn
          </a>
        </div>
        <div>
        <a href="https://egalayub.github.io/Professional-Portfolio/"target="_blank"rel="noreferrer">
            <GiLightBulb size={60} />Portfolio
          </a>
        </div>

    </div>


    <div class="about-devs-5 flex flex-col px-20">
        <div class="font-bold">
          Ryan Gernert
        </div>
        <div class="flex">
          <a href="https://github.com/RGern"target="_blank"rel="noreferrer">
            <FaGithubSquare size={60} />GitHub
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/ryan-gernert/"target="_blank"rel="noreferrer">
            <FaLinkedin size={60} />LinkedIn
          </a>
        </div>
        <div>
        <a href="https://rgern.github.io/"target="_blank"rel="noreferrer">
            <GiLightBulb size={60} />Portfolio
          </a>
        </div>

    </div>

  </div>


 );
}
export default AboutTheDevs;