<template>
  <div class="imgpf">
    <img src="/src/assets/S__124084226.jpg" alt="mypf">
  </div>

  <header>
      <div>
        <h1 class="hd">Abount me</h1>
      </div>
    </header>

  <div class="container">
    <p id="intro" class="typing-text"></p>
  </div>

  <div class="school-description">
  <h2>บรรยายเกี่ยวกับโรงเรียนที่เคยเรียนมา</h2>

    <div class="school-item">
      <h3>1. โรงเรียนประถมศึกษาทุกแห่ง</h3>
      <p>เริ่มต้นการศึกษาในโรงเรียนประถมที่ใกล้บ้าน ซึ่งเป็นสถานที่แรกที่ฉันได้เรียนรู้พื้นฐานต่าง ๆ ตั้งแต่การอ่านเขียนและคณิตศาสตร์ ครูประจำชั้นมีความอบอุ่นและใจดี ส่งเสริมให้เด็ก ๆ มีจิตใจที่ดีต่อกัน และการทำกิจกรรมต่าง ๆ ในโรงเรียนช่วยพัฒนาทักษะการทำงานเป็นทีมของฉันอย่างมาก</p>
    </div>

    <div class="school-item">
      <h3>2. โรงเรียนมัธยมศึกษาที่สอง</h3>
      <p>เมื่อขึ้นชั้นมัธยมศึกษา ฉันย้ายไปเรียนที่โรงเรียนมัธยมแห่งหนึ่งในเมือง ซึ่งมีการเรียนการสอนที่เข้มข้นและหลากหลายมากขึ้น เป็นที่ที่ฉันได้ค้นพบความสนใจในวิชาวิทยาศาสตร์และคณิตศาสตร์ นอกจากนี้ยังมีสโมสรและกิจกรรมเสริมต่าง ๆ ที่ช่วยให้ฉันได้เรียนรู้ทักษะใหม่ ๆ และทำให้มีความมั่นใจในตัวเองมากขึ้น</p>
    </div>

    <div class="school-item">
      <h3>3. โรงเรียนมัธยมศึกษาที่สาม</h3>
      <p>เมื่อเรียนจบจากโรงเรียนมัธยมแห่งนั้น ฉันตัดสินใจย้ายไปเรียนในโรงเรียนที่มีชื่อเสียงในด้านการเตรียมความพร้อมสำหรับการศึกษาต่อในระดับมหาวิทยาลัย โรงเรียนแห่งนี้มีคณาจารย์ที่มีประสบการณ์ และให้คำแนะนำที่ดีในการเลือกเส้นทางอาชีพของแต่ละคน</p>
    </div>

    <div class="school-item">
      <h3>4. ประสบการณ์การเรียนรู้ในมหาวิทยาลัย</h3>
      <p>เมื่อเข้าสู่มหาวิทยาลัย ฉันได้เรียนรู้มากมายเกี่ยวกับการทำงานเป็นทีม การจัดการเวลา และการพัฒนาทักษะส่วนบุคคลในระดับที่สูงขึ้น การเรียนที่มหาวิทยาลัยทำให้ฉันมีโอกาสได้พบปะกับเพื่อน ๆ และอาจารย์ที่มีความรู้ความสามารถหลากหลาย และการฝึกงานก็เป็นประสบการณ์ที่มีค่ามากในการเตรียมตัวเข้าสู่โลกการทำงาน</p>
    </div>
  </div>


  <div class="study-container">
    <div class="study-card" v-for="study in studys" :key="study.id">
      <div class="study-info">
        <img v-if="study.image" :src="study.image" alt="Study Image" class="study-image" />
        <h3>{{ study.name }}</h3>
        <p><strong>address :</strong> {{ study.detalsinfo }}</p>
        <p><strong>Phone :</strong> {{ study.phones }}</p>
        <p><strong>Year :</strong> {{ study.year }}</p>
        
        <div class="major-actions">
          <button @click="openEditStudy(study)">
            <span class="material-symbols-outlined">edit</span>
          </button>
          <button @click="deletestudy(study.id)">
            <span class="material-symbols-outlined">delete</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="add-info-container">
    <button @click="openAddStudy" class="add-info-btn">
      <span class="material-symbols-outlined">add</span>
    </button>
  </div>

  <!-- Modal Add -->
  <div v-if="isAddStudysOpen" class="modal">
  <div class="modal-content">
    <h2>Add</h2>
    <form @submit.prevent="addstudys">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="newStudys.name" required />

      <label for="detalsinfo">Address:</label>
      <input type="text" id="detalsinfo" v-model="newStudys.detalsinfo" required />

      <label for="phones">Phone:</label>
      <input type="text" id="phones" v-model="newStudys.phones" required />

      <label for="year">Year:</label>  <!-- เพิ่มปี -->
      <input type="text" id="year" v-model="newStudys.year" required />

      <label for="image">Image:</label>
      <input type="file" id="image" @change="onImageChange" />

      <button type="submit">Save Changes</button>
      <button @click="closeAddStudy" type="button">Cancel</button>
    </form>
  </div>
</div>

<!-- Modal Edit -->
<div v-if="isEditStudysOpen" class="modal">
  <div class="modal-content">
    <h2>Edit</h2>
    <form @submit.prevent="updatestudy">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="editedStudy.name" required />

      <label for="detalsinfo">Address:</label>
      <input type="text" id="detalsinfo" v-model="editedStudy.detalsinfo" required />

      <label for="phones">Phone:</label>
      <input type="text" id="phones" v-model="editedStudy.phones" required />

      <label for="year">Year:</label>  <!-- เพิ่มปี -->
      <input type="text" id="year" v-model="editedStudy.year" required />

      <label for="image">Image:</label>
      <input type="file" id="image" @change="onImageChangeForEdit" />

      <img v-if="editedStudy.image" :src="editedStudy.image" alt="Image Preview" class="image-preview" />

      <button type="submit">Save Changes</button>
      <button @click="closeEditStudy" type="button">Cancel</button>
    </form>
  </div>
</div>
</template>

<script>
import axios from 'axios';

const text = `สวัสดีค่ะ ทุกคน!

ฉันชื่อ นางสาวอัมพุชินี บุญรักษ์ หรือจะเรียกฉันว่า ธูป ก็ได้ค่ะ ฉันมาจากจังหวัดพิษณุโลก และตอนนี้กำลังศึกษาอยู่ชั้นปีที่ 2 มหาวิทยาลัยเกษตรศาตร์ คณะวิทยาศาสตร์ ศรีราชา สาขาวิทยาการคอมพิวเตอร์ ซึ่งเป็นสายเรียนที่ฉันหลงใหลและสนุกกับมันมาก

ฉันเป็นคนที่ชอบเรียนรู้สิ่งใหม่ ๆ และพัฒนาตัวเองอยู่เสมอ โดยเฉพาะในเรื่องของการเขียนโค้ด ในเวลาว่าง ฉันมักจะใช้เวลาไปกับการฟังเพลง อ่านหนังสือ และการฝึกเขียนโค้ด เพราะมันช่วยให้ฉันรู้สึกผ่อนคลายและได้แรงบันดาลใจใหม่ ๆ

ฉันเป็นคนที่ชอบพบปะผู้คนและแลกเปลี่ยนประสบการณ์ใหม่ ๆ เพราะฉะนั้น ถ้ามีโอกาสได้พูดคุยหรือทำงานร่วมกัน ก็หวังว่าจะได้เรียนรู้และแบ่งปันสิ่งดี ๆ ร่วมกันนะคะ

ยินดีที่ได้รู้จักทุกคน และหวังว่าเราจะได้รู้จักกันมากขึ้นในอนาคตนะคะ 😊`;

    let index = 0;
    function typeText() {
        if (index < text.length) {
          let introElement = document.getElementById("intro");
          introElement.innerHTML += text[index] === "\n" ? "<br>" : text[index];
            // document.getElementById("intro").innerText += text[index];
            index++;
            setTimeout(typeText, 50); // ปรับความเร็วการพิมพ์ (50ms ต่อ 1 ตัวอักษร)
        }
    }

    window.onload = typeText;

    

export default {
  data() {
    return {
      studys: [],
      newStudys: { name: '', detalsinfo: '', phones: '', image: null ,year: '' },
      editedStudy: { id: null, name: '', detalsinfo: '', phones: '', image: null,year: ''  },
      isAddStudysOpen: false,
      isEditStudysOpen: false
    };
  },

  created() {
    this.getstudys();
  },

  methods: {
    async getstudys() {
      try {
        const response = await axios.get('http://localhost:3000/studys');
        this.studys = response.data;
      } catch (error) {
        console.error('Error fetching studys:', error);
      }
    },

    openAddStudy() {
      this.isAddStudysOpen = true;
    },

    closeAddStudy() {
      this.isAddStudysOpen = false;
      this.newStudys = { name: '', detalsinfo: '', phones: '', image: null };
    },

    addstudys() {
      axios.post('http://localhost:3000/studys', this.newStudys)
        .then(response => {
          this.studys.push(response.data);
          this.closeAddStudy();  // Close modal after adding
        })
        .catch(error => {
          console.error("There was an error adding the data:", error);
        });
    },

    openEditStudy(study) {
      this.isEditStudysOpen = true;
      this.editedStudy = { ...study }; // copy study into editedStudy
    },

    closeEditStudy() {
      this.isEditStudysOpen = false;
      this.editedStudy = { id: null, name: '', detalsinfo: '', phones: '', image: null }; // Reset editedStudy
    },

    updatestudy() {
      if (this.editedStudy.id === null) {
        console.error("Error: No id to update.");
        alert("Error: No id to update.");
        return;
      }

      axios.put(`http://localhost:3000/studys/${this.editedStudy.id}`, this.editedStudy)
        .then(response => {
          const index = this.studys.findIndex(study => study.id === this.editedStudy.id);
          if (index !== -1) {
            this.studys[index] = response.data;
          }
          this.closeEditStudy();  // Close modal after updating
        })
        .catch(error => {
          console.error("There was an error updating the data:", error);
        });
    },

    deletestudy(id) {
      if (!id) {
        console.error("Error: No id to delete.");
        return;
      }

      axios.delete(`http://localhost:3000/studys/${id}`)
        .then(response => {
          this.studys = this.studys.filter(study => study.id !== id);
        })
        .catch(error => {
          console.error("There was an error deleting the data:", error);
        });
    },

    onImageChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.newStudys.image = reader.result; // Set the image data to newStudys
        };
        reader.readAsDataURL(file); // Convert file to data URL for preview
      }
    },

    onImageChangeForEdit(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.editedStudy.image = reader.result; // Set the image data to editedStudy
        };
        reader.readAsDataURL(file); // Convert file to data URL for preview
      }
    }
  }
};
</script>
<style scoped>

header {
  text-align: left;
  margin-bottom: 40px;
 }
 .hd{
    font-size: 3rem;
    font-weight: bold;
    background: linear-gradient(to right, #48c9b0, #c500f7); 
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    margin-bottom: 2rem;
  }
.school-description {
  
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
  background-color: #444;  /* พื้นหลังของเนื้อหาจะเข้มขึ้นเพื่อให้ข้อความขาวเด่น */
  border-radius: 8px;
  box-shadow: 0 0px 10px rgb(255, 255, 255);
}

.school-description h2 {
  text-align: center;
  color: #1abc9c;  /* ฟอนต์สีขาว */
  font-size: 2rem;
  margin-bottom: 20px;
  font-weight: 600;
  letter-spacing: 1px;
}

.school-item {
  margin-bottom: 20px;
}

.school-item h3 {
  color: #1abc9c;  /* สีของหัวข้อยังคงเป็นสีเขียวอ่อน */
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 10px;
}

.school-item p {
  font-size: 1rem;
  line-height: 1.6;
  color: #fff;  /* เปลี่ยนสีข้อความเป็นขาว */
  text-align: justify;
  margin-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
}

.school-item:last-child {
  margin-bottom: 0;
}

/* เพิ่มสไตล์เมื่อโฮเวอร์ */
.school-item h3:hover {
  /* color: #3498db; */
  cursor: pointer;
  transition: color 0.3s;
}

.school-description {
  animation: fadeIn 1s ease-in-out;
}

/* Animation สำหรับการแสดงผล */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
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
.container {
  padding: 20px;
  border-radius: 10px;
  /* box-shadow: 0px 10px 20px rgb(255, 255, 255);a */
  margin: 20px;
  /* background-color: #ffffff28; */
  }
.typing-text {
  font-size: 18px;
  white-space: pre-line;
  padding-right: 5px;
  overflow: hidden;
  display: inline-block;
  color: #ffffff;
  
  }
  .major-actions {
    margin-top: 10px;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }
.study-image {
  width: 30%; /* ย่อขนาดตามความกว้างของการ์ด */
  height: 30%; /* ปรับความสูงอัตโนมัติเพื่อรักษาสัดส่วน */
  object-fit: cover;
  border-radius: 20px;
}

.image-preview {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin: 10px auto;
  display: block; /* ให้เป็น block เพื่อจัดกลาง */
}
  .add-info-container {
  display: flex;
  justify-content: center;
  /* margin-bottom: 20px; */
}

.add-info-btn {
  color: rgb(0, 0, 0);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-top: 30px; */
  /* padding: 10px 20px; */
  background:#ffffff;
}
  button {
    cursor: pointer;
    /* background: #007bff; */
    color: rgb(0, 0, 0);
    border: none;
    padding: 4px 6px;
    border-radius: 50px;
  }
  button:hover {
    background: #1abc9c;
  }

/* h1{
  color: #1abc9c;
  display: flex;
  align-items: center;
  flex-direction: column;
} */
.study-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* สร้าง 2 คอลัมน์ */
  gap: 20px;
  /* padding: 20px; */
  margin: 20px;
  justify-items: center;
}

.study-card {
  margin: 10px;
  background-color: #ffffff28;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0px 0px 10px rgb(255, 255, 255);
  transition: transform 0.3s ease-in-out;
}

.study-card:hover {
  transform: scale(1.05); /* ขยายเล็กน้อยเมื่อ hover */
}

.school-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.study-info {
  padding: 15px;
  text-align: center;
}

.study-info h3 {
  font-size: 1.5rem;
  color: #1abc9c;
  margin-bottom: 10px;
}

.study-info p {
  font-size: 1rem;
  color: #ffffff;
  margin: 5px 0;
}


.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: rgb(235, 235, 235);
  padding: 20px;
  border-radius: 10px;
  width: 300px;
}
form input {
  width: 100%;
  padding: 8px;
  margin: 5px 0;
  border: 1px solid  #000000f6;
  background: rgb(235, 235, 235);
  border-radius: 10px;
}
form button {
  width: 100%;
  padding: 8px;
  margin: 5px 0;
  border: none;
  background: #929292;
  color: rgb(0, 0, 0);
  border: 1px solid  #000000f6;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
</style>