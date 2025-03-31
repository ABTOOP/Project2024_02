<script setup>
// import { RouterLink } from 'vue-router'

// ต้อง import คอมโพเนนต์ของแต่ละหน้า
import HomeView from '@/components/HomeView.vue'
import EducationView from '@/components/EducationView.vue'
import ExperienceView from '@/components/ExperienceView.vue'
import ContactView from '@/components/ContactView.vue'
</script>


<template>
  
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">

  <div class="container">
    <aside class="sideber">
      <header class="sideber-header">
        <a href="#" class="header-logo">
          <img alt="Vue logo" class="logo" src="/src/assets/S__124084227.jpg">
        </a>
        <button class="side-toggler">
          <span class="material-symbols-outlined">menu</span>
        </button>
      </header>
      <nav class="sideber-nav">
      <!--Main menu -->
        <ul class="nav-list primary-nav">
          <li class="nav-item">
            <a href="/" class="nav-link">
              <span class="nav-icon material-symbols-outlined">home</span>
              <span class="nav-label">Home</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#education" class="nav-link">
              <span class="nav-icon material-symbols-outlined">school</span>
              <span class="nav-label">Education</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#experience" class="nav-link">
              <span class="nav-icon material-symbols-outlined">description</span>
              <span class="nav-label">Skills</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#contact" class="nav-link">
              <span class="nav-icon material-symbols-outlined">contact_page</span>
              <span class="nav-label">Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
    <!-- View -->
    <aside class="viewinfo-page">

      <section id="home">
        <HomeView />
      </section>
      <section id="education">
        <EducationView />
      </section>
      <section id="experience">
        <ExperienceView />
      </section>
      <section id="contact">
        <ContactView />
      </section>
    </aside>
  </div>
  
  
</template>


<style scoped>

nav a {
  text-decoration: none;
  color: #000;
}

a:hover {

  background: #1abc9c;
}

nav a.active,
nav a:focus {
  color: #1abc9c;
  text-shadow: #1abc9c 0 0 10px;
}
/* nav a.router-link-exact-active {
  color: #48ff00;
}

nav a.router-link-exact-active .nav-icon, 
nav a.router-link-exact-active .nav-label {
  color: #48ff00;
  text-shadow:#00fd22 0 0 10px;
} */

/* a:hover{
  background: #2afd0050;
} */
a{
  text-decoration: none;
  color: rgb(255, 255, 255);
  transition: 0.4s;
  padding: 3px;
  transition: 0.4s;

}
.container {
  display: flex;
  height: 100vh;
  gap: 0px;
}
/* .sideber {
  position: fixed;
  left: 0px;
  width: 20%;
  background: #3a3a3af6;
  transition: all 0.4s ease;
  overflow: hidden;
  border-radius: 60px;
  height: calc(100vh - 30px);
  margin: 16px;
} */

.sideber {
  min-width: 100px;
  width: 10%;
  display: flex;
  flex-direction: column;
  background: #ffffff2f;
  transition: all 0.4s ease;
  overflow: hidden;
  border-radius: 60px;
  height: calc(50vh - 0px);
  margin-right: 20px;
  margin-top: 20px;
  margin-left: 20px;
  box-shadow:   #ffffff 0 0 20px;
}
.viewinfo-page section {
  padding: 50px;
  border-bottom: 1px solid #ccc;
}

.viewinfo-page {
  flex-grow: 1;
  /* margin-left: 260px; */
  padding: 20px;
  /* padding: 20px; */
  /* overflow: hidden; */
  /* background: #ffffff2f; */
  /* border-radius: 60px; */
  /* height: calc(300vh - 0px); */
  /* height: 190cap; */
  /* margin-top: 20px; */
  
  margin-right: 20px;
  /* box-shadow:   #ffffff 0 0 20px;  */
}
.sideber.open{
  width: 2%;
  transition: all 0.4s ease;
}
.sideber.open .sideber-header .side-toggler{
  display: block;
  transform: translate(-26px, 52px);
  
}
.sideber.open .sideber-nav .nav-link{
  transform: translate(0px, 25px);
} 
.sideber.open .sideber-nav .nav-link .nav-icon{
  display: block;
  padding-left: 17px;
}
.sideber.open .sideber-nav .nav-link .nav-label{
  display: block;
  padding-left: 30px;
} 
.sideber .sideber-header {
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 25px 20px;
} 
.sideber-header .side-toggler{
  position: absolute;
  right: 10px;
  height: 35px;
  width: 35px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background: #ffffff;
  transition: 0.4s;
  transform: translate(-4px, 0px);
}
.sideber-header .side-toggler:hover{
  background: #1abc9c;
}
.sideber-header .side-toggler span{
  font-size: 1.75rem;
}
.sideber-nav .nav-link{
  list-style: none;
  display: flex;
  gap: 4px;
  padding: 0px 15px;
}
.sideber-header .header-logo img{
  display: block;
  height: 46px;
  width: 46px;
  object-fit: cover;
  border-radius: 50px;
}
.sideber-nav .nav-item .nav-link {
  display: flex;
  padding: 10px 17px;
  align-items: center;
  gap: 13px;
  text-decoration: none;
  color: #ffffff;
  border-radius: 50px;
  transition: 0.4s;
}
nav a.router-link-exact-active:hover {
  background-color: transparent;
}
@media (max-width: 1865px) {
  .sideber {
    width: calc(100% - 80%);
  }
}

@media (max-width: 1600px) {
  .sideber {
    width: calc(100% - 70%);
  }
}

@media (max-width: 1450px) {
  .sideber {
    width: calc(100% - 70%);
  }
  .sideber-header{
    position: sticky;
    top: 0;
    z-index: 20;
    padding: 8px 20px;
    border-radius: 16px;
  }
  .sideber-nav .nav-link{
    gap: 0px;
    padding: 10px;
    font-size: 0.94rem;
  }
}
@media (max-width: 1132px) {
  .sideber {
    width: calc(100% - 60%);
  }
}
@media (max-width: 828px) {
  .sideber {
    width: calc(100% - 30%);
    
  }
}
@media (max-width: 935px) {
  .sideber {
    width: calc(100% - 30%);
    
  }
}
@media (max-width: 697px) {
  .sideber {
    width: calc(100% - 30%);
    
  }
}


</style>


