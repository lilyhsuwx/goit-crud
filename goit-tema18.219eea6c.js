let e=document.querySelector(".list"),t=document.getElementById("get-students-btn"),s=document.getElementById("students-table"),n=document.getElementById("add-student-form"),l=null;function d(){fetch("http://localhost:3000/students").then(e=>e.json()).then(t=>{e.innerHTML=t.map(({id:e,name:t,age:s,course:n,skills:l,email:d,isEnrolled:a})=>`<tr id="${e}">
                    <td class="student-id">${e}</td>
                    <td class="student-name">${t}</td>
                    <td class="student-age">${s}</td>
                    <td class="student-course">${n}</td>
                    <td class="student-skills">${l}</td>
                    <td class="student-email">${d}</td>
                    <td class="student-status">${a?"Навчається":"Не навчається"}</td>
                    <td>
                        <button class="edit" type="button">Edit</button>
                        <button class="delete" type="button">Delete</button>
                    </td>
                </tr>`).join("")})}t.addEventListener("click",()=>{d(),s.style.display="table"}),n.addEventListener("submit",e=>{e.preventDefault();let t={name:n.elements.name.value,age:n.elements.age.value,course:n.elements.course.value,skills:n.elements.skills.value,email:n.elements.email.value,isEnrolled:n.elements.isEnrolled.checked};if(l){var s;(s=l,fetch(`http://localhost:3000/students/${s}`,{method:"PUT",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(e=>e.json())).then(()=>{d(),n.reset(),l=null})}else fetch("http://localhost:3000/students",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(e=>e.json()).then(()=>{d(),n.reset()})}),document.addEventListener("click",e=>{if(e.target.classList.contains("edit")){let t=e.target.closest("tr");l=t.id,n.elements.name.value=t.querySelector(".student-name").textContent,n.elements.age.value=t.querySelector(".student-age").textContent,n.elements.course.value=t.querySelector(".student-course").textContent,n.elements.skills.value=t.querySelector(".student-skills").textContent,n.elements.email.value=t.querySelector(".student-email").textContent,n.elements.isEnrolled.checked="Навчається"===t.querySelector(".student-status").textContent;return}if(e.target.classList.contains("delete")){var t;(t=e.target.closest("tr").id,fetch(`http://localhost:3000/students/${t}`,{method:"DELETE"})).then(()=>{d()});return}});
//# sourceMappingURL=goit-tema18.219eea6c.js.map
