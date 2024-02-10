import numpy as np
import pandas as pd
from tensorflow.keras.models import model_from_json
import threading
import os

from repository.core.ai.Luna import Luna


class LunaRepository:

    def __init__(self):
        self.luna = Luna()
        self._BASEPATH = f'{os.getcwd()}/server/repository/core/data'
        self.arquivo = open(f'{self._BASEPATH}/classifier_breast_json.json', 'r')
        self.classifier = None

    def predict(self, exam):
        structure = self._load()

        self.classifier.load_weights(f'{self._BASEPATH}/weights_breast_for_classification.h5')

        new_exam = np.array(exam.to_list())
        predicted = self.classifier.predict(new_exam)
        diagnosis = predicted > 0.80
        if diagnosis[0][0]:
            return f"Mr. Physician, this person contains ::: {predicted[0][0] * 100:.2f}% of chance of containing a breast cancer. " \
                   f"I recommend to start the tretament as soon as possible"
        else:
            return f"Mr. Physician, this person contains ::: {predicted[0][0] * 100:.2f}% of chance of containing a breast cancer."

    def _load(self):
        structure = self.arquivo.read()
        self.classifier = model_from_json(structure)
        self.arquivo.close()
        return structure
