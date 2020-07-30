from server.repository.core.ai.Luna import Luna
from server.repository.LunaRepository import LunaRepository
from server.model.Exam import Exam

class LunaController:

    def __init__(self):
        self.exam = Exam()
        self.lunaRepository = LunaRepository()

    def predict(self,params):

        self.exam.radius_mean = params.get("radius_mean")
        self.exam.texture_mean = params.get("texture_mean")
        self.exam.perimeter_mean = params.get("perimeter_mean")
        self.exam.area_mean = params.get("area_mean")
        self.exam.smoothness_mean = params.get("smoothness_mean")
        self.exam.compactness_mean = params.get("compactness_mean")
        self.exam.concavity_mean = params.get("concavity_mean")
        self.exam.concave_points_mean = params.get("concave_points_mean")
        self.exam.symmetry_mean = params.get("symmetry_mean")
        self.exam.fractal_dimension_mean = params.get("fractal_dimension_mean")
        self.exam.radius_se = params.get("radius_se")
        self.exam.texture_se = params.get("texture_se")
        self.exam.perimeter_se = params.get("perimeter_se")
        self.exam.area_se = params.get("area_se")
        self.exam.smoothness_se = params.get("smoothness_se")
        self.exam.compactness_se = params.get("compactness_se")
        self.exam.concavity_se = params.get("concavity_se")
        self.exam.concave_points_se = params.get("concave_points_se")
        self.exam.symmetry_se = params.get("symmetry_se")
        self.exam.fractal_dimension_se = params.get("fractal_dimension_se")
        self.exam.radius_worst = params.get("radius_worst")
        self.exam.texture_worst = params.get("texture_worst")
        self.exam.perimeter_worst = params.get("perimeter_worst")
        self.exam.area_worst = params.get("area_worst")
        self.exam.smoothness_worst = params.get("smoothness_worst")
        self.exam.compactness_worst = params.get("compactness_worst")
        self.exam.concavity_worst = params.get("concavity_worst")
        self.exam.concave_points_worst = params.get("concave_points_worst")
        self.exam.symmetry_worst = params.get("symmetry_worst")
        self.exam.fractal_dimension_worst = params.get("fractal_dimension_worst")

        return self.lunaRepository.predict(self.exam)