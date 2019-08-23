// CODE here for your Lambda Classes


class Person {
    constructor(base) {
      this.name = base.name;
      this.age = base.age;
      this.location = base.location;
      this.gender = base.gender;
    }
    speak() {
      console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`);
    }
  }
  
  class Instructor extends Person {
    constructor(atts) {
      super(atts);
      this.specialty = atts.specialty;
      this.favLanguage = atts.favLanguage;
      this.catchPhrase = atts.catchPhrase;
    }
    demo(subject) {
      console.log(`Today we are learning ${subject}.`);
    }
    grade(student, subject) {
      console.log(`${student.name} recieves a perfect score on ${subject}!`);
    }
    
  }
  
  
  class Student extends Person {
    constructor(atts) {
      super(atts);
      this.previousBackground = atts.previousBackground;
      this.className = atts.className;
      this.favSubjects = atts.favSubjects;
      this.grade = atts.grade;
    }
    listSubjects() {
      for (let i = 0; i < this.favSubjects.length; i++) {
        console.log(this.favSubjects[i]);
      }
    }
    PRAssignment(subject) {
      console.log(`${this.name} assignment for PR ${subject}`);
    }
    sprintChallenge(subject) {
      console.log(`${this.name} started sprint challenge for ${subject}`);
    }
    graduate() {
      if (this.grade >= 70) {
        console.log(
          `${this.name} has just graduated from ${
            this.className
          } with the grade ${this.grade}!`
        );
      } 
    }
  }
  
  /* THIS IS PROJECT MANGERS/ INSTRUCTORS
  */
  
  class ProjectManagers extends Instructor {
    constructor(atts) {
      super(atts);
      this.gradClassName = atts.gradClassName;
      this.favInstructor = atts.favInstructor;
      this.catchPhrase = atts.catchPhrase;
    }
    standUp(channel) {
      console.log(`${this.name} tells ${channel}, @channel letssss gettt ittt`);
    }
    debugsCode(student, subject) {
      console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
  }
  
  const britt = new Instructor({
    name: "Britt",
    location: "Canadaaaaa",
    age: 23,
    gender: "female",
    favLanguage: "JavaScript",
    specialty: "HTML",
    catchPhrase: "We don't have time"
  });
  
  const dan = new Instructor({
    name: "Dan",
    location: "Inside the web",
    age: 12,
    gender: "male",
    favLanguage: "CSS",
    specialty: "JavaScript",
    catchPhrase: "If I can spell right now"
  });
  
  
  const carlos = new ProjectManagers({
    name: "Carlos",
    location: "CHICAGO",
    age: 14,
    gender: "male",
    favLanguage: "React",
    specialty: "HTML",
    catchPhrase: "I cried during my sprints",
    gradClassName: "WEBPT7",
    favInstructor: "Dan"
  });
  
  const squidward = new ProjectManagers({
    name: "Squidward",
    location: "Deep blue sea",
    age: 103,
    gender: "not specified",
    favLanguage: "None",
    specialty: "None",
    catchPhrase: "I hate sponges",
    gradClassName: "WEB23",
    favInstructor: "CARLOS"
  });
  
  /* tHiS iS sTudEnTs
  */

  const sky = new Student({
      name: "Sky",
      location: "Portland, Oregon :)",
      age: 22,
      gender: "male",
      previousBackground: "Backend",
      className: "WEB23",
      grade: 99,
      favSubjects: ["HTML, Javascript, Python"]
    });
  
  const brandy = new Student({
    name: "Brandy",
    location: "idk somewhere in tennesee or somethin",
    age: "12 and 3 months",
    gender: "female",
    previousBackground: "CSS",
    className: "WEB23",
    grade: 100,
    favSubjects: ["CSS, HTML, React"]
  });
  
  /* CONSOLES */
  
  dan.speak();
  dan.demo("Python");
  dan.grade(sky, "Python");
  console.log(dan.specialty);
  console.log(dan.favLanguage);
  console.log(dan.catchPhrase);
  
  //BriTT

  britt.speak();
  britt.demo("HTML");
  britt.grade(brandy, "HTML");
  console.log(britt.specialty);
  console.log(britt.favLanguage);
  console.log(britt.catchPhrase);
  
  //SkY

  sky.speak();
  sky.sprintChallenge("Python");
  sky.PRAssignment("Python");
  sky.listSubjects();
  console.log(sky.previousBackground);
  console.log(sky.className);
  console.log(sky.age);
  
  // bRaNdY

  brandy.speak();
  brandy.sprintChallenge("CSS");
  brandy.PRAssignment("CSS");
  brandy.listSubjects();
  console.log(brandy.previousBackground);
  console.log(brandy.className);
  console.log(brandy.age);
  
  //carlos

  carlos.speak();
  carlos.demo("T.V");
  carlos.grade(sky, "T.V");
  carlos.standUp("Web23");
  carlos.debugsCode(brandy, "the animal rights to vote");
  console.log(carlos.specialty);
  console.log(carlos.catchPhrase);
  console.log(carlos.favLanguage);
  console.log(carlos.favInstructor);
  console.log(carlos.gradClassName);
  

  //sQUiDwaRD

  squidward.speak();
  squidward.demo("Pineapple");
  squidward.grade(sky, "Pineapple's!!!!");
  squidward.standUp("Grey's Anatomy");
  squidward.debugsCode(brandy, "the Human digestive system");
  console.log(squidward.specialty);
  console.log(squidward.catchPhrase);
  console.log(squidward.favLanguage);
  console.log(squidward.favInstructor);
  console.log(squidward.gradClassName);
  
  