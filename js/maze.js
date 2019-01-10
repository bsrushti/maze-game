const withTag = function(tag, content) {
  return ["<", tag, ">", content, "</", tag, ">"].join("");
};

const createTable = function(document, size) {
  let tableRow = [];
  let td = "";
  for (let rowIndex = 0; rowIndex < size; rowIndex++) {
    for (let columnIndex = 0; columnIndex < size; columnIndex++) {
      td += "<td id='{row:" + rowIndex + ", column:" + columnIndex + "}'></td>";
    }
    tableRow.push(withTag("tr", td));
    td = "";
  }
  document.getElementById("maze").innerHTML = withTag(
    "tbody",
    tableRow.join("\n")
  );
};

const actualPath = function() {
  let path = [
    "{row:1, column:0}",
    "{row:1, column:1}",
    "{row:2, column:1}",
    "{row:3, column:1}",
    "{row:3, column:2}",
    "{row:3, column:3}",
    "{row:2, column:3}",
    "{row:1, column:3}",
    "{row:1, column:4}"
  ];
  return path;
};

const highLightPath = function(document, path) {
  for (i of path) {
    document.getElementById(i).style.backgroundColor = "rgb(211,211,211)";
  }
};

const start = function() {
  let path = actualPath();
  createTable(document, 5);
  highLightPath(document, path);
};
