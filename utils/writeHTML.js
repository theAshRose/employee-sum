let concatHTML;

function writeHTML(data) {
  concatHTML = `<head>
    <meta charset="UTF-8">
    <title>Employee Evaluation</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
   </head>
   <body style="background-image: linear-gradient(to bottom, #01012b, #005678, #05d9e8, #d1f7ff); min-height: 100vh;">
    <header class="jumbotron" style = "background-color: #01012b; color: #d1f7ff;">
      <h1 class="d-flex justify-content-center display-3">Employee info</h1>
    </header>
    <div class="container col-8" id="daddy" style="margin-top: 100px;">
    <div class="justify-content-center row">
   `
  data.forEach(function (unit) {
    if (unit.getRole() === "Manager") {
      concatHTML += unit.getHTML();
    }
    if (unit.getRole() === "Engineer") {
      concatHTML += unit.getHTML();
    }
    if (unit.getRole() === "Intern") {
      concatHTML += unit.getHTML();
    }
  })
  concatHTML += `<footer style="min-height:200px;">
  </footer>`
  return concatHTML;
}

module.exports = writeHTML;