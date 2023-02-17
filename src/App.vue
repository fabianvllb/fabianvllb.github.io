<script setup>
  import { ref } from 'vue';
  import Navbar from './components/Navbar.vue';
  import ProfilePicture from './components/ProfilePicture.vue';

  const isBachelorCoursesVisible = ref(false);
  const isMasterCoursesVisible = ref(false);
</script>

<template>
  <Navbar/>
  <main>
    <div class="mx-36 my-2 space-y-5">
      <h1 class="text-2xl font-bold">
        Hello there! Welcome to my personal page.
      </h1>
      <ProfilePicture class="float-left mr-10 ml-5 hidden"/>
      <div class="space-y-8">
        <!--img class="" src="../public/images/night-city.jpg"/-->
        <p class="text-justify">I'm Fabian and I'm a passionate software engineer with experience in web 
          development and automation quality assurance. Currently finishing my Master’s Degree in Computer 
          Science at the Polytechnic University of Madrid, I have specialized on web development on my own, 
          starting by mastering React and then frameworks like Vue.js and Next.js. For back end development I usually go with Node but I also work with Go and Java.
          Even though I mainly focus on webdev, I am also very interested in game development and DevOps.
          I learned many more languages, tools, design patterns, etc, which you can find in my LinkedIn profile or at the skills
          section below. 😊 
        </p>
        <p>Currently 📍 Madrid - Spain</p>
        <hr class=" border-[#474747]"/>
      </div>
  
      <div class="space-y-5">
        <p class="text-xl underline">Education</p>
        <div class="flex flex-row items-center">
          <img class="w-36 mr-2" src="/images/upm_leyenda.png" alt=""/>
          <div>
            <p >Master's Degree in Computer Science</p>
            <p class=" text-[#9cc2ff]">Polytechnic University of Madrid (Spain)</p>
          </div>
        </div>
        <div class="flex flex-row items-center">
          <img class="w-32 mr-6" src="/images/logo-usal-white.png" alt=""/>
          <div>
            <p >Bachelor's Degree in Computer Science</p>
          <p class=" text-[#ffa0a0]">University of Salamanca (Spain)</p>
          </div>
        </div>
        <hr class=" border-[#474747]"/>
      </div>

    <!--img class="h-[500px] w-full  object-cover object-bottom" src="../public/images/night-city.jpg" alt=""-->

    <!--div class="h-96 object-cover object-center" style="background-image: url(../public/images/night-city.jpg)">
        
    </div-->
      <div class="space-y-5">
        <p class="text-xl underline">Taken CS, Engineering and Project Management Coursework</p>
        <div>
          <p class="text-lg">Bacherlor's Degree Courses: <button @click="isBachelorCoursesVisible = !isBachelorCoursesVisible" class="underline text-sm text-blue-300">[{{isBachelorCoursesVisible ? "hide" : "show"}}]</button></p>
          <ul v-if="isBachelorCoursesVisible" class="pl-10 list-disc">
            <li>Programming I, II & III:</li>
            <li>Advanced Programming</li>
            <li>Data Structures and Algorithms I & II</li>
            <li>Computer Structures I & II</li>
            <li>Computer Arquitecture</li>
            <li>Operating Systems I & II</li>
            <li>Computer Networks I & II</li>
            <li>Systems Administration</li>
            <li>Computer Systems Security</li>
            <li>Information Theory and Coding/Encryption Theory</li>
            <li>Database Design</li>
            <li>Database Systems</li>
            <li>Graphical Interfaces Design</li>
            <li>Human-Computer Interaction</li>
            <li>Software Engineering I & II</li>
            <li>Software Project Management</li>
            <li>Intelligent Systems</li>
            <li>Distributed Systems</li>
            <li>Digital Animation</li>
            <li>Modeling and Simulation of Systems</li>
            <li>...</li>
          </ul>
        </div>
        <div>
          <p class="text-lg">Master's Degree Courses: <button @click="isMasterCoursesVisible = !isMasterCoursesVisible" class="underline text-sm text-blue-300">[{{isMasterCoursesVisible ? "hide" : "show"}}]</button></p>
          <ul v-if="isMasterCoursesVisible" class="pl-10 list-disc">
            <li>Data Processes</li>
            <li>Advanced Intelligent Systems</li>
            <li>Intelligent Data Analysis</li>
            <li>Interactive Systems</li>
            <li>Embedded and Ubicious Systems</li>
            <li>Advanced Concepts of Software Engineering</li>
            <li>Emerging Technologies for Business Oportunities</li>
            <li>Strategic Planning</li>
            <li>Project Management</li>
            <li>Quality Assurance and Information Security </li>
            <li>Computer Graphics</li>
            <li>Design and Security of Computer Networks</li>
            <li>Advanced Operating Systems</li>
            <li>Scientific Computing</li>
          </ul>
        </div>
        <hr class=" border-[#474747]"/>
      </div>
  
      <div class="space-y-5">
        <p class="text-xl underline">Projects</p>
        <div>
          <p>Videogames:</p>
          <ul class="pl-10 list-disc">
            <li>Pirate Bomb: Development of a 2D pirate-themed game using Unity and C#. 🔥</li>
            <li>Pokemon Catch: Development of a two player 2D arcade game for two different platforms. Made using C# + WPF for Windows and Objective-C + Cocoa for macOS.</li>
            <li>Meteorite Run: 3D game made with Unreal Engine 4.</li>
          </ul>
        </div>
        <div>
          <p>Web Apps:</p>
          <ul class="pl-10 list-disc">
            <li>2Code: Web app for solving programming exercises with multiple programming languages support that compiles and tests the solutions at a remote server. Made using JavaScript, React, Node and PostgresQL. 🔥</li>
            <li>Virtual Ledgers: Website that implements multiple shortest path algorithms to find and render the shortest routes between two points in a city. Made using Javascript, React, Leaftet, Node and PostgresQL (+PostGIS). 🔥</li>
            <li>Personal Webpage: This website is made using Javascript, Tailwindcss and Vue.</li>
          </ul>
        </div>
        <div>
          Other apps:
          <ul class="pl-10 list-disc">
            <li>City Tour Planner: Java agents-based simulator program for creating and managing tourism routes.</li>
            <li>Spotify clone: Console-based music library manager made with Java.</li>
          </ul>
        </div>
        <hr class=" border-[#474747]"/>
      </div>
  
      <div class="space-y-5">
        <p class="text-xl underline">Skills</p>
        <div class="grid grid-cols-2">
          <div class="space-y-5">
            <div class=" w-[80%]">
              <p>Programming languages I know: (Starting from those that I like the most!)</p>
              <ul class="pl-10 list-disc  columns-3">
                <li>Javascript 🔥</li>
                <li>Java 🔥</li>
                <li>C</li>
                <li>C#</li>
                <li>C++</li>
                <li>Objective-C</li>
                <li>R</li>
                <li>Python</li>
                <li>SQL</li>
                <li>Perl</li>
                <li>PHP</li>  
                <li>Ada</li>
                <li>Common Lisp</li>
                <li>Prolog</li>
              </ul>
            </div>
            <div class=" w-[54%]">
              <p>Software, IDEs, etc:</p>
              <ul class="pl-10 list-disc columns-2">
                <li>Visual Studio Code</li>
                <li>Unity</li>
                <li>Unreal Engine</li>
                <li>MS Project</li>
                <li>Git</li>
                <li>Jira</li>
                <li>Taiga</li>
                <li>Jenkins</li>
              </ul>
            </div>
          </div>

          <div>
            <div class="space-y-5">
              <div class=" w-[50%]">
                <p>Languages:</p>
                <ul class="pl-10 list-disc">
                  <li>Spanish - Native</li>
                  <li>French - Fluent</li>
                  <li>English - Fluent</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr class=" border-[#474747]"/>
      </div>

      <!--div class="space-y-5">
        <p class="text-xl underline">Latest Mini Projects</p>
        <div class="bg-[#434343] border rounded-lg overflow-hidden w-1/5 px-10 py-5">
          <p class="text-[#D1E3DD]">Computer Graphics</p>
          <p class=" ">Recreating Bezier curves in Matlab</p>
        </div>
        <hr class=" border-[#474747]"/>
      </div-->

    </div>
  </main>
  
</template>

<style scoped>

</style>
