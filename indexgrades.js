function getGrade() {
    // Get the value of the input element
    var mark = document.getElementById('mark').value;
  
    // Convert the input string to a number
    mark = Number(mark);
  
    // Check the range of the mark and output the corresponding grade
    if (mark >= 80) {
      document.getElementById('grade').value = "A";
    } else if (mark >= 60) {
      document.getElementById('grade').value = "B";
    } else if (mark >= 50) {
      document.getElementById('grade').value = "C";
    } else if (mark >= 40) {
      document.getElementById('grade').value = "D";
    } else {
      document.getElementById('grade').value = "E";
    }
  }
  
  window.addEventListener('load', function() {
    document.getElementById('button').addEventListener('click', getGrade);
  });
  