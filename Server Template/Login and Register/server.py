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

# @app.before_request
# def before_request():


@app.route('/')
def index():

    if 'logged_in' not in session:
        session["logged_in"] = 'no'
    if "user" not in session:
        session["user"] = "New User"

    if "userid" not in session:
        session["userid"] = "none"
    if 'emailmessage' not in session:
        session['emailmessage'] = 'not logged in'




    return render_template('index.html', test=test, user=session["user"], emailmessage = session['emailmessage'])

@app.route('/login')
def login():

    return render_template('login.html')
@app.route('/loginconfirm', methods=["POST"])
def loginconfirm():
    errors=[]
    #check that user email and pw are valid

    if len(request.form['email'])<2:
        errors.append('Email too short!')
    if len(request.form['pw'])<2:
        errors.append('password field needs to be at least 8 characters long!')

    if not EMAIL_REGEX.match(request.form['email']):
        errors.append('No matching email please register')
        #check unique email address
    else:
        query = "SELECT * FROM users WHERE email=:form_email"
        data = {
                "form_email": request.form["email"]
        }

        #look and see if the email is in the database
        if not mysql.query_db(query, data):
            errors.append("No matching email please register")

    if not errors:
        #rehash the password and then look in db and find the password for the user of this email address, use the email as it is the only unique identifier
        hashed_pw = bcrypt.generate_password_hash(request.form['pw'])

        query = "SELECT * FROM users WHERE email=:form_email"
        data = {
                "form_email": request.form["email"]
        }
        user = mysql.query_db(query, data)

            #compare the provided pw to the hashed_pw
        if bcrypt.check_password_hash(user[0]['pw'],request.form["pw"]):

            session["user"] = user[0]["first_name"]
            session["userid"] = user[0]["id"]
            session['logged_in'] = "yes"

            return redirect("/")
        else:

            errors.append("Invalid Password")
            for error in errors:
                flash(error)
            return redirect('/login')



            #else store user id and return to home
    else:
        for error in errors:
            flash(error)
        return redirect('/login')

    return render_template('login.html')


    session["user"] = str(query[id])


@app.route('/registration')
def registration():
    return render_template('registration.html')

@app.route('/confirmregistration', methods=["POST"]) #i made a whole nother router here that likely isn't needed see if you can collapse this into the above
def confirmregistration():
    errors=[]

    emailmessage =session['emailmessage']

    if len(request.form['first_name'])<2:
        errors.append('first_name field needs to be at least 2 characters long!')

    if len(request.form['last_name'])<2:
        errors.append('last_name field needs to be at least 2 characters long!')

    if not len(request.form['email']):
        errors.append("email field can't be blank!")

    if len(request.form['pw'])<2:
        errors.append('password field needs to be at least 8 characters long!')

    if len(request.form['pwconfirm'])<2:
        errors.append('password confirmation needs to be at least 8 characters long!')


    if not EMAIL_REGEX.match(request.form['email']):

        errors.append('Enter a valid email')
        #check unique email address
    else:
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
        query = "INSERT INTO users (first_name, last_name, email, pw, created_at, updated_at) VALUES (:first_name, :last_name, :email, :hashed_pw, NOW(), NOW())"
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



    return redirect('/login')

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



"""end"""
app.run(debug = True)
