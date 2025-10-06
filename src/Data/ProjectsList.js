export const Projects = [
    {
        id: 0,
        Name: "IPRO Chicago Lead Service Line Analysis",
        Description: `Led a team of five in a data-driven analysis of Chicago's lead service lines to support optimized replacement strategies. Conducted data cleaning,
        geocoding, and spatial analysis using Python and Geocoding APIs to prioritize replacements based on equity metrics and cost modeling and provide various 
        visualizations of Chicagos service lines.`,
        Bullets: [
        "Conducted data-driven analysis of Chicago’s lead service lines to support optimized replacement strategies.",
        "Cleaned and geocoded service line data using Python (Pandas) and both Census and Google geocoding APIs.",
        "Used geopandas to perform spatial joins and map service lines to census tracts and street centerlines.",
        "Built a FastAPI backend with cKDTree spatial indexing to return nearby service lines for Chicago residents.",
        "Analyzed equity metrics (e.g., Area Deprivation Index, child population) to prioritize underserved communities.",
        "Developed a cost model to estimate service line replacement timelines based on block-level factors.",
        "As team lead made sure progress was being made and deadlines were met. Also facilitated communications for team."
        ],
        Link: "https://github.com/obinmahfoudh/Chicago-Service-Lines" 
    },
    {
        id: 1,
        Name: "Naive Bayes Implementation",
        Description: "Implemented the Naive Bayes algorithm from scratch in Python.",
        Bullets: [
        "Implemented the algorithm without using external libraries.",
        "Used a dataset of tweets to do sentiment analysis.",
        "Analyzed the model's accuracy and performance on test data."
        ],
        Link: "https://github.com/obinmahfoudh/Academic_Portfolio/tree/main/Natural%20Language%20Processing/Naive_Bayes_Logistic_Regression"
    },
    {
        id: 2,
        Name: "Regression Analysis on Housing Dataset",
        Description: "Created a regression model to predict house prices based on various features.",
        Bullets: [
        "Created an initial regression model",
        "Checked performance of model then did diagnostics testing to determine areas for improvement",
        "Found problems with multicollinearity and heteroscedasticity and features with low p-values",
        "Implemented Weighted Least Squares regression to address heteroscedasticity and interaction terms to address multicollinearity",
        ],
        Link: "https://github.com/obinmahfoudh/Academic_Portfolio/tree/main/Regression"
    }
];