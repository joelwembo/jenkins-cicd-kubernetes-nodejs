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
                bat 'docker build . -t joelwembo/node-todo-test:latest'
            }
        }
        stage('Pubat'){
            steps{
                // withCredentials([usernamePassword(credentialsId: 'dockerHub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
        	     bat "docker login -u joelwembo -p dckr_pat_R6TOt_udjMePNIXmlgth8jhSe8g"
                 bat 'docker pubat joelwembo.com/node-todo-test:latest'
                // }
            }
        }
        stage('Deploy'){
            steps{
                bat "docker-compose down && docker-compose up -d"
            }
        }
    }
}
