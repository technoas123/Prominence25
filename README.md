# Prominence 25 - Official Tech Fest Website

## 🌐 Live Demo
[🔗 Visit the Website]((https://prominence25.vercel.app/))

## 📌 About the Project
This is the official website for the ECE department tech fest at RIT Kottayam. This website provides event details, registration, a gallery of past fests and contact details. It also includes interactive 3D elements for an engaging user experience.

## 🚀 Features
- 🎨 **Modern & Interactive UI**
- 📅 **Event Listings & Details**
- 📸 **Gallery Section**
- 📬 **Contact Form**
- 🎭 **3D Elements using Three.js**
- 🔥 **Responsive Design**

## 🛠 Tech Stack
- **Frontend**: React.js, Vite, Three.js, CSS
- **Hosting**: Vercel 

## 📂 Project Structure
```
Prominence25/
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable UI components
│   ├── pages/       # Pages like Home, Events, Contact
│   ├── App.jsx      # Main App Component
│   ├── main.jsx     # React entry point
├── .gitignore       # Files to ignore in Git
├── vite.config.js   # Vite Configuration
├── package.json     # Dependencies & Scripts
├── README.md        # Project Documentation
```

## 📦 Installation & Setup
### 🔹 Clone the Repository
```sh
git clone https://github.com/yourusername/Prominence25.git
cd Prominence25
```
### 🔹 Install Dependencies
```sh
npm install
```
### 🔹 Start the Development Server
```sh
npm run dev
```
### 🔹 Build for Production
```sh
npm run build
```

## 🚀 Deployment Guide
### **For Custom Domain (Using Vercel / Netlify)**
1. **Build the Project**
   ```sh
   npm run build
   ```
2. **Deploy to Hosting Service** (Vercel, Netlify, or a Custom Server)
3. **Ensure Correct Base Path** in `vite.config.js`
   ```js
   export default defineConfig({
     base: "/",
     plugins: [react()],
   });
   ```
4. **Push to GitHub & Deploy**

## 📌 Contributing
Want to contribute? Follow these steps:
1. **Fork the repo**
2. **Create a branch** (`git checkout -b feature-branch`)
3. **Commit changes** (`git commit -m 'Added new feature'`)
4. **Push the branch** (`git push origin feature-branch`)
5. **Open a Pull Request**

## 📞 Contact
📧 **Email**: [ahammedsalahuddeen@gmail.com](mailto:ahammedsalahuddeen@gmail.com)  
🌐 **Website**: [(https://prominence25.vercel.app/)]((https://prominence25.vercel.app/))  
📌 **Maintainers**: Ahammed Salahuddeen & Team

---
🚀 *Built with ❤️ by Team Prominence 25*

