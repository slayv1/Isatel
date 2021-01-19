var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    
    type: 'doughnut',
    data: {
    
       
        datasets: [{
            data: [15,80],
           
            backgroundColor: [
                '#11FF00',
            ],
            borderColor: [
                '#2C3C5D',
               
            ],
           
            borderWidth: 5
        }]
    },
    
    options: {
        title: {
            display: true,
            
            
        }
    },
    
    options: {
        layout: {
            padding: {
                left: 50,
                right: 50,
                top: 110,
                bottom: 15,
            }
        }
    }
    
});
