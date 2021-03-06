from flask import Flask, render_template, request, redirect, session, flash, url_for, escape, request
import re
from mysqlconnection import MySQLConnector

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
app.secret_key = 'scott1'
# import the Connector function


# connect and store the connection in "mysql" note that you pass the database name to the function
mysql = MySQLConnector(app, 'twitter')
# an example of running a query
test= mysql.query_db("SELECT * FROM users")

@app.route('/')
def index():
    return render_template('index.html', test=test)

@app.route('/login')
def login():
    return render_template('login.html')

"""end"""
app.run(debug = True)
