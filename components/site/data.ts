export const profile = {
    name: "Hritika Shankhdhar",
    first: "Hritika",
    role: "AI/ML Developer",
    email: "hritika08shankhdhar@gmail.com",
    phone: "",
    location: "Bhubaneswar, India",
    github: "https://github.com/Hritika-Shankhdhar",
    linkedin: "https://www.linkedin.com/in/hritika-shankhdhar-2821b7334/",
    education: "B.Tech in Computer Science & Engineering · KIIT Bhubaneswar · 2024–2028",
};

export type Theme = "yellow" | "orange" | "red" | "dark";

export type Project = {
    title: string;
    category: string;
    period: string;
    description: string;
    tech: string[];
    stats: string[];
    theme: Theme;
    logo?: string;
    liveUrl?: string;
    sourceUrl?: string;
};

const gh = (repo: string) => `https://github.com/Hritika-Shankhdhar/${repo}`;

export const projects: Project[] = [
    {
        title: "HoneyBee",
        category: "ERROR PATTERN CLASSIFIER",
        period: "2026",
        description:
            "Snap a photo of a solution and HoneyBee reads it, verifies the maths symbolically and pinpoints exactly what went wrong. Expo app backed by a FastAPI pipeline with OCR, LaTeX extraction and a fine-tuned transformer that classifies 13 kinds of mistakes.",
        tech: ["React Native", "Expo Router", "FastAPI", "PyTorch", "Transformers", "OCR"],
        stats: ["13 error classes", "Fine-tuned classifier", "Symbolic math check"],
        theme: "yellow",
        sourceUrl: "https://github.com/SkSin19/Honey-Bee",
    },
    {
        title: "Cartoonify",
        category: "Generative AI · Image-to-Image",
        period: "2026",
        description:
            "Turns any photo into cartoon artwork using diffusion models served through the Hugging Face Inference API. Four style presets - standard, cartoon, Ghibli and comic - plus custom prompts, usable from the CLI or as a Python API. Built with Palak for Computational Photography.",
        tech: ["Python", "Diffusion Models", "Hugging Face", "PyTorch", "Pillow"],
        stats: ["4 style presets", "img2img diffusion", "CLI + Python API"],
        theme: "orange",
        sourceUrl: gh("CP_Project_2dToCartoonConverter"),
    },
    {
        title: "Lung Cancer Survival",
        category: "Healthcare ML",
        period: "2025",
        description:
            "Predicts lung-cancer survival from clinical and lifestyle data, then clusters patients into risk profiles with K-Means and PCA. SMOTE handles the heavy class imbalance; Random Forest feature importance surfaces age, BMI and cholesterol as the key drivers.",
        tech: ["Scikit-learn", "Pandas", "SMOTE", "K-Means", "PCA"],
        stats: ["890K patient records", "3 risk clusters", "Ensemble models"],
        theme: "red",
        sourceUrl: gh("cancer-survival-prediction"),
    },
    {
        title: "Play Store Ratings",
        category: "Predictive Modelling",
        period: "2025",
        description:
            "Predicts how well an app will be rated on the Google Play Store from its category, size, reviews and installs. A stacking ensemble over Logistic Regression, SVM and Random Forest beat every single model by a wide margin.",
        tech: ["Python", "Scikit-learn", "Stacking", "SVM", "Seaborn"],
        stats: ["95% accuracy", "0.988 AUC", "10.8K apps"],
        theme: "dark",
        sourceUrl: gh("google-play-store-app-rating-prediction"),
    },
    {
        title: "Personality Predictor",
        category: "Behavioural Classification",
        period: "2025",
        description:
            "Classifies people as introverts or extroverts from social behaviour - time spent alone, event attendance, friend-circle size and stage fear. Compared Logistic Regression, Random Forest, voting and stacking ensembles.",
        tech: ["Python", "Scikit-learn", "Random Forest", "Pandas", "Matplotlib"],
        stats: ["93% accuracy", "0.945 AUC", "4 models compared"],
        theme: "yellow",
        sourceUrl: gh("Personality-prediction-using-Machine-Learning"),
    },
];

export const smallProjects = [
    { title: "Wee Planet", kind: "Computer vision", subtitle: "360° panorama → seam-free polar planet", tech: ["Python", "OpenCV", "NumPy"] },
    { title: "ShramiKare", kind: "Web app", subtitle: "Digital health IDs for workers", tech: ["React", "TypeScript", "Tailwind"] },
    { title: "DSA Practice", kind: "Ongoing", subtitle: "LeetCode & GeeksforGeeks solutions", tech: ["Java", "Algorithms"] },
];

export const experience: {
    role: string;
    org: string;
    period: string;
    place: string;
    description: string;
    tags: string[];
    link?: { label: string; href: string };
}[] = [
    {
        role: "Lead",
        org: "FED",
        period: "Present",
        place: "KIIT Bhubaneswar",
        description:
            "Holding a leading position at FED - the Federation of Entrepreneurship and Development - helping run the society, its team and its events for student founders and builders.",
        tags: ["Leadership", "Entrepreneurship", "Team Management", "Events"],
    },
    {
        role: "B.Tech CSE Student",
        org: "KIIT University",
        period: "2024 – 2028",
        place: "Bhubaneswar, Odisha",
        description:
            "Studying Computer Science & Engineering with a focus on machine learning, computer vision and computational photography.",
        tags: ["Machine Learning", "Computer Vision", "Data Structures"],
    },
    {
        role: "Independent ML Projects",
        org: "Open Source",
        period: "2025 – Present",
        place: "GitHub",
        description:
            "Building end-to-end ML projects - from cleaning raw datasets and EDA to ensemble models and generative image pipelines - and publishing them openly.",
        tags: ["Python", "Scikit-learn", "Generative AI"],
        link: { label: "GitHub profile", href: profile.github },
    },
];

export const stats = [
    { label: "Best model accuracy", value: "95%", theme: "yellow" as Theme },
    { label: "Largest dataset", value: "890K", theme: "orange" as Theme },
    { label: "ML projects built", value: "6+", theme: "red" as Theme },
    { label: "Graduating", value: "2028", theme: "dark" as Theme },
];

export const steps = [
    {
        n: "01",
        title: "Understand",
        body: "Start with the question, not the model - what decision should this prediction support, and what does a mistake cost?",
    },
    {
        n: "02",
        title: "Explore",
        body: "Clean the data, fix imbalance, and use EDA and visualisation to see which features actually carry signal.",
    },
    {
        n: "03",
        title: "Model",
        body: "Baselines first, then ensembles, transformers or diffusion models - compared honestly on accuracy, F1 and AUC.",
    },
    {
        n: "04",
        title: "Ship & Explain",
        body: "Wrap the model in a usable CLI, API or app and explain what drives its predictions, including where it fails.",
    },
];

export const toolkit = [
    {
        title: "Machine Learning",
        items: ["Scikit-learn", "Ensembles: stacking & voting", "Clustering: K-Means & PCA", "Imbalanced data (SMOTE)"],
    },
    {
        title: "Deep Learning & GenAI",
        items: ["PyTorch", "Transformers", "Diffusion models", "Hugging Face"],
    },
    {
        title: "Data & Vision",
        items: ["Pandas / NumPy", "Matplotlib / Seaborn", "OpenCV", "Jupyter"],
    },
    {
        title: "Languages",
        items: ["Python", "Java", "TypeScript", "SQL"],
    },
    {
        title: "Tools",
        items: ["Git / GitHub", "VS Code", "React / Tailwind", "Linux"],
    },
    {
        title: "Beyond code",
        items: ["Problem solving", "DSA practice", "Team projects", "Clear communication"],
    },
];
