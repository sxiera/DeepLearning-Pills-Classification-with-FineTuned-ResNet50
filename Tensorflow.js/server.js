document.getElementById('uploadForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const imageInput = document.getElementById('imageInput');
    const file = imageInput.files[0];
    
    if (file) {
        // Load model
        const model = await tf.loadLayersModel('path_to_your_model/model.json');
        
        // Read the image and process it
        const image = await loadImage(file);
        const tensor = preprocessImage(image);
        
        // Predict
        const prediction = model.predict(tensor);
        prediction.print(); // Log the prediction output
        
        // Process prediction and show results
        const predictionData = prediction.dataSync();
        const predictedClassIndex = predictionData.indexOf(Math.max(...predictionData));
        
        const classes = ['Ascozin', 'Bioflu', 'Biogesic', 'Bonamine', 'Buscopan', 'DayZinc', 'Decolgen', 
            'Flanax', 'Imodium', 'Lactezin', 'Lagundi', 'Midol', 'Myra_E', 'Neurogen_E', 'Omeprazole', 
            'Rinityn', 'Rogin_E', 'Sinecod', 'Tempra', 'Tuseran'];
        const predictedClass = classes[predictedClassIndex];
        
        const confidence = (Math.max(...predictionData) * 100).toFixed(2);
        
        document.getElementById('predictionResult').innerHTML = `
            <h2>Prediction: ${predictedClass}</h2>
            <h3>Confidence: ${confidence}%</h3>
        `;
    }
});

async function loadImage(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function(event) {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    });
}

function preprocessImage(image) {
    return tf.browser.fromPixels(image)
        .resizeNearestNeighbor([224, 224])
        .expandDims(0)
        .toFloat()
        .div(tf.scalar(255)); // Normalization (0-255 to 0-1)
}
