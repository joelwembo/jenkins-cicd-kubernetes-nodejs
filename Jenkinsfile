pipeline {
    agent any
    options {
        buildDiscarder(logRotator(numToKeepStr: '5'))
      }
      environment {
        DOCKERHUB_CREDENTIALS = credentials('globaldockerhub')
      }

    tools { nodejs "NodeJS"}
    
    stages{
        stage('Code'){
            steps{
                git url: 'https://github.com/joelwembo/jenkins-cicd-nodejs.git', branch: 'main' 
            }
        }
        stage('Dependencies') {
            sh 'npm ci'
        }
        stage('Build'){
            steps{
                sh 'docker build -t node-app:latest .'
            }
        }
         stage('Login') {
          steps {
            sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
          }
        }
        stage('Push') {
          steps {
            sh 'docker push joelwembo.com/node-todo-test:latest'
          }
        }
        stage('Deploy'){
            steps{
                sh "docker run -d --name node-todo-app -p 4000:4000 node-app:latest"
            }
        }

        stage('Manuel Test'){
            steps{
                sh "npm run test"
            }
        }
    }
}
