from flask import Flask, render_template, request, redirect, session, flash, url_for, escape, request
from flask_bcrypt import Bcrypt
import re
from mysqlconnection import MySQLConnector


EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
bcrypt=Bcrypt(app)
app.secret_key = 'scott1'
# import the Connector function


# connect and store the connection in "mysql" note that you pass the database name to the function
mysql = MySQLConnector(app, 'thewall')
# an example of running a query
test= mysql.query_db("SELECT * FROM users")

@app.before_request
def before_request():
    if 'logged_in' not in session:
        session["user"] = "New User"
    if 'emailmessage' not in session:
        session['emailmessage'] = 'not logged in'

@app.route('/')
def index():
    print session['emailmessage']
    print session["user"]
    print "you are here"

    return render_template('index.html', test=test, user=session["user"], emailmessage = session['emailmessage'])

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/registration')
def registration():
    return render_template('registration.html')

@app.route('/confirmregistration', methods=["POST"])
def confirmregistration():
    errors=[]
    print "your trying to confirm"
    emailmessage =session['emailmessage']
    print emailmessage
    if len(request.form['first_name'])<2:
        errors.append('first_name field needs to be at least 2 characters long!')
        print errors
    if len(request.form['last_name'])<2:
        errors.append('last_name field needs to be at least 2 characters long!')
        print errors
    if not len(request.form['email']):
        errors.append("email field can't be blank!")
        print errors
    if len(request.form['pw'])<2:
        errors.append('password field needs to be at least 8 characters long!')
        print errors
    if len(request.form['pwconfirm'])<2:
        errors.append('password confirmation needs to be at least 8 characters long!')
        print errors

    if not EMAIL_REGEX.match(request.form['email']):
        print errors
        errors.append('Enter a valid email')
    else:
        print "error2"
        query = "SELECT * FROM users WHERE email=:form_email"
        data = {
                "form_email": request.form["email"]
        }
        if mysql.query_db(query, data):
            errors.append("email already in use")
    if not errors:
        #hash the PW
        hashed_pw = bcrypt.generate_password_hash(request.form['pw'])
        #CREATE NEW USER
        query = "INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES (:first_name, :last_name, :email, :hashed_pw, NOW(), NOW())"
        data = {
        'first_name': request.form['first_name'],
        'last_name':  request.form['last_name'],
        'email': request.form['email'],
        'hashed_pw': hashed_pw}
        mysql.query_db(query, data)

    else:
        for error in errors:
            flash(error)
        return redirect('/registration')



    return redirect('/index')

@app.route('/confirmlogin', methods=["POST"])
def confirmlogin():
    return redirect('/')

@app.route('/postmessage', methods=["POST"])
def postmessage():
    return redirect('/')

@app.route('/postcomment', methods=["POST"])
def postcomment():
    return redirect('/')

@app.route('/logout', methods=["GET"])
def logout():
    session.clear()
    return redirect('/')

@app.route('/success', methods=["GET"])
def success():
    query = "SELECT first_name. last_name FROM users WHERE id = :session_user_id"
    data = {
        "session_user_id" : session["user_id"]
    }

    return render_template()

"""end"""
app.run(debug = True)
