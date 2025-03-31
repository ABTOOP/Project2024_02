
<!-- <template>

<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">

<div class="education">
  <h1>The complete academic performance achieved throughout university education.</h1>
  <li>Success in education is not solely measured by grades, but by the knowledge gained, the skills developed, and the personal growth experienced along the way.</li>
  <li>Education is the foundation that shapes our future, and the results of our academic journey are the stepping stones that guide us toward achieving our goals and realizing our dreams.</li>
  <li>While academic results can open doors to future opportunities, it is the character, critical thinking, and adaptability developed through education that truly defines one's success.</li>

  <button @click="openAddModal" class="add-info-btn"><span class="material-symbols-outlined">add</span></button>
  <div class="gpax">
    <h2>เกรดเฉลี่ยรวม (GPAX): {{ gpax }}</h2>
  </div>
  
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>รหัสวิชา</th>
          <th>ชื่อวิชา</th>
          <th>หน่วยกิจ</th>
          <th>เกรด (GPAX)</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(major,index) in majors" :key="major.id">
          <td>{{ index+1}}</td>
          <td>{{ major.course_code }}</td>
          <td>{{ major.name }}</td>
          <td>{{ major.credit }}</td>
          <td>{{ major.gpax }}</td>
          <td class="major-actions">
            <button @click="openEditModal(major)"><span class="material-symbols-outlined">edit</span></button>
            <button @click="deletemajor(major.id)"><span class="material-symbols-outlined">delete</span></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div v-if="isAddModalOpen" class="modal">
  <div class="modal-content">
    <h2>Add</h2>
    <form @submit.prevent="addmajors">
      <label for="course_code">รหัสวิชา:</label>
      <input type="text" id="course_code" v-model="newMajor.course_code" required />

      <label for="name">ชื่อวิชา:</label>
      <input type="text" id="name" v-model="newMajor.name" required />

      <label for="credit">หน่วยกิจ:</label>
      <input type="number" id="credit" v-model="newMajor.credit" max="4" required />

      <label for="gpax">เกรด (GPAX):</label>
      <input type="number" step="0.01" id="gpax" v-model="newMajor.gpax" max="4" required />

      <button type="submit">Confirm</button>
      <button @click="closeAddModal" type="button">Cancel</button>
    </form>
  </div>
</div>


<div v-if="isEditModalOpen" class="modal">
  <div class="modal-content">
    <h2>Edit</h2>
    <form @submit.prevent="updateMajor">
      <label for="course_code">รหัสวิชา:</label>
      <input type="text" id="course_code" v-model="editedmajor.course_code" required />

      <label for="name">ชื่อวิชา:</label>
      <input type="text" id="name" v-model="editedmajor.name" required />

      <label for="credit">หน่วยกิจ:</label>
      <input type="number" id="credit" v-model="editedmajor.credit" max="4" required />

      <label for="gpax">เกรด (GPAX):</label>
      <input type="number" step="0.01" id="gpax" v-model="editedmajor.gpax" max="4" required />

      <button type="submit">Save Changes</button>
      <button @click="closeEditModal" type="button">Cancel</button>
    </form>
  </div>
</div>

</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      majors: [],
      newMajor: { course_code: '', name: '', credit: '', gpax: '' },
      editedmajor: { id: null, course_code: '', name: '', credit: '', gpax: '' },
      isAddModalOpen: false,
      isEditModalOpen: false
    };
  },

  created() {
    this.getmajors();
  },

  methods: {

    async getmajors() {
      try {
        const response = await axios.get('http://localhost:3000/majors');
        this.majors = response.data;
        this.sortMajorsById();
      } catch (error) {
        console.error('Error fetching majors:', error);
      }
    },

    openAddModal() {
      this.isAddModalOpen = true;
    },

    closeAddModal() {
      this.isAddModalOpen = false;
      this.newMajor = { course_code: '', name: '', credit: '', gpax: '' };
    },

    addmajors() {

      const isCourseCodeExists = this.majors.some(major => major.course_code === this.newMajor.course_code);

      if (isCourseCodeExists) {
        this.errorMessage = 'Duplicate';
        alert(this.errorMessage);
        return;
      }
      axios.post('http://localhost:3000/majors', this.newMajor)
        .then(response => {
          this.majors.push(response.data);
          this.closeAddModal();
          this.sortMajorsById();
        })
        .catch(error => {
          console.error("There was an error adding the data:", error);
        });
    },

    openEditModal(major) {
      this.isEditModalOpen = true;
      this.editedmajor = { ...major }; 
    },

    closeEditModal() {
      this.isEditModalOpen = false;
      this.editedmajor = { id: null, course_code: '', name: '', credit: '', gpax: '' };
    },

    updateMajor() {
      

      const isCourseCodeExists = this.majors.some(major => major.course_code === this.editedmajor.course_code && major.id !== this.editedmajor.id);

      if (isCourseCodeExists) {
        this.errorMessage = 'Duplicate';
        alert(this.errorMessage);
        return;
      }

      if (this.editedmajor.id === null) {
        console.error("Error: No id to update.");
        alert(this.errorMessage);
        return;
      }

      axios.put(`http://localhost:3000/majors/${this.editedmajor.id}`, this.editedmajor)
        .then(response => {
          const index = this.majors.findIndex(major => major.id === this.editedmajor.id);
          if (index !== -1) {
            this.majors[index] = response.data; 
          }
          this.closeEditModal();
          this.sortMajorsById();
        })
        .catch(error => {
          console.error("There was an error updating the data:", error);
        });
    },

    deletemajor(id) {
      if (!id) {
        console.error("Error: No id to delete.");
        return;
      }

      axios.delete(`http://localhost:3000/majors/${id}`)
        .then(response => {
          this.majors = this.majors.filter(major => major.id !== id);
          this.sortMajorsById();
        })
        .catch(error => {
          console.error("There was an error deleting the data:", error);
        });
    },

    sortMajorsById() {
      this.majors.sort((a, b) => a.id - b.id);
    },
    calculateGPAX() {
      const totalPoints = this.majors.reduce((acc, major) => acc + (major.gpax * major.credit), 0);
      const totalCredits = this.majors.reduce((acc, major) => acc + major.credit, 0);

      return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;
    }
  },

  computed: {
    gpax() {
      return this.calculateGPAX();
    }
  }
};
</script>
  
<style scoped>

h2{
  color: #ffffff;
  text-shadow:#00fd22
}
.gpax{
  text-align: center;
  align-items: center;
}
li {
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
  margin-bottom: 10px;
  color: #ffffff;
  margin-left: 50px;
}

.add-info-btn {
  top: 50px;  
  color: rgb(0, 0, 0);
  padding: 10px 10px;
  border: none; 
  margin-top: 5px;
  margin-left: 30px;
  border-radius: 50%;
  align-items: center;
  cursor: pointer;
}

.modal-content h2{
  text-align: center;
  color: #000000;
  font-size: 24px;
  margin-bottom: 20px;
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
.table-container {
  margin-top: 20px;
  max-height: 40vh;
  overflow-y: auto; 
}
table {
  margin-left: 35px;
  width: 95%;
  border-collapse: collapse;
}
h1 {
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  color: #ffffff;
  font-size: 20px;
  margin-bottom: 20px;
}
tr:hover {
  background-color: rgba(255, 255, 255, 0.041);
}
th,td {
  text-align: center;
  padding: 3px;
  border-radius: 20px;
}
th {
  background-color: #007004;
  text-align: center; 
  color: white;
  font-size: 16px;
  border-radius: 20px;
  padding: 5px 0;
  box-shadow: 0 4px 10px rgb(250, 247, 247);
}
td {
  font-size: 14px;
  color: #fff;
}
td:hover {
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);  
}
tr:hover td {
  color: #00ff00;
}
.major-actions button {
  border: none;
  padding: 5px 5px;
  margin-left: 15px;
  border-radius: 50px;
  cursor: pointer;
}
.material-symbols-outlined {
  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: center;

}
button:hover {
  background-color: #00ff00;
}
button:focus {
  outline: none;
}
  
</style>
   -->

   <template>
    <header>
      <div>
        <h1 class="hd">ผลการเรียนที่ผ่านมา</h1>
      </div>
    </header>
    <div class="education">
      <h1>The complete academic performance achieved throughout university education.</h1>
      <li>Success in education is not solely measured by grades, but by the knowledge gained, the skills developed, and the personal growth experienced along the way.</li>
      <li>Education is the foundation that shapes our future, and the results of our academic journey are the stepping stones that guide us toward achieving our goals and realizing our dreams.</li>
      <li>While academic results can open doors to future opportunities, it is the character, critical thinking, and adaptability developed through education that truly defines one's success.</li>
  
      <div class="gpax">
        <h2>เกรดเฉลี่ยรวม (GPAX): {{ gpax }}</h2>
      </div>
  
      <div class="accordion-container" >
        <details v-for="major in majors" :key="major.id" class="accordion">
          <summary class="accordion-header">
            <span class="course-code">{{ major.course_code }}</span><span class="course-majorname"> - {{ major.name }}</span>
          </summary>
          <div class="accordion-body">
            <p><strong>- หน่วยกิจ:</strong> {{ major.credit }}</p>
            <p><strong>- เกรด (GPAX):</strong> {{ major.gpax }}</p>
            <div class="major-actions">
              <button @click="openEditModal(major)">
                <span class="material-symbols-outlined">edit</span>
              </button>
              <button @click="deletemajor(major.id)">
                <span class="material-symbols-outlined">delete</span>
              </button>
            </div>
          </div>
        </details>
      </div>
    </div>

    <div class="add-info-container">
        <button @click="openAddModal" class="add-info-btn">
          <span class="material-symbols-outlined">add</span>
        </button>
    </div>
    <!-- Modal for adding major -->
    <div v-if="isAddModalOpen" class="modal">
      <div class="modal-content">
        <h2>Add</h2>
        <form @submit.prevent="addmajors">
          <label for="course_code">รหัสวิชา:</label>
          <input type="text" id="course_code" v-model="newMajor.course_code" required />
  
          <label for="name">ชื่อวิชา:</label>
          <input type="text" id="name" v-model="newMajor.name" required />
  
          <label for="credit">หน่วยกิจ:</label>
          <input type="number" id="credit" v-model="newMajor.credit" max="4" required />
  
          <label for="gpax">เกรด (GPAX):</label>
          <input type="number" step="0.01" id="gpax" v-model="newMajor.gpax" max="4" required />
  
          <button type="submit">Confirm</button>
          <button @click="closeAddModal" type="button">Cancel</button>
        </form>
      </div>
    </div>
  
    <!-- Modal for editing major -->
    <div v-if="isEditModalOpen" class="modal">
      <div class="modal-content">
        <h2>Edit</h2>
        <form @submit.prevent="updateMajor">
          <label for="course_code">รหัสวิชา:</label>
          <input type="text" id="course_code" v-model="editedmajor.course_code" required />
  
          <label for="name">ชื่อวิชา:</label>
          <input type="text" id="name" v-model="editedmajor.name" required />
  
          <label for="credit">หน่วยกิจ:</label>
          <input type="number" id="credit" v-model="editedmajor.credit" max="4" required />
  
          <label for="gpax">เกรด (GPAX):</label>
          <input type="number" step="0.01" id="gpax" v-model="editedmajor.gpax" max="4" required />
  
          <button type="submit">Save Changes</button>
          <button @click="closeEditModal" type="button">Cancel</button>
        </form>
      </div>
    </div>
  </template>
  
<script>
import axios from 'axios';

export default {
  data() {
    return {
      majors: [],
      newMajor: { course_code: '', name: '', credit: '', gpax: '' },
      editedmajor: { id: null, course_code: '', name: '', credit: '', gpax: '' },
      isAddModalOpen: false,
      isEditModalOpen: false
    };
  },

  created() {
    this.getmajors();
  },

  methods: {
    async getmajors() {
      try {
        const response = await axios.get('http://localhost:3000/majors');
        this.majors = response.data;
        this.sortMajorsById();
      } catch (error) {
        console.error('Error fetching majors:', error);
      }
    },

    openAddModal() {
      this.isAddModalOpen = true;
    },

    closeAddModal() {
      this.isAddModalOpen = false;
      this.newMajor = { course_code: '', name: '', credit: '', gpax: '' };
    },

    addmajors() {

      const isCourseCodeExists = this.majors.some(major => major.course_code === this.newMajor.course_code);

      if (isCourseCodeExists) {
        this.errorMessage = 'Duplicate';
        alert(this.errorMessage);
        return;
      }
      axios.post('http://localhost:3000/majors', this.newMajor)
        .then(response => {
          this.majors.push(response.data);
          this.closeAddModal();
          this.sortMajorsById();
        })
        .catch(error => {
          console.error("There was an error adding the data:", error);
        });
    },

    openEditModal(major) {
      this.isEditModalOpen = true;
      this.editedmajor = { ...major }; 
    },

    closeEditModal() {
      this.isEditModalOpen = false;
      this.editedmajor = { id: null, course_code: '', name: '', credit: '', gpax: '' };
    },

    updateMajor() {
      

      const isCourseCodeExists = this.majors.some(major => major.course_code === this.editedmajor.course_code && major.id !== this.editedmajor.id);

      if (isCourseCodeExists) {
        this.errorMessage = 'Duplicate';
        alert(this.errorMessage);
        return;
      }

      if (this.editedmajor.id === null) {
        console.error("Error: No id to update.");
        alert(this.errorMessage);
        return;
      }

      axios.put(`http://localhost:3000/majors/${this.editedmajor.id}`, this.editedmajor)
        .then(response => {
          const index = this.majors.findIndex(major => major.id === this.editedmajor.id);
          if (index !== -1) {
            this.majors[index] = response.data; 
          }
          this.closeEditModal();
          this.sortMajorsById();
        })
        .catch(error => {
          console.error("There was an error updating the data:", error);
        });
    },

    deletemajor(id) {
      if (!id) {
        console.error("Error: No id to delete.");
        return;
      }

      axios.delete(`http://localhost:3000/majors/${id}`)
        .then(response => {
          this.majors = this.majors.filter(major => major.id !== id);
          this.sortMajorsById();
        })
        .catch(error => {
          console.error("There was an error deleting the data:", error);
        });
    },

    sortMajorsById() {
      this.majors.sort((a, b) => a.id - b.id);
    },
    calculateGPAX() {
      const totalPoints = this.majors.reduce((acc, major) => acc + (major.gpax * major.credit), 0);
      const totalCredits = this.majors.reduce((acc, major) => acc + major.credit, 0);

      return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;
    }
  },

  computed: {
    gpax() {
      return this.calculateGPAX();
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
  .h1{
    
  }
.course-majorname {
  font-weight: bold;
  color: #ffffff;
}
summary{
  color: #000000;
}
  .add-info-container {
  display: flex;
  justify-content: center;
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
}
.education {
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  color: #ffffff;
  font-size: 20px;
  margin-bottom: 20px;
}
h1{
  font-family: 'Courier New', Courier, monospace;
  color: #1abc9c;
}
li {
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
  margin-bottom: 10px;
  color: #ffffff;
  margin-left: 50px;
  text-align: center;
  margin-top: 20px;
}
  h2{
  color: #1abc9c;
  /* text-shadow:#00fd22 */
}
.gpax{
  text-align: center;
  align-items: center;
}
  .accordion-container {
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
  gap: 20px;
  /* justify-content:space-between; */
  /* align-items: center; */
  /* text-align: center; */

    /* max-width: 600px; */
  /* margin: 20px auto; */
  padding: 20px;
  justify-content: center;
  text-align: left; 
  }
  
  .accordion {
    /* border-radius: 8px;
    margin-bottom: 10px;
    overflow: hidden; */
    /* background: white; */
  border-radius: 12px;
  box-shadow: 0px 0px 10px rgb(255, 255, 255);
  overflow: hidden;
  /* transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out; */
  }
  .accordion:hover {
  transform: translateY(3px); /* ขยับขึ้นเล็กน้อยเวลา hover */
  box-shadow: #1abc9c;
}
  
  .accordion-header {
    /* background: #6e6e6e; */
    background: linear-gradient(135deg, #383838, #383838); /* เพิ่มสีไล่ระดับ */
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    /* border-bottom: 2px solid rgb(255, 255, 255); */
  }
  
  .accordion-body {
    color: #ffffff;
    padding: 10px;
    /* background: #ffffffa6; */
    background: linear-gradient(135deg, #4e4e4e, #4e4e4e);
    font-weight: bold;
  }
  
  .course-code {
    font-weight: bold;
    color: #1abc9c;
  }
  
  .major-actions {
    margin-top: 10px;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
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
  .modal-content h2{
  text-align: center;
  color: #000000;
  font-size: 24px;
  margin-bottom: 20px;
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
  