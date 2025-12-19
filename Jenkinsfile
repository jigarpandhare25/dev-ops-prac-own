pipeline {
    agent any

    environment {
        APP_NAME = "form-backend"
        CONTAINER_NAME = "form-backend-container"
        PORT = "5000"
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $APP_NAME .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                docker rm -f $CONTAINER_NAME || true
                '''
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                docker run -d \
                --name $CONTAINER_NAME \
                -p $PORT:5000 \
                $APP_NAME
                '''
            }
        }
    }

    post {
        success {
            echo "✅ Backend deployed successfully on port 5000"
        }
        failure {
            echo "❌ Deployment failed"
        }
    }
}
