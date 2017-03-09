from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'scott1!'


# @app.before_first_request
# def startup():
#     session['counter'] = 0
@app.route('/', methods=['GET', 'POST'])
def index():
    print "do i get here?"

    if 'counter' not in session:
        session['counter'] = 0
    else:
        session['counter'] += 1

    # counter =  request.form['name']
    return render_template('index.html', counter = session['counter'])

@app.route('/add', methods=['POST'])
def add():
    session['counter'] += 1
    return redirect('/')

@app.route('/addmore', methods=['POST'])
def addmore():
    print "your adding more"
    amount = int(request.form['amount'])
    print amount

    session['counter'] += amount-1
    return redirect('/')

@app.route('/clear', methods=['POST'])
def clear():
    # session['counter'] =-1
    session.clear()
    return redirect('/')
"""end"""
app.run(debug = True)
