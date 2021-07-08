#!/usr/bin/python3

import cgi
import subprocess 



print("content-type: text/html")
print()

field =  cgi.FieldStorage()
cmd = field.getvalue("x") 

print(subprocess.getoutput(" sudo kubectl " + cmd +  " --kubeconfig admin.conf") 