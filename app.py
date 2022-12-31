from flask import Flask, render_template, request, jsonify, redirect
from flask_cors import CORS, cross_origin
import openai as ai


app = Flask(__name__)
apik = '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'
ai.api_key = apik
app.config['SECRET_KEY'] = 'the quick brown fox jumps over the lazy   dog'
app.config['CORS_HEADERS'] = 'Content-Type'

CORS(app, support_credentials=True)

model_engine = "text-davinci-003"
prompt = "Name of top 10 highest mountains in the world"


# @app.route("/" , methods= ["GET"])
@app.route("/", methods=['POST'])
def index():
    if request.method == 'POST':
        prompt = request.get_json(force=True)

    #     prompt = request.get_json(force=True)
    #     print(prompt)
    #     # dt = request.form.get('text',None)
        completion = ai.Completion.create(
            engine=model_engine,
            prompt=prompt['text'],
            max_tokens=1024,
            temperature=1,
            top_p=1,
            frequency_penalty=0,
            presence_penalty=0
        )
        # data = {'data' : completion.choices[0].text}

        return jsonify(completion.choices[0].text)
    # return {'data':'error'}


@app.route('/edit')
def edit():
    data = {"data": "This is edit page"}
    return jsonify(data)


app.run()
