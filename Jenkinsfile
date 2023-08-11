pipeline {
    agent any

    tools { nodejs "NodeJS"}
    
    stages{
        stage('Code'){
            steps{
                git url: 'https://github.com/joelwembo/jenkins-cicd-nodejs.git', branch: 'main' 
            }
        }
        stage('Build and Test'){
            steps{
                sh 'docker build . -t joelwembo/node-todo-test:latest'
            }
        }
        stage('Push'){
            steps{
                // withCredentials([usernamePassword(credentialsId: 'dockerHub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
        	     sh "docker login -u joelwembo -p dckr_pat_R6TOt_udjMePNIXmlgth8jhSe8g"
                 sh 'docker push joelwembo.com/node-todo-test:latest'
                // }
            }
        }
        stage('Deploy'){
            steps{
                sh "docker-compose down && docker-compose up -d"
            }
        }
    }
}
