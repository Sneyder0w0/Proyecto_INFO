// Singleton para el puntaje
class Score {
  constructor() {
      if (Score.instance) {
          return Score.instance;
      }
      this.points = 0;
      Score.instance = this;
  }

  addPoint() {
      this.points=this.points+2;
  }

  getScore() {
      return this.points;
  }
}

//Adapter para adaptar todas las respuestas a un formato en especifico (en este caso minusculas)
class AnswerAdapter {
  static formato(respuesta) {
      return respuesta.trim().toLowerCase();
  }
}

//Ver el puntaje
function añadirScore() {
  const score = new Score();
  document.getElementById("score").textContent = score.getScore();
  }

//Evaluación de cada respuesta
function enviar1() {
  let pregunta1 = document.getElementById("pre1").value;
  const answer = AnswerAdapter.formato(pregunta1);
  if (answer === "madrid") {
      const score = new Score();
      score.addPoint();
      añadirScore();
      document.getElementById("btn1").style.display = "none";
  }
  document.getElementById("btn1").style.display = "none";
}

function enviar2() {
  let pregunta2 = document.getElementById("pre2").value;
  const answer = AnswerAdapter.formato(pregunta2);
  if (answer === "rafael") {
      const score = new Score();
      score.addPoint();
      añadirScore();
      document.getElementById("btn2").style.display = "none";
  }
  document.getElementById("btn2").style.display = "none";
}

function enviar3() {
  let pregunta3 = document.getElementById("pre3").value;
  const answer = AnswerAdapter.formato(pregunta3);
  if (answer === "suecia") {
      const score = new Score();
      score.addPoint();
      añadirScore();
      document.getElementById("btn3").style.display = "none";
  }
  document.getElementById("btn3").style.display = "none";
}

function enviar4() {
  let pregunta4 = document.getElementById("pre4").value;
  const answer = AnswerAdapter.formato(pregunta4);
  if (answer === "leonardo da vinci") {
      const score = new Score();
      score.addPoint();
      añadirScore();
      document.getElementById("btn4").style.display = "none";
  }
  document.getElementById("btn4").style.display = "none";
}

function enviar5() {
  let pregunta5 = document.getElementById("pre5").value;
  const answer = AnswerAdapter.formato(pregunta5);
  if (answer === "rusia") {
      const score = new Score();
      score.addPoint();
      añadirScore();
      document.getElementById("btn5").style.display = "none";
  }
  document.getElementById("btn5").style.display = "none";
}