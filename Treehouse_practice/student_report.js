var message = '';
var student;

function print(message){
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

funtion getStudentReport( student ){
  var report = '<p>Track: ' + student.track + '</p>';
  report += '<p>Points: ' + student.points + '</p>';
  report += '<p>Achievements: ' + student.Achievements + '</p>' ;
  return report;
}

while (true){
  search = prompt('Search ...')
  if (search === Null || search.toLowerCase() === 'quit'){
    break;
  }

}

for (var i = 0; i < student.length; i += 1){
  student = student[i];
  if ( student.name === search) {
    message = getStudentReport(student);
    print(message);
    }
  }
}
