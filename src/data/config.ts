const config = {
  title: "Lokesh Devireddy | Cloud & DevOps Engineer",
  description: {
    long: "Explore the portfolio of Lokesh Devireddy, a Cloud & DevOps Engineer and Information Technology student passionate about AWS, Linux, DevOps, Web Development, and building scalable cloud solutions. Discover my projects, internship experience, and technical journey.",
    short:
      "Portfolio of Lokesh Devireddy, a Cloud & DevOps Engineer, IT student, and AWS enthusiast.",
  },
  keywords: [
    "Lokesh Devireddy",
    "Cloud Engineer",
    "DevOps Engineer",
    "AWS",
    "Linux",
    "Git",
    "GitHub",
    "Docker",
    "Nginx",
    "React",
    "Node.js",
    "MongoDB",
    "Web Development",
    "Cloud Computing",
    "Information Technology",
    "Portfolio",
  ],
  author: "Lokesh Devireddy",
  email: "mailtolokeshdevireddy@gmail.com",

  site: "https://lokeshreddy.me",

  githubUsername: "lokeshreddydevireddy",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },

  social: {
    twitter: "https://x.com/LDevireddy78456",
    linkedin: "https://www.linkedin.com/in/lokeshreddydevireddy/",
    github: "https://github.com/lokeshreddydevireddy",
    instagram: "https://in.pinterest.com/redloki/"
  },
};

export { config };