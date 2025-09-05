# Multiclass Pill Classification using Fine-Tuned ResNet50

## Executive Summary
This project explores the use of deep learning to support healthcare safety. By fine-tuning a ResNet50 model, the system can classify images of pills into multiple categories. The solution demonstrates how computer vision can contribute to reducing medication errors and improving accessibility in healthcare services.


## Problem
Medication errors remain a significant issue in healthcare, often caused by misidentification of pills that look similar. These errors can lead to serious health risks, reduced trust in healthcare systems, and inefficiencies in patient care.  
**Goal:** Develop an automated solution that accurately classifies pills from images, assisting healthcare workers and communities in preventing mistakes and improving patient safety.

## Methodology
1. **Data Preparation**
   - Organized pill images into training, validation, and test datasets.
   - Applied preprocessing such as resizing, normalization, and data augmentation.

2. **Model Development**
   - Fine-tuned a pre-trained **ResNet50** model.
   - Added custom classification layers for multiclass outputs.

3. **Training & Validation**
   - Trained the model with transfer learning.
   - Evaluated performance using accuracy and loss.

4. **Deployment Readiness**
   - Exported the trained model for reuse in healthcare-related applications.
   - Maintained a clear project structure for reproducibility and collaboration.

## Skills Applied
- **Deep Learning & Computer Vision** (TensorFlow / Keras, CNNs, transfer learning)
- **Data Preparation** (image preprocessing, augmentation, dataset structuring)
- **Software Practices** (Git/GitHub, reproducible workflows)
- **Analytical Thinking** (model evaluation, error analysis)

## Results
- Fine-tuned ResNet50 achieved strong classification performance of 96%.
- Outperformed baseline CNN approaches in distinguishing between similar-looking pills.
- Reduced misclassification risk compared to manual inspection.

## Recommendations for Social Impact
- **Healthcare Support:** Integrate the model into pharmacy and hospital systems to assist staff in verifying medications.  
- **Accessibility:** Extend to mobile or web applications for communities and patients to self-check pills.  
- **Scalability:** Expand dataset coverage to include more pill types and diverse real-world conditions (lighting, backgrounds, packaging).  
- **Sustainability:** Regularly retrain the model with new data to maintain reliability as new medications are introduced.  

