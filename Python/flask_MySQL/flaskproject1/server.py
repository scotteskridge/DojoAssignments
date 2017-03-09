from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    # return "you hit me from server but now ive moved.py"
    return render_template('index.html', name="Scott", times=2)

@app.route('/success')
def success():
  return render_template('success.html')

@app.route('/mylink')
def mylink():
  return render_template('mylink.html')

"""end"""
app.run(debug = True)
