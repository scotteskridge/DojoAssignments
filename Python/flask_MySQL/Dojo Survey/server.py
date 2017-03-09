from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/result', methods=["POST"])
def show_result():
    print "you got to /result"

    name =  request.form['name']
    print 'you got a name' + name
    location =  request.form['location']
    print 'you got a location' + location
    language =  request.form['language']
    print 'you got a language' + language
    message =  request.form['message']
    print 'you got a message'


    return render_template('result.html', name=name, location=location, language=language, message=message)


"""end"""
app.run(debug = True)
