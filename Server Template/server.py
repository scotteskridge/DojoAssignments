from flask import Flask, render_template, request, redirect, session
from mysqlconnection import MySQLConnector

app = Flask(__name__)

# import the Connector function


# connect and store the connection in "mysql" note that you pass the database name to the function
mysql = MySQLConnector(app, 'twitter')
# an example of running a query
test= mysql.query_db("SELECT * FROM users")

@app.route('/')
def index():
    return render_template('index.html', test=test)



"""end"""
app.run(debug = True)
