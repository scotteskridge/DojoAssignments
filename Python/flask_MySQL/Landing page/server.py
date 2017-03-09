from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    # return "you hit me from server but now ive moved.py"
    return render_template('index.html')

@app.route('/dojos')
def dojos():
    return render_template('dojos.html')

@app.route('/ninjas')
def ninjas():
    return render_template('ninjas.html')

@app.route('/dojos/myform')
def myform():
    return render_template('myform.html')

"""end"""
app.run(debug = True)
