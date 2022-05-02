// const scanner = require('sonarqube-scanner');
import scanner from "sonarqube-scanner"

scanner(
    {
        serverUrl: "http://localhost:9000",
        login: "admin",
        password: "admin",
        options: {
            "sonar.sources": "./routes"
        },
    },
    () => process.exit()
);