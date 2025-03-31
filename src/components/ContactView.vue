<template>
      <header>
        <h1>ติดต่อเรา</h1>
        <div class="imgpf">
          <img src="/src/assets/S__124084227.jpg" alt="mypf">
        </div>
        <p class="subtitle">หากท่านมีข้อสงสัยหรือต้องการข้อมูลเพิ่มเติม สามารถติดต่อเราได้ตามรายละเอียดด้านล่าง</p>
    </header>
  <div class="container">
    <div class="container-contact">
      <div class="info">
            <h2 class="icon"><span class="material-symbols-outlined">home</span></h2>
            <ul>
              <li><strong>ที่อยู่ : </strong>88/2 ม.2</li>
              <li><strong>อำเภอ/เขต : </strong>พรหมพิราม</li>
              <li><strong>จังหวัด : </strong> พิษณุโลก</li>
              <li><strong>รหัสไปรษณีย์ : </strong> 65180</li>
              <li><strong>ประเทศไทย</strong></li>
            </ul>
        </div>

        <div class="address">
            <h2 class="icon"><span class="material-symbols-outlined">call</span></h2>
            <ul>
                <li><strong>โทรศัพท์ : </strong> 0612688810</li>
                <li><strong>อีเมล : </strong><a href="mailto:ampuchinee.b@ku.th">ampuchinee.b@ku.th</a></li>
                <li><strong>GitHub : </strong><a href="https://github.com/ABTOOP" target="_blank">ABTOOP</a></li>
            </ul>
        </div>

        <div class="working-hours">
            <h2 class="icon"><span class="material-symbols-outlined">work_history</span></h2>
            <ul>
                <li><strong>จันทร์ - ศุกร์ : </strong> 9.00น. - 18.00น.</li>
                <li><strong>เสาร์ - อาทิตย์ : </strong> [วันหยุด]</li>
            </ul>
        </div>
    </div>
    
  </div>

<footer>
    <p>Thank you for contacting us.</p>
</footer>

</template>
  
<style scoped>
.imgpf {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  }

.imgpf img {
  width: 250px; /* ปรับขนาดรูป */
  height: 250px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgb(255, 255, 255);
  border: 4px solid rgb(255, 255, 255);
  transition: transform 0.3s ease-in-out;
  }

.imgpf img:hover {
  transform: scale(1.1); /* ขยายขึ้นเล็กน้อยเมื่อชี้ */
 }
.info,.address,.working-hours {
  width: 30%;
  padding: 30px;
  background-color: #00000028;
  border-radius: 50px;
}
a {
  color: #1abc9c;
  text-decoration: none;
  text-shadow:#1abc9c 0 0 10px;
}
a:hover {
  text-decoration: underline;
}
.icon {
  display: flex;
  justify-content: center; /* จัดให้อยู่กลางในแนวนอน */
  align-items: center; /* จัดให้อยู่กลางในแนวตั้ง */
  font-size: 40px; /* ขนาดของไอคอน */
  text-shadow:#1abc9c 0 0 10px;
}
.container {
  /* display: flex;
  flex-direction: column; */
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
header {
  text-align: left;
  /* margin-bottom: 40px; */
 }
h1 {
  /* font-size: 36px;
  color: #ffffff;
  margin-bottom: 10px; */
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(to right, #48c9b0, #c500f7); 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  margin-bottom: 2rem;
}
p{
  text-align: center;
}

p.subtitle {
font-size: 18px;
color: #ffffff;
}
.container-contact {
  display: flex;
  justify-content: space-between; 
  flex-wrap: wrap;
  /* padding-left: 15px; */
  max-height: 35vh;
  overflow-y: auto;
  
}
.container-contact h2 {
font-size: 18px;
color: #ffffff;
margin-bottom: 10px;
}
.container-contact ul li {
  display: flex;
  justify-content: center; /* จัดให้อยู่กลางในแนวนอน */
  align-items: center;
  font-size: 14px;
  margin-bottom: 10px;
  color: #ffffff;
}
.container-contact ul li strong {
color: #ffffff;
}
footer {
text-align: center;
font-size: 12px;
color: #ffffff;
/* margin-top: 40px; */
}
  </style>
  