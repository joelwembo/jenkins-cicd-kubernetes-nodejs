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
                git url: 'https://github.com/joelwembo/jenkins-cicd-nodejs.git' 
            }
        }
        stage('Dependencies') {
            steps{
            sh 'npm ci'
            }
        }

        stage('Unit Test 1'){
            steps{
                sh "npm run test"
            }
        }
        
        stage('Build'){
            steps{
                // sh 'docker stop $(docker ps | grep "joelwembo/node-app:latest" | cut -d " " -f 1)'
                sh 'docker build -t joelwembo/node-app:latest .'
            }
        }
         stage('Login') {
          steps {
            sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
          }
        }
        stage('Push') {
          steps {
            sh 'docker push joelwembo/node-app:latest'
          }
        }
        stage('Manuel Test'){
            steps{
                sh "npm run test"
            }
        }
        stage('Deploy'){
            steps{
                // sh "docker run -d --name node-todo-app -p 80:80 joelwembo/node-app:latest"
                sh 'docker ps'
                sh 'docker image ls'
                sh 'docker images --filter "reference=node-app*"'
                sh 'cd ~'
                sh 'cd apps'
                sh 'git clone https://github.com/joelwembo/jenkins-cicd-nodejs.git'
                sh 'cd jenkins-cicd-nodejs'
                sh 'npm install --force'
                sh 'minikube ip'

            }
        }

        
    }
}
