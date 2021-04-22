module.exports = { 
    packages: {
        "aws-amplify-angular": {
            entryPoints: {
                ".": {
                    override: {
                        main: undefined
                    }
                },
                "auth": {
                    override: {
                        main: undefined
                    }
                },
                "manager": {
                    override: {
                        main: undefined
                    }
                },
                "grid": {
                    override: {
                        main: undefined
                    }
                },
                "resource": {
                    override: {
                        main: undefined
                    }
                }
            }
        }
    }
}