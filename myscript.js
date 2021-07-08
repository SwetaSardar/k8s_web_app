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

  if (i.includes("show") && i.includes("pod" || i.includes("pods"))) {
    var comb = " get pods ";
    code(comb);
  } else if (i.includes("create") && i.includes("deployment")) {
    var podname = prompt("Enter deployment Name", "ex-pod1");
    var imagename = prompt("Enter Image Name", "ex-centos");
    var comb = " create deployment " + podname + " " + " --image=" + imagename;
    code(comb);
  } else if (i.includes("create") && i.includes("pod")) {
    var podname = prompt("Enter Pod Name", "ex-pod1");
    var imagename = prompt("Enter Image Name", "ex-centos");
    var comb = " run " + podname + " " + " --image=" + imagename;
    code(comb);
  } else if (i.includes("show") && i.includes("pods")) {
    var comb = " get pods ";
    code(comb);
  } else if (i.includes("delete") && i.includes("pods")) {
    var podname = prompt("Enter Pod Name", "ex-pod1");
    var comb = " delete pod " + podname;
    code(comb);
  } else if (i.includes("scale") && i.includes("deployment")) {
    var dname = prompt("Enter Deployment Name", "ex-pod1");
    var r_no = prompt("Enter Required Replicas", "ex- 1-9");
    var comb = " scale deployment " + dname + " " + " --replicas=" + r_no;
    code(comb);
  } else if (i.includes("expose") && i.includes("deployment")) {
    var dname = prompt("Enter Deployment Name", "ex-pod1");
    var p_no = prompt("Enter Port No", "ex- 1-9");
    var comb =
      " expose deployment " +
      dname +
      " " +
      " --port=" +
      p_no +
      " --type=NodePort";
    code(comb);
  } else if (i.includes("clear") && i.includes("environment")) {
    var comb = " delete --all all";
    code(comb);
  } else if (i.includes("show") && i.includes("exposed") && i.includes("ip")) {
    var comb = " get service";
    code(comb);
  } else {
    alert("Please Enter valid string");
  }
}
