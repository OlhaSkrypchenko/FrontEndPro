function Student() {
  var cource = "Front-End";
  var teacher = "Petr Kucher";

  this.getInfo = function() {
    console.log(`You study at ${cource} course. Your teacher is ${teacher}`);
  };
}

let student1 = new Student();
student1.write = function() {
  console.log("Congrats!!!You can write.");
};

let student2 = new Student();
student2.read = function() {
  console.log("Congrats!!!You can read.");
};

student1.getInfo();
student1.write();

student2.getInfo();
student2.read();