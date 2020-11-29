from numpy import double
from repository.core.ai.Luna import Luna
from repository.LunaRepository import LunaRepository
from model.Exam import Exam

class LunaController:

    def __init__(self):
        self.exam = Exam()
        self.lunaRepository = LunaRepository()

    def predict(self,params):

        self.exam.radius_mean = double(params.get("radius_mean"))
        self.exam.texture_mean = double(params.get("texture_mean"))
        self.exam.perimeter_mean = double(params.get("perimeter_mean"))
        self.exam.area_mean = double(params.get("area_mean"))
        self.exam.smoothness_mean = double(params.get("smoothness_mean"))
        self.exam.compactness_mean = double(params.get("compactness_mean"))
        self.exam.concavity_mean = double(params.get("concavity_mean"))
        self.exam.concave_points_mean = double(params.get("concave_points_mean"))
        self.exam.symmetry_mean = double(params.get("symmetry_mean"))
        self.exam.fractal_dimension_mean = double(params.get("fractal_dimension_mean"))
        self.exam.radius_se = double(params.get("radius_se"))
        self.exam.texture_se = double(params.get("texture_se"))
        self.exam.perimeter_se = double(params.get("perimeter_se"))
        self.exam.area_se = double(params.get("area_se"))
        self.exam.smoothness_se = double(params.get("smoothness_se"))
        self.exam.compactness_se = double(params.get("compactness_se"))
        self.exam.concavity_se = double(params.get("concavity_se"))
        self.exam.concave_points_se = double(params.get("concave_points_se"))
        self.exam.symmetry_se = double(params.get("symmetry_se"))
        self.exam.fractal_dimension_se = double(params.get("fractal_dimension_se"))
        self.exam.radius_worst = double(params.get("radius_worst"))
        self.exam.texture_worst = double(params.get("texture_worst"))
        self.exam.perimeter_worst = double(params.get("perimeter_worst"))
        self.exam.area_worst = double(params.get("area_worst"))
        self.exam.smoothness_worst = double(params.get("smoothness_worst"))
        self.exam.compactness_worst = double(params.get("compactness_worst"))
        self.exam.concavity_worst = double(params.get("concavity_worst"))
        self.exam.concave_points_worst = double(params.get("concave_points_worst"))
        self.exam.symmetry_worst = double(params.get("symmetry_worst"))
        self.exam.fractal_dimension_worst = double(params.get("fractal_dimension_worst"))

        return self.lunaRepository.predict(self.exam)