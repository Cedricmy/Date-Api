const config = {
    MONGO_DB_URL:"mongodb://localhost:27017/flortApp",
    MONGO_DB_URL_DEBUG:"",
    PORT:process.env.PORT || 3300,
    PRIVATE_KEY:"25357928199409236124",
    API_ROUTE:"api/",
    MIN_PASSWORD_LENGTH:6,
    AUTHORIZATION:"Bearer ",
    PROD:false,
    ONE_SIGNAL_ID:"07c482f4-70a5-42e5-a5d1-81008b128e0b",
    ONE_SIGNAL_SECRET:"NDI1MWY4YTQtNjg1Yy00MGNiLTlhODYtM2I3MmNhNjkyOGY5",
    HOST:"http://195.85.207.173:3300",
    APP_NAME:"FlörtApp",
    EMAIL: "flortapp@gmail.com",
    AUTHOR:"FlortApp",
}
module.exports = config