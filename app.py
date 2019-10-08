# app.py

#Ignore this for now - for uploading to website
# First line is the shebang, cgitb will provide better formatting for
# error messages. 
#!/usr/bin/env python
# -*- coding: UTF-8 -*-
# to allow debugging

import os
from flask import Flask, jsonify, render_template, redirect
import json
import pandas as pd

app = Flask(__name__)

#Below future calls for building the website - ignore for now
#@app.route("/")
#def index():
#    return render_template("index.html")

#@app.route("/aboutme")
#def index2():
#    return render_template("aboutme.html")

#if __name__ == '__main__':
#    app.run(debug=True)

#Building the Map (calling HTML, which then starts Javascript)
@app.route("/map")
def elec_map():
    return render_template("Map.html")

#Providing the geojson information to the javascript file
@app.route("/prov_geojson")
def prov():
    with open('static/data/electoral_districts.geojson', 'r') as read_file:
        data_test = json.load(read_file)
    
    return(jsonify(data_test))

if __name__ == "__main__":
    app.run(debug = True)