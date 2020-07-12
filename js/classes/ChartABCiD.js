'use strict'

export class ChartABCiD{

    setCanvasId(canvasId){
        this.canvasId = canvasId;
    }

    setType(type){
        this.type = type;
    }

    setLabels(labels){
        this.labels = labels;
    }

    setMainLabel(label){
        this.mainLabel = label;
    }

    setData(data){
        this.data = data;
    }

    setBackgroundColor(backgroundColor){
        this.backgroundColor = backgroundColor;
    }

    setBorderColor(borderColor){
        this.borderColor = borderColor;
    }

    build(){
        var ctx = document.getElementById(this.canvasId).getContext('2d');
        var chart = new Chart(ctx, {
            type: this.type,
            data: {
                labels: this.labels,
                datasets: [{
                    label: this.mainLabel,
                    data: this.data,
                    backgroundColor: this.backgroundColor,
                    borderColor: this.borderColor,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
}
