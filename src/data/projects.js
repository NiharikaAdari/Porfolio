export const projects = [
  {
    id: 1,
    title: "Intelligent Study Assistant: StudyKeet",
    description: "An AI-powered study assistant that helps students learn faster using the Feynman Technique.",
    longDescription: "StudyKeet is an intelligent study assistant designed to boost learning outcomes by guiding students through the Feynman Technique—prompting users to explain concepts in simple terms, then generating precise, personalized feedback. The system integrates Retrieval-Augmented Generation (RAG), embeddings-based search, and LLMs to assess conceptual understanding and highlight gaps in knowledge. Built with React, Node.js, Python, and modern AI tooling, StudyKeet demonstrates full-stack engineering, AI/ML integration, prompt engineering, and user-centered learning design.",
    skills: ["React", "Node.js", "RAG", "LLMs", "AI/ML Integration", "Python", "Full=Stack Development", "Vector Databases", "Prompt Engineering", "REST APIs"],
    images: [],
    video: "https://youtu.be/eoNofYqlFH0",
    githubLink: "https://github.com/NiharikaAdari/studykeetapp",
    liveLink: "https://www.linkedin.com/posts/niharika-adari-9b5519253_im-happy-to-share-this-ai-powered-study-activity-7238994467666497538-oO59?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6L_1kB4JOOOivUFQnxgcKZLeiaXrjlK84"
  },
  {
    id: 2,
    title: "ClipArtStickers: Online-Enterprise-Management-System",
    description: "A full-stack enterprise web application for managing customers, products, and orders with role-based access and real-time inventory updates.",
    longDescription: "ClipArtStickers is a full-stack enterprise management system that supports both customer-facing shopping features and admin-level business operations. The application includes account registration, login, product browsing, ordering, and order-history views for customers. Admins can manage users, modify roles, add/edit/delete products, and update shipping dates and order statuses. The system integrates backend logic with a stored procedure to automatically update inventory based on order quantities. Built using Java, JSP, Spring Boot, and PostgreSQL, the project demonstrates enterprise application development, relational database design, backend architecture, and full-stack implementation. The solution uses JDBC Template for secure database communication, Maven for build automation, and Spring Boot’s embedded Tomcat server for deployment.",
    skills: ["Java","Spring Boot","JSP","PostgreSQL","JDBC Template","MVC Architecture","Full-Stack Development","Backend Development","RESTful Design","Maven","Enterprise Systems","Role-Based Access Control","Stored Procedures"],
    images: [
      require('./ClipArtStickers/1.jpg'),
      require('./ClipArtStickers/2.jpg'),
      require('./ClipArtStickers/3.jpg'),
      require('./ClipArtStickers/4.jpg'),
      require('./ClipArtStickers/5.jpg'),
      require('./ClipArtStickers/6.jpg'),
      require('./ClipArtStickers/7.jpg'),
      require('./ClipArtStickers/8.jpg'),
      require('./ClipArtStickers/9.jpg'),
      require('./ClipArtStickers/10.jpg'),
      require('./ClipArtStickers/11.jpg')
    ],
    video: null,
    githubLink: "https://github.com/NiharikaAdari/Online-Enterprise-Management-System",
    liveLink: "https://www.linkedin.com/posts/niharika-adari-9b5519253_clipartstickers-online-enterprise-management-system-activity-7152614537668546560-68C1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6L_1kB4JOOOivUFQnxgcKZLeiaXrjlK84"
  },
  {
    id: 3,
    title: "Cooking Mama: Recipe Recommendation System",
    description: "A personalized recipe recommendation app built with machine learning, web scraping, and real-time ingredient matching.",
    longDescription: "AThis project transforms 687 Cooking Mama recipes—collected through advanced web scraping—into a personalized, intelligent recipe recommendation system. I built a full ML pipeline that scrapes recipe data using BeautifulSoup, cleans and preprocesses it, and converts ingredient lists into TF-IDF vectors. Using cosine similarity and clustering, the system recommends recipes that best match ingredients users already have at home. To make the experience accessible, I built an interactive Flask web app featuring a smooth recipe-card carousel, loading animations, and hover-based ingredient previews for quick insights. The app also integrates OpenAI/ChatGPT to generate detailed preparation steps and personalized cooking instructions, enhancing the completeness and usability of each recommendation. This project demonstrates end-to-end development across data collection, exploratory data analysis, ML modeling, and deployment in a real-world web interface.",
    skills: ["Python","Flask","BeautifulSoup","Pandas","NumPy","Scikit-Learn","Exploratory Data Analysis","Cosine Similarity","Recommender Systems","Data Cleaning","Web Services API"],
    images: [
      require('./Recipe recommendation system/1.jpg'),
      require('./Recipe recommendation system/2.jpg'),
      require('./Recipe recommendation system/3.jpg')
    ],
    video: null,
    githubLink: "https://github.com/NiharikaAdari/Cooking-Mama-Recipe-Recommendations",
    liveLink: "https://www.linkedin.com/posts/niharika-adari-9b5519253_recipe-recommendation-app-cooking-mama-activity-7167756238879977472-Hu2L?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6L_1kB4JOOOivUFQnxgcKZLeiaXrjlK84"
  },
  {
    id: 4,
    title: "Who's That Pokémon? – Generation 1 Classifier",
    description: "An interactive image-classification web app that identifies Generation 1 Pokémon using a custom CNN and dynamic silhouette generation.",
    longDescription: "This project is a playful yet technically robust web application that classifies Generation 1 Pokémon images using a custom Convolutional Neural Network (CNN) built with TensorFlow and Keras. Users can upload any Pokémon image, instantly receive a prediction, and view a dynamically generated silhouette to mimic the classic 'Who's That Pokémon?' game. The system includes real-time image processing, sprite rendering, and sound playback for an immersive experience. I developed and trained the CNN model in Jupyter Notebook, optimized it through data preprocessing and augmentation, and deployed it using a Flask backend. The interactive frontend—built with HTML, CSS, and JavaScript—handles image uploads, silhouette generation, sprite viewing, and even Pokémon cry playback. This project showcases end-to-end machine learning deployment, model integration in web applications, and an engaging UI that blends nostalgia with modern ML techniques.",
    skills: ["Python","TensorFlow","Keras","Convolutional Neural Networks (CNN)","Deep Learning","Machine Learning","Flask","Image Classification","Image Processing","HTML","CSS","JavaScript","Model Deployment"],
    images: [
      require('./Pokemon/1.jpg'),
      require('./Pokemon/2.jpg'),
      require('./Pokemon/3.jpg')
    ],
    video: null,
    githubLink: "https://github.com/NiharikaAdari/Whos-that-Pokemon",
    liveLink: "https://www.linkedin.com/posts/niharika-adari-9b5519253_im-happy-to-share-this-whos-that-pokemon-activity-7164154212669456385-eTNY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6L_1kB4JOOOivUFQnxgcKZLeiaXrjlK84"
  },
  {
    id: 5,
    title: "Predict Laptop Prices – Regression-Based ML Web App",
    description: "A machine learning–powered price prediction app that uses multi-variable linear regression and an interactive Flask-based web interface.",
    longDescription: "Predict Laptop Prices is an end-to-end machine learning project that models laptop prices using multi-variable linear regression. I built the regression model with Scikit-Learn, performing feature engineering, data preprocessing, and evaluation—achieving an R² score of 0.81. Users can input hardware specifications and receive instant price predictions generated by the trained model.\n\nTo make the system accessible, I deployed it as a Flask web application with a clean, intuitive frontend using HTML, CSS, and JavaScript. The interface provides real-time form handling and dynamic prediction display, making the tool simple and interactive for non-technical users. This project demonstrates core skills in regression modeling, data science workflows, and integrating machine learning models into production-ready web applications.",
    skills: ["Python","Flask","Scikit-Learn","Linear Regression","Multi-Variable Regression","Machine Learning","Data Science","Pandas","NumPy","Model Deployment","HTML","CSS","JavaScript"],
    images: [
      require('./PredictLaptopPrices/1.jpg'),
      require('./PredictLaptopPrices/2.jpg'),
      require('./PredictLaptopPrices/3.jpg'),
      require('./PredictLaptopPrices/4.jpg')
    ],
    video: null,
    githubLink: "https://github.com/NiharikaAdari/Predict-Laptop-Prices",
    liveLink: null
  }
];
