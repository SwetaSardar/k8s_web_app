function code(k) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://192.168.99.108/cgi-bin/k8s.py?x=" + k, true);
  xhr.send();

  xhr.onload = function out() {
    var output = xhr.responseText;
    document.getElementById("d1").innerHTML = output;
  };
}

function f1() {
  var i = document.getElementById("in1").value;

  if (i.includes("show") &&  i.includes("pods")) {
    var comb = " get pods ";
    code(comb);
  } else if (i.includes("create") && i.includes("deployment")) {
    var podname = prompt("Enter deployment Name");
    var imagename = prompt("Enter Image Name");
    var comb = " create deployment " + podname + " " + " --image=" + imagename;
    code(comb);
  } else if (i.includes("create") && i.includes("pod")) {
    var podname = prompt("Enter Pod Name");
    var imagename = prompt("Enter Image Name");
    var comb = " run " + podname + " " + " --image=" + imagename;
    code(comb);
  } else if (i.includes("show") && i.includes("pods")) {
    var comb = " get pods ";
    code(comb);
  } else if (i.includes("delete") && i.includes("pods") || i.includes("pod")) {
    var podname = prompt("Enter Pod Name");
    var comb = " delete pod " + podname;
    code(comb);
	  
  } else if (i.includes("delete") && i.includes("deployment")) {
    var podname = prompt("Enter deployment Name");
    var comb = " delete deployment " + podname;
    code(comb);
  } else if (i.includes("scale") && i.includes("deployment")) {
    var dname = prompt("Enter Deployment Name", "existing pod name");
    var r_no = prompt("Enter Required Replicas", "ex- 1-9");
    var comb = " scale deployment " + dname + " " + " --replicas=" + r_no;
    code(comb);
  } else if (i.includes("expose") && i.includes("deployment")) {
    var dname = prompt("Enter Deployment Name", "existing deploy name");
    var p_no = prompt("Enter Port No", "ex- 1-9");
    var comb =
      " expose deployment " +
      dname +
      " " +
      " --port=" +
      p_no +
      " --type=NodePort";
    code(comb);
  } else if (i.includes("clear") || i.includes("delete") && i.includes("environment") || i.includes("env")) {
    var comb = " delete --all all";
    code(comb);
  } else if (i.includes("show") && i.includes("exposed") && i.includes("service")) {
    var comb = " get service";
    code(comb);
  } else {
    alert("Please Enter valid command");
  }
}
