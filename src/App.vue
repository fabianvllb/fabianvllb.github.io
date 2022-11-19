<script setup>
  import Navbar from './components/Navbar.vue';
  import ProfilePicture from './components/ProfilePicture.vue'
</script>

<template>
  <Navbar/>
  <main class="mx-20 my-2 space-y-5">
    <h1 class="text-2xl font-bold">
      Hello world! Welcome to my personal page.
    </h1>
    <ProfilePicture class="float-left mr-10 ml-5 hidden"/>
    <div class="space-y-8">
      <p class="text-justify">Name's Fabian and I'm a passionate software engineer with expierence in web 
        development and automation quality assurance. Currently finishing my Master’s Degree in Computer 
        Science at the Polytechnic University of Madrid. I have specialized on web development on my own, 
        starting by mastering React and frameworks like Vue.js and Next.js. I also work with Node and Go for the
        back end. Even though I mainly focus on webdev, I am also very interested in game development and DevOps.
        I have learned many more languages, tools, workflows, etc, which you can find in my LinkedIn or at the skills
        section below. :)
      </p>
      <hr class=" border-[#474747]"/>
    </div>

    <div class="space-y-5">
      <p class=" text-xl underline">Education</p>
      <div>
        <p>Polytechnic University of Madrid (Spain)</p>
        <p>Master's Degree in Computer Science</p>
      </div>
      <div>
        <p>University of Salamanca (Spain)</p>
        <p>Bachelor's Degree in Computer Science</p>
      </div>
      <hr class=" border-[#474747]"/>
    </div>

    <div class="space-y-5">
      <p class=" text-xl underline">Taken Coursework / CS & Engineering Knowledge</p>
      <div>
        <p class=" text-lg">Bacherlor's Degree Courses:</p>
        <ul class="pl-10 list-disc">
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
        <p class=" text-lg">Master's Degree Courses:</p>
        <ul class="pl-10 list-disc">
          <li>Emerging Technologies for Business Oportunities</li>
          <li>Advanced Intelligent Systems</li>
          <li>Intelligent Data Analysis</li>
          <li>Interactive Systems</li>
          <li>Embedded and Ubicious Systems</li>
          <li>Data Processes</li>
          <li>Advanced Concepts of Software Engineering</li>
          <li>Strategic Planning</li>
          <li>Project Management</li>
          <li>Computer Graphics</li>
          <li>Quality Assurance and Information Security </li>
          <li>Design and Security of Computer Networks</li>
          <li>Advanced Operating Systems</li>
          <li>Scientific Computing</li>
        </ul>
      </div>
      <hr class=" border-[#474747]"/>
    </div>


  </main>
  
</template>

<style scoped>

</style>
