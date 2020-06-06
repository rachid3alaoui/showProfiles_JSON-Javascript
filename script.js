document.querySelector('button').addEventListener('click', loadData);

function loadData(event) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'students.json', true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      const number = document.getElementById('number').value;

      if (number === '') {
        alert('Give a number of students.');
      } else if (number > 6 || number < 0) {
        alert('Number out of range [1,6]');
      } else {
        const students = JSON.parse(xhr.responseText);
        let output = '';
        // console.log(students);
        for (let i = 0; i < number; i++) {
          output += `
          Student ${i} : <br>
          <li>ID: ${students[i].id}</li>
          <li>NAME: ${students[i].name}</li>
          <li>GRADE: ${students[i].grade}</li> 
          `;
          document.querySelector('.output').innerHTML = output;
        }
      }
    }
  };

  xhr.send();
  event.preventDefault();
}
