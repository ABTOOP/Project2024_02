<template>
  <header>
    <h1>Skills</h1>
  </header>
  
  <div class="iconskills">
    <div class="skill">
      <img alt="Vue logo" src="@/assets/logo.svg" width="75" height="75">
      <p class="logo-name">Vue.js</p>
    </div>
    <div class="skill">
      <img alt="CSS logo" src="/src/assets/css.svg" width="75" height="75">
      <p class="logo-name">CSS</p>
    </div>
    <div class="skill">
      <img alt="JavaScript logo" src="/src/assets/javascript.svg" width="75" height="75">
      <p class="logo-name">JavaScript</p>
    </div>
    <div class="skill">
      <img alt="HTML logo" src="/src/assets/html.svg" width="75" height="75">
      <p class="logo-name">HTML</p>
    </div>
    <div class="skill">
      <img alt="java logo" src="/src/assets/java.svg" width="75" height="75">
      <p class="logo-name">HTML</p>
    </div>
    <div class="skill">
      <img alt="python logo" src="/src/assets/python.svg" width="75" height="75">
      <p class="logo-name">HTML</p>
    </div>

  </div>
</template>
  
  <style scoped>
  /* @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  } */
  header {
  text-align: left;
  margin-bottom: 40px;
 }
  h1{
    /* display: flex;
    align-items: center;
    flex-direction: column; */
    /* color: rgb(255, 255, 255); */
    /* margin-bottom: 30px; */
    font-size: 3rem;
    font-weight: bold;
    background: linear-gradient(to right, #48c9b0, #c500f7); 
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    margin-bottom: 2rem;
  }
  .iconskills {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.skill {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-name {
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  margin-top: 5px;
}
  
  </style>
  